import React, { useState, useEffect } from "react";
import {
  Clock,
  Award,
  Activity,
  CheckCircle,
  ChevronDown,
  Eye,
} from "lucide-react";

export default function Meniscus() {
  const [expandedTimeline, setExpandedTimeline] = useState(null);
  const [expandedRisk, setExpandedRisk] = useState(null);

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const timelineData = {
    "First Few Days":
      "Rest, ice, compression, and elevation. Mild pain and swelling are normal.",
    "1-2 Weeks":
      "Light walking and basic physiotherapy exercises begin.",
    "3-6 Weeks":
      "Strengthening exercises and improved knee movement.",
    "6-8 Weeks":
      "Return to normal activities and light sports.",
  };

  const riskData = {
    Infection:
      "Rare but possible. Proper wound care reduces the risk.",
    Swelling:
      "Temporary swelling may occur and usually subsides.",
    Stiffness:
      "Can occur if physiotherapy is delayed.",
    "Blood Clots":
      "Very rare with early movement and care.",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex justify-center">
      <div className="w-full max-w-6xl px-6 py-12 transform scale-75 origin-top mt-16">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-blue-600 mb-4 flex items-center justify-center gap-2">
            Meniscus Surgery
            <Eye className="w-12 h-12" />
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Minimally invasive surgery to repair or remove damaged meniscus tissue and restore smooth knee movement.
          </p>
        </div>

        {/* Image + Stats */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">

          {/* Image */}
          <div
            className="relative rounded-2xl h-96 w-full bg-cover bg-center"
            style={{ backgroundImage: `url('/Tkr.jpeg')` }}
          >
            <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
          </div>

          {/* Stats */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-4">
              <Clock className="w-12 h-12 text-blue-500" />
              <div>
                <div className="text-2xl font-bold text-gray-800">
                  30-60 Minutes
                </div>
                <div className="text-gray-600">Surgery Duration</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-4">
              <Award className="w-12 h-12 text-blue-500" />
              <div>
                <div className="text-2xl font-bold text-gray-800">
                  98%
                </div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-4">
              <Activity className="w-12 h-12 text-blue-500" />
              <div>
                <div className="text-2xl font-bold text-gray-800">
                  4-6 Weeks
                </div>
                <div className="text-gray-600">Recovery Time</div>
              </div>
            </div>
          </div>
        </div>

        {/* Overview + Ideal */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Treatment Overview
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Meniscus surgery is performed using arthroscopy to repair or remove
              damaged cartilage inside the knee. This helps relieve pain,
              improve movement, and prevent future joint damage.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Ideal For
            </h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-500 mt-1" />
                <p className="text-gray-600">
                  Patients with torn or damaged meniscus.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-500 mt-1" />
                <p className="text-gray-600">
                  Knee locking, pain, or restricted movement.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Procedure */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Surgical Procedure Steps
          </h2>

          <div className="space-y-6">
            {[
              {
                num: 1,
                title: "Anesthesia",
                desc: "Local or spinal anesthesia is administered.",
              },
              {
                num: 2,
                title: "Arthroscopy",
                desc: "A small camera is inserted to inspect the knee joint.",
              },
              {
                num: 3,
                title: "Meniscus Repair",
                desc: "Damaged meniscus is repaired or trimmed.",
              },
              {
                num: 4,
                title: "Closure",
                desc: "Incisions are closed and recovery begins.",
              },
            ].map((step) => (
              <div key={step.num} className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white font-bold text-lg">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recovery + Risks */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">

          {/* Recovery */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Recovery Timeline
            </h2>
            <div className="space-y-3">
              {Object.entries(timelineData).map(([key, value]) => (
                <div key={key} className="border rounded-lg">
                  <button
                    onClick={() =>
                      setExpandedTimeline(
                        expandedTimeline === key ? null : key
                      )
                    }
                    className="w-full px-4 py-3 flex justify-between items-center hover:bg-gray-50"
                  >
                    <span className="font-semibold">{key}</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        expandedTimeline === key ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expandedTimeline === key && (
                    <div className="px-4 pb-4 text-gray-600">
                      {value}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Risks */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Potential Risks
            </h2>
            <div className="space-y-3">
              {Object.entries(riskData).map(([key, value]) => (
                <div key={key} className="border rounded-lg">
                  <button
                    onClick={() =>
                      setExpandedRisk(
                        expandedRisk === key ? null : key
                      )
                    }
                    className="w-full px-4 py-3 flex justify-between items-center hover:bg-gray-50"
                  >
                    <span className="font-semibold">{key}</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        expandedRisk === key ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expandedRisk === key && (
                    <div className="px-4 pb-4 text-gray-600">
                      {value}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-12 py-4 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition-all">
            Book Your Consultation Now
          </button>
        </div>

      </div>
    </div>
  );
}
