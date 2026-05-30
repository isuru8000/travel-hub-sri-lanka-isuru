import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, MapPin, Calendar, Clock, Compass, Award, CheckCircle2, Star, 
  Map as MapIcon, ChevronRight, Image as ImageIcon, Heart, Info, Landmark, Sprout, Train, Footprints, TreePine, Droplets, ShieldAlert
} from 'lucide-react';
import { Language } from '../types';
import { SPOT_DETAILS_POOL, SpotDetailData } from './spotDetailsData';

interface SpotDetailProps {
  spotId: string;
  language: Language;
  onBack: () => void;
}

// Simple lookup mapper to dynamically swap Lucide icons
const IconMap: Record<string, any> = {
  "Landmark": Landmark,
  "Train": Train,
  "Sprout": Sprout,
  "Compass": Compass,
  "Footprints": Footprints,
  "TreePine": TreePine,
  "Droplets": Droplets,
  "ShieldAlert": ShieldAlert,
  "Award": Award,
  "Star": Star
};

export default function SpotDetail({ spotId, language, onBack }: SpotDetailProps) {
  // Gracefully fallback to train-passage if id not found
  const spot: SpotDetailData = SPOT_DETAILS_POOL[spotId] || SPOT_DETAILS_POOL["train-passage"];
  
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [activeMapSpot, setActiveMapSpot] = useState(spot.mapSpots[0] || { id: 'generic', name: { EN: "Main Point", SI: "ප්‍රධාන ස්ථානය" }, coordinates: { x: 50, y: 50 }, description: { EN: "Main vista", SI: "ප්‍රධාන දසුන" } });
  const [isLiked, setIsLiked] = useState(false);
  const [isBookingSuccess, setIsBookingSuccess] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  // Synchronize activeMapSpot if spot changes
  React.useEffect(() => {
    if (spot.mapSpots && spot.mapSpots.length > 0) {
      setActiveMapSpot(spot.mapSpots[0]);
    }
  }, [spotId]);

  return (
    <div id={`spot-detail-${spot.id}-root`} className="min-h-screen bg-stone-50 select-none pb-24">
      {/* 1. Large Striking Hero Header Image */}
      <div id="sd-hero" className="relative h-[60vh] bg-[#0c100a] md:h-[65vh] w-full overflow-hidden flex items-end">
        <img 
          src={spot.heroImage}
          alt={spot.name[language]}
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover opacity-85 transition-all duration-[6000ms]"
        />
        {/* Floating top header with Back Button */}
        <div className="absolute top-8 left-4 md:left-8 z-[70] flex items-center gap-4">
          <button 
            id="sd-back-btn"
            onClick={onBack} 
            className="flex items-center gap-2.5 px-5 py-3 bg-white/95 backdrop-blur-xl border border-stone-200 text-stone-900 rounded-full font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-xl group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform text-[#0EA5E9]" /> 
            {language === 'EN' ? 'Back' : 'පසුපසට'}
          </button>
        </div>

        {/* Bottom backdrop overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-stone-50/10 to-black/40 z-10" />

        {/* Floating details banner */}
        <div id="sd-hero-text" className="relative z-20 max-w-7xl mx-auto px-6 md:px-10 pb-10 w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400 text-stone-950 font-black text-[8px] uppercase tracking-widest shadow-md mb-4">
            <Award size={10} />
            {language === 'EN' ? 'SIGNATURE EXPERIENCE' : 'සුවිශේෂී අත්දැකීමක්'}
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white font-bold max-w-4xl leading-tight drop-shadow-lg uppercase">
            {spot.name[language]}
          </h1>
          
          <div className="flex items-center gap-3 text-stone-200 mt-4 text-xs md:text-sm font-semibold drop-shadow-md">
            <MapPin size={15} className="text-amber-400" />
            <span>{spot.location}</span>
            <span className="text-white/40">|</span>
            <div className="flex text-amber-400">★★★★★</div>
            <span className="text-white font-bold">{spot.rating.toFixed(1)} ({spot.reviewsCount.toLocaleString()} {language === 'EN' ? 'voyagers' : 'සංචාරකයින්'})</span>
          </div>
        </div>
      </div>

      {/* 2. Content Grids layout */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14">
        
        {/* ================= LEFT COLUMN ================= */}
        <div className="lg:col-span-7 space-y-12">
          
          {/* Section A: Overview */}
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-stone-200/40 shadow-[0_4px_30px_rgba(0,0,0,0.01)] space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold font-serif text-stone-900 flex items-center gap-3">
                <Compass className="text-[#0EA5E9]" size={24} />
                {language === 'EN' ? 'Overview' : 'දළ හැඳින්වීම'}
              </h2>
              <button 
                onClick={() => setIsLiked(!isLiked)}
                className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all ${
                  isLiked 
                    ? 'bg-rose-50 border-rose-200 text-rose-500 scale-105 shadow-sm' 
                    : 'bg-stone-50 border-stone-200 text-stone-400 hover:text-rose-500 hover:bg-rose-50'
                }`}
              >
                <Heart size={18} className={isLiked ? 'fill-rose-500' : ''} />
              </button>
            </div>

            <div className="text-stone-600 space-y-4 text-sm md:text-base font-light leading-relaxed">
              <p>{spot.overview[language]}</p>
            </div>
          </div>

          {/* Section B: Key Highlights */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold font-serif text-stone-900 flex items-center gap-3 px-2">
              <Award className="text-amber-500" size={24} />
              {language === 'EN' ? 'Key Highlights' : 'සුවිශේෂී විශේෂතා'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {spot.highlights.map((hl, idx) => {
                const IconComp = IconMap[hl.icon] || Compass;
                return (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-stone-200/50 shadow-sm hover:shadow-md transition-all flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0EA5E9]/10 flex items-center justify-center text-[#0EA5E9] shrink-0">
                      <IconComp size={22} />
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="font-bold text-stone-800 text-sm md:text-base">{hl.title[language]}</h4>
                      <p className="text-stone-500 text-xs md:text-sm font-light leading-relaxed">{hl.desc[language]}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section C: Interactive Map */}
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-stone-200/60 shadow-sm space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <h2 className="text-2xl font-bold font-serif text-stone-900 flex items-center gap-3">
                  <MapIcon className="text-emerald-500" size={24} />
                  {language === 'EN' ? 'Interactive Guide Map' : 'භූගෝලීය පිරික්සුම් සිතියම'}
                </h2>
                <p className="text-xs text-stone-400 font-bold uppercase tracking-wider">
                  {language === 'EN' ? 'Spot Local Geography Nodes' : 'දේශීය ගවේෂණ ලක්ෂ්‍යයන්'}
                </p>
              </div>
              <div className="flex gap-1.5 flex-wrap">
                {spot.mapSpots.map(s => (
                  <button
                    key={s.id}
                    onClick={() => setActiveMapSpot(s)}
                    className={`px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-wider transition-all border ${
                      activeMapSpot.id === s.id 
                        ? 'bg-stone-950 text-white border-transparent shadow' 
                        : 'bg-stone-50 text-stone-500 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    {s.id}
                  </button>
                ))}
              </div>
            </div>

            {/* Simulated Map Landscape with Wave/Contour Contours */}
            <div className="relative aspect-[16/9] w-full rounded-2xl bg-gradient-to-br from-teal-50 via-teal-100/50 to-emerald-50 overflow-hidden border border-teal-100 shadow-inner flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-200/10 via-transparent to-transparent opacity-60" />
              <div className="absolute top-10 left-20 w-16 h-16 rounded-full border border-emerald-500/10 animate-ping" />
              
              <svg className="absolute inset-0 w-full h-full p-4 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path 
                  d="M 10 50 Q 30 20 50 60 T 90 40" 
                  fill="none" 
                  stroke="#10b981" 
                  strokeWidth="0.8" 
                  strokeDasharray="2, 1.5" 
                  className="opacity-70"
                />
              </svg>

              {/* Spots Map Pins */}
              {spot.mapSpots.map(node => {
                const isActive = activeMapSpot.id === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => setActiveMapSpot(node)}
                    style={{ left: `${node.coordinates.x}%`, top: `${node.coordinates.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group z-30 focus:outline-none"
                  >
                    <div className="relative flex items-center justify-center">
                      <div className={`absolute w-10 h-10 rounded-full transition-all duration-300 ${isActive ? 'bg-[#0EA5E9]/20 scale-125' : 'bg-transparent'}`} />
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-xl transition-all duration-300 ${
                        isActive ? 'bg-[#0EA5E9] scale-110' : 'bg-[#ea580c] group-hover:bg-[#ea580c]/80'
                      }`}>
                        <MapPin size={9} className="text-white" />
                      </div>
                    </div>
                  </button>
                );
              })}

              {/* Bottom popup message inside map */}
              <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-stone-200/50 z-40">
                <h5 className="font-bold text-stone-900 text-xs md:text-sm">{activeMapSpot.name[language]}</h5>
                <p className="text-stone-500 text-[10px] md:text-xs mt-1 font-light leading-relaxed">{activeMapSpot.description[language]}</p>
              </div>
            </div>
          </div>

        </div>

        {/* ================= RIGHT COLUMN ================= */}
        <div className="lg:col-span-5 space-y-10">
          
          {/* Box 1: Visitor Guide card layout */}
          <div className="bg-white rounded-3xl p-8 border border-stone-200/50 shadow-sm space-y-6">
            <h3 className="text-lg md:text-xl font-serif font-bold text-stone-900 border-b border-stone-100 pb-4">
              {language === 'EN' ? 'Visitor Essential Guide' : 'සංචාරක මාර්ගෝපදේශය'}
            </h3>

            <div className="space-y-5">
              {/* Card 1: Best time */}
              <div className="flex gap-4 items-start p-3 hover:bg-stone-50/50 rounded-xl transition-colors">
                <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-500 shrink-0">
                  <Calendar size={18} />
                </div>
                <div className="space-y-1">
                  <h5 className="font-extrabold text-[10px] text-stone-850 uppercase tracking-widest">
                    {language === 'EN' ? 'Best Daily Time' : 'හොඳම කාලසීමාව'}
                  </h5>
                  <p className="text-stone-500 text-xs md:text-sm font-light leading-relaxed">
                    {spot.visitorGuide.bestTime[language]}
                  </p>
                </div>
              </div>

              {/* Card 2: Getting there */}
              <div className="flex gap-4 items-start p-3 hover:bg-stone-50/50 rounded-xl transition-colors">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-500 shrink-0">
                  <Compass size={18} />
                </div>
                <div className="space-y-1">
                  <h5 className="font-extrabold text-[10px] text-stone-850 uppercase tracking-widest">
                    {language === 'EN' ? 'Getting There' : 'ළඟා වීමට උපදෙස්'}
                  </h5>
                  <p className="text-stone-500 text-xs md:text-sm font-light leading-relaxed">
                    {spot.visitorGuide.gettingThere[language]}
                  </p>
                </div>
              </div>

              {/* Card 3: Connected attractions */}
              <div className="flex gap-4 items-start p-3 hover:bg-stone-50/50 rounded-xl transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#0EA5E9]/5 flex items-center justify-center text-[#0EA5E9] shrink-0">
                  <Award size={18} />
                </div>
                <div className="space-y-1">
                  <h5 className="font-extrabold text-[10px] text-stone-850 uppercase tracking-widest">
                    {language === 'EN' ? 'Recommended Attractions' : 'ආශ්‍රිත ප්‍රධාන ආකර්ෂණ'}
                  </h5>
                  <p className="text-stone-500 text-xs md:text-sm font-light leading-relaxed">
                    {spot.visitorGuide.attractions[language]}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Box 3: Flexible travel packages */}
          <div className="bg-white rounded-3xl p-8 border border-stone-200/50 shadow-sm space-y-6">
            <h3 className="text-lg md:text-xl font-serif font-bold text-stone-900 pb-2 border-b border-stone-100">
              {language === 'EN' ? 'Experience Guided Packages' : 'සංචාරක වෙන් කිරීම් මණ්ඩලය'}
            </h3>

            {isBookingSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-5 rounded-2xl bg-emerald-50 border border-emerald-100 text-center space-y-3"
              >
                <div className="w-11 h-11 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 size={22} />
                </div>
                <h4 className="font-extrabold text-stone-900 text-sm">
                  {language === 'EN' ? 'Reservation Submitted' : 'වෙන් කිරීම සාර්ථකයි'}
                </h4>
                <p className="text-stone-500 text-xs font-light leading-relaxed">
                  {language === 'EN' 
                    ? "Thank you! Our local high country pathfinder guide will connect with you via email shortly."
                    : "ඔබගේ සංචාරක වෙන්කිරීම සටහන් විය. දේශීය මඟපෙන්වන්නන් ඉක්මනින් ඔබ හා සම්බන්ධ වනු ඇත!"}
                </p>
                <button 
                  onClick={() => {
                    setIsBookingSuccess(false);
                    setSelectedPackage(null);
                  }}
                  className="px-4 py-1.5 bg-stone-900 text-white rounded-lg text-[9px] font-bold uppercase tracking-wider hover:bg-stone-800 transition py-2"
                >
                  {language === 'EN' ? 'Close' : 'වසා දමන්න'}
                </button>
              </motion.div>
            ) : (
              <div className="space-y-4">
                {spot.packages.map(pkg => (
                  <div 
                    key={pkg.id}
                    onClick={() => setSelectedPackage(pkg.id)}
                    className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                      selectedPackage === pkg.id 
                        ? 'bg-amber-50/40 border-amber-400 shadow-sm' 
                        : 'border-stone-100 hover:border-stone-200 bg-stone-50/20'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-stone-900 text-sm">{pkg.title[language]}</h4>
                        <p className="text-stone-500 text-xs font-light mt-1.5 leading-relaxed">
                          {pkg.desc[language]}
                        </p>
                      </div>
                      <span className="text-amber-600 font-black text-sm font-mono shrink-0 ml-4">${pkg.price}</span>
                    </div>
                  </div>
                ))}

                <button
                  disabled={!selectedPackage}
                  onClick={() => setIsBookingSuccess(true)}
                  className={`w-full py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 ${
                    selectedPackage 
                      ? 'bg-[#0EA5E9] hover:bg-[#0284c7] text-white shadow-lg active:scale-[0.98]' 
                      : 'bg-stone-100 text-stone-400 cursor-not-allowed'
                  }`}
                >
                  {language === 'EN' ? 'Confirm Booking Inquiry' : 'වෙන්කිරීම විමසන්න'}
                  <ChevronRight size={14} />
                </button>
              </div>
            )}
          </div>

          {/* Box 4: Historic Voyager Reviews */}
          <div className="bg-white rounded-3xl p-8 border border-stone-200/50 shadow-sm space-y-6">
            <h3 className="text-lg md:text-xl font-serif font-bold text-stone-900 pb-2 border-b border-stone-100 flex items-center justify-between">
              <span>{language === 'EN' ? 'Voyager Echoes' : 'සංචාරක හෘද ස්පන්දන'}</span>
              <span className="text-xs text-amber-500 font-bold flex items-center gap-1 font-mono">
                <Star size={12} className="fill-amber-500" /> 
                {spot.rating.toFixed(1)}
              </span>
            </h3>

            <div className="space-y-6">
              {spot.reviews.map(rev => (
                <div key={rev.id} className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div className="flex gap-3 items-center">
                      <img
                        src={rev.avatar}
                        alt={rev.author}
                        referrerPolicy="no-referrer"
                        className="w-9 h-9 rounded-full object-cover shadow-sm"
                      />
                      <div>
                        <h5 className="font-bold text-stone-850 text-xs md:text-sm">{rev.author}</h5>
                        <p className="text-stone-400 text-[9px] font-semibold tracking-wider uppercase">{rev.country}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-light text-stone-400">{rev.date}</span>
                  </div>
                  
                  <div className="flex text-amber-400 text-[10px]">★★★★★</div>
                  <p className="text-stone-500 text-xs md:text-sm font-light leading-relaxed italic">
                    "{rev.comment[language]}"
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* 3. Photo Zoom Modal Overlay */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 bg-stone-950/95 z-[990] flex items-center justify-center p-6 cursor-zoom-out"
          >
            <div className="relative max-w-5xl max-h-[85vh] overflow-hidden rounded-2xl border border-stone-800">
              <img
                src={selectedPhoto}
                alt="Expanded view"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
