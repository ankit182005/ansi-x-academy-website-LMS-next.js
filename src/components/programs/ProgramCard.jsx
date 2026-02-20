"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ProgramCard({ program }) {
  const {
    level,
    duration,
    title,
    description,
    price,
    slug,
    tools = [],
  } = program;

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-2xl p-8 shadow-xl transition-all duration-300 hover:border-blue-600"
    >
      {/* Top Row */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-xs bg-blue-600 px-3 py-1 rounded-full">
          {level}
        </span>

        <span className="text-sm text-gray-400">
          {duration}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-semibold mb-4">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 mb-6">
        {description}
      </p>

      {/* Tools */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tools.map((tool, index) => (
          <span
            key={index}
            className="text-xs bg-gray-800 border border-gray-700 px-3 py-1 rounded-full text-gray-300"
          >
            {tool}
          </span>
        ))}
      </div>

      {/* Bottom */}
      <div className="flex items-center justify-between mt-6">
        <span className="text-xl font-bold text-blue-500">
          {price}
        </span>

        <Link
          href={`/programs/${slug}`}
          className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
}
