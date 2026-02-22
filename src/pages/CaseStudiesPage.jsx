import { motion } from "framer-motion";
import { BarChart3, Code2, TrendingUp, CheckCircle } from "lucide-react";
import React from "react";
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const caseStudies = [
  {
    title: "Shortly - URL Shortener Platform",
    industry: "Web Application",
    problem:
      "Users needed a fast, simple and reliable way to shorten URLs with clean UI and smooth performance.",
    solution:
      "Built a modern, responsive application with optimized frontend architecture and scalable backend logic.",
    result:
      "Improved link generation speed by 40% and enhanced user engagement with intuitive interface design.",
  },
  {
    title: "Balloons Twister - Event Business Website",
    industry: "Business Website",
    problem:
      "Client needed an attractive website to showcase decoration services and capture customer inquiries.",
    solution:
      "Designed a visually engaging, responsive website with booking and contact functionality.",
    result:
      "Increased online inquiries by 60% and improved brand visibility.",
  },
];

export default function CaseStudies() {
  return (
    <div className="bg-white text-gray-800">

      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-24 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-6"
        >
          Case Studies
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-gray-600 max-w-3xl mx-auto"
        >
          Explore how we helped businesses transform their digital presence
          through innovative technology solutions.
        </motion.p>
      </section>

      {/* FEATURED CASE STUDY */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          
          <motion.img
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
            alt="Featured Project"
            className="rounded-3xl shadow-2xl"
          />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Enterprise Dashboard Solution
            </h2>
            <p className="text-gray-600 mb-4">
              We built a high-performance analytics dashboard enabling
              businesses to track KPIs, visualize performance metrics,
              and generate real-time reports.
            </p>

            <div className="space-y-4">
              <div className="flex gap-3">
                <CheckCircle className="text-blue-600" />
                <p>Real-time data visualization</p>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="text-blue-600" />
                <p>Secure authentication system</p>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="text-blue-600" />
                <p>Optimized performance & scalability</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CASE STUDY CARDS */}
      <section className="py-24 px-6 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {caseStudies.map((study, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="p-10 bg-white rounded-3xl shadow-xl border border-blue-100"
            >
              <p className="text-blue-600 font-semibold mb-2">
                {study.industry}
              </p>
              <h3 className="text-2xl font-bold mb-6">
                {study.title}
              </h3>

              <div className="mb-4">
                <h4 className="font-semibold mb-1">Problem</h4>
                <p className="text-gray-600 text-sm">{study.problem}</p>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold mb-1">Solution</h4>
                <p className="text-gray-600 text-sm">{study.solution}</p>
              </div>

              <div>
                <h4 className="font-semibold mb-1">Result</h4>
                <p className="text-gray-600 text-sm">{study.result}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* METRICS SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          {[
            { icon: <TrendingUp size={40} />, value: "60%", label: "Increase in Engagement" },
            { icon: <BarChart3 size={40} />, value: "40%", label: "Performance Improvement" },
            { icon: <Code2 size={40} />, value: "100%", label: "Client Satisfaction" },
          ].map((metric, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-8 bg-blue-50 rounded-3xl shadow-lg"
            >
              <div className="text-blue-600 mb-4 flex justify-center">
                {metric.icon}
              </div>
              <h3 className="text-3xl font-bold">{metric.value}</h3>
              <p className="text-gray-600 mt-2">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          Want Similar Results for Your Business?
        </h2>
        <p className="mb-8 text-blue-100">
          Let’s discuss your project and build something impactful.
        </p>
        <button className="px-10 py-4 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:scale-105 transition duration-300">
          Get In Touch
        </button>
      </section>

    </div>
  );
}