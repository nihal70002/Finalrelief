// src/components/TestimonialsSection.jsx
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah L.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
    review: "Dr. Hyder gave me my life back. I can now play with my grandchildren without any pain. The entire process was smooth and professional."
  },
  {
    name: "Michael B.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4.5,
    review: "The care and attention to detail from Dr. Hyder and his team were outstanding. Highly recommended for anyone considering knee surgery."
  },
  {
    name: "Emily R.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    review: "I was nervous about surgery, but Dr. Hyder's confidence and clear explanations put me at ease. My recovery was faster than I expected."
  },
  {
    name: "John D.",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    rating: 5,
    review: "Amazing experience! Dr. Hyder and the staff were friendly and supportive throughout the whole process."
  },
  {
    name: "Anna K.",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    rating: 4,
    review: "I felt very comfortable and confident with the care I received from Dr. Hyder. Highly recommended."
  },
  {
    name: "Mark W.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 5,
    review: "Excellent service and follow-up from Dr. Hyder. My knee feels great now!"
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-background-light dark:bg-gray-900" id="testimonials">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-center text-gray-900 dark:text-white">
          What Our Patients Say About Dr. Hyder
        </h2>

        {/* Horizontal scrolling carousel */}
        <div className="relative overflow-hidden mt-12">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }} // move left
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear"
            }}
          >
            {testimonials.concat(testimonials).map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-background-dark p-6 rounded-xl shadow-lg flex-shrink-0 w-80"
              >
                <div className="flex items-center mb-4">
                  <img
                    alt="Patient photo"
                    className="w-12 h-12 rounded-full mr-4"
                    src={testimonial.image}
                  />
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">{testimonial.name}</p>
                    <div className="flex text-yellow-400">
                      {Array.from({ length: 5 }, (_, i) => {
                        if (i < Math.floor(testimonial.rating)) {
                          return <span key={i} className="material-symbols-outlined text-sm">star</span>;
                        } else if (i < testimonial.rating) {
                          return <span key={i} className="material-symbols-outlined text-sm">star_half</span>;
                        } else {
                          return <span key={i} className="material-symbols-outlined text-sm">star_outline</span>;
                        }
                      })}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{testimonial.review}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
