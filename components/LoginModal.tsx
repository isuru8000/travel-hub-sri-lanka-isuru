
import React, { useState } from 'react';
import { X, Globe, Chrome, ShieldCheck, Info, Loader2, AlertCircle } from 'lucide-react';
import { Language } from '../types.ts';
import { supabase, IS_MOCK_AUTH } from '../lib/supabase.ts';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, language }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // 1. Fetch the OAuth URL from our server
      const response = await fetch('/api/auth/google/url');
      if (!response.ok) throw new Error('Failed to get auth URL');
      const { url } = await response.json();

      // 2. Open the Google OAuth URL directly in a popup
      const authWindow = window.open(
        url,
        'google_oauth_popup',
        'width=600,height=700'
      );

      if (!authWindow) {
        throw new Error('Popup blocked. Please allow popups for this site.');
      }

      // The success message will be handled by the listener in App.tsx or here
      // Let's add a listener here as well for immediate feedback if needed, 
      // but App.tsx is better for global state.
      
    } catch (err: any) {
      console.error("Authentication Error:", err);
      setError(err.message || (language === 'EN' 
        ? "Could not establish a secure handshake with the identity provider." 
        : "අනන්‍යතා සේවාව සමඟ සම්බන්ධ වීමට නොහැකි විය."));
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 animate-in fade-in duration-300">
      <div className="absolute inset-0 bg-[#0a0a0a]/80 backdrop-blur-md" onClick={onClose} />
      
      <div className="relative w-full max-w-md bg-white rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.5)] overflow-hidden animate-in zoom-in-95 duration-500 border border-gray-100">
        <div className="absolute inset-0 pattern-overlay opacity-[0.03] pointer-events-none" />
        
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 p-2 text-gray-400 hover:text-black hover:bg-gray-100 rounded-full transition-all z-10"
        >
          <X size={20} />
        </button>

        <div className="p-12 space-y-10">
          <div className="text-center space-y-4">
            <div className="w-20 h-20 story-ring p-1 rounded-3xl mx-auto shadow-2xl flex items-center justify-center">
              <div className="bg-white w-full h-full rounded-[22px] flex items-center justify-center">
                <Globe size={32} className="text-[#0EA5E9]" />
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-4xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tighter">
                {language === 'EN' ? "Join Registry" : "පිවිසුම අරඹන්න"}
              </h2>
              <p className="text-gray-400 text-sm font-medium italic">
                {language === 'EN' 
                  ? "Synchronize your identity with the island archives." 
                  : "ඔබේ අනන්‍යතාවය දිවයිනේ සංරක්ෂණාගාරය සමඟ සම්බන්ධ කරන්න."}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {error && (
              <div className="p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-3 text-red-600 animate-in slide-in-from-top-2">
                <AlertCircle size={18} className="shrink-0" />
                <p className="text-[10px] font-bold uppercase tracking-widest leading-relaxed">{error}</p>
              </div>
            )}

            <button
              onClick={handleGoogleLogin}
              disabled={isLoading}
              className="group w-full flex items-center justify-center gap-5 py-6 px-8 bg-[#0a0a0a] text-white rounded-full font-black text-[10px] uppercase tracking-[0.3em] transition-all hover:shadow-[0_20px_50px_rgba(14,165,233,0.3)] active:scale-95 disabled:opacity-50 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              {isLoading ? (
                <Loader2 size={20} className="text-[#0EA5E9] animate-spin" />
              ) : (
                <Chrome size={20} className="text-white group-hover:rotate-12 transition-transform" />
              )}
              <span className="relative z-10">
                {isLoading ? "Negotiating Uplink..." : (language === 'EN' ? "Continue with Google" : "ගූගල් සමඟ සම්බන්ධ වන්න")}
              </span>
            </button>
            
            <div className="relative flex items-center justify-center py-2">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100"></div></div>
              <span className="relative px-6 bg-white text-[9px] font-black text-gray-300 uppercase tracking-[0.5em]">Secure Protocol</span>
            </div>

            {IS_MOCK_AUTH && !isLoading && (
              <div className="flex items-start gap-4 p-6 rounded-[2rem] bg-blue-50/50 border border-blue-100 animate-pulse">
                <Info size={18} className="text-blue-500 mt-0.5 shrink-0" />
                <div className="text-left space-y-1">
                  <p className="text-[10px] font-black text-blue-700 uppercase tracking-widest leading-none">Archival Preview Mode</p>
                  <p className="text-[9px] font-medium text-blue-600/80 italic leading-relaxed">
                    Real keys not detected. Using a simulated neural signature for exploration.
                  </p>
                </div>
              </div>
            )}

            <div className="flex items-center gap-5 p-6 rounded-[2rem] bg-gray-50 border border-gray-100 transition-all hover:bg-white hover:shadow-xl">
              <ShieldCheck size={24} className="text-green-500" />
              <div className="text-left">
                <p className="text-[10px] font-black uppercase text-[#0a0a0a] tracking-widest">Verified Handshake</p>
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">TLS 1.3 Encryption Active</p>
              </div>
            </div>
          </div>

          <p className="text-[9px] text-center text-gray-300 font-bold uppercase tracking-[0.2em] leading-relaxed px-8">
            By connecting, you agree to the <br/> 
            <span className="text-gray-400 hover:text-[#0EA5E9] cursor-pointer transition-colors">Heritage Archive Terms</span> & <span className="text-gray-400 hover:text-[#0EA5E9] cursor-pointer transition-colors">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
