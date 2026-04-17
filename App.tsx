import React, { useState, useEffect, useMemo, Suspense, lazy, useRef } from 'react';
import { motion } from 'framer-motion';
import { Language, User, Destination, View } from './types';
import Layout from './components/Layout';
import Hero from './components/Hero';
import PopularHighlights from './components/PopularHighlights';
import DiscoveryTransition from './components/DiscoveryTransition';
import DestinySection from './components/DestinySection';
import { SEO } from './components/SEO';
import GoogleAnalytics from './components/GoogleAnalytics';
import { ErrorBoundary } from './components/ErrorBoundary';
import LoginModal from './components/LoginModal';
import AIModal from './components/AIModal';
import ScrollControls from './components/ScrollControls';
import Lenis from 'lenis';
import { UI_STRINGS, DESTINATIONS as DESTINATIONS_DATA } from './constants';
import { Sparkles, Compass, ShieldCheck, Star, MapPin, ArrowRight, Database, Box, Layers, Zap, Lock, Scan, Map as MapIcon, Heart, Globe, Library, Wind, Activity, Target, PawPrint, Landmark, Sprout, Mountain } from 'lucide-react';
import { auth, db } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';

const Destinations = lazy(() => import('./components/Destinations').then(module => ({ default: module.default })));
const Foods = lazy(() => import('./components/Foods'));
const HeritageMusic = lazy(() => import('./components/HeritageMusic'));
const TraditionalMedicine = lazy(() => import('./components/TraditionalMedicine'));
const ArtsAndCrafts = lazy(() => import('./components/ArtsAndCrafts').then(module => ({ default: module.ArtsAndCrafts })));
const Heritage = lazy(() => import('./components/Heritage'));
const Phrasebook = lazy(() => import('./components/Phrasebook'));
const TravelEssentials = lazy(() => import('./components/TravelEssentials'));
const Festivals = lazy(() => import('./components/Festivals'));
const CategoriesSection = lazy(() => import('./components/CategoriesSection'));
const StorySection = lazy(() => import('./components/StorySection'));
const IslandMapManifold = lazy(() => import('./components/IslandMapManifold'));
const VRPortal = lazy(() => import('./components/VRPortal'));
const NexusRewards = lazy(() => import('./components/NexusRewards'));
import DestinationDetail from './components/DestinationDetail';
const Quiz = lazy(() => import('./components/Quiz'));
const ProfileView = lazy(() => import('./components/ProfileView'));
const VRExperience = lazy(() => import('./components/VRExperience'));
const VRShowcase = lazy(() => import('./components/VRShowcase'));
const SearchPortal = lazy(() => import('./components/SearchPortal'));
const Contact = lazy(() => import('./components/Contact'));
const LockedView = lazy(() => import('./components/LockedView'));
const ComingSoonView = lazy(() => import('./components/ComingSoonView'));
const Marketplace = lazy(() => import('./components/Marketplace'));
const Hotels = lazy(() => import('./components/Hotels'));
const Transport = lazy(() => import('./components/Transport'));
const BookingDestinations = lazy(() => import('./components/BookingDestinations'));
const TravelStore = lazy(() => import('./components/TravelStore'));

