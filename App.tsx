import React, { useState, useEffect } from 'react';
import { Language, User, View } from './types';
import Layout from './components/Layout';
import Hero from './components/Hero';

export default function App() {
  const [language, setLanguage] = useState<Language>('EN');
  const [view, setView] = useState<View>('home');
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = () => {
    // Implement login logic
  };

  const handleLogout = () => {
    setUser(null);
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
      {view === 'home' && <Hero language={language} setView={setView} user={user} />}
      {/* Add other views here as needed */}
    </Layout>
  );
}
