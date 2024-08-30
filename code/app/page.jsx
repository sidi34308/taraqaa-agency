"use client";
import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/hero";
import Logos from "./components/logos";

export default function Home() {
  return (
    <main className="m-0">
      <Header />
      <Hero />
      {/* <section className="bg-white w-full p-20 flex justify-center items-center">
        <div className="relative shadow-5xl w-full h-full rounded-xl overflow-hidden">
          <video
            className="w-full h-full object-cover"
            src="/taraqaavideo.mp4" // Replace with your video path
            controls
            loop
          />
        </div>
      </section> */}
      {/* <section className="bg-black h-[70vh] flex justify-center ">
        <div className="mt-20 flex flex-col justify-center items-center">
          <h4 className="p-10 text-white">
            {" "}
            <strong>شراكتنا </strong>السابقة
          </h4>
          <Logos />
        </div>
      </section> */}
    </main>
  );
}
