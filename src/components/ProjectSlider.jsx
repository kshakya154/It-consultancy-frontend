import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const projects = [
  {
    id: "08",
    title: "NitroXpress",
    description:
      "NitroXpress is a third-party logistics service provider. We built an entire logistics management system for them...",
    image: "/mobile.jpg", // Replace with your actual image path
    client: "NitroXpress",
    industry: "Logistics & Shipment",
    services: "Third-party logistics",
  },
  // Add more projects as needed
];

export default function ProjectSlider() {
  return (
    <section className="py-16 px-4 max-w-screen-xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <p className="text-orange-500 font-semibold mb-1">Projects</p>
          <h2 className="text-4xl font-bold">Case Studies</h2>
        </div>
        <button className="text-orange-500 border border-orange-500 px-4 py-1 rounded hover:bg-orange-50 transition">
          see more →
        </button>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={50}
        slidesPerView={1}
        className="rounded-xl overflow-hidden"
      >
        {projects.map((proj, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-1 md:grid-cols-2 bg-orange-50 rounded-xl p-6 md:p-12 gap-8">
              {/* Image */}
              <div className="flex justify-center items-center">
                <div className="bg-gradient-to-br from-orange-300 to-orange-500 rounded-lg p-6">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-[320px] md:w-[450px] mx-auto"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-col justify-center">
                <p className="text-orange-500 font-semibold mb-2">{proj.id}</p>
                <h3 className="text-2xl font-bold mb-4">{proj.title}</h3>
                <p className="text-gray-700 mb-6">{proj.description}</p>
                <button className="w-fit border border-orange-500 text-orange-500 px-5 py-2 rounded hover:bg-orange-100 transition">
                  View Details →
                </button>
              </div>
            </div>

            {/* Footer Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 text-center mt-8 gap-4 text-sm">
              <div>
                <p className="text-orange-500 font-medium mb-1">Client</p>
                <p className="font-semibold text-black">{proj.client}</p>
              </div>
              <div>
                <p className="text-orange-500 font-medium mb-1">Industry</p>
                <p className="font-semibold text-black">{proj.industry}</p>
              </div>
              <div>
                <p className="text-orange-500 font-medium mb-1">Services</p>
                <p className="font-semibold text-black">{proj.services}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
