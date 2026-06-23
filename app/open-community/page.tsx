import Image from "next/image";
import Link from "next/link";
import {
  Users,
  ChevronRight,
  ArrowLeft
} from "lucide-react";

export default function OpenCommunityPage() {
  return (
    <main className="min-h-screen bg-[#363535] text-white selection:bg-[#F2994A] selection:text-white pb-32">
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
        <div className="max-w-[1000px] mx-auto">
          <div className="w-16 h-16 rounded-xl bg-[#107C41] flex items-center justify-center mb-10">
            <Users className="w-8 h-8 text-white" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-display tracking-tight mb-8">
            The <span className="text-[#F2994A]">Open Community</span>
          </h1>
          
          <p className="text-[16px] md:text-[22px] text-gray-300 max-w-3xl leading-[1.6] mb-12">
            This is your weekly system for push to become a First Class Individual. Before you can build a Global Institution (Brand) with Kingdom Culture, you must first know and understand your Personal Identity.
          </p>

          <button className="bg-[#F2994A] hover:bg-[#df8b40] text-white px-8 py-4 rounded-[4px] font-mono font-bold tracking-[0.1em] transition-colors uppercase text-[12px] flex items-center gap-2 justify-center w-full sm:w-auto">
            Join the Community <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* DETAILED CONTENT */}
      <section className="px-6 py-20 bg-[#484848] border-y border-[#555]">
        <div className="max-w-[1000px] mx-auto grid md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <h2 className="text-3xl font-display font-bold mb-6 text-[#107C41]">Structure & Mentality</h2>
            <p className="text-gray-300 leading-relaxed text-[16px] md:text-[17px] mb-6">
              Inside the Open Community, a structured system is curated to help shape your mentality and show you possibilities that exist.
            </p>
            <p className="text-gray-300 leading-relaxed text-[16px] md:text-[17px]">
              We believe that excellence in the marketplace is fundamentally tied to an individual's spiritual alignment and clarity of purpose. This space ensures you are always growing, always accountable, and constantly exposed to high-value insights.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-display font-bold mb-8 text-[#F2994A]">Weekly Breakdown</h3>
            <div className="space-y-8">
              {[
                { day: "Monday", focus: "Identity & Alignment", desc: "Start your week with powerful affirmations that align your mindset for Dominion." },
                { day: "Wednesday", focus: "Clarity & Direction", desc: "Get our weekly letter breaking down mindset patterns, sharing growth strategies that give you an edge in today's marketplace environment." },
                { day: "Friday", focus: "Intentional Learning", desc: "Using the community focus points you learn on diverse subject matters that have direct impact and making you a better builder." },
                { day: "Saturday", focus: "Spiritual Activation", desc: "Join focused prayer sessions to strengthen your spiritual altar for divine wisdom and guidance." },
                { day: "Monthly", focus: "Growth & Exposure", desc: "Plug into our General Assembly for deeper interactive teachings and connections." }
              ].map((schedule, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                  <div className="w-auto sm:w-[100px] shrink-0 sm:pt-1 inline-flex self-start">
                    <span className="bg-[#5A5A5A] text-[#F2994A] px-3 py-1.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider block text-center">
                      {schedule.day}
                    </span>
                  </div>
                  <div>
                    <h5 className="text-white font-bold text-[16px] mb-2">{schedule.focus}</h5>
                    <p className="text-gray-400 text-[14px] md:text-[15px] leading-relaxed">{schedule.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 leading-tight">Ready to step into your <br className="hidden md:block"/> <span className="text-[#107C41]">placement?</span></h2>
        <button className="bg-[#107C41] hover:bg-[#0c5c30] text-white px-8 py-5 md:px-10 rounded-[4px] font-mono font-bold tracking-[0.1em] transition-colors uppercase text-[12px] md:text-[14px] w-full sm:w-auto">
          Start your growth journey now
        </button>
      </section>
    </main>
  );
}
