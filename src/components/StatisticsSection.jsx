import React, { useEffect, useRef, useState } from "react";

// Custom hook for count animation
const useCountUp = (endValue, startCounting) => {
  const [count, setCount] = useState(0);
  const duration = 2000;

  useEffect(() => {
    if (!startCounting) return;

    const start = performance.now();
    let frame;

    const animate = (time) => {
      const elapsed = time - start;
      const progress = Math.min(elapsed / duration, 1);
      const currentValue = Math.floor(progress * endValue);

      setCount(currentValue);

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [endValue, startCounting]);

  return count;
};

export default function StatisticsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      observer.disconnect();
    };
  }, [isVisible]);

  // ✅ Updated stats (doctor-focused credibility)
  const stats = [
    { label: "Knee Procedures Performed", value: 1000, suffix: "+" },
    { label: "Surgical Success Rate", value: 98, suffix: "%" },
    { label: "Years Experience", value: 30, suffix: "+" },
  ];

  return (
    <section
      id="statistics"
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors"
    >
      <div className="container mx-auto text-center px-4">

        {/* TITLE */}
        <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">
          Our Impact
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-3 gap-6">

          {stats.map((stat, idx) => (
            <StatCard
              key={idx}
              label={stat.label}
              endValue={stat.value}
              suffix={stat.suffix}
              isVisible={isVisible}
            />
          ))}

        </div>
      </div>
    </section>
  );
}

// --- Stat Card Component

const StatCard = ({ label, endValue, suffix, isVisible }) => {
  const count = useCountUp(endValue, isVisible);
  const formattedCount = new Intl.NumberFormat().format(count);

  return (
    <div
      className={`transition-all duration-1000 transform ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-5"
      }`}
    >
      <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-emerald-600 dark:text-emerald-400">
        {formattedCount}
        {suffix}
      </p>

      <p className="text-gray-700 dark:text-gray-400 mt-2 text-sm sm:text-lg">
        {label}
      </p>
    </div>
  );
};