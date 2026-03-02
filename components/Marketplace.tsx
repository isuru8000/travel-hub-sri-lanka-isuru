
import React, { useState, useMemo, useEffect } from 'react';
import { Language } from '../types.ts';
import { 
  Gem, 
  Zap, 
  Crown, 
  ShieldCheck, 
  ArrowRight, 
  Clock, 
  MapPin, 
  Star,
  Sparkles,
  Loader2,
  CheckCircle2,
  Lock,
  CreditCard,
  ChevronRight,
  Info,
  Utensils,
  Car,
  Plane,
  Radio,
  QrCode,
  Download,
  Printer,
  X,
  Wallet,
  ShieldQuestion,
  Fingerprint,
  Scan,
  Compass,
  Activity,
  Database
} from 'lucide-react';

interface MarketplaceProps {
  language: Language;
}

const PREMIUM_PACKAGES = [
  {
    id: 'p1',
    title: { EN: 'Ancient Majesty Tour', SI: 'පුරාණ රාජකීය සංචාරය' },
    price: 1299,
    duration: '7 Days',
    type: 'ALL-INCLUSIVE',
    image: 'https://plus.unsplash.com/premium_photo-1661954483883-edd65eac3577?q=80&w=1170&auto=format&fit=crop',
    nodes: 12,
    highlights: { EN: ['Sigiriya Rock', 'Mihintale', 'Gal Vihara'], SI: ['සීගිරිය', 'මිහින්තලේ', 'ගල් විහාරය'] }
  },
  {
    id: 'p2',
    title: { EN: 'Highland Tea Retreat', SI: 'කඳුකර තේ අත්දැකීම' },
    price: 850,
    duration: '4 Days',
    type: 'WELLNESS',
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
    nodes: 8,
    highlights: { EN: ['Ella Ridge', 'Nuwara Eliya', 'Tea Factories'], SI: ['ඇල්ල', 'නුවර එළිය', 'තේ කර්මාන්තශාලා'] }
  },
  {
    id: 'p3',
    title: { EN: 'Coastal Serenity Expedition', SI: 'වෙරළබඩ නිශ්ශබ්ද සංචාරය' },
    price: 1100,
    duration: '6 Days',
    type: 'ADVENTURE',
    image: 'https://images.unsplash.com/photo-1512100356956-c1227c3317bb?auto=format&fit=crop&w=800&q=80',
    nodes: 10,
    highlights: { EN: ['Mirissa Whale Watch', 'Galle Fort', 'Unawatuna'], SI: ['මිරිස්ස තල්මසුන් නැරඹීම', 'ගාල්ල බලකොටුව', 'උණවටුන'] }
  },
  {
    id: 'p4',
    title: { EN: 'Wildlife Frontier Safari', SI: 'වනජීවී සෆාරි අත්දැකීම' },
    price: 950,
    duration: '5 Days',
    type: 'NATURE',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
    nodes: 9,
    highlights: { EN: ['Yala Safari', 'Udawalawe', 'Bundala'], SI: ['යාල සෆාරි', 'උඩවලව', 'බුන්දල'] }
  }
];

const FUTURE_NODES = [
  {
    id: 'f1',
    title: { EN: 'Secret Jungle Expedition', SI: 'රහස් වනාන්තර සංචාරය' },
    image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=800&q=80',
    type: 'EXPLORATION'
  },
  {
    id: 'f2',
    title: { EN: 'Sapphire Waters Yachting', SI: 'නිල්වන් සාගර යාත්‍රා' },
    image: 'https://images.unsplash.com/photo-1544921603-91185f0962b1?auto=format&fit=crop&w=800&q=80',
    type: 'LUXURY'
  },
  {
    id: 'f3',
    title: { EN: 'Heritage Hot Air Balloon', SI: 'උරුම ගුවන් බැලුන්' },
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80',
    type: 'ADVENTURE'
  }
];

