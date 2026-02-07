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
import { useNavigate } from "react-router-dom";

export default function TotalKneeReplacement() {
  const [expandedTimeline, setExpandedTimeline] = useState(null);
  const [expandedRisk, setExpandedRisk] = useState(null);
  const navigate = useNavigate();

  // ✅ Always start at top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const handleGoBack = () => {
    navigate(-1);
  };

  /* ---------------- DATA ---------------- */

  const timelineData = {
    "First 3–5 Days":
      "Hospital stay with pain control, wound care, and assisted walking.",
    "2–4 Weeks":
      "Regular physiotherapy, improved walking, reduced swelling.",
    "6–12 Weeks":
      "Significant pain relief, better knee movement, return to daily activities.",
    "3–6 Months":
      "Near-complete recovery with improved strength and stability.",
  };

  const riskData = {
    Infection:
      "Rare but possible; prevented with sterile techniques and antibiotics.",
    "Blood Clots":
      "Risk reduced with early mobilization and blood-thinning medications.",
    "Implant Wear or Loosening":
      "Occurs over many years; modern implants are long-lasting.",
    Stiffness:
      "Prevented with proper physiotherapy and exercises.",
  };

  /* ---------------- UI ---------------- */

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex justify-center">
      <div className="w-full max-w-6xl px-6 py-12 mt-16">

        {/* 🔙 Go Back */}
        <div className="mb-8">
          <button
            onClick={handleGoBack}
            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition-all shadow-md"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>

        {/* TITLE */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-blue-600 mb-4 flex items-center justify-center gap-2">
            Total Knee Replacement
            <Eye className="w-12 h-12" />
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            A highly effective surgical procedure where the damaged knee joint
            is replaced with an artificial implant to relieve pain and restore mobility.
          </p>
        </div>

        {/* STATS */}
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
                <div className="text-2xl font-bold text-gray-800">
                  90–150 Minutes
                </div>
                <div className="text-gray-600">Surgery Duration</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-4">
              <Award className="w-12 h-12 text-blue-500" />
              <div>
                <div className="text-2xl font-bold text-gray-800">95–98%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-4">
              <Activity className="w-12 h-12 text-blue-500" />
              <div>
                <div className="text-2xl font-bold text-gray-800">
                  6–12 Weeks
                </div>
                <div className="text-gray-600">Initial Recovery</div>
              </div>
            </div>
          </div>
        </div>

        {/* OVERVIEW */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Treatment Overview
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Total knee replacement involves removing damaged cartilage and bone
              from the knee joint and replacing them with a high-quality artificial implant.
              This surgery significantly reduces pain and improves function.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Ideal Candidates
            </h2>
            <div className="space-y-3">
              {[
                "Severe knee arthritis with chronic pain",
                "Difficulty walking or climbing stairs",
                "Failure of medications or physiotherapy",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-1" />
                  <p className="text-gray-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PROCEDURE */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Surgical Procedure – Step by Step
          </h2>
          <div className="space-y-6">
            {[
              { num: 1, title: "Anesthesia", desc: "Spinal or general anesthesia is administered." },
              { num: 2, title: "Joint Preparation", desc: "Damaged bone and cartilage are removed." },
              { num: 3, title: "Implant Placement", desc: "Artificial knee components are positioned." },
              { num: 4, title: "Closure", desc: "Incision is closed and recovery begins." },
            ].map((step) => (
              <div key={step.num} className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 text-white flex items-center justify-center font-bold">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RECOVERY & RISKS */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[["Recovery Timeline", timelineData, expandedTimeline, setExpandedTimeline],
            ["Potential Risks", riskData, expandedRisk, setExpandedRisk]].map(
            ([title, data, expanded, setExpanded]) => (
              <div key={title} className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">{title}</h2>
                <div className="space-y-3">
                  {Object.entries(data).map(([key, value]) => (
                    <div key={key} className="border rounded-lg">
                      <button
                        onClick={() => setExpanded(expanded === key ? null : key)}
                        className="w-full px-4 py-3 flex justify-between items-center hover:bg-gray-50"
                      >
                        <span className="font-semibold">{key}</span>
                        <ChevronDown
                          className={`w-5 h-5 transition-transform ${
                            expanded === key ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {expanded === key && (
                        <div className="px-4 pb-4 text-gray-600">{value}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
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
