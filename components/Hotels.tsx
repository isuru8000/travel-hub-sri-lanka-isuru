
import React, { useState, useMemo } from 'react';
import { Language } from '../types.ts';
import { 
  Gem, 
  MapPin, 
  Star, 
  Waves, 
  Wind, 
  Zap, 
  Target, 
  ArrowRight,
  ShieldCheck,
  Radio,
  Building2,
  Calendar,
  Users,
  ChevronDown,
  Activity,
  Database,
  Sparkles,
  Compass,
  Globe,
  Layers,
  Heart
} from 'lucide-react';
import HotelModal from './HotelModal.tsx';

const LUXURY_HOTELS = [
  {
    id: 'h1',
    name: { EN: 'Cinnamon Grand Colombo', SI: 'සිනමන් ග්‍රෑන්ඩ් කොළඹ' },
    location: 'Colombo',
    price: 180,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80'
    ],
    tag: 'ULTRA-PREMIUM',
    rating: 5,
    description: {
      EN: "The benchmark of luxury in the capital. Cinnamon Grand offers an unparalleled urban sanctuary with world-class dining, elite wellness facilities, and high-fidelity comfort in the heart of Colombo.",
      SI: "අගනුවර සුඛෝපභෝගීත්වයේ සලකුණ. සිනමන් ග්‍රෑන්ඩ් ලෝක මට්ටමේ ආහාර සමඟ අසමසම නාගරික අත්දැකීමක් ලබා දෙයි."
    },
    amenities: [
      { icon: <Building2 size={18} />, label: { EN: "Grand Lobby", SI: "විශාල ශාලාව" } },
      { icon: <Waves size={18} />, label: { EN: "Infinity Pool", SI: "පිහිනුම් තටාකය" } },
      { icon: <Activity size={18} />, label: { EN: "Gym Node", SI: "ව්‍යායාම මධ්‍යස්ථානය" } },
      { icon: <Wind size={18} />, label: { EN: "Spa Archive", SI: "සම සුවතා" } }
    ],
    reviews: [
      { user: 'Alexander P.', rating: 5, date: '2026.03.12', comment: { EN: 'Unmatched fidelity in service and atmosphere.', SI: 'විශිෂ්ට සේවාවක් සහ අපූර්ව පරිසරයක්.' } }
    ]
  },
  {
    id: 'h2',
    name: { EN: 'Galadari Hotel Colombo', SI: 'ගලදාරී හෝටලය කොළඹ' },
    location: 'Colombo Fort',
    price: 120,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
    ],
    tag: 'HERITAGE VIEW',
    rating: 4,
    description: {
      EN: "Strategically located overlooking the Indian Ocean and the Presidential Precinct. Galadari offers classic comfort with the best views of the capital's historic and modern skyline.",
      SI: "ඉන්දියන් සාගරයට මුහුණලා පිහිටි ගලදාරී හෝටලය, කොළඹ නගරයේ අලංකාර දර්ශන සමඟ සාම්ප්‍රදායික සුවපහසුව ලබා දෙයි."
    },
    amenities: [
      { icon: <Waves size={18} />, label: { EN: "Ocean Pool", SI: "මුහුදු තටාකය" } },
      { icon: <Wind size={18} />, label: { EN: "Spa", SI: "ස්පා" } },
      { icon: <Users size={18} />, label: { EN: "Executive Hub", SI: "ප්‍රභූ මධ්‍යස්ථානය" } }
    ],
    reviews: []
  }
];

