import React, { useState, useEffect, useMemo } from 'react';
import { Language, Destination } from '../types.ts';
import { DESTINATIONS } from '../constants.tsx';
import { 
  Zap, 
  Plus, 
  X, 
  Compass, 
  MapPin, 
  ArrowRight, 
  // Fix: Added missing ArrowLeft import
  ArrowLeft,
  Loader2, 
  Sparkles, 
  CalendarDays, 
  Target, 
  ShieldCheck, 
  Brain,
  History,
  Clock,
  Navigation,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { generateDetailedItinerary } from '../services/gemini.ts';

interface TripPlannerProps {
  language: Language;
  setView: (view: any) => void;
  onSelectDestination: (dest: Destination) => void;
}

const TripPlanner: React.FC<TripPlannerProps> = ({ language, setView, onSelectDestination }) => {
  const [selectedNodes, setSelectedNodes] = useState<Destination[]>([]);
  const [itinerary, setItinerary] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [duration, setDuration] = useState(3);
  const [step, setStep] = useState<'select' | 'result'>('select');

  const handleAddNode = (dest: Destination) => {
    if (selectedNodes.find(n => n.id === dest.id)) return;
    if (selectedNodes.length >= 5) return;
    setSelectedNodes([...selectedNodes, dest]);
  };

  const handleRemoveNode = (id: string) => {
    setSelectedNodes(selectedNodes.filter(n => n.id !== id));
    if (selectedNodes.length <= 1) setItinerary(null);
  };

  const handleGenerate = async () => {
    if (selectedNodes.length < 2) return;
    setIsGenerating(true);
    setItinerary(null);
    
    const nodeNames = selectedNodes.map(n => n.name.EN).join(', ');
    const prompt = `Create a high-end ${duration}-day immersive travel itinerary involving these locations: ${nodeNames}. Focus on cultural depth and efficient travel routes.`;
    
    try {
      const result = await generateDetailedItinerary(prompt, language);
      setItinerary(result);
      setStep('result');
    } catch (e) {
      console.error("AI Architect failed:", e);
    } finally {
      setIsGenerating(false);
    }
  };

  const resetPlanner = () => {
    setStep('select');
    setItinerary(null);
    setSelectedNodes([]);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-32 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.15)_0%,transparent_75%)]" />
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(rgba(14,165,233,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.1) 1px, transparent 1px)`, 
          backgroundSize: '80px 80px',
          transform: 'perspective(1000px) rotateX(60deg) translateY(-100px) scale(2)'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {step === 'select' ? (
          <div className="space-y-16 animate-in fade-in duration-700">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-white/10 pb-12">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#0EA5E9]/10 border border-[#0EA5E9]/30 text-[#0EA5E9] text-[10px] font-black uppercase tracking-[0.4em]">
                  <Target size={14} className="animate-pulse" />
                  Mission_Briefing_Architect
                </div>
                <h2 className="text-4xl md:text-7xl font-heritage font-bold tracking-tighter uppercase text-white">
                  Trip <span className="italic insta-text-gradient">Architect.</span>
                </h2>
                <p className="max-w-xl text-gray-400 font-light italic text-lg leading-relaxed">
                  {language === 'EN' 
                    ? "Select 2-5 nodes from our archival registry. Our neural engine will synthesize the optimal traversal trajectory."
                    : "සංරක්ෂිත ස්ථාන 2-5 අතර ප්‍රමාණයක් තෝරාගන්න. අපගේ බුද්ධි ඒකකය ඔබ සඳහා හොඳම ගමන් සැලසුම පිළියෙළ කරනු ඇත."}
                </p>
              </div>

              <div className="flex flex-col gap-4 w-full md:w-auto">
                 <div className="bg-white/5 border border-white/10 p-2 rounded-2xl flex gap-2">
                    {[3, 5, 7].map(d => (
                      <button 
                        key={d}
                        onClick={() => setDuration(d)}
                        className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${duration === d ? 'bg-[#0EA5E9] text-white shadow-lg shadow-[#0EA5E9]/20' : 'text-gray-500 hover:text-white'}`}
                      >
                        {d} Days
                      </button>
                    ))}
                 </div>
                 <button 
                  disabled={selectedNodes.length < 2 || isGenerating}
                  onClick={handleGenerate}
                  className="px-10 py-5 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:scale-105 active:scale-95 transition-all shadow-3xl disabled:opacity-20 disabled:grayscale"
                >
                  {isGenerating ? <Loader2 size={18} className="animate-spin" /> : <Brain size={18} className="text-[#0EA5E9]" />}
                  {isGenerating ? 'Synthesizing...' : 'Generate Itinerary'}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
               {/* Selection Manifest */}
               <div className="lg:col-span-4 space-y-8">
                  <div className="bg-white/5 border border-white/10 rounded-[3rem] p-8 space-y-8 shadow-2xl">
                     <div className="flex justify-between items-center px-2">
                        <span className="text-[10px] font-black text-white/30 uppercase tracking-widest">Traversal Manifest</span>
                        <span className="text-lg font-heritage font-bold text-[#0EA5E9]">{selectedNodes.length} / 5</span>
                     </div>

                     <div className="space-y-4">
                        {selectedNodes.length === 0 ? (
                          <div className="py-20 text-center space-y-4 border-2 border-dashed border-white/5 rounded-[2rem]">
                             <Compass size={40} className="mx-auto text-white/10 animate-spin-slow" />
                             <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em]">Manifest Empty</p>
                          </div>
                        ) : (
                          selectedNodes.map((node, idx) => (
                            <div key={node.id} className="group relative flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all animate-in slide-in-from-right-4">
                               <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-white/10">
                                  <img src={node.image} className="w-full h-full object-cover" alt="" />
                               </div>
                               <div className="flex-grow min-w-0">
                                  <p className="text-[8px] font-black text-[#0EA5E9] uppercase tracking-widest leading-none mb-1">NODE_{String(idx + 1).padStart(2, '0')}</p>
                                  <p className="text-sm font-bold text-white truncate uppercase">{node.name[language]}</p>
                               </div>
                               <button 
                                onClick={() => handleRemoveNode(node.id)}
                                className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:text-red-500 hover:bg-red-500/10 transition-all"
                               >
                                  <X size={16} />
                               </button>
                            </div>
                          ))
                        )}
                     </div>

                     {selectedNodes.length >= 2 && (
                        <div className="pt-4 animate-pulse">
                           <div className="flex items-center gap-3 text-green-500 justify-center">
                              <ShieldCheck size={14} />
                              <span className="text-[9px] font-black uppercase tracking-widest">Handshake Ready</span>
                           </div>
                        </div>
                     )}
                  </div>

                  <div className="p-8 bg-gradient-to-br from-[#E1306C]/10 to-blue-600/10 border border-white/5 rounded-[3rem] space-y-4">
                     <div className="flex items-center gap-3 text-[#E1306C]">
                        <Sparkles size={16} />
                        <span className="text-[10px] font-black uppercase tracking-widest">System Note</span>
                     </div>
                     <p className="text-xs text-gray-400 font-medium italic leading-relaxed">
                        "The Neural Architect analyzes topographic data and historical synergy to build your path. Selecting proximate nodes yields deeper focus."
                     </p>
                  </div>
               </div>

               {/* Registry Grid */}
               <div className="lg:col-span-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-h-[70vh] overflow-y-auto no-scrollbar pr-4">
                    {DESTINATIONS.map((dest) => {
                      const isSelected = selectedNodes.some(n => n.id === dest.id);
                      return (
                        <div key={dest.id} className={`group relative bg-white/5 border rounded-[2.5rem] overflow-hidden transition-all duration-500 ${isSelected ? 'border-[#0EA5E9]/50 opacity-50' : 'border-white/10 hover:border-white/30'}`}>
                          <div className="aspect-[16/9] overflow-hidden">
                            <img src={dest.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="" />
                          </div>
                          <div className="p-8 space-y-6">
                            <div className="space-y-1">
                              <p className="text-[8px] font-black text-gray-500 uppercase tracking-widest">{dest.location}</p>
                              <h4 className="text-xl font-heritage font-bold text-white uppercase">{dest.name[language]}</h4>
                            </div>
                            <button 
                              onClick={() => handleAddNode(dest)}
                              disabled={isSelected}
                              className={`w-full py-4 rounded-2xl flex items-center justify-center gap-3 font-black text-[10px] uppercase tracking-widest transition-all ${isSelected ? 'bg-green-500/20 text-green-500' : 'bg-white text-black hover:bg-[#0EA5E9] hover:text-white'}`}
                            >
                              {isSelected ? <CheckCircle2 size={14} /> : <Plus size={14} />}
                              {isSelected ? 'In Manifest' : 'Dock Node'}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
               </div>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto space-y-16 animate-in slide-in-from-bottom-12 duration-1000">
             <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <button 
                  onClick={resetPlanner}
                  className="flex items-center gap-4 text-gray-500 hover:text-white transition-all uppercase tracking-[0.4em] text-[10px] font-black"
                >
                   <ArrowLeft size={16} /> New Manifest
                </button>
                <div className="flex items-center gap-6">
                   <div className="px-6 py-2.5 bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 rounded-full text-[#0EA5E9] text-[10px] font-black uppercase tracking-widest">
                      {duration} DAY SEQUENCE
                   </div>
                   <div className="px-6 py-2.5 bg-green-500/10 border border-green-500/20 rounded-full text-green-500 text-[10px] font-black uppercase tracking-widest">
                      LOGISTICS OPTIMIZED
                   </div>
                </div>
             </div>

             <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#0EA5E9]/20 to-[#E1306C]/20 rounded-[5rem] blur-[100px] opacity-30" />
                <div className="relative bg-white/5 backdrop-blur-[120px] border border-white/10 rounded-[5rem] p-12 md:p-20 shadow-2xl overflow-hidden">
                   <div className="absolute top-0 right-0 p-12 opacity-[0.02] text-white rotate-12"><Brain size={400} /></div>
                   
                   <div className="relative z-10 space-y-12">
                      <div className="flex flex-col items-center gap-6 text-center">
                         <div className="w-20 h-20 rounded-3xl bg-[#0EA5E9]/10 border border-[#0EA5E9]/30 flex items-center justify-center text-[#0EA5E9] shadow-3xl">
                            <Sparkles size={32} />
                         </div>
                         <h3 className="text-4xl md:text-7xl font-heritage font-bold text-white uppercase tracking-tighter">Your <span className="italic insta-text-gradient">Trajectory.</span></h3>
                         <div className="w-32 h-1.5 insta-gradient rounded-full" />
                      </div>

                      <div className="prose prose-invert prose-lg max-w-none prose-headings:font-heritage prose-headings:uppercase prose-headings:tracking-widest prose-headings:text-[#0EA5E9] prose-p:text-gray-300 prose-p:leading-relaxed prose-strong:text-white prose-li:text-gray-300">
                         {itinerary ? (
                           <div className="whitespace-pre-line font-medium text-lg leading-relaxed italic">
                             {itinerary}
                           </div>
                         ) : (
                           <div className="flex flex-col items-center py-20 gap-8">
                              <Loader2 size={48} className="animate-spin text-[#0EA5E9]" />
                              <p className="text-[10px] font-black uppercase tracking-[0.8em] text-white/30 animate-pulse">Neural_Sync_Interrupt_Check...</p>
                           </div>
                         )}
                      </div>

                      <div className="pt-12 border-t border-white/5 flex flex-wrap justify-center gap-12 opacity-30">
                         <div className="flex items-center gap-3">
                            <Navigation size={18} />
                            <span className="text-[9px] font-black uppercase tracking-widest">Route_Optimized</span>
                         </div>
                         <div className="flex items-center gap-3">
                            <History size={18} />
                            <span className="text-[9px] font-black uppercase tracking-widest">Cultural_Deep_Sync</span>
                         </div>
                         <div className="flex items-center gap-3">
                            <ShieldCheck size={18} />
                            <span className="text-[9px] font-black uppercase tracking-widest">Registry_Locked</span>
                         </div>
                      </div>
                   </div>
                </div>
             </div>

             <div className="flex justify-center">
                <button 
                  onClick={() => window.print()}
                  className="px-16 py-8 bg-white text-black rounded-[2.5rem] font-black text-xs uppercase tracking-[0.5em] hover:scale-110 active:scale-95 transition-all shadow-3xl flex items-center gap-6"
                >
                   <ArrowDown size={18} />
                   Archive to Offline Storage
                </button>
             </div>
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .shadow-3xl {
          box-shadow: 0 0 60px rgba(14,165,233,0.15);
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        @keyframes loading-bar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(250%); }
        }
        .animate-loading-bar {
          animation: loading-bar 3s ease-in-out infinite;
        }
      `}} />
    </div>
  );
};

const ArrowDown = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
);

export default TripPlanner;