"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  return (
    <section className="hero p-6 px-10">
      <div className="title h-screen flex flex-col justify-center items-center text-center text-white">
        <h1 className=" text-6xl text-left sm:text-center font-bold mb-4 sm:w-3/5  animate-fadeIn">
          Redefine your website and software with{" "}
          <span className="text-[#CEEC33]">Taraqaa</span>
        </h1>

        <p className="sm:text-lg text-sm text-left sm:text-center mb-8 max-w-md text-gray-300  animate-fadeIn">
          We specialize in transforming websites and software into modern,
          user-focused platforms that enhance engagement and growth.
        </p>

        <div className="flex gap-3">
          <button className="primary_btn text-black font-bold py-4 px-10 rounded-full text-lg">
            Contact Us
          </button>
          <button className="bg-transparent border-2 border-white text-white font-bold py-2 px-4 rounded-full">
            Our Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
