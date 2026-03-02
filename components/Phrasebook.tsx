
import React, { useState } from 'react';
import { Language, Phrase } from '../types.ts';
import { PHRASEBOOK_DATA } from '../constants.tsx';
// Fix: Added ArrowLeft import for the back button
import { MessageSquare, Volume2, Search, Heart, Utensils, AlertCircle, ShoppingBag, Globe, Sparkles, BookOpen, ArrowLeft } from 'lucide-react';

interface PhrasebookProps {
  language: Language;
  // Fix: Added missing onBack prop definition to resolve error in App.tsx
  onBack: () => void;
}

const Phrasebook: React.FC<PhrasebookProps> = ({ language, onBack }) => {
  const [filter, setFilter] = useState<string>('all');
  const [search, setSearch] = useState('');

  const heroImage = "https://plus.unsplash.com/premium_photo-1682310061171-61f65b741454?q=80&w=1920&auto=format&fit=crop";

  const filteredPhrases = PHRASEBOOK_DATA.filter(p => {
    const matchesFilter = filter === 'all' || p.category === filter;
    const matchesSearch = p.english.toLowerCase().includes(search.toLowerCase()) || 
                          p.sinhala.includes(search) || 
                          p.transliteration.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const categories = [
    { id: 'all', icon: <Globe size={14} />, label: { EN: "All", SI: "සියල්ල" } },
    { id: 'greeting', icon: <Heart size={14} />, label: { EN: "Greetings", SI: "ආචාර කිරීම්" } },
    { id: 'dining', icon: <Utensils size={14} />, label: { EN: "Dining", SI: "කෑම බීම" } },
    { id: 'shopping', icon: <ShoppingBag size={14} />, label: { EN: "Shopping", SI: "සාප්පු සවාරි" } },
    { id: 'emergency', icon: <AlertCircle size={14} />, label: { EN: "Emergency", SI: "හදිසි" } },
  ];

  return (
    <section className="min-h-screen bg-[#fafafa] pb-32">
      {/* Header with Requested Background Image */}
      <div className="relative h-[65vh] flex items-center justify-center overflow-hidden bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-fixed bg-center opacity-60 transition-transform duration-[20000ms] animate-slow-zoom" 
          style={{ backgroundImage: `url('${heroImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#fafafa] via-black/40 to-transparent" />
        <div className="absolute inset-0 pattern-overlay opacity-10" />
        
        {/* Fix: Added Back Button for consistency with other archive views and to utilize the onBack prop */}
        <div className="absolute top-10 left-10 z-[70]">
          <button onClick={onBack} className="flex items-center gap-4 px-8 py-4 bg-white/80 backdrop-blur-xl border border-gray-200 text-[#0a0a0a] rounded-full font-black text-[10px] uppercase tracking-[0.4em] hover:bg-white transition-all shadow-xl group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> 
            {language === 'EN' ? 'Home' : 'මුල් පිටුව'}
          </button>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10 px-6">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.5em] mb-4 shadow-2xl">
              <BookOpen size={16} className="text-[#0EA5E9] animate-pulse" />
              Linguistic_Archive_Node
            </div>
            <h2 className="text-5xl md:text-8xl font-heritage font-bold text-white tracking-tighter uppercase leading-[0.8] drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
              LOCAL <br/><span className="italic insta-text-gradient">GUIDE.</span>
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg md:text-2xl font-light italic leading-relaxed drop-shadow-lg">
              {language === 'EN' 
                ? "Connecting with the locals is the best part of travel. Learn the rhythmic heart of Sinhala to brighten your journey." 
                : "දේශීය ජනතාව සමඟ සන්නිවේදනය කිරීම සංචාරයේ හොඳම කොටසයි. ඔබේ ගමන අලංකාර කිරීමට මූලික සිංහල වචන කිහිපයක් ඉගෙන ගන්න."}
            </p>
          </div>

          <div className="max-w-2xl mx-auto relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#0EA5E9]/20 to-blue-500/20 rounded-[2.5rem] blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity" />
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#0EA5E9] transition-colors" size={24} />
            <input 
              type="text" 
              placeholder={language === 'EN' ? "Search for a phrase..." : "වචනයක් සොයන්න..."}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-16 pr-6 py-6 bg-white/95 backdrop-blur-md text-[#262626] rounded-[2.5rem] focus:outline-none border border-white shadow-2xl font-bold text-xl placeholder:text-gray-300 placeholder:italic"
            />
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-8 -mt-12 relative z-20 space-y-16">
        <div className="flex flex-wrap gap-4 justify-center bg-white/90 backdrop-blur-xl p-4 rounded-[3rem] shadow-xl border border-gray-100 w-fit mx-auto">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`flex items-center gap-3 px-8 py-3.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all border shadow-sm ${
                filter === cat.id 
                  ? 'bg-[#0a0a0a] text-white border-transparent scale-105 shadow-2xl' 
                  : 'bg-white text-gray-400 border-gray-100 hover:border-[#0EA5E9] hover:text-[#0a0a0a]'
              }`}
            >
              {cat.icon}
              {cat.label[language]}
            </button>
          ))}
        </div>

        {/* Updated grid spacing to 4 columns on XL screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10 pt-8">
          {filteredPhrases.map((p, idx) => (
            <div 
              key={p.id}
              className="bg-white p-10 rounded-[4rem] shadow-sm border border-gray-100 group hover:-translate-y-4 hover:shadow-[0_50px_100px_rgba(0,0,0,0.08)] transition-all duration-700 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0EA5E9]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex justify-between items-start mb-6">
                <span className="text-[8px] font-black text-gray-300 uppercase tracking-[0.4em] bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                  Node_Ref: #L0{idx + 1}
                </span>
                <button className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-300 group-hover:text-[#0EA5E9] group-hover:bg-white group-hover:shadow-lg transition-all active:scale-90">
                  <Volume2 size={20} />
                </button>
              </div>

              <div className="space-y-6">
                <div className="space-y-1">
                  <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">English_Primary</p>
                  <p className="text-xl md:text-2xl font-heritage font-bold text-[#262626]">{p.english}</p>
                </div>
                
                <div className="w-full h-px bg-gradient-to-r from-gray-100 via-gray-200 to-transparent"></div>

                <div className="space-y-1">
                  <p className="text-[9px] font-black text-[#0EA5E9] uppercase tracking-widest">Sinhala_Translation</p>
                  <p className="text-2xl md:text-3xl font-heritage font-bold text-[#0a0a0a] leading-tight drop-shadow-sm">{p.sinhala}</p>
                </div>

                <div className="pt-6 border-t border-gray-50">
                  <p className="text-[8px] font-black text-gray-300 uppercase tracking-widest mb-2">Neural_Phonetic</p>
                  <div className="bg-[#fafafa] p-4 rounded-2xl border border-gray-50 relative group-hover:bg-white transition-colors">
                    <Sparkles size={12} className="absolute top-3 right-3 text-[#0EA5E9] opacity-20" />
                    <p className="text-base md:text-lg font-medium text-gray-500 italic tracking-tight">"{p.transliteration}"</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPhrases.length === 0 && (
          <div className="text-center py-32 space-y-8 bg-white rounded-[5rem] border border-dashed border-gray-200">
             <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto text-gray-200 shadow-inner">
                <MessageSquare size={48} className="animate-pulse" />
             </div>
             <div className="space-y-2">
                <h3 className="text-3xl font-heritage font-bold text-gray-400 uppercase tracking-tighter">Vocabulary Node Missing</h3>
                <p className="text-gray-300 font-bold text-xs uppercase tracking-widest">The registry does not contain a match for your current query.</p>
             </div>
             <button onClick={() => { setSearch(''); setFilter('all'); }} className="px-10 py-4 bg-[#0a0a0a] text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em] hover:scale-110 transition-all">Clear SearchGrid</button>
          </div>
        )}
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

export default Phrasebook;
