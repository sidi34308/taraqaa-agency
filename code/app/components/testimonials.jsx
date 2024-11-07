"use client";

import React from "react";

const testimonials = [
  {
    name: "Mohamed Chaikh",
    position: "Presdental candidate Mauritania 2024",
    image: "/profile-images/profile1.png", // Replace with actual path
    feedback:
      "The strategic approach to software development and branding significantly elevated our digital presence and boosted social media engagement.",
  },
  {
    name: "Ahmed Al-Fahad",
    position: "Creative Director at AlMansoori Digital",
    image: "/profile-images/profile3.png", // Replace with actual path
    feedback:
      "Their work on our branding and software solutions was exceptional. Attention to detail and innovative ideas gave us a competitive edge.",
  },
];

const testimonials_row2 = [
  {
    name: "Youssef B.",
    position: "Founder of YB Technologies",
    image: "/profile-images/profile2.png", // Replace with actual path
    feedback:
      "They helped streamline operations and boosted our brand visibility through expertise in software development and social media management.",
  },
  {
    name: "Nasser",
    position: "Brand Strategist at Nasser Marketing",
    image: "/profile-images/profile.png", // Replace with actual path
    feedback:
      "Their approach to branding and software solutions improved user experience and social media engagement while simplifying our internal processes.",
  },
];

export default function Testimonials() {
  return (
    <section className="text-white relative bg-black py-20  flex flex-col justify-center  md:flex-col gap-12">
      {/* <div className=" absolute w-[100px] sm:w-[251px] z-30 h-full left-0 gradient"></div> */}
      <h2 className="sm:pl-40 pl-5 text-white flex gap-4 sm:text-4xl lg:text-5xl text-3xl font-bold sm:mb-16 mb-8 items-center">
        <img src="star.svg" className="animate-spin-slow" />
        What our client thinks about us
      </h2>

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
      {/* <div className=" absolute w-[100px] sm:w-[251px] z-30 h-full right-0 gradient_reverse"></div> */}
    </section>
  );
}
