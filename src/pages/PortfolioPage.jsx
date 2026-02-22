import { motion } from "framer-motion";
import { ExternalLink, Code2, Globe } from "lucide-react";
import React from "react";
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const projects = [
  {
    title: "Shortly - URL Shortener",
    category: "Web Application",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    description:
      "A modern URL shortening platform built with a clean UI and fast performance. Allows users to generate short links instantly.",
    link: "https://shortly-seven-chi.vercel.app/",
  },
  {
    title: "Balloons Twister",
    category: "Business Website",
    image:
      "https://images.unsplash.com/photo-1529636798458-92182e662485",
    description:
      "A professional event decoration website featuring service listings, booking system, and responsive UI design.",
    link: "https://balloonstwister.com/",
  },
  {
    title: "Enterprise Dashboard",
    category: "Admin Panel",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    description:
      "Interactive analytics dashboard with charts, performance metrics, and dynamic reporting features.",
    link: "#",
  },
];

export default function Portfolio() {
  return (
    <div className="bg-white text-gray-800">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-24 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-6"
        >
          Our Portfolio
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-gray-600 max-w-3xl mx-auto"
        >
          Explore our recent projects showcasing innovation, performance,
          and scalable architecture across multiple industries.
        </motion.p>
      </section>

      {/* PROJECT GRID */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group relative rounded-3xl overflow-hidden shadow-xl border border-blue-100"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-64 w-full object-cover"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-blue-600/90 text-white opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center p-6 text-center">
                <h3 className="text-xl font-bold mb-3">
                  {project.title}
                </h3>
                <p className="text-sm mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2 bg-white text-blue-600 rounded-full font-semibold"
                >
                  View Live <ExternalLink size={18} />
                </a>
              </div>

              {/* Bottom Info */}
              <div className="p-6">
                <p className="text-sm text-blue-600 font-semibold">
                  {project.category}
                </p>
                <h3 className="text-lg font-bold mt-2">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-24 px-6 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold">
            Our Development Process
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto text-center">
          {[
            "Discovery & Research",
            "UI/UX Design",
            "Development & Testing",
            "Deployment & Support",
          ].map((step, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-6"
            >
              <div className="w-16 h-16 mx-auto bg-blue-600 text-white flex items-center justify-center rounded-full text-xl font-bold mb-4">
                {i + 1}
              </div>
              <p className="text-gray-700 font-medium">
                {step}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          Have a Project in Mind?
        </h2>
        <p className="mb-8 text-blue-100">
          Let’s collaborate and turn your vision into a high-performance digital product.
        </p>
        <button className="px-10 py-4 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:scale-105 transition duration-300">
          Start Your Project
        </button>
      </section>

    </div>
  );
}