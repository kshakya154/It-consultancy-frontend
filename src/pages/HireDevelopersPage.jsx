import { motion } from "framer-motion";
import React from "react";
import {
  Code,
  Users,
  Clock,
  ShieldCheck,
  Briefcase,
  Rocket,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const developers = [
  "Frontend Developers",
  "Backend Developers",
  "Full Stack Developers",
  "Mobile App Developers",
  "DevOps Engineers",
  "UI/UX Designers",
];

const hiringModels = [
  {
    title: "Dedicated Developers",
    desc: "Hire full-time dedicated developers who work exclusively on your project.",
  },
  {
    title: "Hourly Based Hiring",
    desc: "Flexible hiring model ideal for short-term tasks and quick project requirements.",
  },
  {
    title: "Project Based Model",
    desc: "Complete project execution with defined timelines and deliverables.",
  },
];

export default function HireDevelopers() {
  return (
    <div className="bg-white text-gray-800">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Hire Dedicated Developers
              <span className="text-blue-600"> For Your Business</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Scale your team with top-tier developers who deliver
              high-performance, scalable, and secure digital solutions.
              Whether you’re a startup or an enterprise, we provide flexible
              hiring models tailored to your needs.
            </p>
            <button className="px-8 py-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
              Get Free Consultation
            </button>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            src="https://images.unsplash.com/photo-1551434678-e076c223a692"
            alt="Hire Developers"
            className="rounded-3xl shadow-2xl"
          />
        </div>
      </section>

      {/* TYPES OF DEVELOPERS */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold">Developers You Can Hire</h2>
          <p className="mt-4 text-gray-600">
            Choose from a wide pool of skilled professionals ready to bring your vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {developers.map((dev, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-blue-50 rounded-3xl shadow-lg border border-blue-100"
            >
              <Code className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-bold">{dev}</h3>
              <p className="mt-3 text-gray-600 text-sm">
                Experienced professionals delivering reliable and scalable solutions.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HIRING MODELS */}
      <section className="py-24 px-6 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold">Flexible Hiring Models</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {hiringModels.map((model, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="p-10 bg-white rounded-3xl shadow-xl border border-blue-100"
            >
              <Briefcase className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3">{model.title}</h3>
              <p className="text-gray-600">{model.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY HIRE FROM US */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold">Why Hire From Us?</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {[
            {
              icon: <Users size={40} className="text-blue-600" />,
              title: "Experienced Team",
              desc: "Skilled professionals with industry expertise."
            },
            {
              icon: <Clock size={40} className="text-blue-600" />,
              title: "On-Time Delivery",
              desc: "We ensure timely project completion."
            },
            {
              icon: <ShieldCheck size={40} className="text-blue-600" />,
              title: "Secure Development",
              desc: "Security-first approach in every solution."
            },
            {
              icon: <Rocket size={40} className="text-blue-600" />,
              title: "Scalable Solutions",
              desc: "Future-ready and scalable architecture."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-white rounded-3xl shadow-lg border border-blue-100"
            >
              {item.icon}
              <h3 className="text-lg font-bold mt-4 mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-24 px-6 bg-blue-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-12">Our Hiring Process</h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {["Requirement Analysis", "Developer Selection", "Interview & Onboarding", "Project Kickoff"].map((step, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-2">Step {i + 1}</h3>
              <p className="text-blue-100">{step}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Scale Your Development Team?
        </h2>
        <p className="text-gray-600 mb-8">
          Hire expert developers today and accelerate your business growth.
        </p>
        <button className="px-10 py-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
          Hire Now
        </button>
      </section>

    </div>
  );
}