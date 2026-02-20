"use client";
import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { number: "500+", label: "Students Trained" },
    { number: "20+", label: "Live Projects" },
    { number: "95%", label: "Placement Support" },
    { number: "10+", label: "Industry Mentors" }
  ];

  return (
    <section className="bg-gray-950 text-white py-20 px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">
        
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="text-3xl font-bold text-blue-500">
              {item.number}
            </h3>
            <p className="text-gray-400 mt-2 text-sm">
              {item.label}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
