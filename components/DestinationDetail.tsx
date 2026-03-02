
import React, { useEffect, useState, useRef } from 'react';
import { Destination, Language, NearbyAttraction } from '../types.ts';
import { DESTINATIONS, UI_STRINGS } from '../constants.tsx';
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
  EyeOff
} from 'lucide-react';
import { getLankaGuideResponse, GroundingLink, getWeatherUpdate, WeatherData } from '../services/gemini.ts';

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
    <div className="fixed top-[110px] right-6 md:right-12 z-[90] animate-in slide-in-from-right-8 duration-1000">
      <div className={`relative p-[1px] rounded-full overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all ${weather?.isThrottled ? 'shadow-orange-500/20' : ''}`}>
        <div className={`absolute inset-[-400%] bg-[conic-gradient(from_0deg,transparent_0,transparent_40%,${weather?.isThrottled ? '#f97316' : '#0EA5E9'}_50%,transparent_60%,transparent_100%)] animate-border-spin opacity-40 group-hover:opacity-100 transition-opacity duration-700`} />
        
        <div className="relative bg-black/40 backdrop-blur-2xl rounded-full px-5 py-2.5 flex items-center gap-4 group transition-all hover:bg-black/60">
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
      window.scrollTo({ top: 0, behavior: 'instant' });

      const fetchNearby = async () => {
        setIsSyncingNearby(true);
        try {
          const prompt = `What are the top 5 historic sites or landmarks nearby ${destination.name.EN} in ${destination.location}, Sri Lanka? Provide verified Google Maps links.`;
          const response = await getLankaGuideResponse(prompt, language, undefined, false);
          if (typeof response !== 'string' && response.links) {
            setNearbyResults(response.links);
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
    <div className="min-h-screen bg-white animate-in fade-in duration-1000 relative overflow-x-hidden">
      
      <LiveWeatherWidget destinationName={destination.name.EN} language={language} />

      {/* Cinematic Hero */}
      <div className="relative h-[85vh] w-full overflow-hidden bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60 transition-transform duration-[100ms] ease-out"
          style={{ 
            backgroundImage: `url(${destination.image})`,
            transform: `translateY(${scrollProgress * 200}px) scale(1.05)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-black/30 to-transparent" />
        
        <div className="absolute top-0 left-0 right-0 p-6 md:p-12 z-50 flex justify-between items-center">
          <button onClick={onBack} className="flex items-center gap-4 px-8 py-4 bg-black/50 backdrop-blur-2xl border border-white/20 text-white rounded-full font-black text-[10px] uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all group shadow-2xl">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> {UI_STRINGS.returnToRegistry[language]}
          </button>
        </div>

        <div className="absolute bottom-24 left-0 right-0 px-6 md:px-16 z-30">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-6">
               <div className="flex flex-wrap items-center gap-4">
                 <div className="px-6 py-2 bg-[#0EA5E9] text-white rounded-full text-[10px] font-black uppercase tracking-[0.4em] border border-white/20 shadow-xl">
                   ACTIVE NODE
                 </div>
                 <div className="px-6 py-2 bg-black/40 backdrop-blur-3xl text-white rounded-full text-[10px] font-black uppercase tracking-[0.4em] border border-white/20 flex items-center gap-3 shadow-xl">
                   <CatIcon size={14} style={{ color: config.color }} />
                   {destination.category.toUpperCase()}
                 </div>
               </div>
            </div>
            
            <div className="space-y-4">
               <h1 className="text-4xl md:text-7xl lg:text-8xl font-heritage font-bold text-white leading-[0.9] tracking-tighter drop-shadow-2xl max-w-5xl">
                 {destination.name[language]}
               </h1>
               <div className="text-xl md:text-3xl text-white/90 font-light italic border-l-[4px] pl-8 max-w-3xl py-2 drop-shadow-lg" style={{ borderColor: config.color }}>
                 {destination.shortStory[language]}
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sync Overlay */}
      {/* Deep sync logic removed */}

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
        
        {/* PRIMARY SECTION: ABOUT DESTINATION */}
        <section className="relative">
           
           {/* MAIN CONTENT BLOCK */}
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
              <div className="lg:col-span-7 space-y-20">
                 
                 {/* ROUND NEARBY ATTRACTIONS (PROXIMITY NODES) - PLACED ABOVE MASTER ARCHIVE */}
                 {destination.nearbyAttractions && destination.nearbyAttractions.length > 0 && (
                  <div className="space-y-12 animate-in slide-in-from-bottom-6 duration-700">
                    <div className="flex items-center justify-between px-2">
                       <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-2xl bg-[#E1306C]/10 flex items-center justify-center text-[#E1306C] shadow-inner">
                            <Target size={20} />
                          </div>
                          <h3 className="text-xl md:text-2xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tighter">
                            {language === 'EN' ? 'Nearby Places.' : 'ආසන්න ස්ථාන.'}
                          </h3>
                       </div>
                       <div className="flex items-center gap-2 opacity-30">
                          <div className="w-1 h-1 rounded-full bg-black animate-pulse" />
                          <div className="w-1 h-1 rounded-full bg-black animate-pulse delay-75" />
                          <div className="w-1 h-1 rounded-full bg-black animate-pulse delay-150" />
                       </div>
                    </div>

                    <div className="flex overflow-x-auto no-scrollbar gap-8 md:gap-12 pb-6 px-2 scroll-smooth">
                        {destination.nearbyAttractions.map((att, idx) => (
                          <div 
                            key={att.id} 
                            className="shrink-0 group cursor-pointer flex flex-col items-center gap-4"
                            onClick={() => handleNearbyClick(att.id)}
                          >
                            <div className="relative w-24 h-24 md:w-32 md:h-32">
                                <div className="absolute inset-[-4px] border border-dashed border-[#E1306C]/20 rounded-full animate-spin-slow opacity-40 group-hover:opacity-100 group-hover:border-[#E1306C] transition-all" />
                                <div className="relative w-full h-full rounded-full overflow-hidden shadow-xl border-2 border-white transition-all duration-700 group-hover:scale-110 group-hover:shadow-2xl">
                                  <img src={att.image} className="w-full h-full object-cover transition-transform duration-[8000ms] group-hover:scale-110" alt="" />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-20 group-hover:opacity-0 transition-opacity" />
                                </div>
                                <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#0a0a0a] text-white rounded-full flex items-center justify-center border border-white shadow-lg text-[7px] font-black group-hover:bg-[#E1306C] transition-colors">
                                  0{idx + 1}
                                </div>
                            </div>
                            <div className="text-center space-y-1 max-w-[120px]">
                                <h4 className="text-xs font-heritage font-bold text-[#0a0a0a] uppercase tracking-tight leading-tight line-clamp-1 group-hover:text-[#E1306C] transition-colors">{att.name[language]}</h4>
                                <p className="text-[7px] font-black text-gray-300 uppercase tracking-widest">{language === 'EN' ? 'EXPLORE' : 'ගවේෂණය'}</p>
                            </div>
                          </div>
                        ))}
                    </div>
                    <div className="h-px w-full bg-gradient-to-r from-gray-100 via-gray-200 to-transparent" />
                  </div>
                 )}

                 {/* 1. Long Narrative Section (About Destination) */}
                 <div className="space-y-12 relative">
                    <div className="flex items-center gap-6">
                        <div className={`w-14 h-14 rounded-3xl flex items-center justify-center shadow-inner bg-[#0EA5E9]/10 text-[#0EA5E9] border border-[#0EA5E9]/20`}>
                          <BookOpen size={24} />
                        </div>
                        <h3 className="text-3xl md:text-5xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tighter">
                          {UI_STRINGS.masterArchive[language]} {destination.name[language]}
                        </h3>
                    </div>

                    <div className="relative group">
                       <div className={`absolute -left-10 top-0 h-full w-1 bg-gradient-to-b from-[#0EA5E9] via-gray-100 to-transparent opacity-30`} />
                       <div className="font-narrative text-xl md:text-3xl text-gray-600 leading-relaxed space-y-10 antialiased font-medium text-justify relative z-10">
                          <div className={`prose-container first-letter:text-7xl md:first-letter:text-9xl first-letter:font-heritage first-letter:font-bold first-letter:mr-6 first-letter:float-left first-letter:leading-[0.85] first-letter:mt-2 first-letter:text-[#0EA5E9]`}>
                             {(deepDive?.history || destination.detailedAbout?.[language])?.split('\n\n').map((para, pIdx) => (
                               <p key={pIdx} className={pIdx === 0 ? 'mt-0' : 'mt-12'}>
                                 {para}
                               </p>
                             )) || (
                               <p className="italic text-gray-400">Archival data loading...</p>
                             )}
                          </div>
                       </div>
                    </div>
                 </div>

                 {/* Deep Dive Addendum: Hidden Echoes */}
                 {deepDive?.hiddenEchoes && (
                    <div className="pt-20 border-t border-gray-100 space-y-12 animate-in fade-in duration-1000">
                       <div className="flex items-center gap-6">
                          <div className="w-14 h-14 rounded-3xl bg-[#E1306C]/10 flex items-center justify-center text-[#E1306C] border border-[#E1306C]/20 shadow-inner">
                            <Sparkles size={26} />
                          </div>
                          <h4 className="text-2xl md:text-4xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tighter">Hidden Echoes</h4>
                       </div>
                       <div className="md:pl-20">
                          <div className="bg-[#E1306C]/5 p-10 rounded-[4rem] border border-[#E1306C]/10 shadow-sm relative overflow-hidden group">
                             <div className="absolute top-0 right-0 p-8 opacity-[0.05] group-hover:rotate-12 transition-transform duration-1000">
                                <Compass size={140} />
                             </div>
                             <p className="text-xl md:text-3xl text-gray-700 italic font-medium leading-relaxed relative z-10">
                               "{deepDive.hiddenEchoes}"
                             </p>
                          </div>
                       </div>
                    </div>
                 )}

                 {/* 2. Legacy & Legend (History) Section */}
                 <div className="pt-20 border-t border-gray-100 space-y-12">
                   <div className="flex items-center gap-6">
                      <div className="w-14 h-14 rounded-3xl bg-[#F59E0B]/10 flex items-center justify-center text-[#F59E0B] border border-[#F59E0B]/20 shadow-inner">
                        <History size={26} />
                      </div>
                      <h4 className="text-2xl md:text-4xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tighter">Legacy & Legend</h4>
                   </div>
                   <div className="md:pl-20">
                      <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed whitespace-pre-line italic">
                        {destination.history[language]}
                      </p>
                   </div>
                 </div>

                 {/* 3. High-Fidelity Gallery Section */}
                 <div className="pt-20 border-t border-gray-100 space-y-12">
                    <div className="flex justify-between items-end">
                      <div className="flex items-center gap-6">
                        <div className="w-14 h-14 rounded-3xl bg-[#0EA5E9]/10 flex items-center justify-center text-[#0EA5E9] border border-[#0EA5E9]/20 shadow-inner">
                          <ImageIcon size={26} />
                        </div>
                        <h4 className="text-2xl md:text-4xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tighter">Visual Traversal</h4>
                      </div>
                      <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">{destination.gallery.length} High-Res Frames</span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:pl-20">
                      {destination.gallery.map((img, i) => (
                        <div key={i} className="group relative aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl transition-all duration-700 hover:-translate-y-2 border border-gray-100">
                           <img src={img} className="w-full h-full object-cover transition-transform duration-[8000ms] group-hover:scale-110" alt="" />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                           <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                              <span className="text-[8px] font-black text-white uppercase tracking-[0.4em] bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">Frame_Ref #0{i+1}</span>
                           </div>
                        </div>
                      ))}
                    </div>
                 </div>

                 {/* 4. Logistical Vision Addendum */}
                 {destination.logistics && (
                    <div className="pt-20 border-t border-gray-100 space-y-12">
                       <div className="flex items-center gap-6 group/log">
                          <div className={`w-14 h-14 rounded-3xl flex items-center justify-center bg-gray-100 text-gray-400 group-hover/log:bg-[#E1306C]/10 group-hover/log:text-[#E1306C] transition-all`}>
                            <Car size={26} />
                          </div>
                          <h4 className="text-2xl md:text-4xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tighter">{UI_STRINGS.logisticalVision[language]}</h4>
                       </div>
                       <div className="md:pl-20">
                         <div className="bg-gray-50/50 p-8 md:p-12 rounded-[3.5rem] border border-gray-100/50 shadow-inner group">
                            <p className="text-xl md:text-3xl text-gray-500 italic font-medium leading-relaxed">
                               "{destination.logistics[language]}"
                            </p>
                         </div>
                       </div>
                    </div>
                  )}

                 {/* 5. Practical Wisdom (Tips) Section */}
                 <div className="pt-20 border-t border-gray-100 space-y-12">
                    <div className="flex items-center gap-6">
                       <div className={`w-14 h-14 rounded-3xl flex items-center justify-center bg-blue-500/10 text-blue-500`}>
                         <Lightbulb size={26} />
                       </div>
                       <h4 className="text-2xl md:text-4xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tighter">
                         {UI_STRINGS.tipsLabel[language]}
                       </h4>
                    </div>
                    <div className="grid grid-cols-1 gap-10 md:pl-20">
                      {(deepDive?.wisdom || destination.tips.map(t => t[language])).map((tip, idx) => (
                        <div key={idx} className="flex gap-8 items-start group">
                          <div className={`w-12 h-12 rounded-2xl bg-white border shadow-sm flex items-center justify-center font-black text-xs shrink-0 transition-all duration-500 text-[#0EA5E9] border-gray-100 group-hover:bg-[#0EA5E9] group-hover:text-white`}>
                            {idx + 1}
                          </div>
                          <span className="text-xl md:text-2xl font-medium text-gray-500 leading-relaxed italic pt-1">{typeof tip === 'string' ? tip : (tip as any).EN || tip}</span>
                        </div>
                      ))}
                    </div>
                 </div>
              </div>

              {/* Sidebar Display Hub */}
              <div className="lg:col-span-5 flex flex-col gap-10">
                 
                 {/* Map Manifold Frame */}
                 <div className="relative h-[500px] bg-gray-100 border-4 border-white rounded-[4rem] shadow-2xl overflow-hidden group">
                    <iframe 
                      src={googleMapsIframeUrl}
                      className="absolute inset-0 w-full h-full grayscale-[0.2] contrast-[1.1] transition-all duration-700 group-hover:grayscale-0"
                      loading="lazy"
                      allowFullScreen
                    />
                    <div className="absolute inset-0 pointer-events-none border-[12px] border-white/10" />
                 </div>





                 {/* Local Intel Links */}
                 <div className="bg-gray-50 p-12 rounded-[4rem] border border-gray-100 space-y-10 shadow-inner">
                    <div className="flex items-center justify-between border-b border-gray-200 pb-8">
                       <div className="flex items-center gap-4 text-[#E1306C]">
                         <Target size={24} className="animate-pulse" />
                         <span className="text-[11px] font-black uppercase tracking-[0.5em]">{language === 'EN' ? 'Regional Intelligence' : 'ප්‍රාදේශීය බුද්ධිය'}</span>
                       </div>
                    </div>
                    <div className="space-y-4">
                       {nearbyResults.length > 0 ? (
                         nearbyResults.map((link, idx) => (
                           <a 
                             key={idx}
                             href={link.uri}
                             target="_blank"
                             rel="noopener noreferrer"
                             className="flex items-center justify-between p-6 bg-white rounded-3xl border border-gray-100 shadow-sm transition-all hover:border-[#0EA5E9]/40 hover:shadow-2xl hover:-translate-x-2 group/link"
                           >
                              <div className="flex items-center gap-5 overflow-hidden">
                                 <div className="w-12 h-12 rounded-2xl bg-[#0EA5E9]/5 flex items-center justify-center text-[#0EA5E9] shadow-inner group-hover/link:bg-[#0EA5E9] group-hover/link:text-white transition-colors">
                                    <Navigation size={20} />
                                 </div>
                                 <span className="text-sm font-bold text-gray-500 group-hover/link:text-[#0a0a0a] truncate tracking-tight uppercase">{link.title}</span>
                              </div>
                              <ExternalLink size={16} className="text-gray-200 group-hover/link:text-[#0EA5E9] shrink-0" />
                           </a>
                         ))
                       ) : (
                         <div className="text-center py-20 opacity-30 space-y-6">
                            <Database size={48} className="mx-auto text-gray-300" />
                            <p className="text-[11px] font-black uppercase tracking-[0.4em] italic">Fetching Spatial Metadata...</p>
                         </div>
                       )}
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* FINAL RETURN ACTION */}
        <div className="mt-32 pt-20 border-t border-gray-100 flex justify-center">
           <button 
             onClick={onBack}
             className="group relative flex items-center gap-8 px-20 py-10 bg-[#0a0a0a] text-white rounded-full font-black text-sm uppercase tracking-[0.8em] transition-all hover:scale-105 shadow-3xl overflow-hidden"
           >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <ArrowLeft size={32} className="group-hover:-translate-x-3 transition-transform" />
              {UI_STRINGS.returnToRegistry[language]}
           </button>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin 40s linear infinite; }
        @keyframes loading-bar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
        .animate-loading-bar { animation: loading-bar 2s linear infinite; }
        
        @keyframes border-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-border-spin { animation: border-spin 4s linear infinite; }
      `}} />
    </div>
  );
};

export default DestinationDetail;
