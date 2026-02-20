"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-black text-white">

      {/* ================= HERO ================= */}
      <section className="relative py-32 px-6 text-center overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-black blur-3xl" />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-5xl md:text-6xl font-bold mb-6"
        >
          About <span className="text-blue-500">ANSI-X</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative text-gray-400 max-w-2xl mx-auto text-lg"
        >
          Building Global SaaS Developers through real-world product engineering.
        </motion.p>

      </section>


      {/* ================= MISSION / VISION ================= */}
      <section className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 p-10 rounded-2xl border border-gray-800"
        >
          <h3 className="text-2xl font-semibold mb-4 text-blue-500">
            Our Mission
          </h3>
          <p className="text-gray-400 leading-relaxed">
            To bridge the gap between traditional education and industry-ready
            product development by training students through real SaaS projects.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 p-10 rounded-2xl border border-gray-800"
        >
          <h3 className="text-2xl font-semibold mb-4 text-purple-500">
            Our Vision
          </h3>
          <p className="text-gray-400 leading-relaxed">
            To create a new generation of full-stack engineers capable of building,
            scaling, and deploying real-world SaaS products globally.
          </p>
        </motion.div>

      </section>


      {/* ================= WHY ANSI-X ================= */}
      <section className="py-24 px-6 max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-16">
          Why ANSI-X is Different
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {[
            "Real SaaS Project-Based Learning",
            "Industry Architecture & DevOps Focus",
            "Full Stack + Deployment + Scaling"
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-800"
            >
              <p className="text-lg text-gray-300">{item}</p>
            </motion.div>
          ))}

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="py-32 text-center border-t border-gray-800">

        <h2 className="text-4xl font-bold mb-6">
          Start Your Journey Today
        </h2>

        <p className="text-gray-400 mb-10">
          Join ANSI-X and build real SaaS applications.
        </p>

        <Link
          href="/programs"
          className="bg-blue-600 px-8 py-3 rounded-xl hover:bg-blue-700 transition shadow-lg"
        >
          Explore Programs
        </Link>

      </section>

    </div>
  );
}
