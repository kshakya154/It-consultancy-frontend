import { motion } from "framer-motion";
import { Users, Target, Rocket, ShieldCheck } from "lucide-react";
import React from "react";
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const stats = [
  { number: "150+", label: "Projects Delivered" },
  { number: "80+", label: "Happy Clients" },
  { number: "5+", label: "Years Experience" },
  { number: "25+", label: "Expert Developers" },
];

export default function About() {
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
              We Build Digital Experiences
              <span className="text-blue-600"> That Drive Growth</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              We are a forward-thinking IT company committed to delivering
              innovative, scalable, and secure technology solutions.
              Our team of engineers, designers, and strategists work
              collaboratively to transform ideas into powerful digital products.
            </p>
            <button className="px-8 py-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
              Work With Us
            </button>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
            alt="About Us"
            className="rounded-3xl shadow-2xl"
          />
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 px-6 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold">{stat.number}</h2>
              <p className="mt-2 text-blue-100">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-8 bg-blue-50 rounded-3xl shadow-lg"
          >
            <Target className="text-blue-600 mb-4" size={40} />
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to empower businesses through innovative digital
              transformation solutions. We focus on delivering scalable,
              high-performance, and secure applications that solve real-world
              problems and create measurable impact.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-8 bg-blue-50 rounded-3xl shadow-lg"
          >
            <Rocket className="text-blue-600 mb-4" size={40} />
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              Our vision is to become a global technology partner known for
              excellence, innovation, and customer satisfaction. We strive
              to continuously evolve with emerging technologies and industry
              trends.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 px-6 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold">
            Why Choose Us
          </h2>
          <p className="mt-4 text-gray-600">
            We combine technical expertise, creativity, and strategy to deliver exceptional results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          
          {[ 
            {
              icon: <Users size={40} className="text-blue-600" />,
              title: "Expert Team",
              desc: "Highly skilled professionals with diverse technical expertise."
            },
            {
              icon: <ShieldCheck size={40} className="text-blue-600" />,
              title: "Secure & Reliable",
              desc: "We build secure, scalable and reliable systems for long-term growth."
            },
            {
              icon: <Rocket size={40} className="text-blue-600" />,
              title: "Innovation Driven",
              desc: "We leverage cutting-edge technologies to stay ahead of competition."
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
              <h3 className="text-xl font-bold mt-4 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold">Meet Our Team</h2>
          <p className="mt-4 text-gray-600">
            Passionate experts dedicated to delivering excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {[1,2,3,4].map((_, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-blue-50 rounded-3xl p-6 text-center shadow-lg"
            >
              <img
                src={`https://i.pravatar.cc/300?img=${i+10}`}
                alt="team"
                className="rounded-full w-32 h-32 mx-auto mb-4"
              />
              <h4 className="font-bold">Team Member</h4>
              <p className="text-sm text-gray-500">Software Engineer</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          Let’s Build Something Great Together
        </h2>
        <button className="px-10 py-4 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:scale-105 transition duration-300">
          Contact Us
        </button>
      </section>

    </div>
  );
}