
import React from 'react';
import { Language, TraditionalMedicine as TraditionalMedicineType } from '../types.ts';
import { MEDICINE_DATA } from '../constants.tsx';
// Fix: Added ArrowLeft import for the back button
import { Leaf, History, Activity, Sparkles, HeartPulse, Info, ArrowLeft } from 'lucide-react';

interface TraditionalMedicineProps {
  language: Language;
  // Fix: Added missing onBack prop definition to resolve error in App.tsx
  onBack: () => void;
}

const MedicineCard: React.FC<{ item: TraditionalMedicineType; language: Language }> = ({ item, language }) => (
  <div 
    className="bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 flex flex-col group hover:-translate-y-4 transition-all duration-500"
  >
    <div className="relative h-64 overflow-hidden">
      <img 
        src={item.image} 
        alt={item.name[language]} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-lg flex items-center gap-2">
        {item.type === 'herb' ? <Leaf size={10} className="text-green-600" /> : <Activity size={10} className="text-[#E1306C]" />}
        <span className="text-[9px] font-bold text-[#262626] uppercase tracking-widest">
          {item.type === 'herb' ? (language === 'EN' ? 'Herb' : 'ශාකය') : (language === 'EN' ? 'Therapy' : 'ප්‍රතිකාරය')}
        </span>
      </div>
    </div>

    <div className="p-8 md:p-10 flex-grow space-y-6 flex flex-col">
      <div className="space-y-1">
        <h3 className="text-xl md:text-2xl font-heritage font-bold text-[#262626] group-hover:insta-text-gradient transition-all">
          {item.name[language]}
        </h3>
        <div className="flex items-center gap-2 text-[10px] font-bold text-[#E1306C] uppercase tracking-[0.2em]">
          <Sparkles size={12} fill="currentColor" />
          {language === 'EN' ? "Ancient Wisdom" : "පැරණි ප්‍රඥාව"}
        </div>
      </div>

      <p className="text-sm md:text-base text-gray-500 leading-relaxed font-light line-clamp-3">
        {item.description[language]}
      </p>

      <div className="bg-[#f0fff4] p-4 rounded-[1.5rem] border border-[#c6f6d5] relative">
        <HeartPulse size={16} className="text-green-600 opacity-20 absolute top-3 right-3" />
        <p className="text-[8px] font-black uppercase text-green-600 tracking-[0.2em] mb-2">
          {language === 'EN' ? 'Benefits' : 'ප්‍රතිලාභ'}
        </p>
        <p className="text-xs text-gray-700 italic leading-relaxed font-medium">
          {item.benefits[language]}
        </p>
      </div>

      <div className="pt-4 border-t border-gray-100 mt-auto space-y-4">
        <div className="flex items-start gap-3 bg-[#fafafa] p-3 rounded-xl border border-gray-100">
          <Info size={16} className="text-[#E1306C] mt-1 shrink-0" />
          <div>
            <span className="block text-[8px] font-black uppercase text-gray-400 tracking-widest mb-1">
              {language === 'EN' ? 'Usage' : 'භාවිතය'}
            </span>
            <p className="text-xs text-[#262626] italic leading-tight line-clamp-2">
              {item.usage[language]}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TraditionalMedicine: React.FC<TraditionalMedicineProps> = ({ language, onBack }) => {
  const herbs = MEDICINE_DATA.filter(m => m.type === 'herb');
  const treatments = MEDICINE_DATA.filter(m => m.type === 'treatment');
  const heroMedicineBg = "https://plus.unsplash.com/premium_photo-1661490025820-ce090e391627?q=80&w=1920&auto=format&fit=crop";

  return (
    <section className="min-h-screen bg-[#fafafa] pb-32">
      {/* Medicine Header */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-fixed bg-center opacity-60 transition-transform duration-10000 hover:scale-110" 
          style={{ backgroundImage: `url('${heroMedicineBg}')` }}
        />
        <div className="absolute inset-0 bg-green-900/20 opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        
        {/* Fix: Added Back Button for consistency with other archive views and to utilize the onBack prop */}
        <div className="absolute top-10 left-10 z-[70]">
          <button onClick={onBack} className="flex items-center gap-4 px-8 py-4 bg-white/80 backdrop-blur-xl border border-gray-200 text-[#0a0a0a] rounded-full font-black text-[10px] uppercase tracking-[0.4em] hover:bg-white transition-all shadow-xl group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> 
            {language === 'EN' ? 'Home' : 'මුල් පිටුව'}
          </button>
        </div>

        <div className="relative text-center space-y-4 px-4">
          <div className="w-20 h-20 story-ring rounded-full mx-auto p-1 mb-6 animate-pulse">
            <div className="bg-white w-full h-full rounded-full flex items-center justify-center">
              <Leaf size={32} className="text-green-600" />
            </div>
          </div>
          <h2 className="text-5xl md:text-7xl font-heritage font-bold text-white drop-shadow-2xl">
            {language === 'EN' ? "Ancient Healing" : "හෙළ වෙදකම"}
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto text-lg md:text-xl font-light drop-shadow-lg italic">
            {language === 'EN' 
              ? "Rejuvenate your soul with the 5,000-year-old wisdom of Sri Lankan Hela Wedakama & Ayurveda." 
              : "වසර 5,000 ක ඉතිහාසයක් ඇති ශ්‍රී ලාංකීය හෙළ වෙදකම සහ ආයුර්වේදයේ ප්‍රඥාවෙන් ඔබේ ආත්මය සුවපත් කරගන්න."}
          </p>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-8 -mt-20 relative z-10 space-y-32">
        {/* Herbs Section */}
        <div className="space-y-12">
          <div className="flex items-center gap-6">
            <h3 className="text-2xl md:text-3xl font-heritage font-bold text-[#262626] bg-white px-8 py-3 rounded-full shadow-lg border border-gray-100 uppercase tracking-tighter">
              {language === 'EN' ? "Nature's Pharmacy (Herbs)" : "ස්වභාවධර්මයේ ඔසුසල (ඖෂධ පැලෑටි)"}
            </h3>
            <div className="flex-grow h-px bg-gradient-to-r from-gray-200 to-transparent" />
          </div>
          {/* Updated to 4 columns on XL screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10 pt-8">
            {herbs.map((item) => (
              <MedicineCard key={item.id} item={item} language={language} />
            ))}
          </div>
        </div>

        {/* Treatments Section */}
        <div className="space-y-12">
          <div className="flex items-center gap-6">
            <h3 className="text-2xl md:text-3xl font-heritage font-bold text-[#262626] bg-white px-8 py-3 rounded-full shadow-lg border border-gray-100 uppercase tracking-tighter">
              {language === 'EN' ? "Sacred Elixirs" : "පාන වර්ග"}
            </h3>
            <div className="flex-grow h-px bg-gradient-to-r from-gray-200 to-transparent" />
          </div>
          {/* Updated to 4 columns on XL screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10 pt-8">
            {treatments.map((item) => (
              <MedicineCard key={item.id} item={item} language={language} />
            ))}
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="max-w-4xl mx-auto mt-48 px-6 text-center space-y-8">
        <div className="w-16 h-1 bg-gradient-to-r from-transparent via-green-600 to-transparent mx-auto" />
        <p className="text-2xl md:text-3xl font-heritage font-medium text-gray-600 italic">
          {language === 'EN' 
            ? "\"The earth provides all we need to heal, we only need the wisdom to listen to its pulse.\""
            : "\"සුවපත් වීමට අවශ්‍ය සියල්ල සොබාදහම අපට ලබා දෙයි, අප කළ යුත්තේ එහි ස්පන්දනයට සවන් දීමට තරම් ප්‍රඥාවන්ත වීම පමණි.\""}
        </p>
      </div>
    </section>
  );
};

export default TraditionalMedicine;
