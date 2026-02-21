import React from "react";
import { motion } from "framer-motion";

const industries = [
  {
    title: "eCommerce",
    desc: "Proficiency of an IT consultant will drive your eCommerce business on the right path and amplify the consumer shopping experience.",
    icon: "🛒",
  },
  {
    title: "FinTech",
    desc: "We’ve developed innovative products for the finance industry to make their work more efficient.",
    icon: "💰",
  },
  {
    title: "Education & eLearning",
    desc: "Stronger connections between teachers and students with our Web and Software development Services.",
    icon: "🎓",
  },
  {
    title: "On Demand",
    desc: "Broad range of on-demand services using advanced technologies and expert app development.",
    icon: "📱",
  },
  {
    title: "Logistics & Transport",
    desc: "Built a whole Supply Chain System with advanced features for the logistics industry.",
    icon: "🚚",
  },
  {
    title: "Fitness",
    desc: "Automate gym operations from Attendance to Fitness Tracking with our Fitness Solution.",
    icon: "🏋️",
  },
  {
    title: "Media and Entertainment",
    desc: "Help entertainment clients reach new heights in an expanding industry.",
    icon: "🎬",
  },
  {
    title: "Gaming & Leisure",
    desc: "Working with gaming industry clients using advanced tech like VR to enhance UI/UX.",
    icon: "🎮",
  },
  {
    title: "Food & Restaurants",
    desc: "Software & Digital Marketing Services for restaurants, cafes, and food chains.",
    icon: "🍽️",
  },
  {
    title: "Banking and Finance",
    desc: "Helping clients manage accounts, work, finances, and customers efficiently.",
    icon: "🏛️",
  },
  {
    title: "Real Estate",
    desc: "Helping Real Estate clients manage their work and reach more customers.",
    icon: "🏘️",
  },
  {
    title: "Travel and Hospitality",
    desc: "Making travel more fun by bringing services online and reaching new customers.",
    icon: "✈️",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, type: "spring", stiffness: 60 },
  }),
};

export default function Industries() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center text-purple-500 text-lg font-semibold mb-2"
      >
        Industry Expertise
      </motion.h2>

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Different Industries we serve
      </motion.h1>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
        {industries.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              backgroundColor: "#f9fafb",
              transition: { duration: 0.3 },
            }}
            className="bg-white rounded-2xl p-6 border border-gray-200 cursor-pointer group transform transition-all duration-300"
          >
            <motion.div
              whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-4xl mb-4 inline-block group-hover:animate-bounce"
            >
              {item.icon}
            </motion.div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-purple-600 transition duration-300">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 group-hover:text-gray-800 transition duration-300">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
