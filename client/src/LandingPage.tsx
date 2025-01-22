export default function LandingPage() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">Notin Spoil</h1>

      {/* Subtitle */}
      <h2 className="text-xl font-medium mb-6">A Pidgin Learning Tool</h2>

      {/* Explanation */}
      <p className="text-center max-w-md text-gray-300 leading-relaxed">
        Learn Pidgin in a fun and interactive way! Whether you're a beginner or
        looking to sharpen your skills,
        <strong> Notin Spoil </strong> helps you master this vibrant language
        through engaging examples and real-world scenarios.
      </p>
    </div>
  );
}
