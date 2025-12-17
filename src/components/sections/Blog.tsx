"use client";
import React from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "Designing Sustainable Architecture for the Future",
    excerpt:
      "Discover how climate-responsive architecture is shaping smarter, greener, and more livable spaces.",
    date: "August 12, 2025",
    image: "/assets/Image/project-image2.png",
  },
  {
    id: 2,
    title: "Urban Planning That Builds Communities",
    excerpt:
      "Learn how thoughtful master planning enhances livability, mobility, and social connection.",
    date: "July 28, 2025",
    image: "/assets/Image/project-image1.png",
  },
  {
    id: 3,
    title: "Luxury Interior Design with Purpose",
    excerpt:
      "Explore how elegant interiors can balance comfort, functionality, and timeless aesthetics.",
    date: "July 10, 2025",
    image: "/assets/Image/project-image.jpg",
  },
];

export default function Blog() {
  return (
    <div className="bg-[#121212] text-white">

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
            Our Blog
          </h1>
          <p className="text-gray-300 text-lg md:text-2xl">
            Insights, ideas, and stories from the world of architecture,
            urban design, and interiors.
          </p>
        </motion.div>
      </section>

      {/* ================= BLOG GRID ================= */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {blogs.map((blog) => (
            <motion.article
              key={blog.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-[#1e1e1e] overflow-hidden shadow-lg group"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30" />
              </div>

              {/* Content */}
              <div className="p-8 space-y-4">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>{blog.date}</span>
                </div>

                <h3 className="text-xl font-semibold leading-snug">
                  {blog.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {blog.excerpt}
                </p>

                <a
                  href={`/blog/${blog.id}`}
                  className="inline-flex items-center gap-2 text-[#DEBB70] font-medium hover:gap-3 transition-all"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 text-center bg-[#0d0d0d] px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6">
            Want More Design Insights?
          </h2>
          <p className="text-gray-400 mb-8">
            Follow our blog for expert perspectives on architecture,
            urban planning, and interior design.
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-4 bg-white text-black font-semibold hover:bg-gray-200 transition"
          >
            Contact Our Team
          </a>
        </motion.div>
      </section>
    </div>
  );
}
