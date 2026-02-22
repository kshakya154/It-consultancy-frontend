import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin } from "lucide-react";
import React from "react";
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    alert("Message sent successfully 🚀");
    reset();
  };

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
          Contact Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-gray-600 max-w-3xl mx-auto"
        >
          Let’s discuss your project and build something powerful together.
        </motion.p>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

          {/* FORM */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white shadow-2xl rounded-3xl p-10 border border-blue-100"
          >
            <h2 className="text-3xl font-bold mb-8">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

              {/* Name */}
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 3,
                      message: "Minimum 3 characters",
                    },
                  })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                      message: "Enter a valid email",
                    },
                  })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  {...register("message", {
                    required: "Message cannot be empty",
                    minLength: {
                      value: 10,
                      message: "Minimum 10 characters",
                    },
                  })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-4 rounded-full font-semibold shadow-lg disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>

            </form>
          </motion.div>

          {/* CONTACT INFO */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold mb-6">
              Get in Touch
            </h2>

            <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-2xl hover:shadow-lg transition">
              <Mail className="text-blue-600" size={28} />
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-gray-600">info@yourcompany.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-2xl hover:shadow-lg transition">
              <Phone className="text-blue-600" size={28} />
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-2xl hover:shadow-lg transition">
              <MapPin className="text-blue-600" size={28} />
              <div>
                <h3 className="font-semibold text-lg">Office</h3>
                <p className="text-gray-600">
                  Your Company Name <br />
                  India
                </p>
              </div>
            </div>

          </motion.div>

        </div>
      </section>

    </div>
  );
}