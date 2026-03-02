import React, { useState, useEffect } from 'react';
// Fix: Added implementation to Navbar.tsx to resolve module error for named export TravelHubLogo
import AnimatedLogo from '../src/components/AnimatedLogo';
import { ShieldCheck, Activity, Zap, Loader2, CheckCircle2 } from 'lucide-react';

interface LoadingScreenProps {
  onEnter: () => void;
  language: string;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onEnter, language }) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState(language === 'EN' ? 'Initializing Neural Uplink...' : 'සම්බන්ධතාවය ස්ථාපිත කරමින්...');

  const statuses = language === 'EN' ? [
    'Scanning Heritage Terrain...',
    'Syncing Ancient Metadata...',
    'Calibrating Volumetric Mesh...',
    'Optimizing Reality Buffer...',
    'Ready for Integration.'
  ] : [
    'භූමි දත්ත පිරික්සමින්...',
    'පැරණි දත්ත සම්බන්ධ කරමින්...',
    'ත්‍රිමාණ ජාලය සකසමින්...',
    'යථාර්ථය සුමට කරමින්...',
    'පද්ධතිය සූදානම්.'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onEnter();
          }, 200); // Super fast transition
          return 100;
        }
        const step = Math.floor(Math.random() * 25) + 15; // Rapid progress steps
        return Math.min(prev + step, 100);
      });
    }, 60); // Fast interval

    return () => clearInterval(interval);
  }, [onEnter]);

  useEffect(() => {
    const statusIndex = Math.min(Math.floor(progress / 20), statuses.length - 1);
    setStatus(statuses[statusIndex]);
  }, [progress, language]);

  return (
    <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center p-8 overflow-hidden animate-out fade-out duration-500">
      <div className="absolute inset-0 pattern-overlay opacity-5 pointer-events-none"></div>
      
      <div className="relative mb-16">
        <div className="absolute inset-0 story-ring rounded-full animate-ping opacity-10 scale-[2.5]"></div>
        <div className="relative">
          <AnimatedLogo />
        </div>
      </div>
      
      <div className="w-full max-w-sm space-y-10 text-center relative z-10">
        <div className="space-y-4">
          <h2 className="text-3xl font-heritage font-bold text-[#0a0a0a] tracking-[0.4em] uppercase leading-none">
            Travel Hub
          </h2>
          <div className="flex items-center justify-center gap-4 text-[#0EA5E9] opacity-60">
             <Activity size={14} className="animate-pulse" />
             <span className="text-[10px] font-black uppercase tracking-[0.5em]">DIRECT_SYNC_CORE</span>
          </div>
        </div>

        <div className="space-y-4">
           <div className="flex justify-between items-end px-2">
              <span className="text-5xl font-heritage font-black text-[#0a0a0a] leading-none">{progress}%</span>
              <p className="text-[10px] font-bold text-gray-400 italic animate-pulse">{status}</p>
           </div>
           
           <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden p-[1px] border border-gray-100 shadow-inner">
             <div 
               className={`h-full rounded-full transition-all duration-300 ease-out ${progress === 100 ? 'bg-green-500' : 'insta-gradient'}`}
               style={{ width: `${progress}%` }}
             ></div>
           </div>
        </div>

        <div className="flex flex-col items-center justify-center pt-4">
             <div className={`flex items-center gap-4 transition-all duration-500 ${progress === 100 ? 'text-green-500' : 'text-gray-300'}`}>
                {progress === 100 ? <CheckCircle2 size={20} /> : <Loader2 size={16} className="animate-spin text-[#0EA5E9]" />}
                <span className="text-[9px] font-black uppercase tracking-[0.4em]">
                  {progress === 100 ? 'SYNCHRONIZED' : 'UPLINKING...'}
                </span>
             </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .animate-float { animation: float 4s ease-in-out infinite; }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
      `}} />
    </div>
  );
};

export default LoadingScreen;
