import React from "react";
import TeamSlider from "../components/TeamSlider";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function page() {
  return (
    <div
      className="bg-black"
      style={{ direction: "rtl" }} // Ensure RTL text flow
    >
      <Header />
      <TeamSlider />
      <Footer />
    </div>
  );
}
