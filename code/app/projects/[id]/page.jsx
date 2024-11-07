// app/projects/[id]/page.js
"use client";

import { useParams } from "next/navigation";
import projects from "../../data/projectsData";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectDetailPage() {
  const { id } = useParams(); // Get the project ID from the URL

  // Find the project by ID
  const project = projects.find((project) => project.id == parseInt(id));

  if (!project) {
    return <p className="text-center text-white">Project not found</p>;
  }

  return (
    <div className="bg-black min-h-screen p-10 text-white flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      </motion.div>

      <motion.div
        className="relative w-full max-w-2xl h-64 sm:h-80 mb-6 overflow-hidden rounded-lg"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        <Image
          src={project.imageUrl}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-lg mb-6 max-w-2xl text-center"
      >
        {project.description}
      </motion.p>

      <div className="flex flex-wrap gap-3 justify-center mb-10">
        {project.tags.map((tag, index) => (
          <motion.span
            key={index}
            className="px-3 py-1 bg-[#CCEA2D] text-black rounded-full text-sm font-semibold"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
          >
            {tag}
          </motion.span>
        ))}
      </div>

      {/* Footer Section */}
      <footer className="w-full max-w-4xl mt-auto">
        <div className="flex justify-between items-center border-t border-gray-700 pt-4 mt-10">
          <p className="text-sm text-gray-500">© 2024 Project Showcase</p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-500 hover:text-white">
              Terms
            </a>
            <a href="#" className="text-gray-500 hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-gray-500 hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
