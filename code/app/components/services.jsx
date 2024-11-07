"use client";

import React from "react";
import { motion } from "framer-motion";

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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="text-white bg-black py-12 text-left overflow-hidden ">
      <div className="w-full mx-auto">
        <motion.h2
          className="flex gap-4 sm:text-5xl text-4xl font-bold sm:mb-20 mb-8 sm:pl-40 pl-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.img src="star.svg" className="animate-spin-slow" />
          Our Services
        </motion.h2>
        <motion.div
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col sm:flex-row justify-between gap-5 border-b  border-[#222222] sm:pb-14 pb-4 group sm:px-40 px-5  "
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <motion.h3
                className="sm:text-3xl text-2xl font-bold w-full sm:w-2/5  group-hover:text-lime-400"
                variants={itemVariants}
              >
                {service.title}
              </motion.h3>
              <motion.p
                className="sm:text-2xl text-lg w-full sm:w-3/5 group-hover:text-lime-400"
                variants={itemVariants}
              >
                {service.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
