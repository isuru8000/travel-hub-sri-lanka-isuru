
import React from 'react';
import { Food, HeritageMusic, TraditionalMedicine, Phrase, TravelEssential, Festival, Translation, Transport } from './types.ts';
import { DESTINATIONS_DATA } from './destination_details.tsx';

export const SUPABASE_KEY = 'sb_publishable_c8wPY71QFNsFJKcAEuD86w_pcqen0nv';

export const LOGO_URL = "https://i.ibb.co/9m8G0fP/travel-hub-logo.png";

export const UI_STRINGS: Translation = {
  heroTitle: { EN: "Discover True Beauty of Sri Lanka", SI: "ශ්‍රී ලංකාවේ සැබෑ සුන්දරත්වය සොයා ගන්න" },
  exploreDestinations: { EN: "Explore Destinations", SI: "ගමනාන්ත ගවේෂණය කරන්න" },
  popularHighlightsTitle: { EN: "Top Highlights", SI: "ප්‍රධාන ආකර්ෂණයන්" },
  popularHighlightsSubtitle: { EN: "See the five most famous places that show the heart of our island.", SI: "අපගේ දිවයිනේ ජීවය නිරූපණය කරන සුවිශේෂී ස්ථාන පහක් හරහා සංචාරය කරන්න." },
  planYourTrip: { EN: "Plan Your Trip", SI: "සංචාරය සැලසුම් කරන්න" },
  ancientHighlights: { EN: "Ancient Sri Lanka Highlights", SI: "පැරණි ශ්‍රී ලංකාවේ විශේෂිත ස්ථාන" },
  natureAdventure: { EN: "Nature & Adventure", SI: "සොබාදහම සහ වික්‍රමය" },
  travelMemories: { EN: "Travel Memories", SI: "සංචාරක මතකයන්" },
  lankaGuideTitle: { EN: "Lanka Guide AI", SI: "ලංකා ගයිඩ් AI" },
  searchPlaceholder: { EN: "Search destinations...", SI: "ගමනාන්ත සොයන්න..." },
  filterRegionLabel: { EN: "Filter by Region", SI: "කලාපය අනුව පෙරන්න" },
  allRegions: { EN: "All Regions", SI: "සියලුම කලාප" },
  historyLabel: { EN: "The Legend & History", SI: "පුරාවෘත්තය සහ ඉතිහාසය" },
  tipsLabel: { EN: "Traveler's Wisdom", SI: "සංචාරක උපදෙස්" },
  close: { EN: "Close", SI: "වසා දමන්න" },
  exploreInterests: { EN: "Explore Your Interests", SI: "ඔබේ රුචිකත්වයන් ගවේෂණය කරන්න" },
  explore: { EN: "Explore", SI: "ගවේෂණය" },
  vrHorizon: { EN: "VR Horizon", SI: "VR ක්ෂිතිජය" },
  registry: { EN: "Registry", SI: "නාමාවලිය" },
  initializeMap: { EN: "Turn on the Global Map", SI: "ගෝලීය සිතියම් පද්ධතිය සක්‍රිය කරන්න" },
  uncoverDestiny: { EN: "Uncover Your Destiny", SI: "ඔබේ දෛවය සොයාගන්න" },
  startDiscovery: { EN: "Start Discovery", SI: "ගවේෂණය අරඹන්න" },
  returnToRegistry: { EN: "Return to Registry", SI: "නාමාවලියට" },
  exploreNode: { EN: "Explore Node", SI: "ගවේෂණය කරන්න" },
  masterArchive: { EN: "About", SI: "පිළිබඳව" },
  logisticalVision: { EN: "Logistical Vision", SI: "ප්‍රවාහන දැක්ම" },
  enhancedArchive: { EN: "Enhanced Archive", SI: "ඔප්නැංවූ සංරක්ෂණාගාරය" },
  neuralHandshake: { EN: "Neural Handshake", SI: "නාභිගත සම්බන්ධතාවය" },
  // Fix: Added missing archivalFragment UI string for AI Deep Dive fallback states
  archivalFragment: { EN: "Archival Fragment", SI: "සංරක්ෂිත කොටස" }
};

export const TRANSPORT_DATA: Transport[] = [
  {
    id: 't1',
    name: { EN: 'Elite Chauffeur Service', SI: 'ප්‍රභූ රියදුරු සේවාව' },
    type: 'road',
    price: 85,
    description: { EN: 'Luxury air-conditioned sedans with English-speaking heritage guides.', SI: 'ඉංග්‍රීසි කතා කරන මගපෙන්වන්නන් සහිත සුඛෝපභෝගී රථ සේවාව.' },
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80',
    features: { EN: ['Wi-Fi Enabled', 'Refreshments Included', 'Flexible Itinerary'], SI: ['Wi-Fi පහසුකම්', 'කෙටි ආහාර', 'නම්යශීලී ගමන් මග'] }
  }
];

export const DESTINATIONS = DESTINATIONS_DATA;

export const FOODS_DATA: Food[] = [
  {
    id: "f1",
    name: { EN: "Kottu Roti", SI: "කොත්තු රොටි" },
    category: "street",
    description: { EN: "A popular street food made with chopped bread, veggies, and spices.", SI: "කැබලි කළ රොටි, එළවළු සහ කුළුබඩු මිශ්‍ර ජනප්‍රියම වීදි ආහාරයකි." },
    image: "https://i.pinimg.com/1200x/12/13/ee/1213eed0360d5f7cb4887dfabafc0531.jpg",
    spiciness: 5,
    ingredients: [{ EN: "Godamba Roti", SI: "ගොඩම්බා රොටි" }, { EN: "Leeks", SI: "ලීක්ස්" }],
    tasteProfile: { EN: "Fiery & Savory", SI: "අධික සැර සහ රසවත්" }
  },
  {
    id: "f2",
    name: { EN: "Milk Rice (Kiribath)", SI: "කිරි බත්" },
    category: "royal",
    description: { EN: "Rice cooked with coconut milk. It is a sign of good luck.", SI: "සෞභාග්‍යයේ සංකේතයකි, ඝන පොල් කිරි සමග පිසින ලද බත්." },
    image: "https://i.pinimg.com/1200x/5e/67/3a/5e673ac6df94319aed7046ee13aeda10.jpg",
    spiciness: 1,
    ingredients: [{ EN: "Rice", SI: "හාල්" }, { EN: "Coconut Milk", SI: "පොල් කිරි" }],
    tasteProfile: { EN: "Creamy & Mild", SI: "කිරි රසැති සහ මෘදු" }
  },
  {
    id: "f3",
    name: { EN: "Hoppers (Appa)", SI: "ආප්ප" },
    category: "street",
    description: { EN: "Crispy bowls made from rice flour and coconut milk.", SI: "පැසවන ලද සහල් පිටි සහ පොල් කිරි වලින් සාදන ලද මෘදු මැදක් සහිත ආහාරයකි." },
    image: "https://i.pinimg.com/1200x/a8/fe/54/a8fe54d30c1b388e746b74f2e31c1329.jpg",
    spiciness: 1,
    ingredients: [{ EN: "Rice Flour", SI: "සහල් පිටි" }, { EN: "Coconut Water", SI: "තැඹිලි වතුර" }],
    tasteProfile: { EN: "Crispy & Soft", SI: "කරකුරු සහ මෘදු" }
  },
  {
    id: "f4",
    name: { EN: "Pol Sambol", SI: "පොල් සම්බෝල" },
    category: "village",
    description: { EN: "Fresh coconut mixed with red chillies, onions, and lime.", SI: "රතු මිරිස්, ලූනු සහ දෙහි සමග අඹරන ලද නැවුම් පොල් සම්බෝලයකි." },
    image: "https://i.pinimg.com/1200x/44/d5/78/44d578cb5b3d6f8e558f3e07eb45a5a5.jpg",
    spiciness: 4,
    ingredients: [{ EN: "Coconut", SI: "පොල්" }, { EN: "Chilli Powder", SI: "මිරිස් කුඩු" }],
    tasteProfile: { EN: "Spicy & Zesty", SI: "සැර සහ ප්‍රබෝධමත්" }
  },
  {
    id: "f5",
    name: { EN: "Fish Ambul Thiyal", SI: "මාළු ඇඹුල් තියල්" },
    category: "coastal",
    description: { EN: "A sour fish curry made with a special fruit called goraka.", SI: "ගොරකා යොදා පදම් කර පිසින ලද දකුණු වෙරළබඩට ආවේණික මාළු ව්‍යංජනයකි." },
    image: "https://i.pinimg.com/736x/fd/9b/8e/fd9b8ef6da3ff4efa97354ff3fef9344.jpg",
    spiciness: 3,
    ingredients: [{ EN: "Tuna Fish", SI: "කෙලවල්ලා මාළු" }, { EN: "Goraka", SI: "ගොරකා" }],
    tasteProfile: { EN: "Sour & Peppery", SI: "ඇඹුල් සහ ගම්මිරිස් රස" }
  },
  {
    id: "f6",
    name: { EN: "Watalappam", SI: "වටලප්පන්" },
    category: "sweets",
    description: { EN: "A sweet pudding made with coconut milk and jaggery.", SI: "පොල් කිරි, හකුරු සහ කුළුබඩු යොදා හුමාලයෙන් තම්බා සාදා ගන්නා අතුරුපසකි." },
    image: "https://i.pinimg.com/736x/2d/1c/d8/2d1cd814846a097b23f659c290ee7208.jpg",
    spiciness: 1,
    ingredients: [{ EN: "Jaggery", SI: "හකුරු" }, { EN: "Cashews", SI: "කජු" }],
    tasteProfile: { EN: "Sweet & Spiced", SI: "පැණි රස සහ සුවඳැති" }
  },
  {
    id: "f7",
    name: { EN: "Kokis", SI: "කොකිස්" },
    category: "sweets",
    description: { EN: "Fried crispy snacks made for the New Year.", SI: "සිංහල අලුත් අවුරුද්දේ ප්‍රධාන ආහාරයක් වන කරකුරු ගෑවෙන රසවත් ආහාරයකි." },
    image: "https://i.pinimg.com/736x/70/5e/bb/705ebb1f101da624999af9379f84e160.jpg",
    spiciness: 1,
    ingredients: [{ EN: "Rice Flour", SI: "සහල් පිටි" }, { EN: "Coconut Milk", SI: "පොල් කිරි" }],
    tasteProfile: { EN: "Crunchy", SI: "කරකර ගෑවෙන" }
  },
  {
    id: "f8",
    name: { EN: "Lamprais", SI: "ලම්ප්‍රයිස්" },
    category: "royal",
    description: { EN: "Rice and meat cooked inside a banana leaf.", SI: "බර්ගර් ජාතිකයන්ගෙන් පැවත එන, කෙසෙල් කොළයේ ඔතා පුලුස්සා ගන්නා රසවත් බත් පාර්සලයකි." },
    image: "https://i.pinimg.com/736x/b4/09/a2/b409a2a150470d29cfefddee5d0105cd.jpg",
    spiciness: 3,
    ingredients: [{ EN: "Mixed Meats", SI: "මස් වර්ග" }, { EN: "Banana Leaf", SI: "කෙසෙල් කොළ" }],
    tasteProfile: { EN: "Complex & Fragrant", SI: "සුවඳැති සහ විවිධ රසැති" }
  },
  {
    id: "f10",
    name: { EN: "String Hoppers (Idiyappam)", SI: "ඉඳිආප්ප" },
    category: "village",
    description: { EN: "Steamed rice flour noodles. Good for breakfast or dinner.", SI: "සහල් පිටි නූල් ලෙස වත් කර හුමාලයෙන් තම්බා සාදා ගන්නා ආහාරයකි." },
    image: "https://i.pinimg.com/1200x/0f/bc/82/0fbc825e30bb0f28b925badd1090b87e.jpg",
    spiciness: 1,
    ingredients: [{ EN: "Rice Flour", SI: "සහල් පිටි" }, { EN: "Salt", SI: "ලුණු" }],
    tasteProfile: { EN: "Light & Delicate", SI: "සැහැල්ලු සහ මෘදු" }
  },
  {
    id: "f11",
    name: { EN: "Pol Roti", SI: "පොල් රොටි" },
    category: "village",
    description: { EN: "A flatbread made with flour and coconut.", SI: "තිරිඟු පිටි සහ ගාගත් පොල් මිශ්‍ර කර සාදන තැටියක පුලුස්සා ගන්නා රොටි වර්ගයකි." },
    image: "https://i.pinimg.com/1200x/10/36/fe/1036fed67da210ed74b4211be4ba5352.jpg",
    spiciness: 2,
    ingredients: [{ EN: "Wheat Flour", SI: "තිරිඟු පිටි" }, { EN: "Grated Coconut", SI: "ගාගත් පොල්" }],
    tasteProfile: { EN: "Nutty & Dense", SI: "පොල් රසැති සහ තද" }
  },
  {
    id: "f12",
    name: { EN: "Jackfruit Curry (Kiri Kos)", SI: "කිරි කොස් ව්‍යංජනය" },
    category: "village",
    description: { EN: "Jackfruit cooked in thick coconut milk.", SI: "පැහැනු කොස් මදුළු පොල් කිරි දමා පිසින ලද ඉතා රසවත් ව්‍යංජනයකි." },
    image: "https://i.pinimg.com/736x/d0/10/17/d010171821dd25f9b7934b0d8821bae1.jpg",
    spiciness: 1,
    ingredients: [{ EN: "Jackfruit", SI: "කොස්" }, { EN: "Coconut Milk", SI: "පොල් කිරි" }],
    tasteProfile: { EN: "Creamy & Earthy", SI: "කිරි රසැති සහ ස්වභාවික" }
  },
  {
    id: "f13",
    name: { EN: "Jaffna Crab Curry", SI: "යාපනය කකුළුවෝ ව්‍යංජනය" },
    category: "coastal",
    description: { EN: "A spicy crab curry from the north of the island.", SI: "යාපනයට ආවේණික අතිශය සැර සහ සුවඳවත් කකුළුවෝ ව්‍යංජනයකි." },
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80",
    spiciness: 5,
    ingredients: [{ EN: "Lagoon Crab", SI: "කකුළුවෝ" }, { EN: "Jaffna Curry Powder", SI: "යාපනය තුනපහ" }],
    tasteProfile: { EN: "Intense & Fiery", SI: "අධික සැර සහ ප්‍රබල" }
  },
  {
    id: "f15",
    name: { EN: "Fruit Achcharu", SI: "අච්චාරු" },
    category: "street",
    description: { EN: "Spicy and sour pickled fruits. A favorite street snack.", SI: "මිරිස් සහ ලුණු මිශ්‍ර කර සාදන පලතුරු අච්චාරු ඕනෑම වීදියක දැකගත හැකිය." },
    image: "https://i.pinimg.com/736x/8b/fa/96/8bfa96778b07430cbf3cb71dc67906eb.jpg",
    spiciness: 4,
    ingredients: [{ EN: "Wild Fruits", SI: "වල් පලතුරු" }, { EN: "Chili Flakes", SI: "කැබලි මිරිස්" }],
    tasteProfile: { EN: "Sour & Spicy", SI: "අච්චාරු සහ සැර" }
  },
  {
    id: "f16",
    name: { EN: "Lavariya", SI: "ලැවරියා" },
    category: "sweets",
    description: { EN: "Sweet coconut inside a steamed noodle roll.", SI: "පැණි පොල් පිරවූ රසවත් ඉඳිආප්ප වැනි අතුරුපසකි." },
    image: "https://i.pinimg.com/1200x/71/13/98/7113987dfac34a5e6f12e458a3956852.jpg",
    spiciness: 1,
    ingredients: [{ EN: "Rice Flour", SI: "සහල් පිටි" }, { EN: "Pani Pol", SI: "පැණි පොල්" }],
    tasteProfile: { EN: "Honeyed & Soft", SI: "පැණි රස සහ මෘදු" }
  },
  {
    id: "f17",
    name: { EN: "Thala Guli", SI: "තල ගුලි" },
    category: "sweets",
    description: { EN: "Sweet balls made with sesame seeds and jaggery.", SI: "තල සහ හකුරු අඹරා සාදා ගන්නා පෝෂණීය රසකැවිල්ලකි." },
    image: "https://i.pinimg.com/736x/5b/e5/f7/5be5f7cacbcefe6d5160e5fac818e01f.jpg",
    spiciness: 1,
    ingredients: [{ EN: "Sesame Seeds", SI: "තල" }, { EN: "Jaggery", SI: "හකුරු" }],
    tasteProfile: { EN: "Sweet & Toasted", SI: "පැණි රස සහ තල සුවඳ" }
  },
  {
    id: "f18",
    name: { EN: "Ulundu Vadai", SI: "උලුඳු වඩේ" },
    category: "street",
    description: { EN: "Savory lentil donuts that are crispy on the outside.", SI: "උඳු පිටි වලින් සාදන කරකුරු ගෑවෙන රසවත් වඩේ වර්ගයකි." },
    image: "https://i.pinimg.com/1200x/07/3c/b7/073cb7168fbb1efe61f830d8f7dc1240.jpg",
    spiciness: 2,
    ingredients: [{ EN: "Urad Dal", SI: "උඳු" }, { EN: "Green Chili", SI: "අමු මිරිස්" }],
    tasteProfile: { EN: "Crunchy & Herbaceous", SI: "කරකුරු සහ සුවැඳැති" }
  },
  {
    id: "f19",
    name: { EN: "Pittu", SI: "පිට්ටු" },
    category: "village",
    description: { EN: "Steamed rice and coconut in a cylinder shape.", SI: "සහල් පිටි සහ නැවුම් පොල් මිශ්‍ර කර සාදන ලද හුමාලයෙන් තම්බා ගත් ආහාරයකි." },
    image: "https://i.pinimg.com/1200x/6d/7e/56/6d7e563f1c2023515b337ca7b266cd77.jpg",
    spiciness: 1,
    ingredients: [{ EN: "Rice Flour", SI: "සහල් පිටි" }, { EN: "Grated Coconut", SI: "ගාගත් පොල්" }],
    tasteProfile: { EN: "Crumbly & Nutty", SI: "කැබලි සහිත සහ පොල් රසැති" }
  }
];

