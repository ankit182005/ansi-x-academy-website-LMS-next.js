"use client";
import { motion } from "framer-motion";

export default function ProgramsHero() {
  return (
    <section className="relative py-32 text-center overflow-hidden">

      <div className="absolute w-96 h-96 bg-blue-600 blur-3xl opacity-20 -top-20 left-1/4"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative max-w-4xl mx-auto px-6"
      >
        <h1 className="text-5xl md:text-6xl font-bold">
          Master Real-World  
          <span className="text-blue-500"> Development</span>
        </h1>

        <p className="text-gray-400 mt-6 text-lg">
          Choose a structured program designed to make you industry-ready.
        </p>
      </motion.div>

    </section>
  );
}
