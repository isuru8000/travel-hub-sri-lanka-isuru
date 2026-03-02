import React, { useState } from 'react';
import { Language } from '../types.ts';
import { 
  ShieldCheck, 
  Sparkles, 
  Zap, 
  Box, 
  ShoppingBag,
  Camera,
  Backpack,
  Sun,
  Lock,
  Activity,
  Cpu,
  Scan,
  Orbit
} from 'lucide-react';

interface GearItem {
  id: string;
  name: { EN: string; SI: string };
  price: number;
  image: string;
  category: 'expedition' | 'lifestyle' | 'tech';
  tag: string;
  specs: { EN: string[]; SI: string[] };
}

const STORE_ITEMS: GearItem[] = [
  {
    id: 'g1',
    name: { EN: 'Lanka Nomad Rucksack', SI: 'ලංකා සංචාරක බෑගය' },
    price: 145,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
    category: 'expedition',
    tag: 'ULTRA-DURABLE',
    specs: {
      EN: ['Waterproof Ripstop', '45L Capacity', 'Solar Panel Sync Ready'],
      SI: ['ජලයට ඔරොත්තු දෙන', 'ලීටර් 45 ධාරිතාව', 'සූර්ය බලශක්ති සබඳතාවය']
    }
  },
  {
    id: 'g2',
    name: { EN: 'Zenith 4K Travel Lens', SI: 'සෙනිත් 4K සංචාරක කාචය' },
    price: 320,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
    category: 'tech',
    tag: 'HIGH-FIDELITY',
    specs: {
      EN: ['F1.8 Wide Angle', 'Nano-Coated Glass', 'Universal Mount'],
      SI: ['F1.8 පුළුල් කෝණය', 'නැනෝ ආලේපිත වීදුරු', 'විශ්වීය සවිකිරීම']
    }
  },
  {
    id: 'g3',
    name: { EN: 'Misty Peaks Windbreaker', SI: 'කඳුකර සුළං කබාය' },
    price: 85,
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
    category: 'lifestyle',
    tag: 'THERMAL-TECH',
    specs: {
      EN: ['High-Altitude Mesh', 'Lightweight', 'Anti-Static'],
      SI: ['ඉහළ උසට සුදුසු', 'සැහැල්ලු නිමාව', 'ස්ථිතික විදුලි නාශක']
    }
  },
  {
    id: 'g4',
    name: { EN: 'Heritage Field Watch', SI: 'පාරම්පරික අත් ඔරලෝසුව' },
    price: 195,
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=80',
    category: 'lifestyle',
    tag: 'LIMITED EDITION',
    specs: {
      EN: ['Sapphire Glass', '200m Waterproof', 'Engraved Archive Logo'],
      SI: ['සැෆයර් වීදුරු', 'මීටර් 200 ජල ආරක්ෂිත', 'ලාංඡනය කැටයම් කළ']
    }
  }
];

