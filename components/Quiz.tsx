
import React, { useState, useEffect } from 'react';
import { Language, QuizQuestion, ExplorerProfile } from '../types.ts';
import { 
  Compass, 
  ArrowRight, 
  RotateCcw, 
  Sparkles, 
  ChevronLeft,
  Activity,
  Zap,
  Target,
  Box,
  Fingerprint,
  Cpu
} from 'lucide-react';

// Fix: Defined QuizProps interface to resolve the "Cannot find name 'QuizProps'" error
interface QuizProps {
  language: Language;
  setView: (view: any) => void;
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'visual',
    question: { EN: "Select your preferred neural visual input.", SI: "ඔබේ ප්‍රියතම දෘශ්‍ය අත්දැකීම තෝරන්න." },
    options: [
      { id: 'ancient', text: { EN: 'Monolithic Stone Ruins', SI: 'පැරණි ගල් නිර්මාණ' }, image: 'https://i.pinimg.com/736x/0c/d6/36/0cd6364b766c233d0d9f25252fb16d4d.jpg', profileScore: 'ancient' },
      { id: 'mountains', text: { EN: 'Highland Cloud Haze', SI: 'මීදුමෙන් වැසුණු කඳුකරය' }, image: 'https://i.pinimg.com/1200x/47/cc/a0/47cca06e7d0433c00f458f87621f939b.jpg', profileScore: 'mountains' },
      { id: 'beach', text: { EN: 'Turquoise Reef Depth', SI: 'ගැඹුරු නිල් සාගරය' }, image: 'https://i.pinimg.com/736x/70/e8/70/70e8707049ddc10b8e15963b08bcfbf7.jpg', profileScore: 'beach' },
      { id: 'wildlife', text: { EN: 'Untamed Jungle Veil', SI: 'වනගත තුරු සෙවන' }, image: 'https://i.pinimg.com/736x/1f/61/a5/1f61a5f00d68b86b64e2dd496ba70d33.jpg', profileScore: 'wildlife' },
    ]
  },
  {
    id: 'tempo',
    question: { EN: "Determine your archival traversal speed.", SI: "ගමනේ වේගය තීරණය කරන්න." },
    options: [
      { id: 'meditative', text: { EN: 'Meditative Heritage Walk', SI: 'සන්සුන් උරුම චාරිකාව' }, image: 'https://i.pinimg.com/1200x/5c/e2/f3/5ce2f34e60d60c138b49f766aacab214.jpg', profileScore: 'ancient' },
      { id: 'ascent', text: { EN: 'Vertical Highland Ascent', SI: 'දැඩි කඳු තරණය' }, image: 'https://i.pinimg.com/1200x/17/a0/96/17a09604e86af9165b342d699ef24c0a.jpg', profileScore: 'mountains' },
      { id: 'drift', text: { EN: 'Coastal Reef Drift', SI: 'වෙරළේ නිදහස' }, image: 'https://i.pinimg.com/1200x/7c/db/39/7cdb39c88ab9b4684492930755128968.jpg', profileScore: 'beach' },
      { id: 'safari', text: { EN: 'Tactical Jungle Safari', SI: 'වනගත ගවේෂණය' }, image: 'https://i.pinimg.com/1200x/6e/89/3c/6e893cc10e527092921a2d48006e8b4e.jpg', profileScore: 'wildlife' },
    ]
  },
  {
    id: 'element',
    question: { EN: "Identify your dominant natural element.", SI: "ඔබව වඩාත් නිරූපණය කරන්නේ කුමක්ද?" },
    options: [
      { id: 'stone', text: { EN: 'Ancient Granite', SI: 'පෞරාණික ගල් පර්වත' }, image: 'https://i.pinimg.com/1200x/41/40/73/4140733c7c83c7c83c7c83.jpg', profileScore: 'ancient' },
      { id: 'mist', text: { EN: 'High-Altitude Mist', SI: 'කඳුකරයේ සිසිල් මීදුම' }, image: 'https://i.pinimg.com/1200x/62/37/94/62379479c467c8446304bb00e16f9955.jpg', profileScore: 'mountains' },
      { id: 'salt', text: { EN: 'Oceanic Salt Spray', SI: 'කරදිය සුළඟ' }, image: 'https://i.pinimg.com/736x/fc/73/a0/fc73a0bd21708eeaa3baf5872482bf25.jpg', profileScore: 'beach' },
      { id: 'flora', text: { EN: 'Deep Emerald Canopy', SI: 'හරිත වනාන්තරය' }, image: 'https://i.pinimg.com/1200x/28/95/94/28959415856159f64b3a6f98073698b8.jpg', profileScore: 'wildlife' },
    ]
  },
  {
    id: 'spirit',
    question: { EN: "What defines your island spirit?", SI: "ඔබේ ගමනේ සැබෑ අරමුණ කුමක්ද?" },
    options: [
      { id: 'wisdom', text: { EN: 'Seeking Lost Wisdom', SI: 'පැරණි ප්‍රඥාව සෙවීම' }, image: 'https://i.pinimg.com/1200x/ce/b7/d6/ceb7d6e0eba3935d85da2d37f1ee8875.jpg', profileScore: 'ancient' },
      { id: 'serenity', text: { EN: 'Highland Serenity', SI: 'කඳුකරයේ සන්සුන් බව' }, image: 'https://i.pinimg.com/1200x/19/c4/ca/19c4ca9cac03989b7a94bbe48beb166d.jpg', profileScore: 'mountains' },
      { id: 'infinity', text: { EN: 'Infinite Horizon', SI: 'නිම නොවන ක්ෂිතිජය' }, image: 'https://i.pinimg.com/1200x/82/d4/3b/82d43b37cb5cb64da328399d13f05b17.jpg', profileScore: 'beach' },
      { id: 'pulse', text: { EN: 'The Living Pulse', SI: 'ජීවයේ රිද්මය' }, image: 'https://images.unsplash.com/photo-1581432170363-239610f601b0?auto=format&fit=crop&w=800&q=80', profileScore: 'wildlife' },
    ]
  }
];

