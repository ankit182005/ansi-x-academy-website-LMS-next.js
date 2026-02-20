"use client";
import { motion } from "framer-motion";

export default function ProgramDetailHero({ program }) {
  return (
    <section className="relative py-32 overflow-hidden">

      <div className="absolute w-96 h-96 bg-blue-600 blur-3xl opacity-20 -top-20 left-1/3"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-5xl mx-auto px-6 text-center"
      >
        <span className="bg-blue-600 px-4 py-1 rounded-full text-sm">
          {program.level}
        </span>

        <h1 className="text-5xl font-bold mt-6">
          {program.title}
        </h1>

        <p className="text-gray-400 mt-6 text-lg">
          {program.description}
        </p>

        <div className="flex justify-center gap-8 mt-8 text-gray-400">
          <span>{program.duration}</span>
          <span>{program.price}</span>
        </div>

      </motion.div>
    </section>
  );
}
