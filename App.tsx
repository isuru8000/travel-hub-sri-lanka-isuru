import React, { useState, useEffect } from 'react';
import { Language, User, View, Destination } from './types';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import DestinationDetail from './components/DestinationDetail';
import IslandMapManifold from './components/IslandMapManifold';
import Hotels from './components/Hotels';
import Transport from './components/Transport';
import BookingDestinations from './components/BookingDestinations';
import ComingSoonView from './components/ComingSoonView';
import Foods from './components/Foods';
import HeritageMusic from './components/HeritageMusic';
import { ArtsAndCrafts } from './components/ArtsAndCrafts';
import TraditionalMedicine from './components/TraditionalMedicine';
import Phrasebook from './components/Phrasebook';
import TravelEssentials from './components/TravelEssentials';
import Festivals from './components/Festivals';
import FavoritesView from './components/FavoritesView';
import Quiz from './components/Quiz';
import VRExperience from './components/VRExperience';
import VRShowcase from './components/VRShowcase';
import SearchPortal from './components/SearchPortal';
import Contact from './components/Contact';
import Marketplace from './components/Marketplace';
import TravelStore from './components/TravelStore';
import VRPortal from './components/VRPortal';
import TripPlanner from './components/TripPlanner';

export default function App() {
  const [language, setLanguage] = useState<Language>('EN');
  const [view, setView] = useState<View>('home');
  const [user, setUser] = useState<User | null>(null);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  const handleLogin = () => {
    // Implement login logic
    setUser({
      name: 'Guest Explorer',
      email: 'guest@example.com',
      photo: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100'
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleSelectDestination = (dest: Destination) => {
    setSelectedDestination(dest);
    setView('destination-detail');
    window.scrollTo(0, 0);
  };

  const renderView = () => {
    switch (view) {
      case 'home':
        return <Hero language={language} setView={setView} user={user} />;
      case 'destinations':
        return <Destinations language={language} onSelectDestination={handleSelectDestination} onBack={() => setView('home')} />;
      case 'destination-detail':
        return selectedDestination ? (
          <DestinationDetail 
            destination={selectedDestination} 
            language={language} 
            onBack={() => setView('destinations')} 
            onSelect={handleSelectDestination}
          />
        ) : <Destinations language={language} onSelectDestination={handleSelectDestination} onBack={() => setView('home')} />;
      case 'map':
        return <IslandMapManifold language={language} onSelectDestination={handleSelectDestination} />;
      case 'hotels':
        return <Hotels language={language} onBack={() => setView('home')} />;
      case 'transport':
        return <Transport language={language} onBack={() => setView('home')} />;
      case 'booking-destinations':
        return <BookingDestinations language={language} onBack={() => setView('home')} />;
      case 'foods':
        return <Foods language={language} onBack={() => setView('home')} />;
      case 'music':
        return <HeritageMusic language={language} onBack={() => setView('home')} />;
      case 'arts-crafts':
        return <ArtsAndCrafts language={language} onBack={() => setView('home')} />;
      case 'medicine':
        return <TraditionalMedicine language={language} onBack={() => setView('home')} />;
      case 'phrases':
        return <Phrasebook language={language} onBack={() => setView('home')} />;
      case 'essentials':
        return <TravelEssentials language={language} onBack={() => setView('home')} />;
      case 'festivals':
        return <Festivals language={language} onBack={() => setView('home')} />;
      case 'memories':
      case 'community':
        return <FavoritesView language={language} onBack={() => setView('home')} />;
      case 'quiz':
        return <Quiz language={language} setView={setView} onBack={() => setView('home')} />;
      case 'vr-trip':
      case 'vr-experience':
        return <VRExperience language={language} setView={setView} onBack={() => setView('home')} />;
      case 'vr-showcase':
        return <VRShowcase language={language} onBack={() => setView('home')} />;
      case 'search':
        return <SearchPortal language={language} onBack={() => setView('home')} />;
      case 'contact':
        return <Contact language={language} onBack={() => setView('home')} />;
      case 'marketplace':
        return <Marketplace language={language} onBack={() => setView('home')} />;
      case 'shop':
        return <TravelStore language={language} onBack={() => setView('home')} />;
      case 'vr-portal':
        return <VRPortal language={language} setView={setView} onBack={() => setView('home')} />;
      case 'trip-planner':
        return <TripPlanner language={language} setView={setView} onSelectDestination={(dest) => { setSelectedDestination(dest); setView('destination'); }} onBack={() => setView('home')} />;
      case 'about':
        return <ComingSoonView language={language} title="About Us" setView={setView} onBack={() => setView('home')} />;
      case 'privacy':
        return <ComingSoonView language={language} title="Privacy Policy" setView={setView} onBack={() => setView('home')} />;
      default:
        return <ComingSoonView language={language} setView={setView} onBack={() => setView('home')} />;
    }
  };

  return (
    <Layout 
      language={language} 
      setLanguage={setLanguage} 
      setView={setView} 
      currentView={view} 
      user={user}
      onLogin={handleLogin}
      onLogout={handleLogout}
    >
      {renderView()}
    </Layout>
  );
}
