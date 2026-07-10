"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

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

export default function FadingGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-[800px] mx-auto aspect-[4/3] sm:aspect-[16/9] bg-gray-200 rounded-2xl overflow-hidden relative shadow-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image 
            src={IMAGES[currentIndex]} 
            alt={`Gallery ${currentIndex + 1}`} 
            fill 
            className="object-cover" 
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </AnimatePresence>
      
      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {IMAGES.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${idx === currentIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
