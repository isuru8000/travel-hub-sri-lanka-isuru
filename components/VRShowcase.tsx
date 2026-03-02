
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Language } from '../types.ts';
import { Layers, Box, Sparkles, Target, Radio, ArrowLeft, Gem, Wind, Zap, Lock, Loader2, Cpu, Scan, Hexagon, Binary, Shield, ZapOff, Signal, FastForward, Move, Compass, RotateCw, Activity, Database, HardDrive, Sun, ArrowDown } from 'lucide-react';

interface VRShowcaseProps {
  language: Language;
  setView: (view: any) => void;
}

const REGISTRY_01 = [
  {
    id: 'sigiriya',
    name: { EN: 'Sigiriya Lion Rock', SI: 'සීගිරිය සිංහගිරිය' },
    status: '92% SCANNED',
    image: 'https://i.pinimg.com/1200x/3a/e7/48/3ae7487f4e95b92ce2d3c10c5b1038e0.jpg',
    type: 'FORTRESS',
    progress: 92
  },
  {
    id: 'kandy',
    name: { EN: 'Temple of the Tooth', SI: 'ශ්‍රී දළදා මාළිගාව' },
    status: '65% PROCESSING',
    image: 'https://images.unsplash.com/photo-1665849050332-8d5d7e59afb6?auto=format&fit=crop&w=800&q=80',
    type: 'SACRED',
    progress: 65
  },
  {
    id: 'ella',
    name: { EN: 'Nine Arch Bridge', SI: 'ආරුක්කු නවය පාලම' },
    status: '40% RENDERING',
    image: 'https://images.unsplash.com/photo-1578519050142-afb511e518de?auto=format&fit=crop&w=800&q=80',
    type: 'HERITAGE',
    progress: 40
  },
  {
    id: 'galle',
    name: { EN: 'Galle Dutch Fort', SI: 'ගාල්ල ලන්දේසි කොටුව' },
    status: '15% INITIALIZING',
    image: 'https://images.unsplash.com/photo-1654561773591-57b9413c45c0?auto=format&fit=crop&w=800&q=80',
    type: 'COASTAL',
    progress: 15
  }
];

const PHASE_02_SPACES = [
  {
    id: 'ruwanwelisaya',
    name: { EN: 'Sacred Ruwanwelisaya', SI: 'රුවන්වැලිසෑය' },
    status: 'COMING SOON',
    image: 'https://i.pinimg.com/1200x/e6/c4/67/e6c467b97e6ff3c8344d25e2b107b50e.jpg',
    type: 'ANCIENT',
    progress: 5
  },
  {
    id: 'gal-vihara',
    name: { EN: 'Gal Vihara Sculptures', SI: 'ගල් විහාරය' },
    status: 'COMING SOON',
    image: 'https://i.pinimg.com/1200x/bd/35/c6/bd35c69b7b3ed5e31da0edc4e374b028.jpg',
    type: 'KINGDOM',
    progress: 5
  },
  {
    id: 'jaffna-vr',
    name: { EN: 'Jaffna Royal Portal', SI: 'යාපනය රාජකීය ද්වාරය' },
    status: 'NORTH SECTOR SYNC',
    image: 'https://images.unsplash.com/photo-1578503117502-3162799f9392?auto=format&fit=crop&w=800&q=80',
    type: 'NORTHERN',
    progress: 8
  },
  {
    id: 'yala',
    name: { EN: 'Yala Leopard Zone', SI: 'යාල අභයභූමිය' },
    status: 'COMING SOON',
    image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=800&q=80',
    type: 'WILDLIFE',
    progress: 5
  }
];

