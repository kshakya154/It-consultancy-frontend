import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["Services", "About Us", "Hire Developers", "Industries", "Portfolio", "Case Studies", "Contact Us"];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          <span className="text-black">e</span>xtern <span className="text-gray-600">Labs</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          {navItems.map((item, index) => (
            <li key={index} className="hover:text-blue-600 cursor-pointer">{item}</li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 text-gray-700 font-medium pb-4">
          {navItems.map((item, index) => (
            <li key={index} className="hover:text-blue-600 cursor-pointer">{item}</li>
          ))}
        </ul>
      )}
    </nav>
  );
}
