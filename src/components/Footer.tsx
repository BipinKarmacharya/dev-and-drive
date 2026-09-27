"use client";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-12 pb-6 border-t border-zinc-800">
      
      {/* Newsletter & Guided Finder Section */}
      <div className="max-w-[1600px] mx-auto px-6 pb-16 border-b border-zinc-800 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Newsletter Signup (Left 7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <p className="text-[10px] font-bold tracking-widest text-brand-green uppercase mb-2">
              07 — The Sunday Redline
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              One email. Five verdicts. Zero spam.
            </h2>
            <p className="text-xs text-zinc-400 mb-6 max-w-lg leading-relaxed">
              Join 18,000 readers. Weekly road tests, NPR price moves and EV explainers — every Sunday morning.
            </p>

            <form className="flex max-w-md gap-0 mb-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="you@example.com" 
                className="bg-white text-black px-4 py-3 text-xs w-full outline-none focus:ring-1 focus:ring-brand-red"
              />
              <button type="submit" className="bg-brand-red hover:bg-red-700 text-white text-xs font-bold px-6 py-3 transition">
                Subscribe
              </button>
            </form>
            
            <p className="text-[10px] text-zinc-500 font-mono">
              No pop-ups. Unsubscribe anytime. Editorial independence funded by readers.
            </p>
          </div>
        </div>

        {/* Guided Finder Box (Right 5 cols) */}
        <div className="lg:col-span-5 bg-zinc-900/60 p-6 rounded-xl border border-zinc-800/80">
          <p className="text-[9px] font-bold tracking-widest text-zinc-400 uppercase mb-2">
            Guided Finder — 60 sec
          </p>
          <h3 className="text-xl font-bold mb-4">Not sure what fits your life?</h3>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 rounded-full border border-zinc-700 text-xs text-zinc-300 hover:border-white cursor-pointer">City</span>
            <span className="px-3 py-1 rounded-full border border-zinc-700 text-xs text-zinc-300 hover:border-white cursor-pointer">Highway</span>
            <span className="px-3 py-1 rounded-full border border-zinc-700 text-xs text-zinc-300 hover:border-white cursor-pointer">Hills</span>
            <span className="px-3 py-1 rounded-full border border-zinc-700 text-xs text-zinc-300 hover:border-white cursor-pointer">Family</span>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-zinc-800 h-1 rounded mb-6">
            <div className="bg-brand-green h-1 w-1/4 rounded"></div>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-[10px] font-mono uppercase text-zinc-400">01/6 — Budget in NPR?</span>
            <button className="bg-white text-black font-bold text-xs px-4 py-2 rounded hover:bg-zinc-200 transition">
              Start →
            </button>
          </div>
        </div>

      </div>

      {/* Navigation Columns */}
      <div className="max-w-[1600px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-8 text-xs border-b border-zinc-800/80">
        
        {/* Brand info */}
        <div className="md:col-span-2 pr-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-brand-red text-white w-7 h-7 flex items-center justify-center font-bold text-base">
              D
            </div>
            <span className="font-bold text-sm tracking-widest uppercase">Dev & Drive</span>
            <span className="text-[9px] text-zinc-400 tracking-widest uppercase bg-zinc-800 px-1.5 py-0.5 rounded">Temp</span>
          </div>
          <p className="text-zinc-400 leading-relaxed mb-6 max-w-sm">
            Independent automotive journalism from Kathmandu. Cars, bikes, EVs and the engineering behind them.
          </p>
          <div className="flex gap-2 font-mono text-[10px]">
            <span className="px-2 py-1 bg-zinc-800 border border-zinc-700 rounded text-zinc-300 cursor-pointer">YT</span>
            <span className="px-2 py-1 bg-zinc-800 border border-zinc-700 rounded text-zinc-300 cursor-pointer">IG</span>
            <span className="px-2 py-1 bg-zinc-800 border border-zinc-700 rounded text-zinc-300 cursor-pointer">X</span>
            <span className="px-2 py-1 bg-zinc-800 border border-zinc-700 rounded text-zinc-300 cursor-pointer">FB</span>
          </div>
        </div>

        {/* Column 1 */}
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-4 font-mono">Explore</h4>
          <ul className="space-y-2.5 text-zinc-300">
            <li><a href="#" className="hover:text-white">Reviews</a></li>
            <li><a href="#" className="hover:text-white">Discover</a></li>
            <li><a href="#" className="hover:text-white">Compare</a></li>
            <li><a href="#" className="hover:text-white">Tech Hub</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-4 font-mono">Research</h4>
          <ul className="space-y-2.5 text-zinc-300">
            <li><a href="#" className="hover:text-white">Buying guides</a></li>
            <li><a href="#" className="hover:text-white">EV charging map</a></li>
            <li><a href="#" className="hover:text-white">Ownership costs</a></li>
            <li><a href="#" className="hover:text-white">Used checklist</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-4 font-mono">Company</h4>
          <ul className="space-y-2.5 text-zinc-300">
            <li><a href="#" className="hover:text-white">About & ethics</a></li>
            <li><a href="#" className="hover:text-white">Editorial policy</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">Privacy • Terms</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1600px] mx-auto px-6 pt-6 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono text-zinc-500 gap-4">
        <p>© 2026 Dev and Drive • Kathmandu, Nepal</p>
        <p className="uppercase tracking-widest">
          Sitemap: Home / Reviews / Review / Explorer / Compare / Finder / News / Guides / Tech
        </p>
      </div>

    </footer>
  );
}