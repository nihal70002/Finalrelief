// src/pages/Revision.jsx
import React, { useState } from "react";
import { Clock, Award, Activity, CheckCircle, ChevronDown, Eye } from "lucide-react";

export default function Revision() {
  const [expandedTimeline, setExpandedTimeline] = useState(null);
  const [expandedRisk, setExpandedRisk] = useState(null);

  const timelineData = {
    "First Week": "Rest and limited knee movement. Pain and swelling managed with medications and ice.",
    "2-6 Weeks": "Gradual physical therapy focusing on range-of-motion and strengthening exercises.",
    "6-12 Weeks": "Increased activity and partial weight-bearing as advised by the physiotherapist.",
    "3-6 Months": "Return to normal activities or sports under supervision; ongoing strengthening and flexibility work.",
  };

  const riskData = {
    Infection: "Low risk, proper wound care and antibiotics minimize chances.",
    "Knee Stiffness": "Temporary stiffness may occur; physiotherapy helps restore movement.",
    "Graft Failure": "Rare, depends on the prior surgery and overall knee condition.",
    "Re-injury": "Possible if post-op precautions are not followed.",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex justify-center">
      <div className="w-full max-w-6xl px-6 py-12 transform scale-75 origin-top mt-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-blue-600 mb-4 flex items-center justify-center gap-2">
            Revision Knee Surgery
            <Eye className="w-12 h-12" />
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Correct previous knee surgeries, restore joint function, and reduce pain with minimally invasive techniques.
          </p>
        </div>

        {/* Doctor & Stats Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div
            className="relative rounded-2xl h-96 w-full bg-cover bg-center"
            style={{ backgroundImage: `url('/Tkr.jpeg')` }}
          >
            <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-4">
              <Clock className="w-12 h-12 text-blue-500" />
              <div>
                <div className="text-2xl font-bold text-gray-800">120-180 Minutes</div>
                <div className="text-gray-600">Duration</div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-4">
              <Award className="w-12 h-12 text-blue-500" />
              <div>
                <div className="text-2xl font-bold text-gray-800">90%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-4">
              <Activity className="w-12 h-12 text-blue-500" />
              <div>
                <div className="text-2xl font-bold text-gray-800">4-8 Months</div>
                <div className="text-gray-600">Recovery Time</div>
              </div>
            </div>
          </div>
        </div>

        {/* Treatment Overview */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Treatment Overview</h2>
            <p className="text-gray-600 leading-relaxed">
              Revision knee surgery addresses complications or failures from prior knee procedures. Using modern arthroscopic techniques, surgeons repair, replace, or adjust previous grafts or implants to restore function and relieve pain.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ideal For</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <p className="text-gray-600">Patients with failed previous knee surgeries or persistent pain.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <p className="text-gray-600">Those seeking improved mobility and joint stability.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Procedure Steps */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Surgical Procedure Steps
          </h2>
          <div className="space-y-6">
            {[
              { num: 1, title: "Anesthesia", desc: "General or spinal anesthesia administered." },
              { num: 2, title: "Arthroscopic Access", desc: "Small incisions and arthroscope insertion." },
              { num: 3, title: "Revision Procedure", desc: "Repair, replace, or adjust previous grafts or implants." },
              { num: 4, title: "Closure & Dressing", desc: "Incisions closed and postoperative care initiated." },
            ].map((step) => (
              <div key={step.num} className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recovery Timeline & Risks */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Recovery Timeline</h2>
            <div className="space-y-3">
              {Object.entries(timelineData).map(([key, value]) => (
                <div key={key} className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => setExpandedTimeline(expandedTimeline === key ? null : key)}
                    className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-800">{key}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${expandedTimeline === key ? "rotate-180" : ""}`} />
                  </button>
                  {expandedTimeline === key && <div className="px-4 pb-4 text-gray-600">{value}</div>}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Potential Risks</h2>
            <div className="space-y-3">
              {Object.entries(riskData).map(([key, value]) => (
                <div key={key} className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => setExpandedRisk(expandedRisk === key ? null : key)}
                    className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-800">{key}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${expandedRisk === key ? "rotate-180" : ""}`} />
                  </button>
                  {expandedRisk === key && <div className="px-4 pb-4 text-gray-600">{value}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Patient Stories */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Patient Stories</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl overflow-hidden shadow-md">
              <div className="h-64 bg-gradient-to-br from-blue-200 to-indigo-300 flex items-center justify-center">
                <div className="text-6xl">🏃‍♂️</div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 italic mb-4">
                  "After revision knee surgery, I regained full mobility and returned to sports safely."
                </p>
                <p className="font-bold text-gray-800">- Arjun K.</p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-md">
              <div className="h-64 bg-gradient-to-br from-purple-200 to-pink-300 flex items-center justify-center">
                <div className="text-6xl">🦵</div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 italic mb-4">
                  "Excellent care and guidance during recovery. My knee feels strong again!"
                </p>
                <p className="font-bold text-gray-800">- Sneha P.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-12 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
            Book Your Consultation Now
          </button>
        </div>
      </div>
    </div>
  );
}
