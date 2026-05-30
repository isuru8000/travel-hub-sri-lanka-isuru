import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, MapPin, Calendar, Clock, Compass, Award, CheckCircle2, Star, 
  Map as MapIcon, ChevronRight, Image as ImageIcon, Heart, Info, TreePine, Droplets, Footprints
} from 'lucide-react';
import { Language } from '../types';

interface KnucklesTrekDetailProps {
  language: Language;
  onBack: () => void;
}

interface PhotoItem {
  id: string;
  url: string;
  caption: { EN: string; SI: string };
}

const GALLERY_PHOTOS: PhotoItem[] = [
  {
    id: "knuckles-misty",
    url: "https://images.unsplash.com/photo-1588598130782-690a298573ec?auto=format&fit=crop&w=800&q=80",
    caption: { EN: "Towering mountain peaks enshrouded in early morning cloud cover", SI: "නකල්ස් කඳු මුදුන් වෙලාගන්නා උදෑසන මීදුම් සේල" }
  },
  {
    id: "waterfall-hidden",
    url: "https://images.unsplash.com/photo-1543731068-7e0f5beff43a?auto=format&fit=crop&w=800&q=80",
    caption: { EN: "A crystal clear stream running into a hidden forest rock pool", SI: "වන ගැබ මැදින් ගලා යන පිරිසිදු ස්වභාවික දිය දහරක්" }
  },
  {
    id: "knuckles-peaks",
    url: "https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&w=800&q=80",
    caption: { EN: "Distant view of the unique fist-shaped Knuckles ridges", SI: "මිටිමොලවන ලද ඇඟිලි පුරුක් හැඩැති නකල්ස් කඳු පන්තියේ ඈත පෙනුම" }
  },
  {
    id: "trekkers",
    url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    caption: { EN: "Explorers hiking through lush cloud-forest path", SI: "සශ්‍රීක වනාන්තර මාවතේ ගමන් ගන්නා සංචාරකයන්" }
  }
];

interface ReviewItem {
  id: string;
  author: string;
  country: string;
  avatar: string;
  rating: number;
  date: string;
  comment: { EN: string; SI: string };
}

const REVIEWS: ReviewItem[] = [
  {
    id: "kn-rev1",
    author: "Oliver Schmidt",
    country: "Germany",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
    rating: 5,
    date: "May 28, 2026",
    comment: {
      EN: "This is hands down the most pristine and rewarding wilderness trek in Sri Lanka. The mist rolling down Corbet's Gap feels mystical. Make sure to hire a local pathfinder guide because trails are totally wild and dense!",
      SI: "ශ්‍රී ලංකාවේ පිහිටි නොයිඳුල් වන සංචාරක අත්දැකීම් අතරින් විශිෂ්ටතම සංචාරය මෙයයි. මීදුම් පිරි මංපෙත් මැදින් යන විට දැනෙන්නේ වෙනම ලෝකයකට පැමිණි පරිදිය. වල් මී මැස්සන් සහ වන මංපෙත් නිසා දේශීය මඟපෙන්වන්නකු අත්‍යවශ්‍යයි!"
    }
  },
  {
    id: "kn-rev2",
    author: "Elena Petrova",
    country: "Russia",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
    rating: 5,
    date: "May 18, 2026",
    comment: {
      EN: "Bathed in cold freshwater waterfalls, enjoyed stunning views at Mini World's End. Pure, silence, clean air. Highly recommended for hikers looking for a remote challenge.",
      SI: "දියඇලි වලින් නැවුම් සීතල ජල පහස විඳිමින් පුංචි ලෝකාන්තයේ මනරම් දර්ශන නැරඹුවෙමි. පිරිසිදු වාතය සහ නිස්කලංක පරිසරය කඳු නැගීමට ප්‍රිය කරන්නන්ට කදිම අභියෝගයකි."
    }
  }
];

interface MapSpot {
  id: string;
  name: { EN: string; SI: string };
  coordinates: { x: number; y: number };
  description: { EN: string; SI: string };
}

