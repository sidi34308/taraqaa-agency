"use client";
import { useEffect } from "react";

export default function useSmoothScroll() {
  useEffect(() => {
    let isScrolling;
    let lastPosition = 0;

    function easeOut(t) {
      return t * (2 - t);
    }

    function onScroll() {
      if (isScrolling) {
        cancelAnimationFrame(isScrolling);
      }

      const currentPosition = window.scrollY;

      function smoothScroll() {
        const distance = currentPosition - lastPosition;
        if (Math.abs(distance) < 1) return;

        lastPosition += easeOut(0.1) * distance;
        window.scrollTo(0, lastPosition);
        isScrolling = requestAnimationFrame(smoothScroll);
      }

      smoothScroll();
    }

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
}
