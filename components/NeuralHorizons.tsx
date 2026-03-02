import React, { useState, useEffect, useRef } from 'react';
import { Language } from '../types.ts';
import { 
  Atom, 
  Cpu, 
  Zap, 
  Orbit, 
  Radio, 
  ShieldCheck, 
  Activity, 
  Target, 
  ArrowRight, 
  ArrowLeft,
  Scan,
  Database,
  Layers,
  Sparkles,
  ChevronRight,
  Globe,
  Binary,
  Wind,
  Waves,
  Sun,
  Shield,
  Eye,
  Microscope,
  Terminal,
  Brain,
  Anchor,
  Box,
  FastForward,
  Compass,
  // Fix: Added Loader2 to the lucide-react import to resolve "Cannot find name 'Loader2'" error on line 210
  Loader2
} from 'lucide-react';

interface NeuralHorizonsProps {
  language: Language;
  setView: (view: any) => void;
}

const PROJECTS = [
  {
    id: 'sky-suites',
    name: { EN: 'Magnetic Sky-Suites', SI: 'චුම්බක අහස් නිකේතන' },
    location: 'Sigiriya Sector',
    year: '2077',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    practicalUse: { EN: 'Luxury vertical living without ground impact.', SI: 'භූමියට හානි නොවන අති සුඛෝපභෝගී ජීවන රටාව.' },
    technology: 'Anti-Gravity Magnetic Anchors',
    description: { 
      EN: 'To protect the 5th-century ruins from human erosion, we have moved all tourism 2km into the sky. These suites use the iron-rich granite core of Sigiriya as a magnetic tether, floating glass habitats that offer 360-degree views without touching a single ancient stone.',
      SI: 'පුරාණ නටබුන් ආරක්ෂා කිරීම සඳහා සියලුම සංචාරක පහසුකම් අහසට ඔසවා ඇත. සීගිරියේ ඇති ස්වභාවික චුම්බක බලය යොදාගනිමින් කිසිදු ගලක් ස්පර්ශ නොකර මෙම වීදුරු කුටි අහසේ රඳවා තබා ගනී.'
    },
    specs: [
      { label: 'Altitude', val: '2,200m' },
      { label: 'Footprint', val: '0.00% Ground' },
      { label: 'Daily Rate', val: '450 Fusion-Credits' }
    ],
    color: '#0EA5E9'
  },
  {
    id: 'synaptic-safari',
    name: { EN: 'Synaptic Safari Link', SI: 'නාභිගත වනජීවී සබඳතාව' },
    location: 'Yala Bio-Dome',
    year: '2085',
    image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=1200&q=80',
    practicalUse: { EN: 'Silent, non-invasive wildlife observation.', SI: 'සතුන්ට බාධා නොවන වනජීවී නිරීක්ෂණය.' },
    technology: 'Cerebral Neural Patches',
    description: { 
      EN: 'The era of jeeps is over. Travelers now dock in comfortable bio-domes and sync their senses with non-invasive "Observer Nodes" placed on park leopards. You experience the raw power of the hunt and the silence of the jungle directly through your own neural pathways.',
      SI: 'සෆාරි රථ දැන් ඉතිහාසයට එක්වී ඇත. දැන් ඔබට වනජීවී නිරීක්ෂණ මධ්‍යස්ථානයක සිට දිවියෙකුගේ දෑසින් වනය දැකීමටත්, උන්ගේ ශ්‍රවණය අත්විඳීමටත් නාභිගත තාක්ෂණය හරහා හැකියාව ලැබේ.'
    },
    specs: [
      { label: 'Visual Ref', val: '8K Neural-Deep' },
      { label: 'Latency', val: '0.002ms' },
      { label: 'Species', val: 'Panthera Pardus' }
    ],
    color: '#E1306C'
  },
  {
    id: 'abyssal-pearl',
    name: { EN: 'The Abyssal Pearl Hub', SI: 'ගැඹුරු මුහුදු පර්යේෂණ මධ්‍යස්ථානය' },
    location: 'Trincomalee Deep',
    year: '2102',
    image: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&w=1200&q=80',
    practicalUse: { EN: 'Sub-aquatic cultural exploration.', SI: 'මුහුදු පතුලේ සංස්කෘතික ගවේෂණය.' },
    technology: 'Pressure-Void Glass Enclosures',
    description: { 
      EN: 'Located 500 meters beneath the Indian Ocean, this hub serves as a museum for sunken 17th-century merchant vessels. Travelers walk through "Liquid Void" corridors to witness bio-engineered coral reefs that clean the ocean while providing a neon backdrop for history.',
      SI: 'ඉන්දියන් සාගරයේ මීටර් 500ක් යටින් පිහිටි මෙම මධ්‍යස්ථානය ගිලී ගිය නැව් සහ මුහුදු පතුලේ උරුමයන් නැරඹීමට ඉඩ සලසයි. මෙය සාගරය පිරිසිදු කරන කෘතිම කොරල් පර මගින් වටවී ඇත.'
    },
    specs: [
      { label: 'Depth', val: '500m Sub-Sea' },
      { label: 'O2 Sync', val: 'Algae-Core' },
      { label: 'Capacity', val: '200 Voyagers' }
    ],
    color: '#3B82F6'
  }
];

