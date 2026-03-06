import React, { useState } from 'react';
import { Language } from '../types';
import { Play, CreditCard, Users, Clock, ShieldCheck, ChevronLeft, MessageCircle, Send, Eye, Radio, Calendar, MapPin } from 'lucide-react';

interface VRPortalProps {
  language: Language;
  setView: (view: string) => void;
}

const vrTours = [
  {
    id: 'sigiriya',
    title: { EN: 'Sigiriya Summit Live', SI: 'සීගිරිය සජීවී චාරිකාව' },
    desc: { EN: 'Experience the majestic Lion Rock from your living room. Join our expert guide live at the summit in stunning 360° VR.', SI: 'ඔබේ නිවසේ සිටම සීගිරියේ අසිරිය විඳගන්න. අපගේ මඟපෙන්වන්නා සමඟ සජීවීව 360° VR තාක්ෂණයෙන් සීගිරිය මුදුනට යන්න.' },
    image: 'https://images.unsplash.com/photo-1588598198321-181518256e18?q=80&w=2070&auto=format&fit=crop',
    price: 4.99,
    status: 'LIVE',
    videoId: '8lsB-P8nGSM',
    guide: 'Nuwan',
    viewers: '1.2K',
    duration: '45 Min'
  },
  {
    id: 'yala',
    title: { EN: 'Yala Safari Live', SI: 'යාල සෆාරි සජීවීව' },
    desc: { EN: 'Join a live jeep safari tracking leopards and elephants in Yala National Park. Fully immersive 360° experience.', SI: 'යාල ජාතික වනෝද්‍යානයේ දිවියන් සහ අලි ඇතුන් සොයා යන සජීවී සෆාරියක්. 360° තාක්ෂණයෙන්.' },
    image: 'https://images.unsplash.com/photo-1610123598195-2af32f228cb6?q=80&w=2070&auto=format&fit=crop',
    price: 5.99,
    status: 'LIVE',
    videoId: 'W1i-pT1s-10', // Placeholder
    guide: 'Saman',
    viewers: '850',
    duration: '60 Min'
  },
  {
    id: 'kandy',
    title: { EN: 'Temple of the Tooth', SI: 'ශ්‍රී දළදා මාළිගාව' },
    desc: { EN: 'Sacred evening pooja ceremony broadcasted live in immersive VR. Experience the cultural heartbeat of Sri Lanka.', SI: 'ශ්‍රී දළදා මාළිගාවේ සවස පූජාව සජීවීව VR තාක්ෂණයෙන් නරඹන්න.' },
    image: 'https://images.unsplash.com/photo-1625736300986-6e5341f232f3?q=80&w=2070&auto=format&fit=crop',
    price: 3.99,
    status: 'UPCOMING',
    time: 'Today, 6:30 PM',
    videoId: '',
    guide: 'Bandara',
    viewers: 'Waiting',
    duration: '30 Min'
  },
  {
    id: 'ella',
    title: { EN: 'Ella Train Journey', SI: 'ඇල්ල දුම්රිය චාරිකාව' },
    desc: { EN: 'The world famous Kandy to Ella train ride. Sit at the doorway in VR and enjoy the misty mountains.', SI: 'ලෝක ප්‍රකට මහනුවර සිට ඇල්ල දක්වා දුම්රිය ගමන. කඳුකරයේ සුන්දරත්වය VR මගින් විඳගන්න.' },
    image: 'https://images.unsplash.com/photo-1578637387939-43c525550085?q=80&w=2070&auto=format&fit=crop',
    price: 2.99,
    status: 'UPCOMING',
    time: 'Tomorrow, 8:00 AM',
    videoId: '',
    guide: 'Nimal',
    viewers: 'Waiting',
    duration: '120 Min'
  }
];

