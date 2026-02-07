import React, { useState, useEffect } from "react";
import {
  Clock,
  Award,
  Activity,
  CheckCircle,
  ChevronDown,
  Eye,
  ArrowLeft,
} from "lucide-react";

export default function Acl() {
  const [expandedTimeline, setExpandedTimeline] = useState(null);
  const [expandedRisk, setExpandedRisk] = useState(null);

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const timelineData = {
    "First 1-2 Weeks":
      "Pain control, swelling reduction, knee brace support, and gentle range-of-motion exercises.",
    "3-6 Weeks":
      "Physiotherapy focusing on muscle strengthening and walking without support.",
    "6-12 Weeks":
      "Advanced strengthening, balance training, and improved knee stability.",
    "3-6 Months":
      "Gradual return to sports and high-impact activities under guidance.",
  };

  const riskData = {
    Infection: "Rare; minimized with sterile surgery and antibiotics.",
    "Graft Failure":
      "Uncommon, usually due to trauma or improper rehabilitation.",
    Stiffness:
      "May occur if physiotherapy is delayed or inadequate.",
    "Blood Clots":
      "Low risk with early mobilization and preventive care.",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex justify-center">
      <div className="w-full max-w-6xl px-6 py-12 transform scale-75 origin-top mt-16">

        {/* Go Back */}
        <div className="sticky top-4 z-50 mb-8">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-blue-600 font-semibold hover:underline bg-white px-4 py-2 rounded-lg shadow-md"
          >
            <ArrowLeft className="w-5 h-5" /> Go Back
          </button>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-blue-600 mb-4 flex items-center justify-center gap-2">
            ACL Reconstruction
            <Eye className="w-12 h-12" />
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Surgical reconstruction of the torn anterior cruciate ligament to
            restore knee stability and function.
          </p>
        </div>

        {/* IMAGE + STATS (GRID FIXED) */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">

          {/* Image */}
          <div
            className="relative rounded-2xl h-96 w-full bg-cover bg-center"
            style={{ backgroundImage: `url('/Tkr.jpeg')` }}
          >
          </div>
          

          {/* Stats */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-4">
              <Clock className="w-12 h-12 text-blue-500" />
              <div>
                <div className="text-2xl font-bold text-gray-800">
                  90-120 Minutes
                </div>
                <div className="text-gray-600">Surgery Duration</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-4">
              <Award className="w-12 h-12 text-blue-500" />
              <div>
                <div className="text-2xl font-bold text-gray-800">95%+</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-4">
              <Activity className="w-12 h-12 text-blue-500" />
              <div>
                <div className="text-2xl font-bold text-gray-800">
                  3-6 Months
                </div>
                <div className="text-gray-600">Full Recovery</div>
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
              ACL reconstruction replaces the torn ligament with a graft to
              restore knee stability and allow a safe return to activity.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Ideal Candidates
            </h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-500 mt-1" />
                <p className="text-gray-600">
                  Athletes or active individuals with ACL tears.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-500 mt-1" />
                <p className="text-gray-600">
                  Patients with knee instability symptoms.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Recovery & Risks */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Recovery Timeline
            </h2>
            {Object.entries(timelineData).map(([key, value]) => (
              <div key={key} className="border rounded-lg mb-3">
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
                  <div className="px-4 pb-4 text-gray-600">{value}</div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Potential Risks
            </h2>
            {Object.entries(riskData).map(([key, value]) => (
              <div key={key} className="border rounded-lg mb-3">
                <button
                  onClick={() =>
                    setExpandedRisk(expandedRisk === key ? null : key)
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
                  <div className="px-4 pb-4 text-gray-600">{value}</div>
                )}
              </div>
            ))}
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
