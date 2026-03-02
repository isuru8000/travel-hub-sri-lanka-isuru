
import React, { useState, useMemo } from 'react';
import { Language, Festival } from '../types.ts';
import { FESTIVALS_DATA } from '../constants.tsx';
// Fix: Added ArrowLeft import for the back button
import { Calendar, Sparkles, Info, Star, Landmark, LayoutGrid, Waves, Palette, Sprout, Search, ArrowLeft } from 'lucide-react';

interface FestivalsProps {
  language: Language;
  // Fix: Added missing onBack prop definition to resolve error in App.tsx
  onBack: () => void;
}

const Festivals: React.FC<FestivalsProps> = ({ language, onBack }) => {
  const [activeCategory, setActiveCategory] = useState<Festival['category'] | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const heroFestBg = "https://plus.unsplash.com/premium_photo-1681426344925-60ea7a7c9295?q=80&w=1920&auto=format&fit=crop";

  const categories = [
    { id: 'all', icon: <LayoutGrid size={18} />, EN: 'All Festivals', SI: 'සියල්ල' },
    { id: 'religious', icon: <Landmark size={18} />, EN: 'Religious', SI: 'ආගමික' },
    { id: 'cultural', icon: <Palette size={18} />, EN: 'Cultural', SI: 'සංස්කෘතික' },
    { id: 'harvest', icon: <Sprout size={18} />, EN: 'Harvest', SI: 'අස්වනු' },
    { id: 'art', icon: <Palette size={18} />, EN: 'Art & Modern', SI: 'කලා' },
    { id: 'coastal', icon: <Waves size={18} />, EN: 'Coastal', SI: 'වෙරළබඩ' },
  ];

  const filteredFestivals = useMemo(() => {
    let base = activeCategory === 'all' 
      ? FESTIVALS_DATA 
      : FESTIVALS_DATA.filter(fest => fest.category === activeCategory);
    
    if (searchQuery.trim()) {
      base = base.filter(f => 
        f.name.EN.toLowerCase().includes(searchQuery.toLowerCase()) || 
        f.name.SI.includes(searchQuery)
      );
    }
    return base;
  }, [activeCategory, searchQuery]);

  return (
    <section className="min-h-screen bg-white pb-32">
      {/* Cinematic Header */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-fixed bg-center opacity-60 transition-transform duration-[20000ms] animate-slow-zoom" 
          style={{ backgroundImage: `url('${heroFestBg}')` }}
        />
        <div className="absolute inset-0 insta-gradient opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-black/40 to-transparent" />
        
        {/* Fix: Added Back Button for consistency with other archive views and to utilize the onBack prop */}
        <div className="absolute top-10 left-10 z-[70]">
          <button onClick={onBack} className="flex items-center gap-4 px-8 py-4 bg-white/80 backdrop-blur-xl border border-gray-200 text-[#0a0a0a] rounded-full font-black text-[10px] uppercase tracking-[0.4em] hover:bg-white transition-all shadow-xl group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> 
            {language === 'EN' ? 'Home' : 'මුල් පිටුව'}
          </button>
        </div>

        <div className="relative text-center space-y-8 px-4 animate-in fade-in zoom-in duration-1000">
          <div className="flex flex-col items-center gap-6">
             <div className="w-24 h-24 story-ring rounded-[2.5rem] p-1 animate-pulse">
                <div className="bg-white w-full h-full rounded-[2.3rem] flex items-center justify-center">
                  <Sparkles size={40} className="text-[#E1306C]" />
                </div>
             </div>
             <div className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.5em] shadow-2xl">
                CULTURAL_SPIRIT_REGISTRY
             </div>
          </div>
          
          <h2 className="text-6xl md:text-[11rem] font-heritage font-bold text-white tracking-tighter uppercase leading-[0.8] drop-shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
            SACRED <br/><span className="italic insta-text-gradient">FESTIVALS.</span>
          </h2>
          <p className="text-white/80 max-w-3xl mx-auto text-xl md:text-3xl font-light italic drop-shadow-lg leading-relaxed">
            {language === 'EN' 
              ? "Join the 2000-year cycle of faith, harvest, and history across the island." 
              : "දිවයින පුරා පවත්වන ඇදහිලි, අස්වනු සහ ඉතිහාසයේ වසර දෙදහසක සැමරුම් සමඟ එක්වන්න."}
          </p>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-8 -mt-24 relative z-10 space-y-24">
        
        {/* EYE-CATCHING TAB NAVIGATION */}
        <div className="flex flex-col items-center gap-12">
          <div className="bg-[#0a0a0a]/95 backdrop-blur-2xl border border-white/10 p-2 md:p-3 rounded-[3.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.4)] flex flex-wrap justify-center gap-2 md:gap-4 relative">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`flex items-center gap-3 px-8 py-5 rounded-[2.5rem] text-[11px] font-black uppercase tracking-widest transition-all duration-700 relative overflow-hidden group/btn ${
                  activeCategory === cat.id 
                    ? 'text-white' 
                    : 'text-white/40 hover:text-white hover:bg-white/5'
                }`}
              >
                {activeCategory === cat.id && (
                  <div className="absolute inset-0 insta-gradient opacity-100 animate-in fade-in zoom-in-95 duration-500" />
                )}
                
                <span className="relative z-10">{cat.icon}</span>
                <span className="relative z-10">{language === 'EN' ? cat.EN : cat.SI}</span>
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full max-w-2xl group">
             <div className="absolute -inset-1 bg-gradient-to-r from-[#E1306C]/20 to-blue-500/20 rounded-full blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity" />
             <div className="relative flex items-center bg-white border border-gray-100 rounded-full shadow-xl px-10 py-2">
                <Search size={20} className="text-gray-400 group-focus-within:text-[#E1306C] transition-colors" />
                <input 
                   type="text" 
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                   placeholder={language === 'EN' ? "Search for a festival or event..." : "උත්සවයක් සොයන්න..."}
                   className="w-full bg-transparent border-none outline-none px-6 py-4 text-base font-bold text-[#0a0a0a] placeholder:text-gray-300"
                />
             </div>
          </div>
        </div>

        {/* Curated Festivals Grid - Updated to 4 columns on XL screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10 pt-8">
          {filteredFestivals.map((item, idx) => (
            <div 
              key={item.id}
              className="bg-white rounded-[4rem] overflow-hidden shadow-2xl border border-gray-100 flex flex-col group hover:-translate-y-4 transition-all duration-1000 cubic-bezier(0.23, 1, 0.32, 1) animate-in slide-in-from-bottom-8"
              style={{ animationDelay: `${idx * 40}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name[language]} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[6000ms]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                
                <div className="absolute top-4 left-4">
                   <div className="bg-white/95 backdrop-blur-md px-3 py-1 rounded-full shadow-2xl flex items-center gap-2 border border-white/20">
                      <Calendar size={12} className="text-[#E1306C]" />
                      <span className="text-[8px] font-black text-[#0a0a0a] uppercase tracking-widest">{item.date[language]}</span>
                   </div>
                </div>

                <div className="absolute top-4 right-4">
                   <div className="bg-black/80 backdrop-blur-md px-3 py-1 rounded-full shadow-2xl border border-white/10">
                      <span className="text-[7px] font-black text-white/60 uppercase tracking-widest">{item.category}</span>
                   </div>
                </div>
                
                <div className="absolute bottom-4 left-6">
                   <span className="text-[9px] font-black text-white/80 uppercase tracking-[0.4em] drop-shadow-md">Archive_Node #F{idx+1}</span>
                </div>
              </div>

              <div className="p-8 md:p-10 space-y-6 flex flex-col flex-grow">
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-heritage font-bold text-[#0a0a0a] group-hover:insta-text-gradient transition-all leading-tight uppercase tracking-tight">
                    {item.name[language]}
                  </h3>
                  <div className="w-10 h-1 bg-gray-100 rounded-full group-hover:w-16 group-hover:bg-[#E1306C] transition-all duration-500" />
                </div>

                <p className="text-sm md:text-base text-gray-500 leading-relaxed font-light italic border-l-2 border-gray-50 pl-4 line-clamp-3">
                  "{item.description[language]}"
                </p>

                <div className="mt-auto pt-6 border-t border-gray-50">
                  <div className="bg-[#fafafa] p-4 rounded-[1.5rem] border border-gray-100 relative overflow-hidden group-hover:bg-white group-hover:shadow-inner transition-colors">
                    <Sparkles size={24} className="absolute -bottom-1 -right-1 text-[#E1306C] opacity-[0.05] group-hover:opacity-[0.1] transition-opacity" />
                    <div className="flex items-center gap-2 mb-2">
                       <Info size={12} className="text-[#E1306C]" />
                       <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Significance</p>
                    </div>
                    <p className="text-xs text-gray-700 font-medium italic leading-relaxed line-clamp-2">
                      {item.significance[language]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty Search State */}
        {filteredFestivals.length === 0 && (
          <div className="py-40 text-center space-y-8">
             <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto text-gray-200">
                <Search size={48} />
             </div>
             <div className="space-y-2">
                <h3 className="text-4xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tighter">No Events Found</h3>
                <p className="text-gray-400 italic">Adjust your search or category filter to synchronize.</p>
             </div>
             <button onClick={() => {setSearchQuery(''); setActiveCategory('all');}} className="px-12 py-5 bg-[#0a0a0a] text-white rounded-full font-black text-xs uppercase tracking-widest">Reset Registry</button>
          </div>
        )}

        {/* Quote Section */}
        <div className="max-w-4xl mx-auto pt-40 text-center space-y-12">
          <div className="flex justify-center gap-8 opacity-20">
             <Landmark size={40} />
             <Sparkles size={40} />
             <Calendar size={40} />
          </div>
          <p className="text-2xl md:text-5xl font-heritage font-medium text-gray-400 italic leading-tight">
            {language === 'EN' 
              ? "\"To celebrate our festivals is to participate in a rhythm that has pulsed for two millennia across this emerald island.\""
              : "\"අපගේ උත්සව සැමරීම යනු මෙම හරිත දිවයින පුරා වසර දෙදහසක් පුරා පැතිර ගිය රිද්මයකට දායක වීමයි.\""}
          </p>
          <div className="w-32 h-1.5 insta-gradient mx-auto rounded-full shadow-3xl animate-pulse" />
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 30s linear infinite;
        }
      `}} />
    </section>
  );
};

export default Festivals;
