"use client"; // If needed for Next.js client-side components

import { useState } from "react";

export default function ClientLogos() {
  return (
    <div className=" relative ">
      <div className=" absolute w-[100px] sm:w-[591px] z-30 h-full left-0 gradient"></div>
      <div
        className=" main__container overflow-hidden"
        // style={{ direction: "ltr" }} // Ensure RTL text flow
      >
        <h1 className="text-white text-2xl font-bold">TRUSTED BY</h1>
        <section className="enable-animation ">
          <div className="marquee">
            <ul className="marquee__content">
              <div className=" marquee__item">
                <img src={"/clientlogos/koora.png"} alt="" />
              </div>
              <div className=" marquee__item">
                <img src={"/clientlogos/Masdar.png"} alt="" />
              </div>
              <div className=" marquee__item">
                <img src={"/clientlogos/artistsai.png"} alt="" />
              </div>
              <div className=" marquee__item">
                <img src={"/clientlogos/TVMauritanie.png"} alt="" />
              </div>
              <div className=" marquee__item">
                <img src={"/clientlogos/attariq.png"} alt="" />
              </div>
              <div className=" marquee__item">
                <img src={"/clientlogos/shadda.png"} alt="" />
              </div>
            </ul>

            <ul className="marquee__content ">
              <div className=" marquee__item">
                <img src={"/clientlogos/koora.png"} alt="" />
              </div>
              <div className=" marquee__item">
                <img src={"/clientlogos/Masdar.png"} alt="" />
              </div>
              <div className=" marquee__item">
                <img src={"/clientlogos/artistsai.png"} alt="" />
              </div>
              <div className=" marquee__item">
                <img src={"/clientlogos/TVMauritanie.png"} alt="" />
              </div>
              <div className=" marquee__item">
                <img src={"/clientlogos/attariq.png"} alt="" />
              </div>
              <div className=" marquee__item">
                <img src={"/clientlogos/shadda.png"} alt="" />
              </div>
            </ul>
          </div>
        </section>
        <div className=" absolute w-[100px] sm:w-[591px] z-30 h-full right-0 gradient_reverse"></div>
      </div>
    </div>
  );
}
