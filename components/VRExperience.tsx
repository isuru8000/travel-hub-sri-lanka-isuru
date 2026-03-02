
import React, { useState, useEffect, useRef } from 'react';
import { Language, Destination } from '../types.ts';
import { DESTINATIONS } from '../constants.tsx';
import { 
  Box, 
  Compass, 
  ArrowLeft, 
  Search, 
  Target, 
  X, 
  Move, 
  Maximize2, 
  Radio,
  RotateCw,
  Sparkles,
  Activity,
  ChevronRight
} from 'lucide-react';

interface VRExperienceProps {
  language: Language;
  setView: (view: any) => void;
}

interface POI {
  id: string;
  name: { EN: string; SI: string };
  x: number; // -100 to 100
  y: number; // -100 to 100
  description: { EN: string; SI: string };
  category: string;
}

const VRExperience: React.FC<VRExperienceProps> = ({ language, setView }) => {
  const [selectedDest, setSelectedDest] = useState<Destination | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [scanProgress, setScanProgress] = useState(0);
  const [isImmersive, setIsImmersive] = useState(false);
  const [movement, setMovement] = useState({ x: 0, z: 0 }); 
  const [lookRotation, setLookRotation] = useState({ x: 0, y: 0 }); 
  const [activePOI, setActivePOI] = useState<POI | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const lastTouchRef = useRef<{ x: number; y: number } | null>(null);

  const featuredDestinations = DESTINATIONS.filter(d => 
    d.name.EN.toLowerCase().includes(searchQuery.toLowerCase()) || 
    d.name.SI.includes(searchQuery)
  );

  // Expanded POIs for more discovery
  const pointsOfInterest: POI[] = [
    { 
      id: 'portal', 
      name: { EN: 'Ancient Gateway', SI: 'ප්‍රධාන ද්වාරය' }, 
      x: -40, y: 20, 
      category: 'Architectural Node',
      description: { EN: 'A large entrance cut into the rock. It has been guarded for 1,500 years.', SI: 'වසර 1500 ක් පුරා දෙවිවරුන් විසින් රකිනු ලබන බව පැවසෙන, ස්වභාවික ගල් පර්වතය තුළම නෙළන ලද මහා ද්වාරය.' } 
    },
    { 
      id: 'sanctuary', 
      name: { EN: 'Spiritual Shard', SI: 'පූජනීය භූමිය' }, 
      x: 60, y: -30, 
      category: 'Sacred Node',
      description: { EN: 'A peaceful place where monks used to pray and feel close to nature.', SI: 'දිවයිනේ ස්වභාවික රිද්මය සමඟ ඒකාත්මික වීම සඳහා පැරණි භික්ෂූන් වහන්සේලා භාවිතා කළ සුවිශේෂී භූමියකි.' } 
    },
    { 
      id: 'echo', 
      name: { EN: 'Hidden Echo', SI: 'සැඟවුණු රාවය' }, 
      x: 10, y: 50, 
      category: 'Mythical Node',
      description: { EN: 'People say the wind carries the voices of kings who lived here long ago.', SI: 'මෙම කොටු පවුරු මත ඇවිද ගිය රජවරුන්ගේ රහස් මෙන්ම ඔවුන්ගේ හඬ අදටත් සුළඟේ රැඳී ඇති බව ජනප්‍රවාදයේ පැවසේ.' } 
    }
  ];

  useEffect(() => {
    if (selectedDest && !isImmersive) {
      const interval = setInterval(() => {
        setScanProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setIsImmersive(true), 1200);
            return 100;
          }
          // Non-linear progress for more "technical" feel
          const increment = Math.random() > 0.8 ? 1 : Math.floor(Math.random() * 12) + 3;
          return Math.min(100, prev + increment);
        });
      }, 180);
      return () => clearInterval(interval);
    }
  }, [selectedDest, isImmersive]);

  const handleJoystick = (e: React.TouchEvent) => {
    e.stopPropagation();
    const touch = e.touches[0];
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (touch.clientX - centerX) / (rect.width / 2);
    const y = (touch.clientY - centerY) / (rect.height / 2);
    
    // Smooth movement with momentum
    setMovement(prev => ({
      x: prev.x + (x * 6),
      z: prev.z - (y * 6)
    }));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isImmersive) return;
    lastTouchRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isImmersive || !lastTouchRef.current) return;
    const touch = e.touches[0];
    const deltaX = touch.clientX - lastTouchRef.current.x;
    const deltaY = touch.clientY - lastTouchRef.current.y;
    
    setLookRotation(prev => ({
      x: Math.max(-70, Math.min(70, prev.x - deltaY * 0.3)),
      y: prev.y + deltaX * 0.3
    }));
    
    lastTouchRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = () => {
    lastTouchRef.current = null;
  };

  const neuralSteps = [
    "Initializing Neural Handshake...",
    "Calibrating Spatial Harmonics...",
    "Syncing Volumetric Mesh...",
    "Establishing Reality Link..."
  ];

  const currentStep = Math.min(neuralSteps.length - 1, Math.floor((scanProgress / 100) * neuralSteps.length));

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-[#020205] flex flex-col items-center relative overflow-hidden select-none touch-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* 3D Immersive Environment Container */}
      <div 
        className={`fixed inset-0 transition-all duration-[2000ms] ${isImmersive ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'}`}
        style={{ perspective: '1500px' }}
      >
        <div 
          className="absolute inset-0 w-full h-full transition-transform duration-200 ease-out"
          style={{ 
            transformStyle: 'preserve-3d',
            transform: `rotateX(${lookRotation.x}deg) rotateY(${lookRotation.y}deg) translateZ(${movement.z}px) translateX(${movement.x}px)`
          }}
        >
          {/* Main Panorama Layer - High Fidelity Projection */}
          <div 
            className="absolute inset-[-200%] bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${selectedDest?.image})`,
              transform: 'translateZ(-1200px) scale(6)',
              opacity: 0.8,
              filter: 'contrast(1.1) saturate(1.2)'
            }}
          >
             {/* Atmospheric Overlay */}
             <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />
          </div>

          {/* Points of Interest in 3D Space */}
          {isImmersive && pointsOfInterest.map((poi) => (
            <div 
              key={poi.id}
              className="absolute group cursor-pointer"
              style={{ 
                transform: `translateX(${poi.x * 15}px) translateY(${poi.y * 8}px) translateZ(-800px)`,
                transformStyle: 'preserve-3d'
              }}
              onClick={(e) => { e.stopPropagation(); setActivePOI(poi); }}
            >
              <div className="flex flex-col items-center">
                 {/* Upgraded Multi-Ring Marker */}
                 <div className="relative">
                    <div className={`absolute inset-[-20px] border-2 border-dashed rounded-full animate-spin-slow transition-all duration-700 ${activePOI?.id === poi.id ? 'border-[#E1306C] opacity-100' : 'border-white/20 opacity-40'}`} />
                    <div className={`absolute inset-[-8px] border border-white/30 rounded-full animate-ping opacity-30`} />
                    
                    <div className={`w-16 h-16 backdrop-blur-2xl rounded-full border-2 flex items-center justify-center transition-all duration-700 shadow-[0_0_50px_rgba(225,48,108,0.3)] ${activePOI?.id === poi.id ? 'bg-[#E1306C] border-white scale-125' : 'bg-white/10 border-white/40 group-hover:scale-110 group-hover:border-white group-hover:bg-white/20'}`}>
                       <Target size={activePOI?.id === poi.id ? 32 : 28} className={activePOI?.id === poi.id ? 'text-white' : 'text-[#E1306C]'} />
                    </div>
                 </div>

                 <div className={`mt-8 px-8 py-3 bg-black/90 backdrop-blur-3xl rounded-full border transition-all duration-700 flex items-center gap-4 ${activePOI?.id === poi.id ? 'border-[#E1306C] scale-110 shadow-[0_0_30px_rgba(225,48,108,0.4)]' : 'border-white/10 opacity-0 group-hover:opacity-100 group-hover:translate-y-[-8px]'}`}>
                    <div className={`w-2 h-2 rounded-full ${activePOI?.id === poi.id ? 'bg-white animate-pulse' : 'bg-[#E1306C]'}`} />
                    <span className="text-[11px] font-black text-white uppercase tracking-[0.3em] whitespace-nowrap">
                       {poi.name[language]}
                    </span>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Global Background (Fallback/Scan mode) */}
      {!isImmersive && (
        <>
          <div 
            className="fixed inset-0 bg-cover bg-center transition-all duration-[4000ms] opacity-30 scale-125 blur-md pointer-events-none"
            style={{ 
              backgroundImage: `url(${selectedDest ? selectedDest.image : 'https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=2400&auto=format&fit=crop'})`
            }}
          />
          <div className="fixed inset-0 bg-gradient-to-b from-[#020205] via-transparent to-[#020205] pointer-events-none" />
          
          {/* Neural Grid Overlay */}
          <div className="fixed inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `linear-gradient(#E1306C 1px, transparent 1px), linear-gradient(90deg, #E1306C 1px, transparent 1px)`, backgroundSize: '100px 100px' }} />
        </>
      )}

      {/* VR HUD UI */}
      {isImmersive && (
        <div className="fixed inset-0 z-50 pointer-events-none flex flex-col justify-between p-8 sm:p-16 animate-in fade-in duration-1000">
          {/* Top HUD */}
          <div className="flex justify-between items-start">
            <div className="bg-black/80 backdrop-blur-[40px] border border-white/10 p-8 rounded-[3rem] flex items-center gap-8 shadow-[0_40px_100px_rgba(0,0,0,0.8)] border-l-4 border-l-[#E1306C]">
              <div className="w-14 h-14 bg-[#E1306C]/20 rounded-2xl flex items-center justify-center text-[#E1306C] shadow-inner border border-[#E1306C]/30">
                 <Radio size={28} className="animate-pulse" />
              </div>
              <div className="text-left space-y-1">
                <p className="text-[10px] font-black text-[#E1306C] uppercase tracking-[0.5em] leading-none mb-1">Reality_Stream_Active</p>
                <p className="text-2xl font-heritage font-bold text-white uppercase tracking-tight leading-none">{selectedDest?.name[language]}</p>
                <div className="flex items-center gap-3 pt-2">
                   <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                   <span className="text-[9px] font-black text-white/30 uppercase tracking-widest">Signal_Strength: 100%</span>
                </div>
              </div>
            </div>

            {/* Radar Mini-Map */}
            <div className="relative w-40 h-40 rounded-full border-2 border-white/10 bg-black/80 backdrop-blur-3xl flex items-center justify-center group overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.6)]">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_40%,_rgba(225,48,108,0.15)_100%)] animate-pulse" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-[1px] bg-white/10" />
                  <div className="h-full w-[1px] bg-white/10" />
                  <div className="absolute inset-0 border border-white/5 rounded-full scale-75" />
                  <div className="absolute inset-0 border border-white/5 rounded-full scale-50" />
               </div>
               <div className="absolute inset-0 origin-center animate-spin-slow opacity-40">
                  <div className="absolute top-0 left-1/2 w-1/2 h-1/2 bg-gradient-to-tr from-[#E1306C]/80 to-transparent rounded-tr-full" />
               </div>
               
               {pointsOfInterest.map(poi => (
                 <div 
                   key={poi.id}
                   className={`absolute w-2 h-2 rounded-full transition-all duration-500 ${activePOI?.id === poi.id ? 'bg-white scale-150 shadow-[0_0_15px_white]' : 'bg-[#E1306C] opacity-50 shadow-[0_0_6px_#E1306C]'}`}
                   style={{ 
                     transform: `translate(${(poi.x - (movement.x / 12)) * 0.5}px, ${(poi.y + (movement.z / 12)) * 0.5}px)` 
                   }}
                 />
               ))}

               <div className="relative z-10 w-3 h-3 bg-[#E1306C] rounded-full shadow-[0_0_20px_#E1306C] animate-pulse">
                  <div className="absolute inset-[-8px] border border-[#E1306C]/40 rounded-full animate-ping" />
               </div>
               <Compass size={14} className="absolute top-4 left-1/2 -translate-x-1/2 text-white/30" />
            </div>
          </div>

          {/* UPGRADED POI INFORMATION CARD */}
          <div className="relative flex-grow flex items-center justify-center">
            {activePOI && (
              <div className="max-w-lg w-full pointer-events-auto bg-[#0a0a0a]/95 backdrop-blur-[60px] border border-white/10 rounded-[4rem] shadow-[0_80px_200px_rgba(0,0,0,1)] overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-16 duration-1000">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#E1306C] to-transparent animate-scan-slow opacity-80" />
                
                <div className="p-12 space-y-10">
                  <div className="flex justify-between items-start">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 px-5 py-2 bg-[#E1306C]/10 border border-[#E1306C]/40 rounded-full text-[#E1306C] text-[9px] font-black uppercase tracking-[0.5em]">
                        <Sparkles size={14} />
                        {activePOI.category}
                      </div>
                      <h4 className="text-4xl font-heritage font-bold text-white uppercase tracking-tighter leading-tight">
                        {activePOI.name[language]}
                      </h4>
                    </div>
                    <button 
                      onClick={() => setActivePOI(null)} 
                      className="p-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 text-white transition-all active:scale-90 shadow-xl"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  <p className="text-lg text-gray-400 font-light italic leading-relaxed border-l-4 border-[#E1306C]/50 pl-8">
                    "{activePOI.description[language]}"
                  </p>

                  <div className="pt-10 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-5">
                       <div className="w-3 h-3 rounded-full bg-green-500 animate-ping shadow-[0_0_15px_#22c55e]" />
                       <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.5em]">Neural_Archive_Verified</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#E1306C] font-black text-[10px] uppercase tracking-[0.4em] group cursor-pointer hover:text-white transition-colors">
                       Deep Scan <ChevronRight size={16} className="group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom HUD - Controls */}
          <div className="flex justify-between items-end pointer-events-auto">
            {/* Traverse Joystick */}
            <div 
              className="w-40 h-40 sm:w-56 sm:h-56 bg-black/60 backdrop-blur-3xl border border-white/10 rounded-full flex items-center justify-center touch-none relative group shadow-[0_40px_100px_rgba(0,0,0,0.5)]"
              onTouchMove={handleJoystick}
            >
              <div className="absolute inset-8 rounded-full border border-white/5 flex items-center justify-center">
                 <Move size={24} className="text-white/10 group-hover:text-white/30 transition-colors" />
              </div>
              <div 
                className="w-20 h-20 sm:w-28 sm:h-28 bg-white/10 backdrop-blur-2xl rounded-full border border-white/30 shadow-3xl flex items-center justify-center transition-transform duration-100"
              >
                <div className="w-3 h-3 bg-[#E1306C] rounded-full shadow-[0_0_30px_#E1306C] animate-pulse" />
              </div>
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[10px] font-black text-white/30 uppercase tracking-[0.8em] whitespace-nowrap">Traverse_Controller</div>
            </div>

            {/* View/Action Buttons */}
            <div className="flex flex-col gap-8">
               <button 
                 onClick={() => { setIsImmersive(false); setSelectedDest(null); setScanProgress(0); setMovement({x:0,z:0}); setLookRotation({x:0,y:0}); }}
                 className="w-16 h-16 sm:w-24 sm:h-24 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] flex items-center justify-center text-white/60 hover:text-white hover:bg-red-500/30 hover:border-red-500/50 transition-all active:scale-90 shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
               >
                 <X size={32} />
               </button>
               <button 
                 onClick={() => { setLookRotation({x: 0, y: 0}); setMovement({x:0, z:0}); }}
                 className="w-16 h-16 sm:w-24 sm:h-24 bg-[#E1306C] backdrop-blur-2xl border border-white/30 text-white rounded-[2.5rem] flex items-center justify-center shadow-[0_30px_80px_rgba(225,48,108,0.5)] active:scale-90 transition-all"
               >
                 <RotateCw size={32} />
               </button>
            </div>
          </div>
        </div>
      )}

      {/* Selection / Scanning Interface (When not immersive) */}
      {!isImmersive && (
        <div className="relative z-10 max-w-7xl w-full text-center space-y-16 sm:space-y-24 transition-all duration-1000">
          <div className="inline-flex items-center gap-6 px-10 py-4 rounded-3xl bg-white/5 backdrop-blur-3xl border border-white/10 text-white shadow-2xl animate-in fade-in slide-in-from-bottom-6 duration-1000 mx-auto">
             <div className="w-12 h-12 story-ring p-[2px] rounded-2xl flex items-center justify-center">
               <div className="bg-black w-full h-full rounded-[14px] flex items-center justify-center">
                  <Box size={24} className="text-[#E1306C] animate-spin-slow" />
               </div>
             </div>
             <div className="text-left">
                <p className="text-[10px] font-black uppercase tracking-[0.6em] leading-none mb-1">Neural_Link_Core</p>
                <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest">Version 4.2.0_Stable</p>
             </div>
          </div>

          <div className="space-y-8 sm:space-y-12 animate-in fade-in zoom-in duration-1000 delay-300 px-6">
            <h2 className="text-7xl sm:text-9xl md:text-[12rem] font-heritage font-bold text-white leading-tight tracking-tighter uppercase">
              IMMERSE <br/>
              <span className="insta-text-gradient italic">{selectedDest ? selectedDest.name[language] : (language === 'EN' ? 'Reality.' : 'යථාර්ථය.')}</span>
            </h2>
            <p className="text-gray-400 text-xl sm:text-4xl font-light italic max-w-4xl mx-auto leading-relaxed opacity-80">
              {selectedDest 
                ? (language === 'EN' 
                    ? "Starting the system. Preparing the 3D view for you."
                    : "නාභිගත කිරීම ආරම්භ විය. දෘශ්‍ය අවකාශය සකසමින් පවතී.")
                : (language === 'EN' 
                    ? "See high-quality 3D models of holy places. Use the controller to look around." 
                    : "දිවයිනේ පූජනීය ස්ථානවල ත්‍රිමාණ ප්‍රතිනිර්මාණ සමඟ සම්බන්ධ වන්න. ගවේෂණය සඳහා පාලක භාවිතා කරන්න.")
              }
            </p>
          </div>

          {!selectedDest ? (
            <div className="space-y-16 sm:space-y-24 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
              <div className="max-w-xl mx-auto relative group px-6 touch-auto">
                <div className="absolute left-14 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#E1306C] transition-colors pointer-events-none">
                  <Search size={24} />
                </div>
                <input 
                  type="text"
                  placeholder={language === 'EN' ? "Locate Reality Portal..." : "යථාර්ථ පිවිසුම් සොයන්න..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-20 pr-14 py-8 bg-white/5 border border-white/10 text-white rounded-full focus:outline-none focus:ring-[12px] focus:ring-[#E1306C]/10 backdrop-blur-3xl font-bold text-xl transition-all pointer-events-auto placeholder:text-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.5)]"
                />
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-12 overflow-y-auto max-h-[50vh] no-scrollbar px-6 pointer-events-auto pb-20">
                {featuredDestinations.map((dest, idx) => (
                  <button
                    key={dest.id}
                    onClick={() => { setSelectedDest(dest); setScanProgress(0); }}
                    className="group relative aspect-[3/4] sm:h-96 rounded-[4rem] overflow-hidden border border-white/10 hover:border-[#E1306C]/60 transition-all duration-1000 shadow-[0_40px_80px_rgba(0,0,0,0.4)] animate-in slide-in-from-bottom-8"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <img src={dest.image} alt={dest.name[language]} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-125 group-hover:rotate-2" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/30 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
                    <div className="absolute bottom-10 left-10 right-10 text-left space-y-3">
                      <p className="text-[9px] font-black text-[#E1306C] uppercase tracking-[0.5em]">{dest.location}</p>
                      <h4 className="text-sm sm:text-lg font-heritage font-bold text-white uppercase tracking-widest truncate">{dest.name[language]}</h4>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 scale-50 group-hover:scale-100">
                       <div className="w-20 h-20 rounded-[2.5rem] bg-white/10 backdrop-blur-2xl flex items-center justify-center border border-white/30 text-white shadow-2xl">
                          <Maximize2 size={32} />
                       </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto space-y-20 animate-in fade-in slide-in-from-bottom-12 duration-1000 px-6">
               <div className="relative bg-white/5 backdrop-blur-3xl border border-white/10 p-16 sm:p-28 rounded-[6rem] shadow-[0_100px_200px_rgba(0,0,0,0.8)] overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-[#E1306C] to-transparent shadow-[0_0_40px_#E1306C] animate-scan z-20"></div>

                  <div className="space-y-20 relative z-10 text-center">
                    <div className="flex flex-col items-center gap-12">
                      <div className="w-48 h-48 rounded-[5rem] overflow-hidden story-ring p-[3px] shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
                         <img src={selectedDest.image} className="w-full h-full object-cover rounded-[4.8rem]" />
                      </div>
                      <div className="space-y-6">
                        <div className="flex items-center justify-center gap-5">
                          <Radio size={24} className="text-[#E1306C] animate-pulse" />
                          <p className="text-[12px] font-black text-[#E1306C] uppercase tracking-[0.6em]">{neuralSteps[currentStep]}</p>
                        </div>
                        <h4 className="text-5xl sm:text-8xl font-heritage font-bold text-white tracking-tighter uppercase leading-none drop-shadow-2xl">{selectedDest.name[language]}</h4>
                      </div>
                    </div>

                    <div className="space-y-10">
                      <div className="flex justify-between items-end px-6">
                        <div className="text-left space-y-3">
                          <span className="block text-[12px] font-black text-gray-500 uppercase tracking-widest leading-none">Buffer_Sync_State</span>
                          <div className="flex items-center gap-3">
                             <Activity size={14} className="text-white/20 animate-pulse" />
                             <span className="block text-base font-bold text-white/20 italic">Processing spatial harmonics...</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-7xl sm:text-[10rem] font-heritage font-black text-white leading-none tabular-nums tracking-tighter">{scanProgress}%</span>
                        </div>
                      </div>
                      <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden p-1.5 border border-white/10 shadow-inner">
                        <div className="h-full rounded-full bg-gradient-to-r from-[#E1306C] via-[#fd5949] to-[#f09433] transition-all duration-300 ease-out shadow-[0_0_40px_rgba(225,48,108,0.8)]" style={{ width: `${scanProgress}%` }} />
                      </div>
                    </div>
                  </div>
               </div>
               <button onClick={() => setSelectedDest(null)} className="flex items-center gap-6 text-gray-500 hover:text-white transition-all uppercase tracking-[0.8em] text-[12px] font-black mx-auto pointer-events-auto group">
                 <ArrowLeft size={20} className="group-hover:translate-x-[-8px] transition-transform" /> Abort_Neural_Link
               </button>
            </div>
          )}
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan {
          0% { top: 0%; opacity: 0.2; }
          50% { top: 100%; opacity: 0.8; }
          100% { top: 0%; opacity: 0.2; }
        }
        @keyframes scan-slow {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 0.8; }
          100% { transform: translateY(800px); opacity: 0; }
        }
        .animate-scan { animation: scan 8s linear infinite; }
        .animate-scan-slow { animation: scan-slow 10s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
        .animate-spin-slow { animation: spin 15s linear infinite; }
        .animate-bounce-slow { animation: bounce 5s infinite; }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .shadow-3xl { box-shadow: 0 50px 120px rgba(225,48,108,0.25); }
      `}} />
    </div>
  );
};

export default VRExperience;