const NeuralHorizons: React.FC<NeuralHorizonsProps> = ({ language, setView }) => {
  const [activeProjectId, setActiveProjectId] = useState(PROJECTS[0].id);
  const [isSyncing, setIsSyncing] = useState(false);
  const activeProject = PROJECTS.find(p => p.id === activeProjectId)!;

  const handleProjectSwitch = (id: string) => {
    setIsSyncing(true);
    setTimeout(() => {
      setActiveProjectId(id);
      setIsSyncing(false);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#010101] text-white pt-32 pb-40 relative overflow-hidden font-sans select-none">
      
      {/* HUD Background Ambience */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.15)_0%,transparent_75%)]" />
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(rgba(225,48,108,0.1) 2px, transparent 2px), linear-gradient(90deg, rgba(225,48,108,0.1) 2px, transparent 2px)`, 
          backgroundSize: '100px 100px',
          transform: 'perspective(1500px) rotateX(70deg) translateY(-200px) scale(4)',
          maskImage: 'radial-gradient(ellipse at center, black, transparent 90%)'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-24">
        
        {/* TOP STATUS BAR */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/[0.03] backdrop-blur-3xl border border-white/10 p-8 rounded-[3rem] shadow-2xl">
           <div className="lg:col-span-4 flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-[#0EA5E9]/10 border border-[#0EA5E9]/30 flex items-center justify-center text-[#0EA5E9] shadow-[0_0_40px_rgba(14,165,233,0.2)]">
                <Brain size={32} className="animate-pulse" />
              </div>
              <div className="text-left space-y-1">
                 <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Archival_Uplink</p>
                 <p className="text-xl font-heritage font-bold text-white uppercase tracking-widest">Global Status: Online</p>
              </div>
           </div>

           <div className="lg:col-span-4 flex justify-center">
              <div className="flex gap-4">
                 {[1,2,3,4,5].map(i => (
                   <div key={i} className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]" style={{ animationDelay: `${i * 0.2}s` }} />
                 ))}
                 <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.6em] ml-2">Secure_Link_Established</span>
              </div>
           </div>

           <div className="lg:col-span-4 flex justify-end">
              <div className="text-right">
                 <p className="text-[10px] font-black text-[#E1306C] uppercase tracking-[0.4em]">Target_Era</p>
                 <p className="text-3xl font-heritage font-bold text-white tracking-tighter">2077 - 2112 SPEC</p>
              </div>
           </div>
        </div>

        {/* MAIN DISPLAY MANIFOLD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
           
           {/* LEFT: Project Selector */}
           <div className="lg:col-span-4 space-y-8 animate-in slide-in-from-left-8 duration-1000">
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-[#E1306C]">
                   <Scan size={20} className="animate-pulse" />
                   <span className="text-[11px] font-black uppercase tracking-[0.6em]">Registry_Navigator</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-heritage font-bold text-white uppercase tracking-tighter leading-none">
                  Project <br/><span className="italic text-gray-500">Catalog.</span>
                </h2>
              </div>

              <div className="space-y-4 pt-8">
                 {PROJECTS.map((project) => (
                   <button
                     key={project.id}
                     onClick={() => handleProjectSwitch(project.id)}
                     className={`w-full group relative p-8 rounded-[2.5rem] border-2 transition-all duration-700 text-left overflow-hidden ${activeProjectId === project.id ? 'bg-white border-transparent text-[#010101] shadow-[0_30px_100px_rgba(255,255,255,0.1)]' : 'bg-transparent border-white/5 text-gray-500 hover:border-white/20 hover:text-white'}`}
                   >
                      <div className="relative z-10 flex justify-between items-center">
                         <div className="space-y-1">
                            <p className={`text-[8px] font-black uppercase tracking-widest ${activeProjectId === project.id ? 'text-[#E1306C]' : 'text-gray-600'}`}>{project.location}</p>
                            <p className="text-xl md:text-2xl font-heritage font-bold uppercase tracking-tight">{project.name[language]}</p>
                         </div>
                         <ArrowRight size={20} className={`transition-transform duration-500 ${activeProjectId === project.id ? 'translate-x-0' : '-translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'}`} />
                      </div>
                      {activeProjectId === project.id && (
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-[#E1306C] shadow-[0_0_20px_#E1306C]" />
                      )}
                   </button>
                 ))}
              </div>

              <div className="p-8 rounded-[2.5rem] bg-[#0EA5E9]/5 border border-[#0EA5E9]/20 space-y-4">
                 <div className="flex items-center gap-3 text-[#0EA5E9]">
                    <ShieldCheck size={18} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Archival Vision</span>
                 </div>
                 <p className="text-sm text-gray-400 font-medium italic leading-relaxed">
                   "We do not replace the island; we elevate the voyager to protect its soul."
                 </p>
              </div>
           </div>

           {/* RIGHT: High-Visibility Details Display */}
           <div className="lg:col-span-8 relative">
              {isSyncing ? (
                <div className="h-full flex flex-col items-center justify-center space-y-8 animate-in fade-in duration-300">
                   <Loader2 size={64} className="text-[#0EA5E9] animate-spin" />
                   <p className="text-[11px] font-black uppercase tracking-[0.8em] text-[#0EA5E9] animate-pulse">Syncing_Neural_Manifest...</p>
                </div>
              ) : (
                <div className="space-y-12 animate-in fade-in zoom-in-95 duration-1000">
                   {/* Project Visual Shard */}
                   <div className="relative aspect-[16/10] rounded-[5rem] overflow-hidden border border-white/10 shadow-[0_60px_120px_rgba(0,0,0,0.8)] group/img">
                      <img src={activeProject.image} className="w-full h-full object-cover transition-transform duration-[20s] group-hover/img:scale-125" alt="" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#010101] via-black/20 to-transparent" />
                      <div className="absolute top-10 left-10">
                         <div className="bg-[#010101]/80 backdrop-blur-xl px-8 py-4 rounded-[2rem] border border-white/10 shadow-2xl flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-[#E1306C]/20 flex items-center justify-center text-[#E1306C]">
                               <Target size={22} />
                            </div>
                            <div className="text-left">
                               <p className="text-[9px] font-black text-white/30 uppercase tracking-widest">Spatial_Node</p>
                               <p className="text-sm font-bold uppercase tracking-widest">{activeProject.location}</p>
                            </div>
                         </div>
                      </div>
                      <div className="absolute bottom-10 right-10">
                         <div className="bg-white text-black px-10 py-5 rounded-[2.5rem] font-black text-xs uppercase tracking-[0.5em] shadow-3xl">
                            {activeProject.year} PROJECT_ERA
                         </div>
                      </div>
                      {/* Scanning Effect Overlay */}
                      <div className="absolute top-0 left-0 w-full h-[4px] bg-white/20 blur-md animate-scan-y opacity-30" />
                   </div>

                   {/* Practical Specs & Purpose */}
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="space-y-8">
                         <div className="space-y-4">
                            <h3 className="text-4xl md:text-5xl font-heritage font-bold text-white uppercase tracking-tighter leading-none">
                               {activeProject.name[language]}
                            </h3>
                            <div className="flex items-center gap-4 text-[#0EA5E9]">
                               <Zap size={18} fill="currentColor" />
                               <span className="text-[11px] font-black uppercase tracking-[0.4em]">{activeProject.technology}</span>
                            </div>
                         </div>
                         <p className="text-xl md:text-2xl text-gray-400 font-light italic leading-relaxed border-l-4 border-white/5 pl-8">
                            "{activeProject.description[language]}"
                         </p>
                         <button className="flex items-center gap-6 px-12 py-6 bg-white text-black rounded-full font-black text-xs uppercase tracking-[0.4em] hover:bg-[#0EA5E9] hover:text-white transition-all shadow-3xl active:scale-95 group/btn">
                            Initialize Immersive Link <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                         </button>
                      </div>

                      <div className="space-y-6">
                         <div className="p-8 bg-white/[0.02] border border-white/5 rounded-[3rem] space-y-6">
                            <div className="flex items-center gap-3 text-white/40">
                               <Cpu size={16} />
                               <span className="text-[10px] font-black uppercase tracking-widest">Technical Specifications</span>
                            </div>
                            <div className="space-y-4">
                               {activeProject.specs.map((spec, i) => (
                                 <div key={i} className="flex justify-between items-end border-b border-white/5 pb-4">
                                    <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">{spec.label}</span>
                                    <span className="text-xl font-heritage font-bold text-[#0EA5E9] uppercase tracking-tighter">{spec.val}</span>
                                 </div>
                               ))}
                            </div>
                         </div>

                         <div className="p-8 bg-white/[0.02] border border-white/5 rounded-[3rem] flex items-center gap-6">
                            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-white/40">
                               <Shield size={24} />
                            </div>
                            <div className="text-left space-y-1">
                               <p className="text-[9px] font-black text-[#E1306C] uppercase tracking-widest">Practical Purpose</p>
                               <p className="text-sm font-medium italic text-gray-300 leading-tight">
                                 "{activeProject.practicalUse[language]}"
                               </p>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
              )}
           </div>
        </div>

        {/* CORE PHILOSOPHY SECTION */}
        <div className="bg-[#0a0a0a] border border-white/5 rounded-[6rem] p-12 md:p-32 space-y-24 relative overflow-hidden group shadow-3xl">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(14,165,233,0.08)_0%,transparent_60%)]" />
           <div className="absolute top-0 right-0 p-16 opacity-[0.02] text-white rotate-12"><Globe size={600} /></div>

           <div className="relative z-10 text-center space-y-12">
              <div className="flex flex-col items-center gap-6">
                <div className="inline-flex items-center gap-4 text-[#E1306C]">
                   <Orbit size={40} className="animate-spin-slow" />
                   <span className="text-[12px] font-black uppercase tracking-[0.8em]">The_2077_Master_Plan</span>
                </div>
                <h3 className="text-5xl md:text-9xl font-heritage font-bold text-white uppercase tracking-tighter leading-none">
                   SYNCHRONIZED <br/><span className="italic text-gray-500">SURVIVAL.</span>
                </h3>
              </div>
              <p className="text-xl md:text-5xl text-gray-400 font-light italic max-w-5xl mx-auto leading-[1.2] tracking-tight">
                 "Our future is not about replacing the island with neon lights, but about using the silicon age to remove the human footprint. We stay in the sky to let the jungle breathe."
              </p>
           </div>

           <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Shield, label: 'Heritage Stasis', desc: 'Encasing ancient monuments in time-stasis fields to stop physical decay.' },
                { icon: Microscope, label: 'Bio-Sensing', desc: 'Real-time neural health tracking for leopard and elephant populations.' },
                { icon: FastForward, label: 'Temporal Path', desc: 'Molecular translocation portals between Ella and Adams Peak summits.' },
                { icon: Layers, label: 'Visual Archive', desc: 'Holographic reconstruction of every sunset for future generations.' }
              ].map((goal, gIdx) => (
                <div key={gIdx} className="bg-black/60 p-10 rounded-[3.5rem] border border-white/5 space-y-6 hover:border-[#0EA5E9]/40 transition-all duration-700 hover:-translate-y-4 group/card shadow-2xl">
                   <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-[#0EA5E9] group-hover/card:scale-110 transition-transform">
                      <goal.icon size={32} />
                   </div>
                   <div className="space-y-4">
                      <p className="text-sm font-black text-white uppercase tracking-widest">{goal.label}</p>
                      <p className="text-xs text-gray-500 font-medium italic leading-relaxed">{goal.desc}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* LOG OUT FOOTER */}
        <div className="pt-20 flex flex-col items-center gap-24 border-t border-white/5">
           <div className="flex flex-wrap justify-center gap-24 opacity-30">
              <div className="flex items-center gap-4">
                 <Binary size={28} className="text-[#0EA5E9]" />
                 <div className="text-left">
                    <p className="text-[9px] font-black uppercase tracking-widest">Protocol_L9</p>
                    <p className="text-[10px] font-bold">Temporal Sync Ready</p>
                 </div>
              </div>
              <div className="flex items-center gap-4">
                 <ShieldCheck size={28} className="text-green-500" />
                 <div className="text-left">
                    <p className="text-[9px] font-black uppercase tracking-widest">Identity_Verified</p>
                    <p className="text-[10px] font-bold">VOYAGER_01</p>
                 </div>
              </div>
              <div className="flex items-center gap-4">
                 <Radio size={28} className="text-[#E1306C]" />
                 <div className="text-left">
                    <p className="text-[9px] font-black uppercase tracking-widest">Feed_Strength</p>
                    <p className="text-[10px] font-bold">99.8% STABLE</p>
                 </div>
              </div>
           </div>

           <button 
             onClick={() => setView('home')}
             className="group relative px-24 py-12 bg-white text-black rounded-full font-black text-sm uppercase tracking-[0.8em] flex items-center gap-10 hover:scale-110 active:scale-95 shadow-3xl overflow-hidden"
           >
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0EA5E9]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
             <ArrowLeft size={28} className="group-hover:-translate-x-3 transition-transform" />
             Back to Base Reality
           </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan-y {
          0% { top: -5%; opacity: 0; }
          20% { opacity: 0.6; }
          80% { opacity: 0.6; }
          100% { top: 105%; opacity: 0; }
        }
        .animate-scan-y { animation: scan-y 6s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
        .animate-spin-slow { animation: spin 24s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .shadow-3xl { box-shadow: 0 0 80px rgba(14,165,233,0.3); }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
};

export default NeuralHorizons;