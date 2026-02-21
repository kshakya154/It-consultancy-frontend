import React from "react";
import { FaBullseye } from "react-icons/fa";
import { FaBinoculars } from "react-icons/fa";
import { FaGem } from "react-icons/fa";

const items = [
  {
    icon: <FaBullseye size={40} className="text-red-500" />,
    title: "Mission",
    description: `Our Mission Unites Work With Talent. We Strive To Achieve Extraordinary Results By Assisting Our Clients To Make Distinctive Advancements. Leveraging The Best Software Technology And Establishing A Great Company That Is Profitable And At The Same Time Appeals To, Hold On To Exceptional People.`,
  },
  {
    icon: <FaBinoculars size={40} className="text-blue-500" />,
    title: "Vision",
    description: `Our Obsession With What We Do Is What Motivates Us. Our Vision Pilots Our Business Every Day: To Provide Our Clients With The Best IT Consulting And Software Development Services Around The World Whilst Taking Care Of Our People And Respecting Our Values.`,
  },
  {
    icon: <FaGem size={40} className="text-purple-500" />,
    title: "Value",
    description: `Our Company Relies On Innovation, Creativity, And Knowledge. As One Of The Best Software Development Companies In India, We Are Proud Of What We Do And Unite Organizations That Respect The Values Like- Integrity And Honesty, Creativity And Innovation, Dedication And Passion, Excellence, Respect, Talent Retention, And Continuous Motivation.`,
  },
];

export default function MissionVisionValue() {
  return (
    <div className="max-w-screen-xl mx-auto py-20 px-6 grid md:grid-cols-3 gap-10 text-center">
      {items.map((item, index) => (
        <div key={index} className="space-y-4">
          <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-200 to-purple-100 shadow-md">
            {item.icon}
          </div>
          <h2 className="text-2xl font-semibold">{item.title}</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