const MAP_SPOTS: MapSpot[] = [
  {
    id: "corbets-gap",
    name: { EN: "Corbet's Gap Vantage", SI: "කෝබට්ස් වංගුව දර්ශන කලාපය" },
    coordinates: { x: 50, y: 40 },
    description: {
      EN: "A deep valley cleft where fast winds blow shifting mist clouds between mountain walls.",
      SI: "වේගයෙන් හමන කඳුකර සුළඟ මීදුම් සේල කඳු ප අතරින් ගෙනයන අලංකාර නිම්න කලාපය."
    }
  },
  {
    id: "meemure",
    name: { EN: "Meemure Isolated Village", SI: "මීමුරේ හුදකලා ගම්මානය" },
    coordinates: { x: 80, y: 70 },
    description: {
      EN: "The ultra-remote traditional village sitting under the majestic Lakegala peak shadow.",
      SI: "ලකේගල මහා පර්වතයේ සෙවණැල්ල යට පිහිටි ඓතිහාසික, ඉතා දුෂ්කර නොයිඳුල් ගම්මානය."
    }
  },
  {
    id: "mini-worlds-end",
    name: { EN: "Mini World's End Drop", SI: "පුංචි ලෝකාන්තය බෑවුම" },
    coordinates: { x: 30, y: 60 },
    description: {
      EN: "A breathtaking sheer direct rock precipice overlooking southern valleys.",
      SI: "දකුණු දෙසින් පිහිටි නිම්න දෙසට විහිදී යන අතිශය මනරම්, සීග්‍ර මීටර් සිය ගණනක ප්‍රපාතයක්."
    }
  }
];

