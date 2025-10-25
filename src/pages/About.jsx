import React from "react";

const About = () => {
  const services = [
    {  title: "Knee Arthroscopy", desc: "Minimally invasive surgery to diagnose and treat knee problems." },
    { title: "ACL Reconstruction", desc: "Surgical procedure to replace a torn anterior cruciate ligament (ACL)." },
    {  title: "Total Knee Replacement", desc: "Resurfacing a knee damaged by arthritis with an artificial joint." },
    {  title: "Meniscus Repair", desc: "Surgical repair of a torn meniscus, a common knee injury." },
  ];

  const testimonials = [
    {
      quote: '"Dr. [Doctor\'s Name] and their team were exceptional. My knee replacement surgery was a huge success, and I\'m back to my active lifestyle. I couldn\'t be more grateful."',
      author: "- John D., Knee Replacement Patient",
    },
    {
      quote: '"The care and attention to detail I received were second to none. Dr. [Doctor\'s Name] explained everything clearly and made me feel at ease throughout the process of my ACL reconstruction."',
      author: "- Sarah P., ACL Reconstruction Patient",
    },
  ];

  const galleryImages = [
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgGbKNMQnCnwy1JoDFSirvvTrdacVkQCibrZ_M_zs5UYB5D1ooi4a0CspkOd5QDbIZYqPxlLOnhGyrc0DTk7xFd6e3wX-QKGuIOnBm-aqu_6BeQPCiepBjVEVrPkzFYAoX2S2oc4FO3aRvikFLwpfocHYOtmP4EIVLsGnR6G6Y20rXLXufxhCRA6BgiuQxhGX2ekf6DwjA_T32NEAgp3Da8dehOuoBcCL0pZWOwA7K6Yw-087PoGxNLIMPY2xNCcB5__K24E_3ng", alt: "Our Modern Clinic" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVeWnOD7KnC7_EtphUgtOH-EIDXcpx59SZmxroc1PcPGhMtygEpAHLbhMfUGZyAqCgqsixPGoUHHI-LzcBTg-MPKSDEqJDxLGVTyW6TofJF6EcbIDV2kuo3LwXDQalIGzpa4rV26e3tz3XVMyPAaMXrPSPdR8XsjmXvNVzeu1v1B4xxdzAt0ONEe3gTe_jHFaw9gAJIEyU8qSulKm747Ay4b3eJwJlayIwlJfXuQ_MF7wDPR3wSkh2P2oXVS_DAEdbGRYOfQhDrg", alt: "Patient Consultation" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzu6uJauiY6O0-hhgPha8lvtrbnH9bHNCWUZBCqgllnZU2b2_hzj_GFNf6WyXATbKbeAskUQCbNOTzIptK_hoth8r8ma-kMwjMicjTaLXWs8j3sLyl9CRp3Lr0j-Tf0SPMhki0EnbchGNnN_tKolWWuOLDmI6J3EjKf4WTSLuGEchsBjdOKHuMNFYEsSvt6IZci8hxCl-f4m_fHrm6ck7J9NAkjzg3nq_SGDo4dwBR73JY6bNXUi1xw15Gfbkwr8_ykrmzq-GqFA", alt: "Advanced Equipment" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVfK3TDAsktnkham-Ef0kb6jAQ2ILZDHzsj9xXpz82flwi9qRASDX4RhktZGyBcOHODIYTKvzv05FSmPxy2DaSHGBMHomMrHv6koRJeGfr5h8lfljpXQTMLO54AJ_mCUUsGrUkJVwEgDmpi8A-KvQ8JWPd-fgYMjM3E36raDucpTisJ0zKeoPomC_kWVEilHwMcQXeSigqVb3-Y8VzJUyNSOIDCTxgDzIRxh3LkmEPRtPE8-r2XJ3YHkKGgqZ53uf_9v6p025inQ", alt: "Surgical Precision" },
  ];

  return (
    <div className="transform scale-90 origin-top">
      <div className="layout-content-container flex flex-col max-w-full mx-auto">
        {/* Hero Section */}
        <div className="p-4 sm:p-6 lg:p-16">
          <div className="flex min-h-[calc(100vh-200px)] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-4"
               style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDZfmWfF8mvQvBKaEpnGQOzUCiam_obrb2VNHg3k2H9W4zHFlOFMWrrzYHjDnH-L02cLoCGRAKDxC1utMG-1LSjTz65CyBbg4LJFW9c8A5lLT2gMegnCgmoOJjLhzdevksOpYj45XQUZln-JLRYNKrB8WF89kK10yQ1cmn8nUcGDKXyz-lcKHFgDhyD-6LUyWcs3-cXo7Xmrqn_8i4ul5oI8GU01N-PPaTR0LvJe8UR2ca7EbJEQyqBC-m5gWVkH31Jbki8oQ9_WQ")`}}>
            <div className="flex flex-col gap-4 text-center max-w-3xl">
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl md:text-6xl">
                Leading Knee Care from Dr. Hyder
              </h1>
              <h2 className="text-white text-lg font-normal leading-normal sm:text-xl">
                Your Partner in Restoring Mobility and Quality of Life
              </h2>
            </div>
            <a className="mt-4 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-transparent border border-white text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-white/10 transition-colors" href="#about">
              Learn More
            </a>
          </div>
        </div>

        {/* About Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8" id="about">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[#0e171b] dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-8 text-center">About the Doctor</h2>
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-white dark:bg-background-dark p-8 rounded-xl shadow-sm">
              <div className="flex-shrink-0">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-40 md:size-48"
                     style={{backgroundImage: 'url("Doc4..jpg")'}}></div>
              </div>
              <div className="text-center md:text-left">
                <p className="text-primary text-xl font-bold leading-tight tracking-[-0.015em]">Dr. Hyder Kunnummal</p>
                <p className="text-gray-600 dark:text-gray-300 text-base font-normal leading-relaxed mt-2">
  Dr. Hyder Kunnumal is a highly experienced orthopedic surgeon specializing in advanced knee replacement and reconstructive surgery. With over 15 years of experience, he is dedicated to patient-centered care, combining the latest minimally invasive and robotic-assisted techniques to ensure optimal recovery and long-term mobility. Renowned for his precision and compassionate approach, Dr. Hyder has successfully performed over 1,000 knee procedures, helping patients regain active, healthy lives.
</p>

              </div>
            </div>
          </div>
        </section>

 {/* Services Section */}
<section className="py-16 px-4 sm:px-6 lg:px-12 bg-white dark:bg-background-dark" id="services">
  <div className="max-w-7xl mx-auto">
    
    {/* Section Heading */}
    <h2 className="text-[#0e171b] dark:text-white text-3xl sm:text-4xl font-bold leading-tight tracking-[-0.015em] mb-12 text-center">
      Services
    </h2>

    {/* Services Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {services.map((s, i) => {
        // Example colors array (you can customize)
        const bgColors = ["bg-emerald-100", "bg-blue-100", "bg-pink-100", "bg-yellow-100"];
        const iconColors = ["text-emerald-500", "text-blue-500", "text-pink-500", "text-yellow-500"];
        
        return (
          <div
            key={i}
            className={`flex flex-col items-center p-8 ${bgColors[i % bgColors.length]} dark:bg-gray-800/50 rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300`}
          >
            <span className={`material-symbols-outlined ${iconColors[i % iconColors.length]} text-6xl mb-6`}>
              {s.icon}
            </span>
            <h3 className="text-[#0e171b] dark:text-white text-xl sm:text-lg font-bold mb-3">
              {s.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              {s.desc}
            </p>
          </div>
        );
      })}
    </div>
  </div>
</section>


        {/* Testimonials Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8" id="testimonials">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[#0e171b] dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-8 text-center">Patient Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-white dark:bg-background-dark p-6 rounded-xl shadow-sm">
                  <p className="text-gray-600 dark:text-gray-300 italic">{t.quote}</p>
                  <p className="text-right text-[#0e171b] dark:text-white font-bold mt-4">{t.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-background-dark" id="gallery">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-[#0e171b] dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-8 text-center">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.map((img, i) => (
                <div key={i} className="group relative overflow-hidden rounded-xl">
                  <img className="w-full h-full object-cover aspect-square transition-transform duration-300 group-hover:scale-105" src={img.src} alt={img.alt} />
                  <div className="absolute inset-0 bg-black/40 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white text-sm font-semibold">{img.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 text-center" id="contact">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[#0e171b] dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-4">Schedule Your Consultation Today</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">Take the first step towards a pain-free life. Contact us to book your appointment with Dr. [Doctor's Name].</p>
            <button className="flex min-w-[84px] max-w-sm mx-auto w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
              Book an Appointment
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
