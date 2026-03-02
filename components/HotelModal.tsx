import React, { useEffect, useRef } from 'react';
import { Language } from '../types.ts';
import { 
  X, 
  Star, 
  MapPin, 
  Wifi, 
  Coffee, 
  Waves, 
  Utensils, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  User,
  Quote,
  Zap,
  Car,
  Wind,
  Calendar,
  UserPlus,
  Minus,
  Plus,
  AlertCircle,
  Radio,
  ChevronDown,
  Target,
  MessageSquare,
  CheckCircle2,
  Trophy
} from 'lucide-react';

interface Review {
  user: string;
  rating: number;
  comment: { EN: string; SI: string };
  date: string;
}

interface Amenity {
  icon: React.ReactNode;
  label: { EN: string; SI: string };
}

interface Hotel {
  id: string;
  name: { EN: string; SI: string };
  location: string;
  price: number;
  image: string;
  gallery: string[];
  tag: string;
  rating: number;
  description: { EN: string; SI: string };
  amenities: Amenity[];
  reviews: Review[];
}

interface BookingState {
  destination: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  isProcessingPayment: boolean;
  isSuccess: boolean;
  error: string | null;
}

interface HotelModalProps {
  hotel: Hotel | null;
  onClose: () => void;
  onBook: (hotelName: string) => void;
  bookingState: BookingState;
  setBookingState: React.Dispatch<React.SetStateAction<BookingState>>;
  language: Language;
}

