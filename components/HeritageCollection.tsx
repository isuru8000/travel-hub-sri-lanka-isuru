
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Language } from '../types';
import { Compass, Sparkles, ArrowRight, ShieldCheck, Gem, Box } from 'lucide-react';

const UNESCO_SITES = [
  {
    id: 'anuradhapura',
    name: { EN: 'Anuradhapura', SI: 'අනුරාධපුරය' },
    tag: { EN: 'Sacred City', SI: 'පූජනීය නගරය' },
    description: { 
      EN: 'An ancient capital of Sri Lanka, famous for its well-preserved ruins of ancient Lankan civilization.',
      SI: 'ශ්‍රී ලංකාවේ පැරණි අගනුවරක් වන මෙය, පුරාණ ලාංකීය ශිෂ්ටාචාරයේ නටබුන් සඳහා ප්‍රසිද්ධය.'
    },
    image: 'https://i.pinimg.com/1200x/e6/c4/67/e6c467b97e6ff3c8344d25e2b107b50e.jpg',
    rating: '5.0'
  },
  {
    id: 'polonnaruwa',
    name: { EN: 'Polonnaruwa', SI: 'පොළොන්නරුව' },
    tag: { EN: 'Medieval Capital', SI: 'මධ්‍යකාලීන අගනුවර' },
    description: {
      EN: 'The second capital of Sri Lanka, known for its magnificent ruins and irrigation systems.',
      SI: 'ශ්‍රී ලංකාවේ දෙවන අගනුවර වන මෙය, එහි අතිවිශිෂ්ට නටබුන් සහ වාරි පද්ධති සඳහා ප්‍රසිද්ධය.'
    },
    image: 'https://i.pinimg.com/1200x/3e/16/a6/3e16a69f5a7a1aa1aa918ad765964902.jpg',
    rating: '4.9'
  },
  {
    id: 'sigiriya',
    name: { EN: 'Sigiriya', SI: 'සීගිරිය' },
    tag: { EN: 'Rock Fortress', SI: 'සිංහගිරි බලකොටුව' },
    description: {
      EN: 'An ancient rock fortress and palace ruin, famous for its frescoes and mirror wall.',
      SI: 'පුරාණ ගල් බලකොටුවක් සහ මාලිගා නටබුන් සහිත මෙය, එහි බිතුසිතුවම් සහ කැඩපත් පවුර සඳහා ප්‍රසිද්ධය.'
    },
    image: 'https://i.pinimg.com/1200x/3a/e7/48/3ae7487f4e95b92ce2d3c10c5b1038e0.jpg',
    rating: '5.0'
  },
  {
    id: 'dambulla',
    name: { EN: 'Dambulla Cave Temple', SI: 'දඹුලු ලෙන් විහාරය' },
    tag: { EN: 'Golden Temple', SI: 'ස්වර්ණමය විහාරය' },
    description: {
      EN: 'The largest and best-preserved cave temple complex in Sri Lanka.',
      SI: 'ශ්‍රී ලංකාවේ විශාලතම සහ හොඳින්ම සංරක්ෂණය කර ඇති ලෙන් විහාර සංකීර්ණයයි.'
    },
    image: 'https://i.pinimg.com/1200x/ca/96/d8/ca96d8e009f8ad50128891ce45b59c9d.jpg',
    rating: '4.8'
  },
  {
    id: 'kandy',
    name: { EN: 'Kandy', SI: 'මහනුවර' },
    tag: { EN: 'Sacred City', SI: 'පූජනීය නගරය' },
    description: {
      EN: 'The last capital of the ancient kings, home to the Temple of the Sacred Tooth Relic.',
      SI: 'පුරාණ රජවරුන්ගේ අවසාන අගනුවර වන මෙය, ශ්‍රී දළදා මාළිගාව පිහිටි ස්ථානයයි.'
    },
    image: 'https://i.pinimg.com/1200x/4a/a2/a6/4aa2a645fc690426e433979ba11e2c9a.jpg',
    rating: '4.9'
  },
  {
    id: 'galle',
    name: { EN: 'Galle Old Town', SI: 'ගාල්ල පැරණි නගරය' },
    tag: { EN: 'Fortified City', SI: 'බලකොටු නගරය' },
    description: {
      EN: 'A historic city known for its colonial architecture and the Galle Fort.',
      SI: 'යටත් විජිත වාස්තු විද්‍යාව සහ ගාලු කොටුව සඳහා ප්‍රසිද්ධ ඓතිහාසික නගරයකි.'
    },
    image: 'https://i.pinimg.com/736x/a7/fe/33/a7fe33c99a33981b2acb8c0c6007a55e.jpg',
    rating: '4.8'
  },
  {
    id: 'sinharaja',
    name: { EN: 'Sinharaja Forest', SI: 'සිංහරාජ වනාන්තරය' },
    tag: { EN: 'Rainforest Reserve', SI: 'වැසි වනාන්තරය' },
    description: {
      EN: 'A biodiversity hotspot and the last viable primary tropical rainforest in Sri Lanka.',
      SI: 'ජෛව විවිධත්ව කලාපයක් සහ ශ්‍රී ලංකාවේ ඉතිරිව ඇති අවසාන ප්‍රාථමික නිවර්තන වැසි වනාන්තරයයි.'
    },
    image: 'https://i.pinimg.com/1200x/85/a0/62/85a06272c31ffa951d64c4fa7437ee63.jpg',
    rating: '5.0'
  },
  {
    id: 'central-highlands',
    name: { EN: 'Central Highlands', SI: 'මධ්‍යම කඳුකරය' },
    tag: { EN: 'Natural Heritage', SI: 'ස්වභාවික උරුමය' },
    description: {
      EN: 'A mountainous region known for its unique flora, fauna, and stunning landscapes.',
      SI: 'අද්විතීය ශාක, සතුන් සහ විශ්මයජනක භූ දර්ශන සඳහා ප්‍රසිද්ධ කඳුකර ප්‍රදේශයකි.'
    },
    image: 'https://i.pinimg.com/1200x/4c/ab/08/4cab085a74f9ee47cb9c4ce107d63c3c.jpg',
    rating: '5.0'
  }
];

