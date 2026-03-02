import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Language } from '../types.ts';
import { 
  ArrowLeft, 
  ArrowRight,
  Orbit, 
  Scan, 
  Activity, 
  Compass, 
  RotateCw,
  X,
  Move
} from 'lucide-react';

interface VRTripFutureProps {
  language: Language;
  setView: (view: any) => void;
}

const VR_NODES = [
  {
    id: 'vr-sigiriya',
    name: { EN: 'Sigiriya Sky Palace', SI: 'සීගිරිය අහස් මාලිගය' },
    image: 'https://i.pinimg.com/736x/87/b1/7f/87b17fb4f6d602cf2606fdf482e41c2b.jpg',
    type: 'AERIAL_SCANNED',
    status: 'SYNC_READY',
    stats: '82M POLYGONS'
  },
  {
    id: 'vr-ella',
    name: { EN: 'Ella Misty Ridge', SI: 'ඇල්ල මීදුම් කඳු වැටිය' },
    image: 'https://i.pinimg.com/736x/19/c4/ca/19c4ca9cac03989b7a94bbe48beb166d.jpg',
    type: 'TERRAIN_RENDER',
    status: 'LIVE_LINK',
    stats: '114M POLYGONS'
  },
  {
    id: 'vr-galle',
    name: { EN: 'Galle Coastal Ramparts', SI: 'ගාල්ල වෙරළබඩ පවුර' },
    image: 'https://images.unsplash.com/photo-1654561773591-57b9413c45c0?auto=format&fit=crop&w=1000&q=80',
    type: 'COASTAL_DEPTH',
    status: 'TEMPORAL_SYNC',
    stats: '67M POLYGONS'
  }
];

