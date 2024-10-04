"use client"; // For client-side interactivity

import { useEffect } from "react";

export default function useSmoothScroll() {
  useEffect(() => {
    let scrollTimeout;

    const smoothScroll = (event) => {
      // Prevent the default scrolling
      event.preventDefault();

      // Clear previous scroll timeout to avoid overlapping animations
      clearTimeout(scrollTimeout);

      // Get the current scroll position
      let scrollPosition = window.scrollY || window.pageYOffset;

      // Calculate the target scroll based on the event delta
      let scrollTarget = scrollPosition + event.deltaY * 0.2; // Adjust multiplier to control speed

      // Smoothly animate to the target scroll position
      scrollTimeout = setInterval(() => {
        scrollPosition += (scrollTarget - scrollPosition) * 0.1; // Adjust to control easing

        window.scrollTo(0, scrollPosition);

        // Stop the animation when close enough to the target
        if (Math.abs(scrollTarget - scrollPosition) < 0.5) {
          clearTimeout(scrollTimeout);
        }
      }, 16); // Run the loop every 16ms (~60fps)
    };

    // Add the scroll event listener
    window.addEventListener("wheel", smoothScroll, { passive: false });

    // Cleanup when the component is unmounted
    return () => {
      window.removeEventListener("wheel", smoothScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);
}