const EXPLORER_PROFILES: Record<string, ExplorerProfile> = {
  ancient: {
    id: 'ancient',
    name: { EN: "The Heritage Guardian", SI: "උරුමයේ ආරක්ෂකයා" },
    description: { 
      EN: "Your neural signature is synced with history. You find peace among monolithic ruins and sacred temples where kings once stood.", 
      SI: "ඔබ ඉතිහාසයේ හඬට ඇදී යයි. රජවරුන් ඇවිද ගිය පැරණි ගල් පර්වත සහ පූජනීය නටබුන් අතර ඔබේ ආත්මයට සාමය ලැබේ." 
    },
    image: 'https://i.pinimg.com/736x/0c/d6/36/0cd6364b766c233d0d9f25252fb16d4d.jpg',
    recommendations: ['sigiriya', 'ruwanwelisaya', 'vatadageya']
  },
  mountains: {
    id: 'mountains',
    name: { EN: "The Mountain Mystic", SI: "කඳුකර ගවේෂකයා" },
    description: { 
      EN: "You seek the peaks and the mist. Your spirit soars in the cool mountain air, where tea estates blanket the hills in emerald velvet.", 
      SI: "ඔබ මීදුම සහ කඳු මුදුන් සොයන්නෙකි. හරිත පැහැ තේ වතුවලින් වැසුණු කඳුකරයේ සිසිල් සුළඟ ඔබේ ජවයයි." 
    },
    image: 'https://i.pinimg.com/1200x/47/cc/a0/47cca06e7d0433c00f458f87621f939b.jpg',
    recommendations: ['ella', 'adams-peak', 'horton-plains']
  },
  beach: {
    id: 'beach',
    name: { EN: "The Ocean Voyager", SI: "සාගර සංචාරකයා" },
    description: { 
      EN: "The rhythm of the Indian Ocean is your heartbeat. You find joy on golden shores, turquoise reefs, and in the salt-sprayed breeze.", 
      SI: "සාගර රළේ රිද්මය ඔබේ හදගැස්මයි. රන්වන් වෙරළ තීරයන් සහ ඉන්දියන් සාගරයේ නිල්වන් ගැඹුර ඔබව සතුටු කරයි." 
    },
    image: 'https://i.pinimg.com/736x/fc/73/a0/fc73a0bd21708eeaa3baf5872482bf25.jpg',
    recommendations: ['mirissa', 'hikkaduwa', 'nilaveli-beach']
  },
  wildlife: {
    id: 'wildlife',
    name: { EN: "The Jungle Spirit", SI: "වනගත ආත්මය" },
    description: { 
      EN: "You are one with nature's pulse. Your adventure lies in deep scrub forests where the leopard reigns and the elephant roam free.", 
      SI: "ඔබ සොබාදහම සමඟ බැඳී සිටින්ෙකි. වන අලි සැරිසරන සහ දිවියන්ගේ දෑස් දිලිසෙන ඝන වනාන්තරය ඔබේ වික්‍රමයයි." 
    },
    image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=1200&q=80',
    recommendations: ['yala-safari', 'minneriya-park']
  }
};

