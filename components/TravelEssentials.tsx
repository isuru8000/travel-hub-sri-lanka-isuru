
import React from 'react';
import { Language } from '../types.ts';
import { TRAVEL_ESSENTIALS_DATA } from '../constants.tsx';
import * as Icons from 'lucide-react';
// Fix: Added ArrowLeft import for the back button
import { Backpack, ShieldCheck, PhoneCall, Sparkles, Activity, Shield, Zap, ArrowLeft } from 'lucide-react';

interface TravelEssentialsProps {
  language: Language;
  // Fix: Added missing onBack prop definition to resolve error in App.tsx
  onBack: () => void;
}

const TravelEssentials: React.FC<TravelEssentialsProps> = ({ language, onBack }) => {
  const heroImage = "https://images.unsplash.com/photo-1501534159995-5b8c9ad9479b?q=80&w=1920&auto=format&fit=crop";

  return (
    <section className="min-h-screen bg-[#fafafa] pb-32">
      {/* Enhanced Hero Section with High-Fidelity Imagery */}
      <div className="relative h-[65vh] flex items-center justify-center overflow-hidden bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-fixed bg-center opacity-60 transition-transform duration-[20000ms] animate-slow-zoom" 
          style={{ backgroundImage: `url('${heroImage}')` }}
        />
        <div className="absolute inset-0 insta-gradient opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#fafafa] via-black/40 to-transparent" />
        
        {/* Fix: Added Back Button for consistency with other archive views and to utilize the onBack prop */}
        <div className="absolute top-10 left-10 z-[70]">
          <button onClick={onBack} className="flex items-center gap-4 px-8 py-4 bg-white/80 backdrop-blur-xl border border-gray-200 text-[#0a0a0a] rounded-full font-black text-[10px] uppercase tracking-[0.4em] hover:bg-white transition-all shadow-xl group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> 
            {language === 'EN' ? 'Home' : 'මුල් පිටුව'}
          </button>
        </div>

        <div className="relative text-center space-y-8 px-6 max-w-4xl animate-in fade-in zoom-in duration-1000">
          <div className="flex flex-col items-center gap-6">
             <div className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.5em] shadow-2xl">
                <ShieldCheck size={16} className="text-[#0EA5E9] animate-pulse" />
                Strategic_Voyager_Manifest
             </div>
             <div className="h-12 w-[1px] bg-gradient-to-b from-[#0EA5E9] to-transparent"></div>
          </div>
          
          <h2 className="text-6xl md:text-[9rem] font-heritage font-bold text-white tracking-tighter uppercase leading-[0.8] drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
            TRAVEL <br/><span className="italic insta-text-gradient">GUIDE.</span>
          </h2>
          
          <p className="text-white/80 max-w-2xl mx-auto text-lg md:text-2xl font-light italic leading-relaxed drop-shadow-lg">
            {language === 'EN' 
              ? "Comprehensive logistical synchronization for your journey across the pearl of the Indian Ocean." 
              : "ඉන්දියන් සාගරයේ මුතු ඇටය හරහා ඔබේ සංචාරය සඳහා අවශ්‍ය සියලුම සැකසුම් තොරතුරු."}
          </p>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-8 -mt-16 relative z-10 space-y-16">
        {/* Updated grid spacing to 4 columns on XL screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10 pt-8">
          {TRAVEL_ESSENTIALS_DATA.map((item, idx) => {
            // @ts-ignore - Dynamic lookup for icons
            const IconComponent = Icons[item.icon] || Backpack;
            return (
              <div 
                key={item.id}
                className="bg-white p-8 md:p-10 rounded-[3.5rem] shadow-xl border border-gray-100 space-y-8 group hover:-translate-y-2 transition-all duration-700 relative overflow-hidden flex flex-col"
              >
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gray-50 rounded-bl-[2.5rem] -mr-4 -mt-4 transition-transform duration-700 group-hover:scale-110 pointer-events-none opacity-40" />
                
                <div className="flex items-center gap-5 relative z-10">
                  <div className="w-16 h-16 story-ring rounded-[1.5rem] p-0.5 flex items-center justify-center transition-transform group-hover:rotate-6 shadow-2xl">
                    <div className="bg-white w-full h-full rounded-[1.3rem] flex items-center justify-center text-[#0EA5E9]">
                      <IconComponent size={28} strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-[8px] font-black text-gray-300 uppercase tracking-[0.4em]">Node_0{idx + 1}</p>
                    <h3 className="text-xl md:text-2xl font-heritage font-bold text-[#262626] group-hover:insta-text-gradient transition-all leading-tight">
                      {item.title[language]}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-500 text-sm md:text-base leading-relaxed font-light italic border-l-2 border-gray-50 pl-5 flex-grow line-clamp-3">
                  "{item.description[language]}"
                </p>

                <div className="space-y-3 pt-6 border-t border-gray-50">
                  <div className="flex items-center gap-2">
                    <Sparkles size={12} className="text-[#0EA5E9]" />
                    <span className="text-[8px] font-black uppercase text-gray-400 tracking-[0.3em]">Protocol_Insights</span>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {item.tips.map((tip, tIdx) => (
                      <div key={tIdx} className="flex gap-3 items-start bg-[#fafafa] p-4 rounded-xl border border-gray-50 transition-colors group-hover:bg-white group-hover:border-[#0EA5E9]/10">
                        <div className="w-6 h-6 rounded-lg bg-white border border-gray-100 flex items-center justify-center text-[#0EA5E9] shadow-sm font-black text-[9px] shrink-0">
                          {tIdx + 1}
                        </div>
                        <p className="text-xs text-gray-700 font-medium italic pt-0.5 leading-relaxed line-clamp-2">{tip[language]}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Emergency Response Hub */}
        <div className="bg-white p-12 md:p-24 rounded-[5rem] border-2 border-gray-100 text-center space-y-16 relative overflow-hidden group shadow-2xl shadow-blue-500/5">
          <div className="absolute inset-0 pattern-overlay opacity-5 group-hover:opacity-10 transition-opacity" />
          
          <div className="space-y-8 relative z-10">
            <div className="w-20 h-20 bg-red-50 rounded-[1.5rem] flex items-center justify-center mx-auto text-red-500 shadow-inner group-hover:scale-110 transition-transform duration-700 animate-pulse">
              <PhoneCall size={40} />
            </div>
            <div className="space-y-4">
              <h4 className="text-4xl md:text-6xl font-heritage font-bold text-[#262626] uppercase tracking-tighter">
                Emergency <span className="text-red-500">Node.</span>
              </h4>
              <p className="text-gray-400 text-lg font-light italic">"Immediate signal synchronization with island safety bureaus."</p>
            </div>
            <div className="w-24 h-1 bg-red-500/20 rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {[
              { label: 'Tourist Police', num: '1912' },
              { label: 'Island Emergency', num: '119' },
              { label: 'Suwa Seriya Med', num: '1990' }
            ].map((emerg, i) => (
              <div key={i} className="group/item space-y-4 p-10 bg-gray-50 rounded-[3rem] transition-all hover:bg-white hover:shadow-2xl hover:-translate-y-1">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.5em] transition-colors group-hover/item:text-red-500">{emerg.label}</p>
                <p className="text-5xl md:text-7xl font-heritage font-bold text-[#0a0a0a] tracking-tighter">{emerg.num}</p>
                <div className="flex justify-center gap-1 opacity-20 group-hover/item:opacity-100 transition-opacity">
                   <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" style={{ animationDelay: '0ms' }} />
                   <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" style={{ animationDelay: '200ms' }} />
                   <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" style={{ animationDelay: '400ms' }} />
                </div>
              </div>
            ))}
          </div>

          <div className="pt-10 flex flex-wrap items-center justify-center gap-12 opacity-30">
            <div className="flex items-center gap-3">
               <Shield size={18} className="text-green-500" />
               <span className="text-[10px] font-black uppercase tracking-[0.8em]">Registry_Secure_Active</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
            <div className="flex items-center gap-3">
               <Activity size={18} className="text-blue-500" />
               <span className="text-[10px] font-black uppercase tracking-[0.4em]">Transmission_Stable</span>
            </div>
          </div>
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
        .shadow-3xl {
          box-shadow: 0 0 50px rgba(225,48,108,0.2);
        }
      `}} />
    </section>
  );
};

export default TravelEssentials;
