import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Landmark, Utensils, Music, Palette, Activity, Calendar, Languages, ShieldCheck, Heart, Sprout } from 'lucide-react';
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
                className="flex flex-col items-center gap-2 p-2 rounded-2xl hover:bg-gray-50 transition-all group"
              >
                <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
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

      {/* Mahavamsa Section */}
      <div className="max-w-7xl mx-auto px-4 mt-20">
        <div className="bg-[#262626] rounded-3xl p-8 md:p-16 text-white shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-heritage font-bold mb-8 text-amber-500">
            {language === 'EN' ? 'The Mahavamsa: Our Great Chronicle' : 'මහාවංශය: අපගේ මහා වංශකථාව'}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl">
            {language === 'EN' 
              ? "The Mahavamsa is a historical chronicle written in the Pali language, documenting the history of Sri Lanka from the arrival of Prince Vijaya in 543 BCE. It is considered one of the most important historical documents in the world, providing a continuous record of the island's kings, religious developments, and cultural evolution."
              : "මහාවංශය යනු ක්‍රි.පූ. 543 දී විජය කුමරුගේ පැමිණීමේ සිට ශ්‍රී ලංකාවේ ඉතිහාසය ලේඛනගත කරමින් පාලි භාෂාවෙන් ලියන ලද ඓතිහාසික වංශකථාවකි. එය ලෝකයේ වැදගත්ම ඓතිහාසික ලේඛනයක් ලෙස සැලකෙන අතර, දිවයිනේ රජවරුන්, ආගමික වර්ධනයන් සහ සංස්කෘතික පරිණාමය පිළිබඳ අඛණ්ඩ වාර්තාවක් සපයයි."}
          </p>
        </div>
      </div>

      {/* Traditional Architecture Section */}
      <div className="max-w-7xl mx-auto px-4 mt-20">
        <div className="bg-white rounded-3xl p-8 md:p-16 shadow-xl border border-gray-100">
          <h2 className="text-4xl md:text-5xl font-heritage font-bold mb-8 text-[#262626]">
            {language === 'EN' ? 'Traditional Architecture: The Vatadage' : 'සාම්ප්‍රදායික වාස්තු විද්‍යාව: වටදාගෙය'}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
            {language === 'EN' 
              ? "A unique circular relic house, the Vatadage is a masterpiece of ancient Sri Lankan architecture. These structures, often featuring intricate stone carvings and lotus-shaped pillars, were designed to protect sacred stupas, showcasing the advanced engineering and artistic skills of our ancestors."
              : "අද්විතීය වෘත්තාකාර ධාතු මන්දිරයක් වන වටදාගෙය පුරාණ ශ්‍රී ලංකා වාස්තු විද්‍යාවේ විශිෂ්ට නිර්මාණයකි. සංකීර්ණ ගල් කැටයම් සහ නෙළුම් මල් හැඩැති කුළුණු වලින් සමන්විත මෙම ව්‍යුහයන්, පූජනීය ස්තූප ආරක්ෂා කිරීම සඳහා නිර්මාණය කර ඇති අතර, අපගේ මුතුන් මිත්තන්ගේ උසස් ඉංජිනේරු සහ කලාත්මක කුසලතා විදහා දක්වයි."}
          </p>
        </div>
      </div>

      {/* Kandyan Dance Section */}
      <div className="max-w-7xl mx-auto px-4 mt-20">
        <div className="bg-amber-50 rounded-3xl p-8 md:p-16 shadow-xl border border-amber-100">
          <h2 className="text-4xl md:text-5xl font-heritage font-bold mb-8 text-amber-900">
            {language === 'EN' ? 'Kandyan Dance: The Rhythm of the Island' : 'උඩරට නැටුම්: දිවයිනේ රිද්මය'}
          </h2>
          <p className="text-lg md:text-xl text-amber-800 leading-relaxed max-w-3xl">
            {language === 'EN' 
              ? "Originating from the central highlands, Kandyan dance is a vibrant and energetic art form. Characterized by intricate footwork, rhythmic drumming, and elaborate costumes, it has been passed down through generations, serving as a powerful expression of cultural identity and spiritual devotion."
              : "මධ්‍යම කඳුකරයෙන් ආරම්භ වූ උඩරට නැටුම් යනු විචිත්‍රවත් සහ ජවසම්පන්න කලා මාධ්‍යයකි. සංකීර්ණ පාද චලනයන්, රිද්මයානුකූල බෙර වාදනය සහ විචිත්‍රවත් ඇඳුම් පැළඳුම් වලින් සමන්විත මෙය, පරම්පරා ගණනාවක් පුරා සංස්කෘතික අනන්‍යතාවයේ සහ ආධ්‍යාත්මික භක්තියේ ප්‍රබල ප්‍රකාශනයක් ලෙස පවත්වාගෙන එනු ලැබේ."}
          </p>
        </div>
      </div>

      {/* Traditional Ayurveda Section */}
      <div className="max-w-7xl mx-auto px-4 mt-20">
        <div className="bg-emerald-50 rounded-3xl p-8 md:p-16 shadow-xl border border-emerald-100">
          <h2 className="text-4xl md:text-5xl font-heritage font-bold mb-8 text-emerald-900">
            {language === 'EN' ? 'Ayurveda: Ancient Wisdom of Healing' : 'ආයුර්වේදය: පුරාණ සුව කිරීමේ ප්‍රඥාව'}
          </h2>
          <p className="text-lg md:text-xl text-emerald-800 leading-relaxed max-w-3xl">
            {language === 'EN' 
              ? "Ayurveda, the traditional medicine system of Sri Lanka, is deeply rooted in the island's culture. Using natural herbs, oils, and holistic treatments, it focuses on balancing the body, mind, and spirit. It has been used for centuries to promote longevity and well-being."
              : "ශ්‍රී ලංකාවේ සාම්ප්‍රදායික වෛද්‍ය ක්‍රමය වන ආයුර්වේදය දිවයිනේ සංස්කෘතිය තුළ ගැඹුරින් මුල් බැස ඇත. ස්වභාවික ඖෂධ පැළෑටි, තෙල් සහ පරිපූර්ණ ප්‍රතිකාර භාවිතා කරමින්, එය ශරීරය, මනස සහ ආත්මය සමතුලිත කිරීම කෙරෙහි අවධානය යොමු කරයි. එය සියවස් ගණනාවක් තිස්සේ දීර්ඝායුෂ සහ යහපැවැත්ම ප්‍රවර්ධනය කිරීම සඳහා භාවිතා කර ඇත."}
          </p>
        </div>
      </div>

      {/* Traditional Cuisine Section */}
      <div className="max-w-7xl mx-auto px-4 mt-20">
        <div className="bg-orange-50 rounded-3xl p-8 md:p-16 shadow-xl border border-orange-100">
          <h2 className="text-4xl md:text-5xl font-heritage font-bold mb-8 text-orange-900">
            {language === 'EN' ? 'Traditional Cuisine: The Art of Rice & Curry' : 'සාම්ප්‍රදායික ආහාර: බත් සහ කරිය'}
          </h2>
          <p className="text-lg md:text-xl text-orange-800 leading-relaxed max-w-3xl">
            {language === 'EN' 
              ? "Sri Lankan cuisine is famous for its bold flavors, aromatic spices, and coconut-based dishes. The traditional 'Rice and Curry' meal is a culinary experience that reflects the island's agricultural richness, bringing together a variety of vegetable, meat, and fish curries served with red or white rice."
              : "ශ්‍රී ලංකීය ආහාර එහි තියුණු රසයන්, සුවඳවත් කුළුබඩු සහ පොල් පදනම් කරගත් කෑම වර්ග සඳහා ප්‍රසිද්ධය. සාම්ප්‍රදායික 'බත් සහ කරිය' ආහාර වේල යනු දිවයිනේ කෘෂිකාර්මික සශ්‍රීකත්වය පිළිබිඹු කරන සූපශාස්ත්‍ර අත්දැකීමකි, එය රතු හෝ සුදු බත් සමඟ පිළිගන්වන විවිධ එළවළු, මස් සහ මාළු කරි එකතු කරයි."}
          </p>
        </div>
      </div>
      {/* Protect Heritage Advice Section */}
      <div className="max-w-7xl mx-auto px-4 mt-24 mb-16">
        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl group">
          <img 
            src="https://images.unsplash.com/photo-1578503117502-3162799f9392?auto=format&fit=crop&q=80&w=2000" 
            alt="Cultural Heritage"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/40" />
          
          <div className="relative z-10 p-8 md:p-16 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-amber-500/20 rounded-2xl backdrop-blur-md flex items-center justify-center mb-8 border border-amber-500/30">
              <ShieldCheck className="text-amber-400 w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-5xl font-heritage font-bold mb-6 text-white leading-tight">
              {language === 'EN' ? 'Guardians of Our Living Heritage' : 'අපේ ජීවමාන උරුමයේ මුරකරුවෝ වෙමු'}
            </h2>
            <p className="text-base md:text-xl text-gray-200 leading-relaxed max-w-4xl mb-12 font-light">
              {language === 'EN' 
                ? "Our heritage extends far beyond ancient bricks and monuments. It breathes through our traditional arts, our language, our culinary secrets, and the values passed down through generations. While we must protect our sacred sites by leaving no trace, we must equally champion our intangible culture. Support local artisans, respect village customs, and keep our stories alive. True preservation is protecting both the places we revere and the culture we live."
                : "අපගේ උරුමය හුදෙක් පැරණි ගඩොල් සහ ස්මාරකවලට වඩා බොහෝ සෙයින් ඔබ්බට විහිදෙයි. එය අපගේ සාම්ප්‍රදායික කලාවන්, අපගේ භාෂාව, අපගේ සූපශාස්ත්‍ර රහස් සහ පරම්පරාවෙන් පරම්පරාවට පැවත එන සාරධර්ම හරහා ජීවමානව පවතී. අපගේ පූජනීය ස්ථානවලට හානියක් නොකර ඒවා ආරක්ෂා කරනවා සේම, අපගේ අස්පෘශ්‍ය සංස්කෘතියද අප විසින් රැකගත යුතුය. දේශීය කලාකරුවන්ට සහාය වන්න, ගමේ සිරිත් විරිත්වලට ගරු කරන්න, අපේ කතාන්දර මතු පරපුරට ගෙන යන්න. සැබෑ සංරක්ෂණය යනු අප වන්දනාමාන කරන ස්ථාන මෙන්ම අප ජීවත් වන සංස්කෘතියද එකසේ සුරක්ෂිත කිරීමයි."}
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-4xl">
              {[
                { icon: <Landmark size={24}/>, text: { EN: 'Historical Sites', SI: 'ඓතිහාසික ස්ථාන' } },
                { icon: <Palette size={24}/>, text: { EN: 'Traditional Arts', SI: 'සාම්ප්‍රදායික කලා' } },
                { icon: <Heart size={24}/>, text: { EN: 'Cultural Values', SI: 'සංස්කෘතික වටිනාකම්' } },
                { icon: <Sprout size={24}/>, text: { EN: 'Natural Beauty', SI: 'ස්වභාවික සෞන්දර්යය' } },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="text-amber-400">{item.icon}</div>
                  <span className="text-sm md:text-base text-white font-medium">{language === 'EN' ? item.text.EN : item.text.SI}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heritage;
