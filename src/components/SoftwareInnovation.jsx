import React from "react";
import { motion } from "framer-motion";
import devImg from "../assets/working-guy.jpg"; // replace with your actual image path

const services = [
  {
    title: "Software Development",
    icon: "👨‍💻", // Replace with SVG/icon if needed
    desc: "We have a proven track record of delivering Innovative Software Solutions to our clients in various industries.",
  },
  {
    title: "Embedded Systems",
    icon: "🤖",
    desc: "We have delivered various solutions to many businesses, and tech startups specialised in hardware manufacturing and embedded systems.",
  },
  {
    title: "Digital Marketing",
    icon: "📡",
    desc: "We provide Strategic Digital Marketing Services that help our clients reach their customers while making them stand out from the competition.",
  },
];

export default function SoftwareInnovation() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
      {/* Left Image */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <img
          src={devImg}
          alt="Working guy"
          className="w-[80%] max-w-sm object-contain drop-shadow-xl"
        />
      </motion.div>

      {/* Right Text */}
      <div className="w-full md:w-1/2">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-purple-500 text-lg font-medium mb-2"
        >
          About Company
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl font-bold mb-10"
        >
          Partner for Software Innovation
        </motion.h1>

        <div className="space-y-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.2, duration: 0.5 }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="flex items-start gap-4 group cursor-pointer"
            >
              {/* Icon Box */}
              <div className="w-14 h-14 min-w-[3.5rem] flex items-center justify-center border-2 border-pink-500 text-2xl rounded-md group-hover:bg-pink-100 transition">
                {service.icon}
              </div>

              {/* Text */}
              <div>
                <h3 className="text-xl font-semibold mb-1 group-hover:text-pink-600 transition duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
