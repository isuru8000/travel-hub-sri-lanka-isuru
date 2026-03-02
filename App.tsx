
import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Language, User, Destination } from './types.ts';
import Layout from './components/Layout.tsx';
import Hero from './components/Hero.tsx';
import PopularHighlights from './components/PopularHighlights.tsx';
import Destinations from './components/Destinations.tsx';
import Foods from './components/Foods.tsx';
import HeritageMusic from './components/HeritageMusic.tsx';
import TraditionalMedicine from './components/TraditionalMedicine.tsx';
import Phrasebook from './components/Phrasebook.tsx';
import TravelEssentials from './components/TravelEssentials.tsx';
import Festivals from './components/Festivals.tsx';
import CategoriesSection from './components/CategoriesSection.tsx';
import StorySection from './components/StorySection.tsx';
import AIModal from './components/AIModal.tsx';
import IslandMapManifold from './components/IslandMapManifold.tsx';
import VRTripFuture from './components/VRTripFuture.tsx';
import VRComingSoon from './components/VRComingSoon.tsx';
import TripPlanner from './components/TripPlanner.tsx';
import NexusRewards from './components/NexusRewards.tsx';
import Marketplace from './components/Marketplace.tsx';
import Hotels from './components/Hotels.tsx';
import Transport from './components/Transport.tsx';
import BookingDestinations from './components/BookingDestinations.tsx';
import TravelStore from './components/TravelStore.tsx';
import DestinationDetail from './components/DestinationDetail.tsx';
import Quiz from './components/Quiz.tsx';
import VRExperience from './components/VRExperience.tsx';
import VRShowcase from './components/VRShowcase.tsx';
import SearchPortal from './components/SearchPortal.tsx';
import Contact from './components/Contact.tsx';
import LoginModal from './components/LoginModal.tsx';
import ScrollControls from './components/ScrollControls.tsx';
import LockedView from './components/LockedView.tsx';
import ComingSoonView from './components/ComingSoonView.tsx';
import Lenis from 'lenis';
import { UI_STRINGS } from './constants.tsx';
import { Sparkles, Compass, ShieldCheck, Star, MapPin, ArrowRight, Database, Box, Layers, Zap, Lock, Scan, Map as MapIcon, Heart, Globe, Library, Wind, Activity, Target, PawPrint, Landmark, Sprout, Mountain } from 'lucide-react';

type View = 'home' | 'destinations' | 'map' | 'hotels' | 'transport' | 'booking-destinations' | 'about' | 'foods' | 'music' | 'interests' | 'medicine' | 'phrases' | 'essentials' | 'festivals' | 'memories' | 'quiz' | 'vr-experience' | 'vr-showcase' | 'search' | 'contact' | 'marketplace' | 'community' | 'shop' | 'destination-detail' | 'vr-trip' | 'vr-portal' | 'trip-planner';

