// src/components/TestimonialsSection.jsx
import React from "react";

const testimonials = [
  {
    name: "Sarah L.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgpmGG4Rk41a83tf65Q2hvW6Nxg_Gh5STQgIVAD-LBwB2aPzQ57FQofs1NpIDKNgbsXgqJMaUen131-T5fKIvGl0Kxu1DW3Dt1QaPq5za1N8_6WOM1KNuDODL73VXcXMTmn8GZj0IN2Rlk2cnqja2I9E3Ivq1x0KOdmhyfMaJTthfWkndux-rrjXwvg3uQlypBbryLem0xjPPEgNCzKYWqGmKOJR8Kl9PGQlgF9aJLOvL-KeWQaBFxxsNQ0xkdU8rSdqzeksRgNSk",
    rating: 5,
    review: "Dr. Doe gave me my life back. I can now play with my grandchildren without any pain. The entire process was smooth and professional."
  },
  {
    name: "Michael B.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuClLNP9ER-gebcjDvo8Ul-M85HtCHo6hDwsmoCBFPKY6ykL9qFOfXjQOeoNR0b3siIbrFof0rrfRFO_tqwy7U9sg9C65UdbQSl_c_hsEDB9fabA_224ThxKj_-mTusl2f3oodEfFcvlap949CESKdyH1nfmH_SbV7svfLXw5rsrkoqW3cnoA8nD8UCDLUEdms1vzB-ln9ztHuJQ0i4vUbDnpbOhTVqnCB7c2RQJLMU_2vEUphsS3TTx8P0ZznlA0HHGwhlRbFs1S4U",
    rating: 4.5,
    review: "The care and attention to detail from Dr. Doe and his team were outstanding. Highly recommended for anyone considering knee surgery."
  },
  {
    name: "Emily R.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgygVaCpbnHmsRw8xPuuxAtUb_aSN4l_xmjZsbqBm-9U9mrTDDW761tAJkeDg91OWTpOuiER5YX57QU3RfqD1JknYNc0dsV4_gAV4HUv1yS7zlptxucnlRirVWgLOyqED-emJDC3NrwDuBQnqjWMKyrTy6lE8513uJMlKXgfoRvjAtmnLJIwnn42eyaoSM4QOjJpSZy2Fxt_atwcglmScVUzx38A1xNWxyIFmiauFzPZXmK-Oi2aG6lgLLJBMEFbN5-QRFZaVCneU",
    rating: 5,
    review: "I was nervous about surgery, but Dr. Doe's confidence and clear explanations put me at ease. My recovery was faster than I expected."
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-background-light dark:bg-gray-900" id="testimonials">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-center text-gray-900 dark:text-white">
          What Our Patients Say
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white dark:bg-background-dark p-6 rounded-xl shadow-lg">
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
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
