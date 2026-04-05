// src/components/TestimonialsSection.jsx
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  { name: "Ayesha Rahman", rating: 5, review: "Dr. Hyder gave me my life back. I can now move freely without knee pain. The treatment and care were excellent." },
  { name: "Muhammad Shafi", rating: 5, review: "Dr. Hyder and his team explained everything clearly. The surgery and recovery process were handled very professionally." },
  { name: "Fathima Noor", rating: 5, review: "I was very anxious before surgery, but Dr. Hyder gave me confidence. My recovery was smooth and faster than expected." },
  { name: "Abdul Rasheed", rating: 5, review: "Excellent experience from consultation to recovery. The staff were friendly and supportive throughout." },
  { name: "Safiya Basheer", rating: 4, review: "I felt very comfortable and safe under Dr. Hyder’s care. Highly recommended for knee-related treatments." },
  { name: "Shamsudheen K", rating: 5, review: "Very satisfied with the treatment and follow-up care. My knee pain has completely reduced." },
];

const TestimonialsSection = () => {
  return (
    // Section background is white to match the cards
    <section className="py-16 sm:py-24 bg-white dark:bg-gray-900" id="testimonials">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-center text-gray-900 dark:text-white mb-12">
          What Our Patients Say About Dr. Hyder
        </h2>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 15,
              ease: "linear"
            }}
          >
            {testimonials.concat(testimonials).map((testimonial, index) => (
              <div
                key={index}
                // CHANGED: white card on gray bg + border for extra definition
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex-shrink-0 w-85"
              >
                <div className="flex items-center mb-4">
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white text-lg">
                      {testimonial.name}
                    </p>
                    <div className="flex text-yellow-400 text-sm">
                      {/* Logic to render stars based on rating */}
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>{i < Math.floor(testimonial.rating) ? "★" : "☆"}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic leading-relaxed">
                  "{testimonial.review}"
                </p>
              </div>
            ))}
          </motion.div>
          
          {/* Gradient Overlays to make the edges fade out nicely */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white dark:from-gray-900 to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white dark:from-gray-900 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;