const VRTripFuture: React.FC<VRTripFutureProps> = ({ language, setView }) => {
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null);
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncProgress, setSyncProgress] = useState(0);
  const [isImmersive, setIsImmersive] = useState(false);
  
  // Refined Control States
  const [lookRotation, setLookRotation] = useState({ x: 0, y: 0 });
  const [translation, setTranslation] = useState({ x: 0, z: 0 });
  const [joystickPos, setJoystickPos] = useState({ x: 0, y: 0 });
  const [isJoystickActive, setIsJoystickActive] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const activeNode = useMemo(() => VR_NODES.find(n => n.id === activeNodeId), [activeNodeId]);

  // Visual Effects Data
  const digitalDebris = useMemo(() => Array.from({ length: 20 }).map((_, i) => ({
    id: i, left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, size: Math.random() * 100 + 50, duration: Math.random() * 20 + 20, delay: Math.random() * -20, rotate: Math.random() * 360
  })), []);

  const dataStreams = useMemo(() => Array.from({ length: 15 }).map((_, i) => ({
    id: i, left: `${Math.random() * 100}%`, height: `${Math.random() * 200 + 100}px`, duration: `${Math.random() * 2 + 1}s`, delay: `${Math.random() * 5}s`, opacity: Math.random() * 0.3 + 0.1
  })), []);

  // Sync Logic
  const handleInitialize = (id: string) => {
    setActiveNodeId(id);
    setIsSyncing(true);
    setSyncProgress(0);
    
    const interval = setInterval(() => {
      setSyncProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsSyncing(false);
            setIsImmersive(true);
          }, 800);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);
  };

  // LOOK CONTROL: Pointer move for mouse/touch
  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isImmersive || isJoystickActive) return;
    
    // Sensitivity Adjustment
    const sensitivity = 0.15;
    setLookRotation(prev => ({
      x: Math.max(-45, Math.min(45, prev.x - e.movementY * sensitivity)),
      y: prev.y + e.movementX * sensitivity
    }));
  };

  // JOYSTICK LOGIC
  const handleJoystickStart = (e: React.PointerEvent) => {
    e.stopPropagation();
    setIsJoystickActive(true);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handleJoystickMove = (e: React.PointerEvent) => {
    if (!isJoystickActive) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Normalized displacement (-1 to 1)
    let dx = (e.clientX - (rect.left + centerX)) / centerX;
    let dy = (e.clientY - (rect.top + centerY)) / centerY;
    
    // Limit to circular boundary
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist > 1) {
      dx /= dist;
      dy /= dist;
    }

    setJoystickPos({ x: dx * 100, y: dy * 100 });
    
    // Movement velocity based on joystick position
    setTranslation(prev => ({
      x: prev.x - dx * 10,
      z: prev.z - dy * 10
    }));
  };

  const handleJoystickEnd = () => {
    setIsJoystickActive(false);
    setJoystickPos({ x: 0, y: 0 });
  };

  // DESKTOP WASD SUPPORT
  useEffect(() => {
    if (!isImmersive) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const step = 20;
      switch(e.key.toLowerCase()) {
        case 'w': setTranslation(p => ({ ...p, z: p.z + step })); break;
        case 's': setTranslation(p => ({ ...p, z: p.z - step })); break;
        case 'a': setTranslation(p => ({ ...p, x: p.x + step })); break;
        case 'd': setTranslation(p => ({ ...p, x: p.x - step })); break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isImmersive]);

  return (
    <div 
      ref={containerRef}
      onPointerMove={handlePointerMove}
      className="min-h-screen bg-[#020205] flex flex-col items-center pt-32 pb-40 px-6 text-center relative overflow-hidden select-none touch-none"
    >
      {/* 1. Dynamic Background Debris */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {digitalDebris.map(debris => (
          <div 
            key={debris.id}
            className="absolute border border-white/5 bg-white/[0.01] rounded-full animate-float-debris"
            style={{
              left: debris.left, top: debris.top, width: `${debris.size}px`, height: `${debris.size}px`,
              animationDuration: `${debris.duration}s`, animationDelay: `${debris.delay}s`, transform: `rotate(${debris.rotate}deg)`
            }}
          />
        ))}
      </div>

      {/* 2. Neural Data Streams */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-40">
        {dataStreams.map(stream => (
          <div 
            key={stream.id}
            className="absolute w-[1px] bg-gradient-to-b from-transparent via-[#0EA5E9] to-transparent animate-data-stream"
            style={{ left: stream.left, height: stream.height, opacity: stream.opacity, animationDuration: stream.duration, animationDelay: stream.delay }}
          />
        ))}
      </div>

      {/* 3. Global Scanning Plane */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-[#E1306C]/40 to-transparent shadow-[0_0_20px_rgba(225,48,108,0.5)] animate-scan-plane" />
      </div>

      {/* 4. Immersive Simulation Environment */}
      {isImmersive && activeNode && (
        <div className="fixed inset-0 z-40 bg-black animate-in fade-in duration-1000">
           <div 
            className="absolute inset-0 transition-transform duration-300 ease-out"
            style={{
              perspective: '1200px',
              transformStyle: 'preserve-3d'
            }}
           >
              <div 
                className="absolute inset-0 w-full h-full transition-transform duration-100 ease-linear"
                style={{
                  transform: `rotateX(${lookRotation.x}deg) rotateY(${lookRotation.y}deg) translate3d(${translation.x}px, 0, ${translation.z}px)`,
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Visual Skybox Layer */}
                <div 
                  className="absolute inset-[-400%] bg-cover bg-center opacity-70"
                  style={{ 
                    backgroundImage: `url(${activeNode.image})`,
                    transform: 'translateZ(-1500px) scale(8)',
                  }}
                />
                
                {/* 3D Grid Reference */}
                <div 
                  className="absolute inset-[-400%] opacity-20 pointer-events-none"
                  style={{ 
                    backgroundImage: `linear-gradient(#0EA5E9 2px, transparent 2px), linear-gradient(90deg, #0EA5E9 2px, transparent 2px)`, 
                    backgroundSize: '200px 200px',
                    transform: 'rotateX(90deg) translateZ(-500px)',
                  }}
                />
              </div>
           </div>

           {/* Immersive HUD Overlay */}
           <div className="absolute inset-0 pointer-events-none p-12 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                 <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-6 rounded-[2rem] flex items-center gap-6 animate-in slide-in-from-top-4 duration-500">
                    <div className="w-12 h-12 bg-[#0EA5E9]/20 rounded-2xl flex items-center justify-center text-[#0EA5E9] shadow-3xl">
                       <Activity size={24} className="animate-pulse" />
                    </div>
                    <div className="text-left">
                       <p className="text-[10px] font-black text-[#E1306C] uppercase tracking-widest leading-none mb-1">Reality Stream 01</p>
                       <p className="text-xl font-heritage font-bold text-white uppercase tracking-tight">{activeNode.name[language]}</p>
                    </div>
                 </div>

                 <div className="flex flex-col gap-4">
                    <button 
                      onClick={() => setIsImmersive(false)}
                      className="pointer-events-auto w-16 h-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-red-500/20 transition-all active:scale-90 shadow-2xl"
                    >
                       <X size={32} />
                    </button>
                    <button 
                      onClick={() => setLookRotation({ x: 0, y: 0 })}
                      className="pointer-events-auto w-16 h-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center text-white/40 hover:text-[#0EA5E9] transition-all shadow-2xl"
                    >
                       <RotateCw size={24} />
                    </button>
                 </div>
              </div>

              {/* Bottom Controls Panel */}
              <div className="flex justify-between items-end">
                 {/* Intuitive Movement Joystick */}
                 <div className="relative pointer-events-auto">
                    <div 
                      className={`relative w-44 h-44 rounded-full border-2 transition-all duration-500 backdrop-blur-xl ${isJoystickActive ? 'border-[#0EA5E9]/50 bg-[#0EA5E9]/5 shadow-[0_0_50px_rgba(14,165,233,0.2)]' : 'border-white/10 bg-black/40'}`}
                      onPointerDown={handleJoystickStart}
                      onPointerMove={handleJoystickMove}
                      onPointerUp={handleJoystickEnd}
                      onPointerLeave={handleJoystickEnd}
                    >
                       <div className="absolute inset-0 flex items-center justify-center opacity-20">
                          <Move size={24} className="text-white" />
                       </div>
                       
                       {/* Joystick Handle */}
                       <div 
                        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-2 shadow-2xl flex items-center justify-center transition-all duration-75 ${isJoystickActive ? 'bg-[#0EA5E9] border-white scale-110' : 'bg-white/10 border-white/20'}`}
                        style={{ transform: `translate(calc(-50% + ${joystickPos.x}px), calc(-50% + ${joystickPos.y}px))` }}
                       >
                          <div className={`w-2 h-2 rounded-full ${isJoystickActive ? 'bg-white' : 'bg-[#0EA5E9]'} animate-pulse`} />
                       </div>
                    </div>
                    <p className="mt-4 text-[9px] font-black text-white/20 uppercase tracking-[0.5em] text-center">Traverse Controller</p>
                 </div>

                 {/* Telemetry Display */}
                 <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-8 rounded-[3rem] text-right space-y-4 animate-in slide-in-from-bottom-4 duration-500">
                    <div className="space-y-1">
                       <p className="text-[10px] font-black text-[#E1306C] uppercase tracking-widest">Co-ordinates</p>
                       <p className="text-xl font-mono text-white font-bold tracking-widest">X:{Math.round(translation.x)} Z:{Math.round(translation.z)}</p>
                    </div>
                    <div className="flex justify-end gap-3 text-white/30">
                       <Compass size={16} className="animate-spin-slow" />
                       <span className="text-[10px] font-bold uppercase tracking-widest">Neural Link v4.5</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      )}

      {/* 5. Main UI Content (Menu & Syncing) */}
      <div className={`relative z-10 space-y-24 max-w-7xl w-full transition-all duration-1000 ${isImmersive ? 'opacity-0 pointer-events-none scale-95' : 'opacity-100'}`}>
        
        {/* Syncing Overlay */}
        {isSyncing && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-3xl flex items-center justify-center animate-in fade-in duration-500">
             <div className="max-w-md w-full space-y-12 p-12 text-center">
                <div className="relative mx-auto w-32 h-32 rounded-[2.5rem] bg-[#0EA5E9]/10 border border-[#0EA5E9]/30 flex items-center justify-center text-[#0EA5E9] shadow-3xl">
                   <div className="absolute inset-0 border border-[#0EA5E9]/20 rounded-[3rem] animate-ping" />
                   <Orbit size={56} className="animate-spin-slow" />
                </div>
                
                <div className="space-y-6">
                   <div className="flex justify-between items-end px-2">
                      <div className="text-left space-y-1">
                         <p className="text-[10px] font-black text-[#E1306C] uppercase tracking-widest">Syncing Reality Manifest</p>
                         <p className="text-xl font-heritage font-bold text-white uppercase tracking-tight">{activeNode?.name[language]}</p>
                      </div>
                      <span className="text-5xl font-heritage font-black text-white">{syncProgress}%</span>
                   </div>
                   <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden p-1 border border-white/5">
                      <div className="h-full rounded-full insta-gradient shadow-[0_0_30px_#0EA5E9] transition-all duration-300" style={{ width: `${syncProgress}%` }} />
                   </div>
                </div>
                
                <div className="flex items-center justify-center gap-4 text-white/30 animate-pulse">
                   <Scan size={18} />
                   <span className="text-[10px] font-black uppercase tracking-[0.6em]">Volumetric Synthesis In Progress</span>
                </div>
             </div>
          </div>
        )}

        <div className="space-y-12 animate-in fade-in slide-in-from-top-12 duration-1000">
           <div className="flex flex-col items-center gap-8">
              <div className="inline-flex items-center gap-6 px-12 py-5 rounded-full bg-[#0EA5E9]/15 border border-[#0EA5E9]/40 text-white text-[13px] font-black uppercase tracking-[0.7em] mx-auto backdrop-blur-3xl shadow-[0_0_80px_rgba(14,165,233,0.3)] animate-pulse">
                <Scan size={24} className="text-[#0EA5E9]" />
                Registry_Phase_04_3D_Buffer
              </div>
              <h2 className="text-7xl md:text-[12rem] font-heritage font-bold text-white tracking-tighter uppercase leading-[0.8] drop-shadow-[0_30px_100px_rgba(0,0,0,1)]">
                VIRTUAL <br/><span className="italic insta-text-gradient">HORIZON.</span>
              </h2>
           </div>
           <p className="text-gray-400 text-2xl md:text-4xl font-light italic leading-relaxed max-w-4xl mx-auto opacity-90 border-l-4 border-[#0EA5E9]/30 pl-10">
             {language === 'EN' 
               ? "See high-quality 3D models of the island's most holy places." 
               : "දිවයිනේ පූජනීය ස්ථානවල උසස් තත්වයේ ත්‍රිමාණ ප්‍රතිනිර්මාණ සමඟ සම්බන්ධ වන්න."}
           </p>
        </div>

        {/* VR NODE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 w-full">
           {VR_NODES.map((node, idx) => (
             <div 
               key={node.id}
               onClick={() => handleInitialize(node.id)}
               className="group relative h-[580px] rounded-[4rem] bg-black/60 backdrop-blur-3xl border border-white/10 overflow-hidden cursor-pointer transition-all duration-1000 hover:border-[#0EA5E9]/50 shadow-2xl"
               style={{ perspective: '1000px' }}
             >
                <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
                   <img src={node.image} className="w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-all duration-1000" alt="" />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#020205] via-[#020205]/40 to-transparent" />
                </div>

                <div className="absolute inset-0 p-12 flex flex-col justify-between items-center text-center z-10">
                   <div className="w-full flex justify-between items-start opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                      <div className="px-5 py-2 rounded-xl bg-black/80 border border-white/10 text-[9px] font-black tracking-widest text-white/60">
                         {node.type}
                      </div>
                      <div className="flex gap-2">
                         <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                         <span className="text-[9px] font-black tracking-widest text-green-500/80">CORE_ACTIVE</span>
                      </div>
                   </div>

                   <div className="space-y-12 w-full">
                      <div className="relative mx-auto w-24 h-24 rounded-[2rem] bg-[#0EA5E9]/10 border border-[#0EA5E9]/30 flex items-center justify-center text-[#0EA5E9] shadow-3xl group-hover:scale-110 transition-transform duration-700">
                         <div className="absolute inset-0 border border-[#0EA5E9]/10 rounded-[2.5rem] animate-ping opacity-30" />
                         <Orbit size={48} className="animate-spin-slow" />
                      </div>

                      <div className="space-y-4">
                         <h3 className="text-3xl md:text-4xl font-heritage font-bold text-white uppercase tracking-tighter leading-tight group-hover:insta-text-gradient transition-all">
                            {node.name[language]}
                         </h3>
                         <div className="flex flex-col items-center gap-4">
                            <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.5em]">{node.status}</span>
                            <div className="w-40 h-1 bg-white/5 rounded-full overflow-hidden">
                               <div className="h-full bg-[#0EA5E9] animate-loading-bar" style={{ width: '40%' }} />
                            </div>
                         </div>
                      </div>
                   </div>

                   <button className="w-full py-6 bg-white/5 border border-white/10 rounded-[2.5rem] text-[10px] font-black uppercase tracking-[0.4em] text-white/40 group-hover:bg-[#0EA5E9] group-hover:text-white group-hover:border-transparent transition-all duration-500 flex items-center justify-center gap-4 shadow-3xl">
                      Initialize Link
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                   </button>
                </div>

                <div className="absolute top-0 left-0 w-full h-[2px] bg-[#0EA5E9] shadow-[0_0_20px_#0EA5E9] animate-scan-y z-20 opacity-0 group-hover:opacity-40 pointer-events-none"></div>
             </div>
           ))}
        </div>

        {/* Global Exit */}
        <div className="pt-16 flex flex-col items-center gap-14">
           <button 
             onClick={() => setView('home')}
             className="group relative px-20 py-9 bg-white text-[#020205] rounded-full font-black text-[13px] uppercase tracking-[0.6em] flex items-center gap-8 hover:scale-110 active:scale-95 transition-all shadow-[0_40px_100px_rgba(255,255,255,0.3)] overflow-hidden"
           >
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0EA5E9]/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
             <ArrowLeft size={26} className="group-hover:-translate-x-3 transition-transform" />
             Return to Base Registry
           </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes grid-flow {
          0% { background-position: 0 0; }
          100% { background-position: 0 120px; }
        }
        @keyframes grid-tilt {
          0%, 100% { transform: perspective(1200px) rotateX(75deg) translateY(200px) scale(3) rotateZ(0deg); }
          50% { transform: perspective(1200px) rotateX(72deg) translateY(180px) scale(3.1) rotateZ(1deg); }
        }
        @keyframes data-stream {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 0.8; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        @keyframes scan-plane {
          0% { top: -10%; }
          100% { top: 110%; }
        }
        @keyframes float-debris {
          0% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.1; }
          90% { opacity: 0.1; }
          100% { transform: translate(100px, -200px) rotate(360deg); opacity: 0; }
        }
        @keyframes vr-ripple {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(20); opacity: 0; }
        }
        @keyframes scan-y {
          0% { top: 0%; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes loading-bar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(250%); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.12; }
          50% { opacity: 0.2; }
        }
        .animate-vr-ripple { animation: vr-ripple 9s linear infinite; }
        .animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }
        .animate-float-debris { animation: float-debris linear infinite; }
        .animate-data-stream { animation: data-stream linear infinite; }
        .animate-scan-plane { animation: scan-plane 4s linear infinite; }
        .animate-scan-y { animation: scan-y 4s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
        .animate-loading-bar { animation: loading-bar 3s ease-in-out infinite; }
        .animate-spin-slow { animation: spin 20s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .shadow-3xl { box-shadow: 0 0 60px rgba(14,165,233,0.25); }
      `}} />
    </div>
  );
};

export default VRTripFuture;