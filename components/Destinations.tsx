
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



import { SEO } from './SEO.tsx';

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

  const headerBgImage = "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1920&q=80";

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
             d.location.toLowerCase().includes(q) ||
             d.category.toLowerCase().includes(q);
    });
  }, [search]);

  const filteredDestinations = useMemo(() => {
    return DESTINATIONS.filter(d => {
      const q = search.toLowerCase();
      const matchesLocation = locationFilter === 'all' || d.location === locationFilter;
      const matchesSearch = !search.trim() || 
                            d.name.EN.toLowerCase().includes(q) || 
                            d.name.SI.includes(q) ||
                            d.location.toLowerCase().includes(q) ||
                            d.category.toLowerCase().includes(q);
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
      <SEO 
        title={language === 'EN' ? 'Destinations' : 'ගමනාන්ත'} 
        description={language === 'EN' ? 'Explore the beautiful destinations of Sri Lanka.' : 'ශ්‍රී ලංකාවේ සුන්දර ගමනාන්ත ගවේෂණය කරන්න.'} 
      />
      
      {/* Cinematic Header */}
      <div className="relative z-[60] min-h-[60vh] md:min-h-[80vh] flex flex-col items-center justify-center bg-black">
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms]" 
            style={{ 
              backgroundImage: `url('${headerBgImage}')`, 
              transform: `scale(${1.1 + scrollPos / 10000})`,
              filter: 'brightness(0.5) saturate(1.1)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#fafafa]" />
          </div>
        </div>

        {/* Back Button */}
        <div className="absolute top-8 left-8 md:top-12 md:left-12 z-[70]">
          <button onClick={onBack} className="flex items-center gap-4 px-8 py-4 bg-white/10 backdrop-blur-2xl border border-white/20 text-white rounded-full font-black text-[10px] uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all shadow-2xl group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
            {language === 'EN' ? 'Home' : 'මුල් පිටුව'}
          </button>
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto text-center px-8 space-y-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-3xl text-[#F59E0B] text-[10px] font-black uppercase tracking-[0.6em] shadow-2xl mx-auto">
              <Sparkles size={14} className="animate-pulse" />
              {language === 'EN' ? 'THE ARCHIVAL REGISTRY' : 'පැරණි නාමාවලිය'}
            </div>
            <h2 className="text-4xl md:text-7xl lg:text-[8rem] font-heritage font-bold text-white tracking-tighter leading-[0.85] uppercase drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
              LOCATE <br/><span className="text-stone-400 italic">WONDERS.</span>
            </h2>
          </div>

          {/* CINEMATIC SEARCH BAR */}
          <div className="w-full max-w-3xl mx-auto relative group z-[110]" ref={searchWrapperRef}>
            <div className="absolute -inset-4 bg-gradient-to-r from-[#F59E0B]/20 to-orange-500/20 rounded-[3rem] blur-3xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-700" />
            <div className={`relative flex items-center bg-black/40 backdrop-blur-[40px] border rounded-full transition-all duration-700 overflow-hidden ${isFocused ? 'border-[#F59E0B] shadow-[0_30px_80px_-15px_rgba(245,158,11,0.4)]' : 'border-white/20 shadow-2xl'}`}>
              <div className="pl-8 text-[#F59E0B]">
                {isSearching ? <Loader2 size={24} className="animate-spin" /> : <Search size={24} />}
              </div>
              <input 
                type="text" 
                placeholder={language === 'EN' ? "Search the registry..." : "නාමාවලිය සොයන්න..."}
                value={search}
                onFocus={() => { setIsFocused(true); if (search.trim()) setShowResultsDropdown(true); }}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-6 py-8 md:py-10 text-xl md:text-3xl bg-transparent text-white font-light focus:outline-none placeholder:text-white/20 tracking-tight"
              />
              {search && (
                <button onClick={() => setSearch('')} className="pr-8 text-white/40 hover:text-[#F59E0B] transition-all hover:scale-110">
                  <X size={24} />
                </button>
              )}
            </div>

            {/* EXPANSIVE SEARCH RESULTS DROPDOWN - Overlapping the filter bar */}
            {showResultsDropdown && searchMatches.length > 0 && (
              <div className="absolute top-[calc(100%+0.5rem)] md:top-[calc(100%+1rem)] left-0 right-0 bg-white rounded-[1.5rem] md:rounded-[2.5rem] shadow-[0_60px_180px_rgba(0,0,0,0.5)] border border-gray-100 overflow-hidden animate-in slide-in-from-top-6 duration-700 z-[120]">
                {searchMatches.map((dest) => (
                  <button
                    key={dest.id}
                    onClick={() => {
                      onSelectDestination(dest);
                      setShowResultsDropdown(false);
                    }}
                    className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors text-left"
                  >
                    <img
                      src={dest.image}
                      alt={dest.name[language]}
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                    <div>
                      <p className="font-bold text-sm text-gray-900">{dest.name[language]}</p>
                      <p className="text-xs text-gray-500">{dest.location}</p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* STICKY CATEGORY BAR */}
      <div className="sticky top-20 md:top-24 z-50 py-6 md:py-10 bg-white/90 backdrop-blur-3xl border-y border-stone-100">
        <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="relative w-full lg:w-auto">
            <div className="flex items-center gap-4 overflow-x-auto no-scrollbar pb-2 lg:pb-0">
              {categories.map(cat => (
                <button 
                  key={cat.id} 
                  onClick={() => setCategoryFilter(cat.id)} 
                  className={`flex items-center gap-3 px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all border shrink-0 ${
                    categoryFilter === cat.id 
                      ? 'bg-black text-white border-transparent shadow-2xl scale-105' 
                      : 'bg-white text-stone-400 border-stone-100 hover:border-stone-300'
                  }`}
                >
                  <cat.icon size={14} className={categoryFilter === cat.id ? 'text-[#F59E0B]' : 'opacity-40'} />
                  {language === 'EN' ? cat.EN : cat.SI}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-4 w-full lg:w-auto">
            <div className="relative flex-grow lg:w-64">
              <select 
                value={locationFilter} 
                onChange={(e) => setLocationFilter(e.target.value)} 
                className="appearance-none w-full pl-8 pr-12 py-4 bg-white border border-stone-100 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-stone-600 outline-none focus:border-[#F59E0B] cursor-pointer"
              >
                <option value="all">{UI_STRINGS.allRegions[language]}</option>
                {locations.filter(l => l !== 'all').map(loc => <option key={loc} value={loc}>{loc}</option>)}
              </select>
              <ChevronDown size={14} className="absolute right-6 top-1/2 -translate-y-1/2 text-[#F59E0B] pointer-events-none" />
            </div>
            {(categoryFilter !== 'all' || locationFilter !== 'all' || search) && (
              <button onClick={resetFilters} className="p-4 bg-stone-50 text-stone-400 rounded-full hover:bg-black hover:text-white transition-all">
                <RotateCcw size={18} />
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {filteredDestinations.length > 0 ? filteredDestinations.map((dest, idx) => (
            <div 
              key={dest.id} 
              onClick={() => onSelectDestination(dest)}
              className="group relative h-[500px] md:h-[650px] bg-white rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-700 cursor-pointer border border-stone-100"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <img 
                src={dest.image} 
                alt={dest.name[language]} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[5000ms] group-hover:scale-110" 
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
              
              <div className="absolute top-8 left-8">
                 <div className="px-6 py-2 bg-white/10 backdrop-blur-xl rounded-full text-[10px] font-black tracking-[0.2em] text-white border border-white/20 uppercase">
                    {dest.category}
                 </div>
              </div>

              {/* Editorial Number */}
              <div className="absolute top-8 right-8 mix-blend-difference opacity-20">
                <span className="text-4xl font-heritage font-bold text-white tracking-tighter">
                  {idx < 9 ? `0${idx + 1}` : idx + 1}
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-12 flex flex-col justify-end transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                 <div className="flex items-center gap-3 text-white/60 mb-4">
                    <MapPin size={16} className="text-[#F59E0B]" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em]">{dest.location}</span>
                 </div>
                 <h3 className="text-2xl md:text-4xl font-heritage font-bold text-white mb-4 tracking-tighter leading-tight uppercase">{dest.name[language]}</h3>
                 
                 <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-700 ease-in-out">
                   <div className="overflow-hidden">
                     <p className="text-sm md:text-base text-white/60 font-light italic leading-relaxed mb-6">
                        {dest.shortStory[language]}
                     </p>
                   </div>
                 </div>

                 <div className="pt-4">
                   <div className="inline-flex items-center gap-4 text-white font-black text-[9px] uppercase tracking-[0.4em] group/btn">
                      <span>Explore Node</span>
                      <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-[#F59E0B] group-hover/btn:border-transparent transition-all duration-500">
                        <ArrowRight size={16} className="transition-transform duration-500 group-hover/btn:translate-x-1" />
                      </div>
                   </div>
                 </div>
              </div>
            </div>
          )) : (
            <div className="col-span-full py-24 md:py-48 text-center space-y-8 md:space-y-12 bg-white rounded-[3rem] border border-gray-100 shadow-sm">
               <div className="w-24 h-24 md:w-32 md:h-32 bg-stone-50 rounded-full flex items-center justify-center mx-auto text-stone-200 shadow-inner">
                  <Search size={48} className="md:w-16 md:h-16 animate-pulse" />
               </div>
               <div className="space-y-4">
                 <h3 className="text-2xl md:text-4xl font-heritage font-bold text-stone-800 uppercase tracking-tighter">
                   {language === 'EN' ? 'No Registry Matches' : 'ගැලපෙන දත්ත කිසිවක් නැත'}
                 </h3>
                 <p className="max-w-md mx-auto text-stone-400 italic text-sm md:text-base px-4">
                   {language === 'EN' 
                     ? "We couldn't find any destinations matching your current filters. Try resetting your search parameters."
                     : "ඔබේ පෙරහන් වලට ගැලපෙන ගමනාන්ත කිසිවක් අපට හමු නොවීය. කරුණාකර ඔබගේ සෙවුම් පරාමිතීන් නැවත සකසන්න."}
                 </p>
               </div>
               <button 
                 onClick={resetFilters} 
                 className="px-8 py-4 md:px-12 md:py-5 bg-[#0a0a0a] text-white rounded-full font-black text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.5em] shadow-2xl hover:scale-105 transition-transform flex items-center gap-2 mx-auto"
               >
                 <RotateCcw size={14} />
                 {language === 'EN' ? 'Reset Sync' : 'නැවත සකසන්න'}
               </button>
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
        @keyframes border-glow {
          0%, 100% { box-shadow: inset 0 0 0 1px rgba(14, 165, 233, 0.2); }
          50% { box-shadow: inset 0 0 0 3px rgba(14, 165, 233, 0.5); }
        }
        .slow-glow-card { animation: border-glow 4s infinite ease-in-out; }
      `}} />
    </section>
  );
};

export default Destinations;
