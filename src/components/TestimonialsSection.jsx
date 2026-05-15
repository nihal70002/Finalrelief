// src/components/TestimonialsSection.jsx

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ayesha Rahman",
    rating: 5,
    review:
      "Dr. Hydar gave me my life back. I can now move freely without knee pain. The treatment and care were excellent.",
  },
  {
    name: "Muhammad Shafi",
    rating: 5,
    review:
      "Dr. Hydar and his team explained everything clearly. The surgery and recovery process were handled very professionally.",
  },
  {
    name: "Fathima Noor",
    rating: 5,
    review:
      "I was very anxious before surgery, but Dr. Hydar gave me confidence. My recovery was smooth and faster than expected.",
  },
  {
    name: "Abdul Rasheed",
    rating: 5,
    review:
      "Excellent experience from consultation to recovery. The staff were friendly and supportive throughout.",
  },
  {
    name: "Safiya Basheer",
    rating: 4,
    review:
      "I felt very comfortable and safe under Dr. Hydar’s care. Highly recommended for knee-related treatments.",
  },
  {
    name: "Shamsudheen K",
    rating: 5,
    review:
      "Very satisfied with the treatment and follow-up care. My knee pain has completely reduced.",
  },
];

export default function TestimonialsSection() {
  const [speed, setSpeed] = useState(15);
  const [paused, setPaused] = useState(false);

  // responsive animation speed
  useEffect(() => {
    if (window.innerWidth < 640) {
      setSpeed(8);
    }
  }, []);

  // pause handler (5 seconds)
  const pauseSlider = () => {
    setPaused(true);

    setTimeout(() => {
      setPaused(false);
    }, 5000);
  };

  return (
    <section
      className="py-16 sm:py-24 bg-white dark:bg-gray-900"
      id="testimonials"
    >
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

        {/* TITLE */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white">
          What Patients Say About Dr. Hydar
        </h2>

        {/* SUBTITLE */}
        <p className="text-center text-gray-500 dark:text-gray-400 mt-3 mb-12 max-w-xl mx-auto">
          Real recovery experiences from knee replacement patients treated with
          advanced orthopedic care.
        </p>

        {/* SLIDER */}
        <div className="relative overflow-hidden">

          <motion.div
            className="flex gap-5 sm:gap-6 cursor-grab active:cursor-grabbing"
            animate={
              paused
                ? { x: undefined }
                : { x: ["0%", "-50%"] }
            }
            transition={
              paused
                ? {}
                : {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: speed,
                  ease: "linear",
                }
            }
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragStart={pauseSlider}
          >
            {testimonials.concat(testimonials).map((testimonial, index) => (
              <div
                key={index}
                onClick={pauseSlider}
                className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex-shrink-0 w-[260px] sm:w-[320px]"
              >
                {/* NAME */}
                <p className="font-semibold text-gray-900 dark:text-white text-lg">
                  {testimonial.name}
                </p>

                {/* STARS */}
                <div className="flex text-yellow-400 text-sm mt-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>
                      {i < Math.floor(testimonial.rating) ? "★" : "☆"}
                    </span>
                  ))}
                </div>

                {/* REVIEW */}
                <p className="text-gray-600 dark:text-gray-300 italic leading-relaxed text-sm sm:text-base">
                  "{testimonial.review}"
                </p>
              </div>
            ))}
          </motion.div>

          {/* LEFT FADE */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-20 bg-gradient-to-r from-white dark:from-gray-900 to-transparent" />

          {/* RIGHT FADE */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-20 bg-gradient-to-l from-white dark:from-gray-900 to-transparent" />

        </div>
      </div>
    </section>
  );
}