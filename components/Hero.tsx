
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Language, User } from '../types.ts';
import { Box, Orbit, Layers, ShieldCheck, Activity, ChevronRight, Sparkles, MapPin, Compass } from 'lucide-react';
import { UI_STRINGS } from '../constants.tsx';

interface HeroProps {
  language: Language;
  setView: (view: any) => void;
  user: User | null;
}

const Hero: React.FC<HeroProps> = ({ language, setView, user }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollPos, setScrollPos] = useState(0);
  const [mobileImageIndex, setMobileImageIndex] = useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1920&q=80"
  ];

  const mobileHeroImages = [
    "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=800&q=80"
  ];

  const stats = [
    { label: language === 'EN' ? 'Destinations' : 'ගමනාන්ත', value: '100+', icon: MapPin },
    { label: language === 'EN' ? 'Experiences' : 'අත්දැකීම්', value: '50+', icon: Sparkles },
    { label: language === 'EN' ? 'Support' : 'සහාය', value: '24/7', icon: ShieldCheck },
  ];

  const marqueeItems = language === 'EN' 
    ? ["SIGIRIYA", "ELLA", "GALLE", "KANDY", "MIRISSA", "NUWARA ELIYA", "YALA", "ANURADHAPURA"]
    : ["සීගිරිය", "ඇල්ල", "ගාල්ල", "මහනුවර", "මිරිස්ස", "නුවරඑළිය", "යාල", "අනුරාධපුරය"];

  useEffect(() => {
    const mobileInterval = setInterval(() => {
      setMobileImageIndex((prevIndex) => (prevIndex + 1) % mobileHeroImages.length);
    }, 6000);

    return () => clearInterval(mobileInterval);
  }, []);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    let rafId: number;
    const handleMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setMousePos({
          x: (e.clientX / window.innerWidth - 0.5),
          y: (e.clientY / window.innerHeight - 0.5)
        });
      });
    };
    
    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setScrollPos(window.scrollY);
      });
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const mainTitleEN = "SRI LANKA";
  const mainTitleSI = "ශ්‍රී ලංකාව";

  return (
    <div className="relative h-[110vh] flex items-center justify-center overflow-hidden bg-[#050505]" style={{ perspective: '2000px' }}>
      
      {/* Background Layer with Parallax and Atmospheric Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 transition-transform duration-[1200ms] ease-out"
          style={{ 
            transform: `scale(${1.1 + scrollPos / 5000}) translate3d(${mousePos.x * 40}px, ${mousePos.y * 40}px, 0)`,
            willChange: 'transform'
          }}
        >
          {/* Mobile Background Slideshow */}
          <div className="md:hidden absolute inset-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={mobileImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="absolute inset-0 bg-cover bg-center brightness-[0.7] saturate-[1.2]"
                style={{ backgroundImage: `url('${mobileHeroImages[mobileImageIndex]}')` }}
              />
            </AnimatePresence>
          </div>

          {/* Desktop Background */}
          <div className="hidden md:block absolute inset-0 bg-cover bg-center brightness-[0.6] saturate-[1.1]"
               style={{ backgroundImage: `url('${heroImages[0]}')` }} />
          
          {/* Atmospheric Cinematic Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(245,158,11,0.15)_0%,transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_80%,rgba(234,88,12,0.1)_0%,transparent_50%)]" />
          
          {/* Subtle Noise Texture */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
      </div>

      {/* Top Marquee */}
      <div className="absolute top-24 left-0 w-full overflow-hidden z-20 opacity-30 pointer-events-none">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-6">
              {marqueeItems.map((item, idx) => (
                <span key={idx} className="text-[10px] font-black uppercase tracking-[0.6em] text-white">
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-30 max-w-7xl w-full px-8 flex flex-col items-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 100, scale: 1.1 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6 mb-12"
        >
          <div className="flex flex-col items-center select-none">
            <motion.span 
              initial={{ opacity: 0, letterSpacing: "0.2em" }}
              animate={{ opacity: 0.9, letterSpacing: language === 'EN' ? "1em" : "0.6em" }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="block text-xs md:text-sm font-black text-[#F59E0B] mb-6 uppercase"
            >
              {language === 'EN' ? 'THE ULTIMATE JOURNEY TO' : 'සුවිශේෂී සංචාරය'}
            </motion.span>
            
            <div className="relative group">
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[8rem] font-heritage font-bold leading-none tracking-tighter uppercase text-white drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover:scale-[1.02] whitespace-nowrap">
                {language === 'EN' ? mainTitleEN : mainTitleSI}
              </h1>
              {/* Subtle floating glow behind title */}
              <div className="absolute inset-0 bg-white/5 blur-[120px] -z-10 animate-pulse" />
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col items-center mt-6"
          >
             <p className="font-sans text-sm md:text-xl font-light text-white/80 max-w-3xl leading-relaxed tracking-wide px-4 text-center italic">
               {language === 'EN' 
                 ? "Where ancient memories meet modern journeys. Discover the soul of the Indian Ocean's most precious pearl."
                 : "පැරණි මතකයන් සහ නූතන ගමන් මග හමුවන තැන. ඉන්දියන් සාගරයේ වටිනාම මුතු ඇටයේ ආත්මය සොයා ගන්න."}
             </p>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 w-full mb-20"
        >
          <button 
            onClick={() => setView('destinations')}
            className="w-full sm:w-auto group relative px-10 py-5 md:px-16 md:py-8 bg-white text-black rounded-full font-black text-[12px] md:text-[14px] uppercase tracking-[0.4em] transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_20px_60px_rgba(255,255,255,0.2)] overflow-hidden flex justify-center items-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1000ms]" />
            <span className="relative z-10 flex items-center gap-4">
              {UI_STRINGS.explore[language]}
              <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </span>
          </button>

          <button 
            onClick={() => setView('vr-trip')}
            className="w-full sm:w-auto group relative px-10 py-5 md:px-16 md:py-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full font-black text-[12px] md:text-[14px] text-white uppercase tracking-[0.4em] transition-all duration-700 hover:bg-white/10 hover:border-[#F59E0B] active:scale-95 shadow-2xl flex justify-center items-center"
          >
            <span className="relative z-10 flex items-center gap-4">
              {UI_STRINGS.vrTrip[language]}
              <Orbit size={20} className="text-[#F59E0B] animate-spin-slow" />
            </span>
          </button>
        </motion.div>

        {/* Glass Morphism Stats Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          className="grid grid-cols-3 gap-4 md:gap-12 p-4 md:p-8 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] md:rounded-[3rem] w-full max-w-4xl hover:bg-white/10 transition-colors duration-500"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center space-y-2 md:space-y-3 group/stat">
              <div className="p-2 md:p-3 bg-white/10 rounded-xl md:rounded-2xl group-hover/stat:bg-[#F59E0B]/20 transition-colors duration-300">
                <stat.icon size={16} className="text-[#F59E0B] md:w-5 md:h-5 group-hover/stat:scale-110 transition-transform" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl md:text-3xl font-heritage font-bold text-white leading-none">{stat.value}</span>
                <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-white/40">{stat.label}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
        <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/50 rotate-90 origin-left translate-x-1">Scroll</span>
      </motion.div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}} />
    </div>
  );
};

export default Hero;
