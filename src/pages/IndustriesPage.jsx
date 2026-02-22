import { motion } from "framer-motion";
import {
  HeartPulse,
  Landmark,
  ShoppingCart,
  GraduationCap,
  Building2,
  Truck,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const industries = [
  {
    icon: <HeartPulse size={40} className="text-blue-600" />,
    title: "Healthcare",
    desc: "We develop secure and scalable healthcare solutions including telemedicine apps, patient management systems, and HIPAA-compliant platforms.",
  },
  {
    icon: <Landmark size={40} className="text-blue-600" />,
    title: "Fintech & Banking",
    desc: "From digital wallets to enterprise banking platforms, we build highly secure and compliant fintech applications.",
  },
  {
    icon: <ShoppingCart size={40} className="text-blue-600" />,
    title: "E-commerce",
    desc: "Custom e-commerce platforms with payment integration, inventory management, and high-converting user experiences.",
  },
  {
    icon: <GraduationCap size={40} className="text-blue-600" />,
    title: "Education & eLearning",
    desc: "Learning management systems, virtual classrooms, and scalable eLearning platforms.",
  },
  {
    icon: <Building2 size={40} className="text-blue-600" />,
    title: "Real Estate",
    desc: "Property listing portals, CRM systems, and virtual tour integrations for modern real estate businesses.",
  },
  {
    icon: <Truck size={40} className="text-blue-600" />,
    title: "Logistics & Transportation",
    desc: "Fleet management systems, tracking platforms, and logistics optimization software.",
  },
];

export default function Industries() {
  return (
    <div className="bg-white text-gray-800">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-6"
          >
            Industries We Serve
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            We empower businesses across multiple industries with innovative,
            scalable, and secure technology solutions tailored to their unique
            challenges and growth goals.
          </motion.p>
        </div>
      </section>

      {/* INDUSTRY GRID */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          {industries.map((industry, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="p-10 bg-blue-50 rounded-3xl shadow-lg border border-blue-100"
            >
              {industry.icon}
              <h3 className="text-xl font-bold mt-4 mb-3">
                {industry.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {industry.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DETAILED INDUSTRY CONTENT */}
      <section className="py-24 px-6 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            Delivering Industry-Specific Excellence
          </h2>

          <p className="text-gray-600 leading-loose text-lg">
            Our deep industry expertise allows us to understand domain-specific
            challenges and deliver customized digital solutions that drive
            operational efficiency, improve customer engagement, and increase
            profitability.
            <br /><br />
            Whether you operate in healthcare, fintech, education, or
            e-commerce, we combine advanced technologies like cloud computing,
            AI, big data, and automation to create future-ready systems.
            <br /><br />
            Our team collaborates closely with stakeholders to ensure that
            every solution aligns with regulatory requirements, business
            objectives, and market demands.
          </p>
        </div>
      </section>

      {/* WHY INDUSTRY EXPERIENCE MATTERS */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Why Industry Experience Matters
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Industry-specific knowledge ensures faster development cycles,
              improved compliance, and optimized user experiences. We leverage
              best practices and proven frameworks to deliver reliable and
              scalable systems tailored to your sector.
              <br /><br />
              By understanding the unique workflows and regulatory landscape
              of each industry, we create solutions that not only solve
              technical challenges but also deliver measurable business value.
            </p>
          </motion.div>

          <motion.img
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984"
            alt="Industry Solutions"
            className="rounded-3xl shadow-2xl"
          />
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          Let’s Transform Your Industry Together
        </h2>
        <p className="mb-8 text-blue-100">
          Partner with us to build innovative digital solutions tailored to your industry.
        </p>
        <button className="px-10 py-4 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:scale-105 transition duration-300">
          Get Started
        </button>
      </section>

    </div>
  );
}