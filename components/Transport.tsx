
import React from 'react';
import { Language } from '../types.ts';
import { TRANSPORT_DATA } from '../constants.tsx';
import { 
  Car, 
  Plane, 
  Train, 
  Waves, 
  MapPin, 
  ShieldCheck, 
  ArrowRight, 
  Zap, 
  Radio, 
  Compass,
  Activity,
  Database,
  Cpu,
  Layers,
  ArrowLeft
} from 'lucide-react';

interface TransportProps {
  language: Language;
}

const Transport: React.FC<TransportProps> = ({ language }) => {
  return (
    <div className="min-h-screen bg-[#fafafa] pb-32">
      {/* CINEMATIC LOGISTICS HEADER */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-cover bg-center opacity-40 transition-transform duration-[20000ms] animate-slow-zoom" 
             style={{ backgroundImage: `url('https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1920&q=80')` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/90 to-[#fafafa]" />
        
        {/* Dynamic Data Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.1]" 
             style={{ backgroundImage: `linear-gradient(#3B82F6 1px, transparent 1px), linear-gradient(90deg, #3B82F6 1px, transparent 1px)`, backgroundSize: '80px 80px' }} />

        <div className="relative text-center space-y-12 px-6 max-w-5xl animate-in fade-in zoom-in duration-1000">
          <div className="flex flex-col items-center gap-6">
             <div className="inline-flex items-center gap-5 px-10 py-4 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[11px] font-black uppercase tracking-[0.6em] mx-auto backdrop-blur-3xl shadow-2xl animate-pulse">
                <Zap size={18} fill="currentColor" />
                Strategic_Transit_Registry
             </div>
             <div className="h-20 w-px bg-gradient-to-b from-blue-500 to-transparent" />
          </div>
          
          <h2 className="text-6xl md:text-[11rem] font-heritage font-bold text-white tracking-tighter uppercase leading-[0.8] drop-shadow-[0_20px_80px_rgba(0,0,0,1)]">
            LOGISTICS <br/><span className="italic insta-text-gradient">HUB.</span>
          </h2>
          
          <p className="text-white/40 text-xl md:text-3xl font-light italic leading-relaxed tracking-wide max-w-4xl mx-auto">
            "Direct synchronization with the island's high-fidelity traversal protocols. Road, rail, and sky nodes active."
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-24 relative z-10 space-y-24">
        
        {/* STATUS DASHBOARD */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { label: 'Air Corridor', status: 'Optimal', icon: <Plane size={24} />, color: '#3B82F6' },
             { label: 'Rail Network', status: 'Synced', icon: <Train size={24} />, color: '#E1306C' },
             { label: 'Land Traversal', status: 'Stable', icon: <Car size={24} />, color: '#10B981' }
           ].map((stat, i) => (
             <div key={i} className="bg-white/95 backdrop-blur-2xl p-10 rounded-[3rem] border border-gray-100 shadow-[0_30px_70px_rgba(0,0,0,0.05)] flex items-center justify-between group hover:-translate-y-2 transition-all duration-700">
                <div className="flex items-center gap-6">
                   <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-2xl transition-transform duration-700 group-hover:rotate-12" style={{ backgroundColor: stat.color }}>
                      {stat.icon}
                   </div>
                   <div className="text-left space-y-1">
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">{stat.label}</p>
                      <p className="text-2xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tight">{stat.status}</p>
                   </div>
                </div>
                <div className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: stat.color }} />
             </div>
           ))}
        </div>

        {/* LOGISTICS CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 pt-8">
          {TRANSPORT_DATA.map((item, idx) => (
            <div key={item.id} className="group relative bg-white rounded-[4rem] overflow-hidden border border-gray-100 shadow-xl transition-all duration-1000 hover:shadow-[0_60px_120px_rgba(0,0,0,0.1)] hover:-translate-y-4 animate-in slide-in-from-bottom-12" style={{ animationDelay: `${idx * 100}ms` }}>
              <div className="relative h-80 overflow-hidden">
                <img src={item.image} className="w-full h-full object-cover transition-transform duration-[8000ms] group-hover:scale-110" alt={item.name[language]} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                
                <div className="absolute top-8 left-8">
                   <div className="bg-white/95 backdrop-blur-md px-6 py-2.5 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/20">
                      <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                      <span className="text-[10px] font-black text-[#0a0a0a] uppercase tracking-widest">Priority_Node_#0{idx + 1}</span>
                   </div>
                </div>

                <div className="absolute bottom-0 right-0 bg-[#0a0a0a] text-white px-10 py-6 rounded-tl-[3.5rem] shadow-2xl">
                   <p className="text-[9px] font-black text-blue-400 uppercase tracking-[0.4em] mb-1">Base_Rate</p>
                   <p className="text-4xl font-heritage font-bold leading-none">$ {item.price}</p>
                </div>
              </div>

              <div className="p-12 md:p-16 space-y-10 flex-grow flex flex-col justify-between">
                 <div className="space-y-6">
                    <div className="space-y-2">
                       <div className="flex items-center gap-3 text-blue-500">
                          {item.type === 'air' ? <Plane size={18} /> : item.type === 'rail' ? <Train size={18} /> : <Car size={18} />}
                          <span className="text-[11px] font-black uppercase tracking-[0.4em]">{item.type}_registry_link</span>
                       </div>
                       <h3 className="text-3xl md:text-4xl font-heritage font-bold text-[#0a0a0a] group-hover:insta-text-gradient transition-all uppercase tracking-tight leading-tight">{item.name[language]}</h3>
                    </div>
                    
                    <p className="text-lg text-gray-500 font-light italic leading-relaxed border-l-4 border-gray-50 pl-6">"{item.description[language]}"</p>
                 </div>

                 <div className="space-y-8">
                    <ul className="grid grid-cols-1 gap-4">
                       {item.features[language].map((f, i) => (
                         <li key={i} className="flex items-center gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-gray-50 p-4 rounded-2xl border border-gray-100 group-hover:bg-white group-hover:border-blue-500/20 transition-all">
                            <ShieldCheck size={16} className="text-blue-500" />
                            {f}
                         </li>
                       ))}
                    </ul>
                    
                    <button className="w-full h-20 bg-[#0a0a0a] text-white rounded-[2.5rem] font-black text-[11px] uppercase tracking-[0.6em] flex items-center justify-center gap-6 hover:bg-blue-600 hover:shadow-[0_20px_50px_rgba(59,130,246,0.3)] transition-all active:scale-95 group/btn relative overflow-hidden">
                       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                       <span className="relative z-10">Initialize Traversal</span>
                       <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform" />
                    </button>
                 </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Logistics Stats Footer */}
        <div className="pt-24 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-12 opacity-30">
           <div className="flex items-center gap-12">
              <div className="flex items-center gap-5">
                 <Database size={32} className="text-blue-500" />
                 <div className="text-left">
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#0a0a0a]">Global_Fleet_Sync</p>
                    <p className="text-[11px] font-bold text-gray-500">Live Telemetry Active</p>
                 </div>
              </div>
              <div className="w-px h-16 bg-gray-100" />
              <div className="flex items-center gap-5">
                 <Cpu size={32} className="text-[#E1306C]" />
                 <div className="text-left">
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#0a0a0a]">Neural_Routing</p>
                    <p className="text-[11px] font-bold text-gray-500">Next-Cycle Optimized</p>
                 </div>
              </div>
           </div>

           <div className="text-center md:text-right space-y-3">
              <p className="text-[11px] font-black uppercase tracking-[1em] text-[#0a0a0a] ml-[1em]">End_Of_Logistics_Catalog</p>
              <div className="flex justify-center md:justify-end gap-3">
                 {[1,2,3,4,5].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-200" />)}
              </div>
           </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 30s linear infinite;
        }
      `}} />
    </div>
  );
};

export default Transport;