export default function App() {
  const [language, setLanguage] = useState<Language>('EN');
  const [view, setView] = useState<View>('home');
  const [user, setUser] = useState<User | null>(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const [selectedDestinationData, setSelectedDestinationData] = useState<Destination | null>(null);
  const [isAuthReady, setIsAuthReady] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [view]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    
    // Add mobile-specific performance class to body
    if (isMobile) {
      document.body.classList.add('is-mobile');
    }

    // Disable Lenis smooth scrolling on mobile for better performance
    let rafId: number;

    if (!isMobile) {
      lenisRef.current = new Lenis({
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
        lenisRef.current?.raf(time);
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
    
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        // Initial user state from Auth
        setUser({
          uid: firebaseUser.uid,
          name: firebaseUser.displayName || firebaseUser.email?.split('@')[0] || 'Explorer',
          email: firebaseUser.email || '',
          photo: firebaseUser.photoURL || `https://ui-avatars.com/api/?name=${firebaseUser.email}`
        });

        // Listen to user document in Firestore for additional data like explorerProfileId
        const userRef = doc(db, 'users', firebaseUser.uid);
        const unsubUser = onSnapshot(userRef, (docSnap) => {
          if (docSnap.exists()) {
            const data = docSnap.data();
            setUser(prev => prev ? {
              ...prev,
              name: data.name || prev.name,
              photo: data.photo || prev.photo,
              explorerProfileId: data.explorerProfileId
            } : null);
          }
        });

        return () => {
          unsubUser();
        };
      } else {
        setUser(null);
      }
      setIsAuthReady(true);
    });

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
      window.removeEventListener('scroll', handleScroll);
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const path = window.location.pathname.slice(1);
    if (path) {
      if (path.startsWith('destinations/')) {
        const destId = path.split('/')[1];
        const found = DESTINATIONS_DATA.find(d => d.id === destId);
        if (found) {
          setSelectedDestinationData(found);
          setView('destination-detail');
        }
      } else if (['destinations', 'foods', 'festivals', 'heritage', 'vr-trip', 'medicine', 'arts-crafts', 'music', 'phrases', 'essentials', 'quiz', 'profile', 'interests', 'search', 'contact', 'about'].includes(path)) {
        setView(path as View);
      }
    }

    const handlePopState = () => {
      const newPath = window.location.pathname.slice(1);
      if (newPath.startsWith('destinations/')) {
        const destId = newPath.split('/')[1];
        const found = DESTINATIONS_DATA.find(d => d.id === destId);
        if (found) {
          setSelectedDestinationData(found);
          setView('destination-detail');
        }
      } else {
        setView((newPath as View) || 'home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const path = view === 'home' ? '/' : `/${view}`;
    const finalPath = view === 'destination-detail' && selectedDestinationData 
      ? `/destinations/${selectedDestinationData.id}` 
      : path;
    
    if (window.location.pathname !== finalPath) {
      window.history.pushState(null, '', finalPath);
    }
  }, [view, selectedDestinationData]);

  const handleLogin = () => {
    setIsLoginModalOpen(true);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const navigateToDestination = (dest: Destination | string) => {
    if (typeof dest === 'string') {
      const found = DESTINATIONS_DATA.find(d => d.id === dest);
      if (found) {
        setSelectedDestinationData(found);
        setView('destination-detail');
      } else if (['foods', 'music', 'arts-crafts', 'medicine', 'phrases', 'essentials', 'festivals', 'quiz'].includes(dest)) {
        setView(dest as View);
      }
    } else {
      setSelectedDestinationData(dest);
      setView('destination-detail');
    }
    
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  const renderContent = () => {
    switch (view) {
      case 'map':
        return <IslandMapManifold language={language} onSelectDestination={navigateToDestination} />;
      case 'vr-trip':
        return <VRPortal language={language} setView={setView} />;
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
      case 'heritage':
        return <div className="pt-0"><Heritage language={language} setView={setView} onBack={() => setView('home')} /></div>;
      case 'destination-detail':
        return <DestinationDetail destination={selectedDestinationData} language={language} onBack={() => setView('destinations')} onSelect={navigateToDestination} />;
      case 'foods':
        return <div className="pt-24"><Foods language={language} onBack={() => setView('home')} /></div>;
      case 'music':
        return <div className="pt-24"><HeritageMusic language={language} onBack={() => setView('home')} /></div>;
      case 'medicine':
        return <div className="pt-24"><TraditionalMedicine language={language} onBack={() => setView('home')} /></div>;
      case 'arts-crafts':
        return <div className="pt-24"><ArtsAndCrafts language={language} onBack={() => setView('home')} /></div>;
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
      case 'profile':
        return <ProfileView language={language} user={user} onLogout={handleLogout} setView={setView} />;
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
              <DiscoveryTransition language={language} />
              
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
                className="py-12 md:py-32 flex flex-col md:flex-row justify-center bg-stone-50 border-y border-stone-200 gap-6 md:gap-12 px-8"
              >
                <button 
                  onClick={() => setView('map')}
                  className="group relative px-8 py-5 md:px-16 md:py-8 bg-black text-white rounded-full font-black text-[10px] md:text-[12px] uppercase tracking-[0.6em] flex items-center justify-center gap-6 shadow-2xl hover:scale-105 active:scale-95 transition-all overflow-hidden w-full md:w-auto"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity" />
                  <MapIcon size={18} className="text-cyan-400 group-hover:rotate-12 transition-transform" />
                  {UI_STRINGS.initializeMap[language]}
                </button>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <DestinySection language={language} setView={setView} />
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

  const getMetaTitle = (view: string): string => {
    if (view === 'destination-detail' && selectedDestinationData) {
      return `${selectedDestinationData.name[language]} | Travel Hub Sri Lanka`;
    }

    const titles: Record<string, string> = {
      home: "Nearby Places - Sri Lanka | Your Ultimate Guide to an Unforgettable Journey",
      foods: "Traditional Sri Lankan Cuisine | Culinary Journey with Travel Hub",
      festivals: "Cultural Festivals of Sri Lanka | Experience the Vibrant Traditions",
      destinations: "Best Places to Visit in Sri Lanka | Travel Hub Destinations",
      heritage: "Cultural Heritage of Sri Lanka | Discover Ancient Temples & History",
      booking: "Book Your Sri Lankan Getaway | Tours, Hotels & Experiences",
      memories: "Travel Memories | Relive Your Sri Lankan Adventures",
      shop: "Travel Hub Store | Authentic Sri Lankan Handicrafts & Souvenirs",
      "vr-trip": "Virtual Reality Sri Lanka Tour | Immersive Travel Experience",
      "vr-experience": "VR Experience | Immersive Sri Lankan Travel",
      "vr-showcase": "VR Showcase | Discover Sri Lanka in 360",
      search: "Search Sri Lanka | Find Your Next Adventure",
      contact: "Contact Travel Hub Sri Lanka | Expert Travel Advice & Support",
      about: "About Travel Hub Sri Lanka | Showcasing the Beauty of Our Island",
      medicine: "Traditional Sri Lankan Medicine | Ancient Healing & Wellness",
      "arts-crafts": "Arts & Crafts of Sri Lanka | Celebrate Our Artistic Spirit",
      music: "Traditional Music of Sri Lanka | Listen to the Soul of Our Island",
      phrases: "Sri Lankan Phrasebook | Learn Essential Sinhala Phrases",
      essentials: "Travel Essentials | Plan Your Trip to Sri Lanka",
      trip: "Plan your journey with our trip tools",
      quiz: "Travel Quiz | Discover Your Sri Lankan Explorer Profile",
      profile: "Your Profile | Travel Hub Sri Lanka",
      interests: "Travel Interests | Customize Your Sri Lankan Journey"
    };
    return titles[view] || "Travel Hub Sri Lanka | Discover the Beauty of Our Island";
  };

  const getMetaDescription = (view: string): string => {
    if (view === 'destination-detail' && selectedDestinationData) {
      return selectedDestinationData.shortStory[language] || `Explore ${selectedDestinationData.name[language]} with Travel Hub Sri Lanka. Discover history, tips, and hidden echoes.`;
    }

    const descriptions: Record<string, string> = {
      home: "Discover the beauty of Sri Lanka with Travel Hub. Explore destinations, culture, food, festivals, heritage, and more. Your ultimate guide to an unforgettable Sri Lankan journey.",
      foods: "Embark on a culinary journey through Sri Lanka. Explore our comprehensive guide to traditional Sri Lankan cuisine, from authentic spicy curries and fragrant rice dishes to popular street food, sweet treats, and unique culinary experiences found across the island.",
      festivals: "Experience the vibrant cultural tapestry of Sri Lanka through our comprehensive guide to traditional festivals. From the grandeur of the Esala Perahera in Kandy to the sacred rituals of Poson and Vesak.",
      destinations: "Explore the diverse landscapes of Sri Lanka. From ancient rock fortresses like Sigiriya to the misty highlands of Ella and pristine beaches, discover the best places to visit in Sri Lanka.",
      heritage: "Immerse yourself in the rich cultural heritage of Sri Lanka. Discover ancient temples, historical sites, traditional arts, and the deep-rooted traditions that define our island nation.",
      shop: "Bring a piece of Sri Lanka home. Shop for authentic Sri Lankan handicrafts, souvenirs, and traditional products at the Travel Hub store.",
      "vr-trip": "Experience Sri Lanka like never before. Take an immersive virtual reality tour of our most iconic destinations and landmarks from the comfort of your home.",
      search: "Search for destinations, food, culture, and more in Sri Lanka. Find exactly what you're looking for with Travel Hub's search portal.",
      contact: "Get in touch with Travel Hub. Have questions about your Sri Lankan trip? Contact our team for expert travel advice, support, and assistance.",
      about: "Learn more about Travel Hub Sri Lanka. We are dedicated to showcasing the true beauty, culture, and spirit of our island to travelers from around the world.",
      medicine: "Discover the ancient wisdom of Sri Lankan traditional medicine. Explore the healing practices, herbal remedies, and holistic wellness traditions of our island.",
      "arts-crafts": "Celebrate the artistic spirit of Sri Lanka. Discover traditional handicrafts, intricate carvings, vibrant paintings, and the skilled artisans who keep our cultural heritage alive.",
      music: "Listen to the soul of Sri Lanka. Explore our traditional music, rhythmic drumming, and the melodic heritage that echoes through our island's history.",
      phrases: "Learn essential Sinhala phrases for your trip to Sri Lanka. Our phrasebook covers greetings, dining, shopping, and emergencies.",
      essentials: "Everything you need to know before traveling to Sri Lanka. Visas, currency, weather, and practical tips for a smooth journey.",
      quiz: "Take our travel quiz to find your perfect Sri Lankan explorer profile and get personalized destination recommendations.",
      profile: "Manage your Travel Hub profile, view your memories, and track your Sri Lankan travel journey.",
      interests: "Customize your Sri Lankan adventure by exploring different travel categories and interests."
    };
    return descriptions[view] || "Discover the beauty of Sri Lanka with Travel Hub. Explore destinations, culture, food, and more.";
  };

  const getMetaKeywords = (view: string): string => {
    const baseKeywords = "Sri Lanka travel, Sri Lanka tourism, visit Sri Lanka, Sri Lanka destinations, Sri Lanka culture, Sri Lanka food, Sri Lanka heritage";
    
    if (view === 'destination-detail' && selectedDestinationData) {
      return `${selectedDestinationData.name[language]}, ${selectedDestinationData.category}, ${baseKeywords}`;
    }

    const keywords: Record<string, string> = {
      home: "Nearby Places Sri Lanka, Sri Lanka travel guide, best places in Sri Lanka, Sri Lanka tour, Travel Hub Sri Lanka",
      foods: "Sri Lankan food, traditional Sri Lankan cuisine, Ceylon spices, Sri Lankan recipes, street food Sri Lanka",
      festivals: "Sri Lankan festivals, Esala Perahera, Vesak Sri Lanka, cultural events Sri Lanka",
      destinations: "Sri Lanka tourist attractions, Sigiriya, Ella, Galle, Yala safari, Kandy",
      heritage: "Sri Lanka history, ancient cities Sri Lanka, UNESCO sites Sri Lanka, Buddhist temples",
      shop: "Sri Lankan souvenirs, handicrafts Sri Lanka, Ceylon tea, traditional masks Sri Lanka",
      "vr-trip": "virtual tour Sri Lanka, 360 travel Sri Lanka, immersive Sri Lanka experience",
      medicine: "Ayurveda Sri Lanka, traditional healing, herbal medicine Sri Lanka, wellness Sri Lanka",
      "arts-crafts": "Sri Lankan art, traditional crafts, wood carving Sri Lanka, lace making",
      music: "Sri Lankan music, traditional drums, Baila, cultural music Sri Lanka",
      phrases: "learn Sinhala, Sri Lankan language, basic Sinhala for travelers",
      essentials: "Sri Lanka visa, travel tips Sri Lanka, currency Sri Lanka, weather Sri Lanka"
    };

    return keywords[view] ? `${keywords[view]}, ${baseKeywords}` : baseKeywords;
  };

  const destinationItemList = useMemo(() => {
    if (view === 'destinations') {
      return DESTINATIONS_DATA.map(dest => ({
        name: dest.name[language],
        url: `https://www.travelhubsrilanka.space/destinations/${dest.id}`
      }));
    }
    return undefined;
  }, [view, language]);

  return (
    <ErrorBoundary>
      <Layout language={language} setLanguage={setLanguage} setView={(v: any) => setView(v)} currentView={view} user={user} onLogin={handleLogin} onLogout={handleLogout}>
        <SEO 
          title={getMetaTitle(view)} 
          description={getMetaDescription(view)} 
          language={language}
          keywords={getMetaKeywords(view)}
          image={view === 'destination-detail' && selectedDestinationData ? selectedDestinationData.image : undefined}
          url={view === 'destination-detail' && selectedDestinationData ? `https://www.travelhubsrilanka.space/destinations/${selectedDestinationData.id}` : undefined}
          touristAttraction={view === 'destination-detail' && selectedDestinationData ? {
            name: selectedDestinationData.name[language],
            description: selectedDestinationData.shortStory[language],
            image: selectedDestinationData.image,
            address: selectedDestinationData.location
          } : undefined}
          itemList={destinationItemList}
        />
        <GoogleAnalytics view={view} />
        <div className="overflow-x-hidden transition-all duration-300 mobile-optimize">
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-stone-50"></div>}>
            {renderContent()}
          </Suspense>
        </div>
        <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} language={language} />
        <AIModal language={language} onNavigate={navigateToDestination} />
        <ScrollControls />
      </Layout>
    </ErrorBoundary>
  );
}
