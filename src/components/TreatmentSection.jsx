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
      
      recoveryTime: "6-12 wks",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBeU9DWn6LIpel42xHoAleNWs7TPfcTqeqCeoLUGH_s6bug1K_JnZtccZsP6jexutDvT66wBMmWePSq06AtL9E_THU9a5LrImroXYgAp1GuQRjQyFMjTxuGb48p2Q5Z789ThdswZ2o3n-B5Vw5eNXgGIzPKj_I5a5EXpqSpTPc4MrkfvEe5B1n0bkJAWHAJyU5eJmQmxOfpfqmn7rkCZ03CfvEJX4ShsEpJnC-x1l1et85jXxl_j2aL8QfErLUZi5YxWOvju7jJDsji"
    },
    {
      id: "partial-knee-replacement",
      title: "Partial Knee Replacement",
      shortDesc: "Targeted replacement of only the damaged portion of the knee.",
      
      recoveryTime: "4-6 wks",
      image:"Par.jpeg"
    },
    {
      id: "minimally-invasive-surgery",
      title: "Minimally Invasive Surgery",
      shortDesc: "Advanced techniques using smaller incisions for reduced trauma.",
      
      recoveryTime: "3-6 wks",
      image: "minimal.jpeg",
    },
    {
      id: "arthroscopic-surgery",
      title: "Arthroscopic Knee Surgery",
      shortDesc: "Minimally invasive procedure using a camera to diagnose and treat knee problems.",
      
      recoveryTime: "2-4 wks",
      image: "Art.jpeg",
    },
    {
      id: "conservative-treatment",
      title: "Conservative Treatment",
      shortDesc: "Non-surgical approaches including physical therapy, medication, and lifestyle modifications.",
      
      recoveryTime: "Varies",
      image: "/conse.jpeg",
    },
    {
      id: "acl-reconstruction",
      title: "ACL Reconstruction",
      shortDesc: "Surgical repair of a torn anterior cruciate ligament to restore knee stability.",
      
      recoveryTime: "9-12 months",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnBKAfpHfK4RlX-VGu2SOdU9ZhtDT2c5Lmq4MPpqaM_5QsWYNErJNYPJQTrSMhVO7vHT2rmdg0lObmaU1OVRmjhq-I_hCzkdV8svwe85kzjw_zae1WvTL6lKxWxXP0dJMHErMKrX7Z-w4OaTJXx8YYSFQlDM0GRnFC3JSvG9auEkbbWht2F9LJoHCIAQwf0Hm5HKgWUT98MCM5259PL-bqT7CJwEz9DGpCk2FnU_7T4CkFJNyH69gg3dQm_fi95A5E3X1WoiBUuBqS"
    },
    {
      id: "meniscus-surgery",
      title: "Meniscus Repair/Surgery",
      shortDesc: "Surgical treatment for torn meniscus cartilage in the knee.",
      
      recoveryTime: "4-12 wks",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAn1f0mcLZ8EbiKajdqlUhAeFQBCuTOuXRdwtpCjM7rpdmtulJPFzdEx9dbzOu3V2OlVTT3o4X0t9AGLyHVZR29K_TTJcvvJkHdcim7qBTz5TN4exk_ydxIZojXsI-ZZDyOEWyLwfZjMqwSPokkZPfALRCWkJZrgGYM7_eiEqDfHAIxEP_JdJhtLwNp85IHW7j3UUIJARSGBsoD7F0vFcxmutM-Pjlv-YjT0qWlUx1jNzCA4K3TzjqgmSem8jsrphWvIxx-4jijtqG1"
    },
    {
      id: "revision-surgery",
      title: "Revision Knee Surgery",
      shortDesc: "Replacement or repair of a previous knee implant that has failed or worn out.",
      
      recoveryTime: "8-16 wks",
      image: "/Revi.jpeg",
    }
  ];

  const handleTreatmentClick = (treatmentId) => {
    navigate(`/treatment/${treatmentId}`);
  };

  return (
    <section
      id="treatment"
      ref={sectionRef}
      className="min-h-screen py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
            Treatment Options
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base">
            Comprehensive surgical and non-surgical solutions tailored to your needs. 
            Click on any treatment to learn more about the procedure, benefits, and recovery process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto"> 
          {treatmentOptions.map((treatment, index) => (
            <div
              key={treatment.id}
              className={`group bg-white border border-gray-200 rounded-lg p-4 cursor-pointer transition-all duration-500 hover:shadow-xl hover:border-emerald-500 hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
              onClick={() => handleTreatmentClick(treatment.id)}
            >
              {treatment.image && (
                <div className="w-full h-32 bg-center bg-cover rounded-md mb-3" style={{ backgroundImage: `url(${treatment.image})` }}></div>
              )}

              {/* Removed icon/logo container */}

              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors leading-snug">
                {treatment.title}
              </h3>

              <p className="text-gray-600 text-xs mb-3 line-clamp-3">
                {treatment.shortDesc}
              </p>

              <div className="flex items-center justify-between text-xs pt-3 border-t border-gray-100">
                
                <span className="text-emerald-600 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Details →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
