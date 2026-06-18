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
  Users
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
             Marketplace Dominion
          </div>

          <h1 className="text-6xl md:text-[7rem] font-bold text-gray-900 tracking-[-0.05em] font-display mb-8 leading-none">
            the <span className="text-[#F2994A]">beginning</span>
          </h1>

          <p className="text-[17px] md:text-[18px] text-gray-600 max-w-2xl mx-auto mb-10 leading-[1.7]">
            God is raising a generation of young believers to climb to their seat of dominance and legislate Kingdom Orders in their mountain of influence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-[#107C41] hover:bg-[#0c5c30] text-white px-8 py-3.5 rounded-[4px] text-[12px] font-mono font-bold tracking-[0.1em] flex items-center gap-2 transition-all w-full sm:w-auto justify-center uppercase">
              Join the Community &rarr;
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
              "God is raising a generation of young believers to climb to their seat of dominance and legislate Kingdom Orders in their mountain of influence."
            </h3>
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 rounded-full bg-[#107C41] flex items-center justify-center text-white font-bold text-lg shadow-inner">MT</div>
              <div>
                <h4 className="font-mono text-[#107C41] tracking-[0.1em] text-[11px] font-bold uppercase">MACAULAY TEKKY</h4>
                <p className="text-gray-900 font-mono text-[10px] tracking-wider uppercase mt-1">Founder, LBN</p>
              </div>
            </div>
          </div>

          {/* Right Text */}
          <div className="lg:pl-8">
            <h2 className="text-4xl md:text-[44px] font-bold text-gray-900 mb-8 font-display tracking-tight">Why We Exist</h2>
            <div className="text-gray-600 text-[16px] leading-[1.8] space-y-6">
              <p>No more playing mediocrity. No more playing small games but now interfering with orders, systems and policies that control the earth. We are raising a people that will live according to the likeness of God showing forth His dimension of Dominion across all spheres of influence in the Marketplace.</p>
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
              Spheres of <span className="text-[#F2994A]">Influence</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-[17px] leading-[1.6]">
              We are raising a people that will live according to the likeness of God showing forth His dimension of Dominion across all spheres of influence.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-5 md:gap-6">
            {[
              { name: "Business", icon: Briefcase },
              { name: "Government", icon: Building2 },
              { name: "Education", icon: GraduationCap },
              { name: "Religion", icon: Heart },
              { name: "Arts &\nCulture", icon: Palette },
              { name: "Media", icon: Tv },
              { name: "Family", icon: Home },
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

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#484848] rounded-2xl p-8 border border-[#555] flex flex-col">
              <div className="w-10 h-10 rounded bg-[#107C41] flex items-center justify-center mb-6">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-[#F2994A] text-xl font-bold mb-3">New Program</h3>
              <p className="text-gray-300 text-[15px] mb-6 flex-1">Description here</p>
              <div className="flex items-center gap-2 text-gray-300 text-sm mb-8">
                <CheckCircle2 className="w-4 h-4 text-gray-400" /> Feature 1
              </div>
              <button className="w-full bg-[#5A5A5A] hover:bg-[#666] border border-[#6A6A6A] text-white py-3.5 rounded font-mono text-[10px] uppercase tracking-[0.15em] font-bold transition-colors">
                Access via Academy
              </button>
            </div>

            <div className="bg-[#484848] rounded-2xl p-8 border border-[#555] flex flex-col">
              <div className="w-10 h-10 rounded bg-[#107C41] flex items-center justify-center mb-6">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-[#F2994A] text-xl font-bold mb-3">Leadership Training</h3>
              <p className="text-gray-300 text-[15px] mb-6 flex-1">Description here</p>
              <div className="flex items-center gap-2 text-gray-300 text-sm mb-8">
                <CheckCircle2 className="w-4 h-4 text-gray-400" /> Feature 1
              </div>
              <button className="w-full bg-[#5A5A5A] hover:bg-[#666] border border-[#6A6A6A] text-white py-3.5 rounded font-mono text-[10px] uppercase tracking-[0.15em] font-bold transition-colors">
                Access via Academy
              </button>
            </div>

            <div className="bg-[#484848] rounded-2xl p-8 border border-[#555] flex flex-col">
              <div className="w-10 h-10 rounded bg-[#107C41] flex items-center justify-center mb-6">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-[#F2994A] text-xl font-bold mb-3">Global Influence</h3>
              <p className="text-gray-300 text-[15px] mb-6 flex-1">Description here</p>
              <div className="flex items-center gap-2 text-gray-300 text-sm mb-8">
                <CheckCircle2 className="w-4 h-4 text-gray-400" /> Feature 1
              </div>
              <button className="w-full bg-[#5A5A5A] hover:bg-[#666] border border-[#6A6A6A] text-white py-3.5 rounded font-mono text-[10px] uppercase tracking-[0.15em] font-bold transition-colors">
                Access via Academy
              </button>
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
