"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
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
    <motion.header
      className="w-full fixed top-0 left-0 z-50"
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : "-100%" }}
      transition={{ duration: 0.3 }}
    >
      <nav className="flex justify-between items-center w-full bg-black bg-opacity-90 border-b border-[#363636] p-4 px-6 md:px-20 font-bold backdrop-blur-lg">
        <a href="/" className="ml-2 md:ml-10">
          <img
            src="/logo-main.svg"
            alt="logo"
            className="w-24 md:w-32 p-1 object-contain"
          />
        </a>
        <div className="hidden md:flex items-center gap-5">
          <motion.a
            href="/about"
            className="text-white text-sm p-3 rounded-full hover:bg-[#0C0C0C] transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            About Us
          </motion.a>
          <motion.a
            href="#services"
            className="text-white text-sm p-3 rounded-full hover:bg-[#0C0C0C] transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Our Services
          </motion.a>

          <motion.button
            onClick={() => window.open("https://wa.me/97455229718", "_blank")}
            className="bg-[#CEEC33] text-black font-bold py-2 px-4 rounded-full hover:bg-[#b8d42e] transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us{" "}
          </motion.button>
        </div>
        <div className="md:hidden flex items-center">
          <motion.button
            className="text-[#CEEC33] p-2 rounded-xl border-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            <motion.div className="w-6 h-6 relative flex flex-col justify-center items-center">
              <motion.span
                className="bg-current h-0.5 w-full absolute"
                animate={
                  isMenuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }
                }
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="bg-current h-0.5 w-full absolute"
                animate={
                  isMenuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }
                }
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.button>
        </div>
      </nav>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 w-full bg-black bg-opacity-90 backdrop-blur-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center py-4 space-y-4">
              <motion.a
                href="/about"
                className="text-white text-lg hover:text-[#CEEC33] transition duration-300"
                onClick={toggleMenu}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                About Us
              </motion.a>
              <motion.a
                href="#services"
                className="text-white text-lg hover:text-[#CEEC33] transition duration-300"
                onClick={toggleMenu}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Our Services
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
