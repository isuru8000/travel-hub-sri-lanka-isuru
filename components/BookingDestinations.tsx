
import React from 'react';
import { Language } from '../types.ts';
import { DESTINATIONS } from '../constants.tsx';
import { 
  Compass, 
  MapPin, 
  Star, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Radio, 
  Target, 
  Clock, 
  ExternalLink, 
  Database, 
  Lock,
  Activity,
  Scan,
  Globe,
  ArrowLeft,
  BookOpen,
  Sparkles,
  Layers
} from 'lucide-react';

interface BookingDestinationsProps {
  language: Language;
  setView: (view: any) => void;
}

const BookingDestinations: React.FC<BookingDestinationsProps> = ({ language, setView }) => {
  const bookingRegistry = DESTINATIONS.map((d, i) => ({
    ...d,
    price: 150 + (i * 25),
    duration: i % 2 === 0 ? '3-5 Days' : '2-4 Days',
    isLocked: i > 5 // Mock locking for some nodes
  }));

  return (
    <div className="min-h-screen bg-[#fafafa] pb-32 font-sans">
      {/* EDITORIAL HERO SECTION */}
      <div className="relative h-[100vh] md:h-[90vh] flex flex-col md:flex-row overflow-hidden bg-white">
        <div className="w-full h-[40vh] md:w-1/2 md:h-full relative overflow-hidden shrink-0">
          <img 
            src="https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1920&q=80" 
            className="w-full h-full object-cover animate-slow-zoom" 
            alt="Sri Lanka Landscape" 
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 text-white space-y-1 md:space-y-2">
            <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] opacity-60">Location_Archive_#001</p>
            <h3 className="text-xl md:text-3xl font-heritage font-bold uppercase tracking-tighter">The Central Highlands</h3>
          </div>
        </div>
        
        <div className="w-full flex-grow md:w-1/2 md:h-full flex flex-col justify-center p-6 md:p-24 space-y-8 md:space-y-12 bg-white">
          <div className="space-y-4 md:space-y-6">
            <div className="inline-flex items-center gap-2 md:gap-4 px-4 py-1.5 md:px-6 md:py-2 rounded-full bg-black/5 border border-black/10 text-gray-400 text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em]">
              <BookOpen size={12} className="md:w-3.5 md:h-3.5 text-[#E1306C]" />
              The_Voyager_Essay
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-[8rem] font-heritage font-bold text-[#0a0a0a] leading-[0.85] tracking-tighter uppercase">
              THE ART OF <br/><span className="italic insta-text-gradient">TRAVERSAL.</span>
            </h1>
          </div>
          
          <div className="space-y-6 md:space-y-8 max-w-xl">
            <p className="text-lg md:text-2xl text-gray-500 font-light italic leading-relaxed border-l-4 border-[#E1306C]/20 pl-4 md:pl-8">
              "To travel is to archive the soul's resonance with the earth. In Sri Lanka, every path is a narrative thread, every destination a sacred node in a living history that spans millennia."
            </p>
            <p className="text-gray-400 text-xs md:text-base leading-relaxed tracking-wide">
              We invite you to synthesize your own journey. Below is our curated manifest of archival nodes—destinations that offer the highest fidelity of experience, from the misty peaks of the central hills to the azure rhythms of the southern coast.
            </p>
          </div>

          <div className="flex items-center gap-4 md:gap-8 pt-4 md:pt-8">
            <div className="flex -space-x-3 md:-space-x-4">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-8 h-8 md:w-12 md:h-12 rounded-full border-2 border-white bg-gray-100 overflow-hidden shadow-lg">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                </div>
              ))}
            </div>
            <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-gray-400">
              <span className="text-[#0a0a0a]">1.2k+ Voyagers</span> <br/> Currently Synchronized
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-32 space-y-24 md:space-y-40">
        {/* THE ESSAY SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 items-start">
          <div className="md:col-span-2 space-y-8 md:space-y-12">
            <div className="space-y-3 md:space-y-4">
              <p className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] text-[#E1306C]">01_The_Concept</p>
              <h2 className="text-3xl md:text-6xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tighter">Beyond the <span className="italic">Surface.</span></h2>
            </div>
            <div className="columns-1 md:columns-2 gap-8 md:gap-12 text-gray-500 font-light leading-relaxed text-base md:text-lg space-y-6 md:space-y-8">
              <p>
                The modern traveler often seeks only the image, the fleeting shard of a place captured in a lens. But true traversal requires a deeper synchronization. It is the act of listening to the echoes of the stones, the whispers of the wind through the tea bushes, and the rhythmic pulse of the ocean.
              </p>
              <p>
                Our mission is to provide you with the tools to not just visit, but to integrate. Each node in our manifest has been selected for its historical resonance and atmospheric density. Whether you are scaling the lion's fortress at Sigiriya or drifting through the colonial shadows of Galle, you are participating in a grand archival project.
              </p>
              <p>
                This is your briefing. Your trajectory is yours to define. The prices listed are not mere costs, but investments in the preservation of these experiences within your own neural archive.
              </p>
            </div>
          </div>
          <div className="bg-[#0a0a0a] rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-12 text-white space-y-8 md:space-y-10 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#E1306C]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative z-10 space-y-4 md:space-y-6">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white/10 flex items-center justify-center text-[#E1306C]">
                <Sparkles size={24} className="md:w-8 md:h-8" />
              </div>
              <h4 className="text-2xl md:text-3xl font-heritage font-bold uppercase tracking-tight">Voyager <br/>Statistics</h4>
              <div className="space-y-4 md:space-y-6 pt-4 md:pt-6 border-t border-white/10">
                <div className="flex justify-between items-center">
                  <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest opacity-40">Active Nodes</span>
                  <span className="text-xl md:text-2xl font-heritage font-bold">42</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest opacity-40">Sync Fidelity</span>
                  <span className="text-xl md:text-2xl font-heritage font-bold text-[#E1306C]">98.4%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest opacity-40">Archival Load</span>
                  <span className="text-xl md:text-2xl font-heritage font-bold">1.2 TB</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 opacity-[0.05] text-white">
              <Layers size={120} className="md:w-[200px] md:h-[200px]" />
            </div>
          </div>
        </div>

        {/* THE MANIFEST LIST */}
        <div className="space-y-16 md:space-y-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8 border-b border-gray-100 pb-8 md:pb-12">
            <div className="space-y-3 md:space-y-4">
              <p className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] text-gray-400">02_The_Manifest</p>
              <h3 className="text-3xl md:text-7xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tighter">Available <span className="insta-text-gradient italic">Nodes.</span></h3>
            </div>
            <div className="flex items-center gap-4 md:gap-6 text-gray-400 text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em]">
              <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500" /> Online</span>
              <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500" /> Syncing</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20">
            {bookingRegistry.map((item, idx) => (
              <div 
                key={item.id} 
                className={`group relative bg-white rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border border-gray-100 shadow-xl transition-all duration-1000 ${item.isLocked ? 'grayscale opacity-60' : 'hover:shadow-[0_60px_120px_rgba(0,0,0,0.08)] hover:-translate-y-2 md:hover:-translate-y-4'}`}
              >
                <div className="relative h-[300px] md:h-[450px] overflow-hidden">
                  <img src={item.image} className="w-full h-full object-cover transition-transform duration-[8000ms] group-hover:scale-110" alt={item.name[language]} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <div className="absolute top-6 left-6 md:top-8 md:left-8 flex items-center gap-4">
                    <div className="px-4 py-2 md:px-6 md:py-3 bg-white/10 backdrop-blur-3xl rounded-full border border-white/20 text-white text-[7px] md:text-[9px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em]">
                       Node_#0{idx + 1}
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 flex justify-between items-end">
                    <div className="space-y-1 md:space-y-2">
                      <div className="flex items-center gap-2 md:gap-3 text-white/60">
                        <MapPin size={12} className="md:w-3.5 md:h-3.5 text-[#E1306C]" />
                        <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em]">{item.location}</span>
                      </div>
                      <h4 className="text-2xl md:text-4xl font-heritage font-bold text-white uppercase tracking-tighter leading-none">{item.name[language]}</h4>
                    </div>
                    <div className="text-right">
                      <p className="text-[7px] md:text-[9px] font-black text-white/40 uppercase tracking-[0.3em] md:tracking-[0.4em] mb-1">Archival Rate</p>
                      <p className="text-xl md:text-3xl font-heritage font-bold text-white tracking-tighter">${item.price}</p>
                    </div>
                  </div>

                  {item.isLocked && (
                    <div className="absolute inset-0 z-20 bg-black/40 backdrop-blur-md flex flex-col items-center justify-center gap-4 md:gap-6">
                       <Lock size={32} className="md:w-10 md:h-10 text-white/40 animate-pulse" />
                       <span className="text-[8px] md:text-[10px] font-black text-white uppercase tracking-[0.4em] md:tracking-[0.6em]">Access_Restricted</span>
                    </div>
                  )}
                </div>

                <div className="p-8 md:p-12 space-y-8 md:space-y-10">
                  <div className="space-y-4 md:space-y-6">
                    <p className="text-base md:text-xl text-gray-500 font-light italic leading-relaxed border-l-2 border-gray-100 pl-4 md:pl-8">
                       "{item.shortStory[language]}"
                    </p>
                    <div className="flex flex-wrap gap-3 md:gap-4">
                      <div className="flex items-center gap-2 md:gap-3 px-4 py-1.5 md:px-5 md:py-2 rounded-full bg-gray-50 border border-gray-100 text-gray-400 text-[8px] md:text-[10px] font-black uppercase tracking-widest">
                        <Clock size={10} className="md:w-3 md:h-3" />
                        {item.duration}
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 px-4 py-1.5 md:px-5 md:py-2 rounded-full bg-gray-50 border border-gray-100 text-gray-400 text-[8px] md:text-[10px] font-black uppercase tracking-widest">
                        <Zap size={10} className="md:w-3 md:h-3 text-[#E1306C]" />
                        Sync_Stable
                      </div>
                    </div>
                  </div>

                  <button 
                    disabled={item.isLocked}
                    onClick={() => setView('marketplace')}
                    className="w-full flex items-center justify-between px-6 py-5 md:px-10 md:py-7 bg-[#0a0a0a] text-white rounded-full font-black text-[9px] md:text-[11px] uppercase tracking-[0.4em] md:tracking-[0.6em] hover:bg-[#E1306C] transition-all shadow-2xl active:scale-95 disabled:opacity-20 group/btn"
                  >
                    <span>Initialize Traversal Sync</span>
                    <ArrowRight size={16} className="md:w-5 md:h-5 group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* REGISTRY FOOTER HUD */}
        <div className="pt-24 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-12 opacity-30">
           <div className="flex items-center gap-12">
              <div className="flex items-center gap-5">
                 <Globe size={32} className="text-[#0EA5E9]" />
                 <div className="text-left space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#0a0a0a]">Global_Topology_Sync</p>
                    <p className="text-[11px] font-bold text-gray-500">Satellite Mesh Active</p>
                 </div>
              </div>
              <div className="w-px h-16 bg-gray-100" />
              <div className="flex items-center gap-5">
                 <Activity size={32} className="text-[#E1306C]" />
                 <div className="text-left space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#0a0a0a]">Trajectory_Logic</p>
                    <p className="text-[11px] font-bold text-gray-500">Direct Uplink v4.5</p>
                 </div>
              </div>
           </div>

           <div className="text-center md:text-right space-y-3">
              <p className="text-[11px] font-black uppercase tracking-[1em] text-[#0a0a0a] ml-[1em]">End_Of_Mission_Manifest</p>
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

export default BookingDestinations;
