import React, { useEffect, useRef, useState } from "react";

// Custom hook for the counting animation
const useCountUp = (endValue, startCounting) => {
  const [count, setCount] = useState(0);
  const duration = 2000; // 2 seconds for the animation

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
        setCount(endValue); // Ensure it lands exactly on the final value
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [endValue, startCounting]);

  return count;
};

// ---

export default function StatisticsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Use IntersectionObserver to detect when the section is in the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Only set to visible if it's intersecting AND we haven't already counted (to prevent re-running)
      if (entry.isIntersecting && !isVisible) {
        setIsVisible(true);
      }
    }, { threshold: 0.2 }); // Increased threshold slightly for better trigger

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      observer.disconnect();
    };
  }, [isVisible]); // Added isVisible to dependency array

  // Updated stats structure to separate the numeric value from the suffix
  const stats = [
    { label: "Patients Treated", value: 2500, suffix: "+" },
    { label: "Successful Surgeries", value: 98, suffix: "%" },
    { label: "Expert Surgeons", value: 15, suffix: "+" },
  ];

  return (
    <section id="statistics" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto text-center px-4"> {/* Added px-4 for better responsiveness */}
        <h2 className="text-3xl font-bold mb-12">Our Impact</h2>
        {/* Changed to a grid on small screens for better stacking, then back to flex on medium screens and up */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12"> 
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

// ---

// Separate component for the statistical card
const StatCard = ({ label, endValue, suffix, isVisible }) => {
  // Use the custom hook to get the current counting value
  const count = useCountUp(endValue, isVisible);

  // Format the number with a comma for the "Patients Treated" stat
  const formattedCount = new Intl.NumberFormat().format(count);

  return (
    <div
      // Use the transition on the inner card for a subtle fade-in when the counting starts
      className={`transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
    >
      <p className="text-5xl sm:text-4xl md:text-5xl font-extrabold text-emerald-600">
        {formattedCount}
        {suffix}
      </p>
      <p className="text-gray-700 mt-2 text-lg">{label}</p>
    </div>
  );
};