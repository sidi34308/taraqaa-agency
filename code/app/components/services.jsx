"use client"; // Ensure the use of Tailwind CSS with Next.js

import React from "react";

const services = [
  {
    title: "إعادة تصميم وتطوير مواقعك الإلكترونية",
    description:
      "اطلق عنان إبداعك على الإنترنت مع حلول التصميم والتطوير المبتكرة",
  },
  {
    title: "إدارة موقعك",
    description: "إدارة شاملة لمواقع الويب تشمل تعديل المحتوى وتحسين الأداء.",
  },
  {
    title: "الهوية والعلامة التجارية",
    description:
      "نقدم حلولًا متكاملة لبناء الصورة البصرية وتعزيز حضور الشركات.",
  },
  {
    title: "إدارة حسابات التواصل الاجتماعي",
    description:
      "اجعل حساباتك الاجتماعية تتألق معنا! إدارة وألية لتعزيز التفاعل والانتشار.",
  },
];

const Services = () => {
  return (
    <section className="text-white bg-black py-12">
      <div className="w-full mx-auto  ">
        <h2 className="flex gap-4 sm:text-5xl text-4xl font-bold sm:mb-20 mb-8 sm:pr-40 pr-5">
          <img src="star.svg" className="animate-spin-slow" />
          خدماتنا
        </h2>
        <div className="space-y-8">
          {services.map((service, index) => (
            <div
              key={index}
              className=" flex justify-between items-center border-b border-[#222222] sm:pb-14 pb-4 group transition-all duration-300 sm:px-40 px-5"
            >
              {/* Title on the right */}
              <h3 className="sm:text-3xl text-2xl font-bold text-right w-2/5 group-hover:text-lime-400">
                {service.title}
              </h3>

              {/* Description on the left */}
              <p className="sm:text-2xl w-3/5 group-hover:text-lime-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
