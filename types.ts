
export type Language = 'EN' | 'SI';

export interface User {
  name: string;
  email: string;
  photo: string;
}

export interface NearbyAttraction {
  id: string;
  name: { EN: string; SI: string };
  image: string;
}

export interface Destination {
  id: string;
  name: { EN: string; SI: string };
  category: 'ancient' | 'beach' | 'wildlife' | 'mountains' | 'waterfalls' | 'camping';
  image: string;
  gallery: string[];
  videoUrl?: string;
  sourceUrl?: string;
  history: { EN: string; SI: string };
  shortStory: { EN: string; SI: string };
  detailedAbout?: { EN: string; SI: string };
  logistics?: { EN: string; SI: string }; // New field for road and weather info
  masterRecord?: { EN: string; SI: string };
  tips: { EN: string; SI: string }[];
  hiddenEchoes: { EN: string; SI: string };
  location: string;
  coordinates?: { x: number; y: number };
  nearbyAttractions?: NearbyAttraction[];
}

export interface Food {
  id: string;
  name: { EN: string; SI: string };
  category: "street" | "royal" | "village" | "coastal" | "sweets";
  description: { EN: string; SI: string };
  image: string;
  spiciness: number;
  ingredients: { EN: string; SI: string }[];
  tasteProfile: { EN: string; SI: string };
}

export interface Transport {
  id: string;
  name: { EN: string; SI: string };
  type: 'road' | 'rail' | 'air';
  price: number;
  description: { EN: string; SI: string };
  image: string;
  features: { EN: string[]; SI: string[] };
}

export interface Comment {
  id: string;
  userName: string;
  userPhoto: string;
  text: { EN: string; SI: string };
  date: string;
}

export interface Memory {
  id: string;
  userName: string;
  location: { EN: string; SI: string };
  title: { EN: string; SI: string };
  story: { EN: string; SI: string };
  image: string;
  likes: number;
  date: string;
  rating: number;
  tags: string[];
  comments: Comment[];
}

export interface HeritageMusic {
  id: string;
  type: 'instrument' | 'song';
  name: { EN: string; SI: string };
  description: { EN: string; SI: string };
  image: string;
  origin: { EN: string; SI: string };
  significance: { EN: string; SI: string };
  sampleLyrics?: { EN: string; SI: string };
}

export interface TraditionalMedicine {
  id: string;
  type: 'herb' | 'treatment';
  name: { EN: string; SI: string };
  description: { EN: string; SI: string };
  image: string;
  benefits: { EN: string; SI: string };
  usage: { EN: string; SI: string };
}

export interface Phrase {
  id: string;
  english: string;
  sinhala: string;
  transliteration: string;
  category: 'greeting' | 'dining' | 'emergency' | 'shopping';
}

export interface TravelEssential {
  id: string;
  title: { EN: string; SI: string };
  description: { EN: string; SI: string };
  icon: string;
  tips: { EN: string; SI: string }[];
}

export interface Festival {
  id: string;
  name: { EN: string; SI: string };
  category: 'religious' | 'cultural' | 'harvest' | 'art' | 'coastal';
  date: { EN: string; SI: string };
  description: { EN: string; SI: string };
  image: string;
  significance: { EN: string; SI: string };
}

export interface Translation {
  [key: string]: { EN: string; SI: string };
}

export interface QuizQuestion {
  id: string;
  question: { EN: string; SI: string };
  options: QuizOption[];
}

export interface QuizOption {
  id: string;
  text: { EN: string; SI: string };
  image: string;
  profileScore: 'ancient' | 'mountains' | 'beach' | 'wildlife';
}

export interface ExplorerProfile {
  id: string;
  name: { EN: string; SI: string };
  description: { EN: string; SI: string };
  image: string;
  recommendations: string[]; // Destination IDs
}
