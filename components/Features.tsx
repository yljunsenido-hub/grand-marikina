"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Elegant Weddings",
    description:
      "A breathtaking, romantic backdrop for your special day with customizable ambient lighting and spacious seating.",
    icon: (
      <svg
        className="w-10 h-10 text-yellow-500 mb-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
  {
    title: "Corporate Galas",
    description:
      "Professional and polished. Equipped with state-of-the-art AV systems, high-speed Wi-Fi, and modular staging.",
    icon: (
      <svg
        className="w-10 h-10 text-blue-500 mb-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Private Parties",
    description:
      "From milestone birthdays to grand reunions. Celebrate your best moments in an exclusive, luxurious setting.",
    icon: (
      <svg
        className="w-10 h-10 text-purple-500 mb-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-gray-900 text-white relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }} /* Only animates once per refresh */
          transition={{ duration: 1.0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Unforgettable Experiences</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Whether you are hosting an intimate gathering or a massive
            celebration, our venue adapts to your vision.
          </p>
        </motion.div>

        {/* The 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }} /* Staggers the cards 1-2-3 */
              whileHover={{ y: -8 }}
              className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-gray-500 transition-colors shadow-lg hover:shadow-2xl"
            >
              {service.icon}
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