const Hotels: React.FC<{ language: Language }> = ({ language }) => {
  const [selectedHotel, setSelectedHotel] = useState<any | null>(null);
  const [bookingState, setBookingState] = useState({
    destination: '',
    checkIn: '',
    checkOut: '',
    guests: 2,
    isProcessingPayment: false,
    isSuccess: false,
    error: null as string | null
  });

  const onBook = (hotelName: string) => {
    setBookingState(prev => ({ ...prev, destination: hotelName }));
    const hotel = LUXURY_HOTELS.find(h => h.name.EN === hotelName);
    if (hotel) setSelectedHotel(hotel);
  };

  return (
    <div className="min-h-screen bg-[#fafafa] pb-32 font-sans">
      {/* LUXURY HERO SECTION */}
      <div className="relative h-[80vh] md:h-[90vh] flex items-center justify-center overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 bg-cover bg-center opacity-30 transition-transform duration-[30000ms] animate-slow-zoom" 
             style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80')` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-[#fafafa]" />
        
        <div className="relative text-center space-y-8 md:space-y-16 px-4 md:px-6 max-w-6xl animate-in fade-in zoom-in duration-1000 mt-16 md:mt-0">
          <div className="flex flex-col items-center gap-4 md:gap-8">
             <div className="inline-flex items-center gap-3 md:gap-5 px-6 py-2.5 md:px-10 md:py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-3xl text-white text-[8px] md:text-[11px] font-black uppercase tracking-[0.4em] md:tracking-[0.8em] shadow-2xl">
                <Gem size={14} className="md:w-5 md:h-5 text-yellow-500 animate-pulse" />
                The_Heritage_Collection
             </div>
             <div className="h-12 md:h-24 w-px bg-gradient-to-b from-yellow-500 to-transparent" />
          </div>
          
          <h2 className="text-5xl sm:text-7xl md:text-[13rem] font-heritage font-bold text-white tracking-tighter uppercase leading-[0.85] md:leading-[0.75] drop-shadow-[0_40px_100px_rgba(0,0,0,1)]">
            THE ART OF <br/><span className="italic insta-text-gradient">LIVING.</span>
          </h2>
          
          <p className="text-white/60 text-base md:text-3xl font-light italic leading-relaxed tracking-wide max-w-4xl mx-auto border-y border-white/10 py-6 md:py-12 px-4">
            "A curated selection of the island's most prestigious sanctuaries, where history meets high-fidelity comfort."
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 -mt-16 md:-mt-32 relative z-10 space-y-16 md:space-y-32">
        {/* NARRATIVE INTRO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center bg-white rounded-[2.5rem] md:rounded-[5rem] p-8 md:p-24 shadow-[0_60px_150px_rgba(0,0,0,0.05)] border border-gray-50">
           <div className="space-y-6 md:space-y-10">
              <div className="space-y-3 md:space-y-4">
                 <p className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] text-yellow-600">01_The_Sanctuary</p>
                 <h3 className="text-3xl md:text-6xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tighter">A Legacy of <span className="italic">Hospitality.</span></h3>
              </div>
              <p className="text-base md:text-xl text-gray-500 font-light leading-relaxed italic">
                 "In Sri Lanka, a hotel is not merely a place to sleep; it is a portal to the island's soul. From colonial-era mansions that whisper stories of the past to modern architectural marvels that embrace the future, our collection represents the pinnacle of island living."
              </p>
              <div className="flex items-center gap-6 md:gap-8 pt-4 md:pt-6">
                 <div className="flex flex-col">
                    <span className="text-2xl md:text-3xl font-heritage font-bold text-[#0a0a0a]">100%</span>
                    <span className="text-[7px] md:text-[9px] font-black uppercase tracking-widest text-gray-400">Verified_Nodes</span>
                 </div>
                 <div className="w-px h-8 md:h-12 bg-gray-100" />
                 <div className="flex flex-col">
                    <span className="text-2xl md:text-3xl font-heritage font-bold text-yellow-600">ELITE</span>
                    <span className="text-[7px] md:text-[9px] font-black uppercase tracking-widest text-gray-400">Service_Tier</span>
                 </div>
              </div>
           </div>
           <div className="relative aspect-square rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-2xl group">
              <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[5000ms]" alt="Luxury Interior" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 p-3 md:p-4 bg-white/10 backdrop-blur-3xl rounded-2xl md:rounded-3xl border border-white/20">
                 <Sparkles size={20} className="md:w-6 md:h-6 text-yellow-500 animate-pulse" />
              </div>
           </div>
        </div>

        {/* HOTEL GRID */}
        <div className="space-y-12 md:space-y-20">
           <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8 border-b border-gray-100 pb-8 md:pb-12">
              <div className="space-y-3 md:space-y-4">
                 <p className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] text-gray-400">02_The_Registry</p>
                 <h3 className="text-3xl md:text-7xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tighter">Selected <span className="insta-text-gradient italic">Sanctuaries.</span></h3>
              </div>
              <div className="flex items-center gap-4 md:gap-6">
                 <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-[#0a0a0a] hover:text-white transition-all cursor-pointer">
                    <ChevronDown size={16} className="md:w-5 md:h-5" />
                 </div>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
             {LUXURY_HOTELS.map((hotel, idx) => (
               <div 
                 key={hotel.id} 
                 className="group relative flex flex-col bg-white rounded-[2.5rem] md:rounded-[5rem] overflow-hidden border border-gray-100 shadow-xl transition-all duration-1000 hover:shadow-[0_80px_150px_rgba(0,0,0,0.1)] hover:-translate-y-2 md:hover:-translate-y-4"
               >
                 <div className="relative h-[300px] md:h-[500px] overflow-hidden">
                   <img src={hotel.image} className="w-full h-full object-cover transition-transform duration-[10000ms] group-hover:scale-110" alt={hotel.name[language]} />
                   
                   <div className="absolute top-6 left-6 md:top-10 md:left-10 flex items-center gap-4">
                     <div className="px-5 py-2.5 md:px-8 md:py-4 bg-white/90 backdrop-blur-3xl rounded-full text-[#0a0a0a] text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] flex items-center gap-3 md:gap-4 shadow-2xl">
                        <Radio size={12} className="md:w-4 md:h-4 text-[#E1306C] animate-pulse" />
                        Live_Sync_Ready
                     </div>
                   </div>

                   <div className="absolute bottom-0 right-0 bg-[#0a0a0a] text-white px-8 py-6 md:px-16 md:py-10 rounded-tl-[2.5rem] md:rounded-tl-[5rem] shadow-2xl transition-all duration-700 group-hover:px-10 md:group-hover:px-20">
                      <p className="text-[8px] md:text-[11px] font-black text-yellow-500 uppercase tracking-[0.4em] md:tracking-[0.6em] mb-1 md:mb-2 opacity-60">Nightly_Manifest</p>
                      <p className="text-3xl md:text-5xl font-heritage font-bold tracking-tighter leading-none">$ {hotel.price}</p>
                   </div>

                   <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                 </div>
                 
                 <div className="p-8 md:p-16 lg:p-20 space-y-8 md:space-y-12 bg-white flex flex-col justify-between flex-grow">
                   <div className="space-y-6 md:space-y-8">
                     <div className="flex items-center gap-3 md:gap-4 text-gray-400">
                        <MapPin size={14} className="md:w-[18px] md:h-[18px] text-yellow-600" />
                        <span className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em]">{hotel.location}</span>
                     </div>
                     <h4 className="text-3xl md:text-4xl lg:text-6xl font-heritage font-bold text-[#0a0a0a] group-hover:insta-text-gradient transition-all duration-700 tracking-tight leading-none uppercase">{hotel.name[language]}</h4>
                     <p className="text-base md:text-xl text-gray-500 font-light italic leading-relaxed border-l-2 border-gray-50 pl-4 md:pl-8">
                        "{hotel.description[language]}"
                     </p>
                   </div>

                   <div className="flex gap-4 md:gap-6 items-center pt-6 md:pt-8 border-t border-gray-50">
                     <button 
                       onClick={() => setSelectedHotel(hotel)}
                       className="flex-grow py-5 md:py-8 bg-gray-50 text-[#0a0a0a] rounded-full font-black text-[9px] md:text-[11px] uppercase tracking-[0.4em] md:tracking-[0.6em] border border-gray-100 hover:bg-[#0a0a0a] hover:text-white transition-all shadow-sm active:scale-95 flex items-center justify-center gap-3 md:gap-4 group/specs"
                     >
                       Archive Specs
                       <Database size={14} className="md:w-4 md:h-4 text-yellow-600 opacity-40 group-hover/specs:opacity-100 transition-opacity" />
                     </button>
                     <button 
                       onClick={() => onBook(hotel.name.EN)}
                       className="w-16 h-16 md:w-24 md:h-24 bg-[#0a0a0a] text-white rounded-[2rem] md:rounded-[3rem] flex items-center justify-center hover:bg-[#E1306C] transition-all shadow-2xl active:scale-90 hover:rotate-12 group/btn shrink-0"
                     >
                       <ArrowRight size={24} className="md:w-8 md:h-8 group-hover/btn:translate-x-1 transition-transform" />
                     </button>
                   </div>
                 </div>

                 <div className="absolute top-6 right-6 md:top-10 md:right-10 text-[7px] md:text-[9px] font-black text-white/20 uppercase tracking-[0.4em] md:tracking-[0.6em] pointer-events-none">
                    Reg_Node_#0{idx + 1}
                 </div>
               </div>
             ))}
           </div>
        </div>

        {/* FOOTER SYNC STATUS */}
        <div className="pt-24 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-12 opacity-30">
           <div className="flex items-center gap-10">
              <div className="flex items-center gap-5">
                 <ShieldCheck size={32} className="text-green-500" />
                 <div className="text-left space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#0a0a0a]">Stays_Secure_Link</p>
                    <p className="text-[11px] font-bold text-gray-500">Verified Heritage Partner v4.2</p>
                 </div>
              </div>
              <div className="w-px h-16 bg-gray-100" />
              <div className="flex items-center gap-5">
                 <Compass size={32} className="text-[#0EA5E9]" />
                 <div className="text-left space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#0a0a0a]">Traversal_Ready</p>
                    <p className="text-[11px] font-bold text-gray-500">Regional Sync Active</p>
                 </div>
              </div>
           </div>

           <div className="text-center md:text-right space-y-3">
              <p className="text-[11px] font-black uppercase tracking-[1em] text-[#0a0a0a] ml-[1em]">End_Of_Stay_Registry</p>
              <div className="flex justify-center md:justify-end gap-3">
                 {[1,2,3,4,5].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-200" />)}
              </div>
           </div>
        </div>
      </div>

      <HotelModal 
        hotel={selectedHotel} 
        onClose={() => setSelectedHotel(null)} 
        onBook={onBook} 
        bookingState={bookingState}
        setBookingState={setBookingState}
        language={language} 
      />

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

export default Hotels;
