import React, { useState, useEffect, useMemo } from 'react';
import { Language } from '../types.ts';
import { 
  Orbit, 
  Zap, 
  Radio, 
  Lock, 
  Cpu, 
  Scan, 
  ArrowLeft, 
  Target, 
  Activity, 
  ShieldCheck, 
  Box, 
  Sparkles,
  Layers,
  Binary,
  Compass,
  Eye,
  Loader2,
  // Fix: Added Database icon to imports to resolve "Cannot find name 'Database'" error on line 178
  Database
} from 'lucide-react';

interface VRComingSoonProps {
  language: Language;
  setView: (view: any) => void;
}

const VRComingSoon: React.FC<VRComingSoonProps> = ({ language, setView }) => {
  const [syncPercent, setSyncPercent] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  const steps = language === 'EN' 
    ? ['Calibrating Neural Uplink', 'Synthesizing Volumetric Data', 'Optimizing Spatial Mesh', 'Awaiting Architectural Lock']
    : ['නාභිගත සම්බන්ධතාවය සකසමින්', 'ත්‍රිමාණ දත්ත එක් කරමින්', 'අවකාශීය ජාලය ඔප්නංවමින්', 'පද්ධති අගුල අපේක්ෂාවෙන්'];

  useEffect(() => {
    const interval = setInterval(() => {
      setSyncPercent(prev => {
        if (prev >= 98) return 98; // Stay at 98% to simulate "almost ready"
        return prev + 1;
      });
    }, 150);

    const stepInterval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % steps.length);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearInterval(stepInterval);
    };
  }, [steps.length]);

  return (
    <div className="min-h-screen bg-[#050508] text-white pt-32 pb-40 relative overflow-hidden flex flex-col items-center justify-center">
      {/* BACKGROUND CINEMATIC LAYER */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.1)_0%,transparent_70%)]" />
        <div 
          className="absolute inset-0 opacity-[0.05]" 
          style={{ 
            backgroundImage: `linear-gradient(#0EA5E9 1px, transparent 1px), linear-gradient(90deg, #0EA5E9 1px, transparent 1px)`, 
            backgroundSize: '80px 80px',
            transform: 'perspective(1000px) rotateX(60deg) translateY(-200px) scale(3)',
            maskImage: 'radial-gradient(ellipse at center, black, transparent 90%)'
          }} 
        />
        {/* Floating Code Particles */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
           {Array.from({ length: 20 }).map((_, i) => (
             <div 
               key={i} 
               className="absolute text-[8px] font-mono text-[#0EA5E9] animate-float-debris whitespace-nowrap"
               style={{ 
                 left: `${Math.random() * 100}%`, 
                 top: `${Math.random() * 100}%`,
                 animationDuration: `${15 + Math.random() * 20}s`,
                 animationDelay: `${Math.random() * -20}s`
               }}
             >
               {Math.random() > 0.5 ? '010110101011' : 'NEURAL_SYNC_LINK_0x44'}
             </div>
           ))}
        </div>
      </div>

      <div className="relative z-10 max-w-5xl w-full px-6 flex flex-col items-center text-center space-y-16">
        
        {/* TOP HUD DECORATION */}
        <div className="flex flex-col items-center gap-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
           <div className="relative">
              <div className="w-32 h-32 rounded-[2.5rem] bg-[#0EA5E9]/10 border border-[#0EA5E9]/30 flex items-center justify-center text-[#0EA5E9] relative shadow-[0_0_80px_rgba(14,165,233,0.3)] group overflow-hidden">
                 <div className="absolute inset-0 border-2 border-dashed border-[#0EA5E9]/20 rounded-[2.5rem] animate-spin-slow" />
                 <Orbit size={56} className="animate-spin-slow-reverse opacity-80" />
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#0EA5E9]/20 via-transparent to-transparent animate-pulse" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-black border border-white/10 rounded-xl flex items-center justify-center text-yellow-500 shadow-2xl">
                 <Lock size={20} className="animate-pulse" />
              </div>
           </div>
           
           <div className="inline-flex items-center gap-4 px-8 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-3xl text-white text-[11px] font-black uppercase tracking-[0.6em] shadow-2xl">
              <Scan size={16} className="text-[#0EA5E9] animate-pulse" />
              VR_PORTAL_PHASE_05
           </div>
        </div>

        {/* MAIN TEXT */}
        <div className="space-y-6 animate-in fade-in zoom-in-95 duration-1000 delay-300">
           <h2 className="text-6xl md:text-[12rem] font-heritage font-bold text-white tracking-tighter uppercase leading-[0.8] drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
             VIRTUAL <br/><span className="italic insta-text-gradient">REALITY.</span>
           </h2>
           <p className="text-gray-400 max-w-2xl mx-auto text-xl md:text-3xl font-light italic leading-relaxed opacity-80 border-l-4 border-[#0EA5E9]/20 pl-8">
             {language === 'EN' 
               ? "Our engineering bureau is currently finalizing the volumetric reconstruction of island nodes. Immersive synchronization arrives in the next cycle." 
               : "පූජනීය ස්ථානවල තත්‍ය කාලීන ත්‍රිමාණ ප්‍රතිනිර්මාණය දැනට සිදුවෙමින් පවතී. සම්පූර්ණ අත්දැකීම මීළඟ අදියරේදී විවෘත වනු ඇත."}
           </p>
        </div>

        {/* SYNC PROGRESS HUD */}
        <div className="w-full max-w-2xl bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[4rem] p-12 space-y-10 shadow-inner group animate-in slide-in-from-bottom-8 duration-1000 delay-500">
           <div className="space-y-6">
              <div className="flex justify-between items-end px-4">
                 <div className="text-left space-y-1">
                    <p className="text-[10px] font-black text-[#0EA5E9] uppercase tracking-[0.4em]">Registry_Uplink</p>
                    <div className="flex items-center gap-3">
                       <Loader2 size={14} className="text-[#0EA5E9] animate-spin" />
                       <p className="text-sm font-bold text-white/60 tracking-widest uppercase">{steps[activeStep]}</p>
                    </div>
                 </div>
                 <span className="text-5xl font-heritage font-black text-white">{syncPercent}%</span>
              </div>
              <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden p-[2px] border border-white/5 shadow-inner">
                 <div 
                   className="h-full rounded-full bg-gradient-to-r from-[#0EA5E9] via-cyan-400 to-blue-600 shadow-[0_0_30px_#0EA5E9] transition-all duration-1000 ease-out"
                   style={{ width: `${syncPercent}%` }}
                 />
              </div>
           </div>

           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Binary, label: 'Metadata' },
                { icon: Layers, label: 'Texturing' },
                { icon: Cpu, label: 'Compute' },
                { icon: ShieldCheck, label: 'Security' }
              ].map((item, i) => (
                <div key={i} className="bg-white/[0.03] p-4 rounded-2xl border border-white/5 flex flex-col items-center gap-3">
                   <item.icon size={20} className="text-gray-500 group-hover:text-[#0EA5E9] transition-colors" />
                   <span className="text-[8px] font-black uppercase text-gray-500 tracking-widest">{item.label}</span>
                </div>
              ))}
           </div>
        </div>

        {/* RETURN BUTTON */}
        <div className="pt-12 animate-in fade-in duration-1000 delay-700">
          <button 
            onClick={() => setView('home')}
            className="group relative px-16 py-8 bg-white text-black rounded-full font-black text-[12px] uppercase tracking-[0.6em] transition-all hover:scale-110 active:scale-95 shadow-[0_30px_80px_rgba(255,255,255,0.1)] flex items-center gap-8 overflow-hidden"
          >
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0EA5E9]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
             <ArrowLeft size={22} className="group-hover:-translate-x-2 transition-transform relative z-10" />
             <span className="relative z-10">Back to Base Reality</span>
          </button>
        </div>

        {/* BOTTOM HUD DATA */}
        <div className="pt-24 flex flex-wrap justify-center gap-20 opacity-20 pointer-events-none">
           <div className="flex items-center gap-4">
              <Activity size={24} className="text-[#E1306C]" />
              <div className="text-left">
                 <p className="text-[9px] font-black uppercase tracking-widest">Signal_Feed</p>
                 <p className="text-[10px] font-bold">INTERMITTENT</p>
              </div>
           </div>
           <div className="flex items-center gap-4">
              <Database size={24} className="text-[#0EA5E9]" />
              <div className="text-left">
                 <p className="text-[9px] font-black uppercase tracking-widest">Registry_Buffer</p>
                 <p className="text-[10px] font-bold">12.4 TB CACHED</p>
              </div>
           </div>
           <div className="flex items-center gap-4">
              <Sparkles size={24} className="text-yellow-500" />
              <div className="text-left">
                 <p className="text-[9px] font-black uppercase tracking-widest">Vibe_Protocol</p>
                 <p className="text-[10px] font-bold">FUTURE_SYNTH</p>
              </div>
           </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spin-slow-reverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-spin-slow-reverse { animation: spin-slow-reverse 15s linear infinite; }
        @keyframes float-debris {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.2; }
          90% { opacity: 0.2; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
        .animate-float-debris { animation: float-debris linear infinite; }
        .shadow-3xl { box-shadow: 0 0 80px rgba(14,165,233,0.3); }
      `}} />
    </div>
  );
};

export default VRComingSoon;
