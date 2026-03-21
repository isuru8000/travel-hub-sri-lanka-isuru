import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Navigation, Loader2, ExternalLink, Star, Info } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { Language } from '../types';

interface Place {
  name: string;
  description: string;
  rating?: number;
  address?: string;
  url?: string;
  category?: string;
}

interface NearbyPlacesProps {
  language: Language;
}

export default function NearbyPlaces({ language }: NearbyPlacesProps) {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [places, setPlaces] = useState<Place[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [permissionDenied, setPermissionDenied] = useState(false);

  const fetchNearbyPlaces = async (lat: number, lng: number) => {
    setLoading(true);
    setError(null);
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("Gemini API key is missing.");
      }
      const ai = new GoogleGenAI({ apiKey });
      const prompt = language === 'EN' 
        ? "Find 6 interesting and popular nearby places (attractions, restaurants, landmarks, etc.) around my location in Sri Lanka. Provide their names, a short description, rating, and address."
        : "මගේ වටපිටාවේ ඇති රසවත් සහ ජනප්‍රිය ස්ථාන 6ක් (සංචාරක ස්ථාන, අවන්හල්, සලකුණු ආදිය) සොයා දෙන්න. ඒවායේ නම්, කෙටි විස්තරයක්, ශ්‍රේණිගත කිරීම සහ ලිපිනය ලබා දෙන්න.";

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          tools: [{ googleMaps: {} }, { googleSearch: {} }],
          toolConfig: {
            retrievalConfig: {
              latLng: {
                latitude: lat,
                longitude: lng
              }
            }
          }
        },
      });

      const text = response.text;
      const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
      
      // Try to parse the response or just use the grounding chunks
      if (chunks && chunks.length > 0) {
        const mappedPlaces: Place[] = chunks
          .filter(chunk => chunk.maps)
          .map(chunk => ({
            name: chunk.maps?.title || "Unknown Place",
            description: "", // We'll get this from the text if possible
            url: chunk.maps?.uri,
          }));
        
        // If we have text, let's try to match descriptions
        // For simplicity in this first version, we'll just use the grounding chunks if available
        // and maybe a fallback to parsing the text if chunks are empty
        if (mappedPlaces.length > 0) {
           setPlaces(mappedPlaces.slice(0, 6));
        } else {
           // Fallback to text parsing or just show the text
           setError(language === 'EN' ? "Could not find specific place details." : "ස්ථාන විස්තර සොයා ගැනීමට නොහැකි විය.");
        }
      } else {
        setError(language === 'EN' ? "No places found nearby." : "අසල ස්ථාන කිසිවක් හමු නොවීය.");
      }
    } catch (err) {
      console.error("Error fetching places:", err);
      setError(language === 'EN' ? "Failed to fetch nearby places." : "අසල ස්ථාන ලබා ගැනීමට අපොහොසත් විය.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          setLocation(coords);
          fetchNearbyPlaces(coords.lat, coords.lng);
        },
        (err) => {
          console.error("Geolocation error:", err);
          if (err.code === 1) {
            setPermissionDenied(true);
          } else {
            setError(language === 'EN' ? "Could not get your location." : "ඔබගේ ස්ථානය ලබා ගැනීමට නොහැකි විය.");
          }
        }
      );
    } else {
      setError(language === 'EN' ? "Geolocation is not supported by your browser." : "ඔබගේ බ්‍රවුසරය මගින් භූ පිහිටීම සහාය නොදක්වයි.");
    }
  }, []);

  return (
    <section className="w-full bg-white py-12 px-6 md:px-12 border-b border-stone-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-[0.3em] mb-3"
            >
              <Navigation size={14} />
              {language === 'EN' ? 'Live Discovery' : 'සජීවී සොයාගැනීම්'}
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-black text-stone-900 tracking-tight leading-none">
              {language === 'EN' ? 'Places Near You' : 'ඔබ අසල ඇති ස්ථාන'}
            </h2>
            <p className="mt-4 text-stone-500 max-w-xl text-lg">
              {language === 'EN' 
                ? "Real-time recommendations based on your current location in Sri Lanka."
                : "ශ්‍රී ලංකාවේ ඔබගේ වර්තමාන ස්ථානය මත පදනම් වූ සජීවී නිර්දේශ."}
            </p>
          </div>
          
          <button 
            onClick={() => location && fetchNearbyPlaces(location.lat, location.lng)}
            disabled={loading || !location}
            className="flex items-center gap-2 px-6 py-3 bg-stone-900 text-white rounded-full text-sm font-bold hover:bg-black transition-colors disabled:opacity-50"
          >
            {loading ? <Loader2 size={16} className="animate-spin" /> : <MapPin size={16} />}
            {language === 'EN' ? 'Refresh' : 'යාවත්කාලීන කරන්න'}
          </button>
        </div>

        {permissionDenied && (
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 text-center">
            <Info className="mx-auto text-amber-500 mb-4" size={32} />
            <h3 className="text-xl font-bold text-stone-900 mb-2">
              {language === 'EN' ? 'Location Access Required' : 'ස්ථාන ප්‍රවේශය අවශ්‍යයි'}
            </h3>
            <p className="text-stone-600 mb-6 max-w-md mx-auto">
              {language === 'EN' 
                ? "Please enable location services in your browser to see interesting places around you."
                : "ඔබ අවට ඇති රසවත් ස්ථාන බැලීමට කරුණාකර ඔබගේ බ්‍රවුසරයේ ස්ථාන සේවා සබල කරන්න."}
            </p>
          </div>
        )}

        {error && !permissionDenied && (
          <div className="bg-red-50 border border-red-100 rounded-2xl p-8 text-center text-red-600">
            {error}
          </div>
        )}

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-48 bg-stone-50 animate-pulse rounded-2xl border border-stone-100" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {places.map((place, idx) => (
                <motion.div
                  key={place.name + idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group bg-white border border-stone-200 rounded-2xl p-6 hover:shadow-xl hover:border-emerald-200 transition-all cursor-pointer"
                  onClick={() => place.url && window.open(place.url, '_blank')}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-stone-50 rounded-xl group-hover:bg-emerald-50 transition-colors">
                      <MapPin size={20} className="text-stone-400 group-hover:text-emerald-600" />
                    </div>
                    {place.url && (
                      <ExternalLink size={16} className="text-stone-300 group-hover:text-stone-600" />
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-stone-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    {place.name}
                  </h3>
                  
                  {place.address && (
                    <p className="text-sm text-stone-500 mb-4 line-clamp-2">
                      {place.address}
                    </p>
                  )}

                  <div className="flex items-center gap-4 mt-auto">
                    {place.rating && (
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                        <Star size={14} fill="currentColor" />
                        {place.rating}
                      </div>
                    )}
                    <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">
                      {language === 'EN' ? 'View on Maps' : 'සිතියම බලන්න'}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}
