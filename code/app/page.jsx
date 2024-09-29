"use client";
import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/hero";
import Logos from "./components/logos";
import Services from "./components/services";

export default function Home() {
  return (
    <main
      className=""
      style={{ direction: "rtl" }} // Ensure RTL text flow
    >
      <Header />
      <Hero />
      <section className="bg-black w-full px-20 flex justify-center items-center">
        <div className="relative shadow-5xl w-full h-full rounded-xl overflow-hidden">
          <video
            className="w-full h-full object-cover"
            src="/taraqaavideo.mp4" // Replace with your video path
            controls
            loop
          />
        </div>
      </section>
      <section>
        <Services />
      </section>
    </main>
  );
}
