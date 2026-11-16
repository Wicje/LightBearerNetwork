"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { GalleryImage } from "@/lib/content";

export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
  return (
    <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
      {images.map((image, idx) => (
        <motion.div
          key={`${image.url}-${idx}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="aspect-square bg-gray-200 rounded-2xl overflow-hidden relative shadow-sm border border-gray-200"
        >
          <Image
            src={image.url}
            alt={image.alt || `Gallery image ${idx + 1}`}
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      ))}
    </div>
  );
}
