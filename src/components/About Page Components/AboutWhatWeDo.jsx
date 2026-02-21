import React from "react";
import boardImage from "../../assets/whatwedo.jpg"; // Rename your image to whatwedo.png or update the path accordingly

export default function WhatWeDo() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center px-6 py-12 md:py-20 gap-12 bg-white">
      {/* Left Image */}
      <div className="w-full md:w-1/2 relative">
        <img
          src={boardImage}
          alt="What we do"
          className="rounded-3xl w-full object-cover"
        />
        {/* Optional decorative shapes could be added here with absolute positioning */}
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <p className="text-gray-600 tracking-wide uppercase mb-2">
          Experience. Execution. Excellence.
        </p>
        <h2 className="text-4xl font-bold text-black mb-6">
          What We Actually Do
        </h2>
        <p className="text-gray-700 text-lg mb-8">
          Extern Labs Inc. is a leading Software Development company working on
          the latest technologies like Blockchain, Artificial Intelligence, and
          Machine Learning for its clients around the world. We are a team of
          highly skilled developers working on Web and Application Development,
          IoT, and Embedded System Designing.
        </p>
        <button className="border border-blue-500 text-blue-500 px-6 py-3 rounded-md hover:bg-blue-500 hover:text-white transition">
          Get a Quote
        </button>
      </div>
    </section>
  );
}