const Quiz: React.FC<QuizProps> = ({ language, setView }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isFinished, setIsFinished] = useState(false);
  const [profile, setProfile] = useState<ExplorerProfile | null>(null);

  const handleOptionSelect = (profileScore: string) => {
    const newAnswers = [...answers, profileScore];
    setAnswers(newAnswers);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateProfile(newAnswers);
    }
  };

  const calculateProfile = (finalAnswers: string[]) => {
    const counts: Record<string, number> = { ancient: 0, mountains: 0, beach: 0, wildlife: 0 };
    finalAnswers.forEach(ans => counts[ans]++);
    
    let maxCount = 0;
    let winningProfile = 'ancient';
    
    for (const [key, value] of Object.entries(counts)) {
      if (value > maxCount) {
        maxCount = value;
        winningProfile = key;
      }
    }
    
    setProfile(EXPLORER_PROFILES[winningProfile]);
    setIsFinished(true);
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers([]);
    setIsFinished(false);
    setProfile(null);
  };

  const currentQuestion = QUIZ_QUESTIONS[currentStep];

  if (isFinished && profile) {
    return (
      <div className="min-h-screen bg-white pt-32 pb-40 px-6 animate-in fade-in duration-1000 relative flex flex-col items-center">
        <div className="max-w-6xl w-full space-y-16 relative z-10">
          <div className="text-center space-y-6">
             <div className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-[#0EA5E9]/5 border border-[#0EA5E9]/20 text-[#0EA5E9] text-[10px] font-black uppercase tracking-[0.5em] animate-pulse mx-auto">
                <Target size={16} /> Identity_Synthesis_Complete
             </div>
             <h2 className="text-5xl md:text-[8rem] font-heritage font-bold text-[#0a0a0a] tracking-tighter uppercase leading-[0.8] mb-4">Your Archival <br/><span className="italic insta-text-gradient">Archetype.</span></h2>
          </div>

          <div className="relative overflow-hidden bg-[#0a0a0a] rounded-[5rem] shadow-[0_60px_150px_rgba(0,0,0,0.3)] border border-white/5 group">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-5 relative h-96 lg:h-auto overflow-hidden">
                <img src={profile.image} alt={profile.name[language]} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[15s] group-hover:scale-125" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent opacity-80" />
              </div>
              <div className="lg:col-span-7 p-12 md:p-24 space-y-12">
                <div className="space-y-6">
                  <p className="text-[11px] font-black text-[#E1306C] uppercase tracking-[0.6em]">Registry_Protocol: {profile.id.toUpperCase()}</p>
                  <h3 className="text-4xl md:text-7xl font-heritage font-bold text-white leading-tight tracking-tight uppercase">
                    {profile.name[language]}
                  </h3>
                  <div className="w-32 h-1.5 insta-gradient rounded-full" />
                </div>
                <p className="text-xl md:text-3xl text-gray-400 font-light italic leading-relaxed">
                  "{profile.description[language]}"
                </p>
                <div className="flex flex-wrap items-center gap-8 pt-6">
                   <button 
                    onClick={() => setView('destinations')}
                    className="px-12 py-7 bg-white text-black rounded-[2.5rem] font-black text-xs uppercase tracking-[0.4em] flex items-center gap-6 hover:bg-[#0EA5E9] hover:text-white transition-all shadow-3xl active:scale-95 group/btn"
                   >
                     Explore Nodes <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                   </button>
                   <button 
                    onClick={resetQuiz}
                    className="flex items-center gap-3 text-[11px] font-black text-gray-500 hover:text-white uppercase tracking-[0.4em] transition-colors border-b border-gray-800 hover:border-white pb-1"
                   >
                    <RotateCcw size={14} /> Recalibrate Neural Link
                   </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-32 pb-40 px-6 flex flex-col items-center overflow-hidden relative">
      <div className="max-w-[1600px] w-full space-y-24 animate-in slide-in-from-bottom-12 duration-1000 relative z-10">
        
        {/* Progress HUD */}
        <div className="max-w-xl mx-auto space-y-8">
          <div className="flex justify-between items-end px-4">
             <div className="space-y-1">
                <p className="text-[9px] font-black text-[#0EA5E9] uppercase tracking-[0.5em] leading-none mb-2">Registry_Synchronization</p>
                <div className="flex items-center gap-3">
                   <Cpu size={14} className="text-[#0EA5E9] animate-pulse" />
                   <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Step {currentStep + 1} / {QUIZ_QUESTIONS.length}</span>
                </div>
             </div>
             <span className="text-4xl font-heritage font-black text-[#0a0a0a]">{Math.round(((currentStep + 1) / QUIZ_QUESTIONS.length) * 100)}%</span>
          </div>
          <div className="h-2.5 w-full bg-gray-50 rounded-full overflow-hidden p-[2px] border border-gray-100 shadow-inner">
            <div 
              className="h-full rounded-full bg-gradient-to-r from-[#0EA5E9] via-cyan-400 to-blue-600 transition-all duration-700 shadow-[0_0_20px_rgba(14,165,233,0.4)]" 
              style={{ width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }} 
            />
          </div>
        </div>

        <div className="text-center space-y-20">
          <div className="space-y-8">
            <div className="relative mx-auto w-24 h-24">
               <div className="absolute inset-0 border border-dashed border-[#0EA5E9]/30 rounded-full animate-spin-slow" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 story-ring p-[1px] rounded-full shadow-2xl animate-pulse">
                    <div className="bg-white w-full h-full rounded-full flex items-center justify-center">
                      <Fingerprint size={32} className="text-[#0EA5E9]" />
                    </div>
                  </div>
               </div>
            </div>
            <h2 className="text-5xl md:text-[7rem] font-heritage font-bold text-[#0a0a0a] leading-[0.9] tracking-tighter uppercase max-w-5xl mx-auto">
              {currentQuestion.question[language]}
            </h2>
          </div>

          {/* 4-COLUMN OPTION GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
            {currentQuestion.options.map((opt, idx) => (
              <button
                key={opt.id}
                onClick={() => handleOptionSelect(opt.profileScore)}
                className="group relative flex flex-col bg-white rounded-[4rem] p-4 shadow-xl border border-gray-100 hover:border-[#0EA5E9]/40 hover:-translate-y-4 transition-all duration-700 overflow-hidden text-left"
              >
                <div className="relative w-full aspect-[4/5] rounded-[3rem] overflow-hidden mb-8 shadow-inner">
                  <img src={opt.image} alt={opt.text[language]} className="w-full h-full object-cover transition-transform duration-[8000ms] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/40 to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />
                  
                  <div className="absolute bottom-8 left-8 right-8">
                     <p className="text-[10px] font-black uppercase text-[#0EA5E9] tracking-[0.4em] mb-2 drop-shadow-md">Registry_Option_0{idx + 1}</p>
                     <p className="text-2xl font-heritage font-bold text-white uppercase tracking-tight leading-none drop-shadow-2xl">{opt.text[language]}</p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 flex justify-between items-center mt-auto">
                   <div className="flex flex-col">
                      <span className="text-[8px] font-black text-gray-300 uppercase tracking-widest">Protocol_Handshake</span>
                      <span className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.2em] group-hover:text-[#0EA5E9] transition-colors">{language === 'EN' ? 'Initiate Node' : 'සම්බන්ධ වන්න'}</span>
                   </div>
                   <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-300 group-hover:bg-[#0EA5E9] group-hover:text-white transition-all shadow-inner group-hover:rotate-12">
                      <ArrowRight size={24} />
                   </div>
                </div>

                <div className="absolute top-0 left-0 w-full h-[4px] bg-[#0EA5E9] shadow-[0_0_20px_#0EA5E9] opacity-0 group-hover:opacity-100 animate-scan-slow pointer-events-none" />
              </button>
            ))}
          </div>
        </div>

        {currentStep > 0 && (
          <div className="flex justify-center pt-8">
             <button 
               onClick={() => setCurrentStep(currentStep - 1)} 
               className="flex items-center gap-4 px-10 py-5 bg-gray-50 rounded-2xl text-[10px] font-black text-gray-400 hover:text-[#0a0a0a] hover:bg-gray-100 uppercase tracking-[0.4em] transition-all shadow-sm group"
             >
               <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Backtrack_Archive
             </button>
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan-slow {
          0% { top: -10%; opacity: 0; }
          30% { opacity: 0.6; }
          70% { opacity: 0.6; }
          100% { top: 110%; opacity: 0; }
        }
        .animate-scan-slow { animation: scan-slow 6s linear infinite; }
        .animate-spin-slow { animation: spin 12s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}} />
    </div>
  );
};

export default Quiz;
