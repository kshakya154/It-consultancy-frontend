import React from "react";
import { useForm } from "react-hook-form";
import { FiMail } from "react-icons/fi";

export default function NewsletterSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Subscribed Email:", data.email);
    reset(); // Clear form after submission
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="bg-gradient-to-r from-purple-500 via-pink-400 to-orange-400 rounded-lg p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Text Content */}
        <div className="flex-1 text-white">
          <h2 className="text-3xl font-bold mb-2">
            Get Latest News on IT Industry
          </h2>
          <p className="mb-6">Subscribe to Newsletter.</p>

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <div className="relative w-full sm:max-w-md">
              <input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Enter a valid email",
                  },
                })}
                className="w-full pl-10 pr-4 py-3 rounded-md bg-white text-black"
              />
              <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              {errors.email && (
                <p className="text-sm text-red-100 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Illustration */}
        <div className="flex-shrink-0">
          <img
            src="/assets/newsletter.png"
            alt="Newsletter"
            className="w-48 md:w-60"
          />
        </div>
      </div>
    </section>
  );
}
