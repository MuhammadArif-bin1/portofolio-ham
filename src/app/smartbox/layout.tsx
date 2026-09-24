import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smartbox Assistant : Asisten Ruang Pintar dengan Fitur AI",
  description:
    "Asisten ruang pintar berbasis IoT dan AI yang dirancang untuk memantau, mengontrol, dan menghibur pengguna di dalam ruangan dengan asisten suara AI dua arah.",
};

export default function SmartboxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