const PHASE_05_SPACES = [
  {
    id: 'mihintale-peak',
    name: { EN: 'Mihintale Solar Peak', SI: 'මිහින්තලේ රන් පියස' },
    status: 'AWAITING LIGHT LOCK',
    image: 'https://images.unsplash.com/photo-1578503117502-3162799f9392?auto=format&fit=crop&w=800&q=80',
    type: 'SACRED',
    progress: 0
  },
  {
    id: 'buduruwagala-monolith',
    name: { EN: 'Buduruwagala Monolith', SI: 'බුදුරුවගල සලකුණ' },
    status: 'SYNCING VIBRATION',
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=800&q=80',
    type: 'KINGDOM',
    progress: 0
  },
  {
    id: 'dunhinda-liquid',
    name: { EN: 'Dunhinda Liquid Reality', SI: 'දුන්හිඳ දිය දහම' },
    status: 'FLOW CALIBRATION',
    image: 'https://i.pinimg.com/1200x/6d/7e/56/6d7e563f1c2023515b337ca7b266cd77.jpg',
    type: 'CASCADE',
    progress: 0
  },
  {
    id: 'nilaveli-abyss',
    name: { EN: 'Nilaveli Blue Node', SI: 'නිලාවේලි නිල් මැණික' },
    status: 'DEPTH HANDSHAKE',
    image: 'https://i.pinimg.com/1200x/c8/c2/40/c8c240b6df4dfb3bccbaa0995b8266b4.jpg',
    type: 'ABYSS',
    progress: 0
  }
];

