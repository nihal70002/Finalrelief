// src/pages/PartialKneeReplacement.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircleIcon, UsersIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/react/24/solid'

const treatmentData = {
  id: "partial-knee-replacement",
  title: "Partial Knee Replacement (PKR)",
  icon: "🦵",
  shortDesc: "Targeted knee repair for faster recovery.",

  stats: {
    duration: "60-90 mins",
    recoveryTime: "4-6 weeks",
    successRate: "90%+",
    type: "Surgical",
  },

  doctor: {
    name: "Dr. Hyder Kunnummla",
    title: "Expert Orthopedic Surgeon",
    experience: "20+ years",
    specialtyFocus: "Robotic & Minimally Invasive PKR",
    patientsTreated: "2,500+",
    pkrCount: "1,200+",
    image: "https://www.westend61.de/en/photo/ADSF45908/front-view-of-positive-young-african-american-female-doctor-in-eyeglasses-uniform-and-stethoscope-smiling-and-looking-at-camera-while-standing-with-clipboard-in-hands-against-white-wall-in-daylight",
  },

  overview:
    "Partial knee replacement, also known as unicompartmental knee arthroplasty (UKA), replaces only the damaged compartment of the knee. This minimally invasive procedure preserves healthy tissue and allows quicker rehabilitation.",

  idealFor:
    "Patients with damage in a single compartment of the knee, usually due to localized arthritis, and who want to maintain more natural knee function.",

  procedure: [
    "Step 1: Anesthesia and Preparation: General or spinal anesthesia is administered.",
    "Step 2: Precise Incision: Small incision targeting only affected knee compartment.",
    "Step 3: Removal of Damaged Tissue: Only the diseased bone and cartilage are removed.",
    "Step 4: Implant Placement: Partial knee implant is fitted precisely.",
    "Step 5: Closure and Recovery: Wound closed; early physiotherapy begins.",
  ],

  benefits: [
    "Less invasive than total knee replacement.",
    "Faster recovery and shorter hospital stay.",
    "Preserves healthy knee compartments.",
    "Improved natural knee movement.",
  ],

  risks: [
    "Low risk of infection.",
    "Blood clots, managed post-op.",
    "Temporary stiffness, improved with physiotherapy.",
    "May require conversion to total knee replacement in the future.",
  ],

  recovery: [
    "Day 1-2: Hospital stay and gentle weight-bearing.",
    "Week 1-2: Home recovery with physiotherapy.",
    "Weeks 3-4: Walking independently; light activities.",
    "Weeks 4-6: Return to normal activities; full strength recovers in 6-8 weeks.",
  ],

  mockPatientImages: [
    "https://via.placeholder.com/400x300?text=PKR+Post-Op+Walking",
    "https://via.placeholder.com/400x300?text=PKR+Patient+Smiling",
    "https://via.placeholder.com/400x300?text=PKR+X-Ray",
  ],

  mockTestimonials: [
    {
      name: "Mr. Suresh P.",
      text: "Partial knee replacement by Dr. Hyder helped me regain mobility quickly. The process was smooth and less painful.",
      image: "https://via.placeholder.com/100?text=S",
    },
    {
      name: "Mrs. Meera K.",
      text: "I had severe pain in one compartment, and PKR was perfect. Professional and caring surgeon!",
      image: "https://via.placeholder.com/100?text=M",
    },
  ],
};

