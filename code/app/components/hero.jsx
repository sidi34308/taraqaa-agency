"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  return (
    <section className="hero p-4">
      <div className="h-screen flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-4xl font-bold mb-4 leading-tight sm:text-5xl sm:leading-normal sm:w-2/4">
          اطلق عنان إبداعك على الإنترنت مع حلول{" "}
          <span className="text-[#CEEC33]">التصميم والتطوير المبتكرة</span>
        </h1>
        <p className="text-lg mb-8 max-w-md text-gray-300">
          ترقى تقدم لك خبرة فريدة في تصميم وتطوير مواقع الويب
        </p>
        <div className="flex space-x-4">
          <button className="primary_btn text-black font-bold py-4 px-10 rounded-full text-lg">
            تواصل معنا
          </button>
          <button className="bg-transparent border-2 border-white text-white font-bold py-2 px-4 rounded-full">
            خدماتنا
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
