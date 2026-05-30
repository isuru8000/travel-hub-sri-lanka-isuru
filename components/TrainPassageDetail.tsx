import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, MapPin, Calendar, Clock, Compass, Train, Award, CheckCircle2, Star, 
  Map as MapIcon, ChevronRight, Image as ImageIcon, Heart, Info, Landmark, Sprout, ShieldAlert
} from 'lucide-react';
import { Language } from '../types';

interface TrainPassageDetailProps {
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
    id: "bridge-landscape",
    url: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80",
    caption: { EN: "Colonial stone architecture curving majestically through tea trees", SI: "තේ වතු මැදින් අලංකාරව වක්‍ර වන පැරණි ගල් පාලමේ දසුන" }
  },
  {
    id: "train-view",
    url: "https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&w=800&q=80",
    caption: { EN: "Overlooking misty pine forests from the scenic train carriage", SI: "දුම්රිය කවුළුවකින් පෙනෙන මීදුම් සළු පොරවන කඳුකර පයිනස් වනාන්තරය" }
  },
  {
    id: "tea-hills",
    url: "https://images.unsplash.com/photo-1543731068-7e0f5beff43a?auto=format&fit=crop&w=800&q=80",
    caption: { EN: "Vibrant green rolling tea fields surrounding Ella village", SI: "ඇල්ල අවට පිහිටි සශ්‍රීක රන්වන් තේ යාය" }
  },
  {
    id: "local-tuk",
    url: "https://images.unsplash.com/photo-1517404212728-bc61701d4a31?auto=format&fit=crop&w=800&q=80",
    caption: { EN: "Tuk-tuk winding through the lush forest trail down to the valley", SI: "වන ලැහැබ මැදින් පාලම දෙසට ඇදෙන දේශීය ත්‍රිරෝද රථයක්" }
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
    id: "rev1",
    author: "Amélie Laurent",
    country: "France",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
    rating: 5,
    date: "May 25, 2026",
    comment: {
      EN: "Simply breathtaking! Standing below the bridge as the 9:30 AM train slowly passed over it, with the morning mist drifting through the pine forest... a true core memory of Sri Lanka.",
      SI: "විස්තර කළ නොහැකි තරම් සුන්දරයි! උදෑසන 9:30 ට පමණ මීදුම් රහිත නිදහස් අහස යට පාලම මතින් කෝච්චිය යන විට, පයිනස් කැළයෙන් මතුවන මීදුම... ඇත්තෙන්ම අමතක නොවන අත්දැකීමක්."
    }
  },
  {
    id: "rev2",
    author: "Marcus Chen",
    country: "Singapore",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
    rating: 5,
    date: "May 12, 2026",
    comment: {
      EN: "The walk from Ella Town on the railway track itself is an adventure. Check the train timing scheduler at the station before you walk so you can catch the historic locomotive at the perfect time.",
      SI: "ඇල්ල නගරයේ සිට දුම්රිය මාර්ගය දිගේ පයින් යාම වෙනමම වික්‍රමයකි. කෝච්චිය පාලම හරහා යන නිවැරදි වේලාව දුම්රිය ස්ථානයෙන් කලින් අසා දැනගැනීම වඩාත් සුදුසුය."
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
    id: "bridge",
    name: { EN: "Nine Arch Bridge Peak", SI: "ආරුක්කු නවයේ පාලම" },
    coordinates: { x: 50, y: 55 },
    description: {
      EN: "The 30-meter high structural wonder built between Ella and Demodera stations.",
      SI: "ඇල්ල සහ දෙමෝදර දුම්රිය ස්ථාන අතර පිහිටි මීටර් 30ක් උසැති අලංකාර ගල් පාලම."
    }
  },
  {
    id: "ella-station",
    name: { EN: "Ella Railway Station", SI: "ඇල්ල දුම්රිය ස්ථානය" },
    coordinates: { x: 20, y: 30 },
    description: {
      EN: "The misty highland mountain train depot where journeys begin.",
      SI: "නැවුම් කඳුකර සුළඟ හමන ඓතිහාසික ඇල්ල දුම්රිය නැවතුම්පොළ."
    }
  },
  {
    id: "demodera-loop",
    name: { EN: "Demodera Railway Loop", SI: "දෙමෝදර දුම්රිය වටය" },
    coordinates: { x: 80, y: 25 },
    description: {
      EN: "Unique engineering marvel where the train loops under its own station.",
      SI: "දුම්රිය තමා පසුකර ආ ස්ථානයට යටින් නැවත ගමන් කරන විස්මිත දුම්රිය වටය."
    }
  },
  {
    id: "viewpoint",
    name: { EN: "Asanka Forest Viewpoint", SI: "අසංක වන දර්ශන කලාපය" },
    coordinates: { x: 65, y: 75 },
    description: {
      EN: "Ideal spot surrounded by trees to capture side-angle curves of passing train.",
      SI: "දුම්රිය වක්‍ර වී ගමන් කරන විලාසය පසෙකින් ඡායාරූප ගැනීමට හොඳම තැන."
    }
  }
];

