"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  // Animation variants for the hero section elements
  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const buttonVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.4 },
    },
  };

  // Floating animation for the smile icon
  const floatVariant = {
    animate: {
      y: [0, -10, 0], // Moves up and down
      x: [0, 10, 0], // Moves left and right
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity, // Infinite loop
        repeatType: "loop",
      },
    },
  };
  const floatVariant2 = {
    animate: {
      y: [0, 9, 0], // Moves up and down
      x: [0, -9, 0], // Moves left and right
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity, // Infinite loop
        repeatType: "loop",
      },
    },
  };
  return (
    <section className="relative p-6 px-5 sm:px-10 bg-gradient-to-b from-black via-[#141414] to-black">
      <div className="title h-screen flex flex-col justify-center items-center text-center text-white">
        {/* Floating  SVG */}
        <motion.img
          src="/smile.svg"
          alt="floating smile"
          className="absolute w-12 h-12 sm:w-24 sm:h-24 top-28 sm:top-1/3  right-24 sm:right-40  opacity-80"
          variants={floatVariant}
          animate="animate"
        />
        <motion.img
          src="/up.svg"
          alt="floating smile"
          className="absolute w-12 h-12 sm:w-24 sm:h-24 top-28 sm:top-1/3 left-24 sm:left-40 opacity-80"
          variants={floatVariant2}
          animate="animate"
        />
        <motion.h1
          className="text-4xl sm:text-6xl font-bold mb-4 sm:w-3/5"
          initial="hidden"
          animate="visible"
          variants={textVariant}
        >
          Take Your Brand to New Heights with{" "}
          <span className="text-[#CEEC33]">Taraqaa</span>
        </motion.h1>

        <motion.p
          className="text-sm text-center sm:text-lg mb-8 max-w-md text-gray-300"
          initial="hidden"
          animate="visible"
          variants={textVariant}
          transition={{ delay: 0.2 }}
        >
          From stunning websites to powerful software and dynamic social media –
          Taraqaa takes your brand further.
        </motion.p>

        <motion.div
          className="flex gap-3"
          initial="hidden"
          animate="visible"
          variants={buttonVariant}
        >
          <button
            onClick={() => window.open("https://wa.me/97455229718", "_blank")}
            className="primary_btn text-black font-bold py-3 px-4 sm:px-10 rounded-full text-lg"
          >
            Contact Us
          </button>

          <a
            href="#services"
            className=" border-none   text-white  py-3 px-4 rounded-full"
          >
            Our Services
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
