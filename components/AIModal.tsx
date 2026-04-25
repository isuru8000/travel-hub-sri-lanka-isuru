
import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Sparkles, X, Send, Compass, Loader2, History, Info, Square, Zap, Cpu, ShieldCheck, MapPin, ExternalLink, Brain, Globe, Bot, Navigation, Lock, Orbit, Activity, Camera, Image as ImageIcon, Trash2 } from 'lucide-react';
import { Language, Destination } from '../types';
import { UI_STRINGS } from '../constants';
import { streamLankaGuideResponse, GroundingLink, ChatMessage } from '../services/gemini';
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

  const suggestions = [
    { 
      id: 'nearby', 
      icon: <MapPin size={16} />, 
      EN: "What are the best local restaurants near me right now?", 
      SI: "දැනට මා අසල ඇති හොඳම දේශීය අවන්හල් මොනවාද?",
      label: { EN: "Nearby Guide", SI: "අසල ස්ථාන" }
    },
    { 
      id: 'history', 
      icon: <History size={16} />, 
      EN: "Explain the deep history of the Sigiriya Lion Rock", 
      SI: "සීගිරියේ ගැඹුරු ඉතිහාසය විස්තර කරන්න",
      label: { EN: "Deep History", SI: "ගැඹුරු ඉතිහාසය" }
    },
    { 
      id: 'itinerary', 
      icon: <Brain size={16} />, 
      EN: "Analyze the best 3-day cultural route for a historian", 
      SI: "ඉතිහාසඥයෙකු සඳහා හොඳම තෙදින සංස්කෘතික ගමන් මග විශ්ලේෂණය කරන්න",
      label: { EN: "Complex Logic", SI: "සංකීර්ණ තර්කනය" }
    },
    { 
      id: 'image_analysis', 
      icon: <ImageIcon size={16} />, 
      EN: "Can you identify this Sri Lankan food from the image?", 
      SI: "මෙම පින්තූරයෙන් ශ්‍රී ලාංකික ආහාරය හඳුනාගත හැකිද?",
      label: { EN: "Image Analysis", SI: "පින්තූර විශ්ලේෂණය" }
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
        ? "Ayubowan! I am the Lanka Guide Intelligence Unit. 🏛️ My neural archives are synchronized with real-time data. I can help you find nearby treasures or perform deep reasoning on complex travel logistics. How can I assist you?" 
        : "ආයුබෝවන්! මම ලංකා ගයිඩ් බුද්ධි ඒකකයයි. 🏛️ මගේ සියලුම දත්ත දැන් සජීවීව සම්බන්ධ වී ඇත. අද අපි ගවේෂණය කරන්නේ කුමක්ද?";
      
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
      
      const generator = streamLankaGuideResponse(textToSend, history, language, userLocation, isDeepMode, imageToSend);
      
      let rawAccumulatedText = "";
      let displayText = "";
      let accumulatedLinks: GroundingLink[] = [];
      let isCheckingTag = true;
      let hasNavigated = false;

      for await (const chunk of generator) {
        if (stopTypingRef.current) break;

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
              cleanText = rawAccumulatedText.replace(/\[NAVIGATE:[a-zA-Z0-9-']+\]\s*/i, '').trimStart();
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
    } catch (error) {
      console.error("Stream error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "Connection interrupted. Please try again." }]);
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
      <div className="fixed bottom-6 right-6 z-[60] group/ai">
        {/* Soft Aura - Gold */}
        <div className="absolute inset-[-12px] bg-gradient-to-tr from-amber-500/20 to-orange-500/20 rounded-full blur-xl group-hover:opacity-60 transition-opacity"></div>
        
        <button 
          onClick={() => setIsOpen(true)}
          className="relative w-16 h-16 sm:w-20 sm:h-20 bg-stone-900 text-amber-100 rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center border border-amber-900/30 overflow-hidden"
        >
           <Bot size={28} />
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-x-0 bottom-0 h-[65vh] sm:inset-auto sm:bottom-6 sm:right-6 sm:w-[480px] sm:h-[800px] sm:max-h-[92vh] bg-white shadow-[0_60px_150px_rgba(0,0,0,0.4)] rounded-t-[2.5rem] sm:rounded-[4rem] z-[100] flex flex-col overflow-hidden animate-in slide-in-from-bottom-20 duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] border border-gray-100">
          
          <div className="relative shrink-0 p-8 bg-stone-900 text-stone-100">
            <div className="relative flex justify-between items-center">
              <div className="flex items-center gap-4">
                  <div className="bg-stone-800 p-3 rounded-xl border border-stone-700">
                      <Bot size={24} className="text-amber-500" />
                  </div>
                <div>
                  <h3 className="font-serif font-bold text-xl tracking-tight text-amber-50">
                    Ceylon AI
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span className="text-[10px] font-medium text-stone-400 uppercase tracking-widest">
                      {(isLoading || isTyping) ? 'THINKING...' : 'ONLINE'}
                    </span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-stone-800 hover:bg-stone-700 transition-all"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          <div 
            ref={scrollRef} 
            data-lenis-prevent
            className="flex-grow p-6 overflow-y-auto space-y-6 bg-stone-50 scroll-smooth no-scrollbar relative"
          >
            {needsApiKey && (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-6 animate-in fade-in duration-700 p-6">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-stone-200">
                  <Lock size={24} className="text-stone-400" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-serif font-bold text-stone-900">Uplink Restricted</h4>
                  <p className="text-xs text-stone-500 max-w-xs">
                    Please synchronize your project key to proceed.
                  </p>
                </div>
                <button 
                  onClick={handleKeySelection}
                  className="px-6 py-3 bg-stone-900 text-stone-100 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-stone-800 transition-all shadow-lg"
                >
                  <Sparkles size={12} className="text-amber-500" />
                  Verify Key
                </button>
              </div>
            )}

            {!needsApiKey && messages.map((m, i) => (
              <div key={i} className={`flex flex-col animate-in fade-in duration-500 ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
                {m.role === 'bot' && (
                  <div className="flex items-center gap-2 mb-1 ml-1">
                    <span className="text-[9px] font-bold text-stone-500 uppercase tracking-widest">Ceylon AI</span>
                  </div>
                )}
                <div className={`relative max-w-[90%] p-5 rounded-2xl border ${
                  m.role === 'user' 
                    ? 'bg-emerald-700 text-white rounded-tr-none' 
                    : 'bg-white text-stone-800 rounded-tl-none border-stone-200 shadow-sm'
                }`}>
                  {m.image && (
                    <div className="mb-3 rounded-lg overflow-hidden">
                      <img src={m.image} alt="User" className="w-full h-auto max-h-40 object-cover" />
                    </div>
                  )}
                  <div className="text-sm leading-relaxed prose prose-sm max-w-none">
                    <ReactMarkdown>{m.text}</ReactMarkdown>
                  </div>
                  
                  {m.links && m.links.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-stone-100 space-y-2">
                      {m.links.map((link, lIdx) => (
                        <a 
                          key={lIdx}
                          href={link.uri}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-2 rounded-lg bg-stone-50 text-stone-700 hover:bg-stone-100 transition-colors"
                        >
                          <div className="text-amber-600"><MapPin size={14} /></div>
                          <span className="text-xs font-medium truncate">{link.title}</span>
                          <ExternalLink size={12} className="ml-auto opacity-50" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {isLoading && !needsApiKey && (
              <div className="flex flex-col items-start gap-2">
                <span className="text-[9px] font-bold text-stone-500 uppercase ml-1">Ceylon AI</span>
                <div className="bg-white p-5 rounded-2xl rounded-tl-none border border-stone-100 shadow-sm flex items-center gap-2 text-stone-400">
                    <Loader2 size={16} className="animate-spin" />
                    <span className="text-xs">Processing...</span>
                </div>
              </div>
            )}
          </div>

          <div className="shrink-0 bg-white p-6 pt-4 border-t border-stone-200">
            {/* Image Preview */}
            {selectedImage && (
              <div className="relative inline-block mb-4">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden border border-stone-300">
                  <img src={selectedImage} alt="Preview" className="w-full h-full object-cover" />
                  <button 
                    onClick={() => setSelectedImage(null)}
                    className="absolute inset-0 bg-black/50 flex items-center justify-center"
                  >
                    <Trash2 size={14} className="text-white" />
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
                className="p-3 rounded-xl bg-stone-100 text-stone-600 hover:bg-stone-200 transition-colors"
              >
                <Camera size={18} />
              </button>

              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                disabled={isLoading || isTyping || needsApiKey}
                placeholder="Ask something..."
                className="flex-grow py-3 px-4 bg-stone-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
              />
              
              {isLoading || isTyping ? (
                <button 
                  onClick={stopAI}
                  className="p-3 bg-stone-900 text-white rounded-xl"
                >
                  <Square size={18} />
                </button>
              ) : (
                <button 
                  onClick={() => handleSend()}
                  disabled={(!input.trim() && !selectedImage) || needsApiKey}
                  className="p-3 bg-emerald-700 text-white rounded-xl hover:bg-emerald-800 transition-colors"
                >
                  <Send size={18} />
                </button>
              )}
            </div>
            <div className="text-[10px] text-stone-400 text-center mt-3 uppercase tracking-widest">
              Powered by Ceylon AI
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIModal;
