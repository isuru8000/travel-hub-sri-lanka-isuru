import React, { useState, useMemo } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Language, Destination } from '../types';
import { DESTINATIONS } from '../constants';
import { 
  Compass, 
  Target, 
  Search, 
  ArrowRight, 
  ArrowLeft,
  Activity,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Scan,
  Radio,
  Tent
} from 'lucide-react';

// Fix for leaflet marker icon
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

interface IslandMapManifoldProps {
  language: Language;
  onSelectDestination: (dest: Destination) => void;
  onBack?: () => void;
}

const IslandMapManifold: React.FC<IslandMapManifoldProps> = ({ language, onSelectDestination, onBack }) => {
  const [hoveredNode, setHoveredNode] = useState<Destination | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'all' | Destination['category']>('all');

  const t = {
    back: language === 'EN' ? 'Back to Home' : 'ආපසු',
  };
  
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

  return (
    <div className="min-h-screen bg-[#050508] relative overflow-hidden flex flex-col pt-32 pb-12">
      {onBack && (
        <button
          onClick={onBack}
          className="fixed top-24 left-4 sm:left-8 z-50 flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 backdrop-blur-md transition-all text-gray-400 hover:text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">{t.back}</span>
        </button>
      )}
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
           <div className="absolute inset-0">
              <MapContainer 
                center={[7.8731, 80.7718]} 
                zoom={8} 
                style={{ width: '100%', height: '100%' }}
                className="rounded-[4rem]"
              >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  {filteredNodes.map((node) => {
                       if (!node.coordinates) return null;
                       const position: [number, number] = [
                           9.6 - (node.coordinates.y / 100) * 5,
                           79.5 + (node.coordinates.x / 100) * 5
                       ];
                       
                       return (
                         <Marker
                           key={node.id}
                           position={position}
                           eventHandlers={{
                               click: () => onSelectDestination(node),
                           }}
                         />
                       );
                  })}
              </MapContainer>
           </div>
           
           {/* Map HUD Components */}
           <div className="absolute top-10 right-10 flex flex-col gap-6 z-[60]">
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
           
           {/* Tour Progress Bar (Bottom) */}
           {tourMode && (
             <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/5 z-[60]">
                <div 
                  className="h-full bg-gradient-to-r from-[#E1306C] via-purple-500 to-[#0EA5E9] shadow-[0_0_20px_#E1306C] transition-all duration-700"
                  style={{ width: `${((activeTourIndex + 1) / filteredNodes.length) * 100}%` }}
                />
             </div>
           )}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .leaflet-container { z-index: 10; }
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