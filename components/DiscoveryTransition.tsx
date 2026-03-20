import React from 'react';
import { motion } from 'framer-motion';
import { Language } from '../types';
import { Sparkles, Globe, Compass } from 'lucide-react';

interface DiscoveryTransitionProps {
  language: Language;
}

const DiscoveryTransition: React.FC<DiscoveryTransitionProps> = ({ language }) => {
  return (
    <section className="relative py-32 md:py-48 bg-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 md:space-y-12"
          >
            <div className="flex items-center gap-6">
              <span className="text-stone-300 font-heritage text-2xl">01</span>
              <div className="h-px w-12 bg-stone-200" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-400">The Archival Prologue</span>
            </div>

            <h2 className="text-5xl md:text-8xl font-heritage font-bold text-black leading-[0.85] tracking-tighter uppercase">
              {language === 'EN' ? (
                <>A Journey Beyond <br/><span className="text-stone-300 italic">The Ordinary.</span></>
              ) : (
                <>සාමාන්‍යයෙන් ඔබ්බට ගිය <br/><span className="text-stone-300 italic">සංචාරයක්.</span></>
              )}
            </h2>
            
            <div className="relative pl-12">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#F59E0B] to-transparent" />
              <p className="text-stone-500 text-xl md:text-3xl font-light italic leading-tight max-w-xl">
                {language === 'EN' 
                  ? "From the misty peaks of the central highlands to the golden shores of the south, every archival node tells a story of a thousand years."
                  : "මීදුම් සහිත කඳු මුදුන්වල සිට දකුණේ රන්වන් වෙරළ තීරය දක්වා, සෑම ස්ථානයක්ම වසර දහසක කතාවක් පවසයි."}
              </p>
            </div>

            <div className="flex items-center gap-12 pt-8">
              <div className="space-y-2">
                <p className="text-4xl font-heritage font-bold text-black">2500+</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-stone-400">Years of History</p>
              </div>
              <div className="w-px h-16 bg-stone-200" />
              <div className="space-y-2">
                <p className="text-4xl font-heritage font-bold text-black">8</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-stone-400">UNESCO Sites</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative group">
              <img 
                src="https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1000&q=80" 
                className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110" 
                alt="Sri Lanka Landscape" 
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-white rounded-full shadow-2xl flex items-center justify-center p-8 text-center border border-stone-100 hidden md:flex">
                <p className="text-[10px] font-black uppercase tracking-widest leading-tight text-stone-600">
                  {language === 'EN' ? 'Popular Experiences' : 'ජනප්‍රිය අත්දැකීම්'}
                </p>
              </div>
            </div>

            {/* Decorative Dots */}
            <div className="absolute -top-12 -right-12 grid grid-cols-4 gap-4 opacity-20">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-black rounded-full" />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default DiscoveryTransition;
