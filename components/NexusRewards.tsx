
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Language, User, Memory, Comment } from '../types.ts';
import { 
  Zap, ArrowRight, ArrowLeft, Sparkles, ShieldCheck, Camera, Share2, Lock, Gem, Activity,
  Award, Loader2, CheckCircle2, X, History, Target, Image as ImageIcon, Quote, Send, Star,
  Wand2, Plus, Compass, MapPin, Heart, MessageSquare, Users, Radio, Database, Gift, Trophy,
  Upload, FileImage, Fingerprint, Scan, Layers, Search, Cpu, Bookmark, Bell, Terminal,
  ChevronRight, MoreVertical, ThumbsUp, Share, HeartOff, UserPlus, Shield
} from 'lucide-react';
import { refineTravelStory } from '../services/gemini.ts';
import { db, handleFirestoreError, OperationType } from '../firebase';
import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp, doc, updateDoc, increment, getDocs } from 'firebase/firestore';

interface NexusRewardsProps {
  language: Language;
  user: User | null;
  onLogin: () => void;
  setView: (view: any) => void;
}

const TOP_CONTRIBUTORS = [
  { name: 'Elena M.', points: 4520, rank: 1, avatar: 'https://ui-avatars.com/api/?name=Elena+M&background=E1306C&color=fff' },
  { name: 'Sarah J.', points: 3890, rank: 2, avatar: 'https://ui-avatars.com/api/?name=Sarah+J&background=0EA5E9&color=fff' },
  { name: 'Kaito S.', points: 3100, rank: 3, avatar: 'https://ui-avatars.com/api/?name=Kaito+S&background=10B981&color=fff' }
];

