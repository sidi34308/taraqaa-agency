"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services does Taraqaa Agency offer?",
    answer:
      "Taraqaa Agency offers a wide range of digital marketing services including UI/UX, social media management, content creation, and web development.",
  },
  {
    question: "How can I contact Taraqaa Agency?",
    answer:
      "You can contact us through our website's contact form, via email at info@taraqaa.com",
  },
  {
    question: "What industries does Taraqaa Agency specialize in?",
    answer:
      "We specialize in various industries including technology, healthcare, finance, and retail, providing tailored marketing strategies for each sector.",
  },
  {
    question: "Does Taraqaa Agency offer customized marketing plans?",
    answer:
      "Yes, we create customized marketing plans based on the unique needs and goals of each client to ensure the best possible results.",
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="relative bg-light-primary p-6 sm:p-12 lg:p-20 m-4 sm:m-10 lg:m-20 rounded-2xl w-full max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-bold mb-8 text-white text-left"
        >
          Frequently Asked Questions
        </motion.h1>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
}

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="bg-[#0e0e0e] p-4 sm:p-6 rounded-xl border border-[#1b1b1b] cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-lg sm:text-xl font-semibold text-dark-primary">
          {question}
        </h2>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <ChevronDown size={24} className="text-light-primary" />
        </motion.div>
      </div>
      <motion.p
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="text-gray-300 mt-2 overflow-hidden"
      >
        {answer}
      </motion.p>
    </div>
  );
};