const HeritageCollection: React.FC<{ language: Language }> = ({ language }) => {
  const [selectedSite, setSelectedSite] = React.useState<string | null>(null);

  return (
    <section className="relative py-20 md:py-32 bg-cover bg-center bg-no-repeat overflow-hidden" style={{ perspective: '3000px', backgroundImage: 'url("https://i.pinimg.com/1200x/65/b7/5b/65b75bdcfb90c1bf62c09a11092a3771.jpg")' }}>
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
      <div className="max-w-[1600px] mx-auto px-6 md:px-8 relative z-10">
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
            <div 
              key={site.id} 
              className="group relative cursor-pointer" 
              style={{ transformStyle: 'preserve-3d' }}
              onClick={() => setSelectedSite(selectedSite === site.id ? null : site.id)}
            >
              <div 
                className={`relative aspect-[4/5] md:aspect-[4/6] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.1)] transition-all duration-1000 lg:group-hover:-translate-y-8 lg:group-hover:rotate-y-12 group-hover:shadow-[0_60px_140px_rgba(0,0,0,0.2)] ${selectedSite === site.id ? 'ring-4 ring-[#E1306C]' : ''}`}
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
              
              <AnimatePresence>
                {selectedSite === site.id && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-end justify-center md:items-center p-0 md:p-4 bg-black/60 backdrop-blur-sm" 
                    onClick={() => setSelectedSite(null)}
                  >
                    <motion.div 
                      initial={{ y: '100%' }}
                      animate={{ y: 0 }}
                      exit={{ y: '100%' }}
                      className="bg-white p-8 md:p-12 rounded-t-[3rem] md:rounded-[2.5rem] shadow-2xl max-w-2xl w-full border-t md:border border-gray-100 relative"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button 
                        className="absolute top-6 right-6 text-gray-400 hover:text-gray-600"
                        onClick={() => setSelectedSite(null)}
                      >
                        ✕
                      </button>
                      <img src={site.image} alt={site.name[language]} className="w-full h-64 object-cover rounded-2xl mb-6" referrerPolicy="no-referrer" />
                      <h3 className="text-3xl font-heritage font-bold text-[#0a0a0a] mb-6">{site.name[language]}</h3>
                      <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                        {site.description[language]}
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[70%] h-6 md:h-10 bg-black/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeritageCollection;
