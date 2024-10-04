"use client";

export default function Footer() {
  return (
    <footer
      style={{ direction: "ltr" }} // Ensure RTL text flow
      className="bg-[#070707] text-white py-8"
    >
      <div className="mx-auto px-10 sm:px-40 flex flex-col md:flex-row justify-between items-center">
        {/* Left section: Links */}
        <div className="mb-8 md:mb-0">
          <ul className="space-y-4 text-center md:text-left">
            <li>
              <a href="#" className=" hover:text-gray-400">
                اعمالنا
              </a>
            </li>
            <li>
              <a href="/about_ar" className=" hover:text-gray-400">
                من نحن
              </a>
            </li>
            <li>
              <a href="#" className=" hover:text-gray-400">
                تواصل معنا
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
          <p className=" mb-6">
            وكالة تصميم تجربة تركز على بناء منتجات رقمية عملية وسهلة ومتمحورة
            حول الإنسان للمستقبل.
          </p>
          {/* Contact button */}
          <button className="primary_btn text-black font-bold py-4 px-10 rounded-full text-lg">
            تواصل معنا
          </button>
        </div>
      </div>

      {/* Bottom section: Copyright */}
      <div className="border-t border-[#2b2b2b] text-[#bababa] mt-8 pt-4 text-center ">
        © 2021-2024، وكالة ترقى، جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}
