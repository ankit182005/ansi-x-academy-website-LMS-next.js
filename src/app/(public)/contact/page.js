"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="bg-black text-white">

      {/* ================= HERO ================= */}
      <section className="py-32 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-6"
        >
          Contact Us
        </motion.h1>

        <p className="text-gray-400">
          We'd love to hear from you.
        </p>

      </section>


      {/* ================= CONTACT GRID ================= */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 p-10 rounded-2xl border border-gray-800"
        >

          <h3 className="text-2xl font-semibold mb-6">
            Send a Message
          </h3>

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-gray-800 border border-gray-700 p-4 rounded-lg focus:outline-none focus:border-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-gray-800 border border-gray-700 p-4 rounded-lg focus:outline-none focus:border-blue-500"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full bg-gray-800 border border-gray-700 p-4 rounded-lg focus:outline-none focus:border-blue-500"
            />

            <button
              type="submit"
              className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>

          </form>

        </motion.div>


        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >

          <div>
            <h4 className="text-xl font-semibold mb-2 text-blue-500">
              Location
            </h4>
            <p className="text-gray-400">
              Pune, Maharashtra, India
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-2 text-purple-500">
              Email
            </h4>
            <p className="text-gray-400">
              support@ansixacademy.com
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-2 text-green-500">
              Phone
            </h4>
            <p className="text-gray-400">
              +91 XXXXX XXXXX
            </p>
          </div>

        </motion.div>

      </section>

    </div>
  );
}
