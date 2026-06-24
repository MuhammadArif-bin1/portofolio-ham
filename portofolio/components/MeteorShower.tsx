"use client";

import { useEffect, useRef } from "react";

interface Meteor {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  width: number;
}

interface TwinkleStar {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  maxOpacity: number;
}

export default function MeteorShower() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Initialize meteors
    const meteors: Meteor[] = [];
    const maxMeteors = 14;

    // Initialize background stars for a premium atmospheric feel
    const stars: TwinkleStar[] = [];
    const maxStars = 80;

    const createMeteor = (isInitial = false): Meteor => {
      const startX = Math.random() * (width + 300);
      return {
        x: startX,
        y: isInitial ? Math.random() * height : -50,
        length: Math.random() * 80 + 50,
        speed: Math.random() * 8 + 6,
        opacity: Math.random() * 0.6 + 0.4,
        width: Math.random() * 1.5 + 0.8,
      };
    };

    const createStar = (): TwinkleStar => {
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.2 + 0.4,
        opacity: Math.random(),
        twinkleSpeed: Math.random() * 0.015 + 0.005,
        maxOpacity: Math.random() * 0.6 + 0.2,
      };
    };

    // Populate initial elements
    for (let i = 0; i < maxMeteors; i++) {
      meteors.push(createMeteor(true));
    }
    for (let i = 0; i < maxStars; i++) {
      stars.push(createStar());
    }

    const resizeHandler = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeHandler);

    // Diagonal angle: 135 degrees (from top-right to bottom-left)
    const angle = (135 * Math.PI) / 180;
    const cosAngle = Math.cos(angle);
    const sinAngle = Math.sin(angle);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw twinkling background stars
      stars.forEach((star) => {
        star.opacity += star.twinkleSpeed;
        if (star.opacity > star.maxOpacity || star.opacity < 0.05) {
          star.twinkleSpeed = -star.twinkleSpeed;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(165, 243, 252, ${Math.max(0, star.opacity)})`; // soft cyan star
        ctx.fill();
      });

      // 2. Update and draw meteors
      for (let i = 0; i < meteors.length; i++) {
        const meteor = meteors[i];

        // Move meteor along the diagonal path (down-left)
        meteor.x += meteor.speed * cosAngle;
        meteor.y += meteor.speed * sinAngle;

        // Reset if it goes off screen (bottom or left)
        if (meteor.y > height + 100 || meteor.x < -100) {
          meteors[i] = createMeteor(false);
          continue;
        }

        // Draw meteor line with gradient tail
        const grad = ctx.createLinearGradient(
          meteor.x,
          meteor.y,
          meteor.x - meteor.length * cosAngle,
          meteor.y - meteor.length * sinAngle
        );

        // Gradient from bright cyan/white to transparent
        grad.addColorStop(0, `rgba(255, 255, 255, ${meteor.opacity})`);
        grad.addColorStop(0.1, `rgba(0, 255, 210, ${meteor.opacity * 0.8})`);
        grad.addColorStop(0.5, `rgba(0, 184, 255, ${meteor.opacity * 0.3})`);
        grad.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.beginPath();
        ctx.moveTo(meteor.x, meteor.y);
        ctx.lineTo(
          meteor.x - meteor.length * cosAngle,
          meteor.y - meteor.length * sinAngle
        );
        ctx.strokeStyle = grad;
        ctx.lineWidth = meteor.width;
        ctx.lineCap = "round";
        ctx.stroke();

        // Draw a glowing head for the meteor
        ctx.beginPath();
        ctx.arc(meteor.x, meteor.y, meteor.width * 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${meteor.opacity})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "#00ffd2";
        ctx.fill();
        ctx.shadowBlur = 0; // reset shadowBlur for other drawing
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeHandler);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
