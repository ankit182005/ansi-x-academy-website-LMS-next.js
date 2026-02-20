"use client";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rahul S.",
      role: "Full Stack Developer",
      text: "ANSI-X gave me real SaaS exposure. This is not normal coaching — it's product-level training."
    },
    {
      name: "Priya M.",
      role: "React Developer",
      text: "The mentorship and real project experience helped me crack interviews confidently."
    },
    {
      name: "Amit K.",
      role: "Backend Engineer",
      text: "Working on live systems during training made a huge difference in my career."
    }
  ];

  return (
    <section className="bg-black text-white py-24 px-8">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          What Our Students Say
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-blue-500 transition"
            >
              <p className="text-gray-400 text-sm mb-6">
                "{item.text}"
              </p>

              <h4 className="font-semibold">
                {item.name}
              </h4>

              <p className="text-blue-500 text-sm">
                {item.role}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
