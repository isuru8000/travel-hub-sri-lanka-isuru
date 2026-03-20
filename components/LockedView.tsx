
import React from 'react';
import { Lock, ShieldAlert, ArrowRight } from 'lucide-react';
import { Language } from '../types';

interface LockedViewProps {
  language: Language;
  onLogin: () => void;
}

const LockedView: React.FC<LockedViewProps> = ({ language, onLogin }) => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 pt-24">
      <div className="max-w-md w-full text-center space-y-8 animate-in fade-in zoom-in duration-700">
        <div className="relative inline-block">
          <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100 shadow-inner">
            <Lock size={40} className="text-[#E1306C] animate-pulse" />
          </div>
          <div className="absolute -top-2 -right-2 bg-white p-2 rounded-full shadow-lg border border-gray-50">
            <ShieldAlert size={16} className="text-amber-500" />
          </div>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-3xl font-heritage font-black uppercase tracking-tighter text-[#0a0a0a]">
            {language === 'EN' ? 'Access Restricted' : 'ප්‍රවේශය සීමා කර ඇත'}
          </h2>
          <p className="text-gray-500 font-medium leading-relaxed">
            {language === 'EN' 
              ? "This portal is reserved for verified explorers. Please authenticate your identity to access booking protocols."
              : "මෙම ද්වාරය තහවුරු කරන ලද ගවේෂකයන් සඳහා වෙන් කර ඇත. වෙන්කරවා ගැනීමේ ප්‍රොටෝකෝල වෙත ප්‍රවේශ වීමට කරුණාකර ඔබගේ අනන්‍යතාවය තහවුරු කරන්න."}
          </p>
        </div>

        <button 
          onClick={onLogin}
          className="group relative w-full py-5 bg-[#0a0a0a] text-white rounded-2xl font-black text-[12px] uppercase tracking-[0.4em] transition-all duration-500 hover:scale-[1.02] active:scale-95 shadow-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          <span className="relative z-10 flex items-center justify-center gap-4">
            {language === 'EN' ? 'Initialize Authentication' : 'අනන්‍යතාවය තහවුරු කරන්න'}
            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </span>
        </button>
        
        <div className="pt-8 opacity-20">
          <p className="text-[9px] font-black uppercase tracking-[0.5em] text-gray-400">Security Protocol v4.0 • Node_Lock_Active</p>
        </div>
      </div>
    </div>
  );
};

export default LockedView;
