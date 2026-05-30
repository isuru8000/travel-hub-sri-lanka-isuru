import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Language } from '../types';
import { Star, MapPin, Sparkles, Utensils, Compass, ArrowLeft, Heart, Award } from 'lucide-react';
import SpotDetail from './SpotDetail';

interface TopRatedProps {
  language: Language;
  onBack: () => void;
}

interface TopSpot {
  id: string;
  name: { EN: string; SI: string };
  rating: number;
  reviewsCount: number;
  description: { EN: string; SI: string };
  image: string;
  location: string;
}

interface TopTaste {
  id: string;
  name: { EN: string; SI: string };
  rating: number;
  reviewsCount: number;
  description: { EN: string; SI: string };
  image: string;
  badge: { EN: string; SI: string };
  category: string;
}

const TOP_SPOTS: TopSpot[] = [
  {
    id: "train-passage",
    name: { EN: "The Iconic Misty Train Passage", SI: "මීදුම් පිරුණු දුම්රිය චාරිකාව" },
    rating: 5.0,
    reviewsCount: 4890,
    location: "Ella (Nine Arch Bridge)",
    description: { 
      EN: "Witnessing a colonial-era train slowly curve through the lush green valley of Ella over the architectural marvel of the Nine Arch Bridge, entirely surrounded by mountain mist.", 
      SI: "ඇල්ල කඳුකරයේ ලඳු කැලෑ සහ තේ වතු මැදින් ආරුක්කු නවයේ පාලම මතින් මීදුම් සේල මධ්‍යයේ ඇදෙන යටත්විජිත යුගයේ දුම්රියක අසිරිය විඳගැනීම." 
    },
    image: "https://i.pinimg.com/736x/1d/bf/54/1dbf54eb42d1b01d22d3bd9f278e15b1.jpg"
  },
  {
    id: "knuckles-trek",
    name: { EN: "The UNESCO Cloud Forest Trek", SI: "නකල්ස් යුනෙස්කෝ වනාන්තර සංචාරය" },
    rating: 4.9,
    reviewsCount: 1560,
    location: "Knuckles Mountain Range",
    description: { 
      EN: "Hiking through the mystical, untouched cloud forests of Knuckles. A paradise of rich biodiversity, hidden waterfalls, and dramatic viewpoints designed for true nature explorers.", 
      SI: "ජෛව විවිධත්වයෙන් සරු, දියඇලි සහ මනරම් කඳු මුදුන් සහිත නකල්ස් කඳු පන්තියේ නොයිඳුල් වනපෙත හරහා යන සොඳුරු පා ගමන." 
    },
    image: "https://i.pinimg.com/1200x/de/fc/01/defc011f1dfe36aa3317523ad32561d4.jpg"
  },
  {
    id: "wildlife-safari",
    name: { EN: "The Ultimate Coastal Wildlife Safari", SI: "මුහුදුබඩ වනජීවී සෆාරි අත්දැකීම" },
    rating: 4.9,
    reviewsCount: 3240,
    location: "Yala National Park",
    description: { 
      EN: "An exhilarating safari through a unique dry-zone forest bordering the Indian Ocean, offering the world's best chance to spot wild leopards, massive elephant herds, and sloth bears.", 
      SI: "ඉන්දියන් සාගරයට මායිම් වූ යාල ජාතික වනෝද්‍යානයේ සැරිසරන වන දිවියන්, අලි රංචු සහ වලසුන් සියැසින් දැකගැනීමට ලැබෙන වනචාරී අත්දැකීමක්." 
    },
    image: "https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "nilambe-meditation",
    name: { EN: "Silent Mountaintop Mindfulness", SI: "නිලම්බේ නිහඬ මනෝභ්‍යාස මධ්‍යස්ථානය" },
    rating: 5.0,
    reviewsCount: 1120,
    location: "Nilambe Meditation Centre",
    description: { 
      EN: "Immersing yourself in a profound life-changing silent meditation retreat. Situated on a serene, misty peak, it offers pure tranquility, daily yoga, and a mindful organic lifestyle.", 
      SI: "මීදුම් සළු පොරවන කඳු මුදුනක පිහිටි නිසංසල පරිසරයක යෝග සාධන, නිර්මාංශ ආහාර රටා සමගින් ජීවිතය වෙනස් කරන අසිරිමත් භාවනා අත්දැකීමක්." 
    },
    image: "https://images.unsplash.com/photo-1518098268026-4e43a1a009de?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "ruwanweli-meditation",
    name: { EN: "Evening Spiritual Walking Meditation", SI: "රුවන්වැලි මහා සෑ සන්ධ්‍යා වන්දනාව" },
    rating: 5.0,
    reviewsCount: 4350,
    location: "Ruwanweli Maha Seya (Anuradhapura)",
    description: { 
      EN: "Experiencing deep inner peace by walking barefoot on the vast, cooling granite floor of a 2,000-year-old giant stupa, surrounded by soft oil lamps, chanting, and a calming spiritual atmosphere.", 
      SI: "වසර දෙදහසක් පැරණි රුවන්වැලි මහා සෑ රඳුන්ගේ සලපතල මළුවේ පහන් ආලෝක සහ ධර්ම ශබ්ද මධ්‍යයේ පාවහන් රහිතව ඇවිද යමින් සිතට සැනසුම ළඟා කරගැනීම." 
    },
    image: "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "ayurveda-healing",
    name: { EN: "Traditional Ayurveda & Yoga Healing", SI: "දේශීය ආයුර්වේද සහ යෝගා සුවතාවය" },
    rating: 4.8,
    reviewsCount: 1840,
    location: "Rural Wellness Sanctuaries",
    description: { 
      EN: "Completely rejuvenating the mind and body with ancient, authentic holistic medicine, herbal steam baths, and sunrise yoga sessions set in peaceful, green paddy field environments.", 
      SI: "නැවුම් කුඹුරු යායකින් වට වූ පරිසරයක පැරණි ආයුර්වේද ප්‍රතිකාර, ඖෂධීය වාෂ්ප ස්නාන සහ හිරු උදාව සමග යෝග අභ්‍යාස මගින් කය හා මනස පූර්ණ සුවපත් කිරීම." 
    },
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "sigiriya-fortress",
    name: { EN: "The 5th-Century Royal Sky Fortress", SI: "පස්වන සියවසේ අහස් මාළිගය" },
    rating: 5.0,
    reviewsCount: 5670,
    location: "Sigiriya Ancient Citadel",
    description: { 
      EN: "Climbing a massive 200-meter-high sheer rock fortress rising from the jungle, exploring ancient artistic frescoes, and marveling at the oldest surviving royal water gardens in Asia.", 
      SI: "මීටර් 200ක් උසැති සීගිරි පර්වතය මුදුනෙහි පිහිටි පැරණි කලාත්මක බිතුසිතුවම් සහ ආසියාවේ ඉපැරණිතම ජල උද්‍යාන සහිත මාලිගා සංකීර්ණය ගවේෂණය." 
    },
    image: "https://images.unsplash.com/photo-1588598130782-690a298573ec?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "galle-fortress",
    name: { EN: "The Living Colonial Ocean Fortress", SI: "ගාලු කොටුවේ යටත්විජිත පියසටහන්" },
    rating: 4.8,
    reviewsCount: 3950,
    location: "Galle Dutch Fort",
    description: { 
      EN: "Strolling through vibrant, cobblestone streets lined with century-old Dutch architecture, cozy cafes, and artistic boutiques, all protected by a massive rampart overlooking the ocean waves.", 
      SI: "ලන්දේසි ගෘහ නිර්මාණ ශිල්පයෙන්, අලංකාර කැෆේ සහ කලාගාරවලින් සමන්විත, මුහුදු රළ පහර වදින මහා පවුරකින් වට වූ ඓතිහාසික ගාලු කොටුවේ සැරිසැරීම." 
    },
    image: "https://images.unsplash.com/photo-1563294371-d64e0da193f4?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "sunset-hill",
    name: { EN: "The Golden Sunset Dome", SI: "මිරිස්ස පොල්ගස් කන්දේ රන්වන් සැඳෑව" },
    rating: 4.9,
    reviewsCount: 2280,
    location: "Coconut Tree Hill (Mirissa)",
    description: { 
      EN: "Standing on a unique red-cliff headland jutting into the sea, framed by a perfectly symmetrical grove of towering coconut palms as the sky turns into a brilliant shade of orange.", 
      SI: "මුහුද දෙසට නෙරා ගිය රතු පස් කන්දක ඉහළට විහිදුණු පොල්ගස් යායක් අතරින් ක්ෂිතිජය රන්වන් සහ තැඹිලි පාටින් වර්ණවත් වන අසිරිමත් සැඳෑ දර්ශනයක්." 
    },
    image: "https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?auto=format&fit=crop&w=1200&q=80"
  }
];

