import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-brand-dark border-b border-zinc-800">
      {/* Main Top Bar */}
      <div className="max-w-[1600px] mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo Area */}
        <div className="flex items-center gap-4">
          <div className="bg-brand-red text-white w-8 h-8 flex items-center justify-center font-bold text-xl">
            D
          </div>
          <div>
            <h1 className="font-bold tracking-widest text-lg uppercase">Dev & Drive</h1>
            <p className="text-[10px] text-zinc-400 tracking-widest uppercase">Temp Logo — Nepal</p>
          </div>
        </div>

        {/* Center Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
          <Link href="/reviews" className="hover:text-white transition">Reviews</Link>
          <Link href="/discover" className="hover:text-white transition">Discover</Link>
          <Link href="/compare" className="hover:text-white transition">Compare</Link>
          <Link href="/stories" className="hover:text-white transition">Stories</Link>
          <Link href="/guides" className="hover:text-white transition">Guides</Link>
          <Link href="/tech" className="hover:text-white transition">Tech</Link>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-6">
          <button className="text-sm text-zinc-400 hover:text-white flex items-center gap-2">
            Search <span className="px-1.5 py-0.5 bg-zinc-800 rounded text-xs">⌘K</span>
          </button>
          <button className="bg-brand-red hover:bg-red-700 text-white px-6 py-5 text-sm font-bold h-full">
            Compare +
          </button>
        </div>
      </div>
      
      {/* Sub-navigation bar */}
      <div className="max-w-[1600px] mx-auto px-6 py-2 flex justify-between text-[11px] text-zinc-500 uppercase tracking-widest border-t border-zinc-800">
        <span>Independent Reviews — Est. Kathmandu</span>
        <span>Issue 042 / Monsoon Road-Test Season</span>
        <span>NPR Pricing Where Verified</span>
      </div>
    </nav>
  );
}