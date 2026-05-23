
import React, { useState, useRef } from 'react';
import { Language, Destination } from '../types';
import { DESTINATIONS, UI_STRINGS } from '../constants';
import { MapPin, Sparkles, Compass, ArrowRight, ShieldCheck, Box, Globe, MoveRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { getOptimizedImageUrl } from '../lib/utils';

const HighlightCard: React.FC<{ dest: Destination; index: number; language: Language; onClick: () => void }> = ({ dest, index, language, onClick }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 1024) return;
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 15, y: y * -15 });
  };

  return (
    <motion.div 
      ref={cardRef}
      initial={isMobile ? { opacity: 0 } : { opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: isMobile ? "-50px" : "-100px" }}
      transition={{ duration: isMobile ? 0.6 : 1, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setIsHovered(false); }}
      onClick={onClick}
      className={`flex flex-col lg:flex-row gap-12 lg:gap-32 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} group`}
    >
      {/* Image Section */}
      <div 
        className="w-full lg:w-1/2 relative cursor-pointer"
        style={{ 
          perspective: '2000px',
          transformStyle: 'preserve-3d',
          transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`
        }}
      >
        <div className="relative aspect-[4/5] md:aspect-[16/10] rounded-[2rem] md:rounded-[4rem] overflow-hidden bg-stone-200 shadow-[0_40px_100px_rgba(0,0,0,0.15)]">
          <img 
            src={getOptimizedImageUrl(dest.image, isMobile ? 600 : 1200)} 
            alt={dest.name[language]} 
            loading="lazy"
            decoding="async"
            className={`w-full h-full object-cover transition-transform ${isMobile ? 'duration-[2000ms]' : 'duration-[8000ms]'} group-hover:scale-110 saturate-[1.1]`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
          
          {/* Editorial Number Overlay */}
          <div className="absolute top-8 left-8 md:top-12 md:left-12 mix-blend-difference">
            <span className="text-6xl md:text-9xl font-heritage font-bold text-white/20 tracking-tighter">
              0{index + 1}
            </span>
          </div>

          {/* Location Tag */}
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full">
            <MapPin size={14} className="text-[#F59E0B]" />
            <span className="text-[10px] font-black uppercase tracking-widest text-white">{dest.location}</span>
          </div>
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 space-y-8 md:space-y-12">
        <div className="space-y-6">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            className="h-1 bg-[#F59E0B]"
          />
          <h3 className="text-4xl md:text-6xl lg:text-8xl font-heritage font-bold text-black leading-[0.9] tracking-tighter uppercase">
            {dest.name[language]}
          </h3>
          <p className="text-xl md:text-3xl text-stone-500 font-light italic leading-tight max-w-xl">
            {dest.shortStory[language]}
          </p>
        </div>

        <div className="space-y-10">
          <p className="text-sm md:text-xl text-stone-600 leading-relaxed font-light opacity-80 max-w-lg">
            {dest.history[language].slice(0, 200)}...
          </p>

          <button 
            onClick={onClick}
            className="group relative flex items-center gap-4 text-black font-black text-[10px] md:text-[11px] uppercase tracking-[0.4em] transition-all hover:gap-6"
          >
            <span className="relative">
              {UI_STRINGS.exploreNode[language]}
              <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-black/20 group-hover:bg-[#F59E0B] transition-colors" />
            </span>
            <MoveRight size={20} className="text-[#F59E0B] transition-transform group-hover:translate-x-2" />
          </button>
        </div>
      </div>
    </motion.div>
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
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  
  return (
    <section className="py-24 md:py-48 bg-stone-50 overflow-hidden relative mobile-section-optimize">
      {/* Vertical Rail Text */}
      <div className="hidden xl:block absolute left-12 top-1/2 -translate-y-1/2 h-full pointer-events-none">
        <div className="sticky top-1/2 flex flex-col items-center gap-12 opacity-10">
          <span className="writing-vertical-rl rotate-180 text-[10px] font-black uppercase tracking-[1em] text-black">
            EDITORIAL SELECTION
          </span>
          <div className="w-[1px] h-32 bg-black" />
          <span className="writing-vertical-rl rotate-180 text-[10px] font-black uppercase tracking-[1em] text-black">
            2026 EDITION
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8">
        {/* Editorial Header */}
        <div className="relative mb-32 md:mb-64">
          <div className="flex flex-col md:flex-row items-baseline gap-8 md:gap-16">
            <span className="text-8xl md:text-[16rem] font-heritage font-bold text-black/5 leading-none select-none">
              01
            </span>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-[#F59E0B] font-black text-[10px] uppercase tracking-[0.6em]">
                <Sparkles size={14} />
                {language === 'EN' ? 'THE SELECTION' : 'තේරීම'}
              </div>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-heritage font-bold text-black tracking-tighter leading-[0.85] uppercase">
                {language === 'EN' ? <>Popular <br/>Highlights.</> : <>ජනප්‍රිය <br/>ස්ථාන.</>}
              </h2>
            </div>
          </div>
          
          <div className="absolute top-0 right-0 hidden md:block max-w-xs text-right opacity-40">
            <p className="text-xs font-medium uppercase tracking-widest leading-loose">
              {language === 'EN' 
                ? "A selection of Sri Lanka's most popular and iconic landscapes and cultural heritage sites."
                : "ශ්‍රී ලංකාවේ වඩාත් ජනප්‍රිය සහ සුවිශේෂී භූ දර්ශන සහ සංස්කෘතික උරුමයන් පිළිබඳ එකතුවකි."}
            </p>
          </div>
        </div>

        {/* Highlights List */}
        <div className="space-y-32 md:space-y-64">
          {highlights.map((dest, index) => (
            <HighlightCard 
              key={`${dest.id}-${index}`} 
              dest={dest} 
              index={index} 
              language={language} 
              onClick={() => onSelectDestination(dest)} 
            />
          ))}
        </div>
        
        {/* Call to Action Section - Simplified on mobile */}
        <motion.div 
          initial={isMobile ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: isMobile ? 0.6 : 1 }}
          className="mt-48 md:mt-80 relative"
        >
           <div className="relative p-12 md:p-32 bg-black rounded-[3rem] md:rounded-[6rem] text-center space-y-12 md:space-y-20 overflow-hidden group">
              {/* Atmospheric Background */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,#F59E0B_0%,transparent_50%)]" />
                <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,#EA580C_0%,transparent_50%)]" />
              </div>

              <div className="relative z-10 space-y-10">
                <div className="inline-flex items-center gap-4 px-8 py-3 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.6em] backdrop-blur-xl">
                  <Globe size={16} className="text-[#F59E0B] animate-spin-slow" />
                  {language === 'EN' ? 'EXPLORE THE ISLAND' : 'දිවයින ගවේෂණය කරන්න'}
                </div>
                
                <h3 className="text-4xl md:text-8xl lg:text-9xl font-heritage font-bold text-white leading-[0.85] tracking-tighter uppercase">
                  {language === 'EN' ? <>Beyond <br/><span className="text-[#F59E0B]">The Map.</span></> : <>සිතියමෙන් <br/><span className="text-[#F59E0B]">ඔබ්බට.</span></>}
                </h3>
                
                <p className="text-white/60 max-w-3xl mx-auto text-lg md:text-3xl font-light italic leading-relaxed">
                  {language === 'EN' 
                    ? 'Embark on a journey through the sacred wonders and hidden gems of the pearl of the Indian Ocean.' 
                    : 'ඉන්දියන් සාගරයේ මුතු ඇටයේ පූජනීය පුදුමයන් සහ සැඟවුණු රහස් හරහා ගමනක් ආරම්භ කරන්න.'}
                </p>
              </div>

              <button 
                onClick={() => setView('destinations')}
                className="relative z-10 group px-12 py-6 md:px-24 md:py-10 bg-white text-black rounded-full hover:scale-105 transition-all duration-500 font-black text-[12px] md:text-[14px] uppercase tracking-[0.6em] flex items-center gap-8 mx-auto shadow-[0_30px_100px_rgba(255,255,255,0.1)]"
              >
                {UI_STRINGS.exploreDestinations[language]}
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-black text-white flex items-center justify-center group-hover:rotate-12 transition-transform">
                  <Compass size={24} />
                </div>
              </button>
           </div>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .writing-vertical-rl {
          writing-mode: vertical-rl;
        }
      `}} />
    </section>
  );
};

export default PopularHighlights;
