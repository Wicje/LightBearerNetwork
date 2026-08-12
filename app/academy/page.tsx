"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { GraduationCap, ChevronRight, ArrowLeft } from "lucide-react";
import ApplicationModal from "@/components/ApplicationModal";

export default function AcademyPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#363535] text-white selection:bg-[#F2994A] selection:text-white pb-32">
      <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} pathway="academy" />
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#363535]/90 backdrop-blur-md border-b border-[#555]">
        <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center">
          <Link href="/" className="flex items-center gap-2 text-white hover:text-[#F2994A] transition-colors font-mono uppercase tracking-widest text-[11px] font-bold">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-40 md:pt-48 pb-20 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-[1000px] mx-auto"
        >
          <div className="w-16 h-16 rounded-xl bg-[#F2994A] flex items-center justify-center mb-10">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-display tracking-tight mb-8">
            Light Bearers <span className="text-[#107C41]">Academy</span>
          </h1>
          
          <p className="text-[16px] md:text-[22px] text-gray-300 max-w-3xl leading-[1.6] mb-8 font-medium">
            The knowledge hub of Light Bearers Network.
          </p>
          <p className="text-[16px] md:text-[20px] text-gray-400 max-w-3xl leading-[1.6] mb-8">
            The Academy is a growing library of free resources, premium masterclasses, courses, and audio teachings designed to sharpen your thinking, strengthen your skills, and accelerate your growth.
          </p>

          <p className="text-[16px] md:text-[20px] text-[#F2994A] max-w-3xl leading-[1.6] mb-12">
            Learn at your own pace through free trainings, invest in deeper learning through paid sessions, revisit past recordings, or join live classes as they&apos;re released.
          </p>

          <button onClick={() => setIsModalOpen(true)} className="bg-[#107C41] hover:bg-[#0c5c30] text-white px-8 py-4 rounded-[4px] font-mono font-bold tracking-[0.1em] transition-all uppercase text-[12px] flex items-center gap-2 justify-center w-full sm:w-auto hover:scale-105 active:scale-95">
            Explore the Academy <ChevronRight className="w-4 h-4" />
          </button>
        </motion.div>
      </section>

      {/* DETAILED CONTENT */}
      <section className="px-6 py-14 bg-[#484848] border-y border-[#555]">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">What You&apos;ll Find</h2>
            <p className="text-gray-400 text-[16px] md:text-[18px]">
              New trainings are released regularly. Stay connected to the community so you never miss an opportunity to learn and grow.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {[
              { type: "Free Resources", desc: "Practical teachings available to every community member." },
              { type: "Masterclasses", desc: "In-depth, structured sessions for deeper learning." },
              { type: "Courses", desc: "Comprehensive learning programs (Coming Soon)." },
              { type: "Audio Teachings", desc: "Timeless messages you can listen to anytime." }
            ].map((item, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={idx} 
                className="bg-[#363535] p-8 rounded-2xl border border-[#555] hover:border-[#F2994A]/50 transition-colors group"
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-white font-bold text-xl md:text-2xl font-display group-hover:text-[#F2994A] transition-colors">{item.type}</h4>
                  <ChevronRight className="w-6 h-6 text-gray-500 group-hover:text-[#F2994A] group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-gray-400 text-[15px] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 leading-tight">Ready to sharpen <br className="hidden md:block"/> <span className="text-[#107C41]">your thinking?</span></h2>
        <button onClick={() => setIsModalOpen(true)} className="bg-[#F2994A] hover:bg-[#df8b40] text-white px-8 py-5 md:px-10 rounded-[4px] font-mono font-bold tracking-[0.1em] transition-colors uppercase text-[12px] md:text-[14px] w-full sm:w-auto">
          Access Academy
        </button>
      </section>
    </main>
  );
}
