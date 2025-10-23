import React, { useEffect, useRef, useState } from "react";

export default function StatisticsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { label: "Patients Treated", value: "2,500+" },
    { label: "Successful Surgeries", value: "98%" },
    { label: "Expert Surgeons", value: "15+" },
  ];

  return (
    <section id="statistics" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Our Impact</h2>
        <div className="flex flex-col md:flex-row justify-center gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-4xl font-bold text-emerald-600">{stat.value}</p>
              <p className="text-gray-700 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
