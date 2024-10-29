"use client";

import React from "react";

const testimonials = [
  {
    name: "Maria T.",
    position: "Co-founder of NexGen Apps",
    image: "/profile-images/profile1.png", // Replace with actual path
    feedback:
      "Paul delivered beyond our expectations. Not only did they create a beautiful and functional product, but he also provided invaluable design insights. His passion for design really shows in the final result.",
  },
  {
    name: "Jake R.",
    position: "Product Manager at TechWave",
    image: "/profile-images/profile1.png", // Replace with actual path
    feedback:
      "Paul transformed our outdated website into a modern, intuitive platform. The process was seamless from start to finish, and his design has significantly improved our user experience. We couldn’t be happier!",
  },
];
const testimonials_row2 = [
  {
    name: "Maria T.",
    position: "Co-founder of NexGen Apps",
    image: "/profile-images/profile1.png", // Replace with actual path
    feedback:
      "Paul delivered beyond our expectations. Not only did they create a beautiful and functional product, but he also provided invaluable design insights. His passion for design really shows in the final result.",
  },
  {
    name: "Jake R.",
    position: "Product Manager at TechWave",
    image: "/profile-images/profile1.png", // Replace with actual path
    feedback:
      "Paul transformed our outdated website into a modern, intuitive platform. The process was seamless from start to finish, and his design has significantly improved our user experience. We couldn’t be happier!",
  },
];

export default function Testimonials() {
  return (
    <section className="text-white relative bg-black py-16 h-[150vh] flex flex-col  md:flex-col gap-12">
      <div className=" absolute w-[100px] sm:w-[251px] z-30 h-full left-0 gradient"></div>

      {/* Left side */}
      {/* <div className="flex-1">
        <div className="mb-4">
          <span className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm">
            Testimonials
          </span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold leading-snug mb-4">
          See what others <span className="text-white">say</span> about me
        </h2>
        <p className="text-gray-400 mb-8">
          I have helped many businesses make a killer design for their product.
          Wanna be the next?
        </p>
        <a
          href="/contact"
          className="inline-flex items-center px-6 py-3 border border-white text-white rounded-full font-bold hover:bg-white hover:text-black transition duration-300"
        >
          Contact <span className="ml-2">→</span>
        </a>
      </div> */}

      {/* Right side - Testimonials */}
      <div className="  enable-animation  ">
        <div className="marquee_testimpnials">
          <ul className="marquee__content_testimpnials h-[40vh]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] min-h-full marquee__item_testimpnials p-6 rounded-3xl flex-col shadow-lg transition duration-300 hover:bg-[#333333]"
              >
                <p className="mb-6 max-w-2xl">{testimonial.feedback}</p>
                <div className="flex justify-between  w-full">
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full"
                    />
                    <div>
                      <div className="text-white font-bold">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {testimonial.position}
                      </div>
                    </div>
                  </div>
                  <img src="/testimo.svg" className="w-10" />
                </div>
              </div>
            ))}
          </ul>
          <ul className="marquee__content_testimpnials h-[40vh]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] min-h-full marquee__item_testimpnials p-6 rounded-3xl flex-col  shadow-lg transition duration-300 hover:bg-[#333333]"
              >
                <p className="max-w-2xl mb-6">{testimonial.feedback}</p>
                <div className="flex justify-between  w-full">
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full"
                    />
                    <div>
                      <div className="text-white font-bold">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {testimonial.position}
                      </div>
                    </div>
                  </div>
                  <img src="/testimo.svg" className="w-10" />
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
      {/* reverse  - Testimonials */}
      <div className="  enable-animation_reverse  ">
        <div className="marquee_testimpnials">
          <ul className="marquee__content_testimpnials h-[40vh]">
            {testimonials_row2.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] min-h-full marquee__item_testimpnials p-6 rounded-3xl flex-col shadow-lg transition duration-300 hover:bg-[#333333]"
              >
                <p className="mb-6 max-w-2xl">{testimonial.feedback}</p>
                <div className="flex justify-between  w-full">
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full"
                    />
                    <div>
                      <div className="text-white font-bold">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {testimonial.position}
                      </div>
                    </div>
                  </div>
                  <img src="/testimo.svg" className="w-10" />
                </div>
              </div>
            ))}
          </ul>
          <ul className="marquee__content_testimpnials h-[40vh]">
            {testimonials_row2.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] min-h-full marquee__item_testimpnials p-6 rounded-3xl flex-col  shadow-lg transition duration-300 hover:bg-[#333333]"
              >
                <p className="max-w-2xl mb-6">{testimonial.feedback}</p>
                <div className="flex justify-between  w-full">
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full"
                    />
                    <div>
                      <div className="text-white font-bold">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {testimonial.position}
                      </div>
                    </div>
                  </div>
                  <img src="/testimo.svg" className="w-10" />
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
      <div className=" absolute w-[100px] sm:w-[251px] z-30 h-full right-0 gradient_reverse"></div>
    </section>
  );
}
