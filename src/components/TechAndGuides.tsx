export default function TechAndGuides() {
  return (
    <div className="bg-brand-paper">
      {/* 05 - Tech / EV Hub Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 border-b border-zinc-300">
        
        {/* Left Red Block */}
        <div className="lg:col-span-4 bg-brand-red text-white p-8 lg:p-12 flex flex-col justify-between">
          <div>
            <p className="text-[10px] font-bold tracking-widest uppercase mb-4 text-white/80">
              05 — Tech / EV Hub
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Engineering, decoded.
            </h2>
            <p className="text-sm text-white/90 leading-relaxed mb-8">
              Battery chemistry, ADAS calibration for hill roads, ethanol blends — explained by engineers, not marketers.
            </p>

            <div className="space-y-4 border-t border-white/20 pt-6">
              <a href="#" className="flex justify-between items-center text-xs font-semibold hover:underline">
                <span>Solid-state batteries: what 2027 really means</span>
                <span>→</span>
              </a>
              <a href="#" className="flex justify-between items-center text-xs font-semibold hover:underline">
                <span>Why ABS tuning fails on gravel — and fixes</span>
                <span>→</span>
              </a>
              <a href="#" className="flex justify-between items-center text-xs font-semibold hover:underline">
                <span>Software-defined cars: OTA risks in Nepal</span>
                <span>→</span>
              </a>
            </div>
          </div>

          <div className="mt-8">
            <button className="bg-black text-white text-xs font-bold px-6 py-3 rounded hover:bg-zinc-900 transition">
              Visit Tech Hub
            </button>
          </div>
        </div>

        {/* Right Stories Section */}
        <div className="lg:col-span-8 p-8 lg:p-12">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-black">Latest stories</h3>
            
            <div className="flex gap-2">
              <span className="bg-black text-white text-xs px-3 py-1 rounded-full font-medium">All</span>
              <span className="bg-zinc-200 text-zinc-700 text-xs px-3 py-1 rounded-full font-medium hover:bg-zinc-300 cursor-pointer">Launches</span>
              <span className="bg-zinc-200 text-zinc-700 text-xs px-3 py-1 rounded-full font-medium hover:bg-zinc-300 cursor-pointer">EV</span>
              <span className="bg-zinc-200 text-zinc-700 text-xs px-3 py-1 rounded-full font-medium hover:bg-zinc-300 cursor-pointer">Moto</span>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Story Card 1 */}
            <div className="bg-white rounded-lg border border-zinc-200 overflow-hidden shadow-sm flex flex-col justify-between">
              <div>
                <div className="h-36 bg-zinc-100 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1541348263662-e082662d82da?q=80&w=400&auto=format&fit=crop" alt="Swift Hybrid" className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <span className="text-[9px] font-bold text-brand-red uppercase tracking-widest">Launch</span>
                  <h4 className="font-bold text-sm text-black mt-1 leading-snug">
                    2026 Swift Hybrid lands in Nepal: what changes
                  </h4>
                </div>
              </div>
              <div className="p-4 pt-0">
                <span className="text-[10px] text-zinc-400 font-mono">4 min • Today</span>
              </div>
            </div>

            {/* Story Card 2 */}
            <div className="bg-white rounded-lg border border-zinc-200 overflow-hidden shadow-sm flex flex-col justify-between">
              <div>
                <div className="h-36 bg-zinc-100 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=400&auto=format&fit=crop" alt="EV Tax" className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <span className="text-[9px] font-bold text-brand-red uppercase tracking-widest">Industry</span>
                  <h4 className="font-bold text-sm text-black mt-1 leading-snug">
                    NPR tax slab reshuffle: winners for EV buyers
                  </h4>
                </div>
              </div>
              <div className="p-4 pt-0">
                <span className="text-[10px] text-zinc-400 font-mono">4 min • Today</span>
              </div>
            </div>

            {/* Story Card 3 */}
            <div className="bg-white rounded-lg border border-zinc-200 overflow-hidden shadow-sm flex flex-col justify-between">
              <div>
                <div className="h-36 bg-zinc-100 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=400&auto=format&fit=crop" alt="Rally Thar" className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <span className="text-[9px] font-bold text-brand-red uppercase tracking-widest">Motorsport</span>
                  <h4 className="font-bold text-sm text-black mt-1 leading-snug">
                    Desert to hills: rally-spec Thar tested
                  </h4>
                </div>
              </div>
              <div className="p-4 pt-0">
                <span className="text-[10px] text-zinc-400 font-mono">4 min • Today</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 06 - Buying Guides Section */}
      <section className="max-w-[1600px] mx-auto p-8 lg:p-12 border-b border-zinc-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Section Left Header */}
          <div className="lg:col-span-4">
            <p className="text-[10px] font-bold tracking-widest uppercase text-zinc-500 mb-2">
              06 — Buying Guides
            </p>
            <h2 className="text-3xl font-bold text-black mb-3">
              Buy once. Buy right.
            </h2>
            <p className="text-xs text-zinc-600 leading-relaxed mb-6 max-w-sm">
              NPR-aware checklists, ownership math and resale notes for Nepal. Local vs International Info clearly tagged.
            </p>
            <button className="border border-zinc-800 text-black font-bold text-xs px-5 py-2.5 rounded hover:bg-black hover:text-white transition">
              All guides
            </button>
          </div>

          {/* Section Right Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Guide Item 1 */}
            <div className="bg-white p-5 rounded-lg border border-zinc-200 flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-bold text-brand-red uppercase tracking-widest">Nepal • EV</span>
                <h4 className="font-bold text-sm text-black mt-2 mb-4 leading-snug">
                  Home charging in apartments: load, wiring & cost
                </h4>
              </div>
              <a href="#" className="text-xs font-bold text-black underline hover:text-brand-red">Read guide</a>
            </div>

            {/* Guide Item 2 */}
            <div className="bg-white p-5 rounded-lg border border-zinc-200 flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-bold text-brand-red uppercase tracking-widest">Used • Moto</span>
                <h4 className="font-bold text-sm text-black mt-2 mb-4 leading-snug">
                  Used bike inspection: 22-point hill-test checklist
                </h4>
              </div>
              <a href="#" className="text-xs font-bold text-black underline hover:text-brand-red">Read guide</a>
            </div>

            {/* Guide Item 3 */}
            <div className="bg-white p-5 rounded-lg border border-zinc-200 flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-bold text-brand-red uppercase tracking-widest">SUV • Family</span>
                <h4 className="font-bold text-sm text-black mt-2 mb-4 leading-snug">
                  7-seaters under NPR 1Cr: space per rupee
                </h4>
              </div>
              <a href="#" className="text-xs font-bold text-black underline hover:text-brand-red">Read guide</a>
            </div>

            {/* Guide Item 4 */}
            <div className="bg-white p-5 rounded-lg border border-zinc-200 flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-bold text-brand-red uppercase tracking-widest">Money</span>
                <h4 className="font-bold text-sm text-black mt-2 mb-4 leading-snug">
                  Loan vs cash: real ownership cost calculator
                </h4>
              </div>
              <a href="#" className="text-xs font-bold text-black underline hover:text-brand-red">Read guide</a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}