export const HERITAGE_MUSIC_DATA: HeritageMusic[] = [
  { id: 'm1', type: 'instrument', name: { EN: 'Geta Beraya', SI: 'ගැට බෙරය' }, description: { EN: 'The main drum used in Kandy dancing.', SI: 'උඩරට නර්තන කලාවේ ප්‍රධාන බෙරයයි, කොහොඹ ලීයෙන් නිමවා ඇත.' }, image: 'https://i.pinimg.com/1200x/b6/38/9c/b6389c7309ae0d612efbb031f822dece.jpg', origin: { EN: 'Kandy', SI: 'මහනුවර' }, significance: { EN: 'Used for big temple festivals.', SI: 'මහනුවර පෙරහැර වැනි චාරිත්‍ර සඳහා අත්‍යවශ්‍ය වේ.' } },
  { id: 'm2', type: 'instrument', name: { EN: 'Yak Beraya', SI: 'යක් බෙරය' }, description: { EN: 'A drum used for rituals and devil dancing.', SI: 'පහතරට ශාන්ති කර්ම සහ තොවිල් සඳහා භාවිතා කරන බෙරයකි.' }, image: 'https://i.pinimg.com/1200x/1c/8a/b3/1c8ab3c7bb50d6cda862968f45b6e08a.jpg', origin: { EN: 'Coastal South', SI: 'දකුණු වෙරළ තීරය' }, significance: { EN: 'Used for healing and stories.', SI: 'ආධ්‍යාත්මික සුවය සහ කතන්දර කීම සඳහා යොදා ගනී.' } },
  { id: 'm3', type: 'instrument', name: { EN: 'Dawula', SI: 'දවුල' }, description: { EN: 'A drum used in Sabaragamuwa dancing.', SI: 'සබරගමු නර්න සම්ප්‍රදායේ රිද්මයානුකූල හදගැස්මයි.' }, image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80', origin: { EN: 'Sabaragamuwa', SI: 'සබරගමුව' }, significance: { EN: 'Used in temple ceremonies.', SI: 'පන්සල් වල හේවිසි වාදනය සඳහා අත්‍යවශ්‍ය වේ.' } },
  { id: 'm4', type: 'instrument', name: { EN: 'Thammattama', SI: 'තම්මැට්ටම' }, description: { EN: 'Two small drums played with sticks.', SI: 'සැරයටි දෙකකින් වාදනය කරන කුඩා බෙර යුගලයකි.' }, image: 'https://i.pinimg.com/1200x/46/f5/5a/46f55ad1bf0cb1e48e274d869d5d70b6.jpg', origin: { EN: 'Temple Tradition', SI: 'පන්සල් උරුමය' }, significance: { EN: 'Signals the start of temple prayers.', SI: 'පූජා කටයුතු ආරම්භ වන බවට සංඥා කිරීමට යොදා ගනී.' } },
  { id: 'm5', type: 'instrument', name: { EN: 'Horaneva', SI: 'හොරණෑව' }, description: { EN: 'An instrument with a sharp sound.', SI: 'තියුණු හඬක් නිකුත් කරන පාරම්පරික පිඹින වාද්‍ය භාණ්ඩයකි.' }, image: 'https://images.unsplash.com/photo-1665849050332-8d5d7e59afb6?auto=format&fit=crop&w=800&q=80', origin: { EN: 'Ritual Arts', SI: 'චාරිත්‍ර කලාව' }, significance: { EN: 'Adds music to temple drumming.', SI: 'පන්සල් වාදන වලට මිහිරි තනු එක් කරයි.' } },
  { id: 'm6', type: 'instrument', name: { EN: 'Hakgediya', SI: 'හක්ගෙඩිය' }, description: { EN: 'A shell blown for holy moments.', SI: 'පූජනීය අවස්ථාවන් දැනුම් දීම සඳහා පිඹින හක්ගෙඩියකි.' }, image: 'https://i.pinimg.com/1200x/ce/b7/d6/ceb7d6e0eba3935d85da2d37f1ee8875.jpg', origin: { EN: 'Ancient Puranas', SI: 'පැරණි පුරාණ කාලය' }, significance: { EN: 'Brings good luck and keeps away evil.', SI: 'දේව ආශිර්වාදය පතා සහ අසුබ දේ පලවා හැරීමට යොදා ගනී.' } },
  { id: 'm8', type: 'instrument', name: { EN: 'Udekkiya', SI: 'උඩැක්කිය' }, description: { EN: 'A small drum shaped like an hourglass.', SI: 'නූල් මගින් හඬ වෙනස් කළ හැකි කුඩා බෙරයකි.' }, image: 'https://i.pinimg.com/1200x/5a/6b/da/5a6bda7b5dcc7e97a499105109ab11e7.jpg', origin: { EN: 'Hill Country', SI: 'කඳුකරය' }, significance: { EN: 'Used for royal entertainment.', SI: 'සංචාරක ගායකයින් සහ රාජ සභා නර්තන ශිල්පීන් භාවිතා කරයි.' } },
  { id: 'm9', type: 'instrument', name: { EN: 'Raban', SI: 'රබන්' }, description: { EN: 'A large drum played by women during festivals.', SI: 'උත්සව කාල වලදී කාන්තාවන් සමූහ වශයෙන් වාදනය කරන විශාල රබනයි.' }, image: 'https://i.pinimg.com/1200x/f7/36/80/f73680afb8120e084f40b29a230639c9.jpg', origin: { EN: 'Village Commons', SI: 'ග්‍රාමීය උරුමය' }, significance: { EN: 'The sound of a village party.', SI: 'ප්‍රජා සැමරුම් වල හඬ මෙයයි.' } }
];

export const MEDICINE_DATA: TraditionalMedicine[] = [
  {
    id: "herb-1",
    type: "herb",
    name: { EN: "Neem", SI: "කොහොඹ" },
    description: { EN: "A plant used for healing for a long time.", SI: "සියවස් ගණනාවක් පුරා සුව කිරීම සඳහා භාවිතා කරන විෂබීජ නාශක ගුණ." },
    image: "https://i.pinimg.com/736x/9e/5d/d9/9e5dd96b4581dcd01c7cbd904e429ac8.jpg",
    benefits: { EN: "Promotes skin health and immunity.", SI: "සමේ සෞඛ්‍යය සහ ප්‍රතිශක්තිය වැඩි කරයි." },
    usage: { EN: "Applied as a paste or oil.", SI: "ආලේපනයක් හෝ තෙල් ලෙස භාවිතා කරයි." }
  },
  {
    id: "herb-2",
    type: "herb",
    name: { EN: "Turmeric", SI: "කහ" },
    description: { EN: "A natural medicine that helps with swelling.", SI: "ස්වභාවික ප්‍රතිජීවකයක් සහ ප්‍රදාහ නාශකයක් ලෙස සැලකේ." },
    image: "https://i.pinimg.com/736x/42/94/35/42943576f46ac5797b3d2d8a1403f3f6.jpg",
    benefits: { EN: "Heals wounds and improves digestion.", SI: "තුවාල සුව කරයි සහ ආහාර ජීර්ණය පහසු කරයි." },
    usage: { EN: "Used in cooking and as a skin mask.", SI: "ආහාර පිසීමට සහ සමේ ආලේපනයක් ලෙස භාවිතා කරයි." }
  },
  {
    id: "herb-3",
    type: "herb",
    name: { EN: "Cinnamon", SI: "කුරුඳු" },
    description: { EN: "The best cinnamon in the world comes from here.", SI: "ලොව හොඳම සැබෑ කුරුඳු මෙම දිවයිනෙන් හමුවේ." },
    image: "https://i.pinimg.com/736x/4a/35/7f/4a357f5c3983f015c907333cff0653a3.jpg",
    benefits: { EN: "Controls blood sugar and boosts metabolism.", SI: "රුධිරයේ සීනි පාලනය කරන අතර පරිවෘත්තීය වේගය වැඩි කරයි." },
    usage: { EN: "Consumed as powder or oil.", SI: "කුඩු හෝ තෙල් ලෙස භාවිතා කරයි." }
  },
  {
    id: "herb-4",
    type: "herb",
    name: { EN: "Ginger", SI: "ඉඟුරු" },
    description: { EN: "Used for a long time to help with coughs.", SI: "කැස්ස සහ හෙම්බිරිස්සාව සඳහා ප්‍රධාන දේශීය ඔසුවකි." },
    image: "https://i.pinimg.com/736x/44/2d/20/442d202166b89146635764f0154fda8c.jpg",
    benefits: { EN: "Relieves nausea and improves circulation.", SI: "ඔක්කාරය සමනය කරයි සහ රුධිර සංසරණය වැඩි කරයි." },
    usage: { EN: "Brewed as a strong herbal tea.", SI: "තේ ලෙස තම්බා පානය කරයි." }
  },
  {
    id: "herb-5",
    type: "herb",
    name: { EN: "Gotu Kola", SI: "ගොටුකොළ" },
    description: { EN: "An old herb that helps the brain.", SI: "මොළයේ ක්‍රියාකාරිත්වයට සහ දීර්ඝායුෂ සඳහා වන ඔසුවකි." },
    image: "https://i.pinimg.com/1200x/3c/e7/1d/3ce71da2719ec9d9722d7cecc2599902.jpg",
    benefits: { EN: "Improves memory and reduces anxiety.", SI: "මතක ශක්තිය වැඩි කරයි සහ මානසික ආතතිය අඩු කරයි." },
    usage: { EN: "Eaten as a salad (Sambol).", SI: "සම්බෝලයක් ලෙස ආහාරයට ගනී." }
  },
  {
    id: "herb-6",
    type: "herb",
    name: { EN: "Aloe Vera (Komarika)", SI: "කෝමාරිකා" },
    description: { EN: "A cool gel for skin burns and beauty.", SI: "සමේ පිළිස්සුම් සහ රූපලාවන්‍ය කටයුතු සඳහා භාවිතා කරන සිසිල්කාරක ඔසුවකි." },
    image: "https://i.pinimg.com/736x/4e/29/29/4e2929ee8842aac82e8cbb66db6dc9b9.jpg",
    benefits: { EN: "Moisturizes skin and treats inflammation.", SI: "සම තෙතමනය කරයි සහ ප්‍රදාහයන් සමනය කරයි." },
    usage: { EN: "Applied topically or taken as a juice.", SI: "සම මත ආලේප කරයි හෝ පානයක් ලෙස ගනී." }
  },
  {
    id: "herb-7",
    type: "herb",
    name: { EN: "Amla (Nelli)", SI: "නෙල්ලි" },
    description: { EN: "A fruit with lots of Vitamin C.", SI: "දේශීය වෙදකමේ එන විටමින් C බහුලම ඔසුවකි." },
    image: "https://i.pinimg.com/736x/f5/37/c2/f537c276c594bb479bccdc132fb41ea5.jpg",
    benefits: { EN: "Powerful antioxidant for hair and skin.", SI: "සම සහ හිසකෙස් සඳහා ඉතා ගුණදායක ප්‍රතිඔක්සිකාරකයකි." },
    usage: { EN: "Eaten raw or as a tonic.", SI: "අමුවෙන් හෝ සිරප් එකක් ලෙස ගනී." }
  },
  {
    id: "herb-8",
    type: "herb",
    name: { EN: "Moringa (Murunga)", SI: "මුරුංගා" },
    description: { EN: "A tree with many healthy parts.", SI: "ඉහළ පෝෂණ ගුණය නිසා 'ආශ්චර්යමත් ගස' ලෙස හැඳින්වේ." },
    image: "https://i.pinimg.com/736x/ba/07/ee/ba07ee618d2e4a8f1146754ae8ae8710.jpg",
    benefits: { EN: "Regulates blood pressure and bone health.", SI: "රුධිර පීඩනය පාලනය කරයි සහ අස්ථි ශක්තිමත් කරයි." },
    usage: { EN: "Leaves and pods used in curries.", SI: "කොළ සහ කරල් ව්‍යංජන සඳහා යොදා ගනී." }
  },
  {
    id: "herb-9",
    type: "herb",
    name: { EN: "Holy Basil (Tulsi)", SI: "මදුරුතලා" },
    description: { EN: "A holy herb used for breathing help.", SI: "ශ්වසන පද්ධතියේ රෝග සමනයට යොදා ගන්නා පූජනීය ඔසුවකි." },
    image: "https://i.pinimg.com/1200x/12/1c/34/121c341013b15a2464832daffe0e6887.jpg",
    benefits: { EN: "Relieves stress and asthma symptoms.", SI: "ආතතිය සහ ඇදුම රෝගී තත්ත්වයන් පාලනය කරයි." },
    usage: { EN: "Leaves brewed as tea.", SI: "කොළ තම්බා පානය කරයි." }
  },
  {
    id: "herb-10",
    type: "herb",
    name: { EN: "Ashwagandha", SI: "අශ්වගන්ධ" },
    description: { EN: "An old herb for stress and energy.", SI: "මානසික ආතතිය අඩු කිරීමට සහ ජවය ලබා දීමට යොදා ගනී." },
    image: "https://i.pinimg.com/1200x/44/3d/11/443d119fd96076ec9c9d6f493f36930a.jpg",
    benefits: { EN: "Enhances stamina and reduces cortisol.", SI: "ශාරීරික ශක්තිය වැඩි කරයි සහ ආතතිය පාලනය කරයි." },
    usage: { EN: "Taken as a root powder.", SI: "මුල් කුඩු කර පානය කරයි." }
  },
  {
    id: "treatment-1",
    type: "treatment",
    name: { EN: "Belimal Tea", SI: "බෙලිමල් තේ" },
    description: { EN: "A cool tea made from the Beli flower.", SI: "බෙලි මල් වලින් සාදන ලද ශරීරය සිසිල් කරන පානයකි." },
    image: "https://i.pinimg.com/1200x/73/81/ae/7381aee06af24b0816d0c6d52454c13f.jpg",
    benefits: { EN: "Indigestion and stomach ailments relief.", SI: "අජීර්ණය සහ උදරාබාධ සුවපත් කරයි." },
    usage: { EN: "Drink warm with jaggery.", SI: "හකුරු සමග මද උණුසුමින් පානය කරන්න." }
  },
  {
    id: "treatment-2",
    type: "treatment",
    name: { EN: "King Coconut (Thambili)", SI: "තැඹිලි" },
    description: { EN: "The best natural drink on the island.", SI: "දිවයිනේ ඇති ස්වභාවික සහ ප්‍රබෝධමත් පානයකි." },
    image: "https://i.pinimg.com/1200x/e2/6e/5b/e26e5b8051acb50b34af9b5732c4b015.jpg",
    benefits: { EN: "Hydrates instantly and flushes toxins.", SI: "ශරීරය ක්ෂණිකව සිසිල් කර විස හරණය කරයි." },
    usage: { EN: "Drink fresh straight from the fruit.", SI: "නැවුම් ලෙස සෘජුවම පානය කරන්න." }
  },
  {
    id: "treatment-3",
    type: "treatment",
    name: { EN: "Ranawara Tea", SI: "රණවරා තේ" },
    description: { EN: "A golden tea made from dried flowers.", SI: "වියළන ලද රණවරා මල් වලින් සාදන රන්වන් පැහැති තේ වර්ගයකි." },
    image: "https://i.pinimg.com/736x/8b/1b/28/8b1b28907ba035da965650bc9176abac.jpg",
    benefits: { EN: "Purifies blood and gives a glowing skin.", SI: "රුධිරය පිරිසිදු කර සමට පැහැපත් බවක් ලබා දෙයි." },
    usage: { EN: "Brewed as a herbal tea for breakfast.", SI: "උදෑසන තේ ලෙස තම්බා පානය කරන්න." }
  },
  {
    id: "treatment-4",
    type: "treatment",
    name: { EN: "Iramusu Tea", SI: "ඉරමුසු තේ" },
    description: { EN: "A sweet-smelling cool drink.", SI: "ඉන්දියානු සාර්සැපරිල්ලා ලෙස හැඳින්වෙන සුවඳවත් සිසිල්කාරක පානයකි." },
    image: "https://i.pinimg.com/1200x/91/5d/bf/915dbfeaa87a11bfcd4efaf9ddf01653.jpg",
    benefits: { EN: "Reduces body heat and treats urinary issues.", SI: "ශරීරයේ රස්නය අඩු කර මුත්‍රා රෝග සමනය කරයි." },
    usage: { EN: "Drink warm or chilled.", SI: "උණුසුමින් හෝ සිසිල් කර පානය කරන්න." }
  },
  {
    id: "treatment-5",
    type: "treatment",
    name: { EN: "Polpala Tea", SI: "පොල්පලා තේ" },
    description: { EN: "An old tea for cleaning the body.", SI: "විස හරණය කිරීමේ ගුණයෙන් පිරි පැරණි ප්‍රතිකාරයකි." },
    image: "https://i.pinimg.com/1200x/5b/99/48/5b9948174a649f622c9894ea3e1ccec9.jpg",
    benefits: { EN: "Effective for kidney stones and liver health.", SI: "වකුගඩු ගල් සහ අක්මාවේ සෞඛ්‍යයට ඉතා ගුණදායකයි." },
    usage: { EN: "Brew the whole plant in water.", SI: "මුළු පැළෑටියම ජලයේ තම්බා පානය කරන්න." }
  },
  {
    id: "treatment-7",
    type: "treatment",
    name: { EN: "Koththamalli", SI: "කොත්තමල්ලි" },
    description: { EN: "A powerful brew of Coriander and Ginger.", SI: "කොත්තමල්ලි සහ ඉඟුරු මිශ්‍ර ප්‍රබල ඖෂධීය පානයකි." },
    image: "https://i.pinimg.com/1200x/1b/ec/9f/1bec9f7372173978b95e4be8fc020a97.jpg",
    benefits: { EN: "Boosts immunity and relieves common cold symptoms.", SI: "ප්‍රතිශක්තිය වැඩි කරන අතර හෙම්බිරිස්සාව සමනය කරයි." },
    usage: { EN: "Boil coriander seeds and ginger, drink warm.", SI: "කොත්තමල්ලි ඇට සහ ඉඟුරු තම්බා උණුසුමින් පානය කරන්න." }
  },
  {
    id: "treatment-9",
    type: "treatment",
    name: { EN: "Beli Fruit Juice", SI: "බෙලි යුෂ" },
    description: { EN: "A thick, nutritious drink from the ripe Beli fruit.", SI: "ඉදුණු බෙලි පලතුරෙන් සාදා ගන්නා පෝෂණීය පානයකි." },
    image: "https://i.pinimg.com/1200x/01/c7/7e/01c77e72a024f4f5838f120dcdc6a256.jpg",
    benefits: { EN: "Excellent for digestive health and cooling the body.", SI: "ආහාර ජීර්ණ පද්ධතියට ඉතා ගුණදායක වන අතර ශරීරය සිසිල් කරයි." },
    usage: { EN: "Mix the fruit pulp with water and a touch of sugar.", SI: "පලතුරු මදය වතුර සහ සීනි ස්වල්පයක් සමග මිශ්‍ර කරන්න." }
  },
  {
    id: "treatment-13",
    type: "treatment",
    name: { EN: "Bluepea Flower Tea", SI: "නිල් කටරොළු තේ" },
    description: { EN: "A mesmerizing blue tea made from Butterfly Pea flowers.", SI: "නිල් කටරොළු මල් වලින් සාදන ලද සිත් ඇදගන්නාසුළු නිල් පැහැති තේ වර්ගයකි." },
    image: "https://i.pinimg.com/736x/74/81/8b/74818b784fcc3e87a3494355a5b4133f.jpg",
    benefits: { EN: "Improves cognitive function, reduces stress, and is rich in antioxidants.", SI: "මතක ශක්තිය වැඩි කරන අතර මානසික ආතතිය අඩු කරයි." },
    usage: { EN: "Steep petals in hot water; add a drop of lime to see it turn purple.", SI: "මල් පෙති උණු වතුරේ තම්බා ගන්න; දෙහි බිඳක් එක් කළ විට එය දම් පැහැයට හැරේ." }
  }
];

export const CATEGORIES_DATA = [
  { id: "foods", icon: "Utensils", title: { EN: "Food Heritage", SI: "ආහාර උරුමය" }, description: { EN: "Taste the spices of Lanka.", SI: "ලංකාවේ කුළුබඩු රස බලන්න." } },
  { id: "music", icon: "Music", title: { EN: "Ancient Music", SI: "සංගීතය" }, description: { EN: "Listen to the rhythms.", SI: "දේශීය රිද්මයට සවන් දෙන්න." } }
];

export const PHRASEBOOK_DATA: Phrase[] = [
  { id: 'p1', english: 'Hello / Greetings', sinhala: 'ආයුබෝවන්', transliteration: 'Ayubowan', category: 'greeting' },
  { id: 'p2', english: 'Thank you', sinhala: 'ස්තූතියියි', transliteration: 'Stuti', category: 'greeting' },
  { id: 'p3', english: 'How are you?', sinhala: 'කොහොමද?', transliteration: 'Kohomada?', category: 'greeting' },
  { id: 'p4', english: 'Good', sinhala: 'හොඳයි', transliteration: 'Hondai', category: 'greeting' },
  { id: 'p5', english: 'I don\'t want', sinhala: 'එපා', transliteration: 'Epa', category: 'shopping' },
  { id: 'p6', english: 'How much?', sinhala: 'කීයද?', transliteration: 'Keeyada?', category: 'shopping' },
  { id: 'p7', english: 'Okay / Correct', sinhala: 'හරි', transliteration: 'Hari', category: 'greeting' },
  { id: 'p8', english: 'Goodbye (I will go and come)', sinhala: 'ගිහින් එන්නම්', transliteration: 'Gihin ennam', category: 'greeting' },
  { id: 'p9', english: 'This is beautiful', sinhala: 'මේක ලස්සනයි', transliteration: 'Meka lassanai', category: 'greeting' },
  { id: 'p10', english: 'Please', sinhala: 'කරුණාකරලා', transliteration: 'Karunakarala', category: 'greeting' },
  { id: 'p11', english: 'Water', sinhala: 'වතුර', transliteration: 'Vatura', category: 'dining' },
  { id: 'p12', english: 'Food is delicious', sinhala: 'කෑම රසයි', transliteration: 'Kama rasai', category: 'dining' },
  { id: 'p13', english: 'Where is the washroom?', sinhala: 'වැසිකිළිය කොහේද?', transliteration: 'Vasikiliya koheda?', category: 'emergency' },
  { id: 'p14', english: 'Help me', sinhala: 'මට උදව් කරන්න', transliteration: 'Mata udau karanna', category: 'emergency' },
  { id: 'p15', english: 'Slowly', sinhala: 'හෙමින්', transliteration: 'Hemin', category: 'greeting' },
  { id: 'p16', english: 'Good Morning', sinhala: 'සුභ උදෑසනක්', transliteration: 'Subha udasanak', category: 'greeting' },
  { id: 'p17', english: 'Good Night', sinhala: 'සුභ රාත්‍රියක්', transliteration: 'Subha rathriyak', category: 'greeting' },
  { id: 'p18', english: 'Yes', sinhala: 'ඔව්', transliteration: 'Ow', category: 'greeting' },
  { id: 'p19', english: 'No', sinhala: 'නැහැ', transliteration: 'Neha', category: 'greeting' },
  { id: 'p20', english: 'Excuse me', sinhala: 'සමාවෙන්න', transliteration: 'Sama venna', category: 'greeting' },
  { id: 'p21', english: 'Wait a moment', sinhala: 'පොඩ්ඩක් ඉන්න', transliteration: 'Poddak inna', category: 'greeting' },
  { id: 'p22', english: 'Delicious food', sinhala: 'හරිම රසයි', transliteration: 'Harima rasai', category: 'dining' },
  { id: 'p23', english: 'No spicy', sinhala: 'සැර නැතුව', transliteration: 'Sara nathuwa', category: 'dining' },
  { id: 'p24', english: 'Very spicy', sinhala: 'ගොඩක් සැරයි', transliteration: 'Godak sarai', category: 'dining' },
  { id: 'p25', english: 'The bill please', sinhala: 'බිල දෙන්න', transliteration: 'Bill eka denna', category: 'dining' },
  { id: 'p26', english: 'Expensive', sinhala: 'ගණන් වැඩියි', transliteration: 'Ganan vadii', category: 'shopping' },
  { id: 'p27', english: 'Discount please', sinhala: 'අඩු කරන්න', transliteration: 'Adu karanna', category: 'shopping' },
  { id: 'p28', english: 'I am lost', sinhala: 'අතරමං වෙලා', transliteration: 'Atharaman wela', category: 'emergency' },
  { id: 'p29', english: 'Call a doctor', sinhala: 'දොස්තර කෙනෙක්', transliteration: 'Dosthara kenek', category: 'emergency' },
  { id: 'p30', english: 'Police station', sinhala: 'පොලිසිය', transliteration: 'Poleesiya', category: 'emergency' },
  { id: 'p31', english: 'Friend', sinhala: 'මිතුරා', transliteration: 'Mithura', category: 'greeting' },
  { id: 'p32', english: 'A little bit', sinhala: 'චුට්ටක්', transliteration: 'Chuttak', category: 'greeting' },
  { id: 'p33', english: 'I like it', sinhala: 'මම කැමතියි', transliteration: 'Mama kamathiyi', category: 'greeting' },
  { id: 'p34', english: 'Where is the bus?', sinhala: 'බස් එක කොහේද?', transliteration: 'Bus eka koheda?', category: 'emergency' },
  { id: 'p35', english: 'Stop here', sinhala: 'මෙතන නවත්වන්න', transliteration: 'Methana nawathwanna', category: 'greeting' }
];

export const TRAVEL_ESSENTIALS_DATA: TravelEssential[] = [
  { id: 'e1', title: { EN: 'Visa (ETA)', SI: 'වීසා' }, description: { EN: 'Get your travel pass online before you come.', SI: 'පැමිණීමට පෙර අන්තර්ජාලය හරහා වීසා ලබා ගන්න.' }, icon: 'ShieldCheck', tips: [{ EN: 'Use the official website.', SI: 'නිල වෙබ් අඩවිය භාවිතා කරන්න.' }] },
  { id: 'e2', title: { EN: 'Local SIM Card', SI: 'දේශීය සිම් පත' }, description: { EN: 'Get a phone card at the airport.', SI: 'ගුවන්තොටුපලේදී දත්ත පහසුකම් සහිත සිම් පතක් ලබා ගත හැක.' }, icon: 'Zap', tips: [{ EN: 'Dialog and Mobitel are good.', SI: 'ඩයලොග් හෝ මොබිටෙල් ජනප්‍රිය වේ.' }] },
  { id: 'e3', title: { EN: 'Currency (LKR)', SI: 'මුදල්' }, description: { EN: 'The money is called Rupees. Bring cash for small shops.', SI: 'දේශීය මුදල රුපියල් වේ. ග්‍රාමීය ප්‍රදේශ වල මුදල් අතැතිව තබා ගැනීම සුදුසුයි.' }, icon: 'Coins', tips: [{ EN: 'Carry small bills.', SI: 'කුඩා මුදල් නෝට්ටු රැගෙන යන්න.' }] },
  { id: 'e4', title: { EN: 'Power Adapters', SI: 'විදුලි ඇඩප්ටර' }, description: { EN: 'Most plugs have three pins.', SI: 'බොහොමයක් විට භාවිතා කරන්නේ තුන් කෙවෙනි ප්ලග් වර්ග වේ.' }, icon: 'Zap', tips: [{ EN: '230V is the standard.', SI: 'සම්මත වෝල්ටීයතාවය 230V වේ.' }] },
  { id: 'e5', title: { EN: 'Transport Apps', SI: 'ප්‍රවාහන මෘදුකාංග' }, description: { EN: 'Use PickMe or Uber for taxis.', SI: 'කොළඹ සහ නගර වල ප්‍රවාහන කටයුතු සඳහා PickMe and Uber භාවිතා වේ.' }, icon: 'Car', tips: [{ EN: 'Download them early.', SI: 'පැමිණීමට පෙර ස්ථාපනය කරගන්න.' }] },
  { id: 'e6', title: { EN: 'Dress Code', SI: 'ඇඳුම් පැළඳුම්' }, description: { EN: 'Cover your shoulders and knees at temples.', SI: 'පූජනීය ස්ථාන වලට යන විට උරහිස් සහ දණහිස් වැසෙන සේ අඳින්න්න.' }, icon: 'Backpack', tips: [{ EN: 'Bring a light wrap.', SI: 'සැහැල්ලු සරමක් රැගෙන යන්න.' }] },
  { id: 'e7', title: { EN: 'Sun Protection', SI: 'හිරු ආවරණය' }, description: { EN: 'The sun is very strong. Use cream.', SI: 'නිවර්තන කලාපයේ හිරු රශ්මිය තදින් පවතින බැවින් හිරු ආවරණ ආලේපන වැදගත් වේ.' }, icon: 'Sun', tips: [{ EN: 'Put it on often.', SI: 'නිරන්තරයෙන් ආලේප කරන්න.' }] },
  { id: 'e8', title: { EN: 'Hydration', SI: 'දියර වර්ග' }, description: { EN: 'Drink bottled water or fresh coconut juice.', SI: 'බෝතල් කළ ජලය හෝ නැවුම් තැඹිලි පානය කරන්න.' }, icon: 'Waves', tips: [{ EN: 'Do not drink tap water.', SI: 'නල ජලය පානයෙන් වළකින්න.' }] },
  { id: 'e9', title: { EN: 'Train Bookings', SI: 'දුම්රිය වෙන්කිරීම්' }, description: { EN: 'Book your train seats early.', SI: 'සුන්දර දුම්රිය ගමන් සඳහා සති කිහිපයකට පෙර ආසන වෙන් කරගන්න.' }, icon: 'Train', tips: [{ EN: 'Check for first class.', SI: 'පළමු පන්තියේ ආසන පරීක්ෂා කරන්න.' }] },
  { id: 'e10', title: { EN: 'Health & Safety', SI: 'සෞඛ්‍ය සහ ආරක්ෂාව' }, description: { EN: 'Use bug spray for mosquitoes.', SI: 'ඩෙංගු රෝගයෙන් ආරක්ෂා වීමට මදුරු විකර්ෂක භාවිතා කරන්න.' }, icon: 'ShieldCheck', tips: [{ EN: 'Carry bug spray.', SI: 'මදුරු විකර්ෂක රැගෙන යන්න.' }] },
  { id: 'e11', title: { EN: 'Tipping Culture', SI: 'සන්තෝසම් දීම' }, description: { EN: 'Give a small tip for good service.', SI: 'හොඳ සේවාවක් සඳහා සාමාන්‍යයෙන් 10% ක සන්තෝසම් මුදලක් ලබා දෙයි.' }, icon: 'Globe', tips: [{ EN: 'Check the bill first.', SI: 'සේවා ගාස්තුව පරීක්ෂා කරන්න.' }] }
];

export const FESTIVALS_DATA: Festival[] = [
  { id: 'fest1', name: { EN: 'Kandy Esala Perahera', SI: 'මහනුවර ඇසළ පෙරහැර' }, category: 'religious', date: { EN: 'August', SI: 'අගෝස්තු' }, description: { EN: 'A big cultural parade in Kandy with elephants.', SI: 'දන්ත ධාතූන් වහන්සේ උදෙසා පවත්වන ආසියාවේ විශාලතම සංස්කෘතික මංගල්‍යයයි.' }, image: 'https://i.pinimg.com/1200x/e4/2b/4c/e42b4c70cc6836ca40248599bc6ebe08.jpg', significance: { EN: 'A very important festival for the country.', SI: 'ජාතික ඇදහිල්ල සහ කලාත්මක උරුමය කියාපායි.' } },
  { id: 'fest2', name: { EN: 'Aluth Avurudu', SI: 'අලුත් අවුරුද්ද' }, category: 'harvest', date: { EN: 'April', SI: 'අප්‍රේල්' }, description: { EN: 'The New Year festival for Sinhala and Tamil people.', SI: 'අස්වනු නෙළීම සැමරීම සඳහා පවත්වන සිහල සහ දෙමළ අලුත් අවුරුද්දයි.' }, image: 'https://i.pinimg.com/736x/40/51/16/4051163620ef57b83366188ee0271dfb.jpg', significance: { EN: 'Family time and cultural games.', SI: 'එකමුතුකම, ක්‍රීඩා සහ චාරිත්‍ර වාරිත්‍ර මුල් වේ.' } },
  { id: 'fest3', name: { EN: 'Vesak Poya', SI: 'වෙසක් පොහොය' }, category: 'religious', date: { EN: 'May', SI: 'මැයි' }, description: { EN: 'A holy day to remember the Buddha.', SI: 'බුදුරජාණන් වහන්සේගේ තෙමඟුල සමරන පූජනීය දිනයයි.' }, image: 'https://i.pinimg.com/736x/aa/52/90/aa529011754dbc3597e01a702cd4ddf1.jpg', significance: { EN: 'Beautiful lanterns and lights.', SI: 'කූඩු, තොරණ සහ ආගමික වතාවත් සිදු කෙරේ.' } },
  { id: 'fest4', name: { EN: 'Poson Poya', SI: 'පොසොන් පොහොය' }, category: 'religious', date: { EN: 'June', SI: 'ජූනි' }, description: { EN: 'Celebrating when Buddhism came to the island.', SI: 'මිහින්තලයට බුදුදහම රැගෙන ඒම සමරන උතුම් දිනයයි.' }, image: 'https://i.pinimg.com/736x/8b/58/ad/8b58adb20cf7b4018fecf71d795e1757.jpg', significance: { EN: 'A holy trip to Anuradhapura.', SI: 'අනුරාධපුර පූජනීය නගරයට වන්දනා ගමන් සිදු කෙරේ.' } },
  { id: 'fest5', name: { EN: 'Thai Pongal', SI: 'තෛයිපොංගල්' }, category: 'harvest', date: { EN: 'January', SI: 'ජනවාරි' }, description: { EN: 'A harvest festival to say thank you to the sun.', SI: 'සූර්ය දෙවියන්ට සහ ගවයින්ට ස්තූති කරන දෙමළ අස්වනු උත්සවයකි.' }, image: 'https://i.pinimg.com/736x/37/0f/ff/370fff8ebc7a06e41ba3c34b226896f8.jpg', significance: { EN: 'Cooking special rice and making floor art.', SI: 'පොංගල් බත් පිසීම සහ කෝලම් රටා ඇඳීම මෙහි විශේෂත්වයකි.' } },
  { id: 'fest6', name: { EN: 'Deepavali', SI: 'දීපාවලි' }, category: 'religious', date: { EN: 'October/November', SI: 'ඔක්තෝබර්/නොවැම්බර්' }, description: { EN: 'The festival of lights for Hindu people.', SI: 'අන්ධකාරය පරදා ආලෝකය ජය ගැනීම සමරන හින්දු ආගමික උත්සවයකි.' }, image: 'https://i.pinimg.com/736x/96/42/46/96424673d68d99ee45e4154e6a3261b6.jpg', significance: { EN: 'Lighting lamps and visiting family.', SI: 'පහන් දැල්වීම සහ පහල සාමාජිකයන් එක්වීම සිදු කෙරේ.' } },
  { id: 'fest11', name: { EN: 'Nallur Festival', SI: 'නල්ලූර් උත්සවය' }, category: 'religious', date: { EN: 'August/September', SI: 'අගෝස්තු/සැප්තැම්බර්' }, description: { EN: 'A long religious festival in Jaffna.', SI: 'යාපනය නල්ලූර් කෝවිලේ දින 25 ක් පුරා පැවැත්වෙන විශාලතම මංගල්‍යයයි.' }, image: 'https://i.pinimg.com/1200x/3a/67/fb/3a67fb8991a10ce030adeb1d69f3137b.jpg', significance: { EN: 'Shows the culture of the north.', SI: 'උතුරේ සංස්කෘතික අනන්‍යතාවය විදහා දක්වයි.' } }
];