export default function PartialKneeReplacement() {
  const navigate = useNavigate();
  const treatment = treatmentData;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="container mx-auto px-4 py-2">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors text-sm"
          >
            <span>←</span>
            <span className="font-semibold">Back to Treatments</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center text-4xl shadow-md flex-shrink-0">
              {treatment.icon}
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold mb-2">{treatment.title}</h1>
              <p className="text-emerald-100 text-base md:text-lg font-light">{treatment.shortDesc}</p>
            </div>
          </div>

          {/* Doctor Info */}
          <div className="max-w-5xl mx-auto bg-gray-800 bg-opacity-95 p-4 rounded-xl border border-emerald-500 shadow-lg backdrop-blur-md">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <img
                src={treatment.doctor.image}
                alt={treatment.doctor.name}
                className="w-20 h-20 rounded-full border-3 border-emerald-400 object-cover shadow-lg flex-shrink-0"
              />
              <div>
                <h3 className="text-xl font-bold text-emerald-50">{treatment.doctor.name}</h3>
                <p className="text-emerald-200 italic text-sm">{treatment.doctor.title} - {treatment.doctor.specialtyFocus}</p>
                <div className="grid grid-cols-2 lg:flex gap-3 mt-2 text-xs">
                  <p className="flex items-center gap-1 text-emerald-300"><ClockIcon className="w-3 h-3"/> <strong>{treatment.doctor.experience}</strong> Exp</p>
                  <p className="flex items-center gap-1 text-emerald-300"><UsersIcon className="w-3 h-3"/> <strong>{treatment.doctor.patientsTreated}</strong> Patients</p>
                  <p className="flex items-center gap-1 text-emerald-300"><CheckCircleIcon className="w-3 h-3"/> <strong>{treatment.doctor.pkrCount}</strong> PKR</p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Stats */}
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
            {Object.entries(treatment.stats).map(([key, value], idx) => (
              <div key={idx} className="bg-gray-900 bg-opacity-85 rounded-lg p-3 shadow-md text-center transform hover:scale-105 transition-transform duration-300">
                <span className="text-[10px] font-semibold uppercase tracking-wide text-emerald-400 block mb-1">
                  {key.replace(/([A-Z])/g, ' $1')}
                </span>
                <p className="text-2xl font-bold text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-5xl space-y-12">
        {/* Overview */}
        <section>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 border-b-2 border-emerald-200 pb-1">Treatment Overview</h2>
          <p className="text-gray-700 text-sm md:text-base mb-4">{treatment.overview}</p>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-emerald-900 mb-2 flex items-center gap-2">
              <ShieldCheckIcon className="w-5 h-5 text-emerald-600"/> Who is this treatment for?
            </h3>
            <p className="text-gray-700 text-sm">{treatment.idealFor}</p>
          </div>
        </section>

        {/* Procedure & Benefits */}
        <div className="grid md:grid-cols-2 gap-6">
          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-3">The Procedure: Step-by-Step</h2>
            {treatment.procedure.map((step, idx) => (
              <div key={idx} className="flex gap-3 items-start mb-4 border-b pb-2 last:border-b-0">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm shadow-md mt-1">{idx + 1}</div>
                <p className="text-gray-700 text-sm">{step}</p>
              </div>
            ))}
          </section>
          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-3">Key Benefits of PKR</h2>
            <ul className="space-y-2 text-gray-700 text-sm">
              {treatment.benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1"/>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Recovery & Risks */}
        <div className="grid md:grid-cols-2 gap-6">
          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-3">Recovery Timeline</h2>
            <ul className="space-y-2 text-gray-700 bg-white p-4 rounded-lg shadow-sm text-sm">
              {treatment.recovery.map((r, i) => (
                <li key={i} className="flex items-start gap-2 border-b pb-1 last:border-b-0">
                  <ClockIcon className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1"/>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="text-xl md:text-2xl font-bold mb-3">Potential Risks</h2>
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg shadow-sm text-sm">
              <p className="text-gray-700 mb-2">While PKR is safe, be aware of potential risks:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {treatment.risks.map((r, i) => <li key={i}>{r}</li>)}
              </ul>
            </div>
          </section>
        </div>

        {/* Patient Gallery */}
       

        {/* Testimonials */}
        <section>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 border-b-2 border-emerald-200 pb-1">What Our Patients Say</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {treatment.mockTestimonials.map((t, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg shadow-md border-t-4 border-emerald-500 text-sm">
                <p className="text-gray-600 italic mb-2">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
                  <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover border-2 border-emerald-400"/>
                  <div>
                    <p className="font-bold text-gray-900">{t.name}</p>
                    <p className="text-xs text-emerald-600">PKR Patient</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-emerald-700 text-white p-6 rounded-xl shadow-md text-center mt-12">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-2">Ready to Walk Without Pain?</h2>
          <p className="text-sm md:text-base mb-4 text-emerald-100">Take the first step towards a pain-free life. Book a consultation with Dr. Hyder Kunnummla.</p>
          <button onClick={() => alert("Navigate to Booking Page")} className="bg-white text-emerald-700 hover:bg-emerald-50 font-bold text-sm md:text-base py-2 px-6 rounded-full shadow-sm hover:scale-105 transition-transform">
            Book Your Consultation Now
          </button>
        </section>
      </div>
    </div>
  );
}