export default function TrainPassageDetail({ language, onBack }: TrainPassageDetailProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [activeMapSpot, setActiveMapSpot] = useState<MapSpot>(MAP_SPOTS[0]);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookingSuccess, setIsBookingSuccess] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const keyHighlights = [
    {
      title: { EN: "Pure Colonial Stone Masonry", SI: "සම්පූර්ණ ගල් බැඳීමේ තාක්ෂණය" },
      desc: { 
        EN: "Constructed entirely from solid stone bricks, cement, and rock ballast. No steel blocks or metal girders are used in its towering frame.", 
        SI: "වානේ හෝ යකඩ බාල්ක එකක්වත් නොමැතිව කළුගල් හා සිමෙන්ති පමණක් භාවිතා කර ඉදිකර ඇත." 
      },
      icon: Landmark
    },
    {
      title: { EN: "The Legendary Demodera Loop", SI: "දෙමෝදර පරම්පරාගත රේල් ගැටය" },
      desc: { 
        EN: "The rail line runs in a spiral loop around a mountain peak, turning 360 degrees to descend and run beneath its own tunnel.", 
        SI: "කන්ද වටා වටයක් රවුමට කැරකී දුම්රිය මාර්ගය තමාටම යටින් දිවෙන සුප්‍රසිද්ධ දුම්රිය ඉදිකිරීමකි." 
      },
      icon: Train
    },
    {
      title: { EN: "Verdant Tea Panoramas", SI: "සශ්‍රීක තේ වතු දසුන්" },
      desc: { 
        EN: "Draped in rolling mountains of world-renowned Ceylon Tea fields. Watch estate workers hand-combing the golden buds.", 
        SI: "ලොව ප්‍රකට සෙලෝන් තේ වතු යායවල් වලින් වට වී ඇත. දළු නෙළන කතුන්ගේ සොඳුරු දසුන් මෙහිදී දැකගත හැක." 
      },
      icon: Sprout
    },
    {
      title: { EN: "Meditation and Mist", SI: "මීදුම සහ පාරිසරික නිහඬතාවය" },
      desc: { 
        EN: "As morning train horn echoes fade, a deep forest silence returns, with misty clouds rolling through the pine valley.", 
        SI: "දුම්රිය නළා හඬ මැකී ගිය පසු පරිසරය පුරා පැතිරෙන නිහඬතාවයත්, මීදුම් රැලිවල සොඳුරු පහසත් විඳිය හැක." 
      },
      icon: Compass
    }
  ];

  return (
    <div id="train-passage-detail-root" className="min-h-screen bg-stone-50 select-none pb-24">
      {/* 1. Header Hero with Large Striking Image */}
      <div id="tp-hero" className="relative h-[65vh] w-full bg-[#0d1009] overflow-hidden flex items-end">
        <img 
          src="https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1920&q=85"
          alt="Nine Arch Bridge Panorama"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        {/* Top bar for going back */}
        <div className="absolute top-10 left-6 md:left-10 z-[70] flex items-center gap-4">
          <button 
            id="tp-back-btn"
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
        <div id="tp-hero-text" className="relative z-20 max-w-7xl mx-auto px-6 md:px-10 pb-12 w-full">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400 text-stone-950 font-black text-[8px] uppercase tracking-widest shadow-md mb-4 animate-bounce">
            <Award size={10} />
            {language === 'EN' ? 'TOP-LISTED EXPERIENCE' : 'ප්‍රමුඛතම සංචාරයක්'}
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white font-bold max-w-3xl leading-tight drop-shadow-lg uppercase">
            {language === 'EN' ? 'The Iconic Misty Train Passage' : 'මීදුමෙන් වෙළුණු දුම්රිය චාරිකාව'}
          </h1>
          
          <div className="flex items-center gap-3 text-stone-200 mt-4 text-xs md:text-sm font-semibold drop-shadow-md">
            <MapPin size={16} className="text-amber-400" />
            <span>Nine Arch Bridge, Ella, Sri Lanka</span>
            <span className="text-white/40">|</span>
            <div className="flex text-amber-400">★★★★★</div>
            <span className="text-white font-bold">5.0 (4,890 voyagers)</span>
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
                  ? "The spectacular train journey winding through Sri Lanka's high country is universally praised as one of the most romantic and visually stunning rail passages on planet Earth. Slowing down to a slow, rhythmically therapeutic cargo pace, the steel wheels curve through dense rainforests, lush valleys, and sweeping mist-clad tea fields."
                  : "ශ්‍රී ලංකාවේ මධ්‍යම කඳුකරයේ තේ වතු මැදින් දිවෙන දුම්රිය ගමන මුළු මහත් ලෝකයේම පවතින සුන්දරතම දුම්රිය ගමනක් ලෙස මුළු ලොවම අවිවාදයෙන් පිළිගනී. තුරුලතා මැදින්, මීදුම් සේල අතරින් සෙමෙන් ඇදෙන දුම්රිය, සංචාරකයන්ගේ හදවත් සනසාලන සුන්දර අත්දැකීමකි."}
              </p>
              <p>
                {language === 'EN'
                  ? "The absolute climax of this railway route is the Nine Arch Bridge, hidden in the mountain forests between Ella and Demodera stations. Towering 30 meters above the dense wilderness, this magnificent viaduct of stone and brick was constructed by local builders under British colonial guidance during World War I."
                  : "මෙම මාර්ගයේ ඇති සුවිශේෂීම සංකේතය වනුයේ ඇල්ල සහ දෙමෝදර දුම්රිය ස්ථාන අතර පිහිටි ආරුක්කු නවයේ පාලමයි. මීටර් 30ක් පමණ උසින් පිහිටි මෙම පාලම පළමු ලෝක යුද්ධ සමයේදී, වානේ හිඟ වීම නිසා ශ්‍රී ලාංකේය ගෘහ නිර්මාණ ශිල්පීන් විසින් කළුගල් හා ගඩොල් පමණක් යොදාගෙන නිමකර ඇත."}
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

          {/* Section: Interactive Regional Map */}
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-stone-200/60 shadow-sm space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <h2 className="text-2xl font-bold font-serif text-stone-900 flex items-center gap-3">
                  <MapIcon className="text-emerald-500" size={24} />
                  {language === 'EN' ? 'Passage Geography' : 'භූගෝලීය සිතියම'}
                </h2>
                <p className="text-xs text-stone-400 font-bold uppercase tracking-wider">
                  {language === 'EN' ? 'Interactive Scenic Spots' : 'අන්තර්ක්‍රියාකාරී සොඳුරු ස්ථාන'}
                </p>
              </div>
              <div className="flex gap-2 flex-wrap">
                {MAP_SPOTS.map(s => (
                  <button
                    key={s.id}
                    onClick={() => setActiveMapSpot(s)}
                    className={`px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-wider transition-all border ${
                      activeMapSpot.id === s.id 
                        ? 'bg-stone-950 text-white border-transparent shadow' 
                        : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    {s.id === 'bridge' ? 'Bridge' : s.id === 'ella-station' ? 'Ella' : s.id === 'demodera-loop' ? 'Loop' : 'Viewpoint'}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Interactive SVG/Stash Map representation */}
            <div className="relative aspect-[16/9] w-full rounded-2xl bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100 overflow-hidden border border-emerald-100/60 shadow-inner flex items-center justify-center">
              {/* Backing contours */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-200/10 via-transparent to-transparent opacity-60" />
              <div className="absolute top-10 left-20 w-16 h-16 rounded-full border border-teal-500/10 animate-ping" />
              
              {/* S-shaped railway track SVG overlay */}
              <svg className="absolute inset-0 w-full h-full p-4 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path 
                  d="M 10 30 Q 30 15 50 50 T 90 70" 
                  fill="none" 
                  stroke="#78716c" 
                  strokeWidth="0.8" 
                  strokeDasharray="2, 1.5" 
                  className="opacity-70"
                />
                <path 
                  d="M 10 30 Q 30 15 50 50 T 90 70" 
                  fill="none" 
                  stroke="#ea580c" 
                  strokeWidth="0.2" 
                  className="opacity-50 animate-pulse"
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
                        isActive ? 'bg-[#0EA5E9] scale-110' : 'bg-[#ea580c] group-hover:bg-[#ea580c]/80'
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
                  <div className="bg-amber-100 px-2 py-0.5 rounded text-[8px] font-black text-amber-800 uppercase tracking-wider">
                    {language === 'EN' ? 'GEOGRAPHIC NODE' : 'භූගෝලීය ලක්ෂ්‍යය'}
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
              {/* Info Card: Best Time */}
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
                      ? "6:00 AM - 8:30 AM. Perfect light, morning forest mist, and fewer tourist crowds."
                      : "පෙරවරු 6:00 - 8:30. ඡායාරූප ගැනීම සඳහා ප්‍රශස්ත ආලෝකය ලැබෙන අතර සංචාරක තදබදය අඩුය."}
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
                      ? "A lush 20-minute jungle walk through pine trails starting from Ella town, or a dirt-lane tuk-tuk."
                      : "ඇල්ල නගරයේ සිට කැලෑ මැදින් ඇති පීලි පාර දිගේ විනාඩි 20 ක පයින් යාමක් හෝ ත්‍රිරෝද රථයකින් පැමිණීම."}
                  </p>
                </div>
              </div>

              {/* Info Card: Nearby Hotspots */}
              <div className="flex gap-4 items-start p-3 hover:bg-stone-50/50 rounded-xl transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#0EA5E9]/5 flex items-center justify-center text-[#0EA5E9] shrink-0">
                  <Train size={18} />
                </div>
                <div className="space-y-1">
                  <h5 className="font-bold text-xs text-stone-850 uppercase tracking-widest">
                    {language === 'EN' ? 'Connected Attractions' : 'අවට විශේෂ ස්ථාන'}
                  </h5>
                  <p className="text-stone-500 text-xs md:text-sm font-light">
                    {language === 'EN' 
                      ? "Little Adam's Peak, Demodera Railway Deck, Ella Rock, and the beautiful Ravana Pool Club."
                      : "පුංචි ශ්‍රී පාදය, දෙමෝදර දුම්රිය ස්ථානය, ඇල්ල කන්ද සහ සුප්‍රකට රාවණා දියඇල්ල."}
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
              {language === 'EN' ? 'Adventure Guided Packages' : 'සංවිධානාත්මක සංචාර ඇසුරුම්'}
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
                  {language === 'EN' ? 'Passage Guided Reservation Pending' : 'සංචාරක වෙන් කිරීම් ලියාපදිංචි කරන ලදී'}
                </h4>
                <p className="text-stone-500 text-xs font-light leading-relaxed">
                  {language === 'EN' 
                    ? "Your reservation query is noted. Our local high-country voyager guides will connect on your registered email shortly!"
                    : "ඔබගේ වෙන්කිරීමේ ඉල්ලීම සටහන් කරගන්නා ලදී. අපගේ දේශීය මඟපෙන්වන්නන් ඉක්මනින් ඔබ හා සම්බන්ධ වනු ඇත!"}
                </p>
                <button 
                  onClick={() => {
                    setIsBookingSuccess(false);
                    setSelectedPackage(null);
                  }}
                  className="px-4 py-1.5 bg-stone-900 text-white rounded-lg text-[9px] font-bold uppercase tracking-wider hover:bg-stone-800 transition"
                >
                  {language === 'EN' ? 'Close Window' : 'වසා දමන්න'}
                </button>
              </motion.div>
            ) : (
              <div className="space-y-4">
                {/* Package 1 */}
                <div 
                  onClick={() => setSelectedPackage('sunset')}
                  className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                    selectedPackage === 'sunset' 
                      ? 'bg-amber-50/40 border-amber-400 shadow-sm' 
                      : 'border-stone-100 hover:border-stone-200 bg-stone-50/20'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-stone-900 text-sm">Sunrise Explorer Ridge Hike</h4>
                      <p className="text-stone-500 text-xs font-light mt-1">
                        {language === 'EN' 
                          ? "Includes private pathfinder guide, fresh organic local tea, and vintage camera spot tips."
                          : "පෞද්ගලික මඟපෙන්වන්නෙකු, පොල් කිරි තේ සහ ඡායාරූප සේවා ඇතුළත් වේ."}
                      </p>
                    </div>
                    <span className="text-amber-600 font-extrabold text-sm font-mono shrink-0">$25</span>
                  </div>
                </div>

                {/* Package 2 */}
                <div 
                  onClick={() => setSelectedPackage('carriage')}
                  className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                    selectedPackage === 'carriage' 
                      ? 'bg-amber-50/40 border-amber-400 shadow-sm' 
                      : 'border-stone-100 hover:border-stone-200 bg-stone-50/20'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-stone-900 text-sm">Colonial Observatory Ticket & Transfers</h4>
                      <p className="text-stone-500 text-xs font-light mt-1">
                        {language === 'EN' 
                          ? "Pre-booked 1st class panoramic deck carriage ticket, transfers, and bridge history booklet."
                          : "පළමු පන්තියේ නැරඹුම් මැදිරි ප්‍රවේශ පත්‍ර, වාහන පහසුකම් සහ පාලමේ ඉතිහාස සංග්‍රහය."}
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
                      ? 'bg-[#0EA5E9] hover:bg-[#0284c7] text-white shadow-lg active:scale-98' 
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
                5.0
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
