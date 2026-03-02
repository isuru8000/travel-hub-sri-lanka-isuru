
import React, { useState, useRef } from 'react';
import { Language, Destination } from '../types.ts';
import { DESTINATIONS, UI_STRINGS } from '../constants.tsx';
import { MapPin, Sparkles, Compass, ArrowRight, ShieldCheck, Box } from 'lucide-react';

const HighlightCard: React.FC<{ dest: Destination; index: number; language: Language; onClick: () => void }> = ({ dest, index, language, onClick }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 1024) return;
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 20, y: y * -20 });
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setIsHovered(false); }}
      onClick={onClick}
      className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} transition-all duration-1000 ${!isHovered && window.innerWidth > 1024 ? 'blur-[0.5px] grayscale-[0.2]' : 'blur-0 grayscale-0 lg:scale-[1.02]'}`}
      style={{ perspective: '2000px' }}
    >
      <div 
        className="w-full lg:w-3/5 group relative cursor-pointer transition-transform duration-300 ease-out"
        style={{ 
          transformStyle: 'preserve-3d',
          transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-black/5 rounded-[2.5rem] md:rounded-[4.5rem] p-1 shadow-2xl" />
        
        <div className="relative p-1.5 md:p-2 bg-white rounded-[2.3rem] md:rounded-[4.2rem] shadow-[0_40px_80px_rgba(0,0,0,0.1)] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1500ms]" />
          
          <div className="relative aspect-[16/10] rounded-[2rem] md:rounded-[3.8rem] overflow-hidden bg-gray-100 border border-white/60">
            <img 
              src={dest.image} 
              alt={dest.name[language]} 
              className="w-full h-full object-cover transition-transform duration-[6000ms] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 md:group-hover:opacity-30 transition-opacity" />
            
            <div className="absolute top-6 right-6 md:top-10 md:right-10 w-16 h-16 md:w-28 md:h-28 bg-white/10 backdrop-blur-3xl rounded-[1.2rem] md:rounded-[2.2rem] border border-white/20 flex items-center justify-center shadow-2xl transform translateZ(40px) md:translateZ(80px) rotate-12">
              <div className="text-white font-heritage font-bold text-3xl md:text-6xl">0{index + 1}</div>
            </div>

            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 flex items-center gap-4 transform translateZ(30px) md:translateZ(60px)">
               <div className="px-5 py-2.5 md:px-8 md:py-4 bg-[#0EA5E9] text-white rounded-xl md:rounded-2xl text-[8px] md:text-[10px] font-black shadow-2xl tracking-[0.3em] md:tracking-[0.5em] uppercase border border-white/30">
                  SCAN STATUS: READY
               </div>
            </div>
          </div>
        </div>

        <div 
          className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12 w-20 h-20 md:w-36 md:h-36 bg-white rounded-full shadow-[0_20px_60px_rgba(0,0,0,0.15)] flex items-center justify-center border border-gray-100 transition-all duration-700 group-hover:scale-110 transform translateZ(60px) md:translateZ(120px) hidden sm:flex"
        >
           <div className="relative">
              <MapPin size={24} className="md:w-12 md:h-12 text-[#0EA5E9]" />
              <div className="absolute inset-0 bg-[#0EA5E9]/20 blur-lg rounded-full animate-ping" />
           </div>
        </div>
      </div>

      <div className="w-full lg:w-2/5 space-y-6 md:space-y-12" style={{ transform: 'translateZ(40px)' }}>
        <div className="space-y-4 md:space-y-6">
          <div className="flex items-center gap-3 md:gap-4 text-[#0EA5E9] font-black text-[9px] md:text-[11px] tracking-[0.3em] md:tracking-[0.7em] uppercase">
            <Box size={14} className="md:w-5 md:h-5 animate-spin-slow" />
            {dest.location}
          </div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-heritage font-bold text-[#0a0a0a] leading-[1.1] md:leading-[1] tracking-tighter drop-shadow-sm max-w-lg break-words">
            {dest.name[language]}
          </h3>
          <p className="text-lg md:text-2xl lg:text-3xl text-gray-400 font-light italic leading-tight border-l-[4px] md:border-l-[10px] border-[#0EA5E9]/20 pl-4 md:pl-12 py-1 md:py-3">
            {dest.shortStory[language]}
          </p>
        </div>

        <div className="space-y-6 md:space-y-10 flex flex-col gap-6">
          <p className="text-sm md:text-2xl text-gray-500 leading-relaxed font-light italic opacity-80 w-full">
            {dest.history[language].slice(0, window.innerWidth < 768 ? 100 : 250)}...
          </p>

          <button 
            onClick={onClick}
            className="group relative flex items-center justify-between gap-4 md:gap-8 px-6 py-4 md:px-16 md:py-8 bg-[#0a0a0a] text-white rounded-[1.5rem] md:rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.2)] transition-all duration-700 hover:scale-105 active:scale-95 overflow-hidden w-full sm:w-auto self-start"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#0EA5E9] to-[#3B82F6] opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10 text-[10px] md:text-[12px] font-black uppercase tracking-[0.2em] md:tracking-[0.6em]">
              {UI_STRINGS.exploreNode[language]}
            </span>
            <div className="relative z-10 w-8 h-8 md:w-14 md:h-14 rounded-[0.75rem] md:rounded-[1.5rem] bg-white/10 backdrop-blur-md flex items-center justify-center transition-transform group-hover:rotate-12 group-hover:scale-110">
              <ArrowRight size={16} className="md:w-7 md:h-7" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

interface PopularHighlightsProps {
  language: Language;
  onSelectDestination: (dest: Destination) => void;
  setView: (view: any) => void;
}

const PopularHighlights: React.FC<PopularHighlightsProps> = ({ language, onSelectDestination, setView }) => {
  const popularIds = ['sigiriya', 'kandy-temple', 'ella', 'galle-fort', 'yala'];
  const highlights = DESTINATIONS.filter(d => popularIds.includes(d.id));

  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden" style={{ perspective: '3000px' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24 space-y-6 md:space-y-10 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-24 md:-translate-y-32 opacity-[0.02] text-black scale-[1.2] md:scale-[2]">
             <Compass size={250} className="md:w-[400px] md:h-[400px] animate-spin-slow" />
          </div>
          <div className="inline-flex items-center gap-3 md:gap-5 px-6 md:px-10 py-2.5 md:py-4 rounded-full bg-black/5 border border-black/10 text-[#0a0a0a] text-[9px] md:text-[11px] font-black uppercase tracking-[0.4em] md:tracking-[0.7em] mb-4 md:mb-6 shadow-sm">
            <Sparkles size={14} className="md:w-5 md:h-5 text-[#0EA5E9]" />
            {language === 'EN' ? 'The Best of Lanka' : 'ශ්‍රී ලංකාවේ විශිෂ්ටතම ස්ථාන'}
          </div>
          <h2 className="text-3xl md:text-7xl font-heritage font-bold text-[#0a0a0a] tracking-tighter leading-tight md:leading-[0.9] drop-shadow-2xl">
            {language === 'EN' ? <>Top <br/><span className="italic insta-text-gradient">Highlights.</span></> : <>ප්‍රධාන <br/><span className="italic insta-text-gradient">ආකර්ෂණයන්.</span></>}
          </h2>
          <div className="w-24 md:w-40 h-1 md:h-2 insta-gradient mx-auto rounded-full shadow-3xl mt-6 md:mt-10" />
        </div>

        <div className="space-y-24 md:space-y-48">
          {highlights.map((dest, index) => (
            <HighlightCard 
              key={dest.id} 
              dest={dest} 
              index={index} 
              language={language} 
              onClick={() => onSelectDestination(dest)} 
            />
          ))}
        </div>
        
        <div className="mt-24 md:mt-48 relative" style={{ perspective: '1500px' }}>
           <div className="absolute inset-0 bg-black/[0.04] rounded-[3rem] md:rounded-[8rem] blur-[80px] md:blur-[150px] opacity-70" />
           <div className="relative p-12 md:p-32 bg-white rounded-[3rem] md:rounded-[8rem] text-center space-y-12 md:space-y-16 shadow-[0_50px_100px_rgba(0,0,0,0.1)] border border-gray-50 overflow-hidden group transform lg:hover:-translate-y-8 transition-all duration-1000">
              <div className="absolute inset-0 pattern-overlay opacity-10 group-hover:opacity-30 transition-opacity" />
              <div className="space-y-8 md:space-y-10 relative z-10">
                <div className="w-16 h-16 md:w-28 md:h-28 bg-[#0EA5E9]/10 rounded-[1.2rem] md:rounded-[2.5rem] flex items-center justify-center mx-auto mb-6 md:mb-10 animate-pulse shadow-inner border border-[#0EA5E9]/20">
                  <ShieldCheck size={32} className="md:w-14 md:h-14 text-[#0EA5E9]" />
                </div>
                <h3 className="text-3xl md:text-7xl font-heritage font-bold text-[#0a0a0a] leading-[1.1] md:leading-[0.9] tracking-tighter">
                  {language === 'EN' ? <>Beyond <br/><span className="insta-text-gradient italic">The Map.</span></> : <>සිතියමෙන් <br/><span className="insta-text-gradient italic">ඔබ්බට.</span></>}
                </h3>
                <p className="text-gray-400 max-w-4xl mx-auto text-lg md:text-3xl font-light italic leading-relaxed md:leading-tight">
                  {language === 'EN' 
                    ? 'See all the amazing and holy places on the island.' 
                    : 'පූජනීය පුදුමයන්ගේ සම්පූර්ණ නාමාවලිය වෙත පිවිසෙන්න.'}
                </p>
              </div>
              <button 
                onClick={() => setView('destinations')}
                className="relative z-10 px-10 py-6 md:px-24 md:py-10 bg-[#0a0a0a] text-white rounded-full hover:scale-110 transition-all font-black shadow-[0_30px_80px_rgba(14,165,233,0.5)] text-xs md:text-lg uppercase tracking-[0.4em] md:tracking-[0.7em] group border border-white/10"
              >
                <span className="flex items-center gap-6 md:gap-8">
                  {UI_STRINGS.exploreDestinations[language]}
                  <Compass size={24} className="md:w-8 md:h-8 group-hover:rotate-180 transition-transform duration-1000" />
                </span>
              </button>
           </div>
        </div>
      </div>
    </section>
  );
};

export default PopularHighlights;
