import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Language, Destination } from '../types.ts';
import { DESTINATIONS, UI_STRINGS } from '../constants.tsx';
import { 
  Compass, 
  MapPin, 
  ArrowRight, 
  Sparkles, 
  Target, 
  Search, 
  X,
  Zap,
  Layers,
  Database,
  Globe,
  Star,
  Activity,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Scan,
  Radio,
  Droplets,
  Tent
} from 'lucide-react';

interface IslandMapManifoldProps {
  language: Language;
  onSelectDestination: (dest: Destination) => void;
}

const IslandMapManifold: React.FC<IslandMapManifoldProps> = ({ language, onSelectDestination }) => {
  const [hoveredNode, setHoveredNode] = useState<Destination | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'all' | Destination['category']>('all');
  
  // Guided Tour States
  const [tourMode, setTourMode] = useState(false);
  const [activeTourIndex, setActiveTourIndex] = useState(0);

  const filteredNodes = useMemo(() => {
    return DESTINATIONS.filter(d => {
      const matchesSearch = d.name.EN.toLowerCase().includes(searchQuery.toLowerCase()) || d.name.SI.includes(searchQuery);
      const matchesCategory = categoryFilter === 'all' || d.category === categoryFilter;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, categoryFilter]);

  const currentNode = tourMode ? filteredNodes[activeTourIndex] : hoveredNode;

  const categoryColors = {
    ancient: '#F59E0B',
    beach: '#0EA5E9',
    wildlife: '#10B981',
    mountains: '#8B5CF6',
    waterfalls: '#3B82F6',
    camping: '#059669'
  };

  const handleNext = () => {
    setActiveTourIndex((prev) => (prev + 1) % filteredNodes.length);
  };

  const handlePrev = () => {
    setActiveTourIndex((prev) => (prev - 1 + filteredNodes.length) % filteredNodes.length);
  };

  const toggleTour = () => {
    setTourMode(!tourMode);
    if (!tourMode) setActiveTourIndex(0);
  };

  // Map view transformation based on focus
  const mapTransform = useMemo(() => {
    if (!tourMode || !filteredNodes[activeTourIndex]?.coordinates) return 'scale(1) translate(0, 0)';
    const node = filteredNodes[activeTourIndex];
    if (!node.coordinates) return 'scale(1) translate(0, 0)';
    
    // Calculate translation to center the node (assuming 50% is center)
    const tx = (50 - node.coordinates.x) * 2.5; 
    const ty = (50 - node.coordinates.y) * 2.5;
    return `scale(1.8) translate(${tx}%, ${ty}%)`;
  }, [tourMode, activeTourIndex, filteredNodes]);

  return (
    <div className="min-h-screen bg-[#050508] relative overflow-hidden flex flex-col pt-32 pb-12">
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.08)_0%,transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `linear-gradient(#E1306C 1px, transparent 1px), linear-gradient(90deg, #E1306C 1px, transparent 1px)`, backgroundSize: '100px 100px', maskImage: 'radial-gradient(circle, black, transparent 80%)' }} />
      </div>

      <div className="max-w-[1800px] mx-auto w-full px-8 relative z-10 flex flex-col lg:flex-row gap-12 items-stretch h-full">
        
        {/* CONTROL SIDEBAR */}
        <div className="w-full lg:w-96 shrink-0 space-y-8 animate-in slide-in-from-left-8 duration-1000">
           <div className="bg-black/60 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-10 space-y-10 shadow-3xl">
              <div className="space-y-4">
                 <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-[#0EA5E9]">
                       <Target size={20} className="animate-pulse" />
                       <span className="text-[10px] font-black uppercase tracking-[0.5em]">Geospatial_Interface</span>
                    </div>
                    <div className="flex gap-1">
                       <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                       <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: '0.2s' }} />
                    </div>
                 </div>
                 <h2 className="text-4xl font-heritage font-bold text-white uppercase tracking-tighter">Spatial Map.</h2>
              </div>

              <div className="space-y-8">
                 {/* Tour Initiation Button */}
                 <button 
                   onClick={toggleTour}
                   className={`w-full py-6 rounded-[2rem] font-black text-[10px] uppercase tracking-[0.4em] flex items-center justify-center gap-4 transition-all duration-500 shadow-2xl overflow-hidden relative group ${tourMode ? 'bg-[#E1306C] text-white' : 'bg-white text-[#0a0a0a] hover:scale-[1.02]'}`}
                 >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    {tourMode ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}
                    {tourMode ? 'Terminate Tour' : 'Initialize Guided Tour'}
                 </button>

                 {!tourMode ? (
                   <div className="space-y-6 animate-in fade-in duration-500">
                      <div className="relative group">
                         <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#0EA5E9] transition-colors" size={20} />
                         <input 
                           type="text"
                           placeholder="Locate registry node..."
                           value={searchQuery}
                           onChange={(e) => setSearchQuery(e.target.value)}
                           className="w-full pl-12 pr-6 py-5 bg-white/5 border border-white/10 rounded-2xl text-white font-bold focus:outline-none focus:ring-4 focus:ring-[#0EA5E9]/10 transition-all"
                         />
                      </div>

                      <div className="grid grid-cols-2 gap-3 max-h-48 overflow-y-auto no-scrollbar">
                         {['all', 'ancient', 'beach', 'wildlife', 'mountains', 'waterfalls', 'camping'].map((cat) => (
                           <button
                             key={cat}
                             onClick={() => setCategoryFilter(cat as any)}
                             className={`px-4 py-3 rounded-xl text-[9px] font-black uppercase tracking-widest border transition-all ${
                               categoryFilter === cat 
                                 ? 'bg-[#0EA5E9] text-white border-transparent shadow-[0_0_20px_rgba(14,165,233,0.4)]' 
                                 : 'bg-white/5 border-white/10 text-white/40 hover:border-white/30 hover:text-white'
                             }`}
                           >
                             {cat}
                           </button>
                         ))}
                      </div>
                   </div>
                 ) : (
                   <div className="space-y-8 animate-in slide-in-from-top-4 duration-700">
                      <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 space-y-6">
                         <div className="flex justify-between items-center text-[9px] font-black text-white/40 uppercase tracking-widest">
                            <span>Sequential_Node</span>
                            <span>{activeTourIndex + 1} / {filteredNodes.length}</span>
                         </div>
                         <div className="space-y-2">
                            <h4 className="text-2xl font-heritage font-bold text-white uppercase tracking-tight">{filteredNodes[activeTourIndex]?.name[language]}</h4>
                            <p className="text-[10px] text-[#0EA5E9] font-black uppercase tracking-[0.4em]">{filteredNodes[activeTourIndex]?.location}</p>
                         </div>
                         <div className="flex gap-4">
                            <button onClick={handlePrev} className="flex-1 py-4 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-white/10 transition-all">
                               <ChevronLeft size={20} className="text-white" />
                            </button>
                            <button onClick={handleNext} className="flex-1 py-4 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-white/10 transition-all">
                               <ChevronRight size={20} className="text-white" />
                            </button>
                         </div>
                      </div>
                   </div>
                 )}
              </div>

              <div className="pt-8 border-t border-white/5 space-y-6">
                 <div className="flex items-center justify-between">
                    <p className="text-[9px] font-black text-white/30 uppercase tracking-widest">Registry Synchronization</p>
                    <span className="text-xl font-heritage font-black text-[#0EA5E9] uppercase">Active</span>
                 </div>
                 <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                    <Activity size={18} className="text-green-500 animate-pulse" />
                    <p className="text-[10px] font-bold text-white/60 uppercase tracking-widest">Signal_Strength: Optimal</p>
                 </div>
              </div>
           </div>

           {/* Quick Legends */}
           <div className="bg-black/40 backdrop-blur-2xl border border-white/5 rounded-[2.5rem] p-8 flex flex-wrap gap-8 justify-center shadow-2xl">
              {Object.entries(categoryColors).map(([cat, color]) => (
                <div key={cat} className="flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}` }} />
                   <span className="text-[9px] font-black uppercase tracking-widest text-white/20">{cat}</span>
                </div>
              ))}
           </div>
        </div>

        {/* INTERACTIVE MAP HUB */}
        <div className="flex-grow bg-black/40 backdrop-blur-xl border border-white/5 rounded-[4rem] relative overflow-hidden group shadow-inner">
           <div className="absolute inset-0 pattern-overlay opacity-10 pointer-events-none" />
           
           {/* MAP ENGINE */}
           <div className="absolute inset-0 flex items-center justify-center p-10 md:p-20">
              {categoryFilter === 'camping' && (
                <div className="absolute inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-md animate-in fade-in duration-700">
                   <div className="text-center space-y-8 max-w-md px-6">
                      <div className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30 shadow-[0_0_50px_rgba(16,185,129,0.2)]">
                         <Tent size={48} className="text-emerald-500 animate-pulse" />
                      </div>
                      <div className="space-y-4">
                         <h3 className="text-4xl font-heritage font-bold text-white uppercase tracking-tighter">Camping Registry</h3>
                         <p className="text-xl text-emerald-500 font-black uppercase tracking-[0.4em] animate-pulse">
                            {language === 'EN' ? 'Coming Soon' : 'ළඟදීම'}
                         </p>
                      </div>
                      <p className="text-gray-400 italic text-sm leading-relaxed">
                         {language === 'EN' 
                           ? "The geospatial nodes for wild forest camping are currently being synchronized. Access will be granted in the next system update."
                           : "වනාන්තර කලාප දත්ත පද්ධතියට එක් කරමින් පවතී. මීළඟ යාවත්කාලීනයෙන් පිවිසිය හැක."}
                      </p>
                      <button 
                        onClick={() => setCategoryFilter('all')}
                        className="px-10 py-4 bg-white text-black rounded-full font-black text-[10px] uppercase tracking-[0.4em] hover:scale-105 transition-transform"
                      >
                        Return to Core
                      </button>
                   </div>
                </div>
              )}
              <div 
                className="relative h-full aspect-[3/4] transition-all duration-[1200ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
                style={{ transform: mapTransform }}
              >
                 {/* Topographical Base */}
                 <img 
                   src="https://images.unsplash.com/photo-1514483127413-f72f273478c3?auto=format&fit=crop&w=1200&q=80" 
                   className="w-full h-full object-contain opacity-30 grayscale contrast-150 transition-all duration-1000" 
                   alt="Lanka Terrain"
                   style={{ maskImage: 'radial-gradient(circle, black 40%, transparent 95%)' }}
                 />
                 
                 {/* Nodes Layer */}
                 <div className="absolute inset-0">
                    {filteredNodes.map((node, idx) => {
                      if (!node.coordinates) return null;
                      const isActive = tourMode && activeTourIndex === idx;
                      const isHovered = hoveredNode?.id === node.id;
                      const isFocused = isActive || isHovered;
                      const color = categoryColors[node.category] || '#ffffff';

                      return (
                        <div 
                          key={node.id}
                          className="absolute"
                          style={{ left: `${node.coordinates.x}%`, top: `${node.coordinates.y}%`, transform: 'translate(-50%, -50%)', zIndex: isFocused ? 50 : 10 }}
                          onMouseEnter={() => !tourMode && setHoveredNode(node)}
                          onMouseLeave={() => !tourMode && setHoveredNode(null)}
                          onClick={() => onSelectDestination(node)}
                        >
                          <div className={`relative cursor-pointer transition-all duration-700 ${isFocused ? 'scale-[2]' : 'scale-100'}`}>
                             <div className={`absolute inset-0 rounded-full animate-ping opacity-30 ${isFocused ? 'scale-[3]' : ''}`} style={{ backgroundColor: color, animationDuration: '3s' }} />
                             <div 
                               className="w-4 h-4 rounded-full border-2 border-white shadow-2xl relative z-10 flex items-center justify-center" 
                               style={{ backgroundColor: color }}
                             >
                                {isFocused && <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />}
                             </div>
                          </div>

                          {/* Focus Shard (Tooltip) */}
                          {isFocused && (
                            <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-8 w-80 animate-in slide-in-from-bottom-4 zoom-in-95 duration-500 z-50 pointer-events-none ${tourMode ? 'scale-[0.6]' : ''}`}>
                               <div className="bg-black/90 backdrop-blur-3xl border border-white/20 rounded-[3.5rem] p-2 shadow-[0_40px_100px_rgba(0,0,0,1)] overflow-hidden">
                                  <div className="aspect-video rounded-[3rem] overflow-hidden mb-4 border border-white/5 relative">
                                     <img src={node.image} className="w-full h-full object-cover" alt="" />
                                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                     <div className="absolute top-4 right-4">
                                        <div className="px-3 py-1 bg-[#E1306C] text-white text-[7px] font-black uppercase tracking-widest rounded-full shadow-2xl">Focus_Active</div>
                                     </div>
                                     <div className="absolute bottom-4 left-6">
                                        <p className="text-[10px] font-black uppercase text-[#0EA5E9] tracking-widest">{node.location}</p>
                                     </div>
                                  </div>
                                  <div className="px-8 pb-10 pt-2 space-y-4">
                                     <div className="flex items-center justify-between">
                                        <h4 className="text-2xl font-heritage font-bold text-white uppercase tracking-tight">{node.name[language]}</h4>
                                        <Star size={14} className="text-yellow-400 fill-current" />
                                     </div>
                                     <p className="text-xs text-gray-400 font-medium italic line-clamp-3 leading-relaxed">"{node.shortStory[language]}"</p>
                                     <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                           <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" />
                                           <span className="text-[8px] font-black uppercase text-white/30">Registry_Synced</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-[#E1306C] text-[8px] font-black uppercase tracking-widest">
                                           Launch <ArrowRight size={12} />
                                        </div>
                                     </div>
                                  </div>
                               </div>
                               <div className="w-[1px] h-14 bg-gradient-to-t from-[#E1306C]/50 to-transparent mx-auto" />
                            </div>
                          )}
                        </div>
                      );
                    })}
                 </div>
              </div>
           </div>

           {/* Map HUD Components */}
           <div className="absolute top-10 right-10 flex flex-col gap-6">
              <div className="bg-black/60 backdrop-blur-3xl border border-white/10 p-6 rounded-3xl space-y-4 text-right shadow-2xl">
                 <div className="space-y-1">
                    <p className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em]">Uplink_Identity</p>
                    <p className="text-xl font-heritage font-black text-white tracking-[0.2em]">VOYAGER_01</p>
                 </div>
                 {tourMode && (
                   <div className="flex items-center justify-end gap-3 text-red-500 animate-pulse">
                      <Radio size={14} />
                      <span className="text-[8px] font-black uppercase tracking-widest">Live_Tour_Active</span>
                   </div>
                 )}
              </div>
              
              <div className="flex flex-col gap-3">
                 <button className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/20 hover:text-white transition-all shadow-xl backdrop-blur-xl">
                    <Maximize2 size={22} />
                 </button>
                 <button onClick={toggleTour} className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all shadow-xl backdrop-blur-xl border ${tourMode ? 'bg-[#E1306C] border-transparent text-white' : 'bg-white/5 border-white/10 text-white/20 hover:text-white'}`}>
                    <Scan size={22} />
                 </button>
              </div>
           </div>

           <div className="absolute bottom-10 left-10 space-y-6 pointer-events-none">
              <div className="bg-white/5 backdrop-blur-xl border border-white/5 p-6 rounded-[2rem] space-y-2 opacity-60 group-hover:opacity-100 transition-opacity">
                 <p className="text-[8px] font-black text-white/40 uppercase tracking-[0.4em]">Node_Coordinates</p>
                 <div className="flex items-center gap-4 text-white font-mono text-[10px] tracking-widest">
                    <span>X: {currentNode?.coordinates?.x || '--'}</span>
                    <span>Y: {currentNode?.coordinates?.y || '--'}</span>
                 </div>
              </div>
              <Compass size={120} className="text-white opacity-10 animate-spin-slow" />
           </div>
           
           {/* Tour Progress Bar (Bottom) */}
           {tourMode && (
             <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/5">
                <div 
                  className="h-full bg-gradient-to-r from-[#E1306C] via-purple-500 to-[#0EA5E9] shadow-[0_0_20px_#E1306C] transition-all duration-700"
                  style={{ width: `${((activeTourIndex + 1) / filteredNodes.length) * 100}%` }}
                />
             </div>
           )}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .animate-spin-slow { animation: spin 40s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .shadow-3xl { box-shadow: 0 40px 100px rgba(0,0,0,0.8); }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
};

export default IslandMapManifold;