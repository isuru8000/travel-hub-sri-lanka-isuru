
import React, { useState, useEffect } from 'react';
import { Language, User, Memory, ExplorerProfile } from '../types.ts';
import { 
  User as UserIcon, 
  Mail, 
  Calendar, 
  MapPin, 
  Heart, 
  MessageSquare, 
  Settings, 
  LogOut, 
  ChevronRight, 
  Sparkles,
  Target,
  Box,
  Radio,
  Quote,
  Loader2,
  X,
  Share2
} from 'lucide-react';
import { db, handleFirestoreError, OperationType } from '../firebase.ts';
import { collection, query, where, onSnapshot, doc, updateDoc } from 'firebase/firestore';

interface ProfileViewProps {
  language: Language;
  user: User | null;
  onLogout: () => void;
  setView: (view: any) => void;
}

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

const ProfileView: React.FC<ProfileViewProps> = ({ language, user, onLogout, setView }) => {
  const [userMemories, setUserMemories] = useState<Memory[]>([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(user?.name || '');
  const [editPhoto, setEditPhoto] = useState(user?.photo || '');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (user) {
      setEditName(user.name);
      setEditPhoto(user.photo);
    }
  }, [user]);

  const handleSave = async () => {
    if (!user?.uid) return;
    setSaving(true);
    try {
      const userRef = doc(db, 'users', user.uid);
      await updateDoc(userRef, {
        name: editName,
        photo: editPhoto
      });
      setIsEditing(false);
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, `users/${user.uid}`);
    } finally {
      setSaving(false);
    }
  };

  useEffect(() => {
    if (!user?.uid) return;

    const q = query(
      collection(db, 'memories'),
      where('authorUid', '==', user.uid)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const memories: Memory[] = snapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          // Ensure we have a date for sorting
          date: data.createdAt?.toDate?.().toISOString().split('T')[0] || new Date().toISOString().split('T')[0]
        } as Memory;
      });

      // Sort client-side to avoid composite index requirement
      memories.sort((a: any, b: any) => {
        const timeA = a.createdAt?.toMillis?.() || 0;
        const timeB = b.createdAt?.toMillis?.() || 0;
        return timeB - timeA;
      });

      setUserMemories(memories);
      setLoading(false);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, 'memories');
    });

    return () => unsubscribe();
  }, [user?.uid]);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white p-6">
        <div className="text-center space-y-6">
          <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto">
            <UserIcon size={40} className="text-gray-300" />
          </div>
          <h2 className="text-2xl font-heritage font-bold uppercase tracking-tighter">Access Denied</h2>
          <p className="text-gray-500 max-w-xs">Please synchronize your registry to view your archival profile.</p>
          <button 
            onClick={() => setView('home')}
            className="px-8 py-4 bg-black text-white rounded-full font-black text-[10px] uppercase tracking-widest"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const explorerProfile = user.explorerProfileId ? EXPLORER_PROFILES[user.explorerProfileId] : null;

  return (
    <div className="min-h-screen bg-[#fafafa] pt-32 pb-40 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* PROFILE HEADER CARD */}
        <div className="relative bg-white rounded-[4rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.05)] border border-gray-100">
          <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-r from-[#0EA5E9] via-cyan-400 to-blue-600 opacity-10" />
          
          <div className="relative z-10 p-12 md:p-20 flex flex-col md:flex-row gap-12 items-center md:items-start text-center md:text-left">
            <div className="relative">
              <div className="w-40 h-40 md:w-52 md:h-52 rounded-[3rem] border-4 border-white shadow-2xl overflow-hidden bg-white p-1.5">
                <img src={user.photo} className="w-full h-full object-cover rounded-[2.5rem]" alt={user.name} />
              </div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-green-500 rounded-2xl border-4 border-white flex items-center justify-center shadow-lg animate-pulse">
                <Radio size={20} className="text-white" />
              </div>
            </div>

            <div className="flex-grow space-y-8">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-black/5 text-gray-500 text-[9px] font-black uppercase tracking-[0.4em]">
                  <Target size={12} /> Registry_Node: {user.uid?.slice(0, 8)}
                </div>
                {isEditing ? (
                  <div className="space-y-4">
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      className="text-3xl md:text-5xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tighter leading-none bg-gray-50 border-b-2 border-[#0EA5E9] outline-none w-full p-2"
                      placeholder="Enter Name"
                    />
                    <input
                      type="text"
                      value={editPhoto}
                      onChange={(e) => setEditPhoto(e.target.value)}
                      className="text-[10px] font-bold uppercase tracking-widest bg-gray-50 border-b border-gray-200 outline-none w-full p-2"
                      placeholder="Avatar URL"
                    />
                  </div>
                ) : (
                  <h2 className="text-5xl md:text-7xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tighter leading-none">
                    {user.name}
                  </h2>
                )}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-gray-400">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                    <Mail size={14} className="text-[#0EA5E9]" /> {user.email}
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                    <Calendar size={14} className="text-[#E1306C]" /> Joined March 2026
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                {isEditing ? (
                  <>
                    <button 
                      onClick={handleSave}
                      disabled={saving}
                      className="px-8 py-4 bg-[#0EA5E9] text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl flex items-center gap-3 disabled:opacity-50"
                    >
                      {saving ? <Loader2 size={14} className="animate-spin" /> : <Sparkles size={14} />} 
                      Save Changes
                    </button>
                    <button 
                      onClick={() => {
                        setIsEditing(false);
                        setEditName(user.name);
                        setEditPhoto(user.photo);
                      }}
                      className="px-8 py-4 bg-gray-100 text-gray-500 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-gray-200 transition-all flex items-center gap-3"
                    >
                      <X size={14} /> Cancel
                    </button>
                  </>
                ) : (
                  <button 
                    onClick={() => setIsEditing(true)}
                    className="px-8 py-4 bg-[#0a0a0a] text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-[#0EA5E9] transition-all shadow-xl flex items-center gap-3"
                  >
                    <Settings size={14} /> Edit Profile
                  </button>
                )}
                <button 
                  onClick={onLogout}
                  className="px-8 py-4 bg-red-50 text-red-500 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all flex items-center gap-3"
                >
                  <LogOut size={14} /> Disconnect
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
              <div className="bg-gray-50 p-8 rounded-[2.5rem] text-center space-y-1">
                <p className="text-3xl font-heritage font-bold text-[#0a0a0a]">{userMemories.length}</p>
                <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Memories</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-[2.5rem] text-center space-y-1">
                <p className="text-3xl font-heritage font-bold text-[#0a0a0a]">{userMemories.reduce((acc, m) => acc + m.likes, 0)}</p>
                <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Resonances</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* LEFT COL: ARCHETYPE & STATS */}
          <div className="lg:col-span-4 space-y-12">
            {/* EXPLORER ARCHETYPE */}
            <div className="bg-[#0a0a0a] rounded-[4rem] p-10 md:p-12 text-left space-y-10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#0EA5E9]/20 to-transparent blur-3xl" />
              
              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-3 text-[#0EA5E9]">
                  <Sparkles size={18} />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em]">Neural_Archetype</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-heritage font-bold text-white uppercase tracking-tighter">
                  {explorerProfile ? explorerProfile.name[language] : (language === 'EN' ? 'Unidentified Voyager' : 'හඳුනා නොගත් සංචාරකයා')}
                </h3>
              </div>

              {explorerProfile ? (
                <div className="space-y-8 relative z-10">
                  <div className="aspect-video rounded-3xl overflow-hidden border border-white/10">
                    <img src={explorerProfile.image} className="w-full h-full object-cover" alt="Archetype" />
                  </div>
                  <p className="text-gray-400 font-light italic leading-relaxed">
                    "{explorerProfile.description[language]}"
                  </p>
                  <button 
                    onClick={() => setView('quiz')}
                    className="w-full py-5 bg-white/5 hover:bg-white/10 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border border-white/10"
                  >
                    Recalibrate Archetype
                  </button>
                </div>
              ) : (
                <div className="space-y-8 relative z-10">
                  <p className="text-gray-400 font-light italic leading-relaxed">
                    Your neural signature has not been synthesized. Complete the neural handshake to uncover your destiny.
                  </p>
                  <button 
                    onClick={() => setView('quiz')}
                    className="w-full py-6 bg-[#0EA5E9] text-white rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all shadow-xl shadow-[#0EA5E9]/20"
                  >
                    Initiate Neural Link
                  </button>
                </div>
              )}
            </div>

            {/* QUICK STATS */}
            <div className="bg-white rounded-[4rem] p-12 border border-gray-100 shadow-sm space-y-10">
              <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] border-b border-gray-50 pb-6">Traversal_Metrics</h4>
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500">
                      <MapPin size={18} />
                    </div>
                    <span className="text-[10px] font-black text-[#0a0a0a] uppercase tracking-widest">Nodes Visited</span>
                  </div>
                  <span className="text-xl font-heritage font-bold">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center text-pink-500">
                      <Heart size={18} />
                    </div>
                    <span className="text-[10px] font-black text-[#0a0a0a] uppercase tracking-widest">Total Resonances</span>
                  </div>
                  <span className="text-xl font-heritage font-bold">{userMemories.reduce((acc, m) => acc + m.likes, 0)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-500">
                      <Box size={18} />
                    </div>
                    <span className="text-[10px] font-black text-[#0a0a0a] uppercase tracking-widest">Archival Shards</span>
                  </div>
                  <span className="text-xl font-heritage font-bold">4</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COL: MEMORIES FEED */}
          <div className="lg:col-span-8 space-y-12">
            <div className="flex justify-between items-end border-b border-gray-100 pb-8">
              <div className="space-y-2 text-left">
                <p className="text-[10px] font-black text-[#0EA5E9] uppercase tracking-widest">Personal_Experience_Manifest</p>
                <h3 className="text-4xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tighter">Your Memories.</h3>
              </div>
              <button 
                onClick={() => setView('memories')}
                className="text-[10px] font-black text-gray-400 hover:text-[#0EA5E9] uppercase tracking-widest flex items-center gap-2 transition-colors"
              >
                View All <ChevronRight size={14} />
              </button>
            </div>

            {loading ? (
              <div className="py-40 flex flex-col items-center justify-center space-y-6">
                <Loader2 size={40} className="text-[#0EA5E9] animate-spin" />
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em]">Retrieving_Archives...</p>
              </div>
            ) : userMemories.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {userMemories.map((m) => (
                  <div 
                    key={m.id}
                    onClick={() => setView('memories')}
                    className="group relative bg-white rounded-[3.5rem] overflow-hidden border border-gray-100 transition-all duration-700 hover:shadow-[0_40px_100px_rgba(0,0,0,0.08)] hover:-translate-y-2 cursor-pointer"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <img src={m.image} className="w-full h-full object-cover transition-transform duration-[8000ms] group-hover:scale-110" alt={m.title[language]} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                      
                      <div className="absolute bottom-8 left-8 right-8 text-left space-y-2">
                        <div className="flex items-center gap-2 text-[#0EA5E9] font-black text-[8px] uppercase tracking-widest bg-white/95 w-fit px-3 py-1 rounded-full">
                          <MapPin size={10} /> {m.location[language]}
                        </div>
                        <h4 className="text-2xl font-heritage font-bold text-white uppercase leading-tight tracking-tight">{m.title[language]}</h4>
                      </div>
                    </div>
                    <div className="p-8 space-y-6 text-left">
                      <p className="text-sm text-gray-500 font-light italic leading-relaxed line-clamp-2">
                        "{m.story[language]}"
                      </p>
                      <div className="flex items-center gap-6 pt-4 border-t border-gray-50">
                        <div className="flex items-center gap-2 text-[#E1306C]">
                          <Heart size={16} className="fill-current" />
                          <span className="text-[10px] font-black">{m.likes}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300">
                          <MessageSquare size={16} />
                          <span className="text-[10px] font-black">{m.comments?.length || 0}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-40 bg-white rounded-[4rem] border border-dashed border-gray-200 flex flex-col items-center justify-center space-y-8 text-center px-12">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-gray-300">
                  <Quote size={32} />
                </div>
                <div className="space-y-4">
                  <h4 className="text-2xl font-heritage font-bold text-[#0a0a0a] uppercase tracking-tighter">No Memories Found</h4>
                  <p className="text-gray-400 font-light italic max-w-xs">Your archival registry is empty. Begin your journey to capture the essence of the island.</p>
                </div>
                <button 
                  onClick={() => setView('memories')}
                  className="px-10 py-5 bg-[#0a0a0a] text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-[#0EA5E9] transition-all shadow-xl"
                >
                  Create First Memoir
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