const VRPortal: React.FC<VRPortalProps> = ({ language, setView }) => {
  const [selectedTour, setSelectedTour] = useState<any>(null);
  const [hasTicket, setHasTicket] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { id: 1, user: 'Kamal', text: 'Wow, the view is amazing!', time: '10:02 AM' },
    { id: 2, user: 'Sarah', text: 'Can the guide show that again?', time: '10:05 AM' },
  ]);

  const handleBuyTicket = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setHasTicket(true);
    }, 1500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;
    
    setChatMessages([
      ...chatMessages,
      { id: Date.now(), user: 'You', text: chatMessage, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
    ]);
    setChatMessage('');
  };

  const resetSelection = () => {
    setSelectedTour(null);
    setHasTicket(false);
  };

  // 1. SELECTOR SCREEN
  if (!selectedTour) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white pt-24 pb-12 px-4 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <button 
            onClick={() => setView('home')}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ChevronLeft size={20} />
            <span className="text-sm font-bold uppercase tracking-wider">Back to Home</span>
          </button>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-heritage font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8]">Live VR</span> Portal
            </h1>
            <p className="text-gray-400 max-w-2xl text-lg">
              {language === 'EN' 
                ? "Select a destination and teleport instantly. Our live 360° VR streams support mobile gyroscopes and dedicated VR headsets (Meta Quest, Apple Vision Pro)."
                : "ස්ථානයක් තෝරාගෙන සජීවීව එතැනට යන්න. අපගේ 360° VR තාක්ෂණය ජංගම දුරකථන සහ VR Headsets සඳහා සහය දක්වයි."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vrTours.map(tour => (
              <div key={tour.id} className="bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden hover:border-white/20 transition-all group flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img src={tour.image} alt={tour.title.EN} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
                  
                  <div className="absolute top-4 left-4">
                    {tour.status === 'LIVE' ? (
                      <div className="flex items-center gap-2 bg-red-500/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.5)]">
                        <Radio size={12} /> LIVE NOW
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase">
                        <Calendar size={12} /> UPCOMING
                      </div>
                    )}
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <h3 className="font-heritage font-bold text-xl">{tour.title[language]}</h3>
                    <div className="text-lg font-black text-[#0EA5E9]">${tour.price}</div>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-sm text-gray-400 mb-6 line-clamp-3 flex-1">{tour.desc[language]}</p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-6">
                    <div className="flex items-center gap-1.5"><Clock size={14} /> {tour.duration}</div>
                    <div className="flex items-center gap-1.5"><Users size={14} /> Guide: {tour.guide}</div>
                  </div>

                  <button 
                    onClick={() => setSelectedTour(tour)}
                    className={`w-full py-3.5 rounded-xl font-black uppercase tracking-widest text-xs transition-all ${
                      tour.status === 'LIVE' 
                        ? 'bg-white text-black hover:scale-[1.02]' 
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    {tour.status === 'LIVE' 
                      ? (language === 'EN' ? 'Join Live Stream' : 'සජීවීව සම්බන්ධ වන්න')
                      : (language === 'EN' ? 'Pre-book Ticket' : 'කලින් වෙන්කරගන්න')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 2. LIVE VR PLAYER SCREEN (If ticket purchased)
  if (hasTicket && selectedTour.status === 'LIVE') {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white pt-20 pb-10 px-4 md:px-8 flex flex-col">
        <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <button 
              onClick={resetSelection}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ChevronLeft size={20} />
              <span className="text-sm font-bold uppercase tracking-wider">Back to Portal</span>
            </button>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-red-500/20 text-red-500 px-3 py-1.5 rounded-full text-xs font-bold animate-pulse">
                <Radio size={14} />
                LIVE NOW
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full text-xs font-bold text-gray-300">
                <Eye size={14} />
                {selectedTour.viewers} Watching
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-6 flex-1">
            {/* VR Player Area */}
            <div className="flex-1 bg-black rounded-3xl overflow-hidden relative border border-white/10 shadow-2xl min-h-[50vh] lg:min-h-[70vh] group">
              {/* Simulated 360 Video Embed */}
              <iframe 
                width="100%" 
                height="100%" 
                src={`https://www.youtube.com/embed/${selectedTour.videoId}?autoplay=1&mute=1&controls=1&fs=1`} 
                title={`${selectedTour.title.EN} 360 VR`} 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; vr" 
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
              
              {/* Overlay UI */}
              <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                <h2 className="font-bold text-lg">{selectedTour.title[language]}</h2>
                <p className="text-xs text-gray-400">Guide: {selectedTour.guide}</p>
              </div>

              {/* VR Headset Hint */}
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded-full bg-[#0EA5E9]/20 flex items-center justify-center">
                  <Eye size={16} className="text-[#0EA5E9]" />
                </div>
                <div>
                  <p className="text-xs font-bold">VR Headset Detected?</p>
                  <p className="text-[10px] text-gray-400">Click the VR icon on the video player to enter immersive mode.</p>
                </div>
              </div>
            </div>

            {/* Live Chat Area */}
            <div className="w-full lg:w-80 bg-[#141414] rounded-3xl border border-white/10 flex flex-col h-[50vh] lg:h-auto">
              <div className="p-4 border-b border-white/10 flex items-center gap-2">
                <MessageCircle size={18} className="text-[#0EA5E9]" />
                <h3 className="font-bold uppercase tracking-wider text-sm">Live Chat</h3>
              </div>
              
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {chatMessages.map(msg => (
                  <div key={msg.id} className="text-sm">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className={`font-bold ${msg.user === 'You' ? 'text-[#0EA5E9]' : 'text-gray-300'}`}>{msg.user}</span>
                      <span className="text-[10px] text-gray-600">{msg.time}</span>
                    </div>
                    <p className="text-gray-400 bg-white/5 p-2.5 rounded-2xl rounded-tl-none inline-block">{msg.text}</p>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSendMessage} className="p-4 border-t border-white/10 relative">
                <input 
                  type="text" 
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  placeholder="Say hello..." 
                  className="w-full bg-black border border-white/10 rounded-full py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-[#0EA5E9]/50 transition-colors"
                />
                <button 
                  type="submit"
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-[#0EA5E9] hover:text-white transition-colors"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 3. TICKET PURCHASE SCREEN
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-24 pb-12 px-4 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={selectedTour.image} 
          alt={selectedTour.title.EN} 
          className="w-full h-full object-cover opacity-30 blur-sm scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <button 
          onClick={resetSelection}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ChevronLeft size={20} />
          <span className="text-sm font-bold uppercase tracking-wider">Back to Portal</span>
        </button>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            {selectedTour.status === 'LIVE' ? (
              <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-500 px-3 py-1 rounded-full text-xs font-bold mb-4 border border-red-500/20">
                <Radio size={14} className="animate-pulse" /> LIVE EVENT
              </div>
            ) : (
              <div className="inline-flex items-center gap-2 bg-white/10 text-white px-3 py-1 rounded-full text-xs font-bold mb-4 border border-white/10">
                <Calendar size={14} /> UPCOMING: {selectedTour.time}
              </div>
            )}
            
            <h1 className="text-4xl md:text-6xl font-heritage font-bold leading-tight mb-4">
              {selectedTour.title[language]}
            </h1>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              {selectedTour.desc[language]}
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-[#0EA5E9]" />
                </div>
                <div>
                  <p className="font-bold text-sm uppercase tracking-wider">Duration</p>
                  <p className="text-xs text-gray-500">{selectedTour.duration} Live Session</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Users size={18} className="text-[#0EA5E9]" />
                </div>
                <div>
                  <p className="font-bold text-sm uppercase tracking-wider">Interactive</p>
                  <p className="text-xs text-gray-500">Live Q&A with Guide {selectedTour.guide}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Ticket Card */}
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0EA5E9]/20 blur-[50px] rounded-full"></div>
            
            <h3 className="text-2xl font-bold mb-2">Virtual Ticket</h3>
            <p className="text-gray-400 text-sm mb-6">Full access to the {selectedTour.status === 'LIVE' ? 'live' : 'upcoming'} 360° stream</p>
            
            <div className="text-5xl font-black mb-8 flex items-baseline gap-2">
              <span className="text-2xl text-gray-500">$</span>{selectedTour.price}
              <span className="text-sm text-gray-500 font-normal">/ person</span>
            </div>

            <button 
              onClick={handleBuyTicket}
              disabled={isProcessing}
              className="w-full py-4 bg-white text-black rounded-full font-black uppercase tracking-widest hover:scale-105 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:scale-100"
            >
              {isProcessing ? (
                <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <CreditCard size={18} />
                  {language === 'EN' ? 'Purchase Ticket' : 'ප්‍රවේශපත්‍රය මිලදී ගන්න'}
                </>
              )}
            </button>

            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-500">
              <ShieldCheck size={14} />
              Secure Payment Processing
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VRPortal;
