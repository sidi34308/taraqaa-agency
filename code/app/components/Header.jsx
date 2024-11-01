"use client";
import React, { useState, useEffect, useCallback } from "react";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

    setIsVisible(visible);
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="flex justify-around items-center w-full mb-1 backdrop-blur-[0.6rem] bg-[#000] bg-opacity-90 border-b border-[#363636] p-2 font-bold">
        <a className="ml-10 " href="/">
          <img
            src="/logo-main.svg"
            alt="sum_logo"
            className="w-[8rem] p-1 object-contain"
          />
        </a>
        <div className="hidden md:flex text-center items-center gap-2 p-2">
          <a
            href="/about"
            className="text-white text-sm  p-3  rounded-full hover:bg-[#0C0C0C] transition duration-300"
          >
            About Us
          </a>
          <a
            href="#services"
            className="text-white text-sm  p-3 rounded-full  hover:bg-[#0C0C0C] transition duration-300"
          >
            Our Services
          </a>
          <a
            href="#contact"
            className="text-white text-sm p-3  rounded-full  hover:bg-[#0C0C0C] transition duration-300"
          >
            Contact Us
          </a>
        </div>
        <div className="md:hidden flex items-center">
          <button
            className="text-[#CEEC33] p-2 rounded-xl"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 transition duration-300 transform hover:scale-110"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden absolute top-full  h-screen left-0 w-full bg-black   bg-opacity-90 p-4">
            <ul className="h-screen pt-10 text-white text-center backdrop-blur-[0.1rem] text-2xl">
              <li className="mb-4">
                <a
                  href="#about"
                  onClick={toggleMenu}
                  className="hover:text-gray-300 transition duration-300"
                >
                  About Us
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="#services"
                  onClick={toggleMenu}
                  className="hover:text-gray-300 transition duration-300"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={toggleMenu}
                  className="hover:text-gray-300 transition duration-300"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
