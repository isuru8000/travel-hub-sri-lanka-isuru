
import React from 'react';
import { Language, HeritageMusic as HeritageMusicType } from '../types.ts';
import { HERITAGE_MUSIC_DATA } from '../constants.tsx';
// Fix: Added ArrowLeft import for the back button
import { Music as MusicIcon, History, MapPin, Star, Quote, ArrowLeft } from 'lucide-react';

interface HeritageMusicProps {
  language: Language;
  // Fix: Added missing onBack prop definition to resolve error in App.tsx
  onBack: () => void;
}

const MusicCard: React.FC<{ music: HeritageMusicType; language: Language }> = ({ music, language }) => (
  <div 
    className="bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 flex flex-col group hover:-translate-y-4 transition-all duration-500"
  >
    <div className="relative h-64 overflow-hidden">
      <img 
        src={music.image} 
        alt={music.name[language]} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-lg flex items-center gap-2">
        <MapPin size={10} className="text-[#0EA5E9]" />
        <span className="text-[9px] font-bold text-[#262626] uppercase tracking-widest">{music.origin[language]}</span>
      </div>
    </div>

    <div className="p-8 md:p-10 flex-grow space-y-6 flex flex-col">
      <div className="space-y-1">
        <h3 className="text-xl md:text-2xl font-heritage font-bold text-[#262626] group-hover:insta-text-gradient transition-all">
          {music.name[language]}
        </h3>
        <div className="flex items-center gap-2 text-[10px] font-bold text-[#0EA5E9] uppercase tracking-[0.2em]">
          <Star size={12} fill="currentColor" />
          {language === 'EN' ? "Traditional Instrument" : "පාරම්පරික සංගීත භාණ්ඩය"}
        </div>
      </div>

      <p className="text-sm md:text-base text-gray-500 leading-relaxed font-light line-clamp-3">
        {music.description[language]}
      </p>

      <div className="pt-6 border-t border-gray-100 mt-auto space-y-4">
        <div className="flex items-start gap-3 bg-[#fafafa] p-4 rounded-2xl border border-gray-100">
          <History size={16} className="text-[#0EA5E9] mt-1 shrink-0" />
          <div>
            <span className="block text-[9px] font-bold uppercase text-gray-400 tracking-widest mb-1">
              {language === 'EN' ? 'Significance' : 'වැදගත්කම'}
            </span>
            <p className="text-xs text-[#262626] italic leading-tight line-clamp-2">
              {music.significance[language]}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const HeritageMusic: React.FC<HeritageMusicProps> = ({ language, onBack }) => {
  const instruments = HERITAGE_MUSIC_DATA;
  const heroMusicBg = "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1920&auto=format&fit=crop";

  return (
    <section className="min-h-screen bg-[#fafafa] pb-32">
      {/* Music Header */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-fixed bg-center opacity-60 transition-transform duration-10000 hover:scale-110" 
          style={{ backgroundImage: `url('${heroMusicBg}')` }}
        />
        <div className="absolute inset-0 insta-gradient opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        
        {/* Fix: Added Back Button for consistency with other archive views and to utilize the onBack prop */}
        <div className="absolute top-10 left-10 z-[70]">
          <button onClick={onBack} className="flex items-center gap-4 px-8 py-4 bg-white/80 backdrop-blur-xl border border-gray-200 text-[#0a0a0a] rounded-full font-black text-[10px] uppercase tracking-[0.4em] hover:bg-white transition-all shadow-xl group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> 
            {language === 'EN' ? 'Home' : 'මුල් පිටුව'}
          </button>
        </div>

        <div className="relative text-center space-y-4 px-4">
          <div className="w-20 h-20 story-ring rounded-full mx-auto p-1 mb-6 animate-pulse">
            <div className="bg-white w-full h-full rounded-full flex items-center justify-center">
              <MusicIcon size={32} className="text-[#0EA5E9]" />
            </div>
          </div>
          <h2 className="text-5xl md:text-7xl font-heritage font-bold text-white drop-shadow-2xl">
            {language === 'EN' ? "Rhythms of Lanka" : "ලංකා රිද්මය"}
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto text-lg md:text-xl font-light drop-shadow-lg italic">
            {language === 'EN' 
              ? "Exploring the heartbeat of an ancient nation through its traditional drums and sacred acoustic instruments." 
              : "අපගේ දේශයේ හදගැස්ම පාරම්පරික බෙර වාදනය සහ පූජනීය සංගීත භාණ්ඩ රිද්මයන් ඔස්සේ ගවේෂණය කරන්න."}
          </p>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-8 -mt-20 relative z-10 space-y-32">
        <div className="space-y-12">
          <div className="flex items-center gap-6">
            <h3 className="text-2xl md:text-3xl font-heritage font-bold text-[#262626] bg-white px-8 py-3 rounded-full shadow-lg border border-gray-100 uppercase tracking-tighter">
              {language === 'EN' ? "Sacred Instruments" : "පූජනීය සංගීත භාණ්ඩ"}
            </h3>
            <div className="flex-grow h-px bg-gradient-to-r from-gray-200 to-transparent" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10 pt-8">
            {instruments.map((music) => (
              <MusicCard key={music.id} music={music} language={language} />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-48 px-6 text-center space-y-8">
        <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#0EA5E9] to-transparent mx-auto" />
        <p className="text-2xl md:text-3xl font-heritage font-medium text-gray-600 italic">
          {language === 'EN' 
            ? "\"The rhythms of our ancestors are the echoes of their sweat, their faith, and their undying love for this soil.\""
            : "\"අපේ මුතුන් මිත්තන්ගේ රිද්මයන් යනු ඔවුන්ගේ දහඩිය, ඔවුන්ගේ ඇහිල්ල සහ මේ පස කෙරෙහි ඔවුන් තුළ තිබූ නොමියෙන ආදරයේ හඬයි.\""}
        </p>
      </div>
    </section>
  );
};

export default HeritageMusic;
