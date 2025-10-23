// src/components/TreatmentSection.jsx
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TreatmentSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const treatmentOptions = [
    {
      id: "total-knee-replacement",
      title: "Total Knee Replacement (TKR)",
      shortDesc: "Complete replacement of the knee joint for severe arthritis and damage.",
      duration: "1-2 hours",
      recoveryTime: "6-12 weeks",
      icon: "🦴"
    },
    {
      id: "partial-knee-replacement",
      title: "Partial Knee Replacement",
      shortDesc: "Targeted replacement of only the damaged portion of the knee.",
      duration: "1 hour",
      recoveryTime: "4-6 weeks",
      icon: "🏥"
    },
    {
      id: "minimally-invasive-surgery",
      title: "Minimally Invasive Knee Surgery",
      shortDesc: "Advanced techniques using smaller incisions for reduced trauma.",
      duration: "1-1.5 hours",
      recoveryTime: "3-6 weeks",
      icon: "✨"
    },
    {
      id: "arthroscopic-surgery",
      title: "Arthroscopic Knee Surgery",
      shortDesc: "Minimally invasive procedure using a camera to diagnose and treat knee problems.",
      duration: "30-60 minutes",
      recoveryTime: "2-4 weeks",
      icon: "🔬"
    },
    {
      id: "conservative-treatment",
      title: "Conservative Treatment",
      shortDesc: "Non-surgical approaches including physical therapy, medication, and lifestyle modifications.",
      duration: "Ongoing",
      recoveryTime: "Varies",
      icon: "💊"
    },
    {
      id: "acl-reconstruction",
      title: "ACL Reconstruction",
      shortDesc: "Surgical repair of a torn anterior cruciate ligament to restore knee stability.",
      duration: "1-2 hours",
      recoveryTime: "9-12 months",
      icon: "⚡"
    },
    {
      id: "meniscus-surgery",
      title: "Meniscus Repair/Surgery",
      shortDesc: "Surgical treatment for torn meniscus cartilage in the knee.",
      duration: "30-60 minutes",
      recoveryTime: "4-12 weeks",
      icon: "🎯"
    },
    {
      id: "revision-surgery",
      title: "Revision Knee Surgery",
      shortDesc: "Replacement or repair of a previous knee implant that has failed or worn out.",
      duration: "2-3 hours",
      recoveryTime: "8-16 weeks",
      icon: "🔧"
    }
  ];

  const handleTreatmentClick = (treatmentId) => {
    navigate(`/treatment/${treatmentId}`);
  };

  return (
    <section
      id="treatment"
      ref={sectionRef}
      className="min-h-screen py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Treatment Options
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Comprehensive surgical and non-surgical solutions tailored to your needs. 
            Click on any treatment to learn more about the procedure, benefits, and recovery process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {treatmentOptions.map((treatment, index) => (
            <div
              key={treatment.id}
              className={`group bg-white border-2 border-gray-200 rounded-xl p-6 cursor-pointer transition-all duration-500 hover:shadow-2xl hover:border-emerald-500 hover:-translate-y-2 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => handleTreatmentClick(treatment.id)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center group-hover:bg-emerald-500 transition-all duration-300 group-hover:scale-110">
                  <span className="text-3xl">
                    {treatment.icon}
                  </span>
                </div>
                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full">
                  {treatment.recoveryTime}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors leading-tight">
                {treatment.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {treatment.shortDesc}
              </p>
              
              <div className="flex items-center justify-between text-sm pt-4 border-t border-gray-100">
                <span className="text-gray-500 flex items-center gap-1">
                  ⏱️ {treatment.duration}
                </span>
                <span className="text-emerald-600 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Learn more →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}