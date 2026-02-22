import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import React from "react";
const services = [
  {
    title: "Web Development Services",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    description:
      "We design and develop high-performance, scalable, and secure web applications tailored to your business goals. Our expert developers use modern technologies such as React, Node.js, and cloud-native architectures to deliver seamless digital experiences.",
    points: [
      "Custom Website Development",
      "Enterprise Web Applications",
      "E-commerce Platforms",
      "Progressive Web Apps (PWA)",
      "UI/UX Optimized Interfaces",
    ],
  },
  {
    title: "Mobile App Development",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
    description:
      "Our mobile app solutions empower businesses with engaging Android and iOS applications. We build intuitive, feature-rich, and performance-driven apps to ensure maximum user engagement and retention.",
    points: [
      "Android App Development",
      "iOS App Development",
      "Cross-platform Apps (Flutter / React Native)",
      "App Store Deployment",
      "App Maintenance & Support",
    ],
  },
  {
    title: "Backend & API Development",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    description:
      "We build robust backend systems and secure APIs that ensure smooth data flow and optimized performance. Our architecture is scalable and cloud-ready to support your growth.",
    points: [
      "RESTful API Development",
      "Microservices Architecture",
      "Database Design & Optimization",
      "Authentication & Security",
      "Performance Optimization",
    ],
  },
  {
    title: "Cloud & DevOps Solutions",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    description:
      "Accelerate innovation with cloud-native solutions and DevOps automation. We help businesses migrate, optimize, and manage their infrastructure securely and efficiently.",
    points: [
      "AWS / Azure / GCP Deployment",
      "CI/CD Pipeline Setup",
      "Infrastructure as Code",
      "Cloud Migration",
      "Monitoring & Maintenance",
    ],
  },
  {
    title: "Cyber Security & Compliance",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    description:
      "Protect your digital ecosystem with enterprise-grade cybersecurity solutions. We identify vulnerabilities, strengthen defenses, and ensure compliance with industry standards.",
    points: [
      "Security Audits",
      "Vulnerability Assessment",
      "Threat Detection & Prevention",
      "Data Protection Solutions",
      "Compliance Consulting",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export default function Services() {
  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-purple-50 min-h-screen text-gray-800">

      {/* HERO SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Comprehensive IT Services <br />
            For Modern Businesses
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            We provide end-to-end digital solutions designed to transform your
            business, enhance productivity, and deliver measurable growth.
            Our team combines strategy, design, and technology to build
            powerful digital experiences.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:scale-105 transition duration-300">
            Get Free Consultation
          </button>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
          alt="IT Services"
          className="rounded-3xl shadow-2xl"
        />
      </section>

      {/* SERVICES SECTIONS */}
      {services.map((service, index) => (
        <section
          key={index}
          className={`py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          <motion.img
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            src={service.image}
            alt={service.title}
            className="rounded-3xl shadow-xl"
          />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              {service.title}
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {service.description}
            </p>

            <ul className="space-y-3">
              {service.points.map((point, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-blue-600" size={20} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </section>
      ))}

      {/* LONG CONTENT SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            Why Choose Our IT Services?
          </h2>
          <p className="text-gray-600 leading-loose text-lg">
            Our company delivers innovative, scalable, and secure technology
            solutions that empower businesses to stay ahead in a rapidly
            evolving digital landscape. With a client-first approach, we focus
            on understanding your challenges and crafting customized strategies
            that drive measurable outcomes. From startups to enterprises, our
            solutions are engineered to deliver performance, reliability, and
            growth.
            <br /><br />
            We follow industry best practices, agile methodologies, and
            cutting-edge technologies to ensure that your project is delivered
            on time and within budget. Our experienced developers, designers,
            and strategists collaborate seamlessly to create exceptional
            digital products.
          </p>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="mb-8">
          Let’s build innovative digital solutions that accelerate your success.
        </p>
        <button className="px-10 py-4 bg-white text-blue-700 font-semibold rounded-full shadow-lg hover:scale-105 transition duration-300">
          Contact Us Today
        </button>
      </section>

    </div>
  );
}