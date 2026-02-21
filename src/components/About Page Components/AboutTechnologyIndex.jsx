import React from "react";
import centerImage from "../../assets/tech-trend.webp"; // Replace with your own image path

export default function TechnologyIndex() {
  return (
    <section className="bg-white py-16 px-6 md:px-16">
      {/* Top Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-8 text-center mb-12">
        {[
          { value: "50+", label: "Technologies Worked" },
          { value: "126+", label: "Happy Clients" },
          { value: "183+", label: "Projects Completed" },
          { value: "54+", label: "Experts in Team" },
          { value: "17+", label: "Industries Served" },
        ].map((stat, index) => (
          <div key={index}>
            <h3 className="text-3xl font-bold">{stat.value}</h3>
            <p className="text-gray-600 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Title */}
      <div className="text-center mb-12">
        <p className="text-gray-500 uppercase tracking-wide mb-2">
          Technology Index
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Improve and Innovate with the Tech Trends
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our cultured aesthetics toward our workforce pushes the envelope of
          growth, innovation, and improvement in the tech business.
        </p>
      </div>

      {/* Content with Central Image */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left Progress Bars */}
        <div className="flex-1 space-y-6">
          <ProgressBar label="Mobile Development" percent={70} icon="📱" />
          <ProgressBar label="Web Development" percent={90} icon="🧑‍💻" />
          <ProgressBar label="UI/UX Design" percent={60} icon="🎨" />
        </div>

        {/* Center Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={centerImage}
            alt="Tech Trends"
            className="rounded-lg w-[80%]"
          />
        </div>

        {/* Right Progress Bars */}
        <div className="flex-1 space-y-6">
          <ProgressBar
            label="Internet of things"
            percent={80}
            align="right"
            icon="📶"
          />
          <ProgressBar
            label="Embedded System"
            percent={68}
            align="right"
            icon="⚡"
          />
          <ProgressBar
            label="Digital Marketing"
            percent={72}
            align="right"
            icon="📊"
          />
        </div>
      </div>
    </section>
  );
}

function ProgressBar({ label, percent, icon, align = "left" }) {
  return (
    <div
      className={`flex items-center justify-${
        align === "left" ? "start" : "end"
      } gap-4`}
    >
      {align === "right" ? (
        <>
          <span className="text-pink-500 font-semibold">{percent}%</span>
          <div className="w-1/2">
            <div className="h-2 bg-gray-200 rounded">
              <div
                className="h-2 bg-pink-400 rounded"
                style={{ width: `${percent}%` }}
              ></div>
            </div>
          </div>
          <span className="flex items-center gap-2 font-medium text-sm">
            {label} <span className="text-xl">{icon}</span>
          </span>
        </>
      ) : (
        <>
          <span className="flex items-center gap-2 font-medium text-sm">
            <span className="text-xl">{icon}</span> {label}
          </span>
          <div className="w-1/2">
            <div className="h-2 bg-gray-200 rounded">
              <div
                className="h-2 bg-pink-400 rounded"
                style={{ width: `${percent}%` }}
              ></div>
            </div>
          </div>
          <span className="text-pink-500 font-semibold">{percent}%</span>
        </>
      )}
    </div>
  );
}
