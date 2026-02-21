import React from "react";
import illustration from "../assets/sysadmin_03.jpg";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 py-20">
      <div data-cursor className="w-full md:w-1/2">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span data-cursor className="text-black transition">
            Delivering
          </span>
          <br />
          <span data-cursor className="text-black transition">
            Innovative
          </span>{" "}
          <span data-cursor className="text-black transition">
            IT
          </span>
          <br />
          <span data-cursor className="text-blue-600 transition">
            Solution
          </span>
        </h1>

        <p className="text-gray-600 mb-6 text-base sm:text-lg md:text-xl">
          Helping Globalize the businesses by using digital ways to empower the
          business ecosystem to reach all new heights.
        </p>
        <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-600 hover:text-white transition">
          Get a Quote
        </button>
      </div>

      <div className="w-full md:w-1/2 mb-10 md:mb-0 md:ml-10 flex justify-center">
        <img
          src={illustration}
          alt="Illustration"
          className="w-4/5 sm:w-3/4 md:w-full max-w-md object-contain"
        />
      </div>
    </section>
  );
}
