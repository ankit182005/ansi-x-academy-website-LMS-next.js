"use client";
import { motion } from "framer-motion";

export default function CurriculumSection({ program }) {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl font-bold mb-12 text-center">
          Curriculum Overview
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {program.curriculum.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800"
            >
              {item}
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
