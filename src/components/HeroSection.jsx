import React, { useState } from "react";

export default function HeroSection() {
  const [showDoctor, setShowDoctor] = useState(false);

  return (
    <section id = "home" className="bg-background-light dark:bg-background-dark font-sans overflow-hidden">
      <main className="flex-1">
        <section className="px-6 sm:px-10 lg:px-20 py-16 lg:py-24">
          <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

            {/* Background Dots */}
            <div className="absolute inset-0 opacity-7">
              <div
                className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] 
                bg-repeat scale-2 sm:scale-100"
              />
            </div>

            {/* Hero Content */}
            <div
              className={`flex flex-col gap-6 text-left transition-transform duration-700 ease-in-out w-full lg:w-1/2
                ${showDoctor ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"}`}
            >
              <h1 className="text-gray-900 dark:text-white text-3xl sm:text-4xl font-extrabold leading-tight tracking-[-0.033em] font-serif">
                Regain Your Active Life. Expert Knee Replacement Care Starts Here.
              </h1>
              <h2 className="text-gray-600 dark:text-gray-300 text-lg font-normal leading-normal font-sans">
                With over 1000 successful procedures, our team is dedicated to providing you
                with the best care to get you back to living your life to the fullest.
              </h2>

              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <button className="flex items-center justify-center rounded-lg h-12 px-6 bg-emerald-400 text-white text-base font-semibold leading-normal tracking-[0.015em] hover:bg-emerald-500 transition-colors font-sans">
                  <span className="truncate">Schedule Your Consultation</span>
                </button>

                <button
                  onClick={() => setShowDoctor(true)}
                  className="flex items-center justify-center rounded-lg h-12 px-6 bg-white text-emerald-400 border border-emerald-400 text-base font-semibold leading-normal tracking-[0.015em] hover:bg-emerald-400 hover:text-white transition-colors font-sans"
                >
                  <span className="truncate">Know More About Dr. Hyder</span>
                </button>
              </div>
            </div>

            {/* Doctor Image and Name */}
            <div className="w-full lg:w-1/2 flex flex-col items-center">
              <div
                className={`w-3/4 aspect-[4/3] bg-[center_top_30%] bg-no-repeat bg-cover rounded-2xl transition-transform duration-700 ease-in-out
                  ${showDoctor ? "-translate-x-180" : "translate-x-0"}`}
                style={{ backgroundImage: `url("/doccc.jpg")` }}
              ></div>

              <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                Dr. Hyder Kunnumal
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                MBBS, MS-Ortho, Mch(UK)
              </p>
            </div>

            {/* Doctor Detail Panel */}
            <div
              className={`absolute top-0 right-0 h-full w-full lg:w-1/2 bg-white dark:bg-gray-800 p-8 flex flex-col gap-6 transition-transform duration-700 ease-in-out
                ${showDoctor ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
            >
              <h1 className="text-gray-900 dark:text-white text-3xl font-bold">
                Dr. Hyder Kunnumal, Orthopedic Surgeon
              </h1>

              <ul className="text-gray-600 dark:text-gray-300 list-disc list-inside space-y-1">
                <li>Performed over 1,000 successful knee replacement surgeries.</li>
                <li>Expert in minimally invasive and robotic-assisted knee procedures.</li>
              </ul>

              <p className="text-gray-600 dark:text-gray-300">
                Passionate about helping patients regain an active lifestyle with personalized care plans and modern surgical techniques.
              </p>

              <button
                onClick={() => setShowDoctor(false)}
                className="mt-4 self-start px-6 py-3 bg-emerald-400 text-white rounded-lg font-semibold hover:bg-emerald-500 transition-colors"
              >
                Back to Overview
              </button>
            </div>

          </div>
        </section>
      </main>
    </section>
  );
}
