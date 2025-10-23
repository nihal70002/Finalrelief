import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import React from "react";

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    comments: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you soon.');
    setFormData({ name: '', phone: '', comments: '' });
  };

  return (
    <section id="contact" ref={sectionRef} className="min-h-screen py-20 bg-white">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="mb-4 text-gray-900">Contact Us</h2>
          <div className="w-24 h-1 bg-emerald-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="bg-gray-50 rounded-lg p-8 h-full">
              <h3 className="mb-6 text-gray-900">Contact Information</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="mb-2 text-gray-900">Relief Hospital & Trauma Centre</h4>
                  <div className="flex items-start gap-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <p>
                      Kondotty Bypass Road, Kondotty<br />
                      Kerala 673638, India
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-600">
                  <Phone className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <div>
                    <p>Tel: +91 483 1234567</p>
                    <p>Mob: +91 94483 12345</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-600">
                  <Mail className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <a
                    href="mailto:info@reliefhospital.in"
                    className="text-emerald-600 hover:underline"
                  >
                    info@reliefhospital.in
                  </a>
                </div>

                <div className="flex items-center gap-3 text-gray-600">
                  <Globe className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <a
                    href="http://reliefhospital.in"
                    className="text-emerald-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    reliefhospital.in
                  </a>
                </div>
              </div>

              <div className="mt-8 h-64 bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.683!2d75.963521!3d11.143363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080b9f8e7f3d5f%3A0x3b5c3e9e4e7f3d5f!2sRelief%20Hospital%20and%20Trauma%20Centre!5e0!3m2!1sen!2sin!4v1708512345678"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Relief Hospital and Trauma Centre Map"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="mb-6 text-gray-900">Your Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-gray-700">
                    Name: <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full border rounded px-3 py-2"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-2 text-gray-700">
                    Phone: <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full border rounded px-3 py-2"
                  />
                </div>

                <div>
                  <label htmlFor="comments" className="block mb-2 text-gray-700">
                    Comments: <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="comments"
                    required
                    rows={6}
                    value={formData.comments}
                    onChange={(e) =>
                      setFormData({ ...formData, comments: e.target.value })
                    }
                    className="w-full border rounded px-3 py-2"
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-2 rounded"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center text-gray-600 border-t border-gray-200 pt-8">
          <p>© 2025 Relief Hospital and Trauma Centre. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