const TOP_TASTES: TopTaste[] = [
  {
    id: "spice-feast",
    name: { EN: "The Traditional 10-Spice Feast", SI: "සාම්ප්‍රදායික දස-කුළුබඩු භෝජනය" },
    rating: 5.0,
    reviewsCount: 4950,
    category: "Signature Feast",
    description: { 
      EN: "A culinary journey celebrating wholesome local red rice served with an array of colorful, spice-infused curries, slow-cooked in traditional clay pots over open firewood.", 
      SI: "මැටි වළඳේ දර ලිපේ පිසින ලද සුවඳැති රතු බත් සහ විවිධ දේශීය කුළුබඩු රැගත් ව්‍යංජන රැසක් සහිත ශ්‍රී ලාංකේය පාරම්පරික අසිරිමත් භෝජන සංග්‍රහය." 
    },
    image: "https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=1200&q=80",
    badge: { EN: "National Heritage", SI: "ජාතික උරුමය" }
  },
  {
    id: "kottu-anthem",
    name: { EN: "The Rhythmic Street Food Anthem", SI: "ලාලිත්‍යවත් කොත්තු රොටි සංගීතය" },
    rating: 4.9,
    reviewsCount: 5120,
    category: "Street Legend",
    description: { 
      EN: "Watching local chefs rhythmically chop flatbread, fresh vegetables, eggs, and rich gravies with metal blades on hot griddles, creating Sri Lanka's ultimate sensory street food experience.", 
      SI: "නැවුම් එළවළු, බිත්තර, රොටි සහ රසවත් හොදි එක්කර රත් වූ යකඩ තැටියක් මත ලෝහ තල දෙකකින් තළමින් ශබ්ද නඟා සාදන ලංකාවේ සුප්‍රසිද්ධම වීදි ආහාර අත්දැකීම." 
    },
    image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=1200&q=80",
    badge: { EN: "Street Favorite", SI: "වීදි ආහාර ප්‍රියතමයා" }
  },
  {
    id: "crispy-hopper",
    name: { EN: "The Velvet Center Crispy Hopper", SI: "කරකුරු ගෑවෙන මෘදු ආප්ප" },
    rating: 4.9,
    reviewsCount: 4210,
    category: "Breakfast Specialty",
    description: { 
      EN: "Savoring live-tossed, bowl-shaped rice flour crepes featuring paper-thin crispy edges and a soft, fluffy coconut milk center, perfectly paired with fiery, fresh lunu miris paste.", 
      SI: "පොල් කිරි සහ සහල් පිටි මිශ්‍රණයෙන් තැටියක සාදන, වටේ කරකුරු ගෑවෙන අතර මැද කොටස ඉතාම මෘදු වූ, ඵ් සමග කටට සැර ලුණුමිරිස් එක්කර රසවිඳින සම්ප්‍රදායික ආප්ප වේල." 
    },
    image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=1200&q=80",
    badge: { EN: "Breakfast Classic", SI: "උදෑසන ප්‍රියතමය" }
  }
];