const VRCard: React.FC<{ space: any, language: Language, idx: number, isLocked?: boolean, themeColor?: string, onClick?: () => void }> = ({ space, language, idx, isLocked, themeColor = '#E1306C', onClick }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 25, y: y * -25 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={!isLocked ? onClick : undefined}
      className={`group relative h-[600px] rounded-[4.5rem] bg-black/80 backdrop-blur-3xl border border-white/10 transition-all duration-1000 cubic-bezier(0.23, 1, 0.32, 1) cursor-pointer overflow-hidden ${isLocked ? 'opacity-70 grayscale-[0.5] hover:grayscale-0 hover:opacity-100' : 'hover:border-white/30'}`}
      style={{ 
        perspective: '2000px',
        transformStyle: 'preserve-3d',
        transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg) ${isHovered ? 'scale(1.05) translateY(-10px)' : 'scale(1)'}`,
        boxShadow: isHovered ? `0 80px 160px -30px ${themeColor}88` : '0 20px 50px rgba(0,0,0,0.5)'
      }}
    >
      <img 
        src={space.image} 
        className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-all duration-[1500ms] group-hover:scale-110" 
        alt={space.name[language]} 
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-[#010101] via-black/40 to-transparent" />
      
      <div className="absolute inset-0 p-14 flex flex-col justify-between" style={{ transformStyle: 'preserve-3d' }}>
        <div className="flex justify-between items-start" style={{ transform: 'translateZ(60px)' }}>
           <div className={`px-8 py-4 rounded-2xl border text-[11px] font-black uppercase tracking-[0.4em] backdrop-blur-2xl ${isLocked ? 'bg-white/5 border-white/10 text-white/40' : 'bg-black/90 border-white/20 text-white shadow-2xl'}`}>
              {space.type}
           </div>
           <div className={`w-20 h-20 rounded-3xl border flex items-center justify-center shadow-3xl backdrop-blur-2xl transition-all duration-700 ${isLocked ? 'bg-white/5 border-white/10 group-hover:border-white/40' : `bg-[#E1306C]/20 border-[#E1306C]/50 group-hover:bg-[#E1306C] group-hover:border-white`}`}>
              {isLocked ? <Lock size={28} className="text-white/30 group-hover:text-white transition-colors animate-pulse" /> : <Scan size={28} className={`text-[#E1306C] group-hover:text-white transition-colors animate-pulse`} />}
           </div>
        </div>

        <div className="space-y-12" style={{ transform: 'translateZ(120px)' }}>
           <div className="space-y-5">
              <div className="flex items-center gap-4">
                 <div className={`w-2 h-2 rounded-full animate-ping ${isLocked ? 'bg-white/20' : 'bg-[#E1306C]'}`} />
                 <p className={`text-[12px] font-black uppercase tracking-[0.6em] drop-shadow-2xl ${isLocked ? 'text-white/30' : `text-[#E1306C]`}`}>
                   {isLocked ? 'ARCHIVE_LOCKED' : 'NEURAL_SYNC_ACTIVE'}
                 </p>
              </div>
              <h4 className="text-5xl md:text-6xl font-heritage font-bold text-white leading-tight uppercase tracking-tighter group-hover:insta-text-gradient transition-all duration-700">
                {space.name[language]}
              </h4>
           </div>

           <div className="space-y-6 pt-12 border-t border-white/10">
              <div className="flex justify-between items-center text-[11px] font-black text-white/40 uppercase tracking-[0.4em]">
                 <div className="flex items-center gap-3">
                    <Activity size={14} className={isLocked ? 'text-white/20' : 'text-[#E1306C]'} />
                    <span>{isLocked ? 'UPLINK_PENDING' : 'SYNERGY_FLOW'}</span>
                 </div>
                 <span className={isLocked ? 'text-white/60' : `text-[#E1306C]`}>{space.status}</span>
              </div>
              <div className="h-3.5 w-full bg-white/5 rounded-full overflow-hidden p-[2px] border border-white/5 shadow-inner">
                 <div 
                   className={`h-full rounded-full transition-all duration-[2500ms] ease-out ${isLocked ? 'bg-white/10 group-hover:bg-white/40' : `bg-gradient-to-r from-[#E1306C] via-[#fd5949] to-[#f09433] shadow-[0_0_30px_rgba(225,48,108,0.6)]`}`} 
                   style={{ width: `${space.progress || 5}%` }}
                 ></div>
              </div>
           </div>
        </div>
      </div>

      {/* Scanning Line Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className={`absolute top-0 left-0 w-full h-[4px] shadow-[0_0_30px_currentColor] animate-scan-slow opacity-80 ${isLocked ? 'text-white/10' : `text-[#E1306C]`}`} 
          style={{ animationDelay: `${idx * 1.5}s` }}
        ></div>
      </div>
      
      {/* Glossy Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
    </div>
  );
};

const VRShowcase: React.FC<VRShowcaseProps> = ({ language, setView }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [targetRotation, setTargetRotation] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, z: 0 });
  const [velocity, setVelocity] = useState({ x: 0, z: 0 });
  
  const lastTouchRef = useRef<{ x: number, y: number } | null>(null);
  const requestRef = useRef<number | null>(null);

  const animate = () => {
    setRotation(prev => ({
      x: prev.x + (targetRotation.x - prev.x) * 0.08,
      y: prev.y + (targetRotation.y - prev.y) * 0.08
    }));

    setPosition(prev => ({
      x: prev.x + velocity.x,
      z: prev.z + velocity.z
    }));
    
    setVelocity(prev => ({
      x: prev.x * 0.92,
      z: prev.z * 0.92
    }));

    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current !== null) cancelAnimationFrame(requestRef.current);
    };
  }, [targetRotation, velocity]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const xRot = (window.innerHeight / 2 - e.pageY) / 60;
      const yRot = (window.innerWidth / 2 - e.pageX) / 60;
      setTargetRotation({ x: xRot, y: yRot });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    if (lastTouchRef.current) {
      const dx = touch.clientX - lastTouchRef.current.x;
      const dy = touch.clientY - lastTouchRef.current.y;
      
      if (Math.abs(dx) > Math.abs(dy)) {
        setTargetRotation(prev => ({
          x: prev.x - dy * 0.05,
          y: prev.y + dx * 0.05
        }));
      }
    }
    lastTouchRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleJoystickMove = (e: React.TouchEvent) => {
    e.stopPropagation();
    const touch = e.touches[0];
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (touch.clientX - centerX) / (rect.width / 2);
    const y = (touch.clientY - centerY) / (rect.height / 2);
    setVelocity({ x: x * 6, z: -y * 6 });
  };

  const particles = useMemo(() => {
    return Array.from({ length: 180 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: '110%', 
      duration: `${12 + Math.random() * 18}s`,
      delay: `${Math.random() * -30}s`,
      size: `${Math.random() * 2.5 + 0.5}px`,
      opacity: Math.random() * 0.5 + 0.1,
      color: Math.random() > 0.8 ? '#E1306C' : 'white',
      driftX: `${(Math.random() - 0.5) * 180}px`
    }));
  }, []);

  return (
    <div 
      className="min-h-screen bg-[#010101] flex flex-col items-center relative overflow-x-hidden pt-32 pb-40 px-4 md:px-6 touch-auto no-scrollbar"
      onTouchMove={handleTouchMove}
      onTouchEnd={() => { lastTouchRef.current = null; }}
    >
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/stardust.png')` }} />
      
      {/* Animated Flowing Grid Background */}
      <div 
        className="fixed inset-0 opacity-[0.12] pointer-events-none transition-transform duration-1000 ease-out" 
        style={{ 
          backgroundImage: `linear-gradient(#E1306C 1px, transparent 1px), linear-gradient(90deg, #E1306C 1px, transparent 1px)`, 
          backgroundSize: '120px 120px', 
          transform: `perspective(1200px) rotateX(75deg) translateY(${position.z}px) translateX(${position.x + rotation.y * 12}px)`, 
          maskImage: 'radial-gradient(ellipse at center, black 10%, transparent 80%)',
          animation: 'grid-flow 10s linear infinite'
        }} 
      />
      
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div 
            className="absolute -top-[10%] -left-[5%] w-[100%] h-[120%] bg-gradient-to-br from-[#E1306C]/10 via-transparent to-blue-600/5 rotate-6 blur-[180px]"
            style={{ transform: `translate(${rotation.y * -6}px, ${rotation.x * -6}px)` }}
        />
      </div>

      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <div 
            key={p.id} 
            className="absolute rounded-full pointer-events-none animate-descent-particle" 
            style={{ 
              left: p.left, 
              top: p.top,
              width: p.size, 
              height: p.size, 
              opacity: p.opacity, 
              backgroundColor: p.color, 
              animationDuration: p.duration, 
              animationDelay: p.delay,
              // @ts-ignore
              '--drift-x': p.driftX
            }} 
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl space-y-40">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 px-4 animate-in fade-in duration-1000">
           <div className="relative w-44 h-44 rounded-full border-2 border-white/5 bg-black/40 backdrop-blur-3xl flex items-center justify-center overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_40%,_rgba(225,48,108,0.05)_100%)]" />
              <div className="absolute inset-0 animate-radar-pulse opacity-20">
                 <div className="absolute top-0 left-1/2 w-1/2 h-1/2 bg-gradient-to-tr from-[#E1306C]/60 to-transparent rounded-tr-full origin-bottom-left animate-spin-slow" />
              </div>
              <div className="relative z-10 flex flex-col items-center gap-2">
                 <Compass size={28} className="text-[#E1306C] group-hover:rotate-45 transition-transform duration-700" />
                 <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">Node_Sync</span>
                 <div className="text-[11px] font-bold text-white tracking-[0.2em]">{Math.round(position.x)}, {Math.round(position.z)}</div>
              </div>
              <div 
                className="absolute w-2 h-2 bg-[#E1306C] rounded-full shadow-[0_0_10px_#E1306C] transition-all duration-150"
                style={{ transform: `translate(${velocity.x * 3}px, ${-velocity.z * 3}px)` }}
              />
           </div>

           <div className="text-center space-y-4 max-w-sm">
              <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-black uppercase tracking-[0.4em]">
                 <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
                 System_Nominal
              </div>
              <p className="text-sm text-gray-500 font-medium italic leading-relaxed">
                "The system is ready. Use the controller to see the old places."
              </p>
           </div>

           <div 
             className="w-44 h-44 bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-full flex items-center justify-center relative group active:scale-95 transition-all shadow-inner touch-none"
             onTouchMove={handleJoystickMove}
           >
              <div className="absolute inset-4 rounded-full border border-white/5 flex items-center justify-center opacity-40">
                 <Move size={24} className="text-white/20" />
              </div>
              <div className="w-16 h-16 bg-white/5 backdrop-blur-xl border border-white/20 rounded-full shadow-2xl flex items-center justify-center group-active:translate-y-1">
                  <div className="w-2.5 h-2.5 bg-[#E1306C] rounded-full shadow-[0_0_20px_#E1306C] animate-pulse" />
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[9px] font-black text-white/30 uppercase tracking-[0.5em] whitespace-nowrap">Traverse_Controller</div>
           </div>
        </div>
        
        <div 
          className="w-full flex justify-center animate-in zoom-in duration-1000"
          style={{ 
            transform: `perspective(2000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`, 
            transformStyle: 'preserve-3d',
            willChange: 'transform'
          }}
        >
          <div className="relative p-[1px] bg-gradient-to-br from-[#E1306C] via-purple-500/40 to-blue-600 rounded-[5rem] md:rounded-[7rem] shadow-[0_0_150px_rgba(225,48,108,0.25)] w-full max-w-6xl">
            <div className="bg-black/95 backdrop-blur-[150px] rounded-[4.9rem] md:rounded-[6.9rem] p-16 md:p-40 space-y-16 text-center border border-white/10 relative overflow-hidden">
               <div className="absolute top-0 left-0 right-0 h-[6px] bg-gradient-to-r from-transparent via-[#E1306C] to-transparent shadow-[0_0_50px_#E1306C] animate-scan-fast z-20 opacity-90"></div>
               
               <div className="relative z-10 flex flex-col items-center gap-12" style={{ transform: 'translateZ(150px)' }}>
                  <div className="inline-flex items-center gap-6 px-10 py-5 rounded-full bg-[#E1306C]/20 border border-[#E1306C]/50 text-[#E1306C] shadow-[0_0_80px_rgba(225,48,108,0.4)] animate-pulse">
                     <Target size={24} className="text-[#E1306C]" />
                     <span className="text-[12px] md:text-[14px] font-black uppercase tracking-[0.7em]">Neural_Sync_Protocol_Active</span>
                  </div>
                  
                  <h2 className="text-7xl sm:text-8xl md:text-[11rem] font-heritage font-bold text-white tracking-tighter uppercase leading-[0.8] drop-shadow-[0_40px_80px_rgba(0,0,0,1)]">
                    REWRITE <br/>
                    <span className="insta-text-gradient italic">3D REALITY.</span>
                  </h2>
 
                  <div className="w-full max-w-2xl space-y-8">
                     <div className="flex justify-between items-end text-[11px] md:text-[13px] font-black text-white/60 uppercase tracking-[0.4em] px-4">
                        <div className="flex items-center gap-5">
                          <Activity size={18} className="text-[#E1306C] animate-pulse" />
                          <span>GLOBAL_SYNTHESIS_STAGE_08</span>
                        </div>
                        <span className="text-white text-lg">94.8%</span>
                     </div>
                     <div className="h-5 w-full bg-white/5 rounded-full overflow-hidden p-[3px] border border-white/10 shadow-inner">
                        <div className="h-full rounded-full bg-gradient-to-r from-[#fdf497] via-[#fd5949] to-[#E1306C] shadow-[0_0_50px_rgba(225,48,108,1)] transition-all duration-1000" style={{ width: '94.8%' }}></div>
                     </div>
                  </div>
 
                  <p className="max-w-3xl mx-auto text-gray-400 text-lg md:text-2xl font-medium uppercase tracking-[0.3em] leading-loose opacity-80 italic">
                    Making 3D models of the island's holy places. The system is working well.
                  </p>
               </div>
            </div>
            
            <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[90%] h-20 bg-[#E1306C]/20 blur-[120px] -z-10" />
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 text-white/20 animate-bounce">
           <span className="text-[9px] font-black uppercase tracking-[1em] ml-[1em]">Scroll for Hidden Nodes</span>
           <ArrowDown size={24} />
        </div>

        <div className="space-y-24">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="flex items-center gap-6 text-[#E1306C] opacity-80">
              <div className="h-[2px] w-24 bg-gradient-to-r from-transparent to-[#E1306C]"></div>
              <Activity size={28} className="animate-spin-slow" />
              <span className="text-[12px] font-black uppercase tracking-[0.8em]">Neural_Archives_01</span>
              <div className="h-[2px] w-24 bg-gradient-to-l from-transparent to-[#E1306C]"></div>
            </div>
            <h3 className="text-5xl md:text-8xl font-heritage font-bold text-white tracking-tighter uppercase">Projected <span className="insta-text-gradient italic">Dimensions.</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {REGISTRY_01.map((space, idx) => (
              <VRCard key={space.id} space={space} language={language} idx={idx} />
            ))}
          </div>
        </div>

        <div className="space-y-32 py-40 border-t border-white/5 relative overflow-hidden">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-40 bg-blue-600/5 blur-[150px] -rotate-6 pointer-events-none" />

           <div className="flex flex-col items-center text-center space-y-10 relative z-10">
              <div className="px-8 py-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] md:text-[12px] font-black uppercase tracking-[0.6em] flex items-center gap-4 shadow-2xl backdrop-blur-md">
                 <Binary size={18} className="animate-pulse" />
                 Expansion Registry 02 & 03
              </div>
              <h3 className="text-4xl md:text-9xl font-heritage font-bold text-white uppercase tracking-tighter leading-none">
                 COMING <span className="text-blue-500 italic">SOON.</span>
              </h3>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
              {PHASE_02_SPACES.map((space, idx) => (
                <VRCard key={space.id} space={space} language={language} idx={idx + 4} isLocked={true} themeColor="#3B82F6" />
              ))}
           </div>
        </div>

        <div className="space-y-32 py-40 border-t border-white/5 relative overflow-hidden">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-60 bg-amber-600/10 blur-[180px] rotate-12 pointer-events-none" />

           <div className="flex flex-col items-center text-center space-y-10 relative z-10">
              <div className="px-8 py-3 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] md:text-[12px] font-black uppercase tracking-[0.6em] flex items-center gap-4 shadow-2xl backdrop-blur-md">
                 <Sun size={18} className="animate-pulse" />
                 Eternal Registry 05
              </div>
              <h3 className="text-4xl md:text-9xl font-heritage font-bold text-white uppercase tracking-tighter leading-none">
                 THE <span className="text-amber-500 italic">FRONTIER.</span>
              </h3>
              <p className="text-gray-500 text-sm md:text-base font-black uppercase tracking-[0.4em] max-w-2xl leading-relaxed opacity-60 italic">
                Looking at the high mountains and deep seas. New places will be ready soon.
              </p>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
              {PHASE_05_SPACES.map((space, idx) => (
                <VRCard key={space.id} space={space} language={language} idx={idx + 12} isLocked={true} themeColor="#F59E0B" />
              ))}
           </div>
           
           <div className="pt-20 flex justify-center">
              <div className="flex items-center gap-5 px-16 py-8 rounded-full bg-white/[0.02] border border-white/10 text-white/20 text-[11px] font-black uppercase tracking-[0.6em] animate-pulse">
                <FastForward size={20} />
                Deep Registry Nodes Processing
              </div>
           </div>
        </div>

        <div className="flex flex-col items-center gap-20">
           <button 
             onClick={() => setView('home')}
             className="relative flex items-center gap-8 text-white/50 hover:text-white transition-all uppercase tracking-[0.6em] text-[12px] font-black group px-20 py-8 rounded-full border border-white/10 hover:border-[#E1306C]/40 active:scale-95 bg-black/40 backdrop-blur-3xl overflow-hidden shadow-2xl"
           >
             <div className="absolute inset-0 bg-[#E1306C]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
             <ArrowLeft size={22} className="group-hover:-translate-x-2 transition-transform relative z-10" />
             <span className="relative z-10">Return to Home Registry</span>
           </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes grid-flow {
          0% { background-position: 0 0; }
          100% { background-position: 0 120px; }
        }
        @keyframes scan-fast {
          0% { top: 0%; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes scan-slow {
          0% { top: -20%; opacity: 0; }
          30% { opacity: 0.6; }
          70% { opacity: 0.6; }
          100% { top: 120%; opacity: 0; }
        }
        @keyframes descent-particle {
          0% { transform: translateY(0) translateX(0) scale(1); opacity: 0; }
          25% { opacity: 1; }
          75% { opacity: 1; }
          100% { transform: translateY(-135vh) translateX(var(--drift-x)) scale(0.4); opacity: 0; }
        }
        .animate-descent-particle {
          animation: descent-particle linear infinite;
        }
        .animate-scan-fast { animation: scan-fast 4s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
        .animate-scan-slow { animation: scan-slow 8s linear infinite; }
        .animate-spin-slow { animation: spin 24s linear infinite; }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .rotate-y-180 { transform: rotateY(180deg); }

        @keyframes radar-pulse {
          0% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.1); opacity: 0.3; }
          100% { transform: scale(1); opacity: 0.2; }
        }
        .animate-radar-pulse { animation: radar-pulse 3s ease-in-out infinite; }
      `}} />
    </div>
  );
};

export default VRShowcase;
