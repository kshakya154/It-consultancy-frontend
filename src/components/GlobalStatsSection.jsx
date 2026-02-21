import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const stats = [
  { number: 50, suffix: "+", label: "Technologies Worked" },
  { number: 126, suffix: "+", label: "Happy Clients" },
  { number: 183, suffix: "+", label: "Projects Completed" },
  { number: 54, suffix: "+", label: "Experts in Team" },
  { number: 17, suffix: "+", label: "Industries Served" },
];

export default function GlobalStatsSection() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto text-center">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-pink-500 via-orange-400 to-purple-500 text-transparent bg-clip-text "
      >
        We’re Serving Globally
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-xl text-gray-800 mb-12"
      >
        Let’s Work Together
      </motion.p>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-10 gap-x-6 justify-items-center mb-12">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: (i) => ({
                opacity: 1,
                y: 0,
                transition: {
                  delay: i * 0.2,
                  duration: 0.5,
                  ease: "easeOut",
                },
              }),
            }}
            className="text-center"
          >
            <AnimatedNumber value={stat.number} suffix={stat.suffix} />
            <p className="text-gray-600 text-sm md:text-base mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <motion.button
        whileHover={{
          scale: 1.08,
          backgroundColor: "#ffe9dc",
          borderColor: "#fb923c",
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="mt-4 border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-md font-medium hover:bg-orange-100 transition duration-300"
      >
        Get a Quote
      </motion.button>
    </section>
  );
}

// Count-up animation component
const AnimatedNumber = ({ value, suffix }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ count: value });
  }, [value]);

  return (
    <motion.h3
      className="text-3xl md:text-4xl font-semibold text-black"
      initial={{ count: 0 }}
      animate={{ count: value }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <motion.span>
        {Math.floor(value)}
        {suffix}
      </motion.span>
    </motion.h3>
  );
};
