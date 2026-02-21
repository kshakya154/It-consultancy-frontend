import React from "react";
import { useForm } from "react-hook-form";
import laptop from "../assets/laptop.jpg"
export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    alert("Form submitted successfully!");
    reset();
  };

  return (
    <section className="grid md:grid-cols-2 min-h-52">
      {/* Left Side - Image + Info */}
      <div
        className="bg-cover bg-center flex flex-col justify-center px-10 text-white"
        style={{
          backgroundImage:
            `url(${laptop})` // replace with your actual image path
        }}
      >
        <div className="bg-black/60 p-10 rounded-lg max-w-2xl h-4/6">
          <h2 className="text-4xl font-bold mb-3">Have a Project in mind?</h2>
          <p className="text-gray-300 mb-6">Reach out to us.</p>
          <div className="text-sm space-y-2">
            <p>
              Email:{" "}
              <a href="mailto:info@externlabs.com" className="hover:underline">
                info@externlabs.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+917357340117" className="hover:underline">
                +91–7357340117
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="bg-black text-white px-10 py-16 flex flex-col justify-center">
        <h2 className="text-3xl font-semibold mb-8">Contact Us</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1">Name</label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                placeholder="Enter your Full Name"
                className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-white py-2"
              />
              {errors.name && <p className="text-red-400 text-sm">{errors.name.message}</p>}
            </div>

            <div>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" }
                })}
                placeholder="Enter your Email"
                className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-white py-2"
              />
              {errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1">Phone No./Skype ID</label>
              <input
                type="text"
                {...register("phone", { required: "Phone number is required" })}
                placeholder="+91 Enter Phone No./Skype ID"
                className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-white py-2"
              />
              {errors.phone && <p className="text-red-400 text-sm">{errors.phone.message}</p>}
            </div>

            <div>
              <label className="block mb-1">Service Required</label>
              <select
                {...register("service", { required: "Please select a service" })}
                className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-white py-2"
              >
                <option value="">Interest</option>
                <option value="Web Development">Web Development</option>
                <option value="Mobile App">Mobile App</option>
                <option value="UI/UX Design">UI/UX Design</option>
              </select>
              {errors.service && <p className="text-red-400 text-sm">{errors.service.message}</p>}
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1">Message</label>
            <textarea
              rows="4"
              {...register("message", { required: "Message is required" })}
              placeholder="Enter a message"
              className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-white py-2"
            ></textarea>
            {errors.message && <p className="text-red-400 text-sm">{errors.message.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-white text-black px-6 py-2 mt-4 hover:bg-gray-200 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
