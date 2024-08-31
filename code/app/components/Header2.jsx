"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#0c0c0c] text-white p-5">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">Brand</Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-6 transition-all duration-500 ease-in-out`}
        >
          <Link
            href="/"
            className="block mt-4 md:inline-block md:mt-0 hover:text-yellow-500 transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block mt-4 md:inline-block md:mt-0 hover:text-yellow-500 transition duration-300"
          >
            About
          </Link>
          <Link
            href="/services"
            className="block mt-4 md:inline-block md:mt-0 hover:text-yellow-500 transition duration-300"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="block mt-4 md:inline-block md:mt-0 hover:text-yellow-500 transition duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 transition-all duration-500 ease-in-out">
          <Link
            href="/"
            className="block text-lg hover:text-yellow-500 transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block text-lg hover:text-yellow-500 transition duration-300"
          >
            About
          </Link>
          <Link
            href="/services"
            className="block text-lg hover:text-yellow-500 transition duration-300"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="block text-lg hover:text-yellow-500 transition duration-300"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
