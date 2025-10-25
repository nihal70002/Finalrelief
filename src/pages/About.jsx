import React, { useState } from 'react';

export default function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Helper function for smooth scrolling to sections (optional, but good UX)
  const handleAnchorClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Use scrollIntoView with 'smooth' behavior
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // Light theme enforced
    <div className="bg-slate-50 font-sans text-[#0e171b] min-h-screen">
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          {/* Header */}
          <header className="sticky top-0 z-50 bg-slate-50/80 backdrop-blur-sm">
            <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex justify-center">
              <div className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 px-4 sm:px-6 md:px-10 py-3 w-full max-w-[1280px]">
                <div className="flex items-center gap-4 text-[#1791cf]">
                  <div className="size-6">
                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <h2 className="text-lg font-bold leading-tight tracking-tight">Dr. Hyder Kunnumal</h2>
                </div>
                <div className="hidden md:flex flex-1 justify-end gap-8">
                  <div className="flex items-center gap-9">
                    <a className="text-sm font-medium leading-normal hover:text-[#1791cf]" href="#introduction" onClick={(e) => handleAnchorClick(e, 'introduction')}>About</a>
                    <a className="text-sm font-medium leading-normal hover:text-[#1791cf]" href="#services">Services</a>
                    <a className="text-sm font-medium leading-normal hover:text-[#1791cf]" href="#testimonials">Testimonials</a>
                    <a className="text-sm font-medium leading-normal hover:text-[#1791cf]" href="#contact" onClick={(e) => handleAnchorClick(e, 'contact')}>Contact</a>
                  </div>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#1791cf] text-slate-50 text-sm font-bold leading-normal tracking-wide hover:bg-[#1791cf]/90 transition-colors">
                    <span className="truncate">Schedule a Consultation</span>
                  </button>
                </div>
                <div className="md:hidden">
                  <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 rounded-md hover:bg-slate-200">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 px-4 md:px-10 lg:px-20 xl:px-40 py-5">
            <div className="max-w-[1280px] mx-auto">
              {/* Hero Section */}
              <section className="py-10 md:py-16" id="hero">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 items-center">
                  <div className="lg:col-span-2">
                    {/* Image placeholder for Dr. Hyder Kunnumal */}
                    <div className="w-full aspect-square bg-center bg-no-repeat bg-cover rounded-xl shadow-lg" style={{backgroundImage: 'url("hy1.jpg")'}}></div>
                  </div>
                  <div className="lg:col-span-3 flex flex-col gap-6 text-left">
                    <div className="flex flex-col gap-4">
                      <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tighter">
                        Meet Dr. Hyder Kunnumal: Pioneer in AI Robotics and Orthopedics
                      </h1>
                      <p className="text-base md:text-lg font-normal leading-normal text-slate-600">
                        Dedicated to restoring mobility and improving quality of life with compassionate, expert care, specializing in advanced robotic and minimally invasive surgeries.
                      </p>
                    </div>
                    <button className="flex min-w-[84px] max-w-sm cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#1791cf] text-slate-50 text-base font-bold leading-normal tracking-wide hover:bg-[#1791cf]/90 transition-colors">
                      <span className="truncate">Learn More About My Journey</span>
                    </button>
                  </div>
                </div>
              </section>

              <div className="flex flex-col lg:flex-row gap-12 mt-10">
                {/* Sidebar */}
                <aside className="lg:w-1/4 sticky top-24 h-fit">
                  <div className="flex h-full min-h-[500px] flex-col justify-between bg-slate-100 p-4 rounded-lg border border-slate-200">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-3">
                        {/* Smaller Image placeholder for Dr. Hyder Kunnumal */}
                        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBfAUe7v27ZKz41ZuXaZe5J6xsvX27g8X15wnB875sDn3BAIEdtVQhzSZtONYgRtaozYkkIauHzX3yVsOThE_q5XFZ4X0gL_Z7UXl_F9vyU2FFSx-E2kEuKOcTapv0Jx7Qw8soEWXo6BBg3CGGrNn1xX1oRCyEWX0zPm4mH7mBvciYwZqe_tkq1M3n_lBWOhIaLal5JucQouuQPs0cZlYRfu-_aDgUUdfFeZoDhyhLYZlEkijZ7gS9wvpulcryTEq9RNYiUf0B_Vr8F")'}}></div>
                        <div className="flex flex-col">
                          <h3 className="text-base font-semibold leading-normal">Dr. Hyder Kunnumal</h3>
                          <p className="text-sm font-normal leading-normal text-slate-500">Orthopedic & Robotic Surgeon</p>
                        </div>
                      </div>
                      <nav className="flex flex-col gap-1 mt-4">
                        {/* ICON REMOVED: Introduction */}
                        <a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#1791cf]/20 text-[#1791cf]" href="#introduction" onClick={(e) => handleAnchorClick(e, 'introduction')}>
                          <p className="text-sm font-medium leading-normal">Introduction</p>
                        </a>
                        {/* ICON REMOVED: Education */}
                        <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-200" href="#education" onClick={(e) => handleAnchorClick(e, 'education')}>
                          <p className="text-sm font-medium leading-normal">Education</p>
                        </a>
                        {/* ICON REMOVED: Professional Journey */}
                        <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-200" href="#journey" onClick={(e) => handleAnchorClick(e, 'journey')}>
                          <p className="text-sm font-medium leading-normal">Professional Journey</p>
                        </a>
                        {/* ICON REMOVED: Achievements */}
                        <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-200" href="#achievements" onClick={(e) => handleAnchorClick(e, 'achievements')}>
                          <p className="text-sm font-medium leading-normal">Achievements</p>
                        </a>
                        {/* ICON REMOVED: Philosophy */}
                        <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-200" href="#philosophy" onClick={(e) => handleAnchorClick(e, 'philosophy')}>
                          <p className="text-sm font-medium leading-normal">Philosophy</p>
                        </a>
                        {/* ICON REMOVED: Affiliations */}
                        <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-200" href="#community" onClick={(e) => handleAnchorClick(e, 'community')}>
                          <p className="text-sm font-medium leading-normal">Affiliations</p>
                        </a>
                        {/* ICON REMOVED: A Personal Note */}
                        <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-200" href="#personal-note" onClick={(e) => handleAnchorClick(e, 'personal-note')}>
                          <p className="text-sm font-medium leading-normal">A Personal Note</p>
                        </a>
                      </nav>
                    </div>
                    <button className="w-full flex mt-6 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#1791cf] text-slate-50 text-sm font-bold leading-normal tracking-wide hover:bg-[#1791cf]/90 transition-colors">
                      <span className="truncate">Schedule a Consultation</span>
                    </button>
                  </div>
                </aside>

                {/* Main Content */}
                <div className="lg:w-3/4 flex flex-col space-y-12">
                  {/* Introduction */}
                  <section id="introduction" className="scroll-mt-32">
                    <h2 className="text-2xl font-bold leading-tight tracking-tight px-4 pb-3 pt-5">Introduction</h2>
                    <p className="text-slate-600 text-base font-normal leading-relaxed pb-3 pt-1 px-4">A compelling narrative about my passion for **Orthopedics and cutting-edge Robotic Surgery**. From my comprehensive international training to implementing the latest AI-driven surgical techniques, my goal is to combine technical excellence with a deeply humanistic approach. I aim to ensure every individual feels heard, understood, and confident in their treatment journey, focusing on achieving the best long-term outcomes for mobility.</p>
                  </section>
                  
                  {/* Education & Qualifications */}
                  <section id="education" className="scroll-mt-32">
                    <h2 className="text-2xl font-bold leading-tight tracking-tight px-4 pb-3 pt-5">Education & Qualifications</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
                      <div className="bg-slate-100 p-6 rounded-lg">
                        <h3 className="font-bold text-lg">MBBS (Bachelor of Medicine, Bachelor of Surgery)</h3>
                        <p className="text-[#1791cf] font-medium">Prestigious Institution, India</p>
                        <p className="text-sm text-slate-500">Start Year - End Year</p>
                      </div>
                      <div className="bg-slate-100 p-6 rounded-lg">
                        <h3 className="font-bold text-lg">MS Ortho (Master of Surgery in Orthopedics)</h3>
                        <p className="text-[#1791cf] font-medium">Leading University/Hospital</p>
                        <p className="text-sm text-slate-500">Year - Year</p>
                      </div>
                      <div className="bg-slate-100 p-6 rounded-lg">
                        <h3 className="font-bold text-lg">MCh (Orth.) (Master of Chirurgiae in Orthopedics)</h3>
                        <p className="text-[#1791cf] font-medium">University of Dundee, UK</p>
                        <p className="text-sm text-slate-500">Year - Year</p>
                      </div>
                      <div className="bg-slate-100 p-6 rounded-lg">
                        <h3 className="font-bold text-lg">Specialized Fellowship/Training</h3>
                        <p className="text-[#1791cf] font-medium">Robotic Surgery, Global Center of Excellence</p>
                        <p className="text-sm text-slate-500">Year</p>
                      </div>
                    </div>
                  </section>

                  {/* Professional Journey */}
                  <section id="journey" className="scroll-mt-32">
                    <h2 className="text-2xl font-bold leading-tight tracking-tight px-4 pb-3 pt-5">Professional Journey</h2>
                    <div className="px-4 relative">
                      <div className="absolute left-6 h-full w-0.5 bg-slate-300"></div>
                      <div className="space-y-8">
                        <div className="relative pl-12">
                          <div className="absolute left-6 top-1 w-4 h-4 rounded-full bg-[#1791cf] -translate-x-1/2 transform"></div>
                          <p className="text-sm text-slate-500">Latest Achievement</p>
                          <h3 className="font-semibold text-lg">Pioneering AI Robotics Surgeries</h3>
                          <p className="text-slate-600">Successfully performed cutting-edge AI-assisted robotic surgeries, setting a new benchmark for precision and minimal invasiveness in the region.</p>
                        </div>
                        <div className="relative pl-12">
                          <div className="absolute left-6 top-1 w-4 h-4 rounded-full bg-[#1791cf] -translate-x-1/2 transform"></div>
                          <p className="text-sm text-slate-500">Current Role</p>
                          <h3 className="font-semibold text-lg">Consultant Orthopedic Surgeon</h3>
                          <p className="text-slate-600">Relief Hospital, Kondotty (Recent Appointment)</p>
                        </div>
                        <div className="relative pl-12">
                          <div className="absolute left-6 top-1 w-4 h-4 rounded-full bg-[#1791cf] -translate-x-1/2 transform"></div>
                          <p className="text-sm text-slate-500">Key Affiliation</p>
                          <h3 className="font-semibold text-lg">Consultant Orthopedic Surgeon</h3>
                          <p className="text-slate-600">Malabar Hospitals, Manjeri</p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Achievements & Success Stories */}
                  <section id="achievements" className="scroll-mt-32">
                    <h2 className="text-2xl font-bold leading-tight tracking-tight px-4 pb-3 pt-5">Achievements & Success Stories</h2>
                    <div className="px-4 space-y-4">
                      <div className="bg-slate-100 p-6 rounded-lg">
                        <h3 className="font-bold text-lg">Pioneer of AI Robotics Surgery</h3>
                        <p className="text-[#1791cf] font-medium">One of the first to successfully implement AI-guided robotic procedures in the area, leading to superior patient outcomes.</p>
                      </div>
                      <blockquote className="border-l-4 border-[#1791cf] pl-4 italic text-slate-600">
                        "Dr. Hyder’s skill is truly world-class. His AI robotic knee surgery was seamless, and my recovery was much faster than expected. I'm back on my feet and pain-free."
                        <cite className="block not-italic text-sm font-medium text-slate-500 mt-2">- Anonymous Patient</cite>
                      </blockquote>
                    </div>
                  </section>

                  {/* Philosophy & Approach */}
                  <section id="philosophy" className="scroll-mt-32">
                    <h2 className="text-2xl font-bold leading-tight tracking-tight px-4 pb-3 pt-5">My Philosophy & Approach</h2>
                    <p className="text-slate-600 text-base font-normal leading-relaxed pb-3 pt-1 px-4">I believe in a patient-centric approach where you are a partner in your own healthcare journey. My philosophy is built on three pillars: **Advanced Robotic and AI techniques**, **personalized care plans**, and **clear, honest communication**. The goal is always to leverage the highest level of surgical precision to ensure the least invasive procedure, prioritizing your long-term well-being and a swift, active return to life.</p>
                  </section>

                  {/* Current Affiliations */}
                  <section id="community" className="scroll-mt-32">
                    <h2 className="text-2xl font-bold leading-tight tracking-tight px-4 pb-3 pt-5">Current Affiliations</h2>
                    <div className="px-4 space-y-2">
                      <details className="group bg-slate-100 p-4 rounded-lg" open>
                        <summary className="font-semibold cursor-pointer flex justify-between items-center">
                          Malabar Hospitals, Manjeri
                        </summary>
                        <p className="mt-2 text-slate-600">Consultant Orthopedic Surgeon, specializing in complex joint replacements and sports injury management. A key location for my AI robotics practice.</p>
                      </details>
                      <details className="group bg-slate-100 p-4 rounded-lg" open>
                        <summary className="font-semibold cursor-pointer flex justify-between items-center">
                          Relief Hospital, Kondotty
                        </summary>
                        <p className="mt-2 text-slate-600">Providing expert orthopedic consultation and surgical services, bringing advanced treatment options closer to the community.</p>
                      </details>
                    </div>
                  </section>

                  {/* A Personal Note */}
                  <section id="personal-note" className="scroll-mt-32">
                    <h2 className="text-2xl font-bold leading-tight tracking-tight px-4 pb-3 pt-5">A Personal Note</h2>
                    <div className="px-4">
                      <blockquote className="bg-[#1791cf]/10 border-l-4 border-[#1791cf] p-6 rounded-r-lg">
                        <p className="text-lg italic text-slate-800">"The greatest reward of my work is seeing my patients reclaim their lives from pain and limitation. Leveraging the power of AI and robotics allows me to achieve unparalleled precision, translating to better, faster recoveries for you. My promise is to provide not just my surgical skill, but my unwavering support and dedication to your journey to complete mobility."</p>
                        <cite className="block not-italic text-right mt-4 font-bold text-[#1791cf]">- Dr. Hyder Kunnumal</cite>
                      </blockquote>
                    </div>
                  </section>

                  {/* Contact */}
                  <section className="text-center py-10 scroll-mt-32" id="contact">
                    <h2 className="text-3xl font-bold mb-4">Ready to Take the Next Step?</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto mb-8">Let's work together to get you back to the life you love. Schedule a consultation today at Malabar Hospitals or Relief Hospital to discuss your options.</p>
                    <button className="flex mx-auto min-w-[84px] max-w-sm cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#1791cf] text-slate-50 text-lg font-bold leading-normal tracking-wide hover:bg-[#1791cf]/90 transition-colors">
                      <span className="truncate">Schedule a Consultation</span>
                    </button>
                  </section>

                  {/* Trust Badges */}
                  <section className="py-6 scroll-mt-32" id="trust-badges">
                    <div className="flex justify-center items-center gap-8 md:gap-12 flex-wrap">
                      {/* Trust Badges */}
                      <img className="h-12 grayscale opacity-60 hover:opacity-100 transition-opacity" alt="Malabar Hospital Logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApQkYm1WuU2oh-azxBzBj-Sugf-_FfLoqXdVB6hDhRPZ9Si8V1cqWLeGd76UKtZB2-oTwN8lvFyYyjMD1Q3-bVGJurrlQVV-aQAZFGUOTK1a4gaeZysTL48iYBp9ELqIla9uG-a9aVBlgRq6A6kLwUgT9qlaO28TcGVaYiCINxgB4JARw-flSZrRr4Am4iGzJ5_7UKtcyKOLcW27psjuXqf3wTJDqky4p3SDjKzJEnru2EEswG0-8XjeS_Fy1SolJ4GCB-vHkM0VTt"/>
                      <img className="h-12 grayscale opacity-60 hover:opacity-100 transition-opacity" alt="Relief Hospital Logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4cawf9zEnM18meMppgmf7MyX8soYBPma1dXvDoy8J7i59gZ5o0K9vgNdKYz3e7oAl01a4YsYH-WDIlCu49bEK-0_xcq7F6LBCiihVBudMk2kjDIi3BSUXOqAN-1SFSVy6SiXn1Vt3QUp9Jm6AqwqOufF_6ImSwq_gU4ot127p5sv--zY23A65oYofZc-q0OD9xfOvuB5sRmJ0Mk14ZM0doaBZWu9jU4CtwvFVVo-E4pH9lRJ4b3PRFOJRD7nWuBAIbJmILNS1MxuZ"/>
                      <img className="h-12 grayscale opacity-60 hover:opacity-100 transition-opacity" alt="Robotics Surgery Award" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFinidrlATOeWVdObXLxNoGq2J_8o9-KsxUfSKb4eq2fs8P4rfyEyysT067AvGC4F-RkUYNX94hqm-7UcwJ7laNmCqf59i6Dnpr2kv8b4rFk0m4agl9q_uScyAGBgTMfgnckJMLijdjc-17gnmp2x16ui7HoEpSC7-nrAzhfxGrcR_06RXklcp0ULgPAWMI5A5IgwzApK25qLWV_bFpySeRJLUtLHPJAaaAmAitQFXmski96cgKG2bO1TzLfERdIM1T43XKniOvi9F"/>
                      <img className="h-12 grayscale opacity-60 hover:opacity-100 transition-opacity" alt="International MCh UK Logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDexxBqNte0YuV7n3tVEbqMNOPCfAJh5aNhHO1oEpTPZ_tEE0vL_rdfF0gUedqR-S_TsoFHrv5BhJDmJSBvY1QcS7T1rnzN4twpEQgGjSZqsQnpEeF6TGk-1rJB_qhE9RIrxbSqlrmBC3GR4xVUvCb1L-XYzMQlcEjGfl4ucYzLNjahpBDyzEEzjwPPbi2cR40_co0vjufLiUck4SZxE2ASN98ny0y55NGMMdW3kmAJiYyrw2dbUYQIjhp0rOeHhWdvblNg01b6Pwjh"/>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </main>

          {/* Footer */}
          <footer className="bg-slate-200 border-t border-slate-300 mt-16">
            <div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20 xl:px-40 py-8 text-center text-slate-600 text-sm">
              <p>© 2024 Dr. Hyder Kunnumal. All Rights Reserved.</p>
              <p className="mt-2">This website is for informational purposes only and does not constitute medical advice. Consultations are available at Malabar Hospital and Relief Hospital.</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}