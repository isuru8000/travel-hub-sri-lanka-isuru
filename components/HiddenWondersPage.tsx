import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { MapPin, Mountain, Truck, Ship, Navigation, Star, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Language } from '../types';
import { HIDDEN_PLACES } from '../hidden_places_data';

interface HiddenWondersPageProps {
  language: Language;
  onBack: () => void;
}

const HiddenWondersPage: React.FC<HiddenWondersPageProps> = ({ language, onBack }) => {
  const allHiddenPlaces = Object.values(HIDDEN_PLACES).flat();
  const [selectedPlace, setSelectedPlace] = useState<any | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -400, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 400, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0f0d] text-stone-200 font-sans p-8 md:p-16 flex flex-col items-center relative overflow-hidden">
        <Helmet>
          <title>
            {language === 'EN' 
              ? 'Seeking the Unseen: A 2026 Traveler\'s Journal | Hidden Wonders of Sri Lanka' 
              : 'නොදුටු දේශයේ රහස් සොයා: 2026 ගවේෂණ සටහන් | ශ්‍රී ලංකාවේ සැඟවුණු විස්මිත ස්ථාන'}
          </title>
          <meta name="description" content={language === 'EN' ? 'Explore the most secluded and off-the-beaten-path locations in Sri Lanka. A traveler\'s guide for 2026.' : 'ශ්‍රී ලංකාවේ වැඩිපුර සංචාරය නොකරන, සැඟවුණු රමණීය ස්ථාන ගවේෂණය කරන්න. 2026 සඳහා සංචාරක මාර්ගෝපදේශය.'} />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": language === 'EN' ? 'Hidden Wonders of Sri Lanka' : 'ශ්‍රී ලංකාවේ සැඟවුණු විස්මිත ස්ථාන',
              "description": language === 'EN' ? 'A traveler\'s journey to discover unseen locations.' : 'නොදුටු ස්ථාන සොයා යන සංචාරක ගවේෂණයක්.',
              "itemListElement": allHiddenPlaces.map((place, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": place.name[language],
                "url": `${window.location.origin}${window.location.pathname}#${place.id}`
              }))
            })}
          </script>
        </Helmet>

        {/* Watermark */}
        <div className="fixed inset-0 opacity-[0.05] pointer-events-none flex items-center justify-center z-0">
            <svg width="600" height="600" viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="0.5">
                <circle cx="50" cy="50" r="40" />
                <path d="M50 10 L50 90 M10 50 L90 50" />
            </svg>
        </div>

      <button 
        onClick={onBack} 
        className="fixed top-8 left-8 z-50 flex items-center gap-2 text-stone-400 hover:text-white transition-colors bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
      >
        &larr; {language === 'EN' ? 'Back' : 'ආපසු'}
      </button>

      <h1 className="text-3xl md:text-5xl font-serif text-white mb-16 tracking-tighter text-center relative z-10">
        {language === 'EN' ? 'Seeking the Unseen: A 2026 Traveler\'s Journal' : 'නොදුටු දේශයේ රහස් සොයා: 2026 ගවේෂණ සටහන්'}
      </h1>

      <div className="relative w-full max-w-6xl flex items-center z-10">
        <button onClick={scrollLeft} className="absolute -left-12 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all hover:text-[#d4af37]">
            <ChevronLeft size={32} />
        </button>

        <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide px-4"
        >
            {allHiddenPlaces.map((place) => (
            <motion.div
                key={place.id}
                className="flashlight snap-center shrink-0 w-[300px] h-[350px] relative rounded-lg overflow-hidden group cursor-pointer border-4 border-white bg-[#e0dcd0] p-4 shadow-2xl transition-all duration-300 hover:scale-105"
                onClick={() => setSelectedPlace(place)}
                onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    e.currentTarget.style.setProperty('--x', `${x}px`);
                    e.currentTarget.style.setProperty('--y', `${y}px`);
                }}
            >
                <img
                src={place.image}
                alt={place.name[language]}
                className="w-full h-[250px] object-cover"
                />
                <div className="pt-4 flex flex-col justify-center items-center">
                    <h3 className="text-lg font-serif text-stone-900 mb-1">
                        {place.name[language]}
                    </h3>
                    <p className="text-[#a67c00] text-[10px] uppercase tracking-widest font-mono">
                        {place.coordinates.lat.toFixed(2)}N, {place.coordinates.lng.toFixed(2)}E
                    </p>
                </div>
            </motion.div>
            ))}
        </div>

        <button onClick={scrollRight} className="absolute -right-12 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all hover:text-[#d4af37]">
            <ChevronRight size={32} />
        </button>
      </div>

      <AnimatePresence>
        {selectedPlace && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPlace(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                layoutId={selectedPlace.id}
                className="bg-[#0f1715] border border-stone-700 text-stone-200 p-8 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
              >
                <button 
                  onClick={() => setSelectedPlace(null)}
                  className="absolute top-4 right-4 text-stone-400 hover:text-white"
                >
                  <X />
                </button>
                <img src={selectedPlace.image} alt={selectedPlace.name[language]} className="w-full h-64 object-cover rounded-xl mb-8" />
                <h2 className="text-4xl font-serif text-white mb-4">{selectedPlace.name[language]}</h2>
                <p className="text-stone-400 mb-8 leading-relaxed">{selectedPlace.description[language]}</p>
                
                <div className="flex gap-8 mb-8 font-serif">
                    <div>
                        <div className="text-stone-500 text-xs mb-1 uppercase tracking-wider">Coordinates</div>
                        <div className="text-[#d4af37]">
                            {selectedPlace.coordinates.lat.toFixed(4)}N, {selectedPlace.coordinates.lng.toFixed(4)}E
                        </div>
                    </div>
                </div>
                
                <div className="flex gap-4 mb-4">
                    {selectedPlace.accessibility.map((acc:string, i:number) => (
                    <div key={i} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1 text-xs capitalize text-stone-300">
                        {acc === 'hiking' && <Mountain size={14} className="text-[#d4af37]" />}
                        {acc === '4x4' && <Truck size={14} className="text-[#d4af37]" />}
                        {acc === 'boat' && <Ship size={14} className="text-[#d4af37]" />}
                        {acc}
                    </div>
                    ))}
                </div>

                <a 
                    href={selectedPlace.mapUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 bg-[#d4af37] text-[#0a0f0d] font-bold px-6 py-3 rounded-full hover:bg-[#c5a030] transition-colors mt-4"
                >
                    <Navigation size={18} />
                    {language === 'EN' ? 'Get Directions' : 'මග පෙන්වීම ලබා ගන්න'}
                </a>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HiddenWondersPage;
