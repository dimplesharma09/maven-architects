import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Mr. Alok Sharma",
    role: "CEO, TechInnovate",
    image: "/assets/users/user1.jpg",
    message:
      "Maven Projects transformed our vision for the new corporate headquarters into reality. The sustainable architectural design is both highly functional and visually striking. Their attention to material detailing and structural precision clearly reflects their 20+ years of industry expertise. The entire process was seamless and extremely professional.",
    rating: 5,
  },
  {
    id: 2,
    name: "Ms. Priya Singh",
    role: "City Planner, GDA",
    image: "/assets/users/user2.jpg",
    message:
      "We partnered with Maven Projects for a large-scale city master planning initiative. Their depth of knowledge in urban planning and climate-responsive design was evident at every stage. The outcome is a thoughtful, future-ready plan focused on livable and sustainable communities. Truly a transformative collaboration.",
    rating: 5,
  },
  {
    id: 3,
    name: "Dr. Rohan Mehra",
    role: "Private Client",
    image: "/assets/users/user3.jpg",
    message:
      "The interior design team at Maven Projects delivered a home that perfectly balances luxury and functionality. They captured my personal style while integrating smart, human-centric design solutions. The quality of finishes and dedication to detail have made my home both elegant and deeply comfortable.",
    rating: 5,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const TestimonialsPage = () => {
  return (
    <div className="w-full bg-[#121212] text-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/Image/project-image2.png')",
          }}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />

        <div className="absolute inset-0 bg-black/50" />

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-wide">
          Testimonials
          </h1>
          <p className="mt-5 text-lg md:text-2xl text-gray-300 max-w-3xl">
            Hear from the people whose lives we've impacted through design.
          </p>
        </motion.div>
      </section>

      {/* ================= TESTIMONIAL GRID ================= */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-14 text-gray-200">
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#3a3a3a] border border-[#3a3a3a] rounded-none p-7 py-14 shadow-lg hover:shadow-xl hover:border-[#DEBB70] transition-all duration-300"
            >
              {/* Photo */}
              <div className="flex justify-center mb-4">
             <FaUserCircle className="text-[50px] text-[#DEBB70]" />
              </div>

              {/* Name + Role */}
              <h3 className="text-xl font-semibold text-center">
                {item.name}
              </h3>
              <p className="text-gray-400 text-center text-sm mb-2">
                {item.role}
              </p>

              {/* Rating */}
              <div className="flex justify-center gap-1 my-3">
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Message */}
              <p className="text-gray-300 text-center leading-relaxed">
                "{item.message}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-16 bg-[#121212] text-center">
        <h2 className="text-3xl font-bold mb-4">
          Let’s Design Something Exceptional
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-6">
          Partner with Maven Projects to create spaces that inspire, perform,
          and endure.
        </p>

        <a
          href="/contact"
          className="px-8 py-3 bg-white text-black font-semibold rounded-lg shadow hover:bg-gray-200 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default TestimonialsPage;
