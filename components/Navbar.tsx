
import React, { useState, useEffect } from 'react';
import { Language, User } from '../types';
import { 
  Globe, 
  User as UserIcon, 
  LogOut, 
  Menu, 
  X, 
  Heart, 
  ShoppingCart, 
  Search, 
  Compass, 
  Map, 
  Radio, 
  ChevronRight, 
  Library, 
  ChevronDown, 
  Box, 
  Zap, 
  Landmark, 
  Calendar,
  Utensils,
  Music,
  Palette,
  Activity,
  Languages,
  Sprout,
  Mountain,
  Backpack,
  ShieldCheck,
  Briefcase,
  Building2,
  Car,
  Route,
  Orbit,
  Atom,
  Mail,
  Calculator
} from 'lucide-react';
import { UI_STRINGS } from '../constants';
import Logo from './Logo';

interface NavItem {
  id: string;
  label: { EN: string; SI: string };
  icon?: React.ReactNode;
  hasDropdown?: boolean;
  items?: { id: string; label: { EN: string; SI: string }; icon: React.ReactNode }[];
}

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  setView: (view: any) => void;
  currentView: string;
  user: User | null;
  onLogin: () => void;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  language, 
  setLanguage, 
  setView, 
  currentView,
  user,
  onLogin,
  onLogout
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    let lastState = false;
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      if (scrolled !== lastState) {
        lastState = scrolled;
        setIsScrolled(scrolled);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: NavItem[] = [
    { id: 'destinations', label: { EN: 'Destinations', SI: 'ගමනාන්ත' }, icon: <Map size={14} /> },
    { 
      id: 'heritage', 
      label: { EN: 'Heritage', SI: 'උරුමය' }, 
      icon: <Landmark size={14} />,
      hasDropdown: false
    },
    { 
      id: 'booking-nav', 
      label: { EN: 'Booking', SI: 'ඇණවුම්' }, 
      icon: <Briefcase size={14} />,
      hasDropdown: true,
      items: [
        { id: 'marketplace', label: { EN: 'Packages', SI: 'පැකේජ' }, icon: <Box size={14} /> },
        { id: 'hotels', label: { EN: 'Hotels', SI: 'හෝටල්' }, icon: <Building2 size={14} /> },
        { id: 'transport', label: { EN: 'Transport', SI: 'ප්‍රවාහනය' }, icon: <Car size={14} /> },
        { id: 'booking-destinations', label: { EN: 'Routes', SI: 'මංපෙත්' }, icon: <Route size={14} /> },
      ]
    },
    { id: 'community', label: { EN: 'Memories', SI: 'මතකයන්' }, icon: <Heart size={14} /> },
    { id: 'shop', label: { EN: 'Store', SI: 'භාණ්ඩ' }, icon: <ShoppingCart size={14} /> },
    { id: 'vr-trip', label: { EN: 'VR Trip', SI: 'VR චාරිකාව' }, icon: <Zap size={14} className="text-[#E1306C]" /> },
    { id: 'contact', label: { EN: 'Contact', SI: 'සම්බන්ධ වන්න' }, icon: <Mail size={14} /> },
  ];

  const handleNav = (id: string) => {
    setView(id);
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 w-[92%] md:w-[96%] max-w-7xl bg-white border border-gray-100 rounded-full shadow-[0_25px_60px_rgba(0,0,0,0.08)] ${isScrolled ? 'py-1 px-3 md:px-5' : 'py-1.5 px-3 md:py-2.5 md:px-8'}`}>
      <div className="flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-2 md:gap-3 cursor-pointer group shrink-0" onClick={() => handleNav('home')}>
          <div className="scale-100 md:scale-110">
            <Logo />
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => (
            <div 
              key={link.id} 
              className="relative"
              onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.id)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNav(link.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-[7.5px] xl:text-[9px] font-black uppercase tracking-wider transition-all duration-500 relative group/link whitespace-nowrap ${
                  currentView === link.id || (link.hasDropdown && link.items?.some(i => i.id === currentView))
                    ? 'bg-black/5 text-[#0a0a0a]' 
                    : 'text-gray-600 hover:text-[#0a0a0a] hover:bg-black/5'
                }`}
              >
                <span className="opacity-70 group-hover/link:opacity-100 transition-opacity scale-90">{link.icon}</span>
                {link.label[language]}
                {link.hasDropdown && <ChevronDown size={10} className={`transition-transform duration-300 ${activeDropdown === link.id ? 'rotate-180' : ''}`} />}
              </button>

              {/* Dropdown Menu */}
              {link.hasDropdown && activeDropdown === link.id && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 pt-4 animate-in fade-in slide-in-from-top-4 duration-300 z-[1000]">
                  <div className="bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden p-3">
                    <div className="grid grid-cols-1 gap-1.5">
                      {link.items?.map((subItem) => (
                        <button
                          key={subItem.id}
                          onClick={() => handleNav(subItem.id)}
                          className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-[11px] font-bold uppercase tracking-widest transition-all ${
                            currentView === subItem.id ? 'bg-[#0EA5E9]/10 text-[#0EA5E9]' : 'text-gray-600 hover:bg-gray-100 hover:text-[#0a0a0a]'
                          }`}
                        >
                          <span className="opacity-80 scale-100">{subItem.icon}</span>
                          {subItem.label[language]}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
          
          <div className="h-8 w-px bg-gray-100 mx-2" />

          <div className="flex items-center gap-1">
            <button 
              onClick={() => setLanguage(language === 'EN' ? 'SI' : 'EN')} 
              className="group flex items-center gap-1.5 px-1.5 py-1.5 rounded-xl border border-[#0EA5E9]/20 text-[7.5px] xl:text-[8.5px] font-black uppercase tracking-widest bg-white text-gray-600 hover:bg-[#0EA5E9] hover:text-white hover:border-transparent transition-all shadow-sm"
              title={language === 'EN' ? "Switch to Sinhala Vision" : "ආපසු ඉංග්‍රීසි දැක්මට"}
            >
              <Globe size={10} className={`${language === 'EN' ? 'text-[#0EA5E9]' : 'text-white'} group-hover:text-white transition-colors`} />
              {language === 'EN' ? 'SI' : 'EN'}
            </button>

            {user ? (
              <button onClick={() => handleNav('profile')} className="w-7 h-7 rounded-full border-2 border-white shadow-lg overflow-hidden group">
                 <img src={user.photo} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
              </button>
            ) : (
              <button onClick={onLogin} className="px-3 py-1.5 bg-[#0a0a0a] text-white rounded-full text-[7.5px] xl:text-[8.5px] font-black uppercase tracking-[0.1em] hover:scale-105 active:scale-95 transition-all shadow-md">
                {UI_STRINGS.registry[language]}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-1.5 md:p-3 rounded-xl md:rounded-2xl bg-gray-100 border border-gray-200 text-[#0a0a0a]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={18} className="md:w-[22px] md:h-[22px]" /> : <Menu size={18} className="md:w-[22px] md:h-[22px]" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="absolute left-0 right-0 top-full mt-2 md:mt-4 bg-white/95 backdrop-blur-3xl rounded-[2rem] md:rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.2)] border border-gray-200/50 p-4 md:p-8 flex flex-col gap-4 md:gap-8 animate-in slide-in-from-top-4 duration-500 max-h-[85vh] overflow-y-auto w-full">
          {/* Header Identity in Mobile Menu */}
          <div className="flex items-center gap-3 md:gap-5 px-4 py-3 md:px-6 md:py-4 bg-gray-50 rounded-[1.5rem] md:rounded-[2.5rem] shadow-sm shrink-0 border border-gray-100">
             <Logo />
          </div>

          <div className="space-y-2 md:space-y-4 overflow-y-auto pr-2">
            {navLinks.map((link) => (
              <div key={link.id} className="space-y-1 md:space-y-3">
                <button
                  onClick={() => {
                    if (link.hasDropdown) {
                      setActiveDropdown(activeDropdown === link.id ? null : link.id);
                    } else {
                      handleNav(link.id);
                    }
                  }}
                  className={`w-full flex items-center justify-between p-3 md:p-6 rounded-[1.25rem] md:rounded-[2.5rem] transition-all duration-300 border ${
                    currentView === link.id || (link.hasDropdown && link.items?.some(i => i.id === currentView))
                      ? 'bg-[#0a0a0a] text-white border-transparent shadow-xl scale-[1.02]' 
                      : 'bg-gray-50 text-gray-600 border-gray-100 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center gap-3 md:gap-6">
                    <span className={currentView === link.id ? 'text-[#0EA5E9]' : ''}>{link.icon}</span>
                    <span className="text-sm md:text-lg font-heritage font-bold uppercase tracking-widest">{link.label[language]}</span>
                  </div>
                  {link.hasDropdown && <ChevronDown size={16} className={`md:w-5 md:h-5 ${activeDropdown === link.id ? 'rotate-180 transition-transform' : 'transition-transform'}`} />}
                </button>

                {link.hasDropdown && activeDropdown === link.id && (
                  <div className="grid grid-cols-2 gap-2 md:gap-3 px-1 md:px-2 py-1">
                    {link.items?.map((subItem) => (
                      <button
                        key={subItem.id}
                        onClick={() => handleNav(subItem.id)}
                        className={`flex items-center gap-2 md:gap-4 p-3 md:p-5 rounded-xl md:rounded-2xl text-[9px] md:text-[10px] font-black uppercase tracking-[0.1em] md:tracking-[0.2em] transition-all border ${
                          currentView === subItem.id 
                            ? 'bg-[#0EA5E9]/10 text-[#0EA5E9] border-[#0EA5E9]/30 shadow-sm' 
                            : 'bg-white text-gray-500 border-gray-100 hover:text-gray-800 hover:bg-gray-50 shadow-sm'
                        }`}
                      >
                        <span className="opacity-70 scale-90 md:scale-100">{subItem.icon}</span>
                        <span className="truncate">{subItem.label[language]}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pt-3 md:pt-6 border-t border-gray-200 flex flex-col gap-3 md:gap-4 shrink-0">
             <div className="grid grid-cols-2 gap-2 md:gap-4">
                <button 
                  onClick={() => { setLanguage(language === 'EN' ? 'SI' : 'EN'); setIsMenuOpen(false); }} 
                  className="py-3 md:py-6 rounded-[1.25rem] md:rounded-[2.5rem] bg-blue-50 border border-blue-100 text-blue-600 font-black text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] flex items-center justify-center gap-2 md:gap-4 hover:bg-blue-100 transition-all shadow-sm"
                >
                  <Globe size={14} className="md:w-[18px] md:h-[18px] text-blue-600" />
                  {language === 'EN' ? 'Sinhala Vision' : 'English View'}
                </button>

                {user ? (
                  <button 
                    onClick={onLogout} 
                    className="py-3 md:py-6 bg-red-50 border border-red-100 text-red-600 rounded-[1.25rem] md:rounded-[2.5rem] font-black text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] hover:bg-red-100 transition-all shadow-sm"
                  >
                    {language === 'EN' ? 'DISCONNECT' : 'විසන්ධි වන්න'}
                  </button>
                ) : (
                  <button 
                    onClick={onLogin} 
                    className="py-3 md:py-6 bg-[#0a0a0a] text-white rounded-[1.25rem] md:rounded-[2.5rem] font-black text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] shadow-xl hover:scale-105 active:scale-95 transition-all"
                  >
                    {language === 'EN' ? 'SYNC_REGISTRY' : 'පද්ධතියට_එක්වන්න'}
                  </button>
                )}
             </div>
             
             {/* Decorative Footer info */}
             <div className="flex justify-center items-center gap-3 pt-2 opacity-40">
                <span className="text-[8px] md:text-[9px] font-black text-gray-500 uppercase tracking-[0.4em] md:tracking-[0.6em]">
                  {language === 'EN' ? 'Travel Hub Sri Lanka' : 'ට්‍රැවල් හබ් ශ්‍රී ලංකා'}
                </span>
             </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
