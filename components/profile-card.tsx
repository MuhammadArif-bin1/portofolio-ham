export default function ProfileCard() {
  return (
    <div className="flex-1 relative">
      <div className="absolute -top-4 -left-4 w-full h-full bg-surface-container-highest rounded-xl -z-10"></div>
      <img
        alt="Professional portrait"
        className="w-full aspect-[4/5] object-cover rounded-xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
        src="profile.jpeg"
      />
    </div>
  );
}