const TravelStore: React.FC<{ language: Language }> = ({ language }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Cinematic Header */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
        <div 
          className="absolute inset-0 bg-cover bg-fixed bg-center opacity-40 transition-transform duration-[15000ms] hover:scale-110" 
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/80 to-white" />
        
        <div className="relative text-center space-y-8 px-6 max-w-5xl animate-in fade-in zoom-in duration-1000">
           <div className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-3xl text-white text-[10px] font-black uppercase tracking-[0.5em] shadow-2xl">
              <ShoppingBag size={16} className="text-[#0EA5E9] animate-pulse" />
              Global_Supply_Registry
           </div>
           <h2 className="text-6xl md:text-[10rem] font-heritage font-bold text-white tracking-tighter uppercase leading-[0.8] drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
             TRAVEL <br/><span className="italic insta-text-gradient">GEAR.</span>
           </h2>
           <p className="text-white/40 text-lg md:text-2xl font-light italic leading-relaxed tracking-wide">
             "Equipping the modern voyager with the tools of an island civilization."
           </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-24 relative z-10 space-y-24">
        
        {/* Main "Coming Soon" Feature Section */}
        <div className="relative group">
           {/* Background Grid Decoration */}
           <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-[5rem] blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity" />
           
           <div className="relative bg-white/80 backdrop-blur-[100px] rounded-[5rem] border border-gray-100 shadow-[0_50px_100px_rgba(0,0,0,0.05)] overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-blue-500 shadow-[0_0_20px_#3b82f6] animate-scan-slow z-20 opacity-50" />
              
              <div className="p-12 md:p-32 flex flex-col items-center text-center space-y-12">
                 <div className="w-28 h-28 rounded-[2.5rem] bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 relative shadow-2xl">
                    <div className="absolute inset-0 border border-blue-500/10 rounded-[2.5rem] animate-ping" />
                    <Lock size={56} className="animate-pulse" />
                 </div>

                 <div className="space-y-6">
                    <div className="inline-flex items-center gap-4 px-8 py-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] font-black uppercase tracking-[0.6em] mx-auto animate-pulse">
                       <Scan size={14} /> Phase_03_Commerce_Integration
                    </div>
                    <h3 className="text-5xl md:text-9xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tighter leading-none">
                       COMING <span className="text-blue-500 italic">SOON.</span>
                    </h3>
                    <p className="text-gray-400 font-light italic text-xl md:text-3xl max-w-3xl mx-auto leading-relaxed opacity-70">
                       {language === 'EN' 
                         ? "The gear registry is currently undergoing high-fidelity calibration for next-cycle stock synchronization." 
                         : "භාණ්ඩ නාමාවලිය දැනට පිරික්සුම් මට්ටමේ පවතින අතර, මීළඟ අදියරේදී සියලු නිෂ්පාදන ඔබ වෙත විවෘත වනු ඇත."}
                    </p>
                 </div>

                 <div className="flex gap-4 pt-8">
                    <div className="px-10 py-5 bg-[#0a0a0a] text-white rounded-full font-black text-xs uppercase tracking-[0.4em] shadow-[0_20px_50px_rgba(0,0,0,0.3)] animate-pulse">
                       Registry Locked
                    </div>
                 </div>

                 {/* Teaser Grid (Blurred) */}
                 <div className="w-full pt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-10 blur-xl pointer-events-none">
                    {STORE_ITEMS.map((item) => (
                       <div key={item.id} className="aspect-[4/5] bg-gray-200 rounded-[3rem]" />
                    ))}
                 </div>
              </div>
           </div>
        </div>

        {/* Store Footer HUD */}
        <div className="pt-24 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-12 opacity-40">
           <div className="flex items-center gap-8">
              <div className="flex items-center gap-4">
                 <ShieldCheck size={28} className="text-green-500" />
                 <div className="text-left">
                    <p className="text-[9px] font-black uppercase tracking-widest text-[#0a0a0a]">Logistics_Secure</p>
                    <p className="text-[10px] font-bold text-gray-500">Verified Global Transit</p>
                 </div>
              </div>
              <div className="w-px h-12 bg-gray-100" />
              <div className="flex items-center gap-4">
                 <Cpu size={28} className="text-blue-500" />
                 <div className="text-left">
                    <p className="text-[9px] font-black uppercase tracking-widest text-[#0a0a0a]">Inventory_Sync</p>
                    <p className="text-[10px] font-bold text-gray-500">Real-time Node Update</p>
                 </div>
              </div>
           </div>

           <div className="flex flex-col items-center md:items-end gap-2">
              <p className="text-[9px] font-black uppercase tracking-[0.6em] text-gray-300">End_Of_Registry_Catalogue</p>
              <div className="flex gap-1">
                 {[1,2,3,4].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-100" />)}
              </div>
           </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan-slow {
          0% { transform: translateY(-100%); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(600px); opacity: 0; }
        }
        .animate-scan-slow { animation: scan-slow 5s linear infinite; }
      `}} />
    </div>
  );
};

export default TravelStore;