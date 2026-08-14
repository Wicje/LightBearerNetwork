"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ApplicationModal from "@/components/ApplicationModal";
import FadingGallery from "@/components/FadingGallery";
import { motion, AnimatePresence } from "motion/react";
import {
  Play,
  Quote,
  CheckCircle2,
  Instagram,
  Phone,
  Globe,
  Briefcase,
  Building2,
  GraduationCap,
  Heart,
  Palette,
  Tv,
  Home,
  Check,
  Star,
  Users,
  ShieldCheck,
  BookOpen,
  Target,
  X,
  ChevronRight,
  Menu
} from "lucide-react";

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-[#FAFAFA] selection:bg-[#F2994A] selection:text-white">
      <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} pathway="network" />
      {/* HEADER */}
      <header className="absolute inset-x-0 top-0 z-50 bg-[#FAFAFA]/80 backdrop-blur-sm border-b border-gray-100/50">
        <div className="max-w-[1400px] mx-auto px-6 h-[88px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#F2994A] rounded text-white font-bold flex items-center justify-center text-xs tracking-widest shadow-sm">
              LBN
            </div>
            <span className="font-bold text-[#F2994A] hidden sm:block tracking-tight text-xl">LBN</span>
          </div>

          <nav className="hidden lg:flex items-center gap-12 font-mono text-[11px] uppercase tracking-[0.2em] text-gray-800">
            <Link href="/open-community" className="hover:text-[#F2994A] transition-colors">Community</Link>
            <Link href="/engaging-room" className="hover:text-[#F2994A] transition-colors">Engaging Room</Link>
            <Link href="/academy" className="hover:text-[#F2994A] transition-colors">Academy</Link>
            <Link href="/gallery" className="hover:text-[#F2994A] transition-colors">Gallery</Link>
          </nav>

          <div className="hidden lg:flex items-center gap-6 sm:gap-8 font-mono text-[11px] uppercase tracking-[0.15em]">
            <button onClick={() => setIsModalOpen(true)} className="bg-[#F2994A] hover:bg-[#df8b40] text-white px-5 py-2.5 sm:px-7 sm:py-3 rounded-[3px] font-bold transition-colors shadow-sm">
              Join the Network
            </button>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button 
            className="lg:hidden p-2 text-gray-800 hover:text-[#F2994A] transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#FAFAFA] flex flex-col"
          >
            <div className="px-6 h-[88px] flex items-center justify-between border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[#F2994A] rounded text-white font-bold flex items-center justify-center text-xs tracking-widest shadow-sm">
                  LBN
                </div>
                <span className="font-bold text-[#F2994A] tracking-tight text-xl">LBN</span>
              </div>
              <button 
                className="p-2 text-gray-800 hover:text-[#F2994A] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto px-6 py-12 flex flex-col gap-8">
              <nav className="flex flex-col gap-6 font-mono text-[13px] uppercase tracking-[0.2em] text-gray-800">
                <Link href="/open-community" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#F2994A] transition-colors border-b border-gray-100 pb-4">Community</Link>
                <Link href="/engaging-room" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#F2994A] transition-colors border-b border-gray-100 pb-4">Engaging Room</Link>
                <Link href="/academy" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#F2994A] transition-colors border-b border-gray-100 pb-4">Academy</Link>
                <Link href="/gallery" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#F2994A] transition-colors border-b border-gray-100 pb-4">Gallery</Link>
              </nav>

              <div className="flex flex-col gap-4 font-mono text-[11px] uppercase tracking-[0.15em] mt-auto pb-8">
                <button onClick={() => { setMobileMenuOpen(false); setIsModalOpen(true); }} className="bg-[#F2994A] text-white px-7 py-4 rounded-[3px] font-bold shadow-sm text-center">
                  Join the Network
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO */}
      <section className="relative pt-32 md:pt-[220px] pb-16 md:pb-24 overflow-hidden w-full flex flex-col items-center flex-1">
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#F2994A]/[0.12] rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#EAF5ED] text-[#107C41] font-mono text-[9px] uppercase tracking-[0.2em] font-bold mb-8 opacity-90 border border-[#107C41]/10">
             <span className="w-2.5 h-2.5 rounded-full border border-[#107C41] flex items-center justify-center opacity-80">
                <div className="w-[3px] h-[3px] bg-[#107C41] rounded-full"></div>
             </span>
             Taking God to the Marketplace
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-[5.5rem] font-bold text-gray-900 tracking-[-0.03em] font-display mb-6 md:mb-8 leading-[1.1] md:leading-[1.05]">
            A people rising to lead and build <span className="text-[#F2994A]">Global Institutions</span> for God in the Marketplace
          </h1>

          <p className="text-[16px] md:text-[18px] text-gray-600 max-w-3xl mx-auto mb-10 leading-[1.7]">
            God is raising a generation of young kingdom builders to climb to their seat of dominance and legislate kingdom orders and patterns in their field of enterprise.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-[#107C41] hover:bg-[#0c5c30] text-white px-8 py-3.5 rounded-[4px] text-[12px] font-mono font-bold tracking-[0.1em] flex items-center gap-2 transition-all w-full sm:w-auto justify-center uppercase">
              Join us Today &rarr;
            </button>
            <Link href="/academy" className="bg-transparent border border-gray-800 text-gray-800 px-8 py-3.5 rounded-[4px] text-[12px] font-mono font-bold tracking-[0.1em] hover:bg-gray-100 transition-all w-full sm:w-auto justify-center shadow-sm uppercase text-center">
              Explore Academy
            </Link>
          </div>
        </div>

        <div className="relative w-full max-w-[1000px] mx-auto mt-16 md:mt-24 aspect-[4/3] sm:aspect-[16/8] md:aspect-[21/9] rounded-[24px] overflow-hidden shadow-2xl border border-gray-200 z-20 mx-6 bg-gray-100">
          <iframe 
            src="https://drive.google.com/file/d/1DlqOxVIlmvVO4gX62E6hqY6mGsXSHILV/preview?autoplay=1&mute=1" 
            className="w-full h-full border-none absolute inset-0"
            allow="autoplay; fullscreen"
            title="Light Bearers Network Video"
          ></iframe>
        </div>
      </section>

      {/* WHY WE EXIST */}
      <section className="bg-[#F3F4F6] py-14 md:py-20 border-t border-gray-200/50">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Quote Card */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 relative">
            <Quote className="text-[#E5E7EB] h-12 w-12 md:h-16 md:w-16 absolute top-6 left-6 md:top-8 md:left-8 transform -scale-x-100" fill="currentColor" />
            <h3 className="text-[20px] sm:text-[24px] md:text-[32px] font-display font-medium text-gray-900 leading-[1.4] md:leading-[1.3] mb-10 md:mb-12 relative z-10 tracking-tight mt-8 md:mt-10">
              &quot;In this day and time when the world keeps getting darker, it is that set time for Believers to rise in their seat of dominance across all spheres of influence in the Marketplace.&quot;
            </h3>
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 rounded-full bg-[#107C41] flex items-center justify-center text-white font-bold text-lg shadow-inner">MT</div>
              <div>
                <h4 className="font-mono text-[#107C41] tracking-[0.1em] text-[11px] font-bold uppercase">Matthew 5:14-16</h4>
                <p className="text-gray-900 font-mono text-[10px] tracking-wider uppercase mt-1">Scripture</p>
              </div>
            </div>
          </div>

          {/* Right Text */}
          <div className="lg:pl-8">
            <h2 className="text-4xl md:text-[44px] font-bold text-gray-900 mb-8 font-display tracking-tight">Why We Exist</h2>
            <div className="text-gray-600 text-[16px] leading-[1.8] space-y-6">
              <p>No more playing mediocrity. No more playing small games but now rising to interfer with orders, systems and policies that control the earth.</p>
              <p>We are raising a people that will be skillful in hand and build Goshen Cities for the Manifestation of the Kingdom.</p>
            </div>
            <div className="flex flex-wrap gap-3 mt-10">
              <span className="px-4 py-2 bg-[#E5E7EB] text-gray-700 text-[10px] font-mono font-bold rounded-full uppercase tracking-widest">Kingdom Culture</span>
              <span className="px-4 py-2 bg-[#E5E7EB] text-gray-700 text-[10px] font-mono font-bold rounded-full uppercase tracking-widest">Marketplace Dominion</span>
              <span className="px-4 py-2 bg-[#E5E7EB] text-gray-700 text-[10px] font-mono font-bold rounded-full uppercase tracking-widest">Global Influence</span>
            </div>
          </div>
        </div>
      </section>

      {/* SPHERES OF INFLUENCE */}
      <section className="bg-[#FAFAFA] py-14 md:py-20 border-t border-gray-200/50">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-[44px] font-bold text-gray-900 mb-6 font-display tracking-tight">
              Core <span className="text-[#F2994A]">Values</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-[16px] md:text-[17px] leading-[1.6]">
              Principles that guide our mission to reflect Kingdom Culture in the Marketplace.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {[
              { name: "God's\nStandard", icon: ShieldCheck },
              { name: "Excellence", icon: Star },
              { name: "Global\nThinking", icon: Globe },
              { name: "Learning\n& Execution", icon: BookOpen },
              { name: "Social\nNetworking", icon: Users },
            ].map((s, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100 flex flex-col items-center justify-center flex-1 min-w-[140px] max-w-[150px] aspect-square hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-[#FFF5EB] flex items-center justify-center text-[#F2994A] mb-4">
                  <s.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-mono font-bold text-gray-900 text-[9px] uppercase tracking-[0.1em] text-center whitespace-pre-line">{s.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IS THIS FOR */}
      <section className="bg-white py-14 md:py-20 border-t border-gray-200/50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-[44px] font-bold text-gray-900 mb-6 font-display tracking-tight">
              Who is this <span className="text-[#F2994A]">Community</span> designed for?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-[16px] md:text-[17px] leading-[1.6]">
              This community is designed for builders, people who know they are called to build, and are ready to build Global Brands that will reflect Kingdom Culture in the Marketplace.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            <div className="bg-[#EAF5ED] p-6 lg:p-10 rounded-[20px] border border-[#107C41]/10">
              <h3 className="text-xl md:text-2xl font-bold text-[#107C41] mb-6 md:mb-8 font-display">This is for you if:</h3>
              <ul className="space-y-4 md:space-y-6">
                {[
                  "You want to express God via your skill/works in the marketplace",
                  "You're not satisfied with smallness and average and you want to express God's excellence via your works",
                  "You want to build a Global Institution (Brand) that will stand the test of time",
                  "You want to learn how to create incomes streams, build wealth paths the Kingdom Way",
                  "You want to be open to structure, discipline and accountability",
                  "You want to surround yourself with a supportive community of like-minded people serious about growth and execution"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#107C41] shrink-0 fill-current bg-white rounded-full border border-white" fill="white" />
                    <span className="text-gray-800 leading-relaxed text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-[#FFF5EB] p-6 lg:p-10 rounded-[20px] border border-[#F2994A]/10">
              <h3 className="text-xl md:text-2xl font-bold text-[#F2994A] mb-6 md:mb-8 font-display">This is not for you if:</h3>
              <ul className="space-y-4 md:space-y-6">
                {[
                  "You do not have the purposes of God at heart",
                  "You are not interested in building any Global Institutions",
                  "You only think about survival and not still ready to change",
                  "You like comfort over work and not ready to work out your results"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <X className="w-6 h-6 text-[#F2994A] shrink-0 bg-white rounded-full p-1 border border-white shadow-sm" />
                    <span className="text-gray-800 leading-relaxed text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PATHWAYS TO DOMINANCE */}
      <section className="bg-[#363535] py-14 md:py-20 text-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-[44px] font-bold mb-4 font-display tracking-tight text-white">
              Pathways to <span className="text-[#F2994A]">Dominance</span>
            </h2>
            <p className="text-gray-400 text-[16px] md:text-[17px]">
              Structured environments designed to launch you into your destiny placement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Open Community */}
            <div className="bg-[#484848] rounded-[24px] p-6 md:p-10 border border-[#555] flex flex-col relative overflow-hidden group h-fit md:sticky md:top-24">
              <div className="absolute top-0 right-0 p-8 opacity-5 -translate-y-1/4 translate-x-1/4 group-hover:scale-110 transition-transform duration-500">
                <Users className="w-48 h-48 text-white" />
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 rounded bg-[#107C41] flex items-center justify-center mb-6 md:mb-8">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-[#F2994A] text-2xl md:text-3xl font-display font-bold mb-4">Open Community</h3>
                <p className="text-gray-300 text-[15px] md:text-[16px] mb-4 leading-relaxed font-medium">This is your weekly system for push to become a First Class Individual.</p>
                <p className="text-gray-400 text-[15px] mb-8 leading-relaxed">
                  Before you can build a Global Institution (Brand) with Kingdom Culture, you must first know and understand your Personal Identity.
                  Inside the Open Community, a structured system is curated to help shape your mentality and show you possibilities that exist.
                </p>
                
                <Link href="/open-community" className="w-full bg-[#107C41] hover:bg-[#0c5c30] text-white py-4 rounded-[4px] font-mono text-[11px] uppercase tracking-[0.15em] font-bold transition-colors flex items-center justify-center gap-2 mt-2 relative z-20">
                  Explore Open Community <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-8 lg:gap-12">
              {/* Engaging Room */}
              <div className="bg-[#484848] rounded-[24px] p-6 md:p-10 border border-[#555] flex flex-col relative overflow-hidden group flex-1">
                <div className="absolute top-0 right-0 p-8 opacity-5 -translate-y-1/4 translate-x-1/4 group-hover:scale-110 transition-transform duration-500">
                  <Target className="w-48 h-48 text-white" />
                </div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 rounded bg-gray-600 flex items-center justify-center mb-6 md:mb-8">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white text-2xl md:text-3xl font-display font-bold mb-4">Engaging Room</h3>
                  <p className="text-gray-400 text-[15px] mb-8 leading-relaxed">
                    A highly focused, interactive space designed for personalized problem-solving, strategic mastermind sessions, and direct mentorship.
                  </p>
                  
                  <div className="mt-auto pt-8 border-t border-[#555] border-dashed">
                    <Link href="/engaging-room" className="group flex items-center justify-between text-gray-400 hover:text-white transition-colors w-full">
                      <span className="font-mono text-[12px] uppercase tracking-[0.2em] font-bold">Explore Room</span>
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Light Bearers Academy */}
              <div className="bg-[#484848] rounded-[24px] p-6 md:p-10 border border-[#555] flex flex-col relative overflow-hidden group flex-1">
                <div className="absolute top-0 right-0 p-8 opacity-5 -translate-y-1/4 translate-x-1/4 group-hover:scale-110 transition-transform duration-500">
                  <GraduationCap className="w-48 h-48 text-white" />
                </div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 rounded bg-[#F2994A] flex items-center justify-center mb-6 md:mb-8">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-[#107C41] text-2xl md:text-3xl font-display font-bold mb-4">Light Bearers Academy</h3>
                  <p className="text-gray-400 text-[15px] mb-8 leading-relaxed">
                    Designed to equip believers with structured teachings, frameworks, and actionable strategies for marketplace dominance.
                  </p>
                  
                  <div className="mt-auto pt-8 border-t border-[#555] border-dashed">
                    <Link href="/academy" className="group flex items-center justify-between text-[#F2994A] hover:text-[#f8b475] transition-colors w-full">
                      <span className="font-mono text-[12px] uppercase tracking-[0.2em] font-bold">Explore Academy</span>
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY GALLERY */}
      <section className="bg-[#FAFAFA] py-14 md:py-20 border-b border-gray-200/50">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-[44px] font-bold text-gray-900 mb-4 md:mb-6 font-display tracking-tight">
              Community <span className="text-[#F2994A]">Gallery</span>
            </h2>
            <p className="text-gray-600 text-[16px] md:text-[17px]">Moments from our gatherings, trainings, and community events.</p>
          </div>
          <FadingGallery />
          
          <div className="mt-12 text-center">
            <Link href="/gallery" className="inline-block bg-[#107C41] hover:bg-[#0c5c30] text-white px-8 py-4 rounded-[4px] font-mono font-bold tracking-[0.1em] transition-all uppercase text-[12px]">
              See All Pictures
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT OUR MEMBERS SAY */}
      <section className="bg-[#F3F4F6] py-14 md:py-20 border-b border-gray-200/50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-[44px] font-bold text-gray-900 mb-4 md:mb-6 font-display tracking-tight">
              What Our <span className="text-[#F2994A]">Members Say</span>
            </h2>
            <p className="text-gray-600 text-[16px] md:text-[17px]">Real stories from real people in our community.</p>
          </div>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {[
              {
                name: "Ugochi Umeugo",
                role: "Community Manager",
                text: "Light Bearers Network has made me better from the physical events to the virtual events.\n\nMy highlights are the physical events mostly where people thriving in their careers share their story.\n\nMy highlights from being part of this was The Becoming Conference. Listening to Gutsy Woman and Okosa Lawrence share their stories showed me possibilities.\n\nBeing a member of the planning process and seeing it become a reality made me fulfilled.\n\nI'm also privileged to serve in this institution as I keep growing and that has very much impacted my life.",
                initials: "UU",
                color: "bg-[#EAF5ED] text-[#107C41]"
              },
              {
                name: "Henrietta Odinaka",
                role: "Team Lead",
                text: "Light Bearers Network has changed certain bad behaviors I used to have. I'm speaking from the office of a Light Bearers Team Lead. My life has been blessed in so many ways through Light Bearers Network.\n\nI used to be an inconsistent team lead who didn't keep to her word, missed important meetings without prior notice, procrastinated, and failed to stick to deadlines. I wasn't taking responsibility.\n\nMy leader, Macaulay Tekevwe, kept correcting and scolding me over and over again. She put me in a different role after identifying my strength even with my inconsistency. With her constant talks and guidance, I became a better person.\n\nToday, I can confidently say that I am consistent. I keep my word. I stick to deadlines. I communicate early and seek permission whenever necessary. I make sure I attend meetings. Above all, I have decided to run with the vision of this organization.\n\nI am deeply grateful to God for giving me the privilege of leading a team in Light Bearers Network. And to Ma Tekky, thank you for not giving up on me.",
                initials: "HO",
                color: "bg-[#FFF5EB] text-[#F2994A]"
              },
              {
                name: "Tochukwu Agu",
                role: "Member",
                text: "I am a member of this amazing community, Light Bearers Network.\n\nFirst of all, I want to give a special shout out 💚 to our Leader in Light Bearers Network. Miss Macaulay Tekevwe has always been a great source of Inspiration to me ❤️\n\nIn the LBN community, some of the activities I love so much includes Daily Affirmations, Online Classes which are very impactful e.g \"Financial Intelligence\", \"Building Relationships\", Online prayers amongst others.\n\nIt has been very impactful because it gives me the opportunity to learn everyday and also train my mind on how to be the best version of myself.\n\nGod bless all those who are part of the Light Bearers Network.",
                initials: "TA",
                color: "bg-blue-50 text-blue-600"
              },
              {
                name: "Prince Onyenekwe",
                role: "Member",
                text: "First off, Our Founder Ma'am Tekky is doing really great with the community. And since I joined, I've experienced a shift in my mindset. That I believe is the core of personal growth and development. Once the mind is right, execution follows.\n\nThe way I see myself, my Brand, and Business as a Christian generally has transformed.\n\nThere's been this notion about Christians being poor, not dominating the marketplace, firms, industries and generally wherever they find themselves.\n\nThe Light Bearers Community has shown me that it's a dirty lie.\n\nAs Christians were even more advantaged to rule and dominate spheres of life.",
                initials: "PO",
                color: "bg-purple-50 text-purple-600"
              },
              {
                name: "Excel Iyere",
                role: "Member",
                text: "I joined LBN early this year as a young lady with so many dreams, plans, and visions weighing on my shoulders. Yet, I couldn't seem to put any of them into action or find the balance needed to move forward.\n\nHowever, over the past few months, especially after participating in the Monthly General Assembly, \"Bold Steps,\" and other insightful gatherings. I have been amazed by the new version of myself and the audacious steps I have taken toward achieving these dreams.\n\nThank you so much for creating this incredible platform dedicated to repositioning Christians in the marketplace, not merely as consumers, but as creators and light bearers. 🔥❤️🌹.\n\nI am truly grateful for the transformation, growth, and clarity I have experienced through this community.",
                initials: "EI",
                color: "bg-pink-50 text-pink-600"
              },
              {
                name: "Usulor Chinenye",
                role: "Member",
                text: "I can't recall where I heard about Light Bearers Network from but somehow it resonated with me, because in this phase of my life I'm chasing growth with everything in me.\n\nAt the time I joined I was struggling with these;\n1. Not sure what I would do with the course I'm studying.\n2. Inconsistency in my relationship with God; not sure if I wanted to do this Jesus thing for real.\n3. I was finding it hard to pitch my business ideas to friends, mentors and family.\n4. It was difficult to come and speak in a group even when what I have to say is valuable. To pictures of myself was harder.\n\nI can't forget the morning after reading the LBN Weekly Letter and Affirmation, I asked myself \"Vicky what is holding you back?\" I searched deeply and I found things I didn't think or realized was still residing in my soul.\n\nThis finding pushed me closer to the Holy Spirit asking Him to help because I can't afford to not fulfill destiny or live without unlocking every potential in my arsenal.\n\nThat week I put my foot down; started my business; learning those skills I have always wanted to have; graphics design, data analysis, video editing.\n\nI also was able to pitch my hair care product line to my girls every where around me and the demand for these products have not stopped.\n\nReally the Weekly Wednesday Letters are doing a whole lot for me.\n\nThank you Miss Tekky.",
                initials: "UC",
                color: "bg-teal-50 text-teal-600"
              },
              {
                name: "Ogbonna Nelson",
                role: "Member",
                text: "I want to thank the Light Bearers Network for the impact made in my life.\n\nHaving an opportunity to be in this community, I've gotten Mentorship and one thing I've learnt is how to achieve a long term goal.\n\nI've also learnt how to convince and get customers into buying a product that one offers, how to create and build a brand from scratch and how to have different packages that will suite your customers satisfaction.\n\nI've been learning a lot on how to sell my skill.\n\nThank you Light Bearers Network",
                initials: "ON",
                color: "bg-indigo-50 text-indigo-600"
              },
              {
                name: "Anonymous",
                role: "Member",
                text: "LBN has helped me see a new light about Kingdom Financing.",
                initials: "AN",
                color: "bg-gray-100 text-gray-600"
              },
              {
                name: "Anonymous",
                role: "Member",
                text: "LBN has made know that Excellence must be the only way I do things.",
                initials: "AN",
                color: "bg-gray-100 text-gray-600"
              },
              {
                name: "Anonymous",
                role: "Member",
                text: "The newsletters has helped me to do a lot of mind revamp. I've started taking responsibility for my finances.",
                initials: "AN",
                color: "bg-gray-100 text-gray-600"
              },
              {
                name: "Anonymous",
                role: "Member",
                text: "It has changed my perspective on Christianity and money.",
                initials: "AN",
                color: "bg-gray-100 text-gray-600"
              }
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="break-inside-avoid bg-white p-8 md:p-10 rounded-[20px] shadow-sm border border-gray-100 flex flex-col hover:shadow-xl transition-all cursor-default"
              >
                <div className="flex gap-1 text-[#F2994A] mb-8">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                </div>
                <div className="text-gray-800 text-[14px] leading-relaxed mb-10 space-y-4">
                  {t.text.split('\n\n').map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-50">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-[14px] shrink-0 ${t.color}`}>
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-mono font-bold text-gray-900 text-[10px] uppercase tracking-wider">{t.name}</h4>
                    <p className="text-[#F2994A] font-mono text-[9px] uppercase tracking-wider mt-1">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VISIONEER SECTION */}
      <section className="bg-white py-14 md:py-20 border-t border-gray-200/50">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-10">
            <Quote className="text-[#EAF5ED] h-16 w-16 md:h-20 md:w-20 mx-auto mb-8 md:mb-10 transform -scale-x-100" fill="currentColor" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-gray-900 leading-[1.4] md:leading-[1.3] tracking-tight">
              Macaulay Tekevwe is a visioneer seeking to raise <span className="text-[#107C41] font-bold">Brand Owners, Industry Experts, Business Men/Women</span> who will build Global Institutions with Kingdom Culture.
            </h2>
          </div>
          
          <div className="space-y-6 text-gray-600 text-[16px] md:text-[17px] leading-[1.8] mt-12 md:mt-16 text-center md:text-left">
             <p>
                This vision birthed the <strong className="text-gray-900 font-bold">Light Bearers Network</strong> a community that encapsulates this vision and carries the structure to birth it to life. <em className="text-gray-900 not-italic font-medium">A community for believers in the marketplace building First-Class brands with Kingdom Culture.</em>
             </p>
             <p>
                Career wise she is a <strong className="text-gray-900 font-bold">Corporate Project Manager & AI Automation Specialist</strong>. She is bringing her passion and knowledge on structure and business administration to help Business Owners, CEOs, and Founders to build Automated Systems/Agents that make their growth more efficient, saved them time and money.
             </p>
             <p>
                She is a graduate of the <strong className="text-gray-900 font-bold">University of Nigeria</strong>, where she studied Mass Communication. She values excellence and is very passionate about what God is doing in the now.
             </p>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4 mt-12 pt-10 border-t border-gray-100">
            <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden shrink-0 shadow-inner bg-gray-100 border border-gray-200">
              <Image 
                src="https://drive.google.com/uc?export=view&id=1C_U4wzPFXTzyuGe7aapHAVaufZ1pL9aL" 
                alt="Macaulay Tekevwe" 
                fill 
                className="object-cover" 
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="text-left">
              <h4 className="font-mono text-gray-900 tracking-[0.15em] text-[12px] font-bold uppercase">Macaulay Tekevwe</h4>
              <p className="text-[#F2994A] font-mono text-[10px] tracking-wider uppercase mt-1">Visioneer</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12 md:mb-16">
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-[#F2994A] rounded text-white font-bold flex items-center justify-center text-[10px] tracking-widest leading-none pt-0.5">
                  LBN
                </div>
                <span className="font-display font-medium text-[#F2994A] tracking-tight text-xl">LIGHT BEARERS NETWORK</span>
              </div>
              <p className="text-gray-600 text-sm leading-[1.8] mb-8 pr-10">
                Raising a people that will understand their spheres of influence, their destiny placement and climb to their seat of dominance.
              </p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/light_bearersn?igsh=MWlpYnhvdW1od21lcw==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-[#F2994A] hover:border-[#F2994A] transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://tiktok.com/@light_bearsen" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-[#F2994A] hover:border-[#F2994A] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4" fill="currentColor">
                    <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 185 188.31v89.89a74.62 74.62 0 1 0 52.23 71.18V0h88a121.18 121.18 0 0 0 1.86 22.17h.12A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="md:col-span-3 lg:col-start-8">
              <h4 className="font-mono font-bold text-gray-900 text-[10px] uppercase tracking-[0.15em] mb-6">QUICK LINKS</h4>
              <ul className="space-y-4">
                <li><Link href="/" className="text-gray-600 hover:text-[#F2994A] text-sm transition-colors">Home</Link></li>
                <li><Link href="/academy" className="text-gray-600 hover:text-[#F2994A] text-sm transition-colors">Academy</Link></li>
                <li><Link href="/engaging-room" className="text-gray-600 hover:text-[#F2994A] text-sm transition-colors">Engaging Room</Link></li>
                <li><Link href="/open-community" className="text-gray-600 hover:text-[#F2994A] text-sm transition-colors">Community</Link></li>
              </ul>
            </div>

            <div className="md:col-span-4 lg:col-span-2">
              <h4 className="font-mono font-bold text-gray-900 text-[10px] uppercase tracking-[0.15em] mb-6">CONTACT</h4>
              <ul className="space-y-4">
                <li className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Phone className="w-4 h-4 text-gray-400" /> 08109986272
                  </div>
                </li>
                <li className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Globe className="w-4 h-4 text-gray-400" /> @light_bearersn
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>© 2026 LIGHT BEARERS NETWORK. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gray-900 transition-colors cursor-pointer">Privacy Policy</a>
              <a href="#" className="hover:text-gray-900 transition-colors cursor-pointer">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
