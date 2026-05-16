"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <div
      className="relative h-screen w-full flex items-center justify-center bg-cover bg-center"
      style={{
        // A stunning placeholder image of an event venue!
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2000&auto=format&fit=crop')",
      }}
    >
      {/* The Dark Overlay: This dims the background so the white text pops! */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* The Content Container */}
      <div className="relative z-10 text-center px-4 flex flex-col items-center">
        {/* Animated Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
          viewport={{ once: false }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg"
        >
          Grand Marikina Events
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.3 }}
          viewport={{
            once: false,
          }}
          className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl drop-shadow-md"
        >
          Create unforgettable memories in Metro Manila's most elegant venue.
        </motion.p>

        {/* Animated Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.6 }}
          viewport={{ once: false }}
        >
          <Link
            href="/contact"
            className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition shadow-xl"
          >
            Book Your Event
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
