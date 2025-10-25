import React, { useState, useEffect } from 'react';
import { Clock, Award, Activity, CheckCircle, ChevronDown, Eye, ArrowLeft } from 'lucide-react';

export default function Conservative() {
  const [expandedTimeline, setExpandedTimeline] = useState(null);
  const [expandedRisk, setExpandedRisk] = useState(null);

  // Requirement 1: Always start from the top when opened
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handler for the "Go Back" button
  const handleGoBack = () => {
    window.history.back();
  };

  const timelineData = {
    'Initial Phase': 'Rest, anti-inflammatory medications, and ice packs to reduce pain and swelling.',
    '2-6 Weeks': 'Physical therapy focusing on range of motion, strengthening exercises, and gradual activity.',
    '6-12 Weeks': 'Increased mobility and daily activity; continued monitoring and therapy as needed.'
  };

  const riskData = {
    'Ineffective Pain Relief': 'Symptoms may persist; adjustments in therapy and medications required.',
    'Joint Stiffness': 'Possible if exercises are not followed consistently.',
    'Progressive Damage': 'Condition may worsen over time; regular monitoring is necessary.'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex justify-center">
      <div className="w-full max-w-6xl px-6 py-12 transform scale-75 origin-top mt-16">
        
        {/* Requirement 2: Go Back Button */}
        <button
          onClick={handleGoBack}
          className="flex items-center gap-2 mb-8 text-blue-600 hover:text-blue-800 transition-colors font-semibold"
        >
          <ArrowLeft className="w-5 h-5" />
          Go Back
        </button>
        
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-blue-600 mb-4 flex items-center justify-center gap-2">
            Conservative Treatment
            <Eye className="w-12 h-12" />
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Non-surgical treatment for knee issues, focusing on pain management, strengthening, and maintaining joint function.
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
                <div className="text-2xl font-bold text-gray-800">N/A</div>
                <div className="text-gray-600">Duration</div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-4">
              <Award className="w-12 h-12 text-blue-500" />
              <div>
                <div className="text-2xl font-bold text-gray-800">80%</div>
                <div className="text-gray-600">Effectiveness</div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-4">
              <Activity className="w-12 h-12 text-blue-500" />
              <div>
                <div className="text-2xl font-bold text-gray-800">6-12 Weeks</div>
                <div className="text-gray-600">Recovery Time</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Treatment Overview</h2>
            <p className="text-gray-600 leading-relaxed">
              Conservative treatment focuses on managing knee pain and improving joint function without surgery. This includes medications, physical therapy, weight management, and lifestyle modifications.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ideal For</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <p className="text-gray-600">Patients with mild to moderate knee pain or arthritis.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <p className="text-gray-600">Those preferring non-surgical approaches.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Conservative Management Steps
          </h2>
          <div className="space-y-6">
            {[{
              num: 1,
              title: 'Assessment',
              desc: 'Comprehensive evaluation of knee condition and patient health.'
            },{
              num: 2,
              title: 'Medication',
              desc: 'Pain and inflammation controlled with appropriate medications.'
            },{
              num: 3,
              title: 'Therapy',
              desc: 'Physical therapy to strengthen muscles and maintain joint function.'
            },{
              num: 4,
              title: 'Lifestyle & Monitoring',
              desc: 'Weight management, activity modification, and regular check-ups.'
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
                <div className="text-6xl">🧘‍♂️</div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 italic mb-4">
                  "Conservative therapy relieved my knee pain and helped me return to daily activities safely."
                </p>
                <p className="font-bold text-gray-800">- Arjun R.</p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-md">
              <div className="h-64 bg-gradient-to-br from-purple-200 to-pink-300 flex items-center justify-center">
                <div className="text-6xl">🏋️‍♀️</div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 italic mb-4">
                  "Avoided surgery with proper therapy and exercises. Knee feels stronger than ever!"
                </p>
                <p className="font-bold text-gray-800">- Sneha K.</p>
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