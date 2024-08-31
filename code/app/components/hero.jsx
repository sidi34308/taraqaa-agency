"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  return (
    <section className="hero p-6 px-10">
      <div className="h-screen flex flex-col justify-center items-center text-center text-white">
        <h1 className="sm:text-5xl text-3xl sm:text-center text-right font-bold mb-4 leading-tight  sm:w-2/4">
          <span> أعد </span> <span>تعريف </span> <span>موقعك</span>{" "}
          <span>الإلكتروني</span> <span>وبرمجياتك</span> <span>مع</span>{" "}
          <span className="text-[#CEEC33] ">تــرقى</span>
        </h1>

        <p className="fade sm:text-lg sm:text-center text-sm text-right mb-8 max-w-md text-gray-300">
          نحن متخصصون في تحويل المواقع الإلكترونية والبرامج إلى منصات حديثة تركز
          على المستخدم وتزيد من التفاعل والنمو.
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