const NexusRewards: React.FC<NexusRewardsProps> = ({ language, user, onLogin, setView }) => {
  const [memories, setMemories] = useState<Memory[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isRefining, setIsRefining] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeMemory, setActiveMemory] = useState<Memory | null>(null);
  const [commentInput, setCommentInput] = useState('');
  const [likedMemories, setLikedMemories] = useState<Set<string>>(new Set());
  const [showShareToast, setShowShareToast] = useState(false);
  
  // Chat States
  const [chatMessages, setChatMessages] = useState([
    { id: '1', user: 'System', text: { EN: 'Global Comm-Link established.', SI: 'ගෝලීය සන්නිවේදන සබැඳිය ස්ථාපිත කරන ලදී.' }, isSystem: true },
    { id: '2', user: 'Explorer_Alpha', text: { EN: 'Anyone heading to Ella tomorrow?', SI: 'හෙට කවුරුහරි ඇල්ලට යනවද?' } },
    { id: '3', user: 'Distant_Echo', text: { EN: 'Sigiriya at dawn is unmatched. Bring a camera!', SI: 'පාන්දර සීගිරිය හරිම ලස්සනයි. කැමරාවක් අරන් යන්න!' } }
  ]);
  const [chatInput, setChatInput] = useState('');

  const fileInputRef = useRef<HTMLInputElement>(null);
  const chatScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [chatMessages]);

  useEffect(() => {
    const q = query(collection(db, 'memories'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, async (snapshot) => {
      const fetchedMemories: Memory[] = [];
      for (const document of snapshot.docs) {
        const data = document.data();
        
        // Fetch comments for this memory
        const commentsQ = query(collection(db, `memories/${document.id}/comments`), orderBy('createdAt', 'asc'));
        const commentsSnapshot = await getDocs(commentsQ);
        const comments: Comment[] = commentsSnapshot.docs.map(cDoc => {
          const cData = cDoc.data();
          return {
            id: cDoc.id,
            userName: cData.userName,
            userPhoto: cData.userPhoto,
            text: { EN: cData.textEN, SI: cData.textSI },
            date: cData.createdAt?.toDate().toISOString().split('T')[0] || new Date().toISOString().split('T')[0]
          };
        });

        fetchedMemories.push({
          id: document.id,
          userName: data.userName,
          location: { EN: data.locationEN, SI: data.locationSI },
          title: { EN: data.titleEN, SI: data.titleSI },
          story: { EN: data.storyEN, SI: data.storySI },
          image: data.image,
          likes: data.likes || 0,
          date: data.createdAt?.toDate().toISOString().split('T')[0] || new Date().toISOString().split('T')[0],
          rating: data.rating || 5,
          tags: data.tags || [],
          comments: comments
        });
      }
      setMemories(fetchedMemories);
      
      // Update active memory if it's currently open
      if (activeMemory) {
        const updatedActive = fetchedMemories.find(m => m.id === activeMemory.id);
        if (updatedActive) {
          setActiveMemory(updatedActive);
        }
      }
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, 'memories');
    });

    return () => unsubscribe();
  }, [activeMemory?.id]);

  const filteredMemories = useMemo(() => {
    if (!searchQuery.trim()) return memories;
    return memories.filter(m => 
      m.location[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.title[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.userName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [memories, searchQuery, language]);

  const handleLike = async (e: React.MouseEvent, memoryId: string) => {
    e.stopPropagation();
    if (!user) { onLogin(); return; }

    const isLiked = likedMemories.has(memoryId);
    
    // Optimistic update for local state
    setLikedMemories(prev => {
      const next = new Set(prev);
      if (isLiked) next.delete(memoryId);
      else next.add(memoryId);
      return next;
    });

    try {
      const memoryRef = doc(db, 'memories', memoryId);
      await updateDoc(memoryRef, {
        likes: increment(isLiked ? -1 : 1)
      });
    } catch (error) {
      // Revert optimistic update on failure
      setLikedMemories(prev => {
        const next = new Set(prev);
        if (isLiked) next.add(memoryId);
        else next.delete(memoryId);
        return next;
      });
      handleFirestoreError(error, OperationType.UPDATE, `memories/${memoryId}`);
    }
  };

  const handleAddComment = async (memoryId: string) => {
    if (!user || !user.uid) { onLogin(); return; }
    if (!commentInput.trim()) return;

    const commentText = commentInput;
    setCommentInput(''); // Clear input immediately for better UX

    try {
      const commentsRef = collection(db, `memories/${memoryId}/comments`);
      await addDoc(commentsRef, {
        memoryId: memoryId,
        authorUid: user.uid,
        userName: user.name,
        userPhoto: user.photo,
        textEN: commentText,
        textSI: commentText, // Ideally translate this, but keeping it simple for now
        createdAt: serverTimestamp()
      });
    } catch (error) {
      console.error("Failed to add comment:", error);
      handleFirestoreError(error, OperationType.CREATE, `memories/${memoryId}/comments`);
      setCommentInput(commentText); // Restore input on failure
    }
  };

  const sendChatMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) { onLogin(); return; }
    if (!chatInput.trim()) return;

    const msg = {
      id: Date.now().toString(),
      user: user.name,
      text: { EN: chatInput, SI: chatInput },
      isSystem: false
    };
    setChatMessages(prev => [...prev, msg]);
    setChatInput('');
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowShareToast(true);
    setTimeout(() => setShowShareToast(false), 3000);
  };

  const [newMemoryForm, setNewMemoryForm] = useState({
    title: '',
    location: '',
    story: '',
    rating: 5,
    image: ''
  });

  const handleRefine = async () => {
    const storyText = newMemoryForm.story;
    if (!storyText || isRefining) return;
    setIsRefining(true);
    const refined = await refineTravelStory(storyText, language);
    setNewMemoryForm(prev => ({ ...prev, story: refined }));
    setIsRefining(false);
  };

  const processFile = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setNewMemoryForm(prev => ({ ...prev, image: reader.result as string }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !user.uid) { onLogin(); return; }
    if (!newMemoryForm.image) { alert("Missing visual fragment."); return; }

    setIsSubmitting(true);
    try {
      const memoriesRef = collection(db, 'memories');
      await addDoc(memoriesRef, {
        authorUid: user.uid,
        userName: user.name,
        userPhoto: user.photo || '',
        locationEN: newMemoryForm.location,
        locationSI: newMemoryForm.location,
        titleEN: newMemoryForm.title,
        titleSI: newMemoryForm.title,
        storyEN: newMemoryForm.story,
        storySI: newMemoryForm.story,
        image: newMemoryForm.image,
        likes: 0,
        rating: newMemoryForm.rating,
        tags: ['community'],
        createdAt: serverTimestamp()
      });

      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setShowForm(false);
        setNewMemoryForm({ title: '', location: '', story: '', rating: 5, image: '' });
      }, 2000);
    } catch (error) {
      setIsSubmitting(false);
      handleFirestoreError(error, OperationType.CREATE, 'memories');
    }
  };

  const memoriesHeroImage = "https://i.pinimg.com/736x/0a/51/50/0a51506962464dcfabe4ec6baa8efc84.jpg";

  return (
    <div className="min-h-screen bg-white text-[#0a0a0a] relative overflow-hidden flex flex-col items-center">
      {/* BACKGROUND DECORATION */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.02]" style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/carbon-fibre.png")` }} />
      <div className="fixed inset-0 z-0 pointer-events-none opacity-10 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.15)_0%,transparent_80%)]" />

      {showShareToast && (
        <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[300] bg-[#0a0a0a] text-white px-8 py-4 rounded-2xl shadow-3xl flex items-center gap-4 animate-in slide-in-from-bottom-4 duration-500">
           <Share size={18} className="text-[#0EA5E9]" />
           <span className="text-[10px] font-black uppercase tracking-widest">Protocol Link Copied to Clipboard</span>
        </div>
      )}

      {/* CINEMATIC HERO HEADER */}
      <div className="relative w-full h-[65vh] flex items-center justify-center overflow-hidden bg-black mb-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-60" 
          style={{ backgroundImage: `url('${memoriesHeroImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-black/30 to-transparent" />
        
        <div className="relative z-10 text-center space-y-12 px-6 max-w-7xl">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.5em] mx-auto animate-pulse">
               <Layers size={14} className="text-[#0EA5E9]" />
               {language === 'EN' ? 'VOYAGER_NETWORK_v5.2' : 'සංචාරක_ජාලය_v5.2'}
            </div>
            <h1 className="text-6xl md:text-[11rem] font-heritage font-bold tracking-tighter leading-[0.8] uppercase text-white drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              LIVED <br/><span className="italic insta-text-gradient">{language === 'EN' ? 'STORIES.' : 'මතකයන්.'}</span>
            </h1>
            <p className="text-white/80 max-w-3xl mx-auto text-xl md:text-3xl font-light italic leading-relaxed drop-shadow-xl">
              {language === 'EN' 
                ? "\"The collective consciousness of the pearl. Interact, engage, and sync with fellow voyagers.\""
                : "\"අපගේ දිවයින පුරා විහිදුනු මතකයන් සමූහය. අනෙකුත් සංචාරකයින් සමඟ අත්දැකීම් බෙදාගන්න.\""}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 relative z-10 space-y-32">
        
        {/* INTERACTION TOOLS */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100 -mt-32">
           <div className="space-y-2 text-center md:text-left">
              <h3 className="text-3xl font-heritage font-bold text-[#262626]">
                {language === 'EN' ? 'Share Your Journey' : 'ඔබේ සංචාරය බෙදාගන්න'}
              </h3>
              <p className="text-gray-400 text-sm font-medium italic">
                {language === 'EN' ? 'Join our archival registry of Sri Lankan adventures.' : 'ශ්‍රී ලංකාවේ සංචාරක අත්දැකීම් එකතුවට එක් වන්න.'}
              </p>
           </div>
           <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="relative group w-64 sm:w-80">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#0EA5E9] transition-colors" size={18} />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={language === 'EN' ? "Search nodes..." : "දත්ත පිරික්සන්න..."}
                  className="w-full pl-14 pr-6 py-5 bg-gray-50 border border-gray-100 rounded-full focus:outline-none focus:ring-4 focus:ring-[#0EA5E9]/5 focus:border-[#0EA5E9]/20 transition-all font-bold text-xs uppercase tracking-widest shadow-sm"
                />
              </div>
              <button 
                onClick={() => user ? setShowForm(true) : onLogin()}
                className="group relative px-10 py-5 bg-[#0a0a0a] text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.4em] shadow-[0_30px_70px_rgba(0,0,0,0.15)] hover:scale-105 active:scale-95 transition-all overflow-hidden flex items-center gap-6"
              >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <div className="w-8 h-8 rounded-xl bg-white/10 border border-white/5 flex items-center justify-center group-hover:rotate-12 transition-transform">
                    <Plus size={20} />
                  </div>
                  <span>{language === 'EN' ? 'NEW TRANSMISSION' : 'අලුත් මතකයක්'}</span>
              </button>
           </div>
        </div>

        {/* UPLOAD FORM (MODAL) */}
        {showForm && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-6 animate-in fade-in duration-300">
             <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" onClick={() => setShowForm(false)} />
             <div className="relative bg-white rounded-[4rem] w-full max-w-5xl overflow-hidden shadow-[0_60px_150px_rgba(0,0,0,0.6)] border border-white/10 animate-in zoom-in-95 duration-500">
                <div className="bg-[#fafafa] p-12 md:p-16 h-full overflow-y-auto max-h-[90vh]">
                  {isSuccess && (
                    <div className="absolute inset-0 z-50 bg-white/95 flex flex-col items-center justify-center text-center p-12 space-y-8 animate-in fade-in duration-500">
                      <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center shadow-3xl animate-bounce">
                          <CheckCircle2 size={48} className="text-white" />
                      </div>
                      <h4 className="text-4xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tighter">Transmission Successful</h4>
                    </div>
                  )}

                  <div className="flex justify-between items-center mb-16">
                    <div className="space-y-4 text-left">
                      <div className="flex items-center gap-3 text-[#E1306C]">
                          <Radio className="w-5 h-5 animate-pulse" />
                          <span className="text-[10px] font-black uppercase tracking-[0.5em]">Input_Buffer_Active</span>
                      </div>
                      <h3 className="text-4xl md:text-6xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tighter">Create <span className="italic text-gray-300">Memoir.</span></h3>
                    </div>
                    <button onClick={() => setShowForm(false)} className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-gray-300 hover:text-red-500 hover:bg-red-50 shadow-sm transition-all active:scale-90">
                      <X size={24} />
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-7 space-y-10 text-left">
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-4">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4">Node_Location</label>
                            <input required type="text" value={newMemoryForm.location} onChange={(e) => setNewMemoryForm(p => ({...p, location: e.target.value}))} className="w-full px-8 py-6 bg-white border border-gray-100 rounded-[2rem] focus:outline-none focus:border-[#0EA5E9]/30 font-bold shadow-sm" placeholder="Sigiriya, Kandy..." />
                          </div>
                          <div className="space-y-4">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4">Memoir_Title</label>
                            <input required type="text" value={newMemoryForm.title} onChange={(e) => setNewMemoryForm(p => ({...p, title: e.target.value}))} className="w-full px-8 py-6 bg-white border border-gray-100 rounded-[2rem] focus:outline-none focus:border-[#0EA5E9]/30 font-bold shadow-sm" placeholder="A poetic summary..." />
                          </div>
                       </div>
                       <div className="space-y-4">
                          <div className="flex justify-between items-center px-4">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Narrative_Shard</label>
                            <button type="button" onClick={handleRefine} disabled={!newMemoryForm.story || isRefining} className="flex items-center gap-2 text-[9px] font-black text-[#E1306C] uppercase tracking-widest bg-[#E1306C]/5 px-3 py-1 rounded-full">
                                {isRefining ? <Loader2 size={12} className="animate-spin" /> : <Wand2 size={12} />}
                                AI_Refine
                            </button>
                          </div>
                          <textarea required rows={5} value={newMemoryForm.story} onChange={(e) => setNewMemoryForm(p => ({...p, story: e.target.value}))} className="w-full px-10 py-10 bg-white border border-gray-100 rounded-[3rem] focus:outline-none focus:border-[#0EA5E9]/30 font-medium italic text-lg shadow-sm resize-none" placeholder="Start transmission..." />
                       </div>
                    </div>
                    <div className="lg:col-span-5 space-y-10 text-left">
                       <div className="space-y-4">
                          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4">Visual_Fragment</label>
                          <div onClick={() => fileInputRef.current?.click()} className={`relative h-64 rounded-[3rem] border-2 border-dashed flex flex-col items-center justify-center cursor-pointer transition-all ${newMemoryForm.image ? 'border-green-500/30' : 'border-gray-200 hover:border-[#0EA5E9] bg-white'}`}>
                             {newMemoryForm.image ? <img src={newMemoryForm.image} className="absolute inset-0 w-full h-full object-cover rounded-[2.9rem]" alt="Preview" /> : <FileImage size={40} className="text-gray-200" />}
                             <input type="file" ref={fileInputRef} onChange={(e) => { const f = e.target.files?.[0]; if (f) processFile(f); }} className="hidden" accept="image/*" />
                          </div>
                       </div>
                       <button type="submit" disabled={isSubmitting} className="w-full py-8 bg-[#0a0a0a] text-white rounded-full font-black text-xs uppercase tracking-[0.5em] shadow-3xl hover:bg-[#0EA5E9] transition-all flex items-center justify-center">
                          {isSubmitting ? <Loader2 className="animate-spin" /> : (language === 'EN' ? 'TRANSMIT' : 'යොමු කරන්න')}
                       </button>
                    </div>
                 </form>
               </div>
             </div>
           </div>
        )}

        {/* LEFT: PUBLIC FEED */}
        <div className="xl:col-span-12 space-y-20">
              <div className="flex justify-between items-end border-b border-gray-100 pb-8">
                 <div className="space-y-2 text-left">
                    <p className="text-[10px] font-black text-[#0EA5E9] uppercase tracking-widest">Public_Experience_Manifest</p>
                    <h3 className="text-4xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tighter">Community Feed.</h3>
                 </div>
                 <div className="text-right flex items-center gap-6">
                    <div className="flex items-center gap-3">
                       <div className="w-2 h-2 rounded-full bg-green-500 animate-ping shadow-[0_0_10px_#22c55e]" />
                       <span className="text-xl font-heritage font-black text-[#0a0a0a] uppercase">LIVE</span>
                    </div>
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredMemories.map((m, idx) => {
                   const isLiked = likedMemories.has(m.id);
                   return (
                    <div 
                      key={m.id}
                      onClick={() => setActiveMemory(m)}
                      className="group relative bg-white rounded-[4rem] overflow-hidden border border-gray-100 transition-all duration-700 hover:shadow-[0_50px_120px_rgba(0,0,0,0.1)] hover:-translate-y-4 cursor-pointer flex flex-col"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <div className="relative aspect-[4/5] overflow-hidden">
                         <img src={m.image} className="w-full h-full object-cover transition-transform duration-[8000ms] group-hover:scale-110" alt="" />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/30 to-transparent" />
                         
                         <div className="absolute top-8 left-8 flex items-center gap-3">
                            <div className="w-12 h-12 rounded-2xl border border-white/20 overflow-hidden shadow-2xl bg-gray-900 p-1">
                               <img src={`https://ui-avatars.com/api/?name=${m.userName}&background=0EA5E9&color=fff`} className="w-full h-full object-cover rounded-xl" alt="" />
                            </div>
                            <div className="text-left">
                               <p className="text-[10px] font-black text-white uppercase tracking-widest mb-0.5">{m.userName}</p>
                               <p className="text-[8px] font-bold text-white/40 uppercase tracking-widest">{m.date}</p>
                            </div>
                         </div>

                         <div className="absolute bottom-8 left-10 right-10 text-left space-y-3">
                            <div className="flex items-center gap-2 text-[#0EA5E9] font-black text-[8px] uppercase tracking-widest bg-white/95 w-fit px-3 py-1 rounded-full">
                               <MapPin size={10} /> {m.location[language]}
                            </div>
                            <h4 className="text-2xl font-heritage font-bold text-white uppercase leading-tight tracking-tight drop-shadow-2xl">{m.title[language]}</h4>
                         </div>
                      </div>

                      <div className="p-10 space-y-8 text-left bg-white relative flex-grow flex flex-col">
                         <div className="relative flex-grow">
                            <Quote size={28} className="absolute -top-4 -left-4 text-[#E1306C]/10" />
                            <p className="text-sm text-gray-500 font-light italic leading-relaxed line-clamp-3 pl-4">
                               "{m.story[language]}"
                            </p>
                         </div>
                         <div className="pt-8 border-t border-gray-50 flex justify-between items-center mt-auto">
                            <div className="flex items-center gap-8">
                               <button 
                                 onClick={(e) => handleLike(e, m.id)}
                                 className={`flex items-center gap-2 transition-colors group/stat ${isLiked ? 'text-[#E1306C]' : 'text-gray-300 hover:text-[#E1306C]'}`}
                               >
                                  <Heart size={18} className={isLiked ? 'fill-current' : 'group-hover/stat:fill-current'} />
                                  <span className="text-[10px] font-black">{m.likes}</span>
                               </button>
                               <button className="flex items-center gap-2 text-gray-300 hover:text-[#0EA5E9] transition-colors group/stat">
                                  <MessageSquare size={18} className="group-hover/stat:fill-current" />
                                  <span className="text-[10px] font-black">{m.comments.length}</span>
                               </button>
                            </div>
                            <div className="flex gap-2">
                               <button onClick={handleShare} className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-300 hover:bg-[#0EA5E9] hover:text-white transition-all shadow-inner">
                                  <Share2 size={16} />
                                </button>
                            </div>
                         </div>
                      </div>
                    </div>
                   );
                })}
              </div>
           </div>
        </div>

        {/* COMING SOON: NEXUS REWARDS */}
        <div className="space-y-24 py-40 border-t border-gray-100 relative overflow-hidden">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-60 bg-blue-50/5 blur-[200px] rotate-12 pointer-events-none" />

           <div className="text-center space-y-10 relative z-10">
              <div className="inline-flex items-center gap-6 px-10 py-4 rounded-full bg-blue-500/5 border border-blue-500/20 text-blue-500 text-[12px] font-black uppercase tracking-[0.6em] mx-auto animate-pulse backdrop-blur-xl">
                 <Gem size={20} className="animate-bounce" /> {language === 'EN' ? 'Essence_Synergy_Module' : 'ත්‍යාග_පද්ධතිය'}
              </div>
              <h3 className="text-5xl md:text-[10rem] font-heritage font-bold text-[#0a0a0a] tracking-tighter uppercase leading-[0.8] drop-shadow-sm">
                 COMING <span className="text-blue-500 italic">SOON.</span>
              </h3>
              <p className="text-gray-400 font-light italic text-xl md:text-3xl max-w-3xl mx-auto leading-relaxed opacity-80">
                {language === 'EN' 
                  ? "\"The Voyager Economy is undergoing deep calibration. Soon, every memory and interaction will fuel your ascent in the Hub.\""
                  : "\"අපගේ පද්ධතිය දැනට සංස්කරණය වෙමින් පවතී. අනාගතයේදී ඔබගේ දායකත්වය වෙනුවෙන් ලැබෙන ත්‍යාග පද්ධතිය ළඟදීම සක්‍රිය වනු ඇත.\""}
              </p>
           </div>
        </div>

      {/* FOOTER STATS */}
      <div className="max-w-7xl mx-auto w-full pt-24 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-12 opacity-30 mt-auto mb-20">
         <div className="flex items-center gap-12">
            <div className="flex items-center gap-4">
               <Fingerprint size={32} className="text-blue-500" />
               <div className="text-left">
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#0a0a0a]">Identity_Commited</p>
                  <p className="text-[11px] font-bold text-gray-500">Registry ID: VOYAGER_NODE</p>
               </div>
            </div>
            <div className="w-px h-16 bg-gray-100" />
            <div className="flex items-center gap-4">
               <Cpu size={32} className="text-[#E1306C]" />
               <div className="text-left">
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#0a0a0a]">Community_Logic</p>
                  <p className="text-[11px] font-bold text-gray-500">Stable Handshake</p>
               </div>
            </div>
         </div>
         
         <div className="flex flex-col items-center md:items-end gap-3">
            <p className="text-[11px] font-black uppercase tracking-[0.8em] text-[#0a0a0a]">End_Of_Lived_Archives</p>
            <div className="flex gap-2">
               {[1,2,3,4,5].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-200" />)}
            </div>
         </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan-y {
          0% { top: 0%; opacity: 0; }
          20% { opacity: 0.6; }
          80% { opacity: 0.6; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scan-y { animation: scan-y 6s linear infinite; }
        .animate-spin-slow { animation: spin 30s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .shadow-3xl { box-shadow: 0 40px 100px rgba(14,165,233,0.15); }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
      `}} />
    </div>
  );
};

export default NexusRewards;
