"use client"
// 1. Import the Image component from Next.js
import Image from 'next/image';
import { motion } from "framer-motion";

// 2. Add 'imageUrl' and an optional 'index' for staggered animations
type VenueCardProps = {
  title: string;
  description: string;
  imageUrl: string; 
  index?: number; 
};

export default function VenueCard({ title, description, imageUrl, index = 0 }: VenueCardProps) {
  return (
    <motion.div 
      // Animation: Start invisible and slightly lower
      initial={{ opacity: 0, y: 30 }}
      // Animation: Fade in and slide up when scrolled into view
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      // Stagger the delay based on the index (0s, 0.2s, 0.4s)
      transition={{ duration: 1.0, delay: index * 0.2 }}
      // Animation: Float up slightly when the user hovers over it!
      whileHover={{ y: -8 }}
      className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden hover:border-gray-400 transition-colors cursor-pointer shadow-lg hover:shadow-2xl flex flex-col"
    >
      
      {/* 3. The Image Container */}
      <div className="relative w-full h-56">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill 
          className="object-cover" 
        />
      </div>

      {/* 4. The Text Content */}
      <div className="p-6 flex-grow">
        <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>

    </motion.div>
  );
}