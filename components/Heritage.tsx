import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Landmark, Utensils, Music, Palette, Activity, Calendar, Languages } from 'lucide-react';
import { Language, View } from '../types';
import CategoriesSection from './CategoriesSection';
import HeritageCollection from './HeritageCollection';

interface HeritageProps {
  language: Language;
  setView: (view: View) => void;
  onBack: () => void;
}

const Heritage: React.FC<HeritageProps> = ({ language, setView, onBack }) => {
  return (
    <div className="min-h-screen bg-[#FDFCF7] pb-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1588598198321-9735fd52455b?auto=format&fit=crop&q=80&w=2000" 
          alt="Sri Lankan Heritage"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-8xl font-heritage font-bold mb-4 tracking-tighter uppercase">
              {language === 'EN' ? 'Sri Lankan Heritage' : 'ශ්‍රී ලාංකේය උරුමය'}
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto opacity-90">
              {language === 'EN' 
                ? 'A journey through 2,500 years of history, culture, and tradition.' 
                : 'වසර 2,500 ක ඉතිහාසය, සංස්කෘතිය සහ සම්ප්‍රදාය හරහා ගමනක්.'}
            </p>
          </motion.div>
        </div>

        {/* Back Button */}
        <button 
          onClick={onBack}
          className="absolute top-8 left-8 z-10 flex items-center gap-2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-4 py-2 rounded-full transition-all border border-white/20"
        >
          <ArrowLeft size={20} />
          <span>{language === 'EN' ? 'Back' : 'ආපසු'}</span>
        </button>
      </div>

      {/* Categories Hub */}
      <div className="max-w-7xl mx-auto px-4 -mt-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { id: 'foods', label: { EN: 'Food', SI: 'ආහාර' }, icon: <Utensils size={24} />, color: 'bg-orange-50 text-orange-600' },
              { id: 'phrases', label: { EN: 'Language', SI: 'භාෂාව' }, icon: <Languages size={24} />, color: 'bg-blue-50 text-blue-600' },
              { id: 'music', label: { EN: 'Music', SI: 'සංගීතය' }, icon: <Music size={24} />, color: 'bg-purple-50 text-purple-600' },
              { id: 'arts-crafts', label: { EN: 'Arts & Crafts', SI: 'අත්කම්' }, icon: <Palette size={24} />, color: 'bg-pink-50 text-pink-600' },
              { id: 'medicine', label: { EN: 'Medicine', SI: 'වෙදකම' }, icon: <Activity size={24} />, color: 'bg-emerald-50 text-emerald-600' },
              { id: 'festivals', label: { EN: 'Festivals', SI: 'උත්සව' }, icon: <Calendar size={24} />, color: 'bg-amber-50 text-amber-600' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setView(item.id as View)}
                className="flex flex-col items-center gap-3 p-4 rounded-2xl hover:bg-gray-50 transition-all group"
              >
                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <span className="font-medium text-gray-700">
                  {language === 'EN' ? item.label.EN : item.label.SI}
                </span>
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Hidden Gems Section */}
      <div className="mt-20">
        <HeritageCollection language={language} />
      </div>

      {/* Cultural Significance */}
      <div className="max-w-7xl mx-auto px-4 mt-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-heritage font-bold text-[#262626] mb-6">
              {language === 'EN' ? 'Preserving Our Legacy' : 'අපගේ උරුමය සුරැකීම'}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {language === 'EN' 
                ? "Sri Lanka's heritage is a tapestry of diverse influences, ancient wisdom, and artistic brilliance. From the intricate carvings of Anuradhapura to the vibrant rhythms of Kandyan dance, every element tells a story of resilience and creativity."
                : "ශ්‍රී ලංකාවේ උරුමය යනු විවිධ බලපෑම්, පුරාණ ප්‍රඥාව සහ කලාත්මක දීප්තියේ එකතුවකි. අනුරාධපුරයේ සංකීර්ණ කැටයම්වල සිට උඩරට නැටුම්වල විචිත්‍රවත් රිද්මයන් දක්වා සෑම අංගයක්ම නිර්මාණශීලීත්වයේ කතාවක් කියයි."}
            </p>
            <div className="flex items-center gap-4 text-[#262626] font-semibold">
              <Landmark className="text-amber-600" />
              <span>8 UNESCO World Heritage Sites</span>
            </div>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&q=80&w=1000" 
              alt="Sigiriya"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heritage;
