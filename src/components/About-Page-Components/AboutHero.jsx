import React from "react";
import teamImage from "../../assets/about-hero.svg"; // replace with your actual image path

export default function AboutHero() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-12">
      {/* Left Content */}
      <div className="flex-1">
        <h1 className="text-5xl font-bold leading-tight mb-6">
          Your Partner
          <br />
          for Software
          <br />
          Innovation
        </h1>
        <p className="text-gray-700 mb-6">
          There is a fine line between being a perfectionist and being obsessed.
          We don’t see it. At Extern Labs, we develop innovative and visionary
          products and services that deliver total communication and information
          solutions. We blend your dreams into the shape of customized products.
          Be it our mobile application development, responsive web designing,
          eCommerce solutions, CRM, digital transformations, or UI/UX, all
          accentuate quality and quantity.
        </p>
        <p className="text-gray-700 mb-8">
          We thrive on excellence and deliver products and services that ought
          to be delivered on time.
        </p>
        <button className="border border-blue-500 text-blue-500 px-6 py-2 hover:bg-blue-100 transition-all">
          Get a Quote
        </button>
      </div>

      {/* Right Image */}
      <div className="flex-1 relative">
        <img
          src={teamImage}
          alt="Team Working"
          className="rounded-[60px] w-full"
        />

        {/* Decorative Circle */}
        <div className="absolute -top-6 -left-6 w-16 h-16 border-[10px] border-purple-300 rounded-full z-10"></div>

        {/* Decorative Triangle */}
        <div className="absolute bottom-6 right-6 z-10">
          <svg
            width="60"
            height="60"
            viewBox="0 0 100 100"
            className="rotate-45 fill-blue-500 opacity-80"
          >
            <polygon points="0,0 100,50 0,100" />
          </svg>
        </div>
      </div>
    </section>
  );
}
