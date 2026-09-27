export default function VehicleFinder() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 border-b border-zinc-800">
      
      {/* Left Column: Find Your Vehicle */}
      <div className="bg-brand-paper p-8 lg:p-16 flex flex-col justify-center">
        <p className="text-[11px] font-bold tracking-widest text-zinc-500 uppercase mb-4">
          03 — Find Your Vehicle
        </p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-10">
          Start by shape.<br />Refine by sense.
        </h2>
        
        {/* Categories Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white rounded overflow-hidden shadow-sm flex flex-col group cursor-pointer border border-zinc-200">
            <div className="h-32 overflow-hidden bg-zinc-200">
              <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=600&auto=format&fit=crop" alt="SUVs" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            </div>
            <div className="p-4 flex justify-between items-center">
              <span className="font-bold text-black text-sm">SUVs</span>
              <span className="bg-black text-white text-[10px] font-bold px-2 py-1 rounded">48</span>
            </div>
          </div>
          
          <div className="bg-white rounded overflow-hidden shadow-sm flex flex-col group cursor-pointer border border-zinc-200">
            <div className="h-32 overflow-hidden bg-zinc-200">
              <img src="https://images.unsplash.com/photo-1558981420-c532902e58b4?q=80&w=600&auto=format&fit=crop" alt="Motorcycles" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            </div>
            <div className="p-4 flex justify-between items-center">
              <span className="font-bold text-black text-sm">Motorcycles</span>
              <span className="bg-black text-white text-[10px] font-bold px-2 py-1 rounded">96</span>
            </div>
          </div>
          
          <div className="bg-white rounded overflow-hidden shadow-sm flex flex-col group cursor-pointer border border-zinc-200">
            <div className="h-32 overflow-hidden bg-zinc-200">
              <img src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=600&auto=format&fit=crop" alt="EVs" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            </div>
            <div className="p-4 flex justify-between items-center">
              <span className="font-bold text-black text-sm">EVs</span>
              <span className="bg-black text-white text-[10px] font-bold px-2 py-1 rounded">37</span>
            </div>
          </div>
          
          <div className="bg-white rounded overflow-hidden shadow-sm flex flex-col group cursor-pointer border border-zinc-200">
            <div className="h-32 overflow-hidden bg-zinc-200">
              <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=600&auto=format&fit=crop" alt="Commercial" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            </div>
            <div className="p-4 flex justify-between items-center">
              <span className="font-bold text-black text-sm">Commercial</span>
              <span className="bg-black text-white text-[10px] font-bold px-2 py-1 rounded">22</span>
            </div>
          </div>
        </div>

        {/* Search Input */}
        <div className="bg-white p-4 rounded border border-zinc-300 flex items-center justify-between text-zinc-500 cursor-text shadow-sm">
          <span className="text-sm">Try: "5-seater EV under NPR 60L for city + highway"</span>
          <span className="font-bold text-black">→</span>
        </div>
      </div>

      {/* Right Column: Compare, Clearly */}
      <div className="bg-[#191919] p-8 lg:p-16 flex flex-col justify-center text-white border-t lg:border-t-0 lg:border-l border-zinc-800">
        <p className="text-[11px] font-bold tracking-widest text-brand-green uppercase mb-4">
          04 — Compare, Clearly
        </p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-10 text-white leading-tight">
          Harrier vs Scorpio-N vs Hycross?<br />Settle it with data.
        </h2>

        {/* Comparison Tool Preview Box */}
        <div className="bg-zinc-900/50 rounded-xl border border-zinc-800/80 p-6 mb-8 max-w-lg shadow-xl backdrop-blur-sm">
          
          {/* Vehicle Images Row */}
          <div className="flex gap-4 mb-8">
            <div className="w-28 h-20 bg-white rounded flex items-center justify-center overflow-hidden">
               <img src="https://images.unsplash.com/photo-1619682817481-e994891cd1f5?q=80&w=300&auto=format&fit=crop" alt="Car 1" className="w-full h-full object-cover" />
            </div>
            <div className="w-28 h-20 bg-zinc-800 rounded flex items-center justify-center overflow-hidden">
               <img src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=300&auto=format&fit=crop" alt="Car 2" className="w-full h-full object-cover" />
            </div>
            <div className="w-28 h-20 border border-dashed border-zinc-600 rounded-lg flex flex-col items-center justify-center text-zinc-400 hover:border-zinc-400 hover:text-zinc-300 transition cursor-pointer">
              <span className="text-xl leading-none mb-1">+ Add</span>
              <span className="text-[9px] uppercase tracking-widest font-semibold">3 max</span>
            </div>
          </div>

          {/* Specs Rows */}
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-zinc-800/50 pb-3">
              <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Power</span>
              <span className="text-xs font-mono font-bold text-zinc-300"><span className="text-brand-green">170 PS</span> • 175 PS • 174 PS</span>
            </div>
            <div className="flex justify-between items-center border-b border-zinc-800/50 pb-3">
              <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Boot</span>
              <span className="text-xs font-mono font-bold text-zinc-300">445L • <span className="text-brand-green">587L</span> • 330L</span>
            </div>
            <div className="flex justify-between items-center pb-1">
              <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Rating</span>
              <span className="text-xs font-mono font-bold text-zinc-300">8.6 • 8.2 • 8.4</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div>
          <button className="bg-brand-green hover:bg-[#8cee00] text-black px-6 py-3 font-bold text-sm rounded shadow-[0_4px_14px_rgba(163,255,0,0.2)] transition">
            Open comparison tool
          </button>
          <p className="text-[10px] text-zinc-500 mt-5 tracking-widest uppercase font-medium">
            No winner badges. Differences explained, not declared.
          </p>
        </div>
      </div>

    </section>
  );
}