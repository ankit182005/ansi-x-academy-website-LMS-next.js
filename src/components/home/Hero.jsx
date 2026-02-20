"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-black text-white min-h-screen flex items-center px-8 overflow-hidden">
        {/* Extra Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black opacity-90"></div>

      
      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20 top-20 left-10"></div>
      <div className="absolute w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20 bottom-10 right-10"></div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-500 uppercase tracking-widest text-sm mb-4">
            ANSI-X Global Tech Academy
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Become a Global-Level Full Stack Developer
          </h1>

          <p className="mt-6 text-gray-400 text-lg">
            Master React, Spring Boot & DevOps by building real SaaS products.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="relative bg-blue-600 px-6 py-3 rounded overflow-hidden group">
              <span className="relative z-10">Explore Programs</span>
              <div className="absolute inset-0 bg-blue-500 blur-md opacity-0 group-hover:opacity-50 transition"></div>
            </button>

            <button className="border border-gray-600 px-6 py-3 rounded hover:border-blue-500 transition">
              Start Your Journey
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="h-80 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl animate-pulse"></div>
        </motion.div>

      </div>
    </section>
  );
}
