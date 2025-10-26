import React, { useState, useEffect } from 'react';
import { Clock, Award, Activity, CheckCircle, ChevronDown, ArrowLeft, Users, Target } from 'lucide-react';

export default function ACLReconstruction() {
  const [expandedTimeline, setExpandedTimeline] = useState(null);
  const [expandedRisk, setExpandedRisk] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, 0);
  }, []);

  const handleGoBack = () => {
    window.history.back();
  };

  const timelineData = {
    'Week 1-2': 'Initial rest and gentle range-of-motion exercises.',
    'Weeks 3-6': 'Physiotherapy and partial weight-bearing.',
    'Weeks 6-12': 'Strengthening exercises, increase activity.',
    'Months 3-6': 'Return to sports gradually with physiotherapy guidance.'
  };

  const riskData = {
    'Infection': 'Low risk with proper post-operative care.',
    'Graft failure': 'Rare, but possible with inadequate healing.',
    'Knee stiffness': 'Usually resolves with physiotherapy.',
    'Blood clots': 'Controlled with post-op care and monitoring.'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 flex justify-center">
      {/* Go Back Button */}
      <button
        onClick={handleGoBack}
        className="fixed top-6 left-6 z-50 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all flex items-center gap-2 text-emerald-700 font-semibold"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="hidden sm:inline">Back</span>
      </button>

      <div className="w-full max-w-6xl px-6 py-12 transform scale-75 origin-top mt-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-emerald-600 mb-4 flex items-center justify-center gap-2">
            ACL Reconstruction
            <span className="text-6xl">🦵</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Restore knee stability and prevent further injury with modern arthroscopic techniques.
          </p>
        </div>

        {/* Doctor Card */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl shadow-2xl p-8 mb-12 text-white">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-32 h-32 rounded-full border-4 border-white shadow-xl overflow-hidden flex-shrink-0">
              <img
                src="https://www.westend61.de/en/photo/ADSF45908/front-view-of-positive-young-african-american-female-doctor-in-eyeglasses-uniform-and-stethoscope-smiling-and-looking-at-camera-while-standing-with-clipboard-in-hands-against-white-wall-in-daylight"
                alt="Dr. Hyder Kunnummla"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-2">Dr. Hyder Kunnummla</h2>
              <p className="text-emerald-100 text-lg mb-4 italic">Expert Orthopedic Surgeon - Sports Injuries & ACL Reconstruction</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
                  <Clock className="w-5 h-5" />
                  <span className="font-semibold">20+ years</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
                  <Users className="w-5 h-5" />
                  <span className="font-semibold">1,800+ Patients</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
                  <Target className="w-5 h-5" />
                  <span className="font-semibold">900+ ACL Surgeries</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div
            className="relative rounded-2xl h-96 w-full bg-cover bg-center"
            style={{ backgroundImage: `url('https://via.placeholder.com/800x600?text=ACL+Surgery')` }}
          >
            <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-4">
              <Clock className="w-12 h-12 text-emerald-500" />
              <div>
                <div className="text-2xl font-bold text-gray-800">90-120 Minutes</div>
                <div className="text-gray-600">Duration</div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-4">
              <Award className="w-12 h-12 text-emerald-500" />
              <div>
                <div className="text-2xl font-bold text-gray-800">95%+</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-4">
              <Activity className="w-12 h-12 text-emerald-500" />
              <div>
                <div className="text-2xl font-bold text-gray-800">3-6 Months</div>
                <div className="text-gray-600">Recovery Time</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Treatment Overview</h2>
            <p className="text-gray-600 leading-relaxed">
              ACL reconstruction is a surgical procedure to replace a torn anterior cruciate ligament (ACL) in the knee. Modern arthroscopic techniques ensure smaller incisions, faster recovery, and strong knee stability.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ideal For</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                <p className="text-gray-600">Athletes or active individuals with complete or partial ACL tears.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                <p className="text-gray-600">Those needing restored knee stability for sports or active lifestyle.</p>
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
              title: 'Anesthesia and Preparation',
              desc: 'Patient is prepared and anesthesia administered.'
            },{
              num: 2,
              title: 'Arthroscopic Examination',
              desc: 'Evaluation of ACL tear using arthroscopic camera.'
            },{
              num: 3,
              title: 'Ligament Removal',
              desc: 'Damaged ligament remnants are carefully removed.'
            },{
              num: 4,
              title: 'Graft Placement',
              desc: 'Graft placed and fixed using screws or buttons.'
            },{
              num: 5,
              title: 'Closure & Physiotherapy',
              desc: 'Incisions closed; early physiotherapy initiated.'
            }].map((step) => (
              <div key={step.num} className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
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

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Benefits</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Restores knee stability',
              'Enables return to sports or active lifestyle',
              'Minimally invasive arthroscopic procedure',
              'Reduces risk of further knee injuries'
            ].map((benefit, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-emerald-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
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
              <div className="h-64 bg-gradient-to-br from-emerald-200 to-teal-300 flex items-center justify-center">
                <div className="text-6xl">⚽</div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 italic mb-4">
                  "After ACL reconstruction, I could play football again without pain. Excellent care from Dr. Hyder!"
                </p>
                <p className="font-bold text-gray-800">- Mr. Arun S.</p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-md">
              <div className="h-64 bg-gradient-to-br from-teal-200 to-cyan-300 flex items-center justify-center">
                <div className="text-6xl">💪</div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 italic mb-4">
                  "Professional, friendly, and precise surgery. My knee feels stable and strong."
                </p>
                <p className="font-bold text-gray-800">- Ms. Priya R.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button 
            onClick={() => alert("Navigate to Booking Page")}
            className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-12 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
          >
            Book Your Consultation Now
          </button>
        </div>
      </div>
    </div>
  );
}