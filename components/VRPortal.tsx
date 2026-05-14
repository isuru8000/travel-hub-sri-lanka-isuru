import React, { useState } from 'react';
import { Language, View } from '../types';
import { Play, CreditCard, Users, Clock, ShieldCheck, ChevronLeft, MessageCircle, Send, Eye, Radio, Calendar, MapPin, Lock, Volume2, VolumeX, Compass, Activity, Star } from 'lucide-react';
import StripePaymentModal from './StripePaymentModal';
import VRPage from '../VRPage';

interface VRPortalProps {
  language: Language;
  setView: (view: View) => void;
}

const vrTours = [
  {
    id: 'sigiriya',
    title: { EN: 'Sigiriya Summit Live', SI: 'සීගිරිය සජීවී චාරිකාව' },
    desc: { EN: 'Experience the majestic Lion Rock from your living room. Join our expert guide live at the summit in stunning 360° VR.', SI: 'ඔබේ නිවසේ සිටම සීගිරියේ අසිරිය විඳගන්න. අපගේ මඟපෙන්වන්නා සමඟ සජීවීව 360° VR තාක්ෂණයෙන් සීගිරිය මුදුනට යන්න.' },
    image: 'https://lh3.googleusercontent.com/d/1Lhb_9m92vX-ewzx3MtnleSj1SPg0odzs',
    price: 4.99,
    status: 'UPCOMING',
    ready: false,
    videoId: '8lsB-P8nGSM',
    guide: 'Nuwan',
    viewers: '1.2K',
    duration: '45 Min',
    ambientSound: 'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3', // Wind/Nature
    category: 'Adventure',
    location: 'Central',
    rating: 4.8
  },
  {
    id: 'yala',
    title: { EN: 'Yala Safari Live', SI: 'යාල සෆාරි සජීවීව' },
    desc: { EN: 'Join a live jeep safari tracking leopards and elephants in Yala National Park. Fully immersive 360° experience.', SI: 'යාල ජාතික වනෝද්‍යානයේ දිවියන් සහ අලි ඇතුන් සොයා යන සජීවී සෆාරියක්. 360° තාක්ෂණයෙන්.' },
    image: 'https://i1-e.pinimg.com/1200x/c5/69/7e/c5697e48ed9862e533f4d1b33de0705f.jpg',
    price: 5.99,
    status: 'UPCOMING',
    ready: false,
    videoId: 'W1i-pT1s-10', // Placeholder
    guide: 'Saman',
    viewers: '850',
    duration: '60 Min',
    ambientSound: 'https://assets.mixkit.co/active_storage/sfx/2456/2456-preview.mp3', // Jungle/Birds
    category: 'Nature',
    location: 'South',
    rating: 4.9
  },
  {
    id: 'kandy',
    title: { EN: 'Temple of the Tooth', SI: 'ශ්‍රී දළදා මාළිගාව' },
    desc: { EN: 'Sacred evening pooja ceremony broadcasted live in immersive VR. Experience the cultural heartbeat of Sri Lanka.', SI: 'ශ්‍රී දළදා මාළිගාවේ සවස පූජාව සජීවීව VR තාක්ෂණයෙන් නරඹන්න.' },
    image: 'https://i.pinimg.com/736x/fa/48/85/fa488580948513da9dc1a24f47dec64f.jpg',
    price: 3.99,
    status: 'UPCOMING',
    ready: false,
    time: 'Today, 6:30 PM',
    videoId: '',
    guide: 'Bandara',
    viewers: 'Waiting',
    duration: '30 Min',
    ambientSound: 'https://assets.mixkit.co/active_storage/sfx/123/123-preview.mp3', // Chimes/Bells
    category: 'Culture',
    location: 'Central',
    rating: 4.7
  },
  {
    id: 'ella',
    title: { EN: 'Ella Train Journey', SI: 'ඇල්ල දුම්රිය චාරිකාව' },
    desc: { EN: 'The world famous Kandy to Ella train ride. Sit at the doorway in VR and enjoy the misty mountains.', SI: 'ලෝක ප්‍රකට මහනුවර සිට ඇල්ල දක්වා දුම්රිය ගමන. කඳුකරයේ සුන්දරත්වය VR මගින් විඳගන්න.' },
    image: 'https://i1-e.pinimg.com/736x/b1/05/34/b10534397d7650e6c8c6476a2c43a87d.jpg',
    price: 2.99,
    status: 'UPCOMING',
    ready: false,
    time: 'Tomorrow, 8:00 AM',
    videoId: '',
    guide: 'Nimal',
    viewers: 'Waiting',
    duration: '120 Min',
    ambientSound: 'https://assets.mixkit.co/active_storage/sfx/1487/1487-preview.mp3', // Train/Wind
    category: 'Adventure',
    location: 'Central',
    rating: 4.6
  }
];

const VRPortal: React.FC<VRPortalProps> = ({ language, setView }) => {
  const [selectedTour, setSelectedTour] = useState<any>(null);
  const [hasTicket, setHasTicket] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { id: 1, user: 'Kamal', text: 'Wow, the view is amazing!', time: '10:02 AM' },
    { id: 2, user: 'Sarah', text: 'Can the guide show that again?', time: '10:05 AM' },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [locationFilter, setLocationFilter] = useState('All');

  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  React.useEffect(() => {
    if (selectedTour && hasTicket && !isMuted) {
      if (audioRef.current) {
        audioRef.current.play().catch(e => console.log('Autoplay blocked'));
      }
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
  }, [selectedTour, hasTicket, isMuted]);

  const handleBuyTicket = () => {
    setShowPaymentModal(true);
  };

  const handlePaymentSuccess = () => {
    setShowPaymentModal(false);
    setHasTicket(true);
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
    setShowPaymentModal(false);
  };

  // 1. SELECTOR SCREEN
  if (!selectedTour) {
    return (
      <div className="min-h-screen bg-[#f5f5f0] text-[#2d2d2d] pt-24 pb-12 px-4 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <button 
            onClick={() => setView('home')}
            className="flex items-center gap-2 text-[#5A5A40]/60 hover:text-[#2d2d2d] transition-colors mb-8"
          >
            <ChevronLeft size={20} />
            <span className="text-sm font-bold uppercase tracking-wider">Back to Home</span>
          </button>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-[#2d2d2d]">
              <span className="text-[#5A5A40]">Live VR</span> Portal
            </h1>
            <p className="text-[#5A5A40]/80 max-w-2xl text-lg mb-8">
              {language === 'EN' 
                ? "Select a destination and teleport instantly. Our live 360° VR streams support mobile gyroscopes and dedicated VR headsets."
                : "ස්ථානයක් තෝරාගෙන සජීවීව එතැනට යන්න. අපගේ 360° VR තාක්ෂණය ජංගම දුරකථන සහ VR Headsets සඳහා සහය දක්වයි."}
            </p>
            
            <div className="flex flex-col md:flex-row gap-4">
              <input 
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search destinations..."
                className="flex-1 bg-white border border-[#5A5A40]/10 rounded-full py-3 px-6 text-sm focus:outline-none focus:border-[#5A5A40]/50 shadow-sm"
              />
              <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} className="bg-white border border-[#5A5A40]/10 rounded-full py-3 px-6 text-sm shadow-sm focus:outline-none">
                  <option value="All">All Categories</option>
                  <option value="Adventure">Adventure</option>
                  <option value="Nature">Nature</option>
                  <option value="Culture">Culture</option>
              </select>
              <select value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)} className="bg-white border border-[#5A5A40]/10 rounded-full py-3 px-6 text-sm shadow-sm focus:outline-none">
                  <option value="All">All Locations</option>
                  <option value="Central">Central</option>
                  <option value="South">South</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vrTours
              .filter(tour => 
                (tour.title.EN.toLowerCase().includes(searchTerm.toLowerCase()) || 
                 tour.desc.EN.toLowerCase().includes(searchTerm.toLowerCase()) ||
                 tour.title.SI.includes(searchTerm) || 
                 tour.desc.SI.includes(searchTerm)) &&
                (categoryFilter === 'All' || tour.category === categoryFilter) &&
                (locationFilter === 'All' || tour.location === locationFilter)
              )
              .map(tour => (
              <div key={tour.id} className={`bg-white border rounded-[2rem] overflow-hidden hover:border-[#5A5A40]/30 transition-all group flex flex-col shadow-sm ${searchTerm && (tour.title.EN.toLowerCase().includes(searchTerm.toLowerCase()) || tour.desc.EN.toLowerCase().includes(searchTerm.toLowerCase()) || tour.title.SI.includes(searchTerm) || tour.desc.SI.includes(searchTerm)) && 'border-[#5A5A40]/50 ring-2 ring-[#5A5A40]/20'}`}>
                <div className="relative h-48 overflow-hidden">
                  <img src={tour.image} alt={tour.title.EN} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#f5f5f0] to-transparent"></div>
                  
                  <div className="absolute top-4 left-4">
                    {tour.status === 'LIVE' ? (
                      <div className="flex items-center gap-2 bg-[#5A5A40]/90 text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase animate-pulse shadow-sm">
                        <Radio size={12} /> LIVE NOW
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 bg-[#5A5A40]/10 text-[#5A5A40] px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
                        <Calendar size={12} /> UPCOMING
                      </div>
                    )}
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <h3 className="font-serif font-bold text-xl text-[#2d2d2d]">{tour.title[language]}</h3>
                    <div className="text-lg font-bold text-[#5A5A40]">${tour.price}</div>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-sm text-[#5A5A40]/70 mb-4 line-clamp-3">{tour.desc[language]}</p>
                  
                  <div className="flex items-center justify-between text-xs text-[#5A5A40]/50 mb-2">
                    <div className="flex items-center gap-1.5"><Clock size={14} /> {tour.duration}</div>
                    <div className="flex items-center gap-1.5"><Users size={14} /> Guide: {tour.guide}</div>
                  </div>
                  
                  <div className="flex items-center gap-1 text-[#F59E0B] mb-6">
                    <Star size={14} fill="currentColor" />
                    <span className="text-xs font-bold text-[#5A5A40]">{tour.rating}</span>
                  </div>

                  <button 
                    onClick={() => tour.ready && setSelectedTour(tour)}
                    disabled={!tour.ready}
                    className={`w-full py-3.5 rounded-xl font-bold uppercase tracking-widest text-xs transition-all ${
                      !tour.ready
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : tour.status === 'LIVE' 
                          ? 'bg-[#5A5A40] text-white hover:scale-[1.02]' 
                          : 'bg-[#5A5A40]/10 text-[#5A5A40] hover:bg-[#5A5A40]/20'
                    }`}
                  >
                    {!tour.ready
                      ? (language === 'EN' ? 'Under Construction' : 'ඉදිකරමින් පවතී')
                      : tour.status === 'LIVE' 
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
      <div className="min-h-screen bg-[#f5f5f0] text-[#2d2d2d] pt-20 pb-10 px-4 md:px-8 flex flex-col">
        <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <button 
              onClick={resetSelection}
              className="flex items-center gap-2 text-[#5A5A40]/60 hover:text-[#2d2d2d] transition-colors"
            >
              <ChevronLeft size={20} />
              <span className="text-sm font-bold uppercase tracking-wider">Back to Portal</span>
            </button>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-[#5A5A40]/10 text-[#5A5A40] px-3 py-1.5 rounded-full text-xs font-bold animate-pulse">
                <Radio size={14} />
                LIVE NOW
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full text-xs font-bold text-[#5A5A40] shadow-sm">
                <Eye size={14} />
                {selectedTour.viewers} Watching
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-6 flex-1">
            {/* VR Player Area */}
            <div className="flex-1 bg-[#2d2d2d] rounded-3xl overflow-hidden relative border border-[#5A5A40]/20 shadow-lg min-h-[50vh] lg:min-h-[70vh] group">
              {/* Audio Element */}
              <audio 
                ref={audioRef} 
                src={selectedTour.ambientSound} 
                loop 
              />

              {/* Real 360 VR Player */}
              <div className="absolute inset-0 w-full h-full">
                <VRPage panoramaUrl={selectedTour.image} title={selectedTour.title[language]} />
              </div>
              
              {/* Digital Overlay / HUD Effect */}
              <div className="absolute inset-0 pointer-events-none z-10">
                <div className="absolute top-8 right-8 flex flex-col items-end gap-2">
                   <div className="flex items-center gap-2 bg-[#2d2d2d]/40 backdrop-blur-sm border border-white/10 px-3 py-1 rounded text-[10px] font-mono text-white/70">
                      <Compass size={12} className="animate-spin-slow" />
                      8.014° N, 80.710° E
                   </div>
                   <div className="flex items-center gap-2 bg-[#2d2d2d]/40 backdrop-blur-sm border border-white/10 px-3 py-1 rounded text-[10px] font-mono text-white/70">
                      <Activity size={12} className="text-emerald-400" />
                      SYMMETRY: OPTIMAL
                   </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-white/20 rounded-tl-xl"></div>
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/20 rounded-tr-xl"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-white/20 rounded-bl-xl"></div>
                <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-white/20 rounded-br-xl"></div>
              </div>

              {/* Control Overlays */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
                 <button 
                   onClick={() => setIsMuted(!isMuted)}
                   className="p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/20 transition-all group pointer-events-auto"
                 >
                   {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} className="group-hover:scale-110 transition-transform" />}
                 </button>
                 <div className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-bold uppercase tracking-widest">
                    Live Stream
                 </div>
              </div>
              
              {/* Overlay Info Card (Top Left) */}
              <div className="absolute top-6 left-6 bg-[#f5f5f0]/80 backdrop-blur-md px-5 py-3 rounded-2xl border border-[#5A5A40]/20 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                <h2 className="font-serif font-bold text-xl text-[#2d2d2d] mb-0.5">{selectedTour.title[language]}</h2>
                <div className="flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                   <p className="text-[10px] uppercase font-black tracking-widest text-[#5A5A40]/70">Secure Node: {selectedTour.guide}</p>
                </div>
              </div>

              {/* VR Headset Hint */}
              <div className="absolute bottom-6 left-6 bg-[#f5f5f0]/80 backdrop-blur-md px-4 py-2 rounded-xl border border-[#5A5A40]/20 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                <div className="w-8 h-8 rounded-full bg-[#5A5A40]/10 flex items-center justify-center">
                  <Eye size={16} className="text-[#5A5A40]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#2d2d2d]">VR Mode Active</p>
                  <p className="text-[10px] text-[#5A5A40]/70">Gyroscope data syncing...</p>
                </div>
              </div>
            </div>

            {/* Live Chat Area */}
            <div className="w-full lg:w-80 bg-white rounded-3xl border border-[#5A5A40]/10 flex flex-col h-[50vh] lg:h-auto shadow-sm">
              <div className="p-4 border-b border-[#5A5A40]/10 flex items-center gap-2">
                <MessageCircle size={18} className="text-[#5A5A40]" />
                <h3 className="font-bold uppercase tracking-wider text-sm text-[#2d2d2d]">Live Chat</h3>
              </div>
              
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {chatMessages.map(msg => (
                  <div key={msg.id} className="text-sm">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className={`font-bold ${msg.user === 'You' ? 'text-[#5A5A40]' : 'text-[#2d2d2d]'}`}>{msg.user}</span>
                      <span className="text-[10px] text-[#5A5A40]/50">{msg.time}</span>
                    </div>
                    <p className="text-[#5A5A40]/80 bg-[#5A5A40]/5 p-2.5 rounded-2xl rounded-tl-none inline-block">{msg.text}</p>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSendMessage} className="p-4 border-t border-[#5A5A40]/10 relative">
                <input 
                  type="text" 
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  placeholder="Say hello..." 
                  className="w-full bg-[#f5f5f0] border border-[#5A5A40]/10 rounded-full py-3 pl-4 pr-12 text-sm text-[#2d2d2d] focus:outline-none focus:border-[#5A5A40]/50 transition-colors"
                />
                <button 
                  type="submit"
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-[#5A5A40] hover:text-[#2d2d2d] transition-colors"
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
    <div className="min-h-screen bg-[#f5f5f0] text-[#2d2d2d] pt-24 pb-12 px-4 relative overflow-hidden">
      {showPaymentModal && (
        <StripePaymentModal 
          amount={selectedTour.price} 
          onSuccess={handlePaymentSuccess} 
          onClose={() => setShowPaymentModal(false)}
          title={`Ticket: ${selectedTour.title[language]}`}
        />
      )}

      <div className="absolute inset-0 z-0">
        <img 
          src={selectedTour.image} 
          alt={selectedTour.title.EN} 
          className="w-full h-full object-cover opacity-10 blur-sm scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f5f5f0] via-[#f5f5f0]/80 to-transparent"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <button 
          onClick={resetSelection}
          className="flex items-center gap-2 text-[#5A5A40]/60 hover:text-[#2d2d2d] transition-colors mb-8"
        >
          <ChevronLeft size={20} />
          <span className="text-sm font-bold uppercase tracking-wider">Back to Portal</span>
        </button>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            {selectedTour.status === 'LIVE' ? (
              <div className="inline-flex items-center gap-2 bg-[#5A5A40]/10 text-[#5A5A40] px-3 py-1 rounded-full text-xs font-bold mb-4 border border-[#5A5A40]/20">
                <Radio size={14} className="animate-pulse" /> LIVE EVENT
              </div>
            ) : (
              <div className="inline-flex items-center gap-2 bg-[#5A5A40]/5 text-[#5A5A40] px-3 py-1 rounded-full text-xs font-bold mb-4 border border-[#5A5A40]/10">
                <Calendar size={14} /> UPCOMING: {selectedTour.time}
              </div>
            )}
            
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-4 text-[#2d2d2d]">
              {selectedTour.title[language]}
            </h1>
            <p className="text-[#5A5A40]/80 text-lg mb-8 leading-relaxed">
              {selectedTour.desc[language]}
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 text-[#5A5A40]">
                <div className="w-10 h-10 rounded-full bg-[#5A5A40]/10 flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-[#5A5A40]" />
                </div>
                <div>
                  <p className="font-bold text-sm uppercase tracking-wider">Duration</p>
                  <p className="text-xs text-[#5A5A40]/60">{selectedTour.duration} Live Session</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-[#5A5A40]">
                <div className="w-10 h-10 rounded-full bg-[#5A5A40]/10 flex items-center justify-center shrink-0">
                  <Users size={18} className="text-[#5A5A40]" />
                </div>
                <div>
                  <p className="font-bold text-sm uppercase tracking-wider">Interactive</p>
                  <p className="text-xs text-[#5A5A40]/60">Live Q&A with Guide {selectedTour.guide}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Ticket Card */}
          <div className="bg-white backdrop-blur-2xl border border-[#5A5A40]/10 rounded-[2.5rem] p-8 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#5A5A40]/5 blur-[50px] rounded-full"></div>
            
            <h3 className="text-2xl font-bold mb-2 text-[#2d2d2d]">Virtual Ticket</h3>
            <p className="text-[#5A5A40]/70 text-sm mb-6">Full access to the {selectedTour.status === 'LIVE' ? 'live' : 'upcoming'} 360° stream</p>
            
            <div className="text-5xl font-bold mb-8 flex items-baseline gap-2 text-[#2d2d2d]">
              <span className="text-2xl text-[#5A5A40]"> $</span>{selectedTour.price}
              <span className="text-sm text-[#5A5A40] font-normal">/ person</span>
            </div>

            <button 
              onClick={handleBuyTicket}
              className="w-full py-4 bg-[#5A5A40] text-white rounded-full font-bold uppercase tracking-widest hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
            >
              <CreditCard size={18} />
              {language === 'EN' ? 'Purchase Ticket' : 'ප්‍රවේශපත්‍රය මිලදී ගන්න'}
            </button>

            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-[#5A5A40]/60">
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
