
import React from 'react';
import Navbar from './Navbar.tsx';
import { Language, User } from '../types.ts';
import { Facebook, Youtube, Music2, ShieldCheck, Sparkles, Radio } from 'lucide-react';
import AnimatedLogo from './AnimatedLogo';

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

const SocialLink = ({ icon: Icon, href, color, textColor, label }: { icon: any, href: string, color: string, textColor: string, label: string }) => (
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
    <div className="relative z-10 w-full h-full bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shadow-sm transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] group-hover:border-transparent overflow-hidden">
      {/* Brand-colored fill on hover */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${color}`} />
      
      {/* Icon */}
      <Icon size={22} className={`relative z-20 group-hover:text-white group-hover:scale-110 transition-all duration-500 ${textColor}`} />
      
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
    <div className="min-h-screen flex flex-col relative bg-[#050505] overflow-x-hidden w-full">
      <style dangerouslySetInnerHTML={{ __html: `
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        ::-webkit-scrollbar-track {
          background: #050505;
        }
        ::-webkit-scrollbar-thumb {
          background: #1a1a1a;
          border-radius: 5px;
          border: 2px solid #050505;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #333;
        }
        /* Firefox */
        * {
          scrollbar-width: thin;
          scrollbar-color: #1a1a1a #050505;
        }
      `}} />
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

      <footer className="bg-[#0a0a0a] border-t border-white/5 text-white pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24">
          <div className="md:col-span-5 space-y-8">
            <div className="flex items-center gap-6 scale-125 origin-left">
              <AnimatedLogo />
            </div>
            <p className="text-lg text-white/40 leading-relaxed font-normal not-italic text-left max-w-md">
              Where ancient memories meet modern journeys. We promote the heritage and beauty of our pearl in the Indian Ocean through high-fidelity archival technology.
            </p>
            <div className="flex items-center gap-3 py-4 px-6 bg-white/5 rounded-2xl border border-white/10 w-fit">
              <ShieldCheck size={18} className="text-[#F59E0B]" />
              <span className="text-[9px] font-black uppercase tracking-widest text-white/40">Verified Destination Partner 2026</span>
            </div>
          </div>

          <div className="md:col-span-3 space-y-8">
            <h3 className="text-[10px] font-black text-white uppercase tracking-[0.4em] border-b border-white/5 pb-4">Quick Links</h3>
            <ul className="space-y-4 text-sm text-white/40 font-bold text-left tracking-widest">
              <li><button onClick={() => setView('home')} className="hover:text-[#F59E0B] transition-colors text-left w-full flex items-center gap-2"><Sparkles size={12} /> Home</button></li>
              <li><button onClick={() => setView('destinations')} className="hover:text-[#F59E0B] transition-colors text-left w-full flex items-center gap-2"><Sparkles size={12} /> Destinations</button></li>
              <li><button onClick={() => setView('vr-trip')} className="hover:text-[#F59E0B] transition-colors text-left w-full flex items-center gap-2"><Sparkles size={12} /> VR Experience</button></li>
              <li><button onClick={() => setView('memories')} className="hover:text-[#F59E0B] transition-colors text-left w-full flex items-center gap-2"><Sparkles size={12} /> Travel Memories</button></li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-8">
            <h3 className="text-[10px] font-black text-white uppercase tracking-[0.4em] border-b border-white/5 pb-4">Social Media</h3>
            <div className="flex flex-wrap gap-4">
              <SocialLink 
                icon={Facebook} 
                href="https://www.facebook.com/share/1DJJ35Hq4k/" 
                color="bg-[#1877F2]" 
                textColor="text-[#1877F2]"
                label="Facebook"
              />
              <SocialLink 
                icon={Youtube} 
                href="https://www.youtube.com/@TravelHublk-123" 
                color="bg-[#FF0000]" 
                textColor="text-[#FF0000]"
                label="YouTube"
              />
              <SocialLink 
                icon={Music2} 
                href="https://vm.tiktok.com/ZS91cdnNLXNp3-gURJB/" 
                color="bg-[#000000]" 
                textColor="text-white"
                label="TikTok"
              />
            </div>
            <div className="pt-4 flex flex-col gap-2">
              {/* Technical indicators removed for better user experience */}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] font-black text-white/20 uppercase tracking-[0.2em]">&copy; {new Date().getFullYear()} Travel Hub Sri Lanka. All rights reserved.</p>
          <div className="flex gap-8 opacity-10">
             <div className="w-1 h-1 rounded-full bg-white"></div>
             <div className="w-1 h-1 rounded-full bg-white"></div>
             <div className="w-1 h-1 rounded-full bg-white"></div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Layout;
