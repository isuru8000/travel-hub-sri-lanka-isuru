import { 
  Landmark, Train, Sprout, Compass, Footprints, TreePine, Droplets, ShieldAlert, Award, Star
} from 'lucide-react';

export interface SpotDetailData {
  id: string;
  name: { EN: string; SI: string };
  location: string;
  rating: number;
  reviewsCount: number;
  heroImage: string;
  overview: { EN: string; SI: string };
  highlights: {
    title: { EN: string; SI: string };
    desc: { EN: string; SI: string };
    icon: string; // We'll map this string to the React component
  }[];
  mapSpots: {
    id: string;
    name: { EN: string; SI: string };
    coordinates: { x: number; y: number };
    description: { EN: string; SI: string };
  }[];
  visitorGuide: {
    bestTime: { EN: string; SI: string };
    gettingThere: { EN: string; SI: string };
    attractions: { EN: string; SI: string };
  };
  galleryPhotos: {
    id: string;
    url: string;
    caption: { EN: string; SI: string };
  }[];
  packages: {
    id: string;
    title: { EN: string; SI: string };
    desc: { EN: string; SI: string };
    price: string;
  }[];
  reviews: {
    id: string;
    author: string;
    country: string;
    avatar: string;
    rating: number;
    date: string;
    comment: { EN: string; SI: string };
  }[];
}

export const SPOT_DETAILS_POOL: Record<string, SpotDetailData> = {
  "train-passage": {
    id: "train-passage",
    name: { EN: "The Iconic Misty Train Passage", SI: "මීදුම් පිරුණු දුම්රිය චාරිකාව" },
    location: "Ella (Nine Arch Bridge)",
    rating: 5.0,
    reviewsCount: 4890,
    heroImage: "https://i.pinimg.com/736x/1d/bf/54/1dbf54eb42d1b01d22d3bd9f278e15b1.jpg",
    overview: {
      EN: "The spectacular train journey winding through Sri Lanka's high country is universally praised as one of the most romantic and visually stunning rail passages on planet Earth. The absolute climax is the Nine Arch Bridge, hidden in the mountain forests of Ella, towering 30 meters above the jungle.",
      SI: "ශ්‍රී ලංකාවේ මධ්‍යම කඳුකරයේ තේ වතු මැදින් දිවෙන මෙම දුම්රිය ගමන මුළු මහත් ලෝකයේම පවතින සුන්දරතම දුම්රිය මාර්ගයකි. මෙහි සුවිශේෂීම සංකේතය වනුයේ ඇල්ල සහ දෙමෝදර දුම්රිය ස්ථාන අතර වන මංලොවක් මැද පිහිටි ආරුක්කු නවයේ පාලමයි."
    },
    highlights: [
      {
        title: { EN: "Pure Colonial Stone Masonry", SI: "සම්පූර්ණ ගල් බැඳීමේ තාක්ෂණය" },
        desc: { EN: "Constructed entirely from solid stone bricks, cement, and rock ballast with absolutely no steel blocks.", SI: "වානේ හෝ යකඩ බාල්ක එකක්වත් නොමැතිව කළුගල් හා සිමෙන්ති පමණක් භාවිතා කර ඉදිකර ඇත." },
        icon: "Landmark"
      },
      {
        title: { EN: "The Legendary Demodera Loop", SI: "දෙමෝදර පරම්පරාගත රේල් ගැටය" },
        desc: { EN: "The rail line runs in a spiral loop turning 360 degrees to run beneath its own tunnel.", SI: "කන්ද වටා වටයක් රවුමට කැරකී දුම්රිය මාර්ගය තමාටම යටින් දිවෙන සුප්‍රසිද්ධ දුම්රිය ඉදිකිරීමකි." },
        icon: "Train"
      }
    ],
    mapSpots: [
      {
        id: "bridge",
        name: { EN: "Nine Arch Bridge Peak", SI: "ආරුක්කු නවයේ පාලම" },
        coordinates: { x: 50, y: 55 },
        description: { EN: "The 30-meter high structural wonder built between Ella and Demodera stations.", SI: "ඇල්ල සහ දෙමෝදර දුම්රිය ස්ථාන අතර පිහිටි මීටර් 30ක් උසැති අලංකාර ගල් පාලම." }
      },
      {
        id: "ella-station",
        name: { EN: "Ella Railway Station", SI: "ඇල්ල දුම්රිය ස්ථානය" },
        coordinates: { x: 20, y: 30 },
        description: { EN: "The misty highland mountain train depot where journeys begin.", SI: "නැවුම් කඳුකර සුළඟ හමන ඓතිහාසික ඇල්ල දුම්රිය නැවතුම්පොළ." }
      }
    ],
    visitorGuide: {
      bestTime: { EN: "6:00 AM - 8:30 AM. Perfect light, morning mist, and fewer crowds.", SI: "පෙරවරු 6:00 - 8:30. ඡායාරූප ගැනීම සඳහා ප්‍රශස්ත ආලෝකය ලැබෙන කාලයයි." },
      gettingThere: { EN: "A lush 20-minute walk through pine trails starting from Ella town, or by local Tuk-Tuk.", SI: "ඇල්ල නගරයේ සිට කැලෑ මැදින් ඇති පීලි පාර දිගේ විනාඩි 20 ක පයින් යාමක් හෝ ත්‍රිරෝද රථයකින් පැමිණීම." },
      attractions: { EN: "Little Adam's Peak, Demodera Loop, Ella Rock, and Ravana Pool Club.", SI: "පුංචි ශ්‍රී පාදය, දෙමෝදර දුම්රිය ස්ථානය, ඇල්ල කන්ද සහ රාවණා දියඇල්ල." }
    },
    galleryPhotos: [
      { id: "g1", url: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80", caption: { EN: "Nine Arch Bridge surrounded by lush tea fields", SI: "තේ වතු මැදින් අලංකාරව වක්‍ර වන පාලමේ දසුන" } },
      { id: "g2", url: "https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&w=800&q=80", caption: { EN: "Scenic highland train passing the mountains", SI: "කඳුකරය මැදින් ධාවනය වන දුම්රිය දසුනක්" } }
    ],
    packages: [
      { id: "pkg1", title: { EN: "Sunrise Explorer Ridge Hike", SI: "හිරු උදාව පාලම දිගේ ගවේෂණය" }, desc: { EN: "Includes pathfinder guide, organic local tea, and scenic photograph points.", SI: "පෞද්ගලික මඟපෙන්වන්නකු, රසවත් දේශීය තේ සහ ප්‍රධාන ඡායාරූප මංපෙත් ඇතුළත් වේ." }, price: "25" }
    ],
    reviews: [
      { id: "rev1", author: "Amélie Laurent", country: "France", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80", rating: 5, date: "May 25, 2026", comment: { EN: "Simply breathtaking! Standing below the bridge as the train passed over it was a true core memory.", SI: "විස්තර කළ නොහැකි තරම් සුන්දරයි! මීදුම අතරින් පාලම මතින් කෝච්චිය යන දසුන අතිශය අමතක නොවන අත්දැකීමක්." } }
    ]
  },
  "knuckles-trek": {
    id: "knuckles-trek",
    name: { EN: "The UNESCO Cloud Forest Trek", SI: "නකල්ස් යුනෙස්කෝ වනාන්තර සංචාරය" },
    location: "Knuckles Mountain Range",
    rating: 4.9,
    reviewsCount: 1560,
    heroImage: "https://i.pinimg.com/1200x/de/fc/01/defc011f1dfe36aa3317523ad32561d4.jpg",
    overview: {
      EN: "An immersive trek through the mystical, pristine cloud forests of Knuckles. This UNESCO World Heritage site offers hidden waterfall series, extreme biodiversity, and jaw-dropping mountain peak vistas.",
      SI: "ජෛව විවිධත්වයෙන් සරු, දියඇලි සහ මනරම් කඳු මුදුන් සහිත නකල්ස් කඳු පන්තියේ නොයිඳුල් වනපෙත හරහා යන මනරම් වන සංචාරයකි."
    },
    highlights: [
      {
        title: { EN: "Untouched Rainforest Paths", SI: "නොයිඳුල් වැසි වනාන්තර මංපෙත්" },
        desc: { EN: "Explore visual vantage points under ancient evergreen leaf canopies.", SI: "පැරණි තුරුලතා වියනක් යටින් දිවෙන සීතල කඳුකර මාර්ග ගවේෂණයේ යෙදෙන්න." },
        icon: "Footprints"
      },
      {
        title: { EN: "Pristine Hidden Pools", SI: "ස්වභාවික ගල් තටාක සහ දියඇලි" },
        desc: { EN: "Plunge into cool, safe natural streams deep within the mountain folds.", SI: "කඳු අතර සැඟවුණු නිල්වන්, ස්වභාවික පිරිසිදු ඇළ දොළ සහ සීතල ගල් තටාක වලින් දිය නෑමේ පහස." },
        icon: "Droplets"
      }
    ],
    mapSpots: [
      {
        id: "corbets",
        name: { EN: "Corbet's Gap Vantage", SI: "කෝබට්ස් කපොල්ල දර්ශනය" },
        coordinates: { x: 50, y: 40 },
        description: { EN: "A deep valley where shifting forest wind and mist clouds meet.", SI: "වේගයෙන් හමන කඳුකර සුළඟ මීදුම් සේල කඳු අතරින් ගෙනයන අලංකාර නිම්න කලාපය." }
      },
      {
        id: "meemure",
        name: { EN: "Meemure Village", SI: "මීමුරේ සාම්ප්‍රදායික ගම්මානය" },
        coordinates: { x: 80, y: 70 },
        description: { EN: "The ultra-remote traditional village sitting under Lakegala peak shadow.", SI: "ලකේගල මහා පර්වතයේ සෙවණැල්ල යට පිහිටි ඓතිහාසික, ඉතා දුෂ්කර නොයිඳුල් ගම්මානය." }
      }
    ],
    visitorGuide: {
      bestTime: { EN: "January to March and June to September for clearer weather.", SI: "ජනවාරි සිට මාර්තු සහ ජූනි සිට සැප්තැම්බර් දක්වා කඳු නැගීම සඳහා වියළි බිම් පවතින කාලයයි." },
      gettingThere: { EN: "Accessible via Matale or Hunnasgiriya using a private 4x4 trail jeep.", SI: "මාතලේ හෝ හුන්නස්ගිරිය ද්වාරයන් හරහා 4x4 ජීප් රථ හෝ දේශීය සංචාරක සේවාවන් මගින් ළඟා විය හැක." },
      attractions: { EN: "Meemure Traditional Village, Mini World's End, Corbet's Gap.", SI: "මීමුරේ ගම්මානය, පුංචි ලෝකාන්තය ප්‍රපාතය සහ ලකේගල කන්ද." }
    },
    galleryPhotos: [
      { id: "gk1", url: "https://images.unsplash.com/photo-1588598130782-690a298573ec?auto=format&fit=crop&w=800&q=80", caption: { EN: "Early morning over Knuckles peaks", SI: "නකල්ස් කඳු මුදුන් වෙලාගන්නා උදෑසන මීදුම්" } }
    ],
    packages: [
      { id: "pkgk1", title: { EN: "1-Day Mystic Waterfalls Trek", SI: "එක්දින දියඇලි වන සංචාරය" }, desc: { EN: "Guided hike to hidden waterfalls, safe swimming spots and packaged lunch.", SI: "දියඇලි කලාප ගවේෂණය, පිරිසිදු ඇළ දොළ නෑම සහ රසවත් දිවා ආහාරය ඇතුළත් චාරිකාව." }, price: "45" }
    ],
    reviews: [
      { id: "revk1", author: "Oliver Schmidt", country: "Germany", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80", rating: 5, date: "May 28, 2026", comment: { EN: "Pristine and exceptionally clean. The mist rolling down Corbet's Gap is stunning.", SI: "නොයිඳුල් කැළෑවක්. කෝබට්ස් කපොල්ල මැදින් පාවෙන මීදුම දසුන ඇත්තෙන්ම අපූර්වයි." } }
    ]
  },
  "wildlife-safari": {
    id: "wildlife-safari",
    name: { EN: "The Ultimate Coastal Wildlife Safari", SI: "මුහුදුබඩ වනජීවී සෆාරි අත්දැකීම" },
    location: "Yala National Park",
    rating: 4.9,
    reviewsCount: 3240,
    heroImage: "https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&w=1200&q=80",
    overview: {
      EN: "An exhilarating safari tour through a unique dry-zone forest bordering the Indian Ocean, offering the world's absolute best chance to spot wild leopards, massive elephant herds, and sloth bears.",
      SI: "ඉන්දියන් සාගරයට මායිම් වූ යාල ජාතික වනෝද්‍යානයේ සැරිසරන වන දිවියන්, අලි රංචු සහ වළසුන් සියැසින් දැකගැනීමට ලැබෙන වනචාරී ජීවිතය."
    },
    highlights: [
      {
        title: { EN: "High Leopard Density", SI: "දිවියන් බහුලව වෙසෙන කලාපය" },
        desc: { EN: "Yala Block 1 boasts one of the absolute highest concentrations of wild leopards on Earth.", SI: "යාල වනෝද්‍යානයේ පළමු කලාපය තුළ ලොව වැඩිම දිවියන් ප්‍රමාණයක් වාසය කරයි." },
        icon: "Compass"
      },
      {
        title: { EN: "Coastal Dunes & Ocean Views", SI: "මුහුදු වෙරළ සහ වනජීවී සීමාවන්" },
        desc: { EN: "Watch elephants stroll past sand dunes bordering the beautiful Indian Ocean waves.", SI: "සමුද්‍ර සන්ධිය අසල වැලි කඳු අතරින් සැරිසරන වන අලි රංචු නැරඹීමේ අවස්ථාව." },
        icon: "Droplets"
      }
    ],
    mapSpots: [
      {
        id: "patanangala",
        name: { EN: "Patanangala Beach", SI: "පටනංගල වෙරළ තීරය" },
        coordinates: { x: 70, y: 65 },
        description: { EN: "A beautiful coastal safety point overlooking a historic landmark rock.", SI: "ඓතිහාසික පර්වතය අසල පිහිටි ආරක්ෂිත වනජීවී මුහුදු වෙරළ දසුන." }
      }
    ],
    visitorGuide: {
      bestTime: { EN: "5:30 AM - 9:30 AM or 3:00 PM - 6:00 PM for maximum animal activity.", SI: "පෙරවරු 5:30 - 9:30 හෝ පස්වරු 3:00 - 6:00 වන සතුන් ක්‍රියාශීලී වන හොඳම කාලයයි." },
      gettingThere: { EN: "Enter via Tissamaharama gate inside a permitted open-top wilderness 4x4.", SI: "තිස්සමහාරාම නගරයේ සිට සෆාරි 4x4 ජීප් රථ මඟින් වනෝද්‍යානයට ඇතුළු විය හැක." },
      attractions: { EN: "Sithulpawwa Ancient Rock Temple, Patanangala Coast, Salt Pans.", SI: "සිතුල්පව්ව පෞරාණික පර්වත විහාරය සහ යාල ලුණු ලේවායන්." }
    },
    galleryPhotos: [
      { id: "gw1", url: "https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&w=800&q=80", caption: { EN: "Wild elephant walking past trees", SI: "යාල වනෝද්‍යානයේ සැරිසරන මනරම් වන අලියෙක්" } }
    ],
    packages: [
      { id: "pkgw1", title: { EN: "Private Half-Day Dawn Safari", SI: "අර්ධ-දින පෞද්ගලික සෆාරි ගමන" }, desc: { EN: "Includes elite local spotter guide, 4x4 open safari vehicle booking, and national park entry passes.", SI: "පෞද්ගලික වනජීවී මඟපෙන්වන්නකු, සෆාරි ජීප් රථයක් සහ පිවිසුම් බලපත්‍ර ඇතුළත් වේ." }, price: "60" }
    ],
    reviews: [
      { id: "revw1", author: "Claire Higgins", country: "United Kingdom", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80", rating: 5, date: "May 24, 2026", comment: { EN: "Spotted two magnificent leopards sleeping on a tree branch near the tracks. Breathtaking safari!", SI: "පාර අසල ගසක නිදා සිටි අලංකාර දිවියන් දෙදෙනෙකු දැකගත්තෙමු. ඇත්තෙන්ම අමතක නොවන සෆාරියක්!" } }
    ]
  },
  "nilambe-meditation": {
    id: "nilambe-meditation",
    name: { EN: "Silent Mountaintop Mindfulness", SI: "නිලම්බේ නිහඬ මනෝභ්‍යාස මධ්‍යස්ථානය" },
    location: "Nilambe Meditation Centre",
    rating: 5.0,
    reviewsCount: 1120,
    heroImage: "https://images.unsplash.com/photo-1518098268026-4e43a1a009de?auto=format&fit=crop&w=1200&q=80",
    overview: {
      EN: "Immerse yourself in a profound, deeply calm silent meditation retreat. Situated on a serene, misty peak under pine trees, it offers absolute tranquility, guided yoga, and a mindful organic lifestyle.",
      SI: "මීදුම් සළු පොරවන කඳු මුදුනක පිහිටි නිසංසල පරිසරයක යෝග සාධන, නිර්මාංශ ආහාර රටා සමගින් ජීවිතය වෙනස් කරන අසිරිමත් නිහඬ භාවනා අත්දැකීමක් ලබන්න."
    },
    highlights: [
      {
        title: { EN: "Noble Silence Practice", SI: "ආධ්‍යාත්මික නිහඬතාව රැකීම" },
        desc: { EN: "Detox from high tech screens and enter absolute peaceful verbal silence.", SI: "තාක්ෂණික මෙවලම් වලින් බැහැරව උපරිම මානසික සහ ආත්මීය නිහඬතාවයක් ළඟා කරගැනීම." },
        icon: "Compass"
      },
      {
        title: { EN: "Mountain Pine Forest", SI: "පයිනස් වනාන්තර භාවනා මංපෙත්" },
        desc: { EN: "Wander along highly scenic pine needle carpet trails during sunset walks.", SI: "කඳුකර පයිනස් ගස් අතරින් වැටී ඇති මංපෙත්වල සෙමෙන් ඇවිද යමින් සිත සන්සුන් කරගැනීම." },
        icon: "TreePine"
      }
    ],
    mapSpots: [
      {
        id: "hall",
        name: { EN: "Main Granite Meditation Hall", SI: "ප්‍රධාන ගල් භාවනා ශාලාව" },
        coordinates: { x: 45, y: 35 },
        description: { EN: "Earthly stone building catching morning mist clouds.", SI: "ස්වභාවික ගල් පුවරු වලින් නිම වූ නිස්කලංක ප්‍රධාන භාවනා මධ්‍යස්ථානය." }
      }
    ],
    visitorGuide: {
      bestTime: { EN: "Minimum 3-day stay recommended to truly experience noble silence.", SI: "දේශීය නිහඬතාව මැනවින් අත්විඳීමට අවම වශයෙන් දින 3ක නේවාසික කාලයක් වඩාත් යෝග්‍ය වේ." },
      gettingThere: { EN: "Travel past Galaha road from Kandy, followed by a scenic 1km walk or tuk-tuk ascent.", SI: "මහනුවර සිට ගලහ මාර්ගය හරහා පැමිණ කන්ද මුදුනට ඇති මීටර් 1000ක වන මාවත දිගේ පයින් යා යුතුය." },
      attractions: { EN: "Pine forest walks, Organic tea garden Shalas, mountain ridges.", SI: "පයිනස් වනාන්තරය, කාබනික තේ වතු සහ සොඳුරු කඳු මුදුන්." }
    },
    galleryPhotos: [
      { id: "gm1", url: "https://images.unsplash.com/photo-1518098268026-4e43a1a009de?auto=format&fit=crop&w=800&q=80", caption: { EN: "The silent granite halls overlooking mountains", SI: "කඳු පන්තියට මුහුණලා ඇති ආසිරිමත් ගල් ශාලාවේ දසුනක්" } }
    ],
    packages: [
      { id: "pkgm1", title: { EN: "3-Day Inner Peace Retreat", SI: "තෙදින පූර්ණ ආධ්‍යාත්මික එකමුතුව" }, desc: { EN: "Includes minimalist forest cabin stay, organic vegetarian meals, tea, and daily guided sessions.", SI: "වන කුටීරයක නවාතැන්, දිනපතා යෝගා, හෘදයාංගම සෙලෝන් තේ සහ කාබනික ආහාර ඇතුළත් වේ." }, price: "35" }
    ],
    reviews: [
      { id: "revm1", author: "Dr. David Vance", country: "United States", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80", rating: 5, date: "May 10, 2026", comment: { EN: "A sanctuary for the soul. The silence at Nilambe is loud enough to wake you up inside.", SI: "ආත්මය සුවපත් කරන ක්ෂේම භූමියක්. නිලම්බේ ඇති නිහඬබව සැබැවින්ම මනස අවදි කරවයි." } }
    ]
  },
  "ruwanweli-meditation": {
    id: "ruwanweli-meditation",
    name: { EN: "Evening Spiritual Walking Meditation", SI: "රුවන්වැලි මහා සෑ සන්ධ්‍යා වන්දනාව" },
    location: "Ruwanweli Maha Seya (Anuradhapura)",
    rating: 5.0,
    reviewsCount: 4350,
    heroImage: "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=1200&q=80",
    overview: {
      EN: "Experience deep, unshakeable inner peace by walking barefoot on the vast, cooling granite floor of Ruwanweli Maha Seya, a 2,000-year-old giant stupa enveloped in shifting mist, oil lamp light and gentle chanting.",
      SI: "වසර දෙදහසක් පැරණි රුවන්වැලි මහා සෑ රඳුන්ගේ සලපතල මළුවේ පහන් ආලෝක සහ සාධුකාර හඬ මධ්‍යයේ පාවහන් රහිතව පියවර තබමින් සිතට අසීමිත සැනසුම හා සන්සුන්කම ළඟා කරගන්න."
    },
    highlights: [
      {
        title: { EN: "Sacred Walking Heritage", SI: "සලපතල මළුවේ පාද යාත්‍රාව" },
        desc: { EN: "Step barefoot on large cooling granite blocks under a beautiful starlit sky.", SI: "තරු පිරුණු අහස යට සලපතල මළුවේ පැරණි සිසිල් කළුගල් මත පාවහන් නොමැතිව ඇවිද යෑම." },
        icon: "Footprints"
      },
      {
        title: { EN: "2,000-Year Historic Stupa", SI: "ඓතිහාසික මහා ස්තූප අසිරිය" },
        desc: { EN: "One of mankind's oldest and tallest standing brick structures.", SI: "මහාවංශයෙහි සඳහන් වන ලොව පැරණිතම සහ ඉහළම ගඩොලින් තැනූ මහා පූජනීය නිර්මාණයකි." },
        icon: "Landmark"
      }
    ],
    mapSpots: [
      {
        id: "stupa",
        name: { EN: "The White Dome Citadel", SI: "රුවන්වැලි ස්තූප මළුව" },
        coordinates: { x: 50, y: 50 },
        description: { EN: "The monumental white dome containing sacred relic collections.", SI: "මහා සෑ රඳුන්ගේ සර්වඥ ධාතූන් වහන්සේලා නිදන් කොට ඇති ප්‍රධාන සුදු පැහැ ගෝලාකාර ස්තූපය." }
      }
    ],
    visitorGuide: {
      bestTime: { EN: "5:30 PM - 8:00 PM. The stones are beautifully cool, oil lamps flare, and chants fill the air.", SI: "සන්ධ්‍යා භාගය 5:30 - रात्री 8:00. ගල් මළුව සිසිල් වන අතර පහන් දහස් ගණනක් දල්වන අලංකාර කාලයයි." },
      gettingThere: { EN: "Situated inside the Anuradhapura UNESCO Sacred area. Accessible by auto-rickshaw or walking.", SI: "අනුරාධපුර පූජනීය නගර සීමාවේ පිහිටා ඇත. පාපැදියකින් හෝ ත්‍රිරෝද රථයකින් පහසුවෙන් ළඟා විය හැක." },
      attractions: { EN: "Jaya Sri Maha Bodhi tree, Jetavanaramaya Dome, Archaeological ruins.", SI: "ජය ශ්‍රී මහා බෝධින් වහන්සේ, ජේතවනාරාමය සහ රුවන්වැලි සෑ විහාර කලාපය." }
    },
    galleryPhotos: [
      { id: "gr1", url: "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=800&q=80", caption: { EN: "Stalwart white dome glowing under lamps", SI: "පහන් ආලෝකයෙන් බැබළෙන රුවන්වැලි මහා සෑ රජාණන් වහන්සේ" } }
    ],
    packages: [
      { id: "pkgr1", title: { EN: "Evening Chants Spiritual Tour", SI: "සන්ධ්‍යා වන්දනා අධ්‍යාත්මික චාරිකාව" }, desc: { EN: "Includes certified local archaeological guide, white linen clothes, oil lamp offerings, and direct transport.", SI: "විශ්වාසවන්ත පුරාවිද්‍යා මඟපෙන්වන්නකු, සුදු වස්ත්‍ර, පූජා මල් සහ තෙල් පහන් පූජාවන් ඇතුළත් වේ." }, price: "20" }
    ],
    reviews: [
      { id: "revr1", author: "Yuki Tanaka", country: "Japan", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80", rating: 5, date: "May 22, 2026", comment: { EN: "Sitting under the moon while warm breeze rolls past the stupa was the most emotional peace I have ever felt.", SI: "බෝධීන් වහන්සේ අසලින් හමා එන සිසිල් සුළඟත් සාධුකාර හඬත් සිතට අපූර්ව සන්සුන්කමක් ලබාදුන්නා." } }
    ]
  },
  "ayurveda-healing": {
    id: "ayurveda-healing",
    name: { EN: "Traditional Ayurveda & Yoga Healing", SI: "දේශීය ආයුර්වේද සහ යෝගා සුවතාවය" },
    location: "Rural Wellness Sanctuaries",
    rating: 4.8,
    reviewsCount: 1840,
    heroImage: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
    overview: {
      EN: "Completely rejuvenate your tired mind and body with ancient, authentic Ayurveda medicinal systems, rich warm-oil herbal baths, and sunrise yoga sessions set in silent verdant rice fields.",
      SI: "කුඹුරු යායකින් වට වූ නිස්කලංක පරිසරයක පැරණි ආයුර්වේද තෙල් ප්‍රතිකාර, ඖෂධීය වාෂ්ප ස්නාන සහ හිරු උදාවත් සමඟ කෙරෙන යෝග අභ්‍යාස මඟින් කය හා මනස පූර්ණ සුවපත් කරගන්න."
    },
    highlights: [
      {
        title: { EN: "Shirodhara Oil Therapy", SI: "සොඳුරු ශිරෝධාරා තෙල් සත්කාරය" },
        desc: { EN: "Rhythmic pouring of warm medicated herbal oil on the forehead to relieve anxiety.", SI: "නළල මතට සෙමින් උණුසුම් ඖෂධීය තෙල් බින්දු වත් කරමින් මනස උපරිම සුවතාවයට පත්කිරීම." },
        icon: "Sprout"
      },
      {
        title: { EN: "Paddy Field Yoga Deck", SI: "කුඹුරු යායට යාබද යෝගා ශාලාව" },
        desc: { EN: "Perform dynamic breathing movements overlooking lush golden rice stems.", SI: "රන්වන් කරලින් බර වූ සිරිලක කුඹුරු යායක් දෙස බලමින් හුස්ම ගැනීමේ යෝගා ක්‍රියාවලිය." },
        icon: "TreePine"
      }
    ],
    mapSpots: [
      {
        id: "shala",
        name: { EN: "Lotus Yoga Shala", SI: "නෙළුම් යෝගා මණ්ඩපය" },
        coordinates: { x: 50, y: 45 },
        description: { EN: "Open-air bamboo deck structured beautifully over organic lotus swamps.", SI: "ස්වභාවික නෙළුම් පොකුණක් මත ඉදිකළ උත්කර්ෂවත් උණ බට මණ්ඩපය කලාපය." }
      }
    ],
    visitorGuide: {
      bestTime: { EN: "6:00 AM for fresh sunrise yoga or 4:00 PM for relaxing warm oil therapy.", SI: "පෙරවරු 6:00 හිරු උදාව සමඟ යෝග අභ්‍යාස හෝ පස්වරු 4:00 සන්සුන් තෙල් සත්කාර සඳහා ඉතා සුදුසුය." },
      gettingThere: { EN: "Located inside beautiful natural sanctuaries dispersed around Habarana or Ella.", SI: "හබරණ හෝ ඇල්ල අවට ඇති සශ්‍රීක ගම්මාන පරිසර සීමාවන් තුළ පිහිටා ඇත." },
      attractions: { EN: "Traditional Herb Gardens, Organic crop nurseries, clay pot cooking trails.", SI: "දේශීය ඖෂධීය උද්‍යාන, කාබනික බෝග වගාවන් සහ මැටි වළඳේ ආහාර පිසීමේ අත්දැකීම්." }
    },
    galleryPhotos: [
      { id: "ga1", url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80", caption: { EN: "Practicing yoga next to deep natural fields", SI: "සොබාදහමේ නැවුම් ආදරය විඳිමින් යෝග අභ්‍යාසය" } }
    ],
    packages: [
      { id: "pkga1", title: { EN: "Rejuvenating Day Spa & Detox", SI: "පූර්ණ දින ආයුර්වේද සුව සේවා එකතුව" }, desc: { EN: "Includes signature Shirodhara head session, whole body warm herbal massage, organic lunch, & steam room.", SI: "ප්‍රධාන ශිරෝධාරා සත්කාරය, පූර්ණ ශරීර තෙල් සම්බාහනය, දේශීය පිසූ දිවා ආහාරය ඇතුළත් වේ." }, price: "55" }
    ],
    reviews: [
      { id: "reva1", author: "Sarah Jenkins", country: "Australia", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80", rating: 5, date: "May 15, 2026", comment: { EN: "The warm oil massage released years of physical tension. Total peaceful rebirth.", SI: "ඖෂධීය තෙල් සත්කාරයන් සහ දේශීය වාෂ්ප සම්බාහනය මගින් මගේ ශරීරයේ පීඩනය මුළුමනින්ම දුරු වුණා." } }
    ]
  },
  "sigiriya-fortress": {
    id: "sigiriya-fortress",
    name: { EN: "The 5th-Century Royal Sky Fortress", SI: "පස්වන සියවසේ අහස් මාළිගය" },
    location: "Sigiriya Ancient Citadel",
    rating: 5.0,
    reviewsCount: 5670,
    heroImage: "https://images.unsplash.com/photo-1588598130782-690a298573ec?auto=format&fit=crop&w=1200&q=80",
    overview: {
      EN: "Climb the grand 200-meter-high sheer rock citadel built by King Kasyapa. Explore ancient wall frescoes, mirror writings, and walk through the oldest surviving royal water gardens in Asia.",
      SI: "මීටර් 200ක් උසැති සීගිරි පර්වතය මුදුනෙහි පිහිටි පැරණි කලාත්මක බිතුසිතුවම් සහ ආසියාවේ ඉපැරණිතම ජල උද්‍යාන සහිත කාශ්‍යප රජුගේ මාලිගා සංකීර්ණය ගවේෂණය කරන්න."
    },
    highlights: [
      {
        title: { EN: "The Majestic Lion Paw Gate", SI: "සිංහ පාද පියගැට පෙළ" },
        desc: { EN: "Pass through massive stone lion paws guarding the final winding stair top.", SI: "පර්වත මුදුනට යන අවසන් පියගැට පෙළ ආරක්ෂා කරන මහා කළුගල් සිංහ පාද මැදින් යාම." },
        icon: "Landmark"
      },
      {
        title: { EN: "Ancient Water Gardens", SI: "පාරිසරික ජල උද්‍යාන කලාව" },
        desc: { EN: "A masterclass in ancient hydraulic engineering with fountains that still function.", SI: "අදටත් ක්‍රියාත්මක වන ජලමල් සහිත පුරාණ හයිඩ්‍රොලික් ඉංජිනේරු විද්‍යාවේ වික්‍රමාන්විත නිර්මාණයකි." },
        icon: "Droplets"
      }
    ],
    mapSpots: [
      {
        id: "lionpaw",
        name: { EN: "Lion Paw Guard", SI: "සිංහ පාද ද්වාරය" },
        coordinates: { x: 50, y: 60 },
        description: { EN: "Massive rock carved claw gateway leading to the royal summit.", SI: "මහා සිංහ පියුම කැටයම් පර්වත දොරටුව." }
      },
      {
        id: "frescoes",
        name: { EN: "Heavenly Maiden Frescoes", SI: "සීගිරි අප්සරාවන් බිතුසිතුවම්" },
        coordinates: { x: 35, y: 40 },
        description: { EN: "5th-century mineral paint plaster drawings of cloud maidens.", SI: "පස්වන සියවසේ සිනිබිතු මත අඳින ලද අලංකාර අප්සරාවන්ගේ සිතුවම් කලාපය." }
      }
    ],
    visitorGuide: {
      bestTime: { EN: "6:30 AM to beat the intense sun, or 3:30 PM for a spectacular golden dusk view.", SI: "පෙරවරු 6:30 තද සූර්ය රශ්මියෙන් වැළකීමට හෝ පස්වරු 3:30 කඳු මුදුනේ සුන්දර සැඳෑ හිරු නැරඹීමට හොඳම වේලාවයි." },
      gettingThere: { EN: "Situated in the central Cultural Triangle. Easily reachable from Dambulla or Habarana.", SI: "සිරිලක සංස්කෘතික ත්‍රිත්ව කලාපයේ පිහිටා ඇත. දඹුල්ලේ සිට පැයකින් පමණ වාහනයකින් ළඟා විය හැක." },
      attractions: { EN: "Pidurangala Rock hike, Sigiriya Archeology Museum, Elephant corridors.", SI: "පිදුරංගල පර්වතය, සීගිරිය පුරාවිද්‍යා කෞතුකාගාරය සහ වන අලි කලාපයන්." }
    },
    galleryPhotos: [
      { id: "gs1", url: "https://images.unsplash.com/photo-1588598130782-690a298573ec?auto=format&fit=crop&w=800&q=80", caption: { EN: "Sigiriya rock rising majestically over forests", SI: "වන ලැහැබ් මැදින් අහස සිපගන්නා සීගිරි මහා පර්වතය" } }
    ],
    packages: [
      { id: "pkgs1", title: { EN: "Royal Fortress Historical Tour", SI: "සීගිරි අහස් මාලිගා පුරාවෘත්ත චාරිකාව" }, desc: { EN: "Includes licensed expert guide, cold water bottles, umbrella, and custom heritage story booklet.", SI: "පළපුරුදු රාජකීය ඉතිහාසඥ මඟපෙන්වන්නකු, පිරිසිදු සීතල පැන්, සහ සීගිරි පුරාවෘත්ත ඉතිහාස පොතක් ඇතුළත් වේ." }, price: "30" }
    ],
    reviews: [
      { id: "revs1", author: "Mateo Rossi", country: "Italy", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80", rating: 5, date: "May 26, 2026", comment: { EN: "Indescribable structural feat. The symmetry of the pools from the top is satisfying and beautiful.", SI: "කිසිසේත් වචන වලින් විස්තර කළ නොහැකි නිර්මාණයක්. ඉහළ සිට පෙනෙන ජල උද්‍යානවල පිහිටීම විස්මිතයි." } }
    ]
  },
  "galle-fortress": {
    id: "galle-fortress",
    name: { EN: "The Living Colonial Ocean Fortress", SI: "ගාලු කොටුවේ යටත්විජිත පියසටහන්" },
    location: "Galle Dutch Fort",
    rating: 4.8,
    reviewsCount: 3950,
    heroImage: "https://images.unsplash.com/photo-1563294371-d64e0da193f4?auto=format&fit=crop&w=1200&q=80",
    overview: {
      EN: "Stroll through vibrant, ancient cobblestone streets preserved beautifully over 400 years. Bordered by the Indian Ocean, discover historic Dutch architecture, cozy art cafes, and scenic ramparts.",
      SI: "ලන්දේසි ගෘහ නිර්මාණ ශිල්පයෙන්, අලංකාර වීදි කැෆේ සහ කලාගාරවලින් සමන්විත, මුහුදු රළ පහර වදින මහා කොටු පවුරකින් වට වූ පෞරාණික ගාලු කොටුවේ සිරි නරඹන්න."
    },
    highlights: [
      {
        title: { EN: "Historic Sea Ramparts", SI: "මහා කොටු පවුර සහ බැස්ටියන්" },
        desc: { EN: "Walk along massive solid stone walls designed to repel naval attackers and ocean waves.", SI: "සමුද්‍ර ආක්‍රමණිකයන්ගෙන් රට ආරක්ෂා කළ ඓතිහාසික මහා ගල් පවුර දිගේ සක්මන් කිරීම." },
        icon: "Compass"
      },
      {
        title: { EN: "Dutch Reformed Church", SI: "ලන්දේසි ප්‍රතිසංස්කරණ පල්ලිය" },
        desc: { EN: "A beautiful 1752 site with historic colonial tombstones paving the floor.", SI: "වසර 1752 දී ඉදිකරන ලද ලන්දේසි යුගයේ පැරණි සිහිවටන ගල් පුවරු සහිත දේවස්ථානය." },
        icon: "Landmark"
      }
    ],
    mapSpots: [
      {
        id: "lighthouse",
        name: { EN: "Galle Lighthouse Point", SI: "මුහුදු ලන්තෑරුම් කුළුණ" },
        coordinates: { x: 85, y: 75 },
        description: { EN: "Towering white structure framed beautifully by high palm tree groves.", SI: "පෙරදිග වෙරළේ සක්මන් මාවතේ පිහිටි සුදු පැහැති සුප්‍රකට ප්‍රදීපාගාරය." }
      }
    ],
    visitorGuide: {
      bestTime: { EN: "4:00 PM - 7:00 PM. Highly pleasant sea breeze and stunning red sunset horizons.", SI: "පස්වරු 4:00 - 7:00. සිසිල් මුහුදු සුළඟ හමන අතර කොටු පවුරේ සිට රන්වන් හිරු බැසීම නැරඹීමට හොඳම කාලයයි." },
      gettingThere: { EN: "Directly located in Galle city. Highly accessible via Colombo Southern Expressway or coastal train.", SI: "ගාල්ල නගර සීමාවේ පිහිටා ඇත. කොළඹ සිට අධිවේගී මඟින් පැය දෙකකින් ළඟා විය හැක." },
      attractions: { EN: "Unawatuna sandy coast, Galle Maritime Museum, Dutch Hospital, Jungle Beach.", SI: "උණවටුන වැලි වෙරළ, ජාතික සාගර කෞතුකාගාරය සහ ලන්දේසි රෝහල් සංකීර්ණ කැෆේ." }
    },
    galleryPhotos: [
      { id: "gg1", url: "https://images.unsplash.com/photo-1563294371-d64e0da193f4?auto=format&fit=crop&w=800&q=80", caption: { EN: "Historic white lighthouse overlooking waves", SI: "ප්‍රදීපාගාරය සහ ගාලු කොටු මනරම් පවුර" } }
    ],
    packages: [
      { id: "pkgg1", title: { EN: "Fortress Heritage Walking Tour", SI: "කොටුවේ සංස්කෘතික සක්මන් චාරිකාව" }, desc: { EN: "Guided walk covering colonial ramparts, secret storage rooms, spice-trade history, and afternoon Ceylon tea.", SI: "පැරණි පවුරු, කුළුබඩු වෙළඳ ඉතිහාසය, සහ දහවල් පෝසිලේන් කෝප්පයක දේශීය තේ පැන් සංග්‍රහය ඇතුළත් වේ." }, price: "15" }
    ],
    reviews: [
      { id: "revg1", author: "Hana Vancova", country: "Czech Republic", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80", rating: 5, date: "May 19, 2026", comment: { EN: "Felt like stepping into a romantic European coastal town with a brilliant tropical breeze. Perfect!", SI: "ලන්දේසි නගරයක දසුනක් ගෙනදෙන, ලෝකයේ වෙන කොහේවත් නැති අසිරිමත් මුහුදුබඩ කොටුවක්." } }
    ]
  },
  "sunset-hill": {
    id: "sunset-hill",
    name: { EN: "The Golden Sunset Dome", SI: "මිරිස්ස පොල්ගස් කන්දේ රන්වන් සැඳෑව" },
    location: "Coconut Tree Hill (Mirissa)",
    rating: 4.9,
    reviewsCount: 2280,
    heroImage: "https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?auto=format&fit=crop&w=1200&q=80",
    overview: {
      EN: "Stand on a highly unique red-clay headland jutting dramatically into the turquoise sea, framed by a perfectly symmetrical grove of tall coconut palms as the evening sky turns orange.",
      SI: "මුහුද දෙසට නෙරා ගිය රතු පස් කන්දක ඉහළට විහිදුණු පොල්ගස් යායක් අතරින් ක්ෂිතිජය රන්වන් සහ තැඹිලි පාටින් වර්ණවත් වන අසිරිමත් සැඳෑ හිරු දසුනක් විඳින්න."
    },
    highlights: [
      {
        title: { EN: "Red Soil Cliffs", SI: "රතු පස් කඳු පවුර" },
        desc: { EN: "Striking reddish soil contrasting beautifully against deep blue sea currents.", SI: "නිල්වන් සාගර ජල තලය සමඟ මනරම් ලෙස ගැළපෙන රතු පැහැති පිහිටීම." },
        icon: "Compass"
      },
      {
        title: { EN: "Symmetric Palm Groves", SI: "මුහුදට නැමුණු පොල්ගස් යාය" },
        desc: { EN: "Dozens of tall coconut trees framing the sunset horizon.", SI: "ක්ෂිතිජය දෙස බලා වක්‍රාකාරව අහසට දෙසට වැඩුණු සොඳුරු පොල්ගස් සමූහයේ පිහිටීම." },
        icon: "TreePine"
      }
    ],
    mapSpots: [
      {
        id: "cliff",
        name: { EN: "Red Headland Tip", SI: "රතු තුඩුව කෙළවර" },
        coordinates: { x: 50, y: 55 },
        description: { EN: "The famous cliff tip where the sea waves splash.", SI: "මුහුදු රළ ගැටෙන, පොල්ගස් පිහිටි වඩාත්ම ජනප්‍රිය ඡායාරූප කලාපය." }
      }
    ],
    visitorGuide: {
      bestTime: { EN: "5:30 PM - 6:30 PM. The golden hour lighting is extraordinary as the sun dips.", SI: "සැඳෑ භාගයේ 5:30 - 6:30. හිරු බැස යන රන්වන් ආලෝකය ඡායාරූප ගැනීමට මනරම් කාලය වේ." },
      gettingThere: { EN: "Walk from Mirissa town coast along the beach line for 15 minutes of dynamic walk.", SI: "මිරිස්ස වෙරළ දිගේ විනාඩි 15 ක කෙටි කලපුව අසල ඇවිදීමකින් මෙහි ළඟා විය හැක." },
      attractions: { EN: "Mirissa beach surfing points, Parrot Rock Lookout, Secret Bay, whale travel.", SI: "මිරිස්සි වැලි තලාව, පැරට් රොක් දර්ශන පවුර සහ තල්මසුන් නැරඹීමේ සේවාවන්." }
    },
    galleryPhotos: [
      { id: "gsh1", url: "https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?auto=format&fit=crop&w=800&q=80", caption: { EN: "Dozens of palms swaying against orange clouds", SI: "රන්වන් වලාකුළු පසුබිමේ සෙලවෙන අලංකාර පොල්ගස් යාය" } }
    ],
    packages: [
      { id: "pkgsh1", title: { EN: "Sunset Golden Hour Photoshoot", SI: "රන්වන් සැඳෑ ඡායාරූප සේවාව" }, desc: { EN: "Includes professional digital photographer, traditional thambili (king coconut) drinks, the cliff safety guard.", SI: "දේශීය රසවත් තැඹිලි පානයක්, සහ වෘත්තීය ඡායාරූප ශිල්පියකුගේ සේවාවන් ඇතුළත් වේ." }, price: "30" }
    ],
    reviews: [
      { id: "revsh1", author: "Lucas Dubois", country: "Belgium", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80", rating: 5, date: "May 20, 2026", comment: { EN: "Unbelievable scenery. It looks exactly like a postcard! Best photo spot in southern coast.", SI: "විස්මිත දර්ශනයක්. සැබවින්ම පෝස්ට්කාඩ් පතක් බඳුයි! දකුණු වෙරළේ හොඳම තැන." } }
    ]
  }
};
