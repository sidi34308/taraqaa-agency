"use client";
import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/hero";
import Logos from "./components/logos";
import Services from "./components/services";
import Footer from "./components/Footer";
import ClientLogos from "./components/ClientLogos";
import Contact from "./components/Contact";
import Testimonials from "./components/testimonials";
import ProjectGrid from "./components/ProjectGrid";
import WhatsAppPopup from "./components/WhatsAppPopup";
export default function Home() {
  return (
    <main
      className=""
      // style={{ direction: "rtl" }} // Ensure RTL text flow
    >
      <Header />
      <Hero />

      <section>
        <Services />
        <WhatsAppPopup />
      </section>
      <section>
        <ClientLogos />
      </section>
      <section>
        <ProjectGrid />
      </section>
      <section>
        {/* <Testimonials /> */}
        <Testimonials />
      </section>
      <section>
        <Contact />
      </section>
      <Footer />
    </main>
  );
}
