"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ImageIcon } from "lucide-react";
import { motion } from "motion/react";

const IMAGES = [
  "https://drive.google.com/uc?export=view&id=1oW_8eyaaLgCGJM3zHfFRJIOA9utn6WUS",
  "https://drive.google.com/uc?export=view&id=1UKW9Xa9eMXZhOY2oJ9xq07SJJelKQE2J",
  "https://drive.google.com/uc?export=view&id=1hocBSjfaxgXhkQF3Qczp-R_IBuECKzub",
  "https://drive.google.com/uc?export=view&id=14N2aW3hKRkq2ySqQCMXYI35LIOkF8DMM",
  "https://drive.google.com/uc?export=view&id=1EL_ERDg1-VT8B4HsdJa4R_MLC_oy3zjR",
  "https://drive.google.com/uc?export=view&id=1xQ-n0df3uwpDGa0wTGckWHW8EEX-nL4R",
  "https://drive.google.com/uc?export=view&id=1ZeZD3wim6lfWnWlAaktl1Iom9GZXgAR3",
  "https://drive.google.com/uc?export=view&id=1UOnY9r7Yc36p5M9U2czpCB9ih6CX9EIp",
  "https://drive.google.com/uc?export=view&id=1NHyWHQLy_WxQwQGsbwew7XPBzpma7h0C",
  "https://drive.google.com/uc?export=view&id=1KDl2iVN7x79fGwnLv6AlHyiVc6yuESeH",
  "https://drive.google.com/uc?export=view&id=1YYFC6AEW3BsO_qMSmC-NIUc9BV5icvpu"
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] pb-32">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center">
          <Link href="/" className="flex items-center gap-2 text-gray-800 hover:text-[#F2994A] transition-colors font-mono uppercase tracking-widest text-[11px] font-bold">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* HEADER TITLE */}
      <section className="pt-40 pb-16 px-6 text-center">
        <div className="w-16 h-16 rounded-xl bg-gray-200 flex items-center justify-center mb-8 mx-auto">
          <ImageIcon className="w-8 h-8 text-gray-500" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold font-display tracking-tight text-gray-900 mb-6">
          Community <span className="text-[#F2994A]">Gallery</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Explore moments from our gatherings, trainings, and community events.
        </p>
      </section>

      {/* GRID */}
      <section className="px-6">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {IMAGES.map((src, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="aspect-square bg-gray-200 rounded-2xl overflow-hidden relative shadow-sm border border-gray-200"
            >
              <Image 
                src={src} 
                alt={`Gallery image ${idx + 1}`} 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-700" 
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
