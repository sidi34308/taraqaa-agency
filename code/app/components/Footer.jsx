"use client";

export default function Footer() {
  return (
    <footer
      // style={{ direction: "ltr" }} // Ensure RTL text flow
      className="bg-[#070707] text-white py-8"
    >
      <div className="mx-auto px-10 sm:px-40 flex flex-col md:flex-row justify-between items-center">
        {/* Left section: Links */}
        <div className="mb-8 md:mb-0">
          <ul className="space-y-4 text-center md:text-left">
            <li>
              <a href="#" className=" hover:text-gray-400">
                Our Work
              </a>
            </li>
            <li>
              <a href="/about" className=" hover:text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className=" hover:text-gray-400">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Right section: Logo and description */}
        <div className="text-center md:text-right">
          <a className="flex justify-center md:justify-end mb-10" href="/">
            {/* Logo */}
            <img src="/logo.png" alt="Taraqaa Logo" className="h-20" />
          </a>
          <p className="mb-6">
            A design agency focused on creating practical, user-centered digital
            products for the future.
          </p>
          {/* Contact button */}
          <button className="primary_btn text-black font-bold py-4 px-10 rounded-full text-lg">
            Contact Us
          </button>
        </div>
      </div>

      {/* Bottom section: Copyright */}
      <div className="border-t border-[#2b2b2b] text-[#bababa] mt-8 pt-4 text-center ">
        © 2021-2024, Taraqaa Agency, All rights reserved.
      </div>
    </footer>
  );
}
