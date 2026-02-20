"use client";
import { motion } from "framer-motion";

export default function Programs() {
  const programs = [
    {
      title: "Full Stack Java Developer",
      duration: "6 Months",
      level: "Advanced"
    },
    {
      title: "React Frontend Mastery",
      duration: "3 Months",
      level: "Intermediate"
    },
    {
      title: "Spring Boot Microservices",
      duration: "4 Months",
      level: "Advanced"
    }
  ];

  return (
    <section className="bg-black text-white py-24 px-8">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          Our Programs
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {programs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-blue-500 transition"
            >
              <h3 className="text-xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm mb-2">
                Duration: {item.duration}
              </p>

              <p className="text-gray-400 text-sm mb-6">
                Level: {item.level}
              </p>

              <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
                View Details
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
