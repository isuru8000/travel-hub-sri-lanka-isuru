
import React from 'react';
import { Language } from '../types';
import { Compass, Sparkles, ArrowRight, ShieldCheck, Gem, Box } from 'lucide-react';

const UNESCO_SITES = [
  {
    id: 'anuradhapura',
    name: { EN: 'Anuradhapura', SI: 'අනුරාධපුරය' },
    tag: { EN: 'Sacred City', SI: 'පූජනීය නගරය' },
    image: 'https://i.pinimg.com/1200x/e6/c4/67/e6c467b97e6ff3c8344d25e2b107b50e.jpg',
    rating: '5.0'
  },
  {
    id: 'polonnaruwa',
    name: { EN: 'Polonnaruwa', SI: 'පොළොන්නරුව' },
    tag: { EN: 'Medieval Capital', SI: 'මධ්‍යකාලීන අගනුවර' },
    image: 'https://i.pinimg.com/1200x/3e/16/a6/3e16a69f5a7a1aa1aa918ad765964902.jpg',
    rating: '4.9'
  },
  {
    id: 'sigiriya',
    name: { EN: 'Sigiriya', SI: 'සීගිරිය' },
    tag: { EN: 'Rock Fortress', SI: 'සිංහගිරි බලකොටුව' },
    image: 'https://i.pinimg.com/1200x/3a/e7/48/3ae7487f4e95b92ce2d3c10c5b1038e0.jpg',
    rating: '5.0'
  },
  {
    id: 'dambulla',
    name: { EN: 'Dambulla Cave Temple', SI: 'දඹුලු ලෙන් විහාරය' },
    tag: { EN: 'Golden Temple', SI: 'ස්වර්ණමය විහාරය' },
    image: 'https://i.pinimg.com/1200x/ca/96/d8/ca96d8e009f8ad50128891ce45b59c9d.jpg',
    rating: '4.8'
  },
  {
    id: 'kandy',
    name: { EN: 'Kandy', SI: 'මහනුවර' },
    tag: { EN: 'Sacred City', SI: 'පූජනීය නගරය' },
    image: 'https://i.pinimg.com/1200x/2d/78/44/2d784405a26620573e34b99863484501.jpg',
    rating: '4.9'
  },
  {
    id: 'galle',
    name: { EN: 'Galle Old Town', SI: 'ගාල්ල පැරණි නගරය' },
    tag: { EN: 'Fortified City', SI: 'බලකොටු නගරය' },
    image: 'https://i.pinimg.com/1200x/8c/68/d3/8c68d38fe1b594fda91bcc42f6c43b97.jpg',
    rating: '4.8'
  },
  {
    id: 'sinharaja',
    name: { EN: 'Sinharaja Forest', SI: 'සිංහරාජ වනාන්තරය' },
    tag: { EN: 'Rainforest Reserve', SI: 'වැසි වනාන්තරය' },
    image: 'https://i.pinimg.com/1200x/85/a0/62/85a06272c31ffa951d64c4fa7437ee63.jpg',
    rating: '5.0'
  },
  {
    id: 'central-highlands',
    name: { EN: 'Central Highlands', SI: 'මධ්‍යම කඳුකරය' },
    tag: { EN: 'Natural Heritage', SI: 'ස්වභාවික උරුමය' },
    image: 'https://i.pinimg.com/1200x/a3/b4/c5/a3b4c5d6e7f8g9h0i1j2.jpg',
    rating: '5.0'
  }
];

const HeritageCollection: React.FC<{ language: Language }> = ({ language }) => {
  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden" style={{ perspective: '3000px' }}>
      <div className="max-w-[1600px] mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 md:gap-12 mb-16 md:mb-24 transform translateZ(50px) md:translateZ(100px)">
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center gap-3 md:gap-4 text-[#E1306C] font-black text-[10px] md:text-[12px] uppercase tracking-[0.4em] md:tracking-[0.6em]">
              <Gem size={14} className="md:w-5 md:h-5 animate-bounce" />
              {language === 'EN' ? 'UNESCO World Heritage' : 'යුනෙස්කෝ ලෝක උරුම'}
            </div>
            <h2 className="text-3xl md:text-7xl font-heritage font-bold text-[#0a0a0a] leading-tight md:leading-[0.8] tracking-tighter">
              Heritage <span className="italic insta-text-gradient">Sites.</span>
            </h2>
          </div>
          <p className="max-w-lg text-gray-400 font-light text-lg md:text-2xl italic leading-relaxed md:pb-4 border-l-4 border-gray-50 pl-6 md:pl-10">
            {language === 'EN' 
              ? "Timeless monuments and natural wonders recognized by the world." 
              : "ලෝකයේ පිළිගැනීමට ලක්වූ කාලානුරූපී ස්මාරක සහ ස්වභාවික ආශ්චර්යයන්."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12">
          {UNESCO_SITES.map((site, idx) => (
            <div key={site.id} className="group relative" style={{ transformStyle: 'preserve-3d' }}>
              <div 
                className="relative aspect-[4/5] md:aspect-[4/6] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.1)] transition-all duration-1000 lg:group-hover:-translate-y-8 lg:group-hover:rotate-y-12 group-hover:shadow-[0_60px_140px_rgba(0,0,0,0.2)]"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <img src={site.image} className="w-full h-full object-cover transition-transform duration-[4000ms] group-hover:scale-110" alt={site.name[language]} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
                
                <div className="absolute top-6 left-6 md:top-10 md:left-10 transform translateZ(30px) md:translateZ(40px)">
                  <div className="px-4 py-2 md:px-6 md:py-3 bg-white/10 backdrop-blur-xl rounded-xl md:rounded-2xl border border-white/20 text-white text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] flex items-center gap-2 md:gap-3">
                    <Sparkles size={10} className="md:w-3 md:h-3 text-yellow-400 animate-pulse" />
                    Site #0{idx + 1}
                  </div>
                </div>

                <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12 space-y-4 md:space-y-6 transform translateZ(40px) md:translateZ(60px)">
                  <div className="space-y-1 md:space-y-2">
                    <p className="text-[#E1306C] font-black text-[8px] md:text-[9px] uppercase tracking-[0.3em] md:tracking-[0.5em] drop-shadow-md">{site.tag[language]}</p>
                    <h3 className="text-2xl md:text-4xl font-heritage font-bold text-white leading-tight uppercase tracking-tighter">{site.name[language]}</h3>
                  </div>
                  <div className="pt-4 md:pt-6 flex items-center justify-between border-t border-white/10">
                    <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]" />
                        <span className="text-white/60 text-[8px] md:text-[10px] font-bold uppercase tracking-widest">UNESCO</span>
                    </div>
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#E1306C] transition-all duration-500 group-hover:scale-110 shadow-2xl">
                      <ArrowRight size={20} className="md:w-7 md:h-7" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[70%] h-6 md:h-10 bg-black/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeritageCollection;
