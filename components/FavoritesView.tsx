
import React, { useMemo, useState } from 'react';
import { Language, Destination } from '../types.ts';
import { DESTINATIONS, FOODS_DATA, HERITAGE_MUSIC_DATA, MEDICINE_DATA, FESTIVALS_DATA } from '../constants.tsx';
// Fix: Added missing Lock import to resolve name collision with browser's global Lock interface
import { Heart, ArrowLeft, ArrowRight, Trash2, Box, Database, Sparkles, MapPin, ExternalLink, Compass, Globe, Zap, Navigation, Loader2, Lock } from 'lucide-react';

interface FavoritesViewProps {
  language: Language;
  savedIds: Record<string, string[]>;
  toggleSave: (category: string, id: string) => void;
  setView: (view: any) => void;
  onSelectDestination: (dest: Destination) => void;
}

const FavoritesView: React.FC<FavoritesViewProps> = ({ language, savedIds, toggleSave, setView, onSelectDestination }) => {
  const [isRoving, setIsRoving] = useState(false);
  const [rovedDestination, setRovedDestination] = useState<Destination | null>(null);

  const allSaved = useMemo(() => {
    const list: { id: string; category: string; data: any; typeLabel: string }[] = [];
    
    // Destinations
    savedIds.destinations.forEach(id => {
      const item = DESTINATIONS.find(d => d.id === id);
      if (item) list.push({ id, category: 'destinations', data: item, typeLabel: 'Place' });
    });
    
    // Foods
    savedIds.foods.forEach(id => {
      const item = FOODS_DATA.find(f => f.id === id);
      if (item) list.push({ id, category: 'foods', data: item, typeLabel: 'Food' });
    });

    // Music
    savedIds.music.forEach(id => {
      const item = HERITAGE_MUSIC_DATA.find(m => m.id === id);
      if (item) list.push({ id, category: 'music', data: item, typeLabel: 'Music' });
    });

    // Medicine
    savedIds.medicine.forEach(id => {
      const item = MEDICINE_DATA.find(m => m.id === id);
      if (item) list.push({ id, category: 'medicine', data: item, typeLabel: 'Wellness' });
    });

    // Festivals
    savedIds.festivals.forEach(id => {
      const item = FESTIVALS_DATA.find(f => f.id === id);
      if (item) list.push({ id, category: 'festivals', data: item, typeLabel: 'Event' });
    });

    return list;
  }, [savedIds]);

  const initiateRove = () => {
    setIsRoving(true);
    setRovedDestination(null);
    
    setTimeout(() => {
      const unsaved = DESTINATIONS.filter(d => !savedIds.destinations.includes(d.id));
      if (unsaved.length > 0) {
        const random = unsaved[Math.floor(Math.random() * unsaved.length)];
        setRovedDestination(random);
      }
      setIsRoving(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white pb-40 animate-in fade-in duration-700">
      {/* Header */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
         <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: `linear-gradient(#E1306C 1px, transparent 1px), linear-gradient(90deg, #E1306C 1px, transparent 1px)`, backgroundSize: '120px 120px' }} />
         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/40 to-white" />
         
         <div className="relative text-center space-y-8 px-6 max-w-4xl">
            <div className="flex flex-col items-center gap-6">
               <div className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-3xl text-white text-[10px] font-black uppercase tracking-[0.6em] shadow-2xl">
                  <Database size={16} className="text-[#E1306C] animate-pulse" />
                  PERSONAL_HERITAGE_VAULT
               </div>
               <div className="h-12 w-[1px] bg-gradient-to-b from-[#E1306C] to-transparent"></div>
            </div>
            
            <h2 className="text-5xl md:text-[8rem] font-heritage font-bold text-white tracking-tighter uppercase leading-[0.8] drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              MY <span className="italic insta-text-gradient">COLLECTION.</span>
            </h2>
            
            <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-2xl font-light italic leading-relaxed">
              {language === 'EN' 
                ? "Your curated fragments of Sri Lankan majesty, synchronized and archived for eternity." 
                : "ඔබේ සංචාරක මතකයන් සහ උරුමයන් මෙහි සුරක්ෂිතව තැන්පත් කර ඇත."}
            </p>

            <div className="pt-10 flex justify-center">
               <button 
                onClick={initiateRove}
                className="group relative px-10 py-5 bg-[#E1306C] text-white rounded-full font-black text-[10px] uppercase tracking-[0.4em] flex items-center gap-4 shadow-[0_20px_60px_rgba(225,48,108,0.4)] hover:scale-110 active:scale-95 transition-all overflow-hidden"
               >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  {isRoving ? <Loader2 size={16} className="animate-spin" /> : <Navigation size={16} className="group-hover:rotate-12 transition-transform" />}
                  Rove_Registry
               </button>
            </div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-10 space-y-16">
        
        {/* Roved Discovery Result */}
        {rovedDestination && (
          <div className="bg-[#0a0a0a] rounded-[4rem] p-[2px] shadow-3xl animate-in slide-in-from-top-12 duration-1000 group">
             <div className="bg-white rounded-[3.9rem] p-10 md:p-14 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
                <div className="absolute top-0 right-0 p-12 opacity-[0.03] text-black group-hover:rotate-12 transition-transform duration-1000"><Globe size={180} /></div>
                <div className="w-full md:w-1/3 aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative">
                   <img src={rovedDestination.image} className="w-full h-full object-cover transition-transform duration-[6000ms] group-hover:scale-110" alt="" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                   <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-2 text-[#E1306C] font-black text-[8px] uppercase tracking-widest bg-white/95 px-3 py-1 rounded-full w-fit mb-2">
                        <MapPin size={10} />
                        {rovedDestination.location}
                      </div>
                      <p className="text-white font-heritage font-bold text-2xl uppercase tracking-tight">{rovedDestination.name[language]}</p>
                   </div>
                </div>
                <div className="w-full md:w-2/3 space-y-8 relative z-10 text-center md:text-left">
                   <div className="space-y-4">
                      <div className="inline-flex items-center gap-3 text-[#E1306C]">
                         <Sparkles size={18} className="animate-pulse" />
                         <span className="text-[10px] font-black uppercase tracking-[0.5em]">Rove_Recommendation</span>
                      </div>
                      <h3 className="text-4xl md:text-6xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tighter leading-none">The Next <br/><span className="italic insta-text-gradient">Archival Goal.</span></h3>
                   </div>
                   <p className="text-xl text-gray-500 font-light italic leading-relaxed border-l-4 border-gray-100 pl-8">
                     "{rovedDestination.shortStory[language]}"
                   </p>
                   <div className="pt-4 flex flex-wrap justify-center md:justify-start gap-4">
                      <button 
                        onClick={() => onSelectDestination(rovedDestination)}
                        className="px-10 py-5 bg-[#0a0a0a] text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.4em] flex items-center gap-4 hover:bg-[#E1306C] transition-all shadow-xl"
                      >
                         Access Node <ArrowRight size={16} />
                      </button>
                      <button 
                        onClick={() => setRovedDestination(null)}
                        className="px-8 py-5 text-gray-400 hover:text-black font-black text-[10px] uppercase tracking-[0.4em] border border-gray-100 rounded-2xl hover:bg-gray-50 transition-all"
                      >
                         Dismiss
                      </button>
                   </div>
                </div>
             </div>
          </div>
        )}

        <div className="flex justify-between items-center bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100">
           <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-[#E1306C] shadow-inner">
                 <Heart size={28} fill="currentColor" />
              </div>
              <div className="text-left space-y-1">
                 <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Active Archives</p>
                 <p className="text-2xl font-heritage font-black text-[#0a0a0a] uppercase">{allSaved.length} UNITS SYNCED</p>
              </div>
           </div>
           <button 
             onClick={() => setView('destinations')}
             className="hidden sm:flex items-center gap-4 px-10 py-5 bg-[#0a0a0a] text-white rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:scale-105 transition-all shadow-xl"
           >
             Discover More <ArrowLeft size={18} className="rotate-180" />
           </button>
        </div>

        {allSaved.length === 0 ? (
          <div className="py-40 text-center space-y-12 bg-gray-50/50 rounded-[5rem] border border-dashed border-gray-200 animate-in fade-in duration-1000">
             <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto shadow-inner text-gray-200">
                <Box size={48} className="animate-pulse" />
             </div>
             <div className="space-y-4">
                <h3 className="text-4xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tighter">Vault Empty</h3>
                <p className="text-gray-400 font-medium italic max-w-md mx-auto leading-relaxed">
                  Start synchronizing heritage nodes across the registry to populate your personal collection.
                </p>
             </div>
             <button 
               onClick={() => setView('destinations')}
               className="px-16 py-6 bg-[#0a0a0a] text-white rounded-full font-black text-xs uppercase tracking-[0.5em] shadow-2xl hover:bg-[#E1306C] transition-all"
             >
               Initialize Discovery
             </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {allSaved.map((item, idx) => (
              <div 
                key={`${item.category}-${item.id}`}
                className="bg-white rounded-[4rem] overflow-hidden shadow-2xl border border-gray-100 flex flex-col group hover:-translate-y-4 transition-all duration-700 animate-in slide-in-from-bottom-8"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <div className="relative h-80 overflow-hidden">
                  <img src={item.data.image} alt={item.data.name[language]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[6000ms]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                  
                  <div className="absolute top-4 left-4">
                     <div className="bg-white/95 backdrop-blur-md px-3 py-1 rounded-full shadow-2xl flex items-center gap-2 border border-white/20">
                        <Sparkles size={12} className="text-[#E1306C]" />
                        <span className="text-[8px] font-black text-[#0a0a0a] uppercase tracking-widest">{item.typeLabel}</span>
                     </div>
                  </div>

                  <button 
                    onClick={() => toggleSave(item.category, item.id)}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-red-500 shadow-xl hover:bg-red-500 hover:text-white transition-all active:scale-90"
                  >
                    <Trash2 size={18} />
                  </button>
                  
                  <div className="absolute bottom-6 left-8">
                     <span className="text-[10px] font-black text-white/80 uppercase tracking-[0.4em] drop-shadow-md">Node_Ref #S0{idx+1}</span>
                  </div>
                </div>

                <div className="p-12 space-y-8 flex flex-col flex-grow">
                  <div className="space-y-3">
                    <h3 className="text-3xl font-heritage font-bold text-[#0a0a0a] group-hover:insta-text-gradient transition-all leading-tight uppercase tracking-tight">
                      {item.data.name[language]}
                    </h3>
                    <div className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                       <MapPin size={12} className="text-[#E1306C]" />
                       {item.data.location || 'Heritage Hub'}
                    </div>
                  </div>

                  <p className="text-lg text-gray-500 leading-relaxed font-light italic border-l-4 border-gray-50 pl-6 flex-grow line-clamp-3">
                    "{item.data.description?.[language] || item.data.shortStory?.[language] || 'Archived Fragment'}"
                  </p>

                  <div className="pt-8 border-t border-gray-50 mt-auto flex justify-between items-center">
                    <button 
                      onClick={() => {
                        if (item.category === 'destinations') onSelectDestination(item.data);
                        else setView(item.category as any);
                      }}
                      className="flex items-center gap-3 text-[11px] font-black text-[#0a0a0a] uppercase tracking-[0.3em] hover:text-[#E1306C] transition-colors"
                    >
                      Access Node <ArrowRight size={14} className="animate-pulse" />
                    </button>
                    <div className="flex gap-2">
                       <div className="w-1 h-1 rounded-full bg-green-500" />
                       <div className="w-1 h-1 rounded-full bg-green-500" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Northern Future Teaser Section */}
        <div className="pt-24 space-y-12">
           <div className="flex items-center gap-6">
              <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-gray-100" />
              <div className="flex items-center gap-4 text-gray-300">
                 <Globe size={20} />
                 <h4 className="text-[11px] font-black uppercase tracking-[0.5em]">Upcoming_Manifolds</h4>
              </div>
              <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-gray-100" />
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative h-[400px] rounded-[4rem] overflow-hidden bg-[#0a0a0a] border border-white/5 group">
                 <img src="https://images.unsplash.com/photo-1578503117502-3162799f9392?auto=format&fit=crop&w=800&q=80" className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-1000" alt="" />
                 <div className="absolute inset-0 p-12 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                       <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest text-white/40">North_Sector</div>
                       <Lock size={24} className="text-white/20 animate-pulse" />
                    </div>
                    <div className="space-y-6">
                       <div className="space-y-2">
                          <p className="text-[10px] font-black uppercase tracking-[0.6em] text-blue-400">Archival_Future_Option</p>
                          <h4 className="text-4xl font-heritage font-bold text-white uppercase tracking-tighter">Northern <br/><span className="italic">Frontier.</span></h4>
                       </div>
                       <p className="text-sm text-gray-500 font-medium italic leading-relaxed">
                         "Full volumetric reconstruction of the Jaffna Kingdom and the sacred Delft Island nodes. Synchronization pending Q4 2026 cycle."
                       </p>
                    </div>
                 </div>
                 <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </div>

              <div className="relative h-[400px] rounded-[4rem] overflow-hidden bg-[#0a0a0a] border border-white/5 group">
                 <img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80" className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-1000" alt="" />
                 <div className="absolute inset-0 p-12 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                       <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest text-white/40">Abyssal_Sector</div>
                       <Lock size={24} className="text-white/20 animate-pulse" />
                    </div>
                    <div className="space-y-6">
                       <div className="space-y-2">
                          <p className="text-[10px] font-black uppercase tracking-[0.6em] text-blue-400">Deep_Sea_Archeology</p>
                          <h4 className="text-4xl font-heritage font-bold text-white uppercase tracking-tighter">Sunken <br/><span className="italic">Empires.</span></h4>
                       </div>
                       <p className="text-sm text-gray-500 font-medium italic leading-relaxed">
                         "Underwater photogrammetry of the ancient trading vessels in the Gulf of Mannar. Visual lock initializing."
                       </p>
                    </div>
                 </div>
                 <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </div>
           </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin 40s linear infinite; }
        .shadow-3xl { box-shadow: 0 40px 120px rgba(225,48,108,0.15); }
      `}} />
    </div>
  );
};

export default FavoritesView;
