
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Language, Destination } from '../types.ts';
import { DESTINATIONS, UI_STRINGS } from '../constants.tsx';
import { 
  Search, 
  MapPin, 
  ChevronDown,
  ArrowRight, 
  ArrowLeft,
  X, 
  RotateCcw,
  Landmark,
  Waves,
  PawPrint,
  Mountain,
  LayoutGrid,
  Loader2,
  Scan,
  Droplets,
  Tent,
  Sparkles,
  Navigation
} from 'lucide-react';



interface DestinationsProps {
  language: Language;
  onSelectDestination: (dest: Destination) => void;
  onBack: () => void;
}

const Destinations: React.FC<DestinationsProps> = ({ language, onSelectDestination, onBack }) => {
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [locationFilter, setLocationFilter] = useState<string>('all');
  const [search, setSearch] = useState('');

  const [isSearching, setIsSearching] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const [showResultsDropdown, setShowResultsDropdown] = useState(false);
  
  const searchWrapperRef = useRef<HTMLDivElement>(null);

  const headerBgImage = "https://i.pinimg.com/1200x/93/7f/5f/937f5f8b31f9fbad63893f189b3ddc4a.jpg";

  const categories = [
    { id: 'all', EN: 'All', SI: 'සියල්ල', icon: LayoutGrid },
    { id: 'ancient', EN: 'Ancient', SI: 'පුරාණ', icon: Landmark },
    { id: 'beach', EN: 'Beaches', SI: 'වෙරළ', icon: Waves },
    { id: 'wildlife', EN: 'Wildlife', SI: 'වනජීවී', icon: PawPrint },
    { id: 'mountains', EN: 'Hills', SI: 'කඳුකරය', icon: Mountain },
    { id: 'waterfalls', EN: 'Waterfalls', SI: 'දියඇලි', icon: Droplets },
    { id: 'camping', EN: 'Camping', SI: 'කඳවුරු', icon: Tent },
  ];

  const categoryGlows: Record<string, string> = {
    ancient: 'hover:shadow-[0_40px_100px_-20px_rgba(245,158,11,0.3)]',
    beach: 'hover:shadow-[0_40px_100px_-20px_rgba(14,165,233,0.3)]',
    wildlife: 'hover:shadow-[0_40px_100px_-20px_rgba(16,185,129,0.3)]',
    mountains: 'hover:shadow-[0_40px_100px_-20px_rgba(139,92,246,0.3)]',
    waterfalls: 'hover:shadow-[0_40px_100px_-20px_rgba(59,130,246,0.3)]',
    camping: 'hover:shadow-[0_40px_100px_-20px_rgba(5,150,105,0.3)]',
    all: 'hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)]'
  };

  const locations = useMemo(() => {
    const unique = Array.from(new Set(DESTINATIONS.map(d => d.location)));
    return ['all', ...unique];
  }, []);

  const searchMatches = useMemo(() => {
    if (!search.trim()) return [];
    const q = search.toLowerCase();
    return DESTINATIONS.filter(d => {
      return d.name.EN.toLowerCase().includes(q) || 
             d.name.SI.includes(q) ||
             d.location.toLowerCase().includes(q);
    });
  }, [search]);

  const filteredDestinations = useMemo(() => {
    return DESTINATIONS.filter(d => {
      const q = search.toLowerCase();
      const matchesLocation = locationFilter === 'all' || d.location === locationFilter;
      const matchesSearch = !search.trim() || 
                            d.name.EN.toLowerCase().includes(q) || 
                            d.name.SI.includes(q) ||
                            d.location.toLowerCase().includes(q);
      const matchesCategory = categoryFilter === 'all' || d.category === categoryFilter;
      return matchesLocation && matchesSearch && matchesCategory;
    });
  }, [locationFilter, search, categoryFilter]);

  useEffect(() => {
    const handleScroll = () => setScrollPos(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    const handleClickOutside = (event: MouseEvent) => {
      if (searchWrapperRef.current && !searchWrapperRef.current.contains(event.target as Node)) {
        setShowResultsDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (search.trim().length > 0) {
      setIsSearching(true);
      setShowResultsDropdown(true);
      const timer = setTimeout(() => setIsSearching(false), 300);
      return () => clearTimeout(timer);
    } else {
      setShowResultsDropdown(false);
    }
  }, [search]);



  const resetFilters = () => {
    setCategoryFilter('all');
    setLocationFilter('all');
    setSearch('');
    setShowResultsDropdown(false);
  };

  return (
    <section id="destinations" className="min-h-screen pb-64 bg-[#fafafa] relative antialiased">
      
      {/* Cinematic Header - Added z-[60] to stay above the sticky bar (z-50) */}
      <div className="relative z-[60] min-h-[50vh] md:min-h-[70vh] flex flex-col items-center justify-center bg-[#020205]">
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms]" 
            style={{ 
              backgroundImage: `url('${headerBgImage}')`, 
              transform: `scale(${1.1 + scrollPos / 10000})`,
              filter: 'brightness(0.4) saturate(1.2)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020205]/40 to-[#fafafa]" />
          </div>
        </div>

        {/* Back Button */}
        <div className="absolute top-6 left-6 md:top-10 md:left-10 z-[70]">
          <button onClick={onBack} className="flex items-center gap-3 md:gap-4 px-6 py-3 md:px-8 md:py-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-full font-black text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.4em] hover:bg-white hover:text-black transition-all shadow-xl group">
            <ArrowLeft size={16} className="md:w-[18px] md:h-[18px] group-hover:-translate-x-1 transition-transform" /> 
            {language === 'EN' ? 'Home' : 'මුල් පිටුව'}
          </button>
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto text-center px-4 md:px-6 space-y-8 md:space-y-12 mt-16 md:mt-0">
          <div className="space-y-3 md:space-y-4">
            <div className="inline-flex items-center gap-2 md:gap-3 px-4 py-2 md:px-6 md:py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-3xl text-[#0EA5E9] text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] shadow-2xl mx-auto">
              <Scan size={12} className="md:w-3.5 md:h-3.5 animate-pulse" />
              Reality_Registry_Portal
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-9xl font-heritage font-bold text-white tracking-tighter leading-none uppercase drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              LOCATE <br/><span className="italic insta-text-gradient">WONDERS.</span>
            </h2>
          </div>

          {/* CINEMATIC SEARCH BAR */}
          <div className="w-full max-w-2xl mx-auto relative group z-[110]" ref={searchWrapperRef}>
            <div className="absolute -inset-2 bg-gradient-to-r from-[#0EA5E9]/20 to-blue-500/20 rounded-[2rem] md:rounded-[3rem] blur-xl md:blur-2xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-700" />
            <div className={`relative flex items-center bg-[#0a0a0a]/40 backdrop-blur-[40px] border rounded-[2rem] md:rounded-[3rem] transition-all duration-700 overflow-hidden ${isFocused ? 'border-[#0EA5E9] shadow-[0_20px_60px_-15px_rgba(14,165,233,0.6)]' : 'border-white/20 shadow-2xl'}`}>
              <div className="pl-5 md:pl-8 text-[#0EA5E9]">
                {isSearching ? <Loader2 size={20} className="md:w-6 md:h-6 animate-spin" /> : <Search size={20} className="md:w-6 md:h-6" />}
              </div>
              <input 
                type="text" 
                placeholder={language === 'EN' ? "Search Registry..." : "නාමාවලිය සොයන්න..."}
                value={search}
                onFocus={() => { setIsFocused(true); if (search.trim()) setShowResultsDropdown(true); }}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-5 md:px-5 md:py-9 text-lg md:text-2xl bg-transparent text-white font-medium focus:outline-none placeholder:text-white/20 tracking-wide"
              />
              {search && (
                <button onClick={() => setSearch('')} className="pr-5 md:pr-8 text-white/40 hover:text-[#E1306C] transition-all hover:scale-110 active:scale-95">
                  <X size={20} className="md:w-6 md:h-6" />
                </button>
              )}
            </div>

            {/* EXPANSIVE SEARCH RESULTS DROPDOWN - Overlapping the filter bar */}
            {showResultsDropdown && searchMatches.length > 0 && (
              <div className="absolute top-[calc(100%+0.5rem)] md:top-[calc(100%+1rem)] left-0 right-0 bg-white rounded-[1.5rem] md:rounded-[2.5rem] shadow-[0_60px_180px_rgba(0,0,0,0.5)] border border-gray-100 overflow-hidden animate-in slide-in-from-top-6 duration-700 z-[120]">
                <div className="px-6 py-4 md:px-10 md:py-6 border-b border-gray-50 flex items-center justify-between bg-gray-50/90 backdrop-blur-xl">
                   <div className="flex items-center gap-3 md:gap-4">
                      <p className="text-[8px] md:text-[10px] font-black text-[#0EA5E9] uppercase tracking-[0.2em] md:tracking-[0.4em]">Registry Sync Results</p>
                      <span className="px-2 py-1 md:px-3 md:py-1 rounded-full bg-[#0EA5E9]/10 text-[#0EA5E9] text-[8px] md:text-[9px] font-black">{searchMatches.length} Found</span>
                   </div>
                   <div className="flex gap-1 md:gap-1.5 hidden sm:flex">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9] animate-pulse" />
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9] animate-pulse delay-150" />
                   </div>
                </div>
                <div className="max-h-[60vh] md:max-h-[520px] overflow-y-auto no-scrollbar py-2 md:py-4 px-1 md:px-2">
                  {searchMatches.map((dest, idx) => (
                    <button
                      key={dest.id}
                      onClick={() => { onSelectDestination(dest); setShowResultsDropdown(false); setSearch(''); }}
                      className="w-full flex items-center gap-4 md:gap-8 p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] hover:bg-[#fafafa] transition-all text-left group/item border-b border-gray-50/50 last:border-none"
                    >
                      <div className="relative w-16 h-16 md:w-24 md:h-24 rounded-[1rem] md:rounded-[2rem] overflow-hidden shrink-0 shadow-2xl group-hover/item:scale-105 transition-transform border-2 md:border-4 border-white">
                        <img src={dest.image} className="w-full h-full object-cover" alt="" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40" />
                      </div>
                      <div className="flex-grow space-y-1 md:space-y-2">
                        <div className="flex items-center gap-2 md:gap-3 text-[8px] md:text-[10px] font-black text-[#0EA5E9] uppercase tracking-[0.2em] md:tracking-[0.4em]">
                          <MapPin size={10} className="md:w-3 md:h-3 animate-pulse" />
                          {dest.location}
                        </div>
                        <h4 className="text-lg md:text-3xl font-heritage font-bold text-[#0a0a0a] group-hover/item:text-[#0EA5E9] transition-colors leading-none uppercase tracking-tighter">{dest.name[language]}</h4>
                        <p className="text-xs md:text-sm text-gray-400 font-medium italic line-clamp-1 opacity-80 leading-relaxed hidden sm:block">"{dest.shortStory[language]}"</p>
                      </div>
                      <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gray-50 flex items-center justify-center text-gray-300 group-hover/item:bg-[#0a0a0a] group-hover/item:text-white transition-all transform group-hover/item:translate-x-[-4px] md:group-hover/item:translate-x-[-8px] group-hover/item:rotate-12 shadow-inner shrink-0">
                        <ArrowRight size={18} className="md:w-6 md:h-6" />
                      </div>
                    </button>
                  ))}
                </div>
                <div className="p-4 md:p-6 bg-gray-50/50 border-t border-gray-50 flex justify-center">
                   <p className="text-[8px] md:text-[9px] font-black text-gray-300 uppercase tracking-[0.4em] md:tracking-[0.6em]">End of Match Manifest</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* STICKY CATEGORY BAR - Controlled by lower z-index than header during dropdown display */}
      <div className="sticky top-20 md:top-24 z-50 py-4 md:py-8 bg-white/80 backdrop-blur-2xl border-y border-gray-100 shadow-sm overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
          <div className="relative w-full md:w-auto">
            <div className="flex items-center gap-2 md:gap-3 overflow-x-auto no-scrollbar pb-2 md:pb-0 scroll-smooth">
              {categories.map(cat => (
                <button 
                  key={cat.id} 
                  onClick={() => setCategoryFilter(cat.id)} 
                  className={`flex items-center gap-2 md:gap-2.5 px-5 py-2.5 md:px-7 md:py-3.5 rounded-full text-[9px] md:text-[11px] font-semibold uppercase tracking-wider transition-all whitespace-nowrap shadow-sm border relative overflow-hidden group/cat-btn shrink-0 ${
                    categoryFilter === cat.id 
                      ? 'bg-[#0a0a0a] text-white border-transparent scale-105 shadow-xl active-category-glow' 
                      : 'bg-white text-slate-500 border-gray-100 hover:bg-gray-50'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/cat-btn:animate-shimmer pointer-events-none" />
                  <cat.icon size={14} className={`md:w-4 md:h-4 ${categoryFilter === cat.id ? 'text-[#0EA5E9]' : 'opacity-60'}`} />
                  {language === 'EN' ? cat.EN : cat.SI}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-3 md:gap-4 w-full md:w-auto">
            <div className="relative flex-grow">
              <select 
                value={locationFilter} 
                onChange={(e) => setLocationFilter(e.target.value)} 
                className="appearance-none w-full md:w-56 pl-5 pr-10 py-2.5 md:pl-7 md:pr-12 md:py-3.5 bg-white border border-gray-200 rounded-full text-[9px] md:text-[11px] font-semibold uppercase tracking-wider text-slate-700 outline-none focus:border-[#0EA5E9] cursor-pointer shadow-sm"
              >
                <option value="all">{UI_STRINGS.allRegions[language]}</option>
                {locations.filter(l => l !== 'all').map(loc => <option key={loc} value={loc}>{loc}</option>)}
              </select>
              <ChevronDown size={14} className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 text-[#0EA5E9] pointer-events-none" />
            </div>
            {(categoryFilter !== 'all' || locationFilter !== 'all' || search) && (
              <button onClick={resetFilters} className="p-2.5 md:p-3.5 bg-red-50 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-all shadow-sm shrink-0">
                <RotateCcw size={16} className="md:w-5 md:h-5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* RESULTS GRID */}
      <div id="registry-grid" className="max-w-[1600px] mx-auto px-4 md:px-12 mt-12 md:mt-24">
        {categoryFilter === 'camping' ? (
          <div className="col-span-full py-24 md:py-48 text-center space-y-8 md:space-y-12 bg-white rounded-[3rem] border border-gray-100 shadow-sm">
             <div className="w-24 h-24 md:w-32 md:h-32 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-500 shadow-inner">
                <Tent size={48} className="md:w-16 md:h-16 animate-pulse" />
             </div>
             <div className="space-y-4">
               <h3 className="text-3xl md:text-5xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tighter">Camping Registry</h3>
               <p className="text-lg md:text-2xl text-emerald-600 font-black uppercase tracking-[0.3em] md:tracking-[0.5em] animate-pulse">
                 {language === 'EN' ? 'Coming Soon' : 'ළඟදීම බලාපොරොත්තු වන්න'}
               </p>
             </div>
             <p className="max-w-md mx-auto text-gray-400 italic text-sm md:text-base">
               {language === 'EN' 
                 ? "We are currently synchronizing the wild forest nodes. The camping manifest will be available in the next update."
                 : "අපි දැනට වනාන්තර කලාප දත්ත පද්ධතියට එක් කරමින් සිටිමු. මීළඟ යාවත්කාලීනයෙන් කඳවුරු තොරතුරු ලබා ගත හැක."}
             </p>
             <button onClick={resetFilters} className="px-8 py-4 md:px-12 md:py-5 bg-[#0a0a0a] text-white rounded-full font-black text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.5em] shadow-2xl hover:scale-105 transition-transform">Return to Core</button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            {filteredDestinations.length > 0 ? filteredDestinations.map((dest, idx) => (
            <div 
              key={dest.id} 
              onClick={() => onSelectDestination(dest)}
              className={`group relative h-[400px] md:h-[600px] bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-gray-100 transition-all duration-700 hover:-translate-y-2 md:hover:-translate-y-4 hover:scale-[1.02] cursor-pointer hover-glint ${categoryGlows[dest.category] || categoryGlows.all} animate-in slide-in-from-bottom-10`}
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <img 
                src={dest.image} 
                alt={dest.name[language]} 
                className="w-full h-full object-cover transition-transform duration-[4s] ease-out group-hover:scale-110" 
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/40 to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-95" />
              
              <div className="absolute top-4 left-4 md:top-6 md:left-6">
                 <div className="px-3 py-1 md:px-4 md:py-1.5 bg-white/20 backdrop-blur-xl rounded-full text-[7px] md:text-[8px] font-black uppercase tracking-widest text-white shadow-2xl border border-white/20">
                    {dest.category}
                 </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 space-y-3 md:space-y-4 transition-transform duration-700 group-hover:-translate-y-2">
                 <div className="flex items-center gap-2 text-[#0EA5E9]">
                    <MapPin size={12} className="md:w-3.5 md:h-3.5 animate-pulse" />
                    <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em]">{dest.location}</span>
                 </div>
                 <h3 className="text-2xl md:text-3xl font-heritage font-bold text-white tracking-tighter leading-[0.9] uppercase">{dest.name[language]}</h3>
                 <p className="text-xs md:text-sm lg:text-lg text-white/80 font-light italic line-clamp-2 leading-relaxed">
                    "{dest.shortStory[language]}"
                 </p>
                 <div className="pt-2 md:pt-4">
                    <button 
                      className="flex items-center gap-2 md:gap-3 px-6 py-3 md:px-8 md:py-4 bg-white text-[#0a0a0a] rounded-full font-black text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] hover:bg-[#0EA5E9] hover:text-white transition-all duration-500 group/btn"
                    >
                      <span>Explore</span>
                      <ArrowRight size={12} className="md:w-3.5 md:h-3.5 transition-transform group-hover/btn:translate-x-2" />
                    </button>
                 </div>
              </div>
            </div>
          )) : (
            <div className="col-span-full py-24 md:py-48 text-center space-y-8 md:space-y-12">
               <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-50 rounded-full flex items-center justify-center mx-auto text-gray-200 shadow-inner">
                  <Search size={48} className="md:w-16 md:h-16 animate-pulse" />
               </div>
               <h3 className="text-2xl md:text-4xl font-heritage font-bold text-gray-400">No Registry Matches</h3>
               <button onClick={resetFilters} className="px-8 py-4 md:px-12 md:py-5 bg-[#0a0a0a] text-white rounded-full font-black text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.5em] shadow-2xl">Reset Sync</button>
            </div>
          )}
        </div>
        )}


      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        @keyframes shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
        .group\\/cat-btn:hover .animate-shimmer { animation: shimmer 1s infinite; }
        @keyframes pulse-light {
          0% { box-shadow: 0 0 0 0 rgba(14, 165, 233, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(14, 165, 233, 0); }
          100% { box-shadow: 0 0 0 0 rgba(14, 165, 233, 0); }
        }
        .active-category-glow { animation: pulse-light 2s infinite; border-color: rgba(14, 165, 233, 0.3) !important; }
      `}} />
    </section>
  );
};

export default Destinations;