const HotelModal: React.FC<HotelModalProps> = ({ hotel, onClose, onBook, bookingState, setBookingState, language }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const todayDateStr = new Date().toISOString().split('T')[0];

  useEffect(() => {
    if (hotel && scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hotel]);

  if (!hotel) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
      <div className="absolute inset-0 bg-[#0a0a0a]/90 backdrop-blur-xl" onClick={onClose} />
      
      <div 
        ref={scrollRef}
        data-lenis-prevent
        className="relative bg-white w-full max-w-6xl max-h-[92vh] overflow-y-auto rounded-[2.5rem] md:rounded-[3.5rem] shadow-[0_60px_150px_rgba(0,0,0,0.5)] no-scrollbar animate-in zoom-in-95 duration-500 border border-white/10"
      >
        {/* Floating Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 md:top-8 md:right-8 z-50 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center bg-white/10 hover:bg-white/30 backdrop-blur-md border border-white/20 rounded-full text-white transition-all hover:rotate-90 shadow-2xl"
        >
          <X size={20} className="md:w-7 md:h-7" />
        </button>

        {/* Hero Banner Area */}
        <div className="relative h-[35vh] md:h-[65vh] shrink-0 overflow-hidden">
          <img src={hotel.image} className="w-full h-full object-cover transition-transform duration-[10000ms] hover:scale-110" alt={hotel.name[language]} />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-black/30 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12 md:right-12 space-y-4 md:space-y-6">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="px-4 py-1.5 md:px-6 md:py-2 bg-black/80 backdrop-blur-md rounded-full text-white text-[8px] md:text-[10px] font-black tracking-[0.2em] md:tracking-[0.3em] uppercase border border-white/10">
                {hotel.tag}
              </div>
              <div className="flex gap-1 text-yellow-400">
                {Array.from({ length: hotel.rating }).map((_, i) => <Star key={i} size={12} className="md:w-4 md:h-4 drop-shadow-lg" fill="currentColor" />)}
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-8xl font-heritage font-bold text-white tracking-tighter uppercase drop-shadow-[0_10px_40px_rgba(0,0,0,0.5)] leading-[0.9]">
              {hotel.name[language]}
            </h2>
            <div className="flex items-center gap-2 md:gap-3 text-white/90 font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-[8px] md:text-sm bg-white/5 backdrop-blur-xl w-fit px-4 py-1.5 md:px-6 md:py-2 rounded-full border border-white/20">
              <MapPin size={14} className="md:w-5 md:h-5 text-[#E1306C]" />
              {hotel.location}, Sri Lanka
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 p-6 md:p-20 bg-white">
          <div className="lg:col-span-7 space-y-16 md:space-y-24">
            
            {/* Description Archive */}
            <div className="space-y-6 md:space-y-10">
              <div className="flex items-center gap-3 md:gap-4 text-[#E1306C]">
                <Sparkles size={18} className="md:w-6 md:h-6 animate-pulse" />
                <span className="text-[9px] md:text-[12px] font-black uppercase tracking-[0.4em] md:tracking-[0.6em]">Registry_Deep_Profile</span>
              </div>
              <p className="text-lg md:text-4xl text-gray-500 font-light leading-[1.4] md:leading-[1.3] italic border-l-4 md:border-l-8 border-[#E1306C]/10 pl-6 md:pl-12">
                "{hotel.description[language]}"
              </p>
            </div>

            {/* Spatial Archive (Gallery) */}
            <div className="space-y-8 md:space-y-12">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-2 border-b border-gray-50 pb-4 md:pb-8">
                <h3 className="text-2xl md:text-3xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tighter">Spatial Archive</h3>
                <span className="text-[9px] md:text-[11px] font-black text-gray-300 uppercase tracking-widest">{hotel.gallery.length} Verified Nodes</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
                {hotel.gallery.map((img, i) => (
                  <div key={i} className="group relative aspect-[4/3] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl md:shadow-2xl border border-gray-100 transition-transform duration-700 hover:-translate-y-2">
                    <img src={img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#E1306C]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities Section */}
            <div className="space-y-8 md:space-y-12">
               <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-2 border-b border-gray-50 pb-4 md:pb-8">
                  <h3 className="text-2xl md:text-3xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tighter">Verified Amenities</h3>
                  <span className="text-[9px] md:text-[11px] font-black text-[#E1306C] uppercase tracking-widest">Protocol_Standard_Elite</span>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  {hotel.amenities.map((amenity, i) => (
                    <div key={i} className="flex items-center gap-4 md:gap-6 p-4 md:p-6 bg-gray-50 rounded-[2rem] md:rounded-[2.5rem] border border-gray-100 group hover:bg-white hover:shadow-xl transition-all duration-500">
                       <div className="w-10 h-10 md:w-14 md:h-14 bg-white rounded-xl md:rounded-2xl flex items-center justify-center text-[#E1306C] shadow-sm group-hover:rotate-6 transition-transform">
                          {React.cloneElement(amenity.icon as React.ReactElement<any>, { size: 18, className: "md:w-6 md:h-6" })}
                       </div>
                       <span className="text-xs md:text-sm font-bold text-gray-600 uppercase tracking-widest">{amenity.label[language]}</span>
                    </div>
                  ))}
               </div>
            </div>

            {/* User Testimonials Section */}
            <div className="space-y-8 md:space-y-12 pb-8 md:pb-12">
               <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-2 border-b border-gray-50 pb-4 md:pb-8">
                  <h3 className="text-2xl md:text-3xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tighter">Neural Testimonials</h3>
                  <div className="flex items-center gap-2">
                     <Trophy size={12} className="md:w-3.5 md:h-3.5 text-yellow-500" />
                     <span className="text-[9px] md:text-[11px] font-black text-gray-300 uppercase tracking-widest">Global Feedback Loop</span>
                  </div>
               </div>
               <div className="space-y-6 md:space-y-8">
                  {hotel.reviews.map((review, i) => (
                    <div key={i} className="bg-[#fafafa] p-6 md:p-10 rounded-[2.5rem] md:rounded-[3.5rem] border border-gray-100 space-y-4 md:space-y-6 relative group overflow-hidden transition-all hover:bg-white hover:shadow-2xl">
                       <div className="absolute top-0 right-0 p-4 md:p-8 opacity-[0.03] text-[#0a0a0a] group-hover:opacity-10 transition-opacity">
                          <MessageSquare size={60} className="md:w-[100px] md:h-[100px]" />
                       </div>
                       <div className="flex justify-between items-start relative z-10">
                          <div className="flex items-center gap-3 md:gap-4">
                             <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center text-[#E1306C] shadow-sm">
                                <User size={18} className="md:w-6 md:h-6" />
                             </div>
                             <div>
                                <p className="text-xs md:text-sm font-black text-[#0a0a0a] uppercase tracking-widest">{review.user}</p>
                                <p className="text-[7px] md:text-[9px] font-bold text-gray-400 uppercase tracking-widest">{review.date}</p>
                             </div>
                          </div>
                          <div className="flex gap-1 text-yellow-400">
                             {Array.from({ length: review.rating }).map((_, rIdx) => <Star key={rIdx} size={10} className="md:w-3.5 md:h-3.5" fill="currentColor" />)}
                          </div>
                       </div>
                       <div className="relative z-10">
                          <Quote size={16} className="md:w-6 md:h-6 text-[#E1306C]/10 absolute -top-1 -left-1 md:-top-2 md:-left-2" />
                          <p className="text-base md:text-lg text-gray-500 font-light italic leading-relaxed pl-4 md:pl-6">
                             {review.comment[language]}
                          </p>
                       </div>
                       <div className="flex items-center gap-2 md:gap-3 pt-2 md:pt-4 opacity-30">
                          <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-green-500" />
                          <span className="text-[7px] md:text-[8px] font-black uppercase tracking-widest">Identity_Verified_Node</span>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          {/* Sticky Booking Sidebar */}
          <div className="lg:col-span-5">
            <div className="sticky top-6 md:top-12 space-y-6 md:space-y-10">
              <div className="bg-gray-50 p-6 md:p-14 rounded-[2.5rem] md:rounded-[4rem] border border-gray-100 space-y-8 md:space-y-12 shadow-inner group/form relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 md:p-16 opacity-[0.02] text-gray-400 rotate-45 pointer-events-none"><Target size={100} className="md:w-[200px] md:h-[200px]" /></div>
                
                <div className="space-y-3 md:space-y-4 relative z-10">
                  <div className="flex items-center gap-2 md:gap-3 text-gray-400">
                     <Radio size={12} className="md:w-4 md:h-4 text-[#E1306C] animate-pulse" />
                     <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em]">Sync_Protocol_V6</span>
                  </div>
                  <h4 className="text-2xl md:text-3xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tighter">Stay Configuration</h4>
                  <div className="w-12 md:w-16 h-1 md:h-1.5 insta-gradient rounded-full shadow-lg" />
                </div>

                <div className="space-y-6 md:space-y-10 relative z-10">
                   <div className="grid grid-cols-1 gap-4 md:gap-8">
                      <div className="space-y-2 md:space-y-4 group/field">
                        <label className="flex items-center gap-2 md:gap-3 text-[9px] md:text-[11px] font-black text-gray-400 uppercase tracking-[0.3em] md:tracking-[0.4em] ml-2 md:ml-4 transition-colors group-focus-within/field:text-[#E1306C]">
                           <Calendar size={14} className="md:w-4 md:h-4" /> Arrival Node
                        </label>
                        <div className="relative">
                          <input 
                            type="date"
                            min={todayDateStr}
                            value={bookingState.checkIn}
                            onChange={(e) => setBookingState(prev => ({...prev, checkIn: e.target.value, error: null}))}
                            className="w-full px-6 py-4 md:px-8 md:py-6 bg-white border-2 border-transparent rounded-[2rem] md:rounded-[2.5rem] focus:outline-none focus:border-[#E1306C]/20 transition-all font-bold text-sm md:text-base shadow-sm"
                          />
                          <ChevronDown size={14} className="md:w-[18px] md:h-[18px] absolute right-6 md:right-8 top-1/2 -translate-y-1/2 text-gray-200 pointer-events-none" />
                        </div>
                      </div>
                      <div className="space-y-2 md:space-y-4 group/field">
                        <label className="flex items-center gap-2 md:gap-3 text-[9px] md:text-[11px] font-black text-gray-400 uppercase tracking-[0.3em] md:tracking-[0.4em] ml-2 md:ml-4 transition-colors group-focus-within/field:text-[#E1306C]">
                           <Calendar size={14} className="md:w-4 md:h-4" /> Departure Node
                        </label>
                        <div className="relative">
                          <input 
                            type="date"
                            min={bookingState.checkIn || todayDateStr}
                            value={bookingState.checkOut}
                            onChange={(e) => setBookingState(prev => ({...prev, checkOut: e.target.value, error: null}))}
                            className="w-full px-6 py-4 md:px-8 md:py-6 bg-white border-2 border-transparent rounded-[2rem] md:rounded-[2.5rem] focus:outline-none focus:border-[#E1306C]/20 transition-all font-bold text-sm md:text-base shadow-sm"
                          />
                          <ChevronDown size={14} className="md:w-[18px] md:h-[18px] absolute right-6 md:right-8 top-1/2 -translate-y-1/2 text-gray-200 pointer-events-none" />
                        </div>
                      </div>
                   </div>

                   <div className="space-y-2 md:space-y-4 group/field">
                      <label className="flex items-center gap-2 md:gap-3 text-[9px] md:text-[11px] font-black text-gray-400 uppercase tracking-[0.3em] md:tracking-[0.4em] ml-2 md:ml-4 transition-colors group-focus-within/field:text-[#E1306C]">
                         <UserPlus size={14} className="md:w-4 md:h-4" /> Manifest Size
                      </label>
                      <div className="flex items-center justify-between bg-white p-2 md:p-2.5 rounded-[2rem] md:rounded-[2.5rem] border-2 border-transparent shadow-sm">
                        <button 
                          onClick={() => setBookingState(prev => ({...prev, guests: Math.max(1, prev.guests - 1), error: null}))}
                          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-white hover:shadow-lg transition-all active:scale-90"
                        >
                          <Minus size={16} className="md:w-5 md:h-5" />
                        </button>
                        <span className="font-black text-lg md:text-xl text-[#0a0a0a] tabular-nums">{bookingState.guests}</span>
                        <button 
                          onClick={() => setBookingState(prev => ({...prev, guests: Math.min(10, prev.guests + 1), error: null}))}
                          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-green-500 hover:bg-white hover:shadow-lg transition-all active:scale-90"
                        >
                          <Plus size={16} className="md:w-5 md:h-5" />
                        </button>
                      </div>
                   </div>

                   {bookingState.error && (
                     <div className="p-4 md:p-6 bg-red-50 border border-red-100 rounded-[1.5rem] md:rounded-[2rem] flex items-start gap-3 md:gap-5 text-red-600 animate-in slide-in-from-top-2">
                        <AlertCircle size={18} className="md:w-6 md:h-6 mt-0.5 shrink-0 animate-pulse" />
                        <div className="space-y-1">
                           <p className="text-[8px] md:text-[9px] font-black uppercase tracking-widest">Protocol_Abort</p>
                           <p className="text-[10px] md:text-xs font-bold italic leading-relaxed">{bookingState.error}</p>
                        </div>
                     </div>
                   )}
                </div>
              </div>

              <div className="bg-[#0a0a0a] p-8 md:p-12 rounded-[3rem] md:rounded-[5rem] text-white space-y-6 md:space-y-10 shadow-[0_50px_100px_rgba(0,0,0,0.4)] relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#E1306C]/20 to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />
                <div className="relative z-10 space-y-6 md:space-y-10">
                  <div className="space-y-1 md:space-y-2">
                    <p className="text-[9px] md:text-[11px] font-black text-[#E1306C] uppercase tracking-[0.4em] md:tracking-[0.6em]">Settlement_Rate</p>
                    <div className="flex items-end gap-2 md:gap-3">
                       <p className="text-5xl md:text-7xl font-heritage font-bold leading-none tracking-tighter">${hotel.price}</p>
                       <p className="text-[9px] md:text-[11px] font-bold text-white/30 uppercase tracking-widest mb-1 md:mb-2">/ Cycle</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => onBook(hotel.name.EN)}
                    disabled={bookingState.isProcessingPayment}
                    className="w-full py-5 md:py-8 bg-white text-[#0a0a0a] rounded-[2rem] md:rounded-[2.5rem] font-black text-[10px] md:text-sm uppercase tracking-[0.4em] md:tracking-[0.6em] flex items-center justify-center gap-4 md:gap-6 transition-all hover:scale-105 active:scale-95 disabled:opacity-50 hover:shadow-[0_20px_50px_rgba(255,255,255,0.2)]"
                  >
                    Authorize Node
                    <ArrowRight size={18} className="md:w-[22px] md:h-[22px] animate-pulse" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelModal;