import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaFacebookF,
  FaBriefcase,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#060816] text-white pt-16 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 border-b border-gray-700 pb-10">
        {/* Left Column */}
        <div>
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-white">e</span>
            <span className="text-white">xtern</span>
            <span className="block text-xl font-normal mt-1">Labs</span>
          </h2>
          <p className="text-sm mb-4">Empowering Businesses...</p>
          <p className="text-gray-300 mb-4 max-w-sm">
            Custom Web & Software Development Services.
          </p>

          <div className="flex gap-4 mt-4 text-lg">
            <a href="#"><FaTwitter className="hover:text-[#1DA1F2]" /></a>
            <a href="#"><FaInstagram className="hover:text-pink-500" /></a>
            <a href="#"><FaLinkedinIn className="hover:text-[#0A66C2]" /></a>
            <a href="#"><FaYoutube className="hover:text-[#FF0000]" /></a>
            <a href="#"><FaFacebookF className="hover:text-[#1877F2]" /></a>
            <a href="#"><FaBriefcase className="hover:text-green-500" /></a>
          </div>
        </div>

        {/* Middle Column */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-2">Useful Links</h3>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li><a href="#">About Company</a></li>
              <li><a href="#">Career</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms and Condition</a></li>
              <li><a href="#">Sitemap</a></li>
            </ul>
          </div>
          <div>
            <h3 className="invisible md:visible font-semibold mb-2">&nbsp;</h3>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li><a href="#">Mobile Development</a></li>
              <li><a href="#">Software Product Development</a></li>
              <li><a href="#">Embedded System Designing</a></li>
              <li><a href="#">Digital Marketing Services</a></li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div>
          <h3 className="font-semibold mb-4">We are here</h3>
          <div className="flex gap-2 mb-2">
            <img src="https://flagcdn.com/us.svg" alt="US" className="w-6 h-4" />
            <img src="https://flagcdn.com/ae.svg" alt="UAE" className="w-6 h-4" />
            <img src="https://flagcdn.com/in.svg" alt="India" className="w-6 h-4" />
          </div>

          <div className="rounded overflow-hidden mt-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.518362968957!2d75.77700807553455!3d26.856809376678862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5e3b63ed209%3A0xd2c77a1ad761fd4a!2sExtern%20Labs%20Private%20Limited!5e0!3m2!1sen!2sin!4v1682680009167!5m2!1sen!2sin"
              width="100%"
              height="150"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Extern Labs Location"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-6 text-center text-gray-400 text-sm">
        2023-24 © All rights reserved by Extern Labs Inc.
      </div>
    </footer>
  );
}
