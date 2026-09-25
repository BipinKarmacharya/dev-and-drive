export default function Hero() {
  return (
    <section className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-3 min-h-[600px] border-b border-zinc-800">
      
      {/* Left Column: Main Feature Image & Text */}
      <div 
        className="lg:col-span-2 relative bg-zinc-900 flex flex-col justify-end p-8 md:p-16 border-r border-zinc-800"
        style={{ 
          backgroundImage: 'linear-gradient(to top, rgba(18,18,18,1), rgba(18,18,18,0.3)), url("https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=1600&auto=format&fit=crop")', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}
      >
        <div className="mb-6 flex items-center gap-4">
          <span className="bg-brand-green text-black text-[11px] font-bold px-3 py-1 tracking-wider uppercase">
            Road Test 042
          </span>
          <span className="text-zinc-300 text-[11px] tracking-widest uppercase">
            Mustang Mach-E 412 km Range Test
          </span>
        </div>
        
        <h2 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 tracking-tight text-white">
          Driven by curiosity.<br />Built on honest<br />reviews.
        </h2>
        
        <p className="text-lg text-zinc-300 max-w-xl mb-10 italic font-serif">
          Independent road tests, engineering deep-dives and Nepal-first buying advice — no dealership spin.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <button className="bg-brand-red hover:bg-red-700 text-white px-8 py-4 text-sm font-bold transition">
            Read the lead review
          </button>
          <button className="border border-zinc-600 hover:border-white text-white px-8 py-4 text-sm font-bold transition">
            Explore vehicles
          </button>
        </div>
      </div>

      {/* Right Column: Sidebar Metrics */}
      <div className="flex flex-col">
        
        {/* Top: Latest Verdicts */}
        <div className="bg-white text-black p-8 flex-1">
          <p className="text-[10px] tracking-widest uppercase text-zinc-400 mb-8 font-bold">
            01 — Latest Verdicts
          </p>
          
          <div className="space-y-6">
            <div className="flex gap-6 items-start border-b border-zinc-200 pb-6">
              <span className="text-3xl font-bold">8.6</span>
              <div>
                <h4 className="font-bold text-sm mb-1">Tata Harrier facelift: the highway king refined</h4>
                <p className="text-xs text-zinc-500">SUV — Diesel • 9 min</p>
              </div>
            </div>
            <div className="flex gap-6 items-start border-b border-zinc-200 pb-6">
              <span className="text-3xl font-bold">8.1</span>
              <div>
                <h4 className="font-bold text-sm mb-1">Royal Enfield Himalayan 450 at 3,200m</h4>
                <p className="text-xs text-zinc-500">Moto • Adventure • 7 min</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <span className="text-3xl font-bold">—</span>
              <div>
                <h4 className="font-bold text-sm mb-1">BYD Atto 3 long-term: Kathmandu charging reality</h4>
                <p className="text-xs text-zinc-500">EV • Not rated yet • 12 min</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: Specs & Index Grid */}
        <div className="grid grid-cols-2 min-h-[200px]">
          {/* Spec Strip - Beige */}
          <div className="bg-brand-paper text-black p-6 flex flex-col justify-center">
            <p className="text-[10px] tracking-widest uppercase text-zinc-500 mb-3 font-bold">Spec Strip</p>
            <span className="text-4xl font-bold">184 <span className="text-lg">PS</span></span>
            <p className="text-xs text-zinc-600 mt-2">Most tested power band this month</p>
            
            <div className="w-full bg-zinc-300 h-[1px] mt-6 relative">
              <div className="absolute left-0 top-0 w-1/3 h-[2px] bg-brand-red -mt-[0.5px]"></div>
            </div>
            <p className="text-[10px] text-zinc-500 mt-2 font-mono">0-100 • 9.8s AVG</p>
          </div>
          
          {/* Kathmandu Index - Dark */}
          <div className="bg-[#1a1a1a] text-white p-6 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-zinc-800">
            <p className="text-[10px] tracking-widest uppercase text-zinc-500 mb-3 font-bold">Kathmandu Index</p>
            <span className="text-4xl font-bold text-brand-green">72%</span>
            <p className="text-xs text-zinc-400 mt-2 pr-4">Tested climbs cleared on Araniko Hwy</p>
            <a href="#" className="text-xs text-white underline mt-6 hover:text-brand-green transition">
              How we test →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}