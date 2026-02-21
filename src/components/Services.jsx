// Services.jsx
import React from "react";
import ServiceCard from "./ServiceCard";

import MobileIcon from "../assets/mobile.jpg";
import SoftwareIcon from "../assets/software.jpg";
import EmbeddedIcon from "../assets/embedded.jpg";
import MarketingIcon from "../assets/marketing.jpg";

export default function Services() {
  const services = [
    {
      title: "Mobile Development",
      icon: MobileIcon,
      bgColor: "linear-gradient(135deg, #c084fc, #9333ea)",
    },
    {
      title: "Software Development",
      icon: SoftwareIcon,
      bgColor: "linear-gradient(135deg, #5eead4, #0ea5e9)",
    },
    {
      title: "Embedded Development",
      icon: EmbeddedIcon,
      bgColor: "linear-gradient(135deg, #fcd34d, #f97316)",
    },
    {
      title: "Digital Marketing",
      icon: MarketingIcon,
      bgColor: "linear-gradient(135deg, #fb7185, #f43f5e)",
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold mb-12 text-center">Services</h2>

      <div className="flex flex-wrap justify-center -mx-2">
        {services.map((service, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-6"
          >
            <ServiceCard
              icon={service.icon}
              title={service.title}
              bgColor={service.bgColor}
            />
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="px-6 py-3 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition">
          All Services →
        </button>
      </div>
    </section>
  );
}
