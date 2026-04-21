
import React, { useEffect, useState, useRef } from 'react';
import { Destination, Language, NearbyAttraction } from '../types';
import { DESTINATIONS, UI_STRINGS } from '../constants';
import AboutTemple from './AboutTemple';
import AboutSigiriya from './AboutSigiriya';
import AboutUnawatuna from './AboutUnawatuna';
import AboutMirissa from './AboutMirissa';
import AboutHikkaduwa from './AboutHikkaduwa';
import AboutArugamBay from './AboutArugamBay';
import AboutNilaveli from './AboutNilaveli';
import AboutPasikudah from './AboutPasikudah';
import AboutRuwanwelisaya from './AboutRuwanwelisaya';
import AboutBuduruwagala from './AboutBuduruwagala';
import AboutMihintale from './AboutMihintale';
import AboutVatadage from './AboutVatadage';
import AboutGalleFort from './AboutGalleFort';
import AboutDambulla from './AboutDambulla';
import AboutAbhayagiriya from './AboutAbhayagiriya';
import AboutYapahuwa from './AboutYapahuwa';
import AboutJetavanaramaya from './AboutJetavanaramaya';
import AboutYala from './AboutYala';
import AboutUdawalawe from './AboutUdawalawe';
import AboutMinneriya from './AboutMinneriya';
import AboutWilpattu from './AboutWilpattu';
import AboutKumana from './AboutKumana';
import AboutSinharaja from './AboutSinharaja';
import AboutBundala from './AboutBundala';
import AboutPidurangala from './AboutPidurangala';
import AboutRiverston from './AboutRiverston';
import AboutHortonPlains from './AboutHortonPlains';
import AboutKnuckles from './AboutKnuckles';
import AboutElla from './AboutElla';
import AboutAdamsPeak from './AboutAdamsPeak';
import AboutDiyaluma from './AboutDiyaluma';
import AboutBambarakanda from './AboutBambarakanda';
import AboutRavanaFalls from './AboutRavanaFalls';
import AboutDunhindaFalls from './AboutDunhindaFalls';
import AboutBakersFalls from './AboutBakersFalls';
import AboutBopathElla from './AboutBopathElla';
import AboutStClairsFalls from './AboutStClairsFalls';
import AboutDevonFalls from './AboutDevonFalls';
import AboutLaxapanaFalls from './AboutLaxapanaFalls';
import AboutAberdeenFalls from './AboutAberdeenFalls';
import { 
  ArrowLeft,  
  MapPin, 
  Compass, 
  Clock, 
  Lightbulb, 
  Sparkles, 
  Landmark,
  Waves,
  Mountain,
  PawPrint,
  Activity,
  ShieldCheck,
  Gem,
  ArrowRight,
  Image as ImageIcon,
  Target,
  Database,
  Scan,
  Zap,
  Loader2,
  ExternalLink,
  Map as MapIcon,
  Navigation,
  BookOpen,
  Quote,
  Layers,
  Star,
  Droplets,
  Tent,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  CloudSun,
  Thermometer,
  Wind,
  Droplets as HumidityIcon,
  Car,
  Sun,
  Eye,
  RefreshCw,
  Orbit,
  Brain,
  Binary,
  Wand2,
  CheckCircle2,
  Radio,
  AlertTriangle,
  History,
  EyeOff,
  ThumbsUp,
  ThumbsDown
} from 'lucide-react';
import { db, auth } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { 
  getLankaGuideResponse, 
  GroundingLink, 
  getWeatherUpdate, 
  WeatherData, 
  getDestinationDeepDive, 
  DestinationDeepDive 
} from '../services/gemini';

import ReactMarkdown from 'react-markdown';
const Map = React.lazy(() => import('./Map'));
import { SEO } from './SEO';
import ReviewComponent from './ReviewComponent';

interface DestinationDetailProps {
  destination: Destination | null;
  language: Language;
  onBack: () => void;
  onSelect: (dest: Destination) => void;
}