const Marketplace: React.FC<MarketplaceProps> = ({ language }) => {
  const [bookingState, setBookingState] = useState({
    destination: '',
    checkIn: '',
    checkOut: '',
    guests: 2,
    isCheckoutOpen: false,
    isProcessing: false,
    processStep: 0,
    isSuccess: false,
    paymentMethod: 'card' as 'card' | 'wallet' | 'ledger',
    bookingId: ''
  });

  const processingSteps = [
    { label: "Initializing Gateway...", icon: <Zap size={18} /> },
    { label: "Verifying Identity Hash...", icon: <Fingerprint size={18} /> },
    { label: "Securing Financial Tunnel...", icon: <Lock size={18} /> },
    { label: "Finalizing Registry Sync...", icon: <Radio size={18} className="animate-pulse" /> }
  ];

  const handleCheckoutTrigger = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingState.destination) return;
    setBookingState(prev => ({ ...prev, isCheckoutOpen: true }));
  };

  const executePayment = async () => {
    setBookingState(prev => ({ ...prev, isProcessing: true, processStep: 0 }));
    
    for (let i = 0; i < processingSteps.length; i++) {
      setBookingState(prev => ({ ...prev, processStep: i }));
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    setBookingState(prev => ({ 
      ...prev, 
      isProcessing: false, 
      isSuccess: true, 
      isCheckoutOpen: false,
      bookingId: `LNK-${Math.random().toString(36).substring(2, 9).toUpperCase()}`
    }));
  };

  const selectedPackage = useMemo(() => {
    return PREMIUM_PACKAGES.find(p => p.title.EN === bookingState.destination);
  }, [bookingState.destination]);

  return (
    <div className="min-h-screen bg-[#fafafa] pb-32">
      {/* SUCCESS CONFIRMATION MODAL */}
      {bookingState.isSuccess && (
        <div className="fixed inset-0 z-[300] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-6 animate-in fade-in duration-700">
          <div className="bg-white rounded-[4rem] w-full max-w-2xl overflow-hidden shadow-[0_80px_200px_rgba(0,0,0,0.8)] relative group">
             <div className="absolute inset-0 pattern-overlay opacity-[0.03] pointer-events-none" />
             
             <div className="bg-[#0a0a0a] p-12 text-center space-y-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#E1306C] animate-pulse" />
                <div className="w-24 h-24 bg-[#E1306C]/10 border border-[#E1306C]/30 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                   <CheckCircle2 size={48} className="text-[#E1306C]" />
                </div>
                <h2 className="text-4xl font-heritage font-bold text-white uppercase tracking-tighter">Sync Successful</h2>
                <div className="flex items-center justify-center gap-4">
                   <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em]">Registry_ID:</span>
                   <span className="text-lg font-black text-[#E1306C] tracking-widest">{bookingState.bookingId}</span>
                </div>
             </div>

             <div className="p-12 space-y-10 bg-white">
                <div className="space-y-6">
                   <div className="flex justify-between items-center border-b border-gray-50 pb-4">
                      <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Active Node</p>
                      <p className="text-lg font-bold text-[#0a0a0a]">{bookingState.destination}</p>
                   </div>
                   <div className="flex justify-between items-center border-b border-gray-50 pb-4">
                      <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Temporal Range</p>
                      <p className="text-base font-bold text-[#0a0a0a]">{bookingState.checkIn} — {bookingState.checkOut}</p>
                   </div>
                   <div className="flex justify-between items-center">
                      <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Manifest Size</p>
                      <p className="text-base font-bold text-[#0a0a0a]">{bookingState.guests} Individuals</p>
                   </div>
                </div>

                <div className="bg-gray-50 rounded-3xl p-8 flex items-center justify-between border border-gray-100 group-hover:bg-blue-50/50 transition-colors">
                   <div className="flex items-center gap-6">
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                        <QrCode size={32} className="text-[#0a0a0a]" />
                      </div>
                      <div className="text-left">
                        <p className="text-[10px] font-black text-[#E1306C] uppercase tracking-widest">Visual_Pass</p>
                        <p className="text-xs text-gray-400 font-medium italic">Present at registry entry</p>
                      </div>
                   </div>
                   <button className="p-4 hover:bg-white rounded-2xl transition-all hover:shadow-lg text-gray-300 hover:text-[#0a0a0a]">
                      <Download size={24} />
                   </button>
                </div>

                <div className="flex gap-4 pt-4">
                   <button 
                     onClick={() => setBookingState(prev => ({ ...prev, isSuccess: false }))}
                     className="flex-grow py-6 bg-[#0a0a0a] text-white rounded-[2rem] font-black text-[11px] uppercase tracking-[0.4em] shadow-xl hover:scale-[1.02] active:scale-95 transition-all"
                   >
                     Terminate Interface
                   </button>
                   <button className="w-16 h-16 bg-gray-50 text-gray-300 rounded-[2rem] flex items-center justify-center border border-gray-100 hover:text-[#0a0a0a] hover:bg-white transition-all">
                      <Printer size={20} />
                   </button>
                </div>
             </div>
          </div>
        </div>
      )}

      {/* CHECKOUT MANIFOLD MODAL */}
      {bookingState.isCheckoutOpen && (
        <div className="fixed inset-0 z-[250] bg-[#0a0a0a]/95 backdrop-blur-xl flex items-center justify-center p-6 animate-in fade-in duration-300">
          <div className="bg-white rounded-[4rem] w-full max-w-4xl overflow-hidden shadow-[0_100px_200px_rgba(0,0,0,0.6)] border border-white/20 animate-in zoom-in-95 duration-500">
             <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Summary Panel */}
                <div className="bg-gray-50 p-12 md:p-16 space-y-12 border-r border-gray-100">
                   <div className="space-y-4">
                      <button onClick={() => setBookingState(p => ({...p, isCheckoutOpen: false}))} className="flex items-center gap-3 text-gray-400 hover:text-[#0a0a0a] transition-colors mb-8">
                         <X size={20} />
                         <span className="text-[10px] font-black uppercase tracking-widest">Abort_Checkout</span>
                      </button>
                      <div className="flex items-center gap-4 text-[#E1306C]">
                         <ShieldCheck size={24} />
                         <span className="text-[11px] font-black uppercase tracking-[0.5em]">Secure_Authorization</span>
                      </div>
                      <h3 className="text-4xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tighter">Manifest Summary.</h3>
                   </div>

                   <div className="space-y-8">
                      <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 flex gap-6 items-center">
                         <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0">
                            <img src={selectedPackage?.image || 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=200'} className="w-full h-full object-cover" alt="" />
                         </div>
                         <div className="text-left space-y-1">
                            <p className="text-[9px] font-black text-[#E1306C] uppercase tracking-widest">Selected_Node</p>
                            <p className="text-xl font-bold text-[#0a0a0a] leading-tight">{bookingState.destination}</p>
                         </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                         <div className="bg-white p-6 rounded-3xl border border-gray-100">
                            <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Check_In</p>
                            <p className="font-bold text-sm text-[#0a0a0a]">{bookingState.checkIn || 'Not Set'}</p>
                         </div>
                         <div className="bg-white p-6 rounded-3xl border border-gray-100">
                            <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Guests</p>
                            <p className="font-bold text-sm text-[#0a0a0a]">{bookingState.guests} VOYAGERS</p>
                         </div>
                      </div>
                   </div>

                   <div className="pt-12 border-t border-gray-200">
                      <div className="flex justify-between items-end">
                         <div className="space-y-1">
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Total Settlement</p>
                            <p className="text-5xl font-heritage font-bold text-[#0a0a0a] tracking-tighter">${(selectedPackage?.price || 150) * bookingState.guests}</p>
                         </div>
                         <div className="flex items-center gap-2 text-green-500 opacity-60">
                            <Zap size={14} fill="currentColor" />
                            <span className="text-[9px] font-black uppercase tracking-widest">Protocol Sync: 100%</span>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Payment Processor Panel */}
                <div className="p-12 md:p-16 space-y-12 bg-white flex flex-col justify-center">
                   {bookingState.isProcessing ? (
                     <div className="space-y-12 animate-in fade-in duration-500 text-center">
                        <div className="relative w-32 h-32 mx-auto">
                           <div className="absolute inset-0 rounded-full border-4 border-gray-100" />
                           <div 
                             className="absolute inset-0 rounded-full border-4 border-[#E1306C] border-t-transparent animate-spin" 
                             style={{ animationDuration: '1.5s' }}
                           />
                           <div className="absolute inset-0 flex items-center justify-center text-[#E1306C]">
                              {processingSteps[bookingState.processStep].icon}
                           </div>
                        </div>
                        <div className="space-y-4">
                           <h4 className="text-2xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tighter">Processing Transaction</h4>
                           <div className="flex flex-col items-center gap-4">
                              <p className="text-gray-400 text-sm font-medium italic animate-pulse">{processingSteps[bookingState.processStep].label}</p>
                              <div className="flex gap-2">
                                 {processingSteps.map((_, i) => (
                                   <div key={i} className={`w-2 h-2 rounded-full transition-all duration-500 ${i <= bookingState.processStep ? 'bg-[#E1306C] shadow-[0_0_10px_#E1306C]' : 'bg-gray-200'}`} />
                                 ))}
                              </div>
                           </div>
                        </div>
                     </div>
                   ) : (
                     <div className="space-y-10">
                        <div className="space-y-4">
                           <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Payment_Protocol</p>
                           <div className="grid grid-cols-3 gap-3">
                              {[
                                { id: 'card', icon: <CreditCard size={18} />, label: 'Card' },
                                { id: 'wallet', icon: <Wallet size={18} />, label: 'Nexus' },
                                { id: 'ledger', icon: <ShieldQuestion size={18} />, label: 'Crypto' }
                              ].map(method => (
                                <button
                                  key={method.id}
                                  onClick={() => setBookingState(p => ({ ...p, paymentMethod: method.id as any }))}
                                  className={`flex flex-col items-center gap-3 p-6 rounded-3xl border-2 transition-all ${bookingState.paymentMethod === method.id ? 'bg-[#0a0a0a] border-transparent text-white shadow-xl scale-105' : 'bg-gray-50 border-gray-100 text-gray-400 hover:border-[#E1306C]/30'}`}
                                >
                                   {method.icon}
                                   <span className="text-[9px] font-black uppercase tracking-widest">{method.label}</span>
                                </button>
                              ))}
                           </div>
                        </div>

                        <div className="space-y-6">
                           <div className="space-y-2">
                              <label className="text-[10px] font-black text-gray-300 uppercase tracking-widest ml-2">Identity Signature</label>
                              <input type="text" placeholder="ALEXANDER PIERCE" className="w-full px-8 py-5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-[#E1306C]/30 font-bold uppercase tracking-widest text-xs" />
                           </div>
                           <div className="space-y-2">
                              <label className="text-[10px] font-black text-gray-300 uppercase tracking-widest ml-2">Secure Link Token (CVV/PIN)</label>
                              <input type="password" placeholder="••••" className="w-full px-8 py-5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-[#E1306C]/30 font-bold tracking-[0.8em]" />
                           </div>
                        </div>

                        <div className="pt-6 space-y-6">
                           <button 
                             onClick={executePayment}
                             className="w-full py-8 bg-[#0a0a0a] text-white rounded-[2.5rem] font-black text-xs uppercase tracking-[0.5em] shadow-[0_20px_60px_rgba(225,48,108,0.3)] hover:bg-[#E1306C] transition-all flex items-center justify-center gap-4 group/btn"
                           >
                              Confirm & Synchronize
                              <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                           </button>
                           <div className="flex items-center justify-center gap-3 text-gray-300">
                              <Lock size={14} />
                              <span className="text-[9px] font-black uppercase tracking-widest">TLS 1.3 End-to-End Encryption</span>
                           </div>
                        </div>
                     </div>
                   )}
                </div>
             </div>
          </div>
        </div>
      )}

      {/* CINEMATIC HEADER */}
      <div className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: `linear-gradient(#E1306C 1px, transparent 1px), linear-gradient(90deg, #E1306C 1px, transparent 1px)`, backgroundSize: '120px 120px' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/80 to-[#fafafa]" />
        
        <div className="relative text-center space-y-6 md:space-y-10 px-4 md:px-6 max-w-5xl animate-in fade-in zoom-in duration-1000 mt-16 md:mt-0">
          <div className="flex flex-col items-center gap-4 md:gap-6">
             <div className="inline-flex items-center gap-3 md:gap-4 px-4 py-2 md:px-6 md:py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-3xl text-white text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] shadow-2xl">
                <Crown size={14} className="md:w-4 md:h-4 text-yellow-500 animate-pulse" />
                Strategic_Market_Manifold
             </div>
             <div className="h-12 md:h-16 w-px bg-gradient-to-b from-[#E1306C] to-transparent" />
          </div>
          
          <h2 className="text-5xl sm:text-6xl md:text-[11rem] font-heritage font-bold text-white tracking-tighter uppercase leading-[0.85] md:leading-[0.8] drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
            ARCHIVE <br/><span className="italic insta-text-gradient">ACCESS.</span>
          </h2>
          
          <p className="text-white/40 text-base md:text-3xl font-light italic leading-relaxed tracking-wide max-w-3xl mx-auto px-4">
            "Get permanent access to the island's most famous and holy sites."
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 -mt-16 md:-mt-24 relative z-10 space-y-16 md:space-y-32">
        {/* Booking Form Card */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#E1306C] via-purple-500 to-[#0EA5E9] rounded-[2.5rem] md:rounded-[5rem] blur-[40px] md:blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity" />
          <div className="relative bg-white/95 backdrop-blur-[60px] p-6 md:p-20 rounded-[2.5rem] md:rounded-[5rem] shadow-[0_50px_100px_rgba(0,0,0,0.05)] border border-gray-50 space-y-8 md:space-y-16">
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center gap-3 md:gap-4 text-[#E1306C]">
                 <Database size={16} className="md:w-5 md:h-5 animate-pulse" />
                 <span className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em]">Session_Configurator</span>
              </div>
              <h3 className="text-3xl md:text-6xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tighter leading-none">Sync Configuration.</h3>
              <div className="w-24 md:w-32 h-1.5 insta-gradient rounded-full shadow-lg" />
            </div>

            <form onSubmit={handleCheckoutTrigger} className="grid grid-cols-1 xl:grid-cols-6 gap-6 md:gap-10">
              <div className="xl:col-span-3 space-y-3 md:space-y-4">
                <label className="text-[9px] md:text-[11px] font-black text-gray-400 uppercase tracking-[0.3em] md:tracking-[0.4em] ml-4 md:ml-6">Target Archive Node</label>
                <div className="relative">
                   <select 
                     required
                     value={bookingState.destination}
                     onChange={(e) => setBookingState(prev => ({...prev, destination: e.target.value}))}
                     className="w-full px-6 py-5 md:px-10 md:py-8 bg-gray-50 border-2 border-transparent rounded-[2rem] md:rounded-[3rem] focus:bg-white focus:border-[#E1306C]/20 outline-none transition-all font-bold text-base md:text-xl appearance-none shadow-inner text-[#0a0a0a]"
                   >
                     <option value="">Select Protocol...</option>
                     {PREMIUM_PACKAGES.map(p => <option key={p.id} value={p.title.EN}>{p.title[language]}</option>)}
                   </select>
                   <ChevronRight size={16} className="md:w-5 md:h-5 absolute right-6 md:right-8 top-1/2 -translate-y-1/2 rotate-90 text-gray-300 pointer-events-none" />
                </div>
              </div>
              <div className="xl:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div className="space-y-3 md:space-y-4">
                    <label className="text-[9px] md:text-[11px] font-black text-gray-400 uppercase tracking-[0.3em] md:tracking-[0.4em] ml-4 md:ml-6">Initialize</label>
                    <input required type="date" value={bookingState.checkIn} onChange={e => setBookingState(p => ({...p, checkIn: e.target.value}))} className="w-full px-6 py-5 md:px-8 md:py-8 bg-gray-50 rounded-[2rem] md:rounded-[3rem] border-2 border-transparent focus:border-[#E1306C]/20 outline-none shadow-inner font-bold text-sm md:text-base text-[#0a0a0a]" />
                 </div>
                 <div className="space-y-3 md:space-y-4">
                    <label className="text-[9px] md:text-[11px] font-black text-gray-400 uppercase tracking-[0.3em] md:tracking-[0.4em] ml-4 md:ml-6">Terminate</label>
                    <input required type="date" value={bookingState.checkOut} onChange={e => setBookingState(p => ({...p, checkOut: e.target.value}))} className="w-full px-6 py-5 md:px-8 md:py-8 bg-gray-50 rounded-[2rem] md:rounded-[3rem] border-2 border-transparent focus:border-[#E1306C]/20 outline-none shadow-inner font-bold text-sm md:text-base text-[#0a0a0a]" />
                 </div>
              </div>
              <div className="xl:col-span-1 pt-4 md:pt-8">
                 <button type="submit" className="w-full h-full bg-[#0a0a0a] text-white rounded-[2rem] md:rounded-[3rem] font-black text-[10px] md:text-xs uppercase tracking-widest hover:bg-[#E1306C] transition-all flex flex-col items-center justify-center gap-2 md:gap-3 py-6 md:py-8 xl:py-0 shadow-2xl active:scale-95 group/btn">
                    <Zap size={20} fill="currentColor" className="md:w-6 md:h-6 group-hover/btn:scale-125 transition-transform" />
                    <span>Checkout</span>
                 </button>
              </div>
            </form>
          </div>
        </div>

        {/* PACKAGE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
           {PREMIUM_PACKAGES.map((pkg) => (
             <div key={pkg.id} className="group relative h-[550px] md:h-[650px] rounded-[3rem] md:rounded-[5rem] overflow-hidden bg-white border border-gray-100 shadow-2xl transition-all duration-1000 hover:-translate-y-2 md:hover:-translate-y-4 flex flex-col">
                <div className="relative h-1/2 md:h-2/3 overflow-hidden">
                   <img src={pkg.image} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[8000ms] group-hover:scale-110" alt="" />
                   <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                   
                   <div className="absolute top-6 left-6 md:top-10 md:left-10">
                      <div className="px-4 py-2 md:px-6 md:py-3 bg-black/80 backdrop-blur-md rounded-xl md:rounded-2xl text-[8px] md:text-[10px] font-black uppercase tracking-widest text-white border border-white/10 shadow-2xl">
                         {pkg.type}
                      </div>
                   </div>

                   <div className="absolute top-6 right-6 md:top-10 md:right-10 flex gap-2">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20 text-white shadow-2xl">
                         <Star size={16} fill="currentColor" className="md:w-[18px] md:h-[18px] text-yellow-400" />
                      </div>
                   </div>
                </div>

                <div className="p-8 md:p-12 lg:p-16 flex-grow flex flex-col justify-between space-y-6 md:space-y-8 bg-white relative z-10">
                   <div className="space-y-4 md:space-y-6">
                      <div className="flex justify-between items-start">
                         <div className="space-y-1 md:space-y-2">
                            <p className="text-[9px] md:text-[11px] font-black text-[#E1306C] uppercase tracking-[0.3em] md:tracking-[0.4em] mb-1">Manifest: {pkg.duration}</p>
                            <h4 className="text-3xl md:text-4xl lg:text-5xl font-heritage font-bold text-[#0a0a0a] leading-tight tracking-tight uppercase group-hover:insta-text-gradient transition-all">{pkg.title[language]}</h4>
                         </div>
                         <div className="text-right">
                            <p className="text-[7px] md:text-[9px] font-black text-gray-300 uppercase tracking-widest mb-1">Entry Rate</p>
                            <p className="text-3xl md:text-4xl font-heritage font-bold text-[#0a0a0a] tracking-tighter">${pkg.price}</p>
                         </div>
                      </div>

                      <div className="flex flex-wrap gap-2 md:gap-4 pt-2 md:pt-4">
                         {pkg.highlights[language].map((h, i) => (
                           <div key={i} className="flex items-center gap-2 md:gap-3 px-3 py-1.5 md:px-5 md:py-2 bg-gray-50 rounded-full border border-gray-100 text-[8px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest group-hover:bg-blue-50/50 group-hover:text-blue-600 transition-all">
                              <MapPin size={10} />
                              {h}
                           </div>
                         ))}
                      </div>
                   </div>

                   <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 md:pt-8 border-t border-gray-50">
                      <div className="flex items-center gap-3 md:gap-4">
                         <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500 animate-ping shadow-[0_0_10px_#22c55e]" />
                         <span className="text-[8px] md:text-[10px] font-black text-gray-300 uppercase tracking-widest">{pkg.nodes} SECURE_NODES</span>
                      </div>
                      <button 
                        onClick={() => setBookingState(p => ({...p, destination: pkg.title.EN}))}
                        className="w-full sm:w-auto group/btn2 flex items-center justify-center gap-4 md:gap-6 px-8 py-4 md:px-10 md:py-5 bg-[#0a0a0a] text-white rounded-2xl md:rounded-3xl font-black text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] shadow-xl hover:bg-[#E1306C] transition-all"
                      >
                         Configure Sync
                         <ArrowRight size={16} className="md:w-[18px] md:h-[18px] group-hover/btn2:translate-x-2 transition-transform" />
                      </button>
                   </div>
                </div>
             </div>
           ))}
        </div>

        {/* FUTURE NODES: THE BLUR SECTION */}
        <div className="space-y-24 py-40 border-t border-gray-100 relative overflow-hidden">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-60 bg-blue-500/5 blur-[200px] rotate-12 pointer-events-none" />

           <div className="text-center space-y-10 relative z-10">
              <div className="inline-flex items-center gap-6 px-10 py-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[12px] font-black uppercase tracking-[0.6em] mx-auto animate-pulse backdrop-blur-xl">
                 <Scan size={20} /> Phase_02_Registry_Expansion
              </div>
              <h3 className="text-5xl md:text-[10rem] font-heritage font-bold text-[#0a0a0a] tracking-tighter uppercase leading-[0.8] drop-shadow-sm">
                 FUTURE <span className="text-blue-500 italic">MANIFOLDS.</span>
              </h3>
              <p className="text-gray-400 font-light italic text-xl md:text-3xl max-w-3xl mx-auto leading-relaxed opacity-80">
                "New places are being added soon for you to explore."
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              {FUTURE_NODES.map((node, idx) => (
                <div key={node.id} className="group relative h-[550px] rounded-[5rem] bg-black overflow-hidden border border-white/5 shadow-2xl transition-all duration-1000 hover:border-blue-500/30">
                   <img src={node.image} className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale transition-all duration-1000 group-hover:scale-110" alt={node.title[language]} />
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                   
                   <div className="absolute top-0 left-0 w-full h-[2px] bg-blue-500 shadow-[0_0_20px_#3b82f6] opacity-0 group-hover:opacity-100 animate-scan-slow z-20" style={{ animationDelay: `${idx * 1.5}s` }} />
                   
                   <div className="absolute inset-0 p-12 flex flex-col justify-between items-center text-center z-10">
                      <div className="px-6 py-3 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 text-[9px] font-black uppercase tracking-widest text-white/40">{node.type}</div>
                      
                      <div className="w-28 h-28 rounded-[3rem] bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 relative transition-transform duration-700 group-hover:scale-110">
                         <div className="absolute inset-0 border border-blue-500/10 rounded-[3rem] animate-ping" />
                         <Lock size={48} className="animate-pulse" />
                      </div>

                      <div className="space-y-6">
                         <h4 className="text-3xl font-heritage font-bold text-white uppercase tracking-tight leading-tight">{node.title[language]}</h4>
                         <div className="flex flex-col items-center gap-4">
                            <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.5em] animate-pulse">CALIBRATING NODE...</span>
                            <div className="w-24 h-1 bg-blue-500/20 rounded-full overflow-hidden">
                               <div className="h-full bg-blue-500 animate-loading-bar w-1/3" />
                            </div>
                         </div>
                      </div>
                   </div>

                   <div className="absolute inset-0 bg-black/40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center pointer-events-none">
                      <div className="px-10 py-5 bg-blue-600/20 border border-blue-500/40 text-white rounded-full font-black text-xs uppercase tracking-[0.4em] shadow-[0_0_40px_rgba(59,130,246,0.3)] animate-pulse">
                         AWAITING SYNC
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* Global Footer Info */}
        <div className="pt-24 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-12 opacity-30">
           <div className="flex items-center gap-10">
              <div className="flex items-center gap-4">
                 <ShieldCheck size={28} className="text-green-500" />
                 <div className="text-left">
                    <p className="text-[9px] font-black uppercase tracking-widest text-[#0a0a0a]">Transaction_Secure</p>
                    <p className="text-[10px] font-bold text-gray-500">Registry Protocol v6.2</p>
                 </div>
              </div>
              <div className="w-px h-12 bg-gray-100" />
              <div className="flex items-center gap-4">
                 <Compass size={28} className="text-[#0EA5E9]" />
                 <div className="text-left">
                    <p className="text-[9px] font-black uppercase tracking-widest text-[#0a0a0a]">Trajectory_Logic</p>
                    <p className="text-[10px] font-bold text-gray-500">AI Guided Logistics</p>
                 </div>
              </div>
           </div>
           
           <div className="flex flex-col items-center md:items-end gap-3">
              <p className="text-[11px] font-black uppercase tracking-[0.8em] text-[#0a0a0a]">End_Of_Market_Manifold</p>
              <div className="flex gap-2">
                 {[1,2,3,4,5].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-200" />)}
              </div>
           </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan-slow {
          0% { transform: translateY(-100%); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(600px); opacity: 0; }
        }
        @keyframes loading-bar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(250%); }
        }
        .animate-scan-slow { animation: scan-slow 6s linear infinite; }
        .animate-loading-bar { animation: loading-bar 3s ease-in-out infinite; }
      `}} />
    </div>
  );
};

export default Marketplace;
