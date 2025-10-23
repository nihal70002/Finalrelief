// src/pages/ArthroscopicKneeSurgery.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircleIcon, UsersIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/react/24/solid'

const treatmentData = {
  id: "arthroscopic-knee-surgery",
  title: "Arthroscopic Minimally Invasive Knee Surgery",
  icon: "🦵",
  shortDesc: "Advanced minimally invasive surgery for various knee conditions.",

  stats: {
    duration: "60-90 mins",
    recoveryTime: "4-8 weeks",
    successRate: "90%+",
    type: "Surgical",
  },

  doctor: {
    name: "Dr. Hyder Kunnummla",
    title: "Expert Orthopedic Surgeon",
    experience: "20+ years",
    specialtyFocus: "Arthroscopic & Minimally Invasive Knee Surgery",
    patientsTreated: "3,500+",
    aclCount: "—",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=faces&fit=crop&h=200&w=200",
  },

  overview:
    "Arthroscopic knee surgery allows treatment of meniscus tears, cartilage repair, and ligament injuries through small incisions, minimizing tissue damage and speeding recovery.",

  idealFor:
    "Patients with meniscus tears, cartilage defects, ligament injuries, or persistent knee pain unresponsive to conservative treatment.",

  procedure: [
    "Step 1: Anesthesia and sterile preparation.",
    "Step 2: Small incisions to insert arthroscope and instruments.",
    "Step 3: Repair or remove damaged tissue using arthroscopic tools.",
    "Step 4: Closure of small incisions.",
    "Step 5: Initiate early physiotherapy and rehabilitation.",
  ],

  benefits: [
    "Minimally invasive with faster recovery.",
    "Reduced post-op pain and scarring.",
    "Precise repair of internal knee structures.",
    "Quick return to normal activities.",
  ],

  risks: [
    "Infection (low risk).",
    "Bleeding or swelling.",
    "Knee stiffness, improved with exercises.",
    "Rare nerve or blood vessel injury.",
  ],

  recovery: [
    "Day 1-3: Rest and pain management.",
    "Week 1-2: Gentle physiotherapy and limited weight-bearing.",
    "Weeks 3-4: Increased exercises, start daily activity.",
    "Weeks 4-8: Return to work and normal activity gradually.",
  ],

  mockPatientImages: [
    "https://via.placeholder.com/400x300?text=Arthroscopy+Surgery",
    "https://via.placeholder.com/400x300?text=Recovery+Exercise",
    "https://via.placeholder.com/400x300?text=X-Ray+Result",
  ],

  mockTestimonials: [
    {
      name: "Mr. Ramesh P.",
      text: "The minimally invasive surgery was amazing. Quick recovery and minimal pain.",
      image: "https://via.placeholder.com/100?text=R",
    },
    {
      name: "Ms. Anitha K.",
      text: "Professional team, smooth surgery, and I am back to jogging in weeks.",
      image: "https://via.placeholder.com/100?text=A",
    },
  ],
};

export default function ArthroscopicKneeSurgery() {
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
                  <p className="flex items-center gap-1 text-emerald-300"><CheckCircleIcon className="w-3 h-3"/> <strong>{treatment.doctor.aclCount}</strong> ACL</p>
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
            <h2 className="text-xl md:text-2xl font-bold mb-3">Key Benefits</h2>
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
              <p className="text-gray-700 mb-2">While arthroscopic surgery is safe, be aware of potential risks:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {treatment.risks.map((r, i) => <li key={i}>{r}</li>)}
              </ul>
            </div>
          </section>
        </div>

      

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
                    <p className="text-xs text-emerald-600">Arthroscopic Patient</p>
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
