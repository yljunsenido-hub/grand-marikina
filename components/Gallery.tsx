"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "/gallery/image1.jpg",
    category: "Wedding",
  },
  {
    id: 2,
    src: "/gallery/image2.jpg",
    category: "Birthday",
  },
  {
    id: 3,
    src: "/gallery/image3.jpg",
    category: "Corporate",
  },
  {
    id: 4,
    src: "/gallery/image4.jpg",
    category: "Venue",
  },
];

const categories = ["All", "Wedding", "Birthday", "Corporate", "Venue"];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const openImage = (index: number) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const prevImage = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === 0 ? filteredImages.length - 1 : selectedIndex - 1,
    );
  };

  const nextImage = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === filteredImages.length - 1 ? 0 : selectedIndex + 1,
    );
  };

  return (
    <section className="text-white py-24 px-6 w-screen overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
          viewport={{ once: false }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Gallery</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Explore memorable celebrations and elegant venue moments at Grand
            Marikina.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
          viewport={{ once: false }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full border transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-white text-black border-white"
                  : "border-gray-700 text-gray-300 hover:border-white hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="relative">
          <button
            onClick={() => {
              const container = document.getElementById("gallery-scroll");
              container?.scrollBy({
                left: -400,
                behavior: "smooth",
              });
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 hover:bg-black p-3 rounded-full border border-white/20"
          >
            <ChevronLeft size={28} />
          </button>

          <div
            id="gallery-scroll"
            className="flex gap-6 overflow-x-scroll scroll-smooth px-14 overflow-y-hidden hide-scrollbar"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                onClick={() => openImage(index)}
                className="group relative min-w-[300px] h-[300px] rounded-2xl overflow-hidden cursor-pointer shrink-0"
              >
                <Image
                  src={image.src}
                  alt={image.category}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6">
                  <div>
                    <h3 className="text-2xl font-semibold">{image.category}</h3>
                    <p className="text-gray-300 text-sm">
                      Grand Marikina Event
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <button
            onClick={() => {
              const container = document.getElementById("gallery-scroll");
              container?.scrollBy({
                left: 400,
                behavior: "smooth",
              });
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 hover:bg-black p-3 rounded-full border border-white/20"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center px-4"
          >
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-white hover:text-gray-300"
            >
              <X size={34} />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:scale-110 transition"
            >
              <ChevronLeft size={50} />
            </button>

            <motion.div
              key={filteredImages[selectedIndex].src}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-6xl h-[75vh]"
            >
              <Image
                src={filteredImages[selectedIndex].src}
                alt="Gallery Image"
                fill
                className="object-contain rounded-2xl"
              />
            </motion.div>

            <button
              onClick={nextImage}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:scale-110 transition"
            >
              <ChevronRight size={50} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
