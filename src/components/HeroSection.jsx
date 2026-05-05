import React from "react";

export default function HeroSection() {

  const dotsBackgroundUrl =
    "bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')]";

  return (
    <section
      id="home"
      className="bg-white dark:bg-gray-900 font-sans overflow-hidden relative transition-colors"
    >

      {/* Background dots */}
      <div className="absolute inset-0 opacity-7 pointer-events-none">
        <div className={`absolute inset-0 ${dotsBackgroundUrl} bg-repeat`} />
      </div>

      <main className="relative z-10">

        {/* HERO CONTAINER */}
        <section className="px-6 sm:px-10 lg:px-20 pt-20 pb-12 sm:pt-24 sm:pb-16 lg:py-32">

          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

            {/* LEFT CONTENT */}
            <div className="flex flex-col gap-6 text-center lg:text-left w-full lg:w-1/2">

              {/* HEADLINE */}
              <h2 className="text-3xl sm:text-5xl lg:text-[4.5rem] xl:text-[5rem] font-extrabold leading-[1.2] tracking-tight text-slate-900 dark:text-white">
                Regain Your
                <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-[length:200%_auto] bg-gradient-to-r from-teal-600 via-emerald-300 to-teal-600 animate-shimmer">
  Active Life
</span>
              </h2>

              {/* TRUST LINE */}
              <p className="text-sm sm:text-base text-teal-600 dark:text-teal-400 font-semibold">
                (keeps you moving)
              </p>

              {/* DESCRIPTION */}
              <p className="text-slate-600 dark:text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0">
                Expert knee replacement and orthopedic care with modern
                surgical techniques designed to help you walk confidently
                again — safely, comfortably, and faster.
              </p>

              {/* BUTTON */}
              <div className="flex justify-center lg:justify-start">

                <button className="hidden md:inline-flex items-center justify-center rounded-full h-14 px-8 bg-teal-500 text-white text-lg font-medium leading-none hover:bg-teal-600 transition">
  Schedule Consultation
</button>

              </div>

            </div>

            {/* RIGHT IMAGE */}
            <div className="w-full lg:w-1/2 flex flex-col items-center">

              <div
                className="w-[85%] sm:w-[70%] lg:w-3/4 aspect-[4/3] bg-[center_top_25%] bg-no-repeat bg-cover rounded-2xl shadow-lg"
                style={{ backgroundImage: `url("/doccc.jpg")` }}
              />

              {/* NAME */}
              <h3 className="mt-4 text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                Dr. Hydar Kunnumal
              </h3>

              <p className="text-gray-600 dark:text-gray-400 text-sm">
                MBBS, MS-Ortho, MCh (UK)
              </p>

            </div>

          </div>

        </section>

      </main>

    </section>
  );
}