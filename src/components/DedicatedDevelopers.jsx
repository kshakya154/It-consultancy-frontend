import React from "react";
import { FaReact, FaPython, FaPhp } from "react-icons/fa";
import { SiMagento, SiVrchat, SiArduino } from "react-icons/si";

const developers = [
  { name: "VR", icon: <SiVrchat size={36} className="text-cyan-500" /> },
  { name: "React Native", icon: <FaReact size={36} className="text-cyan-500" /> },
  { name: "Python", icon: <FaPython size={36} className="text-blue-500" /> },
  { name: "Magento Developer", icon: <SiMagento size={36} className="text-orange-500" /> },
  { name: "PHP", icon: <FaPhp size={36} className="text-purple-600" /> },
  { name: "Embedded Developers", icon: <SiArduino size={36} className="text-blue-500" /> },
];

export default function DedicatedDevelopers() {
  return (
    <section className="py-16 px-4 max-w-screen-xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8">Hire Dedicated Developers</h2>

      <div className="flex justify-center mb-10">
        <button className="flex items-center gap-2 border border-blue-500 text-blue-500 font-medium px-5 py-2 rounded-md hover:bg-blue-50 transition">
          All Technologies <span className="text-lg">›</span>
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {developers.map((dev, index) => (
          <div
            key={index}
            className="group flex flex-col items-center text-center rounded-xl border border-blue-200 p-4 shadow-sm transition transform hover:-translate-y-2 hover:shadow-xl hover:bg-gradient-to-b hover:from-cyan-400 hover:to-blue-500 hover:text-white"
          >
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-md mb-4">
              {dev.icon}
            </div>
            <p className="text-sm font-medium mb-2">{dev.name}</p>

            {/* Hidden See More button on hover */}
            <button className="mt-auto opacity-0 group-hover:opacity-100 transition-all text-blue-500 hover:underline bg-white px-3 py-1 rounded border border-white">
              See More →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
