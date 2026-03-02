
import React from 'react';
import { Clock, Construction, ArrowLeft, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface ComingSoonViewProps {
  language: Language;
  setView: (view: any) => void;
  title?: string;
}

const ComingSoonView: React.FC<ComingSoonViewProps> = ({ language, setView, title }) => {
  return (
    <div className="min-h-[90vh] flex items-center justify-center px-6 pt-24 bg-white">
      <div className="max-w-2xl w-full text-center space-y-12 animate-in fade-in zoom-in duration-1000">
        <div className="relative inline-block">
          <div className="w-32 h-32 bg-gray-50 rounded-[2.5rem] flex items-center justify-center border border-gray-100 shadow-inner relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <Clock size={48} className="text-amber-500 animate-pulse relative z-10" />
          </div>
          <div className="absolute -top-4 -right-4 bg-white p-3 rounded-2xl shadow-xl border border-gray-50 animate-bounce">
            <Construction size={20} className="text-[#0a0a0a]" />
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-amber-50 border border-amber-100 text-amber-700 text-[10px] font-black uppercase tracking-[0.4em]">
            <Sparkles size={14} />
            {language === 'EN' ? 'Phase 02: Deployment' : 'අදියර 02: ක්‍රියාත්මක කිරීම'}
          </div>
          
          <h2 className="text-5xl md:text-7xl font-heritage font-black uppercase tracking-tighter text-[#0a0a0a] leading-[0.9]">
            {title || (language === 'EN' ? 'Coming Soon' : 'ළඟදීම පැමිණේ')}
          </h2>
          
          <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed max-w-lg mx-auto">
            {language === 'EN' 
              ? "Our engineering bureau is currently finalizing the archival protocols for this node. Immersive access arrives in the next cycle."
              : "අපගේ ඉංජිනේරු අංශය දැනට මෙම අංශය සඳහා වන ප්‍රොටෝකෝල අවසන් කරමින් සිටී. සම්පූර්ණ ප්‍රවේශය මීළඟ අදියරේදී විවෘත වනු ඇත."}
          </p>
        </div>

        <div className="pt-8">
          <button 
            onClick={() => setView('home')}
            className="group relative px-12 py-6 bg-[#0a0a0a] text-white rounded-full font-black text-[12px] uppercase tracking-[0.4em] transition-all duration-500 hover:scale-105 active:scale-95 shadow-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <span className="relative z-10 flex items-center justify-center gap-6">
              <ArrowLeft size={18} className="group-hover:-translate-x-2 transition-transform" />
              {language === 'EN' ? 'Return to Base' : 'මුල් පිටුවට'}
            </span>
          </button>
        </div>
        
        <div className="pt-12 opacity-20">
          <div className="flex justify-center gap-8">
            <div className="text-left">
              <p className="text-[8px] font-black uppercase tracking-[0.3em] text-gray-400">Status</p>
              <p className="text-[10px] font-bold text-black">CALIBRATING</p>
            </div>
            <div className="text-left border-l border-gray-200 pl-8">
              <p className="text-[8px] font-black uppercase tracking-[0.3em] text-gray-400">Node_ID</p>
              <p className="text-[10px] font-bold text-black">ARCHIVE_0x99</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonView;
