import clsx from "clsx"; // Correct import for clsx
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(...inputs)); // Spread the inputs into clsx
}
