import React from 'react';
import { motion } from 'framer-motion';
import { Language, View } from '../types.ts';
import { UI_STRINGS } from '../constants.tsx';
import { Compass, Sparkles, Target, Wind, Activity, PawPrint } from 'lucide-react';

interface DestinySectionProps {
  language: Language;
  setView: (view: View) => void;
}

const DestinySection: React.FC<DestinySectionProps> = ({ language, setView }) => {
  const shards = [
    {
      id: '01',
      title: language === 'EN' ? 'Explore Yapahuwa' : 'යාපහුව ගවේෂණය',
      subtitle: language === 'EN' ? 'Ancient Rock Fortress' : 'පැරණි ශිලා බලකොටුව',
      image: "https://i.pinimg.com/736x/0c/d6/36/0cd6364b766c233d0d9f25252fb16d4d.jpg",
      icon: Target,
      color: "#E1306C",
      node: "Registry_Node_01"
    },
    {
      id: '02',
      title: language === 'EN' ? 'Visit Ella' : 'ඇල්ල සංචාරය',
      subtitle: language === 'EN' ? 'The Misty Highlands' : 'මීදුම් සහිත කඳුකරය',
      image: "https://i.pinimg.com/1200x/47/cc/a0/47cca06e7d0433c00f458f87621f939b.jpg",
      icon: Wind,
      color: "#22D3EE",
      node: "Registry_Node_02"
    },
    {
      id: '03',
      title: language === 'EN' ? 'Discover Galle Fort' : 'ගාල්ල කොටුව',
      subtitle: language === 'EN' ? 'Historic Fortress' : 'ඓතිහාසික බලකොටුව',
      image: "https://i.pinimg.com/736x/fc/73/a0/fc73a0bd21708eeaa3baf5872482bf25.jpg",
      icon: Activity,
      color: "#60A5FA",
      node: "Registry_Node_03"
    },
    {
      id: '04',
      title: language === 'EN' ? 'Experience Yala' : 'යාල අත්විඳින්න',
      subtitle: language === 'EN' ? 'Wildlife Safari' : 'වනජීවී සෆාරිය',
      image: "https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=800&q=80",
      icon: PawPrint,
      color: "#10B981",
      node: "Registry_Node_04"
    }
  ];

  return (
    <section className="py-24 md:py-64 px-4 md:px-8 bg-white overflow-hidden relative">
      {/* Background Decorative Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-heritage font-bold text-black/[0.02] select-none pointer-events-none whitespace-nowrap">
        {language === 'EN' ? 'DESTINY' : 'දෛවය'}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-24 md:mb-48">
          <div className="space-y-8 max-w-3xl">
            <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-stone-100 border border-stone-200 text-stone-500 text-[10px] font-black uppercase tracking-[0.6em]">
              <Sparkles size={14} className="text-[#F59E0B]" />
              {language === 'EN' ? 'PERSONALIZED EXPLORATION' : 'පුද්ගලීකරණය කළ ගවේෂණය'}
            </div>
            
            <h2 className="text-5xl md:text-8xl lg:text-9xl font-heritage font-bold text-black leading-[0.85] tracking-tighter uppercase">
              {language === 'EN' ? (
                <>Uncover Your <br/><span className="text-stone-300">Destiny.</span></>
              ) : (
                <>ඔබේ <span className="text-stone-300">දෛවය</span> <br/>සොයාගන්න.</>
              )}
            </h2>
            
            <p className="text-stone-500 text-xl md:text-3xl font-light italic leading-relaxed max-w-2xl border-l-2 border-stone-200 pl-8">
              {language === 'EN' 
                ? "Every voyager carries a unique signature. We match your neural archetype to the perfect archival nodes."
                : "සෑම සංචාරකයෙකුටම සුවිශේෂී අනන්‍යතාවයක් ඇත. ඔබේ රුචිකත්වයන්ට වඩාත් ගැලපෙන ස්ථාන අපි හඳුනා ගනිමු."}
            </p>
          </div>

          <button 
            onClick={() => setView('quiz' as View)}
            className="group relative px-12 py-6 bg-black text-white rounded-full font-black text-[12px] uppercase tracking-[0.6em] transition-all hover:scale-105 active:scale-95 shadow-2xl flex items-center gap-6"
          >
            <Compass size={20} className="text-[#F59E0B] group-hover:rotate-180 transition-transform duration-1000" />
            {UI_STRINGS.startDiscovery[language]}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {shards.map((shard, idx) => (
            <motion.div
              key={shard.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group/shard relative aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-stone-100 border border-stone-200 shadow-xl hover:-translate-y-4 transition-all duration-700"
            >
              <img 
                src={shard.image} 
                className="w-full h-full object-cover transition-transform duration-[4000ms] group-hover:scale-110" 
                alt={shard.title} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              
              <div className="absolute top-6 left-6 p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                <shard.icon size={18} style={{ color: shard.color }} className="animate-pulse" />
              </div>

              <div className="absolute bottom-8 left-8 right-8 space-y-2">
                <p className="text-[8px] font-black uppercase tracking-[0.4em]" style={{ color: shard.color }}>
                  {shard.node}
                </p>
                <h4 className="text-xl md:text-2xl font-heritage font-bold uppercase text-white tracking-widest leading-tight">
                  {shard.title}
                </h4>
                <p className="text-[10px] text-white/60 font-medium uppercase tracking-widest">
                  {shard.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinySection;