export default function TopRated({ language, onBack }: TopRatedProps) {
  const [filter, setFilter] = useState<'all' | 'spots' | 'tastes'>('all');
  const [selectedSpotId, setSelectedSpotId] = useState<string | null>(null);

  if (selectedSpotId) {
    return <SpotDetail spotId={selectedSpotId} language={language} onBack={() => setSelectedSpotId(null)} />;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <div id="top-rated-page-root" className="min-h-screen bg-stone-50 select-none pb-24">
      {/* Editorial Header Section */}
      <div id="top-rated-hero" className="relative h-[55vh] flex items-center justify-center overflow-hidden bg-[#0c0f0a]">
        {/* Ambient Overlay Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-85 transition-transform duration-[12000ms]"
          style={{ backgroundImage: `url('https://i.pinimg.com/1200x/2e/ee/56/2eee566424c1f35fbeacf85496b4b6e7.jpg')` }}
        />
        {/* Smooth gradual fade on the bottom 50% to dissolve into the page background without sharp cuts */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-stone-50 via-stone-50/70 via-stone-50/20 to-transparent" />
        
        {/* Back Button */}
        <div id="top-rated-back-container" className="absolute top-10 left-6 md:left-10 z-[70]">
          <button 
            id="top-rated-back-btn"
            onClick={onBack} 
            className="flex items-center gap-3 px-6 py-3.5 bg-white/90 backdrop-blur-xl border border-gray-100 text-stone-900 rounded-full font-black text-[10px] uppercase tracking-[0.4em] hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-xl group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform text-[#0EA5E9]" /> 
            {language === 'EN' ? 'Home' : 'මුලට'}
          </button>
        </div>

        <div className="relative text-center space-y-6 px-6 max-w-4xl pt-12">
          <div className="flex flex-col items-center gap-3">
            <div id="handshake" className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-white text-[9px] font-black uppercase tracking-[0.4em] shadow-lg">
              <Award size={14} className="text-amber-400 animate-pulse" />
              {language === 'EN' ? 'REVENUE _ ELITE _ HANDSHAKE' : 'ප්‍රමුඛතම සංරක්ෂණ මණ්ඩලය'}
            </div>
            <div className="h-8 w-[1px] bg-gradient-to-b from-amber-400 to-transparent"></div>
          </div>
          
          <h1 id="top-rated-main-heading" className="text-3xl md:text-5xl font-serif text-white tracking-tight leading-tight uppercase font-medium py-10">
            {language === 'EN' 
              ? "Sri Lanka's Top Rated: Iconic Flavors & Destinations" 
              : "ශ්‍රී ලංකාවේ විශිෂ්ටතම: ප්‍රසිද්ධ රසයන් සහ සංචාරක ස්ථාන"}
          </h1>
          
          <p className="text-stone-300 max-w-2xl mx-auto text-sm md:text-base font-light italic leading-relaxed">
            {language === 'EN' 
              ? "Voted by millions of global voyagers: Discover the true architectural wonders and culinary masterpieces of the Pearl of the Indian Ocean." 
              : "ලොව පුරා මිලියන සංඛ්‍යාත ගවේෂකයන් විසින් තේරූ: ඉන්දියන් සාගරයේ මුතු ඇටයේ සුවිශේෂීම සංස්කෘතික නවාතැන් සහ ප්‍රණීත ආහාර පාන මනාව අත්විඳින්න."}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 -mt-10 relative z-10 space-y-16">
        {/* Navigation Selector */}
        <div id="filter-tabs-wrapper" className="flex justify-center">
          <div id="filter-tabs-container" className="bg-white/95 backdrop-blur-xl border border-stone-200/60 p-2 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.06)] flex gap-2 overflow-x-auto max-w-full">
            <button
              id="tab-all"
              onClick={() => setFilter('all')}
              className={`flex items-center gap-2.5 px-6 py-3.5 rounded-[2rem] text-[9.5px] font-black uppercase tracking-widest transition-all ${
                filter === 'all'
                  ? 'bg-black text-white shadow-lg shadow-black/20'
                  : 'text-stone-500 hover:text-black hover:bg-stone-100'
              }`}
            >
              <Compass size={14} className={filter === 'all' ? 'text-amber-400' : ''} />
              {language === 'EN' ? 'All Top Rated' : 'සියලුම විශිෂ්ටතම'}
            </button>
            <button
              id="tab-spots"
              onClick={() => setFilter('spots')}
              className={`flex items-center gap-2.5 px-6 py-3.5 rounded-[2rem] text-[9.5px] font-black uppercase tracking-widest transition-all ${
                filter === 'spots'
                  ? 'bg-black text-white shadow-lg shadow-black/20'
                  : 'text-stone-500 hover:text-black hover:bg-stone-100'
              }`}
            >
              <MapPin size={14} className={filter === 'spots' ? 'text-amber-400' : ''} />
              {language === 'EN' ? 'Signature Spots' : 'ප්‍රකට ස්ථාන'}
            </button>
            <button
              id="tab-tastes"
              onClick={() => setFilter('tastes')}
              className={`flex items-center gap-2.5 px-6 py-3.5 rounded-[2rem] text-[9.5px] font-black uppercase tracking-widest transition-all ${
                filter === 'tastes'
                  ? 'bg-black text-white shadow-lg shadow-black/20'
                  : 'text-stone-500 hover:text-black hover:bg-stone-100'
              }`}
            >
              <Utensils size={14} className={filter === 'tastes' ? 'text-amber-400' : ''} />
              {language === 'EN' ? 'Iconic Flavors' : 'සුවිශේෂී රසයන්'}
            </button>
          </div>
        </div>

        {/* Dynamic Header for Section Grid */}
        <div className="text-center pt-4">
          <div className="inline-flex items-center gap-2.5 text-stone-400 font-black text-[10px] uppercase tracking-[0.5em] mb-3">
            <Sparkles size={12} className="text-[#F59E0B]" />
            {language === 'EN' ? "SRI LANKA'S SIGNATURE TASTES & SPOTS" : "ශ්‍රී ලංකාවේ ප්‍රමුඛතම සලකුණු සහ රසයන්"}
          </div>
          <div className="w-16 h-1 bg-amber-400 mx-auto rounded-full"></div>
        </div>

        {/* Main Layout containing signature tastes & spots */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 pb-16"
          >
            {/* 1. Signature Spots Category */}
            {(filter === 'all' || filter === 'spots') &&
              TOP_SPOTS.map((spot, index) => {
                const isClickable = true;
                return (
                  <motion.div
                    id={`spot-card-${spot.id}`}
                    key={spot.id}
                    variants={itemVariants}
                    onClick={() => {
                      if (isClickable) {
                        setSelectedSpotId(spot.id);
                        window.scrollTo({ top: 0, behavior: 'instant' });
                      }
                    }}
                    className={`bg-white rounded-3xl border border-stone-200/50 shadow-sm overflow-hidden group flex flex-col hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 ${
                      isClickable ? 'cursor-pointer border-sky-100 ring-1 ring-sky-500/5' : ''
                    }`}
                  >
                    <div className="relative aspect-[16/11] overflow-hidden bg-stone-100">
                      <img
                        src={spot.image}
                        alt={spot.name[language]}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-[6000ms] group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4 flex gap-1.5 bg-black/40 backdrop-blur-md border border-white/10 px-3.5 py-1.5 rounded-full text-white text-[8px] font-black uppercase tracking-widest items-center">
                        <MapPin size={10} className="text-amber-400" />
                        {spot.location}
                      </div>
                      {/* Stars visual indicators */}
                      <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-2xl flex items-center gap-1 shadow-md">
                        <div className="flex text-amber-500 text-xs shadow-none">★★★★★</div>
                        <span className="text-[10px] font-bold text-stone-800 ml-1">{spot.rating.toFixed(1)}</span>
                      </div>
                    </div>

                    <div className="p-6 md:p-8 flex-grow flex flex-col justify-between space-y-4">
                      <div className="space-y-3">
                        <h3 className="text-xl font-bold font-serif text-stone-900 leading-tight group-hover:text-[#0EA5E9] transition-colors">
                          {spot.name[language]}
                        </h3>
                        <p className="text-stone-500 text-xs md:text-sm font-light leading-relaxed">
                          {spot.description[language]}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-stone-100 flex justify-between items-center text-[10px] text-stone-400 font-bold uppercase tracking-wider">
                        <span>{spot.reviewsCount.toLocaleString()} {language === 'EN' ? 'voyagers' : 'සංචාරකයන්'}</span>
                        <span className="text-[#0EA5E9] tracking-widest font-black flex items-center gap-1.5 group-hover:text-amber-500 transition-colors">
                          {isClickable 
                            ? (language === 'EN' ? 'EXPLORE EXPERIENCE' : 'අත්දැකීම ගවේෂණය කරන්න') 
                            : (language === 'EN' ? 'VISITED NODE' : 'ගවේෂිතයි')}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })
            }

            {/* 2. Signature Tastes Category */}
            {(filter === 'all' || filter === 'tastes') &&
              TOP_TASTES.map((taste, index) => (
                <motion.div
                  id={`taste-card-${taste.id}`}
                  key={taste.id}
                  variants={itemVariants}
                  className="bg-white rounded-3xl border border-stone-200/50 shadow-sm overflow-hidden group flex flex-col hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5"
                >
                  <div className="relative aspect-[16/11] overflow-hidden bg-stone-100">
                    <img
                      src={taste.image}
                      alt={taste.name[language]}
                      className="w-full h-full object-cover transition-transform duration-[6000ms] group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 bg-amber-500 text-black font-black text-[8px] uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-md">
                      {taste.badge[language]}
                    </div>
                    {/* Stars visual indicators */}
                    <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-2xl flex items-center gap-1 shadow-md">
                      <div className="flex text-amber-500 text-xs shadow-none">★★★★★</div>
                      <span className="text-[10px] font-bold text-stone-800 ml-1">{taste.rating.toFixed(1)}</span>
                    </div>
                  </div>

                  <div className="p-6 md:p-8 flex-grow flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <span className="text-[9px] font-black text-amber-500 uppercase tracking-widest block font-sans">
                        {taste.category}
                      </span>
                      <h3 className="text-xl font-bold font-serif text-stone-900 leading-tight">
                        {taste.name[language]}
                      </h3>
                      <p className="text-stone-500 text-xs md:text-sm font-light leading-relaxed">
                        {taste.description[language]}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-stone-100 flex justify-between items-center text-[10px] text-stone-400 font-bold uppercase tracking-wider">
                      <span>{taste.reviewsCount.toLocaleString()} {language === 'EN' ? 'tasters' : 'රසවිඳින්නන්'}</span>
                      <span className="text-[#0EA5E9] tracking-widest font-black flex items-center gap-1.5 group-hover:text-amber-500 transition-colors">
                        {language === 'EN' ? 'SIGNATURE TASTE' : 'සුවිශේෂී රසය'}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))
            }
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
