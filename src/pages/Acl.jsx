// src/pages/ACLReconstruction.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircleIcon, UsersIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/react/24/solid'

const treatmentData = {
  id: "acl-reconstruction",
  title: "ACL Reconstruction",
  icon: "🦵",
  shortDesc: "Restore knee stability and prevent further injury.",

  stats: {
    duration: "90-120 mins",
    recoveryTime: "3-6 months",
    successRate: "95%+",
    type: "Surgical",
  },

  doctor: {
    name: "Dr. Hyder Kunnummla",
    title: "Expert Orthopedic Surgeon",
    experience: "20+ years",
    specialtyFocus: "Sports Injuries & ACL Reconstruction",
    patientsTreated: "1,800+",
    aclCount: "900+",
    image: "https://www.westend61.de/en/photo/ADSF45908/front-view-of-positive-young-african-american-female-doctor-in-eyeglasses-uniform-and-stethoscope-smiling-and-looking-at-camera-while-standing-with-clipboard-in-hands-against-white-wall-in-daylight",
  },

  overview:
    "ACL reconstruction is a surgical procedure to replace a torn anterior cruciate ligament (ACL) in the knee. Modern arthroscopic techniques ensure smaller incisions, faster recovery, and strong knee stability.",

  idealFor:
    "Athletes or active individuals with complete or partial ACL tears needing restored knee stability.",

  procedure: [
    "Step 1: Anesthesia and preparation.",
    "Step 2: Arthroscopic examination and evaluation of ACL tear.",
    "Step 3: Removal of damaged ligament remnants.",
    "Step 4: Graft placement and fixation using screws or buttons.",
    "Step 5: Closure and initiation of early physiotherapy.",
  ],

  benefits: [
    "Restores knee stability.",
    "Enables return to sports or active lifestyle.",
    "Minimally invasive arthroscopic procedure.",
    "Reduces risk of further knee injuries.",
  ],

  risks: [
    "Infection (low risk).",
    "Graft failure (rare).",
    "Knee stiffness, usually resolves with physiotherapy.",
    "Blood clots, controlled with post-op care.",
  ],

  recovery: [
    "Week 1-2: Initial rest and gentle range-of-motion exercises.",
    "Weeks 3-6: Physiotherapy and partial weight-bearing.",
    "Weeks 6-12: Strengthening exercises, increase activity.",
    "Months 3-6: Return to sports gradually with physiotherapy guidance.",
  ],

  mockPatientImages: [
    "https://via.placeholder.com/400x300?text=ACL+Post-Op",
    "https://via.placeholder.com/400x300?text=ACL+Rehab",
    "https://via.placeholder.com/400x300?text=ACL+X-Ray",
  ],

  mockTestimonials: [
    {
      name: "Mr. Arun S.",
      text: "After ACL reconstruction, I could play football again without pain. Excellent care from Dr. Hyder!",
      image: "https://via.placeholder.com/100?text=A",
    },
    {
      name: "Ms. Priya R.",
      text: "Professional, friendly, and precise surgery. My knee feels stable and strong.",
      image: "https://via.placeholder.com/100?text=P",
    },
  ],
};

export default function ACLReconstruction() {
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
            <h2 className="text-xl md:text-2xl font-bold mb-3">Key Benefits of ACL Surgery</h2>
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
              <p className="text-gray-700 mb-2">While ACL reconstruction is safe, be aware of potential risks:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {treatment.risks.map((r, i) => <li key={i}>{r}</li>)}
              </ul>
            </div>
          </section>
        </div>

        {/* Patient Gallery */}
        <section>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 border-b-2 border-emerald-200 pb-1">Patient Success Stories & Results</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {treatment.mockPatientImages.map((src, idx) => (
              <img key={idx} src={src} alt={`Patient ${idx+1}`} className="rounded-lg shadow-md w-full h-40 object-cover hover:shadow-lg"/>
            ))}
          </div>
        </section>

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
                    <p className="text-xs text-emerald-600">ACL Patient</p>
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