const LiveWeatherWidget: React.FC<{ destinationName: string; language: Language }> = ({ destinationName, language }) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchWeather = async () => {
    setLoading(true);
    try {
      const data = await getWeatherUpdate(destinationName, language);
      setWeather(data);
    } catch (e) {
      console.error("Weather sync failed", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [destinationName, language]);

  return (
    <div className="fixed top-24 right-4 md:top-[110px] md:right-12 z-[90] animate-in slide-in-from-right-8 duration-1000">
      <div className={`relative p-[1px] rounded-full overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all ${weather?.isThrottled ? 'shadow-orange-500/20' : ''}`}>
        <div className={`absolute inset-[-400%] bg-[conic-gradient(from_0deg,transparent_0,transparent_40%,${weather?.isThrottled ? '#f97316' : '#0EA5E9'}_50%,transparent_60%,transparent_100%)] animate-border-spin opacity-40 group-hover:opacity-100 transition-opacity duration-700`} />
        
        <div className="relative bg-black/80 md:bg-black/40 md:backdrop-blur-2xl rounded-full px-4 py-2 md:px-5 md:py-2.5 flex items-center gap-3 md:gap-4 group transition-all hover:bg-black/60">
          {loading ? (
            <div className="flex items-center gap-2">
              <Loader2 size={12} className="animate-spin text-[#0EA5E9]" />
              <span className="text-[8px] font-black text-white/30 uppercase tracking-[0.2em]">{language === 'EN' ? 'Syncing...' : 'සම්බන්ධ වෙමින්...'}</span>
            </div>
          ) : weather ? (
            <>
              <div className="flex items-center gap-3">
                <div className="relative">
                  {weather.isThrottled ? <AlertTriangle size={18} className="text-orange-500 animate-pulse" /> : <CloudSun size={18} className="text-[#0EA5E9] group-hover:scale-110 transition-transform" />}
                  {!weather.isThrottled && <div className="absolute -top-0.5 -right-0.5 w-1 h-1 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]" />}
                </div>
                <div className="text-left">
                  <p className={`text-base font-heritage font-bold text-white leading-none tracking-tighter ${weather.isThrottled ? 'text-orange-200' : ''}`}>{weather.temp}</p>
                  <p className={`text-[7px] font-black uppercase tracking-widest leading-none mt-1 ${weather.isThrottled ? 'text-orange-500' : 'text-white/40'}`}>
                    {weather.isThrottled ? (language === 'EN' ? 'THROTTLED' : 'සීමා කර ඇත') : weather.condition}
                  </p>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-4 border-l border-white/5 pl-4">
                 <div className="flex items-center gap-1.5">
                   <HumidityIcon size={10} className="text-white/20" />
                   <span className="text-[9px] font-bold text-white/60">{weather.humidity}</span>
                 </div>
                 <div className="flex items-center gap-1.5">
                   <Wind size={10} className="text-white/20" />
                   <span className="text-[9px] font-bold text-white/60">{weather.windSpeed}</span>
                 </div>
              </div>
              <button 
                onClick={fetchWeather}
                className={`transition-all active:rotate-180 duration-500 ml-1 ${weather.isThrottled ? 'text-orange-500/40 hover:text-orange-500' : 'text-white/10 hover:text-[#0EA5E9]'}`}
                title={weather.isThrottled ? "Quota Exhausted - Please wait" : "Resync Weather"}
              >
                <RefreshCw size={12} />
              </button>
            </>
          ) : (
            <div className="flex items-center gap-2 text-white/10 text-[8px] font-black uppercase tracking-widest">
              <Radio size={12} className="animate-pulse" />
              No_Signal
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const DestinationDetail: React.FC<DestinationDetailProps> = ({ destination, language, onBack, onSelect }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [nearbyResults, setNearbyResults] = useState<GroundingLink[]>([]);
  const [isSyncingNearby, setIsSyncingNearby] = useState(false);
  const [deepDive, setDeepDive] = useState<DestinationDeepDive | null>(null);
  const [feedback, setFeedback] = useState<'up' | 'down' | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitFeedback = async (type: 'up' | 'down') => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'feedback'), {
        destination: destination?.name.EN,
        type,
        timestamp: new Date()
      });
      setFeedback(type);
    } catch (e) {
      console.error("Feedback submission failed", e);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollY / height);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (destination) {
      // Track viewed destination
      const viewed = JSON.parse(localStorage.getItem('viewedDestinations') || '[]');
      if (!viewed.includes(destination.id)) {
        viewed.push(destination.id);
        localStorage.setItem('viewedDestinations', JSON.stringify(viewed.slice(-10))); // Keep last 10
      }

      // Force scroll to top immediately
      if ((window as any).scrollToTop) {
        (window as any).scrollToTop();
      } else {
        window.scrollTo(0, 0);
        window.scrollTo({ top: 0, behavior: 'instant' });
      }

      const fetchNearby = async () => {
        setIsSyncingNearby(true);
        try {
          const prompt = `What are the top 5 historic sites or landmarks nearby ${destination.name.EN} in ${destination.location}, Sri Lanka? Provide verified Google Maps links.`;
          const response = await getLankaGuideResponse(prompt, language, undefined, false);
          if (typeof response !== 'string' && response.links) {
            setNearbyResults(response.links);
          }
          
          // Fetch deep dive using the structured API
          const deepDiveData = await getDestinationDeepDive(destination.name.EN, language);
          if (deepDiveData) {
            setDeepDive(deepDiveData);
          }
        } catch (e) {
          console.error("Nearby sync failed", e);
        } finally {
          setIsSyncingNearby(false);
        }
      };

      fetchNearby();
    }
  }, [destination, language]);

  const handleNearbyClick = (id: string) => {
    const fullDest = DESTINATIONS.find(d => d.id === id);
    if (fullDest) {
      onSelect(fullDest);
    }
  };

  if (!destination) return null;

  const categoryConfigs = {
    ancient: { icon: Landmark, color: '#F59E0B' },
    beach: { icon: Waves, color: '#0EA5E9' },
    wildlife: { icon: PawPrint, color: '#10B981' },
    mountains: { icon: Mountain, color: '#8B5CF6' },
    waterfalls: { icon: Droplets, color: '#3B82F6' },
    camping: { icon: Tent, color: '#059669' }
  };
  const config = categoryConfigs[destination.category] || { icon: Compass, color: '#0EA5E9' };
  const CatIcon = config.icon;

  const googleMapsIframeUrl = `https://www.google.com/maps?q=${encodeURIComponent(destination.name.EN + ' ' + destination.location + ' Sri Lanka')}&output=embed&z=14`;

  return (
    <div className="min-h-screen bg-[#f5f5f0] animate-in fade-in duration-1000 relative overflow-x-hidden font-serif text-[#2d2d2d]">
      {/* Fixed Background Image Layer */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.08] mix-blend-multiply"
        style={{ 
          backgroundImage: `url('https://i.pinimg.com/736x/5d/0d/ef/5d0def42d743d3e932b0b0095b12a61f.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />

      <SEO 
        title={destination.name[language]} 
        description={destination.shortStory[language]} 
        image={destination.image} 
        touristAttraction={{
          name: destination.name.EN,
          description: destination.shortStory.EN,
          image: destination.image,
          address: destination.location
        }}
      />
      <LiveWeatherWidget destinationName={destination.name.EN} language={language} />

      {/* Cinematic Hero */}
      <div className="relative h-[85vh] w-full overflow-hidden bg-[#1a1a1a]">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-70 transition-transform duration-[100ms] ease-out parallax-hero"
          style={{ 
            backgroundImage: `url(${destination.image})`,
            transform: `translateY(${scrollProgress * 200}px) scale(1.05)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f5f5f0] via-transparent to-black/40" />
        
        <div className="absolute top-0 left-0 right-0 p-4 md:p-12 z-50 flex justify-between items-center">
          <button onClick={onBack} className="flex items-center gap-2 md:gap-4 px-5 py-3 md:px-8 md:py-4 bg-[#5A5A40]/80 backdrop-blur-xl border border-white/20 text-white rounded-full font-bold text-[10px] md:text-[12px] uppercase tracking-[0.2em] md:tracking-[0.4em] hover:bg-[#5A5A40] transition-all group shadow-2xl active:scale-95">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform md:w-[18px] md:h-[18px]" /> 
            <span className="hidden sm:inline">{UI_STRINGS.returnToRegistry[language]}</span>
            <span className="sm:hidden">Back</span>
          </button>
        </div>

        <div className="absolute bottom-16 md:bottom-24 left-0 right-0 px-4 md:px-16 z-30">
          <div className="max-w-7xl mx-auto space-y-4 md:space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-4 md:gap-6">
               <div className="flex flex-wrap items-center gap-2 md:gap-4">
                 <div className="px-4 py-1.5 md:px-6 md:py-2 bg-[#5A5A40] text-white rounded-full text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] border border-white/10 shadow-xl">
                   ACTIVE NODE
                 </div>
                 <div className="px-4 py-1.5 md:px-6 md:py-2 bg-white/10 backdrop-blur-md text-white rounded-full text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] border border-white/20 flex items-center gap-2 md:gap-3 shadow-xl">
                   <CatIcon size={12} className="md:w-3.5 md:h-3.5" style={{ color: '#f5f5f0' }} />
                   {destination.category.toUpperCase()}
                 </div>
               </div>
            </div>
            
            <div className="space-y-2 md:space-y-4">
               <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-serif font-bold text-white leading-[0.85] tracking-tighter drop-shadow-2xl max-w-5xl uppercase">
                 {destination.name[language]}
               </h1>
               <div className="text-lg sm:text-xl md:text-3xl text-white/90 font-light italic border-l-[3px] md:border-l-[4px] pl-4 md:pl-8 max-w-3xl py-1 md:py-2 drop-shadow-lg" style={{ borderColor: '#5A5A40' }}>
                 {destination.shortStory[language]}
               </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
        
        {/* PRIMARY SECTION: ABOUT DESTINATION */}
        <section className="relative">
           
           {/* ROUND NEARBY ATTRACTIONS (PROXIMITY NODES) - MOVED TO TOP */}
           {destination.nearbyAttractions && destination.nearbyAttractions.length > 0 && (
            <div className="mb-20 space-y-12 animate-in slide-in-from-bottom-6 duration-700 bg-white/40 backdrop-blur-sm p-8 md:p-12 rounded-[3rem] border border-[#5A5A40]/10">
              <div className="flex items-center justify-between px-2">
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-[#5A5A40]/10 flex items-center justify-center text-[#5A5A40]">
                      <Target size={20} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-[#2d2d2d] uppercase tracking-tighter">
                      {language === 'EN' ? 'Nearby Places.' : 'ආසන්න ස්ථාන.'}
                    </h3>
                 </div>
              </div>

              <div className="flex overflow-x-auto no-scrollbar gap-6 md:gap-12 pb-6 px-2 scroll-smooth snap-x snap-mandatory">
                  {destination.nearbyAttractions.map((att, idx) => (
                    <div 
                      key={att.id} 
                      className="shrink-0 group cursor-pointer flex flex-col items-center gap-3 md:gap-4 snap-center"
                      onClick={() => handleNearbyClick(att.id)}
                    >
                      <div className="relative w-24 h-24 md:w-36 md:h-36">
                          <div className="absolute inset-[-4px] border border-dashed border-[#5A5A40]/20 rounded-full animate-spin-slow opacity-40 group-hover:opacity-100 group-hover:border-[#5A5A40] transition-all" />
                          <div className="relative w-full h-full rounded-full overflow-hidden shadow-xl border-2 border-white transition-all duration-700 group-hover:scale-110 group-hover:shadow-2xl">
                            <img src={att.image} className="w-full h-full object-cover transition-transform duration-[8000ms] group-hover:scale-110" alt="" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-20 group-hover:opacity-0 transition-opacity" />
                          </div>
                      </div>
                      <div className="text-center space-y-1 max-w-[100px] md:max-w-[140px]">
                          <h4 className="text-[10px] md:text-xs font-serif font-bold text-[#2d2d2d] uppercase tracking-tight leading-tight line-clamp-2 group-hover:text-[#5A5A40] transition-colors">{att.name[language]}</h4>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
           )}

           {/* MAIN CONTENT BLOCK */}
           <div className="flex flex-col gap-12 lg:gap-20 items-stretch">
              <div className="w-full space-y-12 md:space-y-20">

                 {/* 1. Long Narrative Section (About Destination) */}
                 <div className="space-y-8 md:space-y-12 relative bg-white/60 backdrop-blur-md p-8 md:p-16 rounded-[4rem] border border-[#5A5A40]/10 shadow-sm">
                    <div className="flex items-center gap-4 md:gap-6">
                        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl md:rounded-3xl flex items-center justify-center bg-[#5A5A40]/10 text-[#5A5A40] border border-[#5A5A40]/20`}>
                          <BookOpen size={24} className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <h3 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-[#2d2d2d] uppercase tracking-tighter">
                          {UI_STRINGS.masterArchive[language]} {destination.name[language]}
                        </h3>
                    </div>

                    {destination.id === 'kandy-temple' ? (
                       <AboutTemple language={language} />
                    ) : destination.id === 'sigiriya' ? (
                       <AboutSigiriya language={language} />
                    ) : destination.id === 'unawatuna' ? (
                       <AboutUnawatuna language={language} />
                    ) : destination.id === 'mirissa' ? (
                       <AboutMirissa language={language} />
                    ) : destination.id === 'hikkaduwa' ? (
                       <AboutHikkaduwa language={language} />
                    ) : destination.id === 'arugambay' ? (
                       <AboutArugamBay language={language} />
                    ) : destination.id === 'nilaveli' ? (
                       <AboutNilaveli language={language} />
                    ) : destination.id === 'pasikudah' ? (
                       <AboutPasikudah language={language} />
                    ) : destination.id === 'ruwanwelisaya' ? (
                       <AboutRuwanwelisaya language={language} />
                    ) : destination.id === 'buduruwagala' ? (
                       <AboutBuduruwagala language={language} />
                    ) : destination.id === 'mihintale' ? (
                       <AboutMihintale language={language} />
                    ) : destination.id === 'vatadage' ? (
                       <AboutVatadage language={language} />
                    ) : destination.id === 'galle-fort' ? (
                       <AboutGalleFort language={language} />
                    ) : destination.id === 'dambulla' ? (
                       <AboutDambulla language={language} />
                    ) : destination.id === 'abhayagiriya' ? (
                       <AboutAbhayagiriya language={language} />
                    ) : destination.id === 'yapahuwa' ? (
                       <AboutYapahuwa language={language} />
                    ) : destination.id === 'jetavanaramaya' ? (
                       <AboutJetavanaramaya language={language} />
                    ) : destination.id === 'yala' ? (
                       <AboutYala language={language} />
                    ) : destination.id === 'udawalawe' ? (
                       <AboutUdawalawe language={language} />
                    ) : destination.id === 'minneriya' ? (
                       <AboutMinneriya language={language} />
                    ) : destination.id === 'wilpattu' ? (
                       <AboutWilpattu language={language} />
                    ) : destination.id === 'kumana' ? (
                       <AboutKumana language={language} />
                    ) : destination.id === 'sinharaja' ? (
                       <AboutSinharaja language={language} />
                    ) : destination.id === 'bundala' ? (
                       <AboutBundala language={language} />
                    ) : destination.id === 'pidurangala' ? (
                       <AboutPidurangala language={language} />
                    ) : destination.id === 'riverston' ? (
                       <AboutRiverston language={language} />
                    ) : destination.id === 'horton-plains' ? (
                       <AboutHortonPlains language={language} />
                    ) : destination.id === 'knuckles' ? (
                       <AboutKnuckles language={language} />
                    ) : destination.id === 'ella' ? (
                       <AboutElla language={language} />
                    ) : destination.id === 'adams-peak' ? (
                       <AboutAdamsPeak language={language} />
                    ) : destination.id === 'diyaluma' ? (
                       <AboutDiyaluma language={language} />
                    ) : destination.id === 'bambarakanda' ? (
                       <AboutBambarakanda language={language} />
                    ) : destination.id === 'ravanafalls' ? (
                       <AboutRavanaFalls language={language} />
                    ) : destination.id === 'dunhinda-falls' ? (
                       <AboutDunhindaFalls language={language} />
                    ) : destination.id === 'bakers-falls' ? (
                       <AboutBakersFalls language={language} />
                    ) : destination.id === 'bopathella' ? (
                       <AboutBopathElla language={language} />
                    ) : destination.id === "stclair's" ? (
                       <AboutStClairsFalls language={language} />
                    ) : destination.id === "devonfalls" ? (
                       <AboutDevonFalls language={language} />
                    ) : destination.id === "laxapana" ? (
                       <AboutLaxapanaFalls language={language} />
                    ) : destination.id === "aberdeen" ? (
                       <AboutAberdeenFalls language={language} />
                    ) : (
                      <div className="relative group">
                         <div className="font-serif text-base md:text-lg text-[#2d2d2d] leading-relaxed space-y-6 md:space-y-10 antialiased font-light">
                            <div className="prose-container first-letter:text-5xl md:first-letter:text-7xl first-letter:font-serif first-letter:font-bold first-letter:mr-4 first-letter:float-left first-letter:leading-[0.8] first-letter:mt-2 first-letter:text-[#5A5A40]">
                            {(() => {
                               const detailedContent = destination.detailedAbout?.[language];
                               const isPending = detailedContent?.includes("pending for this node") || detailedContent?.includes("සකසමින් පවතී");
                               
                               let content = detailedContent;
                               if (deepDive?.history && (isPending || (detailedContent && detailedContent.length < 200))) {
                                 content = deepDive.history;
                               }

                               if (!content) return <p className="italic text-[#5A5A40]/40">Archival data loading...</p>;

                               // Auto-parse raw image URLs and [IMG: url] tags to make it super easy for the user
                               const processedContent = content
                                 .replace(/\[IMG:\s*(https?:\/\/[^\]]+)\]/gi, '![]($1)')
                                 .replace(/^(https?:\/\/[^\s]+\.(?:jpg|jpeg|png|gif|webp)(?:\?[^\s]*)?)$/gim, '![]($1)');

                               return (
                                 <div className="prose prose-base md:prose-lg prose-stone max-w-none prose-headings:font-serif prose-headings:font-bold prose-p:leading-relaxed prose-strong:text-[#5A5A40] prose-li:marker:text-[#5A5A40] prose-img:rounded-3xl prose-img:shadow-2xl prose-img:w-full prose-img:object-cover prose-img:my-10 prose-img:border prose-img:border-[#5A5A40]/10">
                                   <ReactMarkdown>{processedContent}</ReactMarkdown>
                                 </div>
                               );
                            })()}
                            </div>
                         </div>
                      </div>
                    )}
                 </div>

                 {/* Deep Dive Addendum: Hidden Echoes */}
                 {deepDive?.hiddenEchoes && (
                    <div className="pt-12 md:pt-20 space-y-8 md:space-y-12 animate-in fade-in duration-1000">
                       <div className="flex items-center gap-4 md:gap-6">
                          <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl md:rounded-3xl bg-[#5A5A40]/10 flex items-center justify-center text-[#5A5A40] border border-[#5A5A40]/20">
                            <Sparkles size={26} className="w-5 h-5 md:w-6 md:h-6" />
                          </div>
                          <h4 className="text-xl sm:text-2xl md:text-4xl font-serif font-bold text-[#2d2d2d] uppercase tracking-tighter">Hidden Echoes</h4>
                       </div>
                       <div className="md:pl-20">
                          <div className="bg-[#5A5A40]/5 p-8 md:p-16 rounded-[4rem] border border-[#5A5A40]/10 relative overflow-hidden group">
                             <div className="absolute top-0 right-0 p-4 md:p-8 opacity-[0.03] group-hover:rotate-12 transition-transform duration-1000">
                                <Compass size={200} className="w-32 h-32 md:w-48 md:h-48" />
                             </div>
                             <p className="text-lg sm:text-xl md:text-2xl text-[#2d2d2d] italic font-medium leading-relaxed relative z-10">
                                "{deepDive.hiddenEchoes}"
                             </p>
                          </div>
                       </div>
                    </div>
                 )}

                 {/* 3. High-Fidelity Gallery Section */}
                 {/* Gallery section removed as requested */}
              </div>

              {/* Sidebar Display Hub */}
              <div className="w-full flex flex-col gap-8 md:gap-12">
                 
                 {/* Map Manifold Frame */}
                 <div className="relative h-[400px] md:h-[600px] w-full bg-white p-4 border border-[#5A5A40]/10 rounded-[3rem] md:rounded-[4rem] shadow-xl overflow-hidden group">
                    {destination.coordinates ? (
                      <React.Suspense fallback={
                        <div className="w-full h-full bg-stone-100 flex items-center justify-center rounded-2xl border border-stone-200">
                          <Loader2 className="animate-spin text-stone-400" />
                        </div>
                      }>
                        <Map lat={destination.coordinates.x} lng={destination.coordinates.y} name={destination.name[language]} />
                      </React.Suspense>
                    ) : (
                      <iframe 
                        src={googleMapsIframeUrl}
                        className="absolute inset-0 w-full h-full grayscale-[0.3] contrast-[1.1] transition-all duration-700 group-hover:grayscale-0"
                        loading="lazy"
                        allowFullScreen
                      />
                    )}
                 </div>

                 {/* Temporal Sync & Voyager Wisdom */}
                 {deepDive && !deepDive.isThrottled && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 bg-white/40 backdrop-blur-sm p-8 md:p-12 rounded-[3rem] border border-[#5A5A40]/10">
                       <div className="space-y-6">
                          <div className="flex items-center gap-4">
                             <div className="w-10 h-10 rounded-xl bg-[#5A5A40]/10 flex items-center justify-center text-[#5A5A40]">
                                <History size={20} />
                             </div>
                             <h5 className="text-lg font-bold uppercase tracking-widest text-[#2d2d2d]">Temporal Sync</h5>
                          </div>
                          <p className="text-[#2d2d2d]/70 leading-relaxed italic">
                             {deepDive.temporalSync}
                          </p>
                       </div>
                       
                       <div className="space-y-6">
                          <div className="flex items-center gap-4">
                             <div className="w-10 h-10 rounded-xl bg-[#5A5A40]/10 flex items-center justify-center text-[#5A5A40]">
                                <Sparkles size={20} />
                             </div>
                             <h5 className="text-lg font-bold uppercase tracking-widest text-[#2d2d2d]">Voyager Wisdom</h5>
                          </div>
                          <ul className="space-y-4">
                             {deepDive.wisdom?.map((tip, i) => (
                                <li key={i} className="text-[#2d2d2d]/80 flex gap-4 text-sm">
                                   <span className="text-[#5A5A40] font-bold">0{i+1}</span>
                                   {tip}
                                 </li>
                             ))}
                          </ul>
                       </div>
                    </div>
                 )}
              </div>
           </div>
        </section>

        {/* Feedback Section */}
        <div className="mt-16 md:mt-24 flex flex-col items-center gap-6 p-8 bg-white/40 backdrop-blur-sm rounded-[2rem] border border-[#5A5A40]/10">
          <h3 className="text-lg font-bold text-[#2d2d2d] uppercase tracking-widest">
            {language === 'EN' ? 'Was this helpful?' : 'මෙය ප්‍රයෝජනවත්ද?'}
          </h3>
          {feedback ? (
            <p className="text-[#5A5A40] font-bold">{language === 'EN' ? 'Thank you for your feedback!' : 'ඔබගේ ප්‍රතිචාරයට ස්තූතියි!'}</p>
          ) : (
            <div className="flex gap-4">
              <button 
                onClick={() => submitFeedback('up')}
                className="p-4 rounded-full bg-[#5A5A40]/10 text-[#5A5A40] hover:bg-[#5A5A40] hover:text-white transition-all"
                disabled={isSubmitting}
              >
                <ThumbsUp size={24} />
              </button>
              <button 
                onClick={() => submitFeedback('down')}
                className="p-4 rounded-full bg-[#5A5A40]/10 text-[#5A5A40] hover:bg-[#5A5A40] hover:text-white transition-all"
                disabled={isSubmitting}
              >
                <ThumbsDown size={24} />
              </button>
            </div>
          )}
        </div>

        <div className="mt-16 md:mt-24">
          <ReviewComponent destinationId={destination.id} />
        </div>

        {/* FINAL RETURN ACTION */}
        <div className="mt-16 md:mt-32 pt-10 md:pt-20 border-t border-[#5A5A40]/10 flex justify-center">
           <button 
             onClick={onBack}
             className="group relative flex items-center gap-4 md:gap-8 px-12 md:px-24 py-6 md:py-10 bg-[#5A5A40] text-white rounded-full font-bold text-[10px] md:text-sm uppercase tracking-[0.4em] md:tracking-[0.8em] transition-all hover:scale-105 shadow-2xl overflow-hidden"
           >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <ArrowLeft size={32} className="w-6 h-6 md:w-8 md:h-8 group-hover:-translate-x-3 transition-transform" />
              {UI_STRINGS.returnToRegistry[language]}
           </button>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin 40s linear infinite; }
        @keyframes border-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-border-spin { animation: border-spin 4s linear infinite; }
        @media (max-width: 768px) {
          .parallax-hero { transform: none !important; }
        }
      `}} />
    </div>
  );
};

export default DestinationDetail;
