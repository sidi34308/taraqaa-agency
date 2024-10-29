"use client"; // Ensure the use of Tailwind CSS with Next.js

import React from "react";

const services = [
  {
    title: "Redesign and Develop Your Websites",
    description:
      "Unleash your creativity online with innovative design and development solutions",
  },
  {
    title: "Website Management",
    description:
      "Comprehensive website management including content updates and performance optimization.",
  },
  {
    title: "Branding and Identity",
    description:
      "We offer integrated solutions to build visual identity and strengthen corporate presence.",
  },
  {
    title: "Social Media Account Management",
    description:
      "Make your social media accounts shine with us! Management and strategies to boost engagement and reach.",
  },
];

const Services = () => {
  return (
    <section className="text-white bg-black py-12 text-left">
      <div className="w-full mx-auto">
        <h2 className="flex gap-4 sm:text-5xl text-4xl font-bold sm:mb-20 mb-8 sm:pl-40 pl-5">
          <img src="star.svg" className="animate-spin-slow" />
          Our Services
        </h2>
        <div className=" space-y-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex justify-between  gap-5 border-b border-[#222222] sm:pb-14 pb-4 group transition-all duration-300 sm:px-40 px-5"
            >
              {/* Title on the right */}
              <h3 className="sm:text-3xl text-2xl font-bold w-2/5 group-hover:text-lime-400">
                {service.title}
              </h3>

              {/* Description on the left */}
              <p className="sm:text-2xl text- w-3/5 group-hover:text-lime-400">
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
