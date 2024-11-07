"use client";

import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#070707] text-white py-8">
      <div className="mx-auto px-10 sm:px-40 flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Left section: Links */}
        <div className="mb-8 md:mb-0 flex flex-col justify-center items-center md:items-start">
          <ul className="space-y-4 text-center md:text-left">
            <li>
              <a href="#work" className="hover:text-gray-400">
                Our Work
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/97455229718"
                target="_blank"
                className="hover:text-gray-400"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Center section: Contact details */}
        <div className="text-center md:text-left mb-2 md:mb-0">
          <p className="mb-2">
            <strong></strong>{" "}
            <a href="mailto:info@taraqaa.com" className="hover:text-gray-400">
              info@taraqaa.com
            </a>
          </p>
          <p className="mb-4">
            <strong></strong>{" "}
            <a href="tel:+97455229718" className="hover:text-gray-400">
              +974 55229718
            </a>
          </p>
        </div>

        {/* Right section: Logo and description */}
        <div className="text-center md:text-right">
          <a className="flex justify-center md:justify-end mb-6" href="/">
            {/* Logo */}
            <img src="/logo.png" alt="Taraqaa Logo" className="h-20" />
          </a>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="flex justify-center items-center space-x-6 mt-6">
        <a
          href="https://www.linkedin.com/company/taraqaa/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          {/* LinkedIn Icon */}
          <FaLinkedin size={24} />
        </a>

        <a
          href="https://www.instagram.com/taraqaa.tech"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          {/* Instagram Icon */}
          <FaInstagram size={24} />
        </a>
      </div>

      {/* Bottom section: Copyright */}
      <div className="border-t border-[#2b2b2b] flex justify-center items-center text-[#bababa] mt-8 pt-4 text-center">
        <p>© 2024, Taraqaa Agency</p>
      </div>
    </footer>
  );
}
