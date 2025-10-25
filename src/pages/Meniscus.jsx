import React, { useState } from 'react';
import { Clock, Award, Activity, CheckCircle, ChevronDown, Eye } from 'lucide-react';

export default function Meniscus() {
  const [expandedTimeline, setExpandedTimeline] = useState(null);
  const [expandedRisk, setExpandedRisk] = useState(null);

  const timelineData = {
    'First Week': 'Rest, ice, compression, and elevation (RICE). Pain managed with medications.',
    '2-4 Weeks': 'Gradual walking, physical therapy to restore range of motion and strength.',
    '4-8 Weeks': 'Return to normal daily activities; continue exercises for stability.'
  };

  const riskData = {
    'Infection': 'Rare, proper wound care reduces risk.',
    'Stiffness': 'Temporary stiffness possible; resolved with therapy.',
    'Re-injury': 'Risk exists if proper precautions are not followed.'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex justify-center">
      <div className="w-full max-w-6xl px-6 py-12 transform scale-75 origin-top mt-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-blue-600 mb-4 flex items-center justify-center gap-2">
            Meniscus Surgery
            <Eye className="w-12 h-12" />
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Surgical repair or removal of torn meniscus in the knee, restoring joint function and reducing pain.
          </p>
        </div>

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
                <div className="text-2xl font-bold text-gray-800">30-60 Minutes</div>
                <div className="text-gray-600">Duration</div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-4">
              <Award className="w-12 h-12 text-blue-500" />
              <div>
                <div className="text-2xl font-bold text-gray-800">97%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-4">
              <Activity className="w-12 h-12 text-blue-500" />
              <div>
                <div className="text-2xl font-bold text-gray-800">2-6 Weeks</div>
                <div className="text-gray-600">Recovery Time</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Treatment Overview</h2>
            <p className="text-gray-600 leading-relaxed">
              Meniscus surgery involves repairing or trimming the torn cartilage in the knee to restore normal function and relieve pain. Minimally invasive arthroscopic techniques are often used.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ideal For</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <p className="text-gray-600">Patients with torn meniscus causing pain or limited mobility.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <p className="text-gray-600">Those who want minimally invasive surgical options.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Surgical Procedure Steps
          </h2>
          <div className="space-y-6">
            {[{
              num: 1,
              title: 'Anesthesia',
              desc: 'Local or general anesthesia administered.'
            },{
              num: 2,
              title: 'Arthroscopic Access',
              desc: 'Small incisions made; arthroscope inserted for visualization.'
            },{
              num: 3,
              title: 'Repair/Removal',
              desc: 'Torn meniscus repaired or partially removed as necessary.'
            },{
              num: 4,
              title: 'Closure',
              desc: 'Incisions closed and dressed; recovery instructions given.'
            }].map((step) => (
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
                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${expandedTimeline === key ? 'rotate-180' : ''}`} />
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
                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${expandedRisk === key ? 'rotate-180' : ''}`} />
                  </button>
                  {expandedRisk === key && <div className="px-4 pb-4 text-gray-600">{value}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Patient Stories</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl overflow-hidden shadow-md">
              <div className="h-64 bg-gradient-to-br from-blue-200 to-indigo-300 flex items-center justify-center">
                <div className="text-6xl">⚽</div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 italic mb-4">
                  "Quick recovery after meniscus repair. Back to sports within weeks."
                </p>
                <p className="font-bold text-gray-800">- Rohan M.</p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-md">
              <div className="h-64 bg-gradient-to-br from-purple-200 to-pink-300 flex items-center justify-center">
                <div className="text-6xl">🏃‍♀️</div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 italic mb-4">
                  "Minimal scarring and regained full mobility. Excellent care!"
                </p>
                <p className="font-bold text-gray-800">- Anjali S.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-12 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
            Book Your Consultation Now
          </button>
        </div>
      </div>
    </div>
  );
}