export default function KnucklesTrekDetail({ language, onBack }: KnucklesTrekDetailProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [activeMapSpot, setActiveMapSpot] = useState<MapSpot>(MAP_SPOTS[0]);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookingSuccess, setIsBookingSuccess] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const keyHighlights = [
    {
      title: { EN: "Untouched Rainforest Paths", SI: "නොයිඳුල් වැසි වනාන්තර මංපෙත්" },
      desc: { 
        EN: "Explore pristine, dense trails under towering ancient leaf canopies. Hike through raw, shifting cloud forests with majestic visual vantage points.", 
        SI: "පැරණි තුරුලතා වියනක් යටින් දිවෙන කඳුකර මාර්ග ගවේෂණය. මීදුම් වැසුණු සුන්දර කඳු යායවල් ඡායාරූපයට නැගීම." 
      },
      icon: Footprints
    },
    {
      title: { EN: "Biodiversity Hotspot", SI: "විස්මිත ජෛව විවිධත්වය" },
      desc: { 
        EN: "A sanctuary of rare endemic flora, gorgeous orchid varieties, and unique bird species found nowhere else on Ceylon floor.", 
        SI: "ලොව වෙනත් කිසිම තැනක නොමැති දුර්ලභ ඕකිඩ් විශේෂ, ඖෂධ පැලෑටි සහ දේශීය කුරුල්ලන් වෙසෙන වනජීවී ක්ෂේම භූමියකි." 
      },
      icon: TreePine
    },
    {
      title: { EN: "Pristine Hidden Rock Pools", SI: "ස්වභාවික ගල් තටාක සහ දියඇලි" },
      desc: { 
        EN: "Plunge into cool, untouched natural streams and pristine rock pools hidden deep within the mountain folds.", 
        SI: "කඳු අතර සැඟවුණු නිල්වන්, ස්වභාවික පිරිසිදු ඇළ දොළ සහ සීතල ගල් තටාක වලින් දිය නෑමේ සොඳුරු පහස." 
      },
      icon: Droplets
    }
  ];

  return (
    <div id="knuckles-trek-detail-root" className="min-h-screen bg-stone-50 select-none pb-24">
      {/* 1. Header Hero with Large Striking Image */}
      <div id="kn-hero" className="relative h-[65vh] w-full bg-[#0d1009] overflow-hidden flex items-end">
        <img 
          src="https://i.pinimg.com/1200x/de/fc/01/defc011f1dfe36aa3317523ad32561d4.jpg"
          alt="Knuckles Mountain Range"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        {/* Top bar for going back */}
        <div className="absolute top-10 left-6 md:left-10 z-[70] flex items-center gap-4">
          <button 
            id="kn-back-btn"
            onClick={onBack} 
            className="flex items-center gap-3 px-6 py-3.5 bg-white/95 backdrop-blur-xl border border-stone-200 text-stone-900 rounded-full font-black text-[10px] uppercase tracking-[0.4em] hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-xl group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform text-[#0EA5E9]" /> 
            {language === 'EN' ? 'Back to Board' : 'පසුපසට'}
          </button>
        </div>

        {/* Bottom Smooth Dissolve Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-stone-50/40 via-stone-50/0 to-[#0d1009]/30" />

        {/* Floating title block on the image */}
        <div id="kn-hero-text" className="relative z-20 max-w-7xl mx-auto px-6 md:px-10 pb-12 w-full">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400 text-stone-950 font-black text-[8px] uppercase tracking-widest shadow-md mb-4 animate-bounce">
            <Award size={10} />
            {language === 'EN' ? 'UNESCO HERITAGE EXPEDITION' : 'යුනෙස්කෝ ලෝක උරුම ගමන'}
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white font-bold max-w-3xl leading-tight drop-shadow-lg uppercase">
            {language === 'EN' ? 'The UNESCO Cloud Forest Trek' : 'නකල්ස් යුනෙස්කෝ වනාන්තර සංචාරය'}
          </h1>
          
          <div className="flex items-center gap-3 text-stone-200 mt-4 text-xs md:text-sm font-semibold drop-shadow-md">
            <MapPin size={16} className="text-amber-400" />
            <span>Knuckles Mountain Range, Matale / Kandy, Sri Lanka</span>
            <span className="text-white/40">|</span>
            <div className="flex text-amber-400">★★★★★</div>
            <span className="text-white font-bold">4.9 (1,560 trekkers)</span>
          </div>
        </div>
      </div>

      {/* 2. Main Columns Layout */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14">
        
        {/* ================= LEFT COLUMN ================= */}
        <div className="lg:col-span-7 space-y-12">
          
          {/* Section: Overview */}
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-stone-250/20 shadow-[0_4px_30px_rgba(0,0,0,0.02)] space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold font-serif text-stone-900 flex items-center gap-3">
                <Compass className="text-[#0EA5E9]" size={24} />
                {language === 'EN' ? 'Overview' : 'සංචාරක දළ හැඳින්වීම'}
              </h2>
              <button 
                onClick={() => setIsLiked(!isLiked)}
                className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${
                  isLiked 
                    ? 'bg-rose-50 border-rose-200 text-rose-500 scale-110' 
                    : 'bg-stone-50 border-stone-200 text-stone-400 hover:text-rose-500 hover:bg-rose-50'
                }`}
              >
                <Heart size={20} className={isLiked ? 'fill-rose-500' : ''} />
              </button>
            </div>

            <div className="text-stone-600 space-y-4 text-sm md:text-base font-light leading-relaxed">
              <p>
                {language === 'EN' 
                  ? "An immersive trek through the mystical cloud forests of Knuckles. This UNESCO World Heritage site offers hidden waterfalls, intense biodiversity, and jaw-dropping mountain vistas designed for true nature explorers and adventurers."
                  : "මීදුමින් වෙළුණු, සුන්දර නකල්ස් කඳු පන්තියේ නොයිඳුල් වන සංචාරය. යුනෙස්කෝ ලෝක උරුමයක් ලෙස ප්‍රකාශයට පත් කර ඇති මෙම වනගත කලාපය සැඟවුණු දියඇලි, සුවිශේෂී ජෛව විවිධත්වය සහ මනරම් කඳු මුදුන් ගවේෂණයට කැමති සංචාරකයන්ට කදිම ස්ථානයකි."}
              </p>
              <p>
                {language === 'EN'
                  ? "Featuring stunning ridges shaped like a clenched fist, the Knuckles Mountain Range is an irreplaceable treasure of Ceylon's natural geography. Here, the warm tropical winds condense into perpetual clouds, feeding rare, endemic plant and animal life that exists nowhere else on Earth."
                  : "මිටිමොළවන ලද අතක හැඩය ගන්නා කඳු පන්ති පහකින් සමන්විත මෙම වනපෙත ශ්‍රී ලංකාවේ භූගෝලීය පිහිටීමේ පාරිසරික කිරුළ බඳුය. සීතල කඳුකර දේශගුණය සහ වෙනස් වන පරිසර වටපිටාව සංචාරකයින්ට සැබෑ වන සුවයක් ළඟා කරදෙයි."}
              </p>
            </div>
          </div>

          {/* Section: Key Highlights */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold font-serif text-stone-900 flex items-center gap-3 px-2">
              <Award className="text-amber-500" size={24} />
              {language === 'EN' ? 'Key Highlights' : 'සුවිශේෂී විශේෂතා'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {keyHighlights.map((hl, idx) => {
                const IconComp = hl.icon;
                return (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-stone-200/50 shadow-sm hover:shadow-md transition-all flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
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

          {/* Section: Interactive Regional Map */}
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-stone-200/60 shadow-sm space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <h2 className="text-2xl font-bold font-serif text-stone-900 flex items-center gap-3">
                  <MapIcon className="text-emerald-500" size={24} />
                  {language === 'EN' ? 'Range Geography' : 'භූගෝලීය සිතියම'}
                </h2>
                <p className="text-xs text-stone-400 font-bold uppercase tracking-wider">
                  {language === 'EN' ? 'Interactive Trek Nodes' : 'අන්තර්ක්‍රියාකාරී ගවේෂණ ලක්ෂ්‍යයන්'}
                </p>
              </div>
              <div className="flex gap-2 flex-wrap">
                {MAP_SPOTS.map(s => (
                  <button
                    key={s.id}
                    onClick={() => setActiveMapSpot(s)}
                    className="px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-wider transition-all border bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100"
                  >
                    {s.id === 'corbets-gap' ? "Corbet's" : s.id === 'meemure' ? 'Meemure' : "World's End"}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Interactive SVG Map representation */}
            <div className="relative aspect-[16/9] w-full rounded-2xl bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100 overflow-hidden border border-emerald-100/60 shadow-inner flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-200/10 via-transparent to-transparent opacity-60" />
              <div className="absolute top-10 left-20 w-16 h-16 rounded-full border border-teal-500/10 animate-ping" />
              
              <svg className="absolute inset-0 w-full h-full p-4 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path 
                  d="M 20 40 Q 50 20 80 50" 
                  fill="none" 
                  stroke="#10b981" 
                  strokeWidth="0.8" 
                  strokeDasharray="2, 1.5" 
                  className="opacity-70"
                />
              </svg>

              {/* Map Spots Pins */}
              {MAP_SPOTS.map(spot => {
                const isActive = activeMapSpot.id === spot.id;
                return (
                  <button
                    key={spot.id}
                    onClick={() => setActiveMapSpot(spot)}
                    style={{ left: `${spot.coordinates.x}%`, top: `${spot.coordinates.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group z-30 focus:outline-none"
                  >
                    <div className="relative flex items-center justify-center">
                      <div className={`absolute w-10 h-10 rounded-full transition-all duration-300 ${isActive ? 'bg-[#0EA5E9]/20 scale-125' : 'bg-transparent'}`} />
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-xl transition-all duration-300 ${
                        isActive ? 'bg-[#0EA5E9] scale-110' : 'bg-emerald-600'
                      }`}>
                        <MapPin size={9} className="text-white" />
                      </div>
                    </div>
                  </button>
                );
              })}

              {/* Floating detail box showing selected map spot */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-stone-200/50 z-40 transition-all">
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="font-bold text-stone-900 text-xs md:text-sm">{activeMapSpot.name[language]}</h5>
                    <p className="text-stone-500 text-[10px] md:text-xs mt-1 font-light">{activeMapSpot.description[language]}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ================= RIGHT COLUMN ================= */}
        <div className="lg:col-span-5 space-y-10">
          
          {/* Box 1: Visitor Essential Guide */}
          <div className="bg-white rounded-3xl p-8 border border-stone-200/50 shadow-sm space-y-6">
            <h3 className="text-lg md:text-xl font-serif font-bold text-stone-900 border-b border-stone-100 pb-4">
              {language === 'EN' ? 'Visitor Essential Guide' : 'සංචාරක උපකාරක මණ්ඩලය'}
            </h3>

            <div className="space-y-5">
              {/* Info Card: Best Time to Visit */}
              <div className="flex gap-4 items-start p-3 hover:bg-stone-50/50 rounded-xl transition-colors">
                <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-500 shrink-0">
                  <Calendar size={18} />
                </div>
                <div className="space-y-1">
                  <h5 className="font-bold text-xs text-stone-850 uppercase tracking-widest">
                    {language === 'EN' ? 'Best Daily Time' : 'හොඳම වේලාව'}
                  </h5>
                  <p className="text-stone-500 text-xs md:text-sm font-light">
                    {language === 'EN' 
                      ? "January to March & June to September. Drier periods with crystal clear visibility."
                      : "ජනවාරි සිට මාර්තු සහ ජූනි සිට සැප්තැම්බර්. කඳු නැගීම සඳහා වියළි බිම් ඇති මනරම් කාල පරිච්ඡේදයකි."}
                  </p>
                </div>
              </div>

              {/* Info Card: Getting There */}
              <div className="flex gap-4 items-start p-3 hover:bg-stone-50/50 rounded-xl transition-colors">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-500 shrink-0">
                  <Compass size={18} />
                </div>
                <div className="space-y-1">
                  <h5 className="font-bold text-xs text-stone-850 uppercase tracking-widest">
                    {language === 'EN' ? 'Transit & Getting There' : 'ප්‍රවේශ මාර්ග'}
                  </h5>
                  <p className="text-stone-500 text-xs md:text-sm font-light">
                    {language === 'EN' 
                      ? "Accessible via Matale or Hunnasgiriya entry points using a 4x4 offroad jeep or local transport."
                      : "මාතලේ හෝ හුන්නස්ගිරිය ද්වාරයන් හරහා 4x4 ජීප් රථ හෝ දේශීය සංචාරක සේවාවන් මගින් ළඟා විය හැක."}
                  </p>
                </div>
              </div>

              {/* Info Card: Attractions */}
              <div className="flex gap-4 items-start p-3 hover:bg-stone-50/50 rounded-xl transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#0EA5E9]/5 flex items-center justify-center text-[#0EA5E9] shrink-0">
                  <TreePine size={18} />
                </div>
                <div className="space-y-1">
                  <h5 className="font-bold text-xs text-stone-850 uppercase tracking-widest">
                    {language === 'EN' ? 'Connected Attractions' : 'අවට විශේෂ ස්ථාන'}
                  </h5>
                  <p className="text-stone-500 text-xs md:text-sm font-light">
                    {language === 'EN' 
                      ? "Meemure Traditional Village, Mini World's End precipice, Corbet's Gap wind canyon."
                      : "මීමුරේ සාම්ප්‍රදායික ගම්මානය, පුංචි ලෝකාන්ත ප්‍රපාතය, කෝබට්ස් කපොල්ල සුළං නිම්නය."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Box 2: Premium Interactive Photo Gallery */}
          <div className="bg-white rounded-3xl p-8 border border-stone-200/50 shadow-sm space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg md:text-xl font-serif font-bold text-stone-900">
                {language === 'EN' ? 'Vibrant Photo Gallery' : 'ඡායාරූප එකතුව'}
              </h3>
              <span className="text-[10px] font-black text-[#0EA5E9] bg-[#0EA5E9]/5 px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
                <ImageIcon size={10} />
                {GALLERY_PHOTOS.length} SPOTS
              </span>
            </div>

            {/* Grid of photos */}
            <div className="grid grid-cols-2 gap-4">
              {GALLERY_PHOTOS.map(photo => (
                <button
                  key={photo.id}
                  onClick={() => setSelectedPhoto(photo.url)}
                  className="relative aspect-square rounded-2xl overflow-hidden group border border-stone-100 hover:scale-102 hover:shadow-lg transition-all focus:outline-none"
                >
                  <img
                    src={photo.url}
                    alt={photo.caption[language]}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-[10px] text-white font-black uppercase tracking-widest bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full">
                      {language === 'EN' ? 'Expand' : 'විශාල කරන්න'}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Box 3: Guided Travel Packages */}
          <div className="bg-white rounded-3xl p-8 border border-stone-200/50 shadow-sm space-y-6">
            <h3 className="text-lg md:text-xl font-serif font-bold text-stone-900 pb-2 border-b border-stone-100">
              {language === 'EN' ? 'Guided Expeditions' : 'හොඳම සංචාරක පැකේජ්'}
            </h3>

            {isBookingSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-5 rounded-2xl bg-emerald-50 border border-emerald-100 text-center space-y-3"
              >
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 size={24} />
                </div>
                <h4 className="font-extrabold text-stone-900 text-sm md:text-base">
                  {language === 'EN' ? 'Trek Reservation Pending' : 'වන සංචාර වෙන්කිරීම් ලියාපදිංචි කරන ලදී'}
                </h4>
                <p className="text-stone-500 text-xs font-light leading-relaxed">
                  {language === 'EN' 
                    ? "Your reservation query is noted. Our mountain Pathfinder guides will connect on your registered email shortly!"
                    : "ඔබගේ කඳුකර සංචාරක වෙන්කිරීම සටහන් විය. දේශීය මඟපෙන්වන්නන් ඉක්මනින් ඔබ හා සම්බන්ධ වනු ඇත!"}
                </p>
                <button 
                  onClick={() => {
                    setIsBookingSuccess(false);
                    setSelectedPackage(null);
                  }}
                  className="px-4 py-1.5 bg-stone-900 text-white rounded-lg text-[9px] font-bold uppercase tracking-wider hover:bg-stone-800 transition py-2 mt-4"
                >
                  {language === 'EN' ? 'Close Window' : 'වසා දමන්න'}
                </button>
              </motion.div>
            ) : (
              <div className="space-y-4">
                {/* Package 1 */}
                <div 
                  onClick={() => setSelectedPackage('summit')}
                  className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                    selectedPackage === 'summit' 
                      ? 'bg-amber-50/40 border-amber-400 shadow-sm' 
                      : 'border-stone-100 hover:border-stone-200 bg-stone-50/20'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-stone-900 text-sm">3-Day Knuckles Summit Camp</h4>
                      <p className="text-stone-500 text-xs font-light mt-1">
                        {language === 'EN' 
                          ? "Includes private camping gear, organic local meals, safety tracker, and Meemure custom local village tour."
                          : "රාත්‍රී කූඩාරම්, දේශීය ආහාර සහ මීමුරේ පාරම්පරික ගම්මාන චාරිකාව බැහැදැකීමේ අවස්ථාව."}
                      </p>
                    </div>
                    <span className="text-amber-600 font-extrabold text-sm font-mono shrink-0">$120</span>
                  </div>
                </div>

                {/* Package 2 */}
                <div 
                  onClick={() => setSelectedPackage('daytrek')}
                  className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                    selectedPackage === 'daytrek' 
                      ? 'bg-amber-50/40 border-amber-400 shadow-sm' 
                      : 'border-stone-100 hover:border-stone-200 bg-stone-50/20'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-stone-900 text-sm">1-Day Mystic Waterfalls Trek</h4>
                      <p className="text-stone-500 text-xs font-light mt-1">
                        {language === 'EN' 
                          ? "A dense guided hike to hidden waterfalls with rock pool swimming, leeches protections, & packaged lunch."
                          : "දියඇලි කලාප ගවේෂණය, කටුක මංපෙත්, පිරිසිදු ඇළ දොළ නෑම සහ දිවා ආහාරය ඇතුළත් එක්දින චාරිකාවක්."}
                      </p>
                    </div>
                    <span className="text-amber-600 font-extrabold text-sm font-mono shrink-0">$45</span>
                  </div>
                </div>

                <button
                  disabled={!selectedPackage}
                  onClick={() => setIsBookingSuccess(true)}
                  className={`w-full py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.25em] transition-all flex items-center justify-center gap-3 ${
                    selectedPackage 
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg active:scale-98' 
                      : 'bg-stone-100 text-stone-400 cursor-not-allowed'
                  }`}
                >
                  {language === 'EN' ? 'Confirm Experience Booking' : 'සංචාරක වෙන් කිරීම තහවුරු කරන්න'}
                  <ChevronRight size={14} />
                </button>
              </div>
            )}
          </div>

          {/* Box 4: Latest Interactive Reviews */}
          <div className="bg-white rounded-3xl p-8 border border-stone-200/50 shadow-sm space-y-6">
            <h3 className="text-lg md:text-xl font-serif font-bold text-stone-900 pb-2 border-b border-stone-100 flex items-center justify-between">
              <span>{language === 'EN' ? 'Voyager Echoes' : 'සංචාරක අදහස්'}</span>
              <span className="text-xs text-amber-500 font-bold flex items-center gap-1 font-mono">
                <Star size={12} className="fill-amber-500" /> 
                4.9
              </span>
            </h3>

            <div className="space-y-6">
              {REVIEWS.map(rev => (
                <div key={rev.id} className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div className="flex gap-3 items-center">
                      <img
                        src={rev.avatar}
                        alt={rev.author}
                        referrerPolicy="no-referrer"
                        className="w-10 h-10 rounded-full object-cover shadow-sm"
                      />
                      <div>
                        <h5 className="font-bold text-stone-850 text-xs md:text-sm">{rev.author}</h5>
                        <p className="text-stone-400 text-[10px] font-semibold tracking-wider uppercase">{rev.country}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-light text-stone-400">{rev.date}</span>
                  </div>
                  
                  <div className="flex text-amber-400 text-xs">★★★★★</div>
                  <p className="text-stone-500 text-xs md:text-sm font-light leading-relaxed italic">
                    "{rev.comment[language]}"
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* 3. Image Full View Overlay Modal */}
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
                alt="Large viewpoint"
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
