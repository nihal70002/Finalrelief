import React, { useEffect, useRef, useState } from "react";
import ShinyText from "../ShinyText/ShinyText";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer to trigger animation on visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 relative overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-4 sm:top-20 sm:left-10 md:top-20 md:left-20 w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-white/10 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl animate-pulse" />
        <div
          className="absolute bottom-10 right-4 sm:bottom-20 sm:right-10 md:bottom-20 md:right-20 w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-teal-800/20 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-blue-800/20 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Dotted pattern overlay */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] bg-repeat scale-75 sm:scale-100"
        />
      </div>

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content container */}
      <div
        className={`relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* === TEXT CONTENT === */}
          <div className="text-white z-10 space-y-3 sm:space-y-5 text-center lg:text-left order-2 lg:order-1 max-w-xl mx-auto lg:mx-0">
            {/* Tagline */}
            <div className="inline-block">
              <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase bg-white/20 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full backdrop-blur-sm">
                Medical Excellence
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight sm:leading-tight">
              <ShinyText
                text="KEEPS YOU"
                speed={3}
                disabled={!isVisible}
                className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80"
              />
              <span className="block text-white drop-shadow-lg">MOVING</span>
            </h1>

            {/* Subheading */}
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white/90">
              Walk with us, we care
            </h2>

            {/* Description */}
            <ShinyText
              text="Our duty is to restore your knee health and improve your mobility and quality of life with expert consultation and personalized care."
              speed={2}
              disabled={!isVisible}
              className="block text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-r from-white/80 to-white/50 max-w-md mx-auto lg:mx-0 leading-relaxed font-serif"
            />

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center lg:justify-start">
              <button
                onClick={() => {
                  const contact = document.getElementById("contact");
                  contact?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-white text-blue-600 px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl text-sm sm:text-base"
              >
                Book Consultation →
              </button>

              <button className="border-2 border-white text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm text-sm sm:text-base">
                Learn More
              </button>
            </div>
          </div>

          {/* === IMAGE CONTENT === */}
          <div className="relative z-10 flex flex-col items-center order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-teal-400 to-blue-500 opacity-30 filter blur-3xl animate-blob group-hover:animate-none transition-all duration-500" />

              {/* Doctor image */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 sm:border-6 md:border-8 border-white/40 shadow-2xl group-hover:border-white/60 transition-all duration-500 bg-gradient-to-br from-white/20 to-transparent backdrop-blur-sm">
                <img
                  src="/Demo.png"
                  alt="Doctor Profile"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Doctor info */}
            <div className="mt-4 text-center">
              <h3 className="text-white text-lg sm:text-xl font-bold">
                Dr. Hyder
              </h3>
              <p className="text-white/80 text-sm sm:text-base">
                MBBS, MS (Orthopedics)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
