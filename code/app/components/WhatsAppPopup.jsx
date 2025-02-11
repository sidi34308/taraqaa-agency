import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppPopup() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMinimized, setIsMinimized] = useState(true);

  const handleMinimize = () => setIsMinimized(true);
  const handleRestore = () => setIsMinimized(false);
  const handleHide = () => setIsVisible(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isVisible && !isMinimized && (
        <motion.div
          className="bg-green-500 text-white p-4 rounded-3xl shadow-lg w-64 max-w-xs"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-between items-center p-1">
            <span>Let’s contact on WhatsApp?</span>
            <button
              onClick={handleMinimize}
              className="text-white hover:text-gray-300 border-none"
            >
              X
            </button>
          </div>
          <a
            href="https://wa.me/97455229718"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block bg-white text-green-500 px-4 py-2 rounded-full"
          >
            <FaWhatsapp className="inline-block mr-2 text-green-500" />
            Chat Now
          </a>
        </motion.div>
      )}

      {isVisible && isMinimized && (
        <motion.div
          className="flex justify-center items-center bg-green-500 text-white w-16 h-16 rounded-full cursor-pointer"
          onClick={handleRestore}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <FaWhatsapp className="text-2xl" />
        </motion.div>
      )}
    </div>
  );
}
