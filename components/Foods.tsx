
import React, { useState, useMemo } from 'react';
import { Language, Food } from '../types.ts';
import { FOODS_DATA } from '../constants.tsx';
// Fix: Added ArrowLeft import for the back button
import { Flame, UtensilsCrossed, Leaf, Sparkles, History, Compass, Utensils, Wheat, Candy, Waves, Crown, LayoutGrid, Search, ArrowLeft } from 'lucide-react';

interface FoodsProps {
  language: Language;
  // Fix: Added missing onBack prop definition to resolve error in App.tsx
  onBack: () => void;
}

const Foods: React.FC<FoodsProps> = ({ language, onBack }) => {
  const [activeCategory, setActiveCategory] = useState<Food['category'] | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const heroImage = "https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=1920&q=80";

  const categories = [
    { id: 'all', icon: <LayoutGrid size={18} />, EN: 'All Dishes', SI: 'සියල්ල' },
    { id: 'street', icon: <Utensils size={18} />, EN: 'Street Food', SI: 'වීදි ආහාර' },
    { id: 'village', icon: <Wheat size={18} />, EN: 'Village Classics', SI: 'ගමේ ආහාර' },
    { id: 'sweets', icon: <Candy size={18} />, EN: 'Sweets & Treats', SI: 'රසකැවිලි' },
    { id: 'coastal', icon: <Waves size={18} />, EN: 'Coastal Flavors', SI: 'මුහුදු ආහාර' },
    { id: 'royal', icon: <Crown size={18} />, EN: 'Royal Legacy', SI: 'රාජකීය උරුමය' },
  ];

  const filteredFoods = useMemo(() => {
    let base = activeCategory === 'all' 
      ? FOODS_DATA 
      : FOODS_DATA.filter(food => food.category === activeCategory);
    
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
      {/* Food Heritage Header */}
      <div className="relative h-[75vh] flex items-center justify-center overflow-hidden bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-fixed bg-center opacity-70 transition-transform duration-[20000ms] animate-slow-zoom" 
          style={{ backgroundImage: `url('${heroImage}')` }}
        />
        <div className="absolute inset-0 story-ring opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-black/40 to-transparent" />
        
        {/* Fix: Added Back Button for consistency with other archive views and to utilize the onBack prop */}
        <div className="absolute top-10 left-10 z-[70]">
          <button onClick={onBack} className="flex items-center gap-4 px-8 py-4 bg-white/80 backdrop-blur-xl border border-gray-200 text-[#0a0a0a] rounded-full font-black text-[10px] uppercase tracking-[0.4em] hover:bg-white transition-all shadow-xl group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> 
            {language === 'EN' ? 'Home' : 'මුල් පිටුව'}
          </button>
        </div>

        <div className="relative text-center space-y-8 px-6 max-w-5xl animate-in fade-in zoom-in duration-1000">
          <div className="flex flex-col items-center gap-6">
             <div className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-3xl text-white text-[10px] font-black uppercase tracking-[0.5em] shadow-2xl">
                <History size={16} className="text-[#0EA5E9] animate-pulse" />
                Ancestral_Flavor_Registry
             </div>
             <div className="h-12 w-[1px] bg-gradient-to-b from-[#0EA5E9] to-transparent"></div>
          </div>
          
          <h2 className="text-6xl md:text-[11rem] font-heritage font-bold text-white tracking-tighter uppercase leading-[0.8] drop-shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
            CULTURAL <br/><span className="italic insta-text-gradient">CUISINE.</span>
          </h2>
          
          <p className="text-white/80 max-w-2xl mx-auto text-lg md:text-2xl font-light italic leading-relaxed drop-shadow-lg">
            {language === 'EN' 
              ? "A culinary pilgrimage through 40 authentic masterpieces of an island civilization." 
              : "දිවයිනේ අසමසම ආහාර වර්ග 40ක් හරහා යන රසවත් වන්දනාවක්."}
          </p>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-8 -mt-24 relative z-10 space-y-24">
        
        {/* EYE-CATCHING TAB NAVIGATION */}
        <div className="flex flex-col items-center gap-12">
          <div className="bg-[#0a0a0a]/90 backdrop-blur-2xl border border-white/10 p-2 md:p-3 rounded-[3.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.4)] flex flex-wrap justify-center gap-2 md:gap-4 relative group">
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
                {/* Active Highlight Background */}
                {activeCategory === cat.id && (
                  <div className="absolute inset-0 insta-gradient opacity-100 animate-in fade-in zoom-in-95 duration-500" />
                )}
                
                <span className="relative z-10">{cat.icon}</span>
                <span className="relative z-10">{language === 'EN' ? cat.EN : cat.SI}</span>
              </button>
            ))}
          </div>

          {/* Taste Archive Search */}
          <div className="relative w-full max-w-2xl group">
             <div className="absolute -inset-1 bg-gradient-to-r from-[#0EA5E9]/20 to-blue-500/20 rounded-full blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity" />
             <div className="relative flex items-center bg-white border border-gray-100 rounded-full shadow-xl px-10 py-2">
                <Search size={20} className="text-gray-400 group-focus-within:text-[#0EA5E9] transition-colors" />
                <input 
                   type="text" 
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                   placeholder={language === 'EN' ? "Search for a recipe or ingredient..." : "ආහාර වට්ටෝරු සොයන්න..."}
                   className="w-full bg-transparent border-none outline-none px-6 py-4 text-base font-bold text-[#0a0a0a] placeholder:text-gray-300"
                />
             </div>
          </div>
        </div>

        {/* Curated Food Grid - Updated to 4 columns on XL screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10 pt-8">
          {filteredFoods.map((food, idx) => {
            return (
              <div 
                key={food.id}
                className="bg-white rounded-[4rem] overflow-hidden shadow-2xl border border-gray-100 flex flex-col group hover:-translate-y-4 transition-all duration-1000 cubic-bezier(0.23, 1, 0.32, 1) animate-in slide-in-from-bottom-8"
                style={{ animationDelay: `${idx * 40}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={food.image} 
                    alt={food.name[language]} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[6000ms]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                  
                  <div className="absolute top-4 left-4">
                     <div className="bg-white/95 backdrop-blur-md px-3 py-1 rounded-full shadow-2xl flex items-center gap-2 border border-white/20">
                        <span className="text-[8px] font-black text-[#0a0a0a] uppercase tracking-widest">{food.category} registry</span>
                     </div>
                  </div>

                  <div className="absolute bottom-4 left-6">
                     <span className="text-[9px] font-black text-white/80 uppercase tracking-[0.4em] drop-shadow-md">Archive_Node #F{idx+1}</span>
                  </div>
                </div>

                <div className="p-8 md:p-10 flex-grow space-y-6 flex flex-col">
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-heritage font-bold text-[#0a0a0a] group-hover:insta-text-gradient transition-all leading-tight">
                      {food.name[language]}
                    </h3>
                    <div className="flex items-center gap-2 text-[9px] font-black text-[#0EA5E9] uppercase tracking-[0.3em]">
                      <UtensilsCrossed size={12} />
                      {food.tasteProfile[language]}
                    </div>
                  </div>

                  <p className="text-sm md:text-base text-gray-500 leading-relaxed font-light italic border-l-2 border-gray-50 pl-4 line-clamp-3">
                    "{food.description[language]}"
                  </p>

                  <div className="pt-6 border-t border-gray-50 mt-auto">
                    <div className="flex items-center gap-2 mb-4">
                      <Leaf size={14} className="text-green-500" />
                      <span className="text-[9px] font-black uppercase text-gray-400 tracking-widest">Heritage Components</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {food.ingredients.map((ing, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1.5 bg-gray-50 text-[#0a0a0a] text-[8px] md:text-[9px] font-black rounded-lg border border-gray-100 uppercase tracking-widest group-hover:bg-white group-hover:border-[#0EA5E9]/20 transition-all"
                        >
                          {ing[language]}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty Search State */}
        {filteredFoods.length === 0 && (
          <div className="py-40 text-center space-y-8">
             <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto text-gray-200">
                <Search size={48} />
             </div>
             <div className="space-y-2">
                <h3 className="text-4xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tighter">No Flavors Found</h3>
                <p className="text-gray-400 italic">Adjust your search or category filter to synchronize.</p>
             </div>
             <button onClick={() => {setSearchQuery(''); setActiveCategory('all');}} className="px-12 py-5 bg-[#0a0a0a] text-white rounded-full font-black text-xs uppercase tracking-widest">Reset Sync</button>
          </div>
        )}

        {/* Taste Wisdom Section */}
        <div className="max-w-4xl mx-auto pt-40 text-center space-y-12">
          <div className="flex justify-center gap-8 opacity-20">
             <Compass size={40} />
             <Sparkles size={40} />
             <UtensilsCrossed size={40} />
          </div>
          <p className="text-2xl md:text-5xl font-heritage font-medium text-gray-400 italic leading-tight">
            {language === 'EN' 
              ? "\"To taste our food is to hear the stories of our farmers, our soil, and the ancient currents of the Indian Ocean.\""
              : "\"අපගේ ආහාර රස විඳීම යනු අපේ ගොවියන්ගේ, අපේ පසෙහි සහ ඉන්දියන් සාගරයේ පැරණි රළවල කතාවට සවන් දීමයි.\""}
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

export default Foods;
