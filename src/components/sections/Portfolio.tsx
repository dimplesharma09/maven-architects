"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Corporate Headquarters",
    category: "Architecture",
    image: "/assets/Image/project-image2.png",
  },
  {
    id: 2,
    title: "Luxury Residence",
    category: "Interior Design",
    image: "/assets/Image/project-image2.png",
  },
  {
    id: 3,
    title: "Urban Master Planning",
    category: "Urban Design",
    image: "/assets/Image/project-image2.png",
  },
  {
    id: 4,
    title: "Sustainable Housing",
    category: "Architecture",
    image: "/assets/Image/project-image2.png",
  },
  {
    id: 5,
    title: "Boutique Workspace",
    category: "Interior Design",
    image: "/assets/Image/project-image2.png",
  },
  {
    id: 6,
    title: "Smart City Concept",
    category: "Urban Design",
    image: "/assets/Image/project-image2.png",
  },
];

export default function Portfolio() {
  return (
    <div className="bg-[#121212] text-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[75vh] flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 bg-[url('/assets/Image/project-image2.png')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/70" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Our Portfolio
          </h1>
          <p className="text-gray-300 text-lg md:text-2xl">
            A curated selection of architecture, interior, and urban
            design projects that define our design philosophy.
          </p>
        </motion.div>
      </section>

      {/* ================= PORTFOLIO GRID ================= */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden bg-[#1e1e1e]"
            >
              {/* Image */}
              <div className="relative h-[320px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition" />
              </div>

              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="text-sm uppercase tracking-wider text-[#DEBB70]">
                  {project.category}
                </span>
                <h3 className="text-2xl font-semibold mt-2">
                  {project.title}
                </h3>

                <a
                  href={`/portfolio/${project.id}`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-all"
                >
                  View Project <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-20 bg-[#0d0d0d] text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6">
            Let’s Build Something Iconic
          </h2>
          <p className="text-gray-400 mb-8">
            Collaborate with us to create innovative, sustainable, and
            inspiring spaces that leave a lasting impact.
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-4 bg-white text-black font-semibold hover:bg-gray-200 transition"
          >
            Start Your Project
          </a>
        </motion.div>
      </section>
    </div>
  );
}
