"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Masdar news",
    description:
      "A fully responsive online store with advanced filtering and search capabilities.",
    imageUrl: "/projects/project1.png",
    tags: ["Development", "Social media Management"],
  },
  {
    id: 2,
    title: "Shadda website",
    description: "Shadda platform",
    imageUrl: "/projects/project2.png",
    tags: ["Branding"],
  },
  {
    id: 3,
    title: "Mohamed Chaikh 2024 campaign",
    description: "Mohamed Chaikh 2024 campaign",
    imageUrl: "/projects/project3.png",
    tags: ["branding", "UI/UX", "Development", "Social media Management"],
  },
  // Add more projects as needed
];

export default function ProjectGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div
      className="bg-black min-h-screen mx-auto px-5 sm:px-10 lg:px-20 py-8 "
      ref={ref}
    >
      <h2 className="sm:pl-40 pl-5 text-white flex gap-4 sm:text-4xl lg:text-5xl text-3xl font-bold sm:mb-16 mb-8 items-center">
        <img src="star.svg" className="animate-spin-slow w-8 h-8" />
        Our Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    // <Link href={`/projects/${project.id}`} passHref>
    <motion.div
      className="bg-[#1f1f1f] text-white rounded-2xl shadow-md overflow-hidden --cursor-pointer"
      whileHover={{
        scale: 1.05,
        rotateX: 5,
        rotateY: 5,
        transition: { type: "spring", stiffness: 300 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative h-64 sm:h-80">
        <Image
          src={project.imageUrl}
          alt={project.title}
          layout="fill"
          objectFit="cover"
        />
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-white text-center text-sm px-4">
            {project.description}
          </p>
        </motion.div>
      </div>
      <div className="p-4">
        <h3 className="text-lg sm:text-xl font-semibold mb-2">
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-black text-[#CCEA2D] rounded-full text-xs sm:text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
    // </Link>
  );
}
