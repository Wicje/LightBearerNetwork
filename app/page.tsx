import Image from "next/image";
import Link from "next/link";
import {
  Play,
  Quote,
  CheckCircle2,
  Instagram,
  Twitter,
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
  ChevronRight
} from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-[#FAFAFA] selection:bg-[#F2994A] selection:text-white">
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
            <Link href="#" className="hover:text-[#F2994A] transition-colors">Academy</Link>
            <Link href="#" className="hover:text-[#F2994A] transition-colors">Spheres</Link>
            <Link href="#" className="hover:text-[#F2994A] transition-colors">Values</Link>
            <Link href="#" className="hover:text-[#F2994A] transition-colors">Pathways</Link>
            <Link href="#" className="hover:text-[#F2994A] transition-colors">Community</Link>
          </nav>

          <div className="flex items-center gap-8 font-mono text-[11px] uppercase tracking-[0.15em]">
            <button className="font-bold text-gray-800 hover:text-[#F2994A] hidden sm:block transition-colors">Login</button>
            <button className="bg-[#F2994A] hover:bg-[#df8b40] text-white px-7 py-3 rounded-[3px] font-bold transition-colors shadow-sm">
              Join the Network
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-44 md:pt-[220px] pb-24 overflow-hidden w-full flex flex-col items-center flex-1">
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#F2994A]/[0.12] rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#EAF5ED] text-[#107C41] font-mono text-[9px] uppercase tracking-[0.2em] font-bold mb-8 opacity-90 border border-[#107C41]/10">
             <span className="w-2.5 h-2.5 rounded-full border border-[#107C41] flex items-center justify-center opacity-80">
                <div className="w-[3px] h-[3px] bg-[#107C41] rounded-full"></div>
             </span>
             Taking God to the Marketplace
          </div>

          <h1 className="text-5xl md:text-[5.5rem] font-bold text-gray-900 tracking-[-0.03em] font-display mb-8 leading-[1.05]">
            A people rising to lead and build <span className="text-[#F2994A]">Global Institutions</span> for God in the Marketplace
          </h1>

          <p className="text-[17px] md:text-[18px] text-gray-600 max-w-3xl mx-auto mb-10 leading-[1.7]">
            God is raising a generation of young kingdom builders to climb to their seat of dominance and legislate kingdom orders and patterns in their field of enterprise.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-[#107C41] hover:bg-[#0c5c30] text-white px-8 py-3.5 rounded-[4px] text-[12px] font-mono font-bold tracking-[0.1em] flex items-center gap-2 transition-all w-full sm:w-auto justify-center uppercase">
              Join us Today &rarr;
            </button>
            <button className="bg-transparent border border-gray-800 text-gray-800 px-8 py-3.5 rounded-[4px] text-[12px] font-mono font-bold tracking-[0.1em] hover:bg-gray-100 transition-all w-full sm:w-auto justify-center shadow-sm uppercase">
              Explore Academy
            </button>
          </div>
        </div>

        <div className="relative w-full max-w-[1000px] mx-auto mt-24 aspect-[16/8] md:aspect-[21/9] rounded-[24px] overflow-hidden shadow-2xl border border-gray-200 z-20 mx-6 bg-gray-100">
          <Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000" alt="Builders meeting" fill className="object-cover opacity-90 mix-blend-multiply" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-[#0A1A12]/10 flex items-center justify-center">
            <button className="w-20 h-20 bg-[#F2994A] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_40px_rgba(242,153,74,0.4)] cursor-pointer group">
              <Play className="text-white w-8 h-8 ml-1.5 group-hover:scale-110 transition-transform" fill="currentColor" strokeWidth={1} />
            </button>
          </div>
        </div>
      </section>

      {/* WHY WE EXIST */}
      <section className="bg-[#F3F4F6] py-32 border-t border-gray-200/50">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Quote Card */}
          <div className="bg-white rounded-3xl p-10 md:p-12 shadow-sm border border-gray-100 relative">
            <Quote className="text-[#E5E7EB] h-16 w-16 absolute top-8 left-8 transform -scale-x-100" fill="currentColor" />
            <h3 className="text-[26px] md:text-[32px] font-display font-medium text-gray-900 leading-[1.3] mb-12 relative z-10 tracking-tight mt-10">
              "In this day and time when the world keeps getting darker, it is that set time for Believers to rise in their seat of dominance across all spheres of influence in the Marketplace."
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
      <section className="bg-[#FAFAFA] py-32 border-t border-gray-200/50">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-[44px] font-bold text-gray-900 mb-6 font-display tracking-tight">
              Core <span className="text-[#F2994A]">Values</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-[17px] leading-[1.6]">
              Principles that guide our mission to reflect Kingdom Culture in the Marketplace.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-5 md:gap-6">
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
      <section className="bg-white py-32 border-t border-gray-200/50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-[44px] font-bold text-gray-900 mb-6 font-display tracking-tight">
              Who is this <span className="text-[#F2994A]">Community</span> designed for?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-[17px] leading-[1.6]">
              This community is designed for builders, people who know they are called to build, and are ready to build Global Brands that will reflect Kingdom Culture in the Marketplace.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            <div className="bg-[#EAF5ED] p-10 rounded-[20px] border border-[#107C41]/10">
              <h3 className="text-2xl font-bold text-[#107C41] mb-8 font-display">This is for you if:</h3>
              <ul className="space-y-6">
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
            
            <div className="bg-[#FFF5EB] p-10 rounded-[20px] border border-[#F2994A]/10">
              <h3 className="text-2xl font-bold text-[#F2994A] mb-8 font-display">This is not for you if:</h3>
              <ul className="space-y-6">
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
      <section className="bg-[#363535] py-32 text-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl md:text-[44px] font-bold mb-4 font-display tracking-tight text-white">
              Pathways to <span className="text-[#F2994A]">Dominance</span>
            </h2>
            <p className="text-gray-400 text-[17px]">
              Structured environments designed to launch you into your destiny placement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Open Community */}
            <div className="bg-[#484848] rounded-[24px] p-10 border border-[#555] flex flex-col relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 -translate-y-1/4 translate-x-1/4 group-hover:scale-110 transition-transform duration-500">
                <Users className="w-48 h-48 text-white" />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded bg-[#107C41] flex items-center justify-center mb-8">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-[#F2994A] text-3xl font-display font-bold mb-4">Open Community</h3>
                <p className="text-gray-300 text-[16px] mb-4 leading-relaxed font-medium">This is your weekly system for push to become a First Class Individual.</p>
                <p className="text-gray-400 text-[15px] mb-8 leading-relaxed">
                  Before you can build a Global Institution (Brand) with Kingdom Culture, you must first know and understand your Personal Identity.
                  Inside the Open Community, a structured system is curated to help shape your mentality and show you possibilities that exist.
                </p>
                
                <div className="space-y-6 mb-10">
                  <h4 className="font-mono text-[#F2994A] text-[11px] uppercase tracking-[0.15em] font-bold pb-2 border-b border-[#555]">Weekly Breakdown</h4>
                  {[
                    { day: "Monday", focus: "Identity & Alignment", desc: "Start your week with powerful affirmations that align your mindset for Dominion." },
                    { day: "Wednesday", focus: "Clarity & Direction", desc: "Get our weekly letter breaking down mindset patterns, sharing growth strategies that give you an edge in today's marketplace environment." },
                    { day: "Friday", focus: "Intentional Learning", desc: "Using the community focus points you learn on diverse subject matters that have direct impact and making you a better builder." },
                    { day: "Saturday", focus: "Spiritual Activation", desc: "Join focused prayer sessions to strengthen your spiritual altar for divine wisdom and guidance." },
                    { day: "Monthly", focus: "Growth & Exposure", desc: "Plug into our General Assembly for deeper interactive teachings and connections." }
                  ].map((schedule, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-[100px] shrink-0">
                        <span className="bg-[#5A5A5A] text-[#F2994A] px-2 py-1 rounded text-[10px] font-mono font-bold uppercase tracking-wider block text-center">
                          {schedule.day}
                        </span>
                      </div>
                      <div>
                        <h5 className="text-white font-bold text-[14px] mb-1">{schedule.focus}</h5>
                        <p className="text-gray-400 text-[13px] leading-relaxed">{schedule.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <button className="w-full bg-[#107C41] hover:bg-[#0c5c30] text-white py-4 rounded-[4px] font-mono text-[11px] uppercase tracking-[0.15em] font-bold transition-colors flex items-center justify-center gap-2 mt-auto">
                  Start your growth journey now <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-8 lg:gap-12">
              {/* Light Bearers Academy */}
              <div className="bg-[#484848] rounded-[24px] p-10 border border-[#555] flex flex-col relative overflow-hidden group flex-1">
                <div className="absolute top-0 right-0 p-8 opacity-5 -translate-y-1/4 translate-x-1/4 group-hover:scale-110 transition-transform duration-500">
                  <GraduationCap className="w-48 h-48 text-white" />
                </div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 rounded bg-[#F2994A] flex items-center justify-center mb-8">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-[#107C41] text-3xl font-display font-bold mb-4">Light Bearers Academy</h3>
                  <p className="text-gray-400 text-[15px] mb-8 leading-relaxed">
                    Designed to equip believers with structured teachings, frameworks, and actionable strategies for marketplace dominance.
                  </p>
                  
                  <div className="mt-auto pt-8 flex items-center justify-center border-t border-[#555] border-dashed">
                    <span className="text-[#F2994A] font-mono text-[12px] uppercase tracking-[0.2em] font-bold bg-[#F2994A]/10 px-4 py-2 rounded-full">
                      Coming Soon
                    </span>
                  </div>
                </div>
              </div>

              {/* Engaging Room */}
              <div className="bg-[#484848] rounded-[24px] p-10 border border-[#555] flex flex-col relative overflow-hidden group flex-1">
                <div className="absolute top-0 right-0 p-8 opacity-5 -translate-y-1/4 translate-x-1/4 group-hover:scale-110 transition-transform duration-500">
                  <Target className="w-48 h-48 text-white" />
                </div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 rounded bg-gray-600 flex items-center justify-center mb-8">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white text-3xl font-display font-bold mb-4">Engaging Room</h3>
                  <p className="text-gray-400 text-[15px] mb-8 leading-relaxed">
                    A highly focused, interactive space designed for personalized problem-solving, strategic mastermind sessions, and direct mentorship.
                  </p>
                  
                  <div className="mt-auto pt-8 flex items-center justify-center border-t border-[#555] border-dashed">
                    <span className="text-gray-400 font-mono text-[12px] uppercase tracking-[0.2em] font-bold bg-gray-600/30 px-4 py-2 rounded-full">
                      Coming Soon
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY GALLERY */}
      <section className="bg-[#FAFAFA] py-32 border-b border-gray-200/50">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-[44px] font-bold text-gray-900 mb-4 font-display tracking-tight">
              Community <span className="text-[#F2994A]">Gallery</span>
            </h2>
            <p className="text-gray-600 text-[17px]">Moments from our gatherings, trainings, and community events.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="aspect-square bg-gray-200 rounded-2xl overflow-hidden relative">
              <Image src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800" alt="Gallery" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="aspect-square bg-gray-200 rounded-2xl overflow-hidden relative">
              <Image src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800" alt="Gallery" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="aspect-square bg-gray-200 rounded-2xl overflow-hidden relative">
              <Image src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800" alt="Gallery" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="aspect-square bg-gray-200 rounded-2xl overflow-hidden relative">
              <Image src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800" alt="Gallery" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT OUR MEMBERS SAY */}
      <section className="bg-[#F3F4F6] py-32 border-b border-gray-200/50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-[44px] font-bold text-gray-900 mb-4 font-display tracking-tight">
              What Our <span className="text-[#F2994A]">Members Say</span>
            </h2>
            <p className="text-gray-600 text-[17px]">Real stories from real people in our community.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Sarah Jenkins", role: "Business Sphere", text: "\"This community has completely transformed how I view my career. I now see my work as a ministry.\"" },
              { name: "David Chen", role: "Media Sphere", text: "\"The academy teachings provided the practical steps I needed to step into leadership in my industry.\"" },
              { name: "Emily Thorne", role: "Education Sphere", text: "\"Finding a group of like-minded believers who are ambitious yet grounded in faith has been invaluable.\"" }
            ].map((t, i) => (
              <div key={i} className="bg-white p-10 rounded-[20px] shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
                <div className="flex gap-1 text-[#F2994A] mb-8">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-gray-800 text-[15px] leading-relaxed mb-10 flex-1">{t.text}</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#E5E7EB] shrink-0"></div>
                  <div>
                    <h4 className="font-mono font-bold text-gray-900 text-[10px] uppercase tracking-wider">{t.name}</h4>
                    <p className="text-[#F2994A] font-mono text-[9px] uppercase tracking-wider mt-1">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISIONEER SECTION */}
      <section className="bg-white py-32 border-t border-gray-200/50">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <Quote className="text-[#EAF5ED] h-20 w-20 mx-auto mb-10 transform -scale-x-100" fill="currentColor" />
          <h2 className="text-3xl md:text-5xl font-display font-medium text-gray-900 leading-[1.3] mb-12 tracking-tight">
            Macaulay Tekevwe is a visioneer seeking to raise <span className="text-[#107C41] font-bold">Brand Owners, Industry Experts, Business Men/Women</span> who will build Global Institutions with Kingdom Culture.
          </h2>
          <div className="flex flex-col items-center justify-center gap-4 mt-12">
            <div className="w-16 h-16 rounded-full bg-[#107C41] flex items-center justify-center text-white font-bold text-2xl shadow-inner">MT</div>
            <div>
              <h4 className="font-mono text-gray-900 tracking-[0.15em] text-[12px] font-bold uppercase">Macaulay Tekevwe</h4>
              <p className="text-[#F2994A] font-mono text-[10px] tracking-wider uppercase mt-1">Visioneer</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-10 mb-16">
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
                <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-[#F2994A] hover:border-[#F2994A] transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-[#F2994A] hover:border-[#F2994A] transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="md:col-span-3 lg:col-start-8">
              <h4 className="font-mono font-bold text-gray-900 text-[10px] uppercase tracking-[0.15em] mb-6">QUICK LINKS</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-600 hover:text-[#F2994A] text-sm transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#F2994A] text-sm transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#F2994A] text-sm transition-colors">Academy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#F2994A] text-sm transition-colors">Community</a></li>
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