export default function App() {
  const [language, setLanguage] = useState<Language>('EN');
  const [view, setView] = useState<View>('home');
  const [user, setUser] = useState<User | null>(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const [selectedDestinationData, setSelectedDestinationData] = useState<Destination | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [view]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    
    // Disable Lenis smooth scrolling on mobile for better performance
    let lenis: Lenis | null = null;
    let rafId: number;

    if (!isMobile) {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      });

      function raf(time: number) {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      }

      rafId = requestAnimationFrame(raf);
    }

    const handleScroll = () => {
      if (!isMobile) {
        setScrollPos(window.scrollY);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Fetch user session from our custom server
    const fetchUser = async () => {
      try {
        const response = await fetch('/api/auth/me');
        if (response.ok) {
          const userData = await response.json();
          setUser({
            name: userData.name || userData.email?.split('@')[0] || 'Explorer',
            email: userData.email || '',
            photo: userData.picture || `https://ui-avatars.com/api/?name=${userData.email}`
          });
        }
      } catch (err) {
        console.warn("Session check failed:", err);
      }
    };

    fetchUser();

    // Listen for OAuth success message from popup
    const handleOAuthMessage = (event: MessageEvent) => {
      const origin = event.origin;
      // Validate origin (allow .run.app and localhost)
      if (!origin.endsWith('.run.app') && !origin.includes('localhost')) {
        return;
      }
      if (event.data?.type === 'OAUTH_AUTH_SUCCESS') {
        const userData = event.data.user;
        setUser({
          name: userData.name || userData.email?.split('@')[0] || 'Explorer',
          email: userData.email || '',
          photo: userData.picture || `https://ui-avatars.com/api/?name=${userData.email}`
        });
        setIsLoginModalOpen(false);
      }
    };

    window.addEventListener('message', handleOAuthMessage);

    return () => {
      lenis.destroy();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('message', handleOAuthMessage);
    };
  }, []);

  const handleLogin = () => {
    setIsLoginModalOpen(true);
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
    } catch (err) {
      console.error("Logout failed:", err);
    }
    setUser(null);
  };

  const navigateToDestination = (dest: Destination) => {
    setSelectedDestinationData(dest);
    setView('destination-detail');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const renderContent = () => {
    switch (view) {
      case 'map':
        return <IslandMapManifold language={language} onSelectDestination={navigateToDestination} />;
      case 'vr-trip':
        return <VRTripFuture language={language} setView={setView} />;
      case 'vr-portal':
        return <VRComingSoon language={language} setView={setView} />;
      case 'trip-planner':
        return <ComingSoonView language={language} setView={setView} title={language === 'EN' ? 'Trip Architect' : 'සංචාරක සැලසුම්කරු'} />;
      case 'community':
      case 'memories':
        return <NexusRewards language={language} user={user} onLogin={handleLogin} setView={setView} />;
      case 'marketplace':
        return <ComingSoonView language={language} setView={setView} title={language === 'EN' ? 'Marketplace' : 'වෙළඳපොළ'} />;
      case 'hotels':
        return <ComingSoonView language={language} setView={setView} title={language === 'EN' ? 'Accommodations' : 'නවාතැන්'} />;
      case 'transport':
        return <ComingSoonView language={language} setView={setView} title={language === 'EN' ? 'Logistics' : 'ප්‍රවාහනය'} />;
      case 'booking-destinations':
        return <ComingSoonView language={language} setView={setView} title={language === 'EN' ? 'Booking' : 'වෙන් කිරීම්'} />;
      case 'shop':
        return <ComingSoonView language={language} setView={setView} title={language === 'EN' ? 'Travel Store' : 'සංචාරක වෙළඳසැල'} />;
      case 'destinations':
        return (
          <div className="pt-24">
            <Destinations 
              language={language} 
              onSelectDestination={navigateToDestination} 
              onBack={() => setView('home')}
            />
          </div>
        );
      case 'destination-detail':
        return <DestinationDetail destination={selectedDestinationData} language={language} onBack={() => setView('destinations')} onSelect={navigateToDestination} />;
      case 'foods':
        return <div className="pt-24"><Foods language={language} onBack={() => setView('home')} /></div>;
      case 'music':
        return <div className="pt-24"><HeritageMusic language={language} onBack={() => setView('home')} /></div>;
      case 'medicine':
        return <div className="pt-24"><TraditionalMedicine language={language} onBack={() => setView('home')} /></div>;
      case 'phrases':
        return <div className="pt-24"><Phrasebook language={language} onBack={() => setView('home')} /></div>;
      case 'essentials':
        return <div className="pt-24"><TravelEssentials language={language} onBack={() => setView('home')} /></div>;
      case 'festivals':
        return <div className="pt-24"><Festivals language={language} onBack={() => setView('home')} /></div>;
      case 'interests':
        return <div className="pt-24"><CategoriesSection language={language} setView={setView} /></div>;
      case 'quiz':
        return <div className="pt-24"><Quiz language={language} setView={setView} /></div>;
      case 'vr-experience':
        return <div className="pt-24"><VRExperience language={language} setView={setView} /></div>;
      case 'vr-showcase':
        return <VRShowcase language={language} setView={setView} />;
      case 'search':
        return <SearchPortal language={language} />;
      case 'contact':
        return <div className="pt-24"><Contact language={language} /></div>;
      case 'home':
      default:
        return (
          <div className="relative">
            <Hero language={language} setView={setView} user={user} />
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <PopularHighlights language={language} onSelectDestination={navigateToDestination} setView={setView} />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="py-12 md:py-20 flex flex-col md:flex-row justify-center bg-white border-y border-gray-100 gap-4 md:gap-8 px-6"
              >
                <button 
                  onClick={() => setView('map')}
                  className="group relative px-8 py-5 md:px-12 md:py-6 bg-[#0a0a0a] text-white rounded-full font-black text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.4em] flex items-center justify-center gap-4 md:gap-6 shadow-2xl hover:scale-105 active:scale-95 transition-all overflow-hidden w-full md:w-auto"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity" />
                  <MapIcon size={18} className="text-cyan-400 group-hover:rotate-12 transition-transform md:w-5 md:h-5" />
                  {UI_STRINGS.initializeMap[language]}
                  <ArrowRight size={14} className="md:w-4 md:h-4" />
                </button>

                <button 
                  onClick={() => setView('trip-planner')}
                  className="group relative px-8 py-5 md:px-12 md:py-6 bg-white text-black border border-black/10 rounded-full font-black text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.4em] flex items-center justify-center gap-4 md:gap-6 shadow-xl hover:scale-105 active:scale-95 transition-all overflow-hidden w-full md:w-auto"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-400 opacity-0 group-hover:opacity-10 transition-opacity" />
                  <Compass size={18} className="text-emerald-600 group-hover:rotate-180 transition-transform duration-1000 md:w-5 md:h-5" />
                  {language === 'EN' ? 'Trip Architect' : 'සංචාරක සැලසුම්කරු'}
                  <ArrowRight size={14} className="md:w-4 md:h-4" />
                </button>
              </motion.div>

              {/* IMPROVED DESTINY SECTION: ARCHIVAL SHARDS GRID (4 COLUMNS PER ROW) */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="py-20 md:py-52 px-4 md:px-6 relative overflow-hidden bg-white"
              >
                <div className="max-w-7xl mx-auto">
                  <div className="relative rounded-[3rem] md:rounded-[6rem] bg-[#0a0a0a] overflow-hidden group/card shadow-[0_30px_100px_rgba(0,0,0,0.3)] md:shadow-[0_60px_150px_rgba(0,0,0,0.3)] border border-white/5">
                    
                    {/* Atmospheric Background Mesh */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
                       <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(225,48,108,0.2)_0%,transparent_50%)]" />
                       <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(14,165,233,0.15)_0%,transparent_50%)]" />
                    </div>

                    <div className="relative z-10 p-6 sm:p-10 md:p-24 space-y-12 md:space-y-20">
                       {/* HEADER CONTENT */}
                       <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-10 border-b border-white/5 pb-10 md:pb-16">
                          <div className="space-y-8 md:space-y-12">
                             <div className="inline-flex items-center gap-3 md:gap-5 px-6 py-2 md:px-8 md:py-3 rounded-full bg-white/10 border border-white/20 text-[#E1306C] text-[9px] md:text-[11px] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] backdrop-blur-xl">
                               <span className="animate-pulse"><Sparkles size={14} className="md:w-[18px] md:h-[18px]" /></span>
                               {language === 'EN' ? 'Personalized Exploration' : 'පුද්ගලීකරණය කළ ගවේෂණය'}
                             </div>
                             
                             <div className="space-y-6 md:space-y-8">
                               <h2 className="text-4xl sm:text-5xl md:text-[8rem] font-heritage font-bold text-white leading-[0.9] md:leading-[0.85] tracking-tighter uppercase mb-2 md:mb-4">
                                  {language === 'EN' ? (
                                    <>Uncover Your <br/><span className="italic insta-text-gradient">Destiny.</span></>
                                  ) : (
                                    <>ඔබේ <span className="insta-text-gradient italic">දෛවය</span> <br/>සොයාගන්න.</>
                                  )}
                               </h2>
                               <p className="text-gray-400 text-lg sm:text-xl md:text-2xl font-light italic leading-relaxed border-l-4 border-[#E1306C]/30 pl-6 md:pl-8">
                                  {language === 'EN' 
                                    ? "Every voyager carries a unique signature. We match your neural archetype to the perfect archival nodes."
                                    : "සෑම සංචාරකයෙකුටම සුවිශේෂී අනන්‍යතාවයක් ඇත. ඔබේ රුචිකත්වයන්ට වඩාත් ගැලපෙන ස්ථාන අපි හඳුනා ගනිමු."}
                               </p>
                             </div>
                          </div>

                          <button 
                            onClick={() => setView('quiz')}
                            className="group relative px-8 py-5 w-full md:w-auto md:px-20 md:py-10 bg-white text-black font-black rounded-[2.5rem] md:rounded-[4rem] hover:scale-105 md:hover:scale-110 active:scale-95 transition-all shadow-[0_20px_60px_rgba(255,255,255,0.1)] md:shadow-[0_40px_100px_rgba(255,255,255,0.1)] flex items-center justify-center gap-4 md:gap-8 overflow-hidden"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-pink-600/10 to-orange-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <Compass size={20} className="relative z-10 text-[#E1306C] group-hover:rotate-180 transition-transform duration-1000 md:w-6 md:h-6" />
                            <span className="relative z-10 uppercase tracking-[0.4em] md:tracking-[0.6em] text-[10px] md:text-[12px]">
                               {UI_STRINGS.startDiscovery[language]}
                            </span>
                          </button>
                       </div>

                       {/* UPGRADED 4-COLUMN SHARDS GRID */}
                       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                          {/* Decorative background script */}
                          <div className="absolute -top-40 -right-40 text-[20rem] font-heritage font-black text-white/[0.01] select-none pointer-events-none rotate-90">
                             {language === 'EN' ? 'ගවේෂණය' : 'DESTINY'}
                          </div>

                          {/* Shard 1: Ancient Path */}
                          <div className="group/shard relative aspect-[3/4] rounded-[3.5rem] overflow-hidden border border-white/10 shadow-2xl transition-all duration-1000 hover:-translate-y-4 hover:border-[#E1306C]/40">
                             <img src="https://i.pinimg.com/736x/0c/d6/36/0cd6364b766c233d0d9f25252fb16d4d.jpg" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000" alt="Ancient" />
                             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                             <div className="absolute top-8 left-8 p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                                <Target size={18} className="text-[#E1306C] animate-pulse" />
                             </div>
                             <div className="absolute bottom-10 left-10 right-10 space-y-2">
                                <p className="text-[9px] font-black uppercase tracking-[0.4em] text-[#E1306C]">Registry_Node_01</p>
                                <h4 className="text-2xl font-heritage font-bold uppercase text-white tracking-widest">{language === 'EN' ? 'Ancient Path' : 'පුරාණ මග'}</h4>
                             </div>
                          </div>

                          {/* Shard 2: Mist Path */}
                          <div className="group/shard relative aspect-[3/4] rounded-[3.5rem] overflow-hidden border border-white/10 shadow-2xl transition-all duration-1000 hover:-translate-y-4 hover:border-cyan-400/40">
                             <img src="https://i.pinimg.com/1200x/47/cc/a0/47cca06e7d0433c00f458f87621f939b.jpg" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000" alt="Mist" />
                             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                             <div className="absolute top-8 left-8 p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                                <Wind size={18} className="text-cyan-400 animate-pulse" />
                             </div>
                             <div className="absolute bottom-10 left-10 right-10 space-y-2">
                                <p className="text-[9px] font-black uppercase tracking-[0.4em] text-cyan-400">Registry_Node_02</p>
                                <h4 className="text-2xl font-heritage font-bold uppercase text-white tracking-widest">{language === 'EN' ? 'Mist Highlands' : 'මීදුම් කඳුකරය'}</h4>
                             </div>
                          </div>

                          {/* Shard 3: Wave Path */}
                          <div className="group/shard relative aspect-[3/4] rounded-[3.5rem] overflow-hidden border border-white/10 shadow-2xl transition-all duration-1000 hover:-translate-y-4 hover:border-blue-400/40">
                             <img src="https://i.pinimg.com/736x/fc/73/a0/fc73a0bd21708eeaa3baf5872482bf25.jpg" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000" alt="Waves" />
                             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                             <div className="absolute top-8 left-8 p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                                <Activity size={18} className="text-blue-400 animate-pulse" />
                             </div>
                             <div className="absolute bottom-10 left-10 right-10 space-y-2">
                                <p className="text-[9px] font-black uppercase tracking-[0.4em] text-blue-400">Registry_Node_03</p>
                                <h4 className="text-2xl font-heritage font-bold uppercase text-white tracking-widest">{language === 'EN' ? 'Azure Waves' : 'නිල්වන් සාගරය'}</h4>
                             </div>
                          </div>

                          {/* Shard 4: Wild Heart */}
                          <div className="group/shard relative aspect-[3/4] rounded-[3.5rem] overflow-hidden border border-white/10 shadow-2xl transition-all duration-1000 hover:-translate-y-4 hover:border-[#10B981]/40">
                             <img src="https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000" alt="Wildlife" />
                             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                             <div className="absolute top-8 left-8 p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                                <PawPrint size={18} className="text-[#10B981] animate-pulse" />
                             </div>
                             <div className="absolute bottom-10 left-10 right-10 space-y-2">
                                <p className="text-[9px] font-black uppercase tracking-[0.4em] text-[#10B981]">Registry_Node_04</p>
                                <h4 className="text-2xl font-heritage font-bold uppercase text-white tracking-widest">{language === 'EN' ? 'Wild Heart' : 'වනගත ජීවය'}</h4>
                             </div>
                          </div>
                       </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <StorySection language={language} setView={setView} />
              </motion.div>
            </div>
          </div>
        );
    }
  };

  return (
    <Layout language={language} setLanguage={setLanguage} setView={(v: any) => setView(v)} currentView={view} user={user} onLogin={handleLogin} onLogout={handleLogout}>
      <div className="overflow-x-hidden transition-all duration-300">
        {renderContent()}
      </div>
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} language={language} />
      <AIModal language={language} />
      <ScrollControls />
    </Layout>
  );
}
