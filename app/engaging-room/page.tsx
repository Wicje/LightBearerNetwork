"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Target, ChevronRight, ArrowLeft } from "lucide-react";
import ApplicationModal from "@/components/ApplicationModal";

export default function EngagingRoomPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#363535] text-white selection:bg-[#F2994A] selection:text-white pb-32">
      <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} pathway="engaging-room" />
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
          <div className="w-16 h-16 rounded-xl bg-gray-600 flex items-center justify-center mb-10">
            <Target className="w-8 h-8 text-white" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-display tracking-tight mb-8">
            The <span className="text-white">Engaging Room</span>
          </h1>
          
          <p className="text-[16px] md:text-[22px] text-gray-300 max-w-3xl leading-[1.6] mb-8">
            A highly focused, interactive space designed for personalized problem-solving, direct mentorship, accountability and strategic networking.
          </p>
          <p className="text-[16px] md:text-[20px] text-gray-400 max-w-3xl leading-[1.6] mb-12">
            The Engaging Room is a subscription-based execution hub for people who are done talking about growth and ready to produce results. Choose a high-impact project aligned with your goals; grow your brand, launch an offer, close more clients, build a community, host a webinar, and more.
          </p>

          <p className="text-[16px] md:text-[20px] text-[#F2994A] font-medium max-w-3xl leading-[1.6] mb-12">
            We provide the structure, accountability, and support to help you make measurable progress every month.
          </p>

          <button onClick={() => setIsModalOpen(true)} className="bg-[#F2994A] hover:bg-[#df8b40] text-white px-8 py-4 rounded-[4px] font-mono font-bold tracking-[0.1em] transition-all uppercase text-[12px] flex items-center gap-2 justify-center w-full sm:w-auto hover:scale-105 active:scale-95">
            Join the Engaging Room <ChevronRight className="w-4 h-4" />
          </button>
        </motion.div>
      </section>

      {/* DETAILED CONTENT */}
      <section className="px-6 py-14 bg-[#484848] border-y border-[#555]">
        <div className="max-w-[1000px] mx-auto grid md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <h2 className="text-3xl font-display font-bold mb-8 text-[#107C41]">What You&apos;ll Get</h2>
            
            <div className="space-y-8">
              {[
                { title: "Goal Setting & Progress Tracking", desc: "Set clear monthly, weekly, and daily goals, then track your progress with accountability." },
                { title: "Accountability Partners", desc: "Get matched with a complementary partner who keeps you consistent and committed." },
                { title: "Monthly Book Study", desc: "Expand your thinking through curated books and guided discussions on leadership, business, finance, and personal growth." },
                { title: "Community & Fun", desc: "Connect with members through games, movie reviews, and engaging activities that help you build meaningful relationships while learning to think globally." }
              ].map((item, idx) => (
                <div key={idx} className="bg-[#363535] p-6 rounded-xl border border-[#555]">
                  <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-display font-bold mb-8 text-[#F2994A]">How It Works</h3>
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[15px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#F2994A]/20 before:via-[#F2994A]/50 before:to-transparent">
              {[
                "Join with a monthly subscription.",
                "Commit to a growth-focused project.",
                "Execute, track, and report your progress.",
                "Build momentum with results you can see and measure.",
                "Membership renews monthly."
              ].map((step, idx) => (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  key={idx} 
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full border-4 border-[#484848] bg-[#F2994A] text-white font-bold text-sm shrink-0 md:order-1 md:group-odd:-ml-4 md:group-even:-mr-4 z-10 shadow-[0_0_15px_rgba(242,153,74,0.3)]">
                    {idx + 1}
                  </div>
                  
                  <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] p-5 rounded-xl bg-[#363535] border border-[#555] shadow-lg ml-4 md:ml-0 transition-transform duration-300 group-hover:-translate-y-1">
                    <p className="text-gray-300 text-[15px] font-medium leading-relaxed">{step}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 leading-tight">Ready to produce <br className="hidden md:block"/> <span className="text-[#F2994A]">measurable results?</span></h2>
        <button onClick={() => setIsModalOpen(true)} className="bg-[#107C41] hover:bg-[#0c5c30] text-white px-8 py-5 md:px-10 rounded-[4px] font-mono font-bold tracking-[0.1em] transition-colors uppercase text-[12px] md:text-[14px] w-full sm:w-auto">
          Join the Engaging Room
        </button>
      </section>
    </main>
  );
}
