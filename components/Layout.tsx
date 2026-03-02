
import React from 'react';
import Navbar from './Navbar.tsx';
import { Language, User } from '../types.ts';
import { Facebook, Instagram, Youtube, Music2, ShieldCheck, Sparkles, Radio } from 'lucide-react';
import AnimatedLogo from '../src/components/AnimatedLogo';

interface LayoutProps {
  children: React.ReactNode;
  language: Language;
  setLanguage: (lang: Language) => void;
  setView: (view: any) => void;
  currentView: string;
  user: User | null;
  onLogin: () => void;
  onLogout: () => void;
}

const SocialLink = ({ icon: Icon, href, color, label }: { icon: any, href: string, color: string, label: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="group relative w-14 h-14 flex items-center justify-center"
    title={label}
  >
    {/* Animated background aura */}
    <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 ${color}`} />
    
    {/* Main Icon Container */}
    <div className="relative z-10 w-full h-full bg-white border border-gray-100 rounded-2xl flex items-center justify-center shadow-sm transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] group-hover:border-transparent overflow-hidden">
      {/* Brand-colored fill on hover */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${color}`} />
      
      {/* Icon */}
      <Icon size={22} className="relative z-20 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-500" />
      
      {/* Gloss Effect */}
      <div className="absolute top-0 left-0 w-full h-[200%] bg-gradient-to-b from-white/30 via-transparent to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000 pointer-events-none" />
    </div>
  </a>
);

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  language, 
  setLanguage, 
  setView, 
  currentView,
  user,
  onLogin,
  onLogout
}) => {
  return (
    <div className="min-h-screen flex flex-col relative bg-white">
      <Navbar 
        language={language} 
        setLanguage={setLanguage} 
        setView={setView} 
        currentView={currentView}
        user={user}
        onLogin={onLogin}
        onLogout={onLogout}
      />
      
      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-white border-t border-gray-100 text-[#0a0a0a] pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24">
          <div className="md:col-span-5 space-y-8">
            <div className="flex items-center gap-6 scale-125 origin-left">
              <AnimatedLogo />
            </div>
            <p className="text-lg text-gray-500 leading-relaxed font-medium italic max-w-md">
              Where ancient memories meet modern journeys. We promote the heritage and beauty of our pearl in the Indian Ocean through high-fidelity archival technology.
            </p>
            <div className="flex items-center gap-3 py-4 px-6 bg-gray-50 rounded-2xl border border-gray-100 w-fit">
              <ShieldCheck size={18} className="text-green-500" />
              <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">Verified Destination Partner 2026</span>
            </div>
          </div>

          <div className="md:col-span-3 space-y-8">
            <h3 className="text-[10px] font-black text-[#0a0a0a] uppercase tracking-[0.4em] border-b border-gray-50 pb-4">Quick Links</h3>
            <ul className="space-y-4 text-sm text-gray-400 font-bold uppercase tracking-widest">
              <li><button onClick={() => setView('home')} className="hover:text-[#E1306C] transition-colors text-left w-full flex items-center gap-2"><Sparkles size={12} /> Home</button></li>
              <li><button onClick={() => setView('destinations')} className="hover:text-[#E1306C] transition-colors text-left w-full flex items-center gap-2"><Sparkles size={12} /> Destinations</button></li>
              <li><button onClick={() => setView('vr-trip')} className="hover:text-[#E1306C] transition-colors text-left w-full flex items-center gap-2"><Sparkles size={12} /> VR Experience</button></li>
              <li><button onClick={() => setView('memories')} className="hover:text-[#E1306C] transition-colors text-left w-full flex items-center gap-2"><Sparkles size={12} /> Travel Memories</button></li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-8">
            <h3 className="text-[10px] font-black text-[#0a0a0a] uppercase tracking-[0.4em] border-b border-gray-50 pb-4">Social Media</h3>
            <div className="flex flex-wrap gap-4">
              <SocialLink 
                icon={Instagram} 
                href="#" 
                color="bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]" 
                label="Instagram"
              />
              <SocialLink 
                icon={Facebook} 
                href="https://www.facebook.com/share/1DJJ35Hq4k/" 
                color="bg-[#1877F2]" 
                label="Facebook"
              />
              <SocialLink 
                icon={Youtube} 
                href="https://www.youtube.com/@TravelHublk-123" 
                color="bg-[#FF0000]" 
                label="YouTube"
              />
              <SocialLink 
                icon={Music2} 
                href="https://vm.tiktok.com/ZS91cdnNLXNp3-gURJB/" 
                color="bg-[#000000]" 
                label="TikTok"
              />
            </div>
            <div className="pt-4 flex flex-col gap-2">
              <p className="text-[9px] font-black text-gray-300 uppercase tracking-[0.3em] leading-relaxed flex items-center gap-2">
                <Radio size={12} className="text-[#E1306C] animate-pulse" />
                SIGNAL STRENGTH: OPTIMAL
              </p>
              <p className="text-[9px] font-black text-gray-300 uppercase tracking-[0.3em] leading-relaxed pl-5">
                LOCATION: COLOMBO_NODE_4.5
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em]">&copy; {new Date().getFullYear()} Travel Hub Sri Lanka. All rights reserved.</p>
          <div className="flex gap-8 opacity-20">
             <div className="w-1 h-1 rounded-full bg-black"></div>
             <div className="w-1 h-1 rounded-full bg-black"></div>
             <div className="w-1 h-1 rounded-full bg-black"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
