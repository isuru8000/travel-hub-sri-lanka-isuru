
import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Sparkles, X, Send, Compass, Loader2, History, Info, Square, Zap, Cpu, ShieldCheck, MapPin, ExternalLink, Brain, Globe, Bot, Navigation, Lock, Orbit, Activity, Camera, Image as ImageIcon, Trash2, Volume2, VolumeX, Mic, MicOff, RotateCcw } from 'lucide-react';
import { Language, Destination } from '../types';
import { UI_STRINGS } from '../constants';
import { GroundingLink, ChatMessage } from '../services/gemini';
import { DESTINATIONS_DATA } from '../destination_details';

interface Message {
  role: 'user' | 'bot';
  text: string;
  links?: GroundingLink[];
  isThinking?: boolean;
  image?: string;
}

interface AIModalProps {
  language: Language;
  onNavigate?: (dest: Destination | string) => void;
}

const AIModal: React.FC<AIModalProps> = ({ language, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isDeepMode, setIsDeepMode] = useState(false);
  const [needsApiKey, setNeedsApiKey] = useState(false);
  const [userLocation, setUserLocation] = useState<{ latitude: number; longitude: number } | undefined>();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Voice & Chat Additions
  const [isListening, setIsListening] = useState(false);
  const [speakingIndex, setSpeakingIndex] = useState<number | null>(null);
  const recognitionRef = useRef<any>(null);

  const scrollRef = useRef<HTMLDivElement>(null);
  const hasGreeted = useRef(false);
  const stopTypingRef = useRef(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setUserLocation({
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude
          });
        },
        (err) => console.debug("Location access denied", err)
      );
    }
  }, []);

  // Web Speech API Voice Input Setup
  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      const rec = new SpeechRecognition();
      rec.continuous = false;
      rec.interimResults = false;
      rec.lang = language === 'SI' ? 'si-LK' : 'en-US';

      rec.onstart = () => {
        setIsListening(true);
      };

      rec.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
      };

      rec.onerror = (e: any) => {
        console.error("Speech recognition error:", e);
        setIsListening(false);
      };

      rec.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = rec;
    }
  }, [language]);

  const toggleListening = () => {
    if (!recognitionRef.current) return;
    if (isListening) {
      recognitionRef.current.stop();
    } else {
      recognitionRef.current.start();
    }
  };

  // Text to Speech Response Generation
  const speakText = (text: string, index: number) => {
    if (window.speechSynthesis) {
      if (speakingIndex === index) {
        window.speechSynthesis.cancel();
        setSpeakingIndex(null);
      } else {
        window.speechSynthesis.cancel(); // cancel existing playback
        const cleanText = text.replace(/\[NAVIGATE:[^\]]+\]/g, '').trim();
        const utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.lang = language === 'SI' ? 'si-LK' : 'en-US';
        
        utterance.onend = () => {
          setSpeakingIndex(null);
        };
        utterance.onerror = () => {
          setSpeakingIndex(null);
        };

        setSpeakingIndex(index);
        window.speechSynthesis.speak(utterance);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, [isOpen]);

  const suggestions = [
    { 
      id: 'romantic', 
      icon: <Sparkles size={16} />, 
      EN: "Plan a romantic 2-day getaway in Ella with cozy tea resorts & scenic waterfalls 🌸", 
      SI: "දියඇලි සහ තේ වතු මැද ඇල්ල ආශ්‍රිතව පෙම්වතුන් සඳහා දින 2ක කදිම සැලසුමක් සකසන්න 🌸",
      label: { EN: "Romantic Ella", SI: "පෙම්වතුන්ගේ ඇල්ල" }
    },
    { 
      id: 'secret_beaches', 
      icon: <Compass size={16} />, 
      EN: "Where are the clean and secret beaches in Mirissa to swim with marine turtles? 🐢", 
      SI: "හික්කඩුව සහ මිරිස්සේ කැස්බෑවුන් සමඟ පිහිනන්න පුළුවන් රහස් වෙරළ තීරයන් මොනවාද? 🐢",
      label: { EN: "Secret Beaches", SI: "නිහඬ වෙරළ තීරු" }
    },
    { 
      id: 'village_food', 
      icon: <Bot size={16} />, 
      EN: "Introduce me to authentic village food spots (e.g., kos, pol sambol, red rice) 🍲", 
      SI: "ලංකාවේ නියම කොස්, පොල් සම්බෝල, සහ රතු බත් රස බැලිය හැකි හොඳම ගැමි කෑම ස්ථාන මොනවාද? 🍲",
      label: { EN: "Village Food Trail", SI: "දේශීය රසවත් ආහාර" }
    },
    { 
      id: 'pack_list', 
      icon: <ShieldCheck size={16} />, 
      EN: "What essential trekking gear should I pack for the Adams Peak sunrise climb? 🎒", 
      SI: "ශ්‍රී පාද මහා කඳු නැගීම සඳහා ගියර් ගබඩාවෙන් මා රැගෙන යා යුතු අත්‍යවශ්‍යම උපකරණ මොනවාද? 🎒",
      label: { EN: "Adams Peak Packing", SI: "ශ්‍රී පාද ඇසුරුම්" }
    },
    { 
      id: 'blue_train', 
      icon: <Navigation size={16} />, 
      EN: "How do I book tickets for the scenic Blue Train from Kandy to Ella? 🚂", 
      SI: "මහනුවර සිට ඇල්ල දක්වා යන සුන්දර නිල් කඳුකර දුම්රියේ ආසන වෙන් කරගන්නේ කෙසේද? 🚂",
      label: { EN: "Scenic Rail Guide", SI: "කඳුකර දුම්රිය" }
    },
    { 
      id: 'leeches', 
      icon: <ShieldCheck size={16} />, 
      EN: "How do I avoid leeches and travel safely when trekking Sinharaja forest? 🌿", 
      SI: "සිංහරාජ වන මැද ඇවිදීමේදී කූඩැල්ලන්ගෙන් ආරක්ෂා වීමට හොඳම ක්‍රම මොනවාද? 🌿",
      label: { EN: "Rainforest Safety", SI: "සිංහරාජ ආරක්ෂාව" }
    },
    { 
      id: 'sunset_fort', 
      icon: <Globe size={16} />, 
      EN: "What are the best golden sunset evaluation points inside historic Galle Fort? 🌅", 
      SI: "ගාලු කොටුවේ සුන්දර හිරු බැස යාම නැරඹීමට හොඳම සහ නිදහස් ස්ථාන මොනවාද? 🌅",
      label: { EN: "Galle Fort Sunset", SI: "ගාලු කොටුව හිරු" }
    },
    { 
      id: 'sacred_temple', 
      icon: <History size={16} />, 
      EN: "What is the proper etiquette and attire when visiting Ruwanwelisaya and Sri Maha Bodhi? 🪷", 
      SI: "රුවන්වැලිසෑය සහ ජය ශ්‍රී මහා බෝධින් වහන්සේ වැඳපුදා ගැනීමේදී අනුගමනය කළ යුතු වත්පිළිවෙත් මොනවාද? 🪷",
      label: { EN: "Sacred City Tour", SI: "අනුරාධපුර වත්පිළිවෙත්" }
    }
  ];

  const stopAI = () => {
    stopTypingRef.current = true;
    setIsLoading(false);
    setIsTyping(false);
  };

  const typeMessage = async (fullText: string, links?: GroundingLink[], wasThinking: boolean = false) => {
    if (!fullText) return;
    setIsTyping(true);
    stopTypingRef.current = false;
    
    setMessages(prev => [...prev, { role: 'bot', text: '', links, isThinking: wasThinking }]);

    const chars = Array.from(fullText);
    let accumulated = "";

    for (let i = 0; i < chars.length; i++) {
      if (stopTypingRef.current) break;
      accumulated += chars[i];
      
      setMessages(prev => {
        const newMessages = [...prev];
        if (newMessages.length > 0) {
          newMessages[newMessages.length - 1] = { 
            role: 'bot', 
            text: accumulated,
            links,
            isThinking: wasThinking
          };
        }
        return newMessages;
      });

      const isWhitespace = /\s/.test(chars[i]);
      const delay = isWhitespace ? 15 : (fullText.length > 300 ? 1 : 5);
      await new Promise(resolve => setTimeout(resolve, delay + Math.random() * 2));
    }
    
    setIsTyping(false);
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (isOpen && !hasGreeted.current && messages.length === 0) {
      hasGreeted.current = true;
      const initialText = language === 'EN' 
        ? "Ayubowan! 🌸 Warmest greetings from Sri Lanka! I am your sweetheart Ceylon Guide AI and travel consultant. 🏝️ Real-time maps, scenic rail journeys, pristine village dinners, and hiking adventures are loaded inside my heart. Let's make your Sri Lankan journey magical together. What are you dreaming of exploring today? ✨" 
        : "ආයුබෝවන්! 🌸 ලක්දිව දෙසට ඔබට ඉත සිතින් සුභ පතමු! මම ඔබගේ සුහදශීලී ලංකා සංචාරක AI සහායකයා වෙමි. 🏝️ සජීවී සිතියම්, සුන්දර දුම්රිය ගමන්, රසවත් ගැමි කෑම වේල්, සහ කඳුකර ගවේෂණ පිළිබඳ සියලුම දෑ මම කියා දෙන්නෙමි. අද අපි ගවේෂණය කරන්නේ කුමක්ද? ✨";
      
      const timer = setTimeout(() => {
        typeMessage(initialText);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [isOpen, language]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: isTyping || isLoading ? 'auto' : 'smooth'
      });
    }
  }, [messages, isLoading, isTyping, selectedImage]);

  const handleSend = async (customText?: string) => {
    const textToSend = customText || input;
    if ((!textToSend.trim() && !selectedImage) || isLoading || isTyping) return;

    setInput('');
    stopTypingRef.current = false;
    
    // Add user message
    const newMessages = [...messages, { role: 'user' as const, text: textToSend, image: selectedImage || undefined }];
    setMessages(newMessages);
    
    const imageToSend = selectedImage ? {
      data: selectedImage.split(',')[1],
      mimeType: selectedImage.split(',')[0].split(':')[1].split(';')[0]
    } : undefined;

    setSelectedImage(null); // Clear image after sending
    
    setIsLoading(true);
    setNeedsApiKey(false);

    // Prepare history for API
    const history: ChatMessage[] = newMessages.map(m => ({
      role: m.role === 'user' ? 'user' : 'model',
      text: m.text
    }));

    try {
      // Initialize bot message
      setMessages(prev => [...prev, { role: 'bot', text: '', isThinking: isDeepMode }]);
      
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: textToSend,
          history,
          language,
          location: userLocation,
          isThinkingMode: isDeepMode,
          image: imageToSend,
        }),
      });

      if (!response.ok) {
        throw new Error(`Server returned status ${response.status}`);
      }

      const reader = response.body?.getReader();
      if (!reader) {
        throw new Error('ReadableStream not supported by browser or response body is null');
      }

      const decoder = new TextDecoder('utf-8');
      let buffer = "";
      let rawAccumulatedText = "";
      let displayText = "";
      let accumulatedLinks: GroundingLink[] = [];
      let isCheckingTag = true;
      let hasNavigated = false;

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        if (stopTypingRef.current) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        // Keep the last partial line in the buffer
        buffer = lines.pop() || "";

        for (const line of lines) {
          if (!line.trim()) continue;
          let chunk: any;
          try {
            chunk = JSON.parse(line);
          } catch (e) {
            console.warn("Failed to parse chunk", line, e);
            continue;
          }

          if (chunk.error === "API_KEY_REQUIRED") {
            setNeedsApiKey(true);
            setMessages(prev => prev.slice(0, -1));
            setIsLoading(false);
            return;
          }

          if (chunk.links) {
            accumulatedLinks = [...accumulatedLinks, ...chunk.links];
          }

          if (chunk.text) {
            rawAccumulatedText += chunk.text;
            
            if (isCheckingTag) {
              if (rawAccumulatedText.trimStart().startsWith('[')) {
                const closingIndex = rawAccumulatedText.indexOf(']');
                if (closingIndex !== -1) {
                  isCheckingTag = false;
                  const tag = rawAccumulatedText.substring(0, closingIndex + 1);
                  const navMatch = tag.match(/\[NAVIGATE:([a-zA-Z0-9-']+)\]/i);
                  if (navMatch) {
                    const destId = navMatch[1].toLowerCase();
                    const dest = DESTINATIONS_DATA.find(d => d.id === destId);
                    if (dest && onNavigate) {
                      onNavigate(dest);
                    } else if (onNavigate) {
                      onNavigate(destId);
                    }
                    hasNavigated = true;
                  }
                } else if (rawAccumulatedText.length > 50) {
                  isCheckingTag = false;
                } else {
                  continue;
                }
              } else {
                isCheckingTag = false;
              }
            }

            if (!isCheckingTag) {
              let cleanText = rawAccumulatedText;
              if (hasNavigated || (rawAccumulatedText.includes('[NAVIGATE:') && rawAccumulatedText.includes(']'))) {
                cleanText = rawAccumulatedText.replace(/\[NAVIGATE:[a-zA-F0-9-']+\]\s*/i, '').trimStart();
                // Match custom destination IDs like adam'speak too
                cleanText = cleanText.replace(/\[NAVIGATE:[a-zA-Z0-9-']+\]\s*/i, '').trimStart();
              }

              const newChars = Array.from(cleanText.slice(displayText.length));
              for (const char of newChars) {
                if (stopTypingRef.current) break;
                displayText += char;
                
                setMessages(prev => {
                  const updated = [...prev];
                  updated[updated.length - 1] = {
                    role: 'bot',
                    text: displayText,
                    links: accumulatedLinks.length > 0 ? accumulatedLinks : undefined,
                    isThinking: isDeepMode
                  };
                  return updated;
                });
                
                await new Promise(resolve => setTimeout(resolve, 15));
              }
            }
          } else {
            setMessages(prev => {
              const updated = [...prev];
              updated[updated.length - 1] = {
                role: 'bot',
                text: displayText,
                links: accumulatedLinks.length > 0 ? accumulatedLinks : undefined,
                isThinking: isDeepMode
              };
              return updated;
            });
          }
        }
      }
    } catch (error: any) {
      console.error("Stream error:", error);
      setMessages(prev => {
        const updated = [...prev];
        const errorText = language === 'EN' ? `Connection interrupted. Please try again. (${error?.message || 'Unknown'})` : `සම්බන්ධතාවය බිඳවැටුණි. කරුණාකර නැවත උත්සාහ කරන්න. (${error?.message || 'Unknown'})`;
        if (updated.length > 0 && updated[updated.length - 1].role === 'bot') {
          updated[updated.length - 1] = {
            role: 'bot',
            text: errorText,
            isThinking: false
          };
        } else {
          updated.push({
            role: 'bot',
            text: errorText
          });
        }
        return updated;
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeySelection = async () => {
    if ((window as any).aistudio?.openSelectKey) {
      await (window as any).aistudio.openSelectKey();
      setNeedsApiKey(false);
      handleSend(); // Retry last message? Ideally we should store it.
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-[60] flex items-center gap-3 group/ai animate-bounce duration-[3000ms]">
        {/* Soft Aura - Gold / Orange light glow */}
        <div className="absolute inset-[-12px] bg-gradient-to-tr from-orange-400/20 to-amber-400/20 rounded-full blur-xl group-hover/ai:opacity-80 transition-opacity animate-pulse"></div>
        
        {/* Chat Tooltip speech bubble */}
        {!isOpen && (
          <button 
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex flex-col items-end pointer-events-none transform transition-all duration-500 hover:scale-105"
          >
            <div className="bg-white text-slate-800 px-4 py-2.5 rounded-2xl border border-slate-200/80 text-[11px] font-black uppercase tracking-wider shadow-lg flex items-center gap-2 animate-pulse whitespace-nowrap">
              <Sparkles size={12} className="text-orange-500 animate-spin" />
              {language === 'EN' ? 'Ask Ceylon AI!' : 'ලංකා AI අහන්න!'}
            </div>
            <div className="w-2.5 h-2.5 bg-white rotate-45 mr-6 -mt-1.5 border-r border-b border-slate-200/80"></div>
          </button>
        )}
        
        <button 
          onClick={() => setIsOpen(true)}
          className="relative w-16 h-16 sm:w-20 sm:h-20 bg-white text-orange-500 rounded-3xl shadow-[0_20px_50px_rgba(15,23,42,0.15)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center border border-slate-200 overflow-hidden group/btn"
        >
          {/* Pulsing tropical-gold background fill on hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-50/50 via-white to-amber-50/50 opacity-0 group-hover/btn:opacity-100 transition-all duration-500" />
          <Bot size={30} className="relative z-10 text-orange-500 transition-transform duration-500 group-hover/btn:rotate-12 group-hover/btn:scale-110" />
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-x-0 bottom-0 h-[80vh] sm:inset-auto sm:bottom-6 sm:right-6 sm:w-[500px] sm:h-[800px] sm:max-h-[92vh] bg-white text-slate-800 shadow-[0_30px_100px_rgba(15,23,42,0.2)] rounded-t-[2.5rem] sm:rounded-[3rem] z-[100] flex flex-col overflow-hidden animate-in slide-in-from-bottom-20 duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] border border-slate-200/80 backdrop-blur-xl">
          
          {/* Header section with Ceylon Heritage and controllers */}
          <div className="relative shrink-0 p-6 bg-gradient-to-r from-slate-50 via-amber-50/40 to-slate-50 border-b border-slate-200/60">
            {/* Top decorative subtle rainbow light beam */}
            <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-rose-500 via-amber-400 to-emerald-400 opacity-90" />
            
            <div className="relative flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 p-3 rounded-2xl border border-orange-500/20 relative shadow-inner">
                  <Sparkles size={24} className="text-orange-500 animate-pulse" />
                  <span className="absolute bottom-1 right-1 w-2.5 h-2.5 bg-emerald-550 rounded-full border-2 border-slate-50 animate-ping" />
                </div>
                <div>
                  <h3 className="font-serif font-black text-lg tracking-tight text-slate-900 flex items-center gap-2">
                    {language === 'EN' ? 'Ceylon AI Assistant' : 'ලංකා AI සහායක'}
                  </h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                      {(isLoading || isTyping) ? (language === 'EN' ? 'THINKING...' : 'සිතමින්...') : (language === 'EN' ? 'ONLINE' : 'සක්‍රීයයි')}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                {/* Clear Chat History Button */}
                {messages.length > 0 && (
                  <button 
                    onClick={() => {
                      if (window.speechSynthesis) window.speechSynthesis.cancel();
                      setMessages([]);
                      hasGreeted.current = false;
                    }}
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-rose-500 hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all shadow-sm"
                    title={language === 'EN' ? "Clear Chat" : "කතාබහ මකන්න"}
                  >
                    <RotateCcw size={16} />
                  </button>
                )}

                <button 
                  onClick={() => setIsOpen(false)} 
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all shadow-sm"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* AI Reasoning Mode & Lang Toggle Row */}
            <div className="flex justify-between items-center mt-4 pt-4 border-t border-slate-200/50">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsDeepMode(!isDeepMode)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-[10px] font-extrabold uppercase tracking-wider transition-all duration-300 ${
                    isDeepMode 
                      ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white border-none shadow-md shadow-orange-500/10' 
                      : 'bg-slate-100 text-slate-600 border-slate-200/80 hover:text-slate-900 hover:border-slate-300'
                  }`}
                >
                  <Brain size={12} className={isDeepMode ? 'text-white animate-bounce' : ''} />
                  <span>{language === 'EN' ? 'Deep Analytics' : 'විශේෂ තර්කනය'}</span>
                </button>
              </div>
              <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                {language === 'EN' ? 'Sri Lanka Guide Pro' : 'ලංකා සංචාරක මඟපෙන්වන්න'}
              </span>
            </div>
          </div>

          {/* Messages layout with speech feedback */}
          <div 
            ref={scrollRef} 
            data-lenis-prevent
            className="flex-grow p-6 overflow-y-auto space-y-6 bg-slate-50/40 scroll-smooth no-scrollbar relative shadow-inner"
          >
            {/* Ambient Animated Background Blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
              <style dangerouslySetInnerHTML={{__html: `
                @keyframes floatBlob1 {
                  0% { transform: translate(0px, 0px) scale(1); }
                  33% { transform: translate(40px, -60px) scale(1.2); }
                  66% { transform: translate(-30px, 30px) scale(0.85); }
                  100% { transform: translate(0px, 0px) scale(1); }
                }
                @keyframes floatBlob2 {
                  0% { transform: translate(0px, 0px) scale(1); }
                  50% { transform: translate(-50px, 40px) scale(1.15); }
                  100% { transform: translate(0px, 0px) scale(1); }
                }
                @keyframes floatBlob3 {
                  0% { transform: translate(0px, 0px) scale(1); }
                  33% { transform: translate(-20px, -50px) scale(0.8); }
                  66% { transform: translate(50px, 30px) scale(1.25); }
                  100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-blob-1 {
                  animation: floatBlob1 2s infinite alternate ease-in-out;
                }
                .animate-blob-2 {
                  animation: floatBlob2 4s infinite alternate ease-in-out;
                }
                .animate-blob-3 {
                  animation: floatBlob3 3s infinite alternate ease-in-out;
                }
              `}} />
              <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-red-500/40 mix-blend-multiply filter blur-[70px] animate-blob-1" />
              <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-blue-500/35 mix-blend-multiply filter blur-[70px] animate-blob-2" />
              <div className="absolute top-10 right-1/4 w-72 h-72 rounded-full bg-amber-400/45 mix-blend-multiply filter blur-[60px] animate-blob-3" />
            </div>

            {needsApiKey && (
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center space-y-6 animate-in fade-in duration-700 p-6 bg-white/70 backdrop-blur-md rounded-3xl border border-slate-200 shadow-md">
                <div className="w-16 h-16 bg-white border border-slate-200 rounded-2xl flex items-center justify-center shadow-lg">
                  <Lock size={24} className="text-orange-500" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-serif font-bold text-slate-800">Uplink Restricted</h4>
                  <p className="text-xs text-slate-500 max-w-xs">
                    Please synchronize your AI Studio API key to activate the Ceylon Intelligence Unit.
                  </p>
                </div>
                <button 
                  onClick={handleKeySelection}
                  className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:opacity-90 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-orange-500/10"
                >
                  <Sparkles size={12} className="text-white" />
                  Connect Key
                </button>
              </div>
            )}

            {/* Micro listening active indicator bubble */}
            {isListening && (
              <div className="relative z-10 flex items-center justify-center gap-3 p-4 bg-red-50 border border-red-200/80 rounded-2xl animate-pulse ml-1 max-w-[90%]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                </span>
                <span className="text-xs text-red-650 font-extrabold uppercase tracking-wider">
                  {language === 'EN' ? 'Listening to your voice...' : 'මා හැඟුම් ග්‍රහණය කරගනී...'}
                </span>
                <div className="flex gap-0.5 items-end h-3 ml-2">
                  <span className="w-0.5 h-1.5 bg-red-450 rounded-full animate-[bounce_0.8s_infinite_0s]" />
                  <span className="w-0.5 h-3 bg-red-450 rounded-full animate-[bounce_0.8s_infinite_0.15s]" />
                  <span className="w-0.5 h-2 bg-red-450 rounded-full animate-[bounce_0.8s_infinite_0.3s]" />
                  <span className="w-0.5 h-1.5 bg-red-450 rounded-full animate-[bounce_0.8s_infinite_0.45s]" />
                </div>
              </div>
            )}

            {!needsApiKey && messages.map((m, i) => (
              <div key={i} className={`flex flex-col animate-in fade-in duration-500 relative z-10 ${m.role === 'user' ? 'items-end animate-slide-in-right' : 'items-start animate-slide-in-left'}`}>
                {m.role === 'bot' && (
                  <div className="flex items-center justify-between w-full mb-1.5 px-1">
                    <span className="text-[10px] font-black text-orange-600 tracking-wider flex items-center gap-1.5 uppercase">
                      <Sparkles size={11} className="text-orange-500 animate-spin duration-3000" /> 
                      {language === 'EN' ? 'Ceylon AI Assistant' : 'ලංකා AI සහායක'}
                    </span>
                    <button 
                      onClick={() => speakText(m.text, i)}
                      className={`flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-xl border transition-all ${
                        speakingIndex === i 
                          ? 'text-red-500 border-red-300 bg-red-50/50' 
                          : 'text-slate-500 border-slate-200 bg-white hover:text-slate-800 hover:bg-slate-50'
                      }`}
                      title={speakingIndex === i ? "Stop playback" : "Read text out loud"}
                    >
                      {speakingIndex === i ? (
                        <>
                          <VolumeX size={11} className="text-red-550 animate-pulse" />
                          <span>Stop</span>
                        </>
                      ) : (
                        <>
                          <Volume2 size={11} className="text-slate-500" />
                          <span>Speak</span>
                        </>
                      )}
                    </button>
                  </div>
                )}
                
                <div className={`relative max-w-[88%] p-5 rounded-3xl border text-left shadow-md transition-all duration-300 ${
                  m.role === 'user' 
                    ? 'bg-gradient-to-tr from-emerald-600 via-emerald-600 to-teal-500 text-white border-emerald-500/25 rounded-tr-none shadow-emerald-500/5' 
                    : 'bg-white text-slate-800 rounded-tl-none border-slate-200/90 shadow-[0_4px_25px_rgba(15,23,42,0.03)] hover:border-slate-300/80'
                }`}>
                  {m.image && (
                    <div className="mb-3 rounded-2xl overflow-hidden shadow-inner border border-slate-200">
                      <img src={m.image} alt="User Attachment" className="w-full h-auto max-h-48 object-cover" />
                    </div>
                  )}
                  <div className="text-sm leading-relaxed prose prose-slate prose-sm max-w-none text-left font-sans text-slate-800 animate-in fade-in duration-300">
                    <ReactMarkdown>{m.text}</ReactMarkdown>
                  </div>
                  
                  {m.links && m.links.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                      <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Grounding Sources:</div>
                      {m.links.map((link, lIdx) => (
                        <a 
                          key={lIdx}
                          href={link.uri}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50/60 text-slate-700 hover:bg-slate-100 transition-colors border border-slate-200"
                        >
                          <div className="text-orange-500"><MapPin size={13} /></div>
                          <span className="text-[11px] font-bold truncate">{link.title}</span>
                          <ExternalLink size={11} className="ml-auto text-orange-500/80" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Suggestions list when messages are empty (or only the initial greet is shown) */}
            {messages.length <= 1 && !isLoading && !isTyping && !needsApiKey && (
              <div className="relative z-10 grid grid-cols-1 gap-3 mt-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] mb-1 pl-1 flex items-center gap-1.5">
                  <Compass size={12} className="text-orange-500 animate-spin" />
                  {language === 'EN' ? 'Suggested Queries' : 'යෝජිත ප්‍රශ්න'}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {suggestions.map((suggestion) => (
                    <button
                      key={suggestion.id}
                      onClick={() => handleSend(suggestion[language])}
                      className="flex items-start gap-3.5 p-4 bg-white/80 border border-slate-200 rounded-2xl text-left hover:border-orange-500/30 hover:bg-gradient-to-r hover:from-white hover:to-orange-50/15 transition-all group duration-300 shadow-sm"
                    >
                      <div className="p-2.5 bg-slate-50 text-orange-500 border border-slate-100 rounded-xl group-hover:bg-orange-500/10 group-hover:text-orange-600 group-hover:scale-110 transition-all shrink-0">
                        {suggestion.icon}
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-black text-slate-800 group-hover:text-orange-600 transition-colors">
                          {suggestion.label[language]}
                        </div>
                        <div className="text-[11px] text-slate-500 leading-snug line-clamp-2 mt-1 font-sans">
                          {suggestion[language]}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {isLoading && !needsApiKey && (
              <div className="relative z-10 flex flex-col items-start gap-2 animate-pulse pl-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Ceylon AI</span>
                <div className="bg-white text-slate-700 p-4 rounded-3xl rounded-tl-none border border-slate-200 shadow-md flex items-center gap-3">
                  <div className="relative w-4 h-4 flex items-center justify-center">
                    <Loader2 size={16} className="animate-spin text-orange-500" />
                  </div>
                  <span className="text-xs font-sans">
                    {isDeepMode ? 'Generating deep reasoning route...' : 'Retrieving archives...'}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Chat Controller Controls */}
          <div className="shrink-0 bg-white p-6 pt-4 border-t border-slate-100 shadow-[0_-15px_50px_rgba(15,23,42,0.06)] relative">
            {/* Image attachment Preview */}
            {selectedImage && (
              <div className="relative inline-block mb-4 animate-in zoom-in-50 duration-300">
                <div className="relative w-18 h-18 rounded-2xl overflow-hidden border-2 border-orange-500/40 shadow-xl">
                  <img src={selectedImage} alt="Preview" className="w-full h-full object-cover" />
                  <button 
                    onClick={() => setSelectedImage(null)}
                    className="absolute inset-0 bg-slate-950/60 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity"
                    title="Remove image"
                  >
                    <Trash2 size={16} className="text-red-400" />
                  </button>
                </div>
              </div>
            )}

            <div className="flex gap-3 items-center">
              <input 
                type="file" 
                accept="image/*" 
                className="hidden" 
                ref={fileInputRef}
                onChange={handleImageSelect}
              />
              
              <button 
                onClick={() => fileInputRef.current?.click()}
                disabled={isLoading || needsApiKey}
                className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100/90 hover:text-slate-800 hover:scale-105 active:scale-95 transition-all disabled:opacity-30 disabled:pointer-events-none shadow-sm"
                title="Identify Image (Ceylon Food/Worship)"
              >
                <Camera size={18} />
              </button>

              {/* Speech to text microphone button */}
              <button 
                onClick={toggleListening}
                disabled={isLoading || needsApiKey}
                className={`p-3.5 rounded-2xl border transition-all relative hover:scale-105 active:scale-95 shadow-sm ${
                  isListening 
                    ? 'bg-red-500/10 text-red-500 border-red-500/30 animate-pulse' 
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-800'
                }`}
                title={isListening ? "Listening..." : "Enable Voice Recognition"}
              >
                {isListening ? <MicOff size={18} /> : <Mic size={18} />}
              </button>

              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                disabled={isLoading || isTyping || needsApiKey}
                placeholder={isListening ? (language === 'EN' ? "Listening... Speak now 🎙️" : "සවන් දෙමින්... දැන් කතා කරන්න 🎙️") : (language === 'EN' ? "Ask Ceylon AI anything... 🌸" : "ලංකා AI වෙතින් ඕනෑම දෙයක් අහන්න... 🌸")}
                className="flex-grow py-3 px-4.5 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:bg-white focus:border-orange-500/50 text-sm text-slate-800 placeholder-slate-400 focus:ring-4 focus:ring-orange-500/10 transition-all font-sans shadow-inner"
              />
              
              {isLoading || isTyping ? (
                <button 
                  onClick={stopAI}
                  className="p-3.5 bg-red-50 text-red-500 border border-red-200 rounded-2xl hover:bg-red-100 transition-colors shadow-sm"
                >
                  <Square size={18} />
                </button>
              ) : (
                <button 
                  onClick={() => handleSend()}
                  disabled={(!input.trim() && !selectedImage) || needsApiKey}
                  className="p-3.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl hover:from-orange-600 hover:to-amber-600 disabled:opacity-30 disabled:pointer-events-none transition-all shadow-lg shadow-orange-500/10 border border-orange-400/20"
                >
                  <Send size={18} />
                </button>
              )}
            </div>
            <div className="text-[10px] text-slate-450 text-center mt-3.5 uppercase tracking-widest font-bold flex items-center justify-center gap-1">
              <span className="w-1 h-1 rounded-full bg-slate-300" />
              Ceylon AI • Pure Travel Intelligence • 2026
              <span className="w-1 h-1 rounded-full bg-slate-300" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIModal;
