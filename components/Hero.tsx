
import React, { useState, useEffect } from 'react';
import { Language, User } from '../types.ts';
import { Box, Orbit, Layers, ShieldCheck, Activity, ChevronRight, Sparkles } from 'lucide-react';
import { UI_STRINGS } from '../constants.tsx';

interface HeroProps {
  language: Language;
  setView: (view: any) => void;
  user: User | null;
}

const Hero: React.FC<HeroProps> = ({ language, setView, user }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollPos, setScrollPos] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "https://drive.google.com/thumbnail?id=1TugyxpPAbTUVoCzSZCoXTYKxUp41V53o&sz=s16000",
    "https://i.pinimg.com/1200x/3a/e7/48/3ae7487f4e95b92ce2d3c10c5b1038e0.jpg",
    "https://i.pinimg.com/1200x/c4/bd/4f/c4bd4fbf76c891efdf8a735d1337afaa.jpg",
    "https://i.pinimg.com/1200x/1e/8f/62/1e8f62ed06398a4e4c8649cbaa62563a.jpg",
    "https://i.pinimg.com/736x/cc/ae/b9/ccaeb9f1a649216bea87d317f10bd495.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Disable heavy event listeners on mobile for performance
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
    <div className="relative h-[110vh] flex items-center justify-center overflow-hidden bg-white" style={{ perspective: '2000px' }}>
      
      {/* Background Layer with Parallax and Enhancements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 transition-transform duration-[1200ms] ease-out"
          style={{ 
            transform: `scale(1.1 + ${scrollPos / 6000}) translate3d(${mousePos.x * 35}px, ${mousePos.y * 35}px, 0)`,
            willChange: 'transform'
          }}
        >
          {/* Mobile Static Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center md:hidden brightness-[0.8] saturate-[1.4]"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1586611292717-f828b167408c?auto=format&fit=crop&w=1920&q=80')` }}
          />

          {/* Desktop Static Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center hidden md:block brightness-[0.9] saturate-[1.1]"
            style={{ backgroundImage: `url('https://i.pinimg.com/736x/43/5b/70/435b70265e550d16d783fc8cd7fea532.jpg')` }}
          />
          
          {/* Multi-layered cinematic overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.1)_0%,transparent_80%)]" />
          
          {/* Noise Texture */}
          <div className="absolute inset-0 opacity-[0.05] pattern-overlay" />
        </div>
        
        {/* Floating Atmospheric Particles */}
        <div className="absolute inset-0 opacity-40">
           <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#F59E0B]/10 rounded-full blur-[180px] animate-pulse" />
           <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#EA580C]/5 rounded-full blur-[160px] animate-pulse" style={{ animationDelay: '3s' }} />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-30 max-w-7xl w-full px-8 flex flex-col items-center text-center">
        
        <div className="space-y-8 mb-12 animate-in fade-in zoom-in-95 duration-1000 delay-200">
          <h1 className="flex flex-col items-center select-none">
            <span className="block text-xl md:text-4xl font-light tracking-[0.4em] md:tracking-[0.8em] text-black mb-8 md:mb-12 uppercase font-heritage drop-shadow-2xl opacity-90">
              {language === 'EN' ? 'WELCOME TO' : 'ආයුබෝවන්'}
            </span>
            
            <div className="relative">
              <div 
                className="text-6xl sm:text-8xl md:text-9xl lg:text-[16rem] font-heritage font-bold leading-none tracking-tighter uppercase water-text-container"
              >
                {language === 'EN' ? (
                  <>
                    <span className="water-base">{mainTitleEN}</span>
                    <span className="water-wave animate-gradient-text-slow" data-text={mainTitleEN}>{mainTitleEN}</span>
                  </>
                ) : (
                  <>
                    <span className="water-base">{mainTitleSI}</span>
                    <span className="water-wave animate-gradient-text-slow" data-text={mainTitleSI}>{mainTitleSI}</span>
                  </>
                )}
              </div>
            </div>
          </h1>
          
          <div className="flex flex-col items-center mt-8 md:mt-12">
             <div className="w-24 md:w-48 h-1 bg-gradient-to-r from-transparent via-[#F59E0B] to-transparent rounded-full shadow-[0_0_40px_#F59E0B] mb-8 md:mb-12 opacity-80" />
             <p className="font-narrative text-sm md:text-2xl font-light text-black/60 max-w-4xl leading-relaxed tracking-[0.1em] md:tracking-[0.2em] px-4 text-center italic">
               {language === 'EN' 
                 ? "An immersive journey through the timeless wonders of the Pearl of the Indian Ocean."
                 : "ඉන්දියන් සාගරයේ මුතු ඇටයේ කාලාන්තරයක් පුරා සැඟවුණු අසිරිය සොයා යන ගමනක්."}
             </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500 w-full">
          <button 
            onClick={() => setView('destinations')}
            className="w-full sm:w-auto group relative px-10 py-6 md:px-20 md:py-10 bg-[#F59E0B] text-white rounded-full font-black text-[14px] md:text-[16px] uppercase tracking-[0.4em] md:tracking-[0.6em] transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_20px_80px_rgba(245,158,11,0.5)] overflow-hidden flex justify-center items-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1200ms]" />
            <span className="relative z-10 flex items-center gap-4 md:gap-8">
              {UI_STRINGS.explore[language]}
              <ChevronRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </span>
          </button>

          <button 
            onClick={() => setView('vr-trip')}
            className="w-full sm:w-auto group relative px-10 py-6 md:px-20 md:py-10 glass-card rounded-full font-black text-[14px] md:text-[16px] text-white uppercase tracking-[0.4em] md:tracking-[0.6em] transition-all duration-700 hover:bg-white/10 hover:border-[#F59E0B] active:scale-95 shadow-2xl flex justify-center items-center"
          >
            <span className="relative z-10 flex items-center gap-4 md:gap-8">
              {UI_STRINGS.vrTrip[language]}
              <Orbit size={24} className="text-[#F59E0B] animate-spin-slow" />
            </span>
          </button>
        </div>
      </div>

      {/* Futuristic Grid Floor Decoration - Updated to Amber */}
      <div className="absolute bottom-0 left-0 right-0 h-[400px] opacity-[0.1] pointer-events-none"
           style={{ 
             backgroundImage: `linear-gradient(#F59E0B 1.5px, transparent 1.5px), linear-gradient(90deg, #F59E0B 1.5px, transparent 1.5px)`, 
             backgroundSize: '100px 100px',
             transform: 'perspective(1200px) rotateX(65deg) scale(3)',
             maskImage: 'linear-gradient(to top, black, transparent 90%)'
           }} />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        /* Water Text Effects - Reflection and Text-Shadow Removed */
        .water-text-container {
          position: relative;
        }

        .water-base {
          color: rgba(255, 255, 255, 0.05);
          -webkit-text-stroke: 2px rgba(255, 255, 255, 0.3);
          text-shadow: 0 0 20px rgba(0,0,0,0.5);
          animation: border-light-flow 4s ease-in-out infinite;
        }

        @keyframes border-light-flow {
          0%, 100% {
            -webkit-text-stroke-color: rgba(255, 255, 255, 0.3);
            filter: drop-shadow(0 0 0px transparent);
          }
          50% {
            -webkit-text-stroke-color: #fff;
            filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.8));
          }
        }

        .water-wave {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          color: #FFFFFF;
          -webkit-text-stroke: 1px transparent;
          animation: liquid-sway 4s ease-in-out infinite;
          background: linear-gradient(180deg, #FFFFFF 0%, #E2E8F0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 10px rgba(255,255,255,0.3));
        }

        @keyframes liquid-sway {
          0%, 100% {
            clip-path: polygon(0% 45%, 16% 44%, 33% 50%, 54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%);
          }
          50% {
            clip-path: polygon(0% 60%, 15% 65%, 34% 66%, 51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%);
          }
        }
      `}} />
    </div>
  );
};

export default Hero;
