"use client";
import React from "react";
import { MapPin, Mail, Globe, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactUs() {
  return (
    <div className="bg-[#282828] text-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[70vh] flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 bg-[url('/assets/Image/project-image2.png')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/70" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
           Contact Us
          </h1>
          <p className="text-gray-300 text-lg md:text-2xl">
            Have a project in mind or a question for us?  
            We’d love to hear from you.
          </p>
        </motion.div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* ===== LEFT INFO ===== */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <h2 className="text-3xl md:text-4xl font-semibold">
              Get in Touch
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Whether you’re interested in architecture, urban planning,
              interior design, or collaboration opportunities — our team
              is ready to assist you.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#DEBB70]" />
                <div>
                  <h4 className="font-medium">Address</h4>
                  <p className="text-gray-400">
                    123 Rural Road, Thar Desert Region, Rajasthan, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-[#DEBB70]" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-400">info@mavenprojects.org</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Globe className="w-6 h-6 text-[#DEBB70]" />
                <div>
                  <h4 className="font-medium">Website</h4>
                  <p className="text-gray-400">www.gravisindia.org</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-[#DEBB70]" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-gray-400">+91 98765 43210</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ===== RIGHT FORM ===== */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#333] p-10 rounded-xl shadow-xl space-y-6"
          >
            <div>
              <label className="block mb-2 text-sm text-gray-300">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-transparent border border-gray-600 px-4 py-3 text-white focus:outline-none focus:border-[#DEBB70]"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-300">
                Your Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent border border-gray-600 px-4 py-3 text-white focus:outline-none focus:border-[#DEBB70]"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-300">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Write your message..."
                className="w-full bg-transparent border border-gray-600 px-4 py-3 text-white focus:outline-none focus:border-[#DEBB70]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#DEBB70] text-black font-semibold py-3 hover:bg-[#cfa95a] transition"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </section>

      {/* ================= MAP SECTION ================= */}
      <section className="w-full h-[450px] grayscale">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps?q=Rajasthan,India&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
        />
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-20 text-center bg-[#282828] px-6">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Start Your Project?
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Let’s collaborate to create meaningful, sustainable, and
          inspiring spaces together.
        </p>
        <a
          href="/contact"
          className="inline-block px-10 py-4 bg-white text-black font-semibold hover:bg-gray-200 transition"
        >
          Talk to Our Team
        </a>
      </section>
    </div>
  );
}
