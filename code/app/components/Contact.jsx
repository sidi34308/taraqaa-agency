"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  // Animation for the content to appear from bottom to top
  const containerVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-black ">
      <motion.div
        className="relative flex flex-col  justify-center items-center w-full h-[100vh]  px-10 sm:px-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariant}
      >
        <motion.h2
          className="text-white text-3xl sm:text-6xl mb-6 sm:mb-12 text-center font-bold"
          variants={containerVariant}
        >
          Ready to elevate your digital presence?
        </motion.h2>

        <motion.p
          className="text-gray-300 text-lg sm:text-2xl text-center mb-8"
          variants={containerVariant}
          transition={{ delay: 0.2 }}
        >
          Let’s discuss how <span className="text-[#CEEC33]">Taraqaa</span> can
          help bring your vision to life.
        </motion.p>

        <motion.div variants={containerVariant} transition={{ delay: 0.4 }}>
          <button
            onClick={() => window.open("https://wa.me/97455229718", "_blank")}
            className="primary_btn text-black font-bold py-4 px-8 sm:py-3 sm:px-8 rounded-full text-lg sm:text-xl"
          >
            Contact Us
          </button>
        </motion.div>

        <motion.p
          className="text-gray-300 text-base sm:text-lg mt-6 text-center"
          variants={containerVariant}
          transition={{ delay: 0.6 }}
        >
          or send us an email at{" "}
          <span className="text-[#CEEC33]">info@taraqaa.com</span>
        </motion.p>
      </motion.div>
    </div>
  );
}
