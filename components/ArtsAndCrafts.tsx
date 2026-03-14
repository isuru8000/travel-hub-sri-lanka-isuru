import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Info, MapPin, X, ShoppingBag, ArrowLeft } from 'lucide-react';
import { Language, ArtAndCraft } from '../types.ts';
import { ARTS_CRAFTS_DATA } from '../constants.tsx';

interface ArtsAndCraftsProps {
  language: Language;
  onBack?: () => void;
}

export function ArtsAndCrafts({ language, onBack }: ArtsAndCraftsProps) {
  const [selectedItem, setSelectedItem] = useState<ArtAndCraft | null>(null);

  const t = {
    title: language === 'EN' ? 'Traditional Arts & Crafts' : 'පාරම්පරික කලා සහ අත්කම්',
    subtitle: language === 'EN' ? 'Discover the exquisite craftsmanship of Sri Lanka' : 'ශ්‍රී ලංකාවේ විශිෂ්ට අත්කම් නිර්මාණ ගවේෂණය කරන්න',
    origin: language === 'EN' ? 'Origin' : 'මූලාරම්භය',
    significance: language === 'EN' ? 'Significance' : 'වැදගත්කම',
    whereToBuy: language === 'EN' ? 'Where to Buy' : 'මිලදී ගත හැකි ස්ථාන',
    whereToBuyDesc: language === 'EN' ? 'Laksala (State-owned handicrafts emporium), local artisan villages, and specialized craft shops across the island.' : 'ලක්සල (රාජ්‍ය අත්කම් වෙළඳසැල), දේශීය කලා ගම්මාන සහ දිවයින පුරා ඇති විශේෂිත අත්කම් වෙළඳසැල්.',
    back: language === 'EN' ? 'Back to Home' : 'ආපසු',
  };

  return (
    <div className="min-h-screen bg-stone-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative">
      {onBack && (
        <button
          onClick={onBack}
          className="absolute top-24 left-4 sm:left-8 z-10 flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all text-stone-600 hover:text-stone-900"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">{t.back}</span>
        </button>
      )}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center p-3 bg-amber-100 rounded-full mb-4 text-amber-600"
          >
            <Palette className="w-8 h-8" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-stone-900 mb-4 font-serif"
          >
            {t.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-stone-600 max-w-2xl mx-auto"
          >
            {t.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTS_CRAFTS_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
              onClick={() => setSelectedItem(item)}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.name[language]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-medium flex items-center gap-2">
                    <Info className="w-4 h-4" />
                    {language === 'EN' ? 'Click to learn more' : 'වැඩි විස්තර සඳහා ක්ලික් කරන්න'}
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-stone-900 mb-2 font-serif">
                  {item.name[language]}
                </h3>
                <p className="text-stone-600 line-clamp-2 mb-4">
                  {item.description[language]}
                </p>
                <div className="flex items-center text-sm text-stone-500 gap-2">
                  <MapPin className="w-4 h-4 text-amber-600" />
                  {item.origin[language]}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Where to buy section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-stone-100 flex flex-col md:flex-row items-center gap-6"
        >
          <div className="p-4 bg-amber-50 rounded-full text-amber-600 shrink-0">
            <ShoppingBag className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-stone-900 mb-2 font-serif">{t.whereToBuy}</h3>
            <p className="text-stone-600">{t.whereToBuyDesc}</p>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl w-full max-w-2xl overflow-hidden shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 sm:h-80">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name[language]}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-md transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-4 font-serif">
                  {selectedItem.name[language]}
                </h2>
                
                <p className="text-stone-600 text-lg mb-6 leading-relaxed">
                  {selectedItem.description[language]}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-stone-50 p-4 rounded-xl border border-stone-100">
                    <h4 className="font-semibold text-stone-900 mb-2 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-amber-600" />
                      {t.origin}
                    </h4>
                    <p className="text-stone-600">{selectedItem.origin[language]}</p>
                  </div>
                  
                  <div className="bg-stone-50 p-4 rounded-xl border border-stone-100">
                    <h4 className="font-semibold text-stone-900 mb-2 flex items-center gap-2">
                      <Info className="w-4 h-4 text-amber-600" />
                      {t.significance}
                    </h4>
                    <p className="text-stone-600">{selectedItem.significance[language]}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
