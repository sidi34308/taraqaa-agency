"use client"; // For client-side interactivity

import { useRef } from "react";

const teamMembers = [
  {
    name: "سيدي الشيخ",
    role: "CO-FOUNDER, CEO",
    imageSrc: "/team/team3.png", // Replace with actual image paths
  },
  {
    name: "الشيخ محمد",
    role: "CO-FOUNDER, CFO",
    imageSrc: "/team/team1.png",
  },
  {
    name: "عبد الله الشيخ",
    role: "CO-FOUNDER, COO",
    imageSrc: "/team/team2.png",
  },
  {
    name: "إبراهيم شطح",
    role: "CO-FOUNDER",
    imageSrc: "/team/team4.png",
  },
];

export default function TeamSlider() {
  const sliderRef = useRef(null);

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  return (
    <div className="h-full text-white py-16  pt-40">
      <div className="text-right mb-8 px-20 sm:px-40">
        <div className="flex mb-12 gap-4 sm:px-40">
          <img src="/star.svg" className="animate-spin-slow w-14" />

          <h2 className="text-6xl font-bold ">من نحن</h2>
        </div>
        <p className="max-w-xl mx-auto ">
          وكالة تراقى هي وكالة تصميم وتطوير رقمية مقرها قطر. نحن متخصصون في
          تحويل المواقع الإلكترونية والبرامج الحالية إلى منصات حديثة سهلة
          الاستخدام تزيد من التفاعل والنمو.
        </p>
      </div>

      <div className="relative max-w-full px-4 mx-auto ">
        <h3 className="text-3xl text-right font-bold mb-12 px-20 sm:px-72">
          فريقنا
        </h3>

        <div className="flex justify-center">
          <div className="relative overflow-hidden w-full">
            <div
              ref={sliderRef}
              className="flex overflow-x-auto gap-2 scrollbar-hide"
            >
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex-none w-60 flex flex-col items-center relative"
                >
                  <img
                    src={member.imageSrc}
                    alt={member.name}
                    className="w-50 rounded-xl object-cover mb-4"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end bottom-10 items-center text-center ">
                    <h3 className="text-xl font-semibold text-white">
                      {member.name}
                    </h3>
                    <p className="text-[#e1e1e1] ">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Arrows */}
        <div className="flex justify-end items-center gap-2 px-20 sm:px-80 pt-4 ">
          <button
            onClick={handleNext}
            className="bg-[#CEEC33] px-4 hover:bg-[#acc728] transition duration-300 p-2 rounded-3xl text-black"
          >
            <img src="arrow-right.png" className="w-7" />
          </button>
          <button
            onClick={handlePrev}
            className="bg-[#CEEC33] px-4 hover:bg-[#acc728] transition duration-300 p-2 rounded-3xl text-black"
          >
            <img src="arrow-left.png" className="w-7" />
          </button>
        </div>
      </div>
    </div>
  );
}
