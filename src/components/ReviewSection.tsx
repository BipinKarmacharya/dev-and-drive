export default function ReviewSection() {
  return (
    <section className="bg-brand-paper text-black py-12 px-6 border-b border-zinc-300">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Section Header */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <p className="text-[11px] font-bold tracking-widest text-brand-red uppercase mb-1">
              02 — Independent Reviews
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Road-tested. Measured. No favours.
            </h2>
          </div>
          <a href="/reviews" className="text-sm font-semibold hover:underline flex items-center gap-1">
            All reviews →
          </a>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Lead Story Card (Left 7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-lg overflow-hidden border border-zinc-200 shadow-sm flex flex-col justify-between">
            <div>
              {/* Image Container with Badges */}
              <div 
                className="relative h-[380px] bg-zinc-800 p-4 flex flex-col justify-between"
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1200&auto=format&fit=crop")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <span className="bg-black/80 text-white text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 w-fit rounded">
                  Moto • Lead Story
                </span>
                
                <div className="flex justify-end">
                  <span className="bg-brand-green text-black font-bold text-sm px-2 py-1 rounded">
                    8.7
                  </span>
                </div>
              </div>

              {/* Text Body */}
              <div className="p-6">
                <p className="text-[10px] tracking-widest text-zinc-400 uppercase font-mono mb-2">
                  Royal Enfield • Himalayan 450 • Sept 2026
                </p>
                <h3 className="text-2xl font-bold mb-3 leading-snug">
                  High-altitude truth: the Himalayan finally grows up
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                  400 km from Kathmandu to Mustang. Fueling, suspension fade, pillion comfort and cold-start manners — logged every 50 km.
                </p>
              </div>
            </div>

            {/* Footer / Author Row */}
            <div className="px-6 pb-6 pt-0 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-zinc-900 text-white text-[10px] font-bold flex items-center justify-center">
                  AS
                </div>
                <span className="text-xs text-zinc-600 font-medium">A. Sharma • 11 min read</span>
              </div>
              <button className="bg-zinc-900 text-white text-xs font-bold px-4 py-2 rounded.hover:bg-black transition">
                Read test
              </button>
            </div>
          </div>

          {/* Secondary Reviews Sidebar (Right 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            <div className="space-y-4">
              
              {/* Card 1: EV */}
              <div className="bg-zinc-900 text-white p-4 rounded-lg flex items-center gap-4">
                <div className="w-28 h-20 bg-zinc-800 rounded overflow-hidden flex-shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=300&auto=format&fit=crop" 
                    alt="Tata Curvv EV" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="text-[9px] tracking-widest uppercase font-bold text-brand-green">
                    EV • Not Rated
                  </span>
                  <h4 className="font-bold text-sm leading-snug hover:text-brand-green cursor-pointer">
                    Tata Curvv EV: coupe gloss or real range?
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1 line-clamp-1">
                    412 km claimed. 298 km on our ring-road loop.
                  </p>
                </div>
              </div>

              {/* Card 2: Luxury */}
              <div className="bg-white text-black p-4 rounded-lg border border-zinc-200 flex items-center gap-4">
                <div className="w-28 h-20 bg-zinc-100 rounded overflow-hidden flex-shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=300&auto=format&fit=crop" 
                    alt="BMW 3 Series" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="text-[9px] tracking-widest uppercase font-bold text-brand-red">
                    Luxury • 8.9 Score
                  </span>
                  <h4 className="font-bold text-sm leading-snug">
                    BMW 3 Series LWB: the back-seat business case
                  </h4>
                  <p className="text-xs text-zinc-500 mt-1 line-clamp-1">
                    Chauffeur comfort meets driver reward.
                  </p>
                </div>
              </div>

            </div>

            {/* Archive Strip */}
            <div className="bg-white p-3 rounded-lg border border-zinc-200 flex items-center justify-between text-xs font-mono">
              <span className="text-zinc-500">
                ~ 214 ARCHIVED TESTS • BIKES / SUVS / EVS / CV
              </span>
              <a href="/archive" className="font-bold underline hover:text-brand-red">
                Browse
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}