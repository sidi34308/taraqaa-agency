"use client"; // If needed for Next.js client-side components

import { useState } from "react";

export default function ClientLogos() {
  return (
    <div
      className=" main__container "
      style={{ direction: "ltr" }} // Ensure RTL text flow
    >
      <h1 className="text-white text-3xl">عملاؤنا</h1>
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
              <img src={"star.svg"} alt="" />
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
              <img src={"star.svg"} alt="" />
            </div>
          </ul>
        </div>
      </section>
    </div>
  );
}
