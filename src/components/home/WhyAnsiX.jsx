"use client";
import { motion } from "framer-motion";

export default function WhyAnsiX() {
  const features = [
    { title: "Real SaaS Projects", desc: "Build live healthcare & enterprise applications." },
    { title: "Global Curriculum", desc: "Industry-focused product-based learning." },
    { title: "Internship Access", desc: "Top students work on real systems." },
    { title: "Career Support", desc: "Resume + Interview preparation." }
  ];

  return (
    <section className="bg-gray-950 text-white py-24 px-8">
      <div className="max-w-6xl mx-auto text-center">
        
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-16"
        >
          Why ANSI-X?
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-10">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
