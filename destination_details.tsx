
import { Destination } from './types.ts';
import { ABOUT_DATA, LOGISTICS_DATA } from './about_destinations.tsx';

const BASE_DESTINATIONS: Destination[] = [
  // --- ANCIENT (10) ---
  { 
    id: "sigiriya", 
    name: { EN: "Sigiriya", SI: "සීගිරිය" }, 
    category: "ancient", 
    image: "https://i.pinimg.com/1200x/3a/e7/48/3ae7487f4e95b92ce2d3c10c5b1038e0.jpg", 
    gallery: ["https://i.pinimg.com/1200x/93/07/66/93076630d999bdecdb46b99f342db55d.jpg", "https://i.pinimg.com/736x/dc/b5/cf/dcb5cf4c9b507d3a57a8b4f466984ace.jpg"], 
    history: { 
      EN: "Rising 200 meters from the jungle floor, Sigiriya is an ancient rock fortress and palace built by King Kashyapa in the 5th century AD. Often referred to as the 'Eighth Wonder of the World', this UNESCO World Heritage site is renowned for its advanced hydraulic systems, ancient frescoes of celestial maidens, and the massive lion paws that guard the entrance to the summit. The site served as a royal citadel for 18 years and later as a Buddhist monastery. Its landscaped gardens, water gardens, and boulder gardens showcase some of the oldest surviving urban planning in the world.", 
      SI: "5 වන සියවසේදී කාශ්‍යප රජු විසින් ඉදිකරන ලද්දකි. මෙය වසර 18 ක් රාජකීය බලකොටුවක් ලෙස පැවති අතර පැරණි නගර නිර්මාණ ශිල්පයේ විශිෂ්ටතම නිර්මාණයකි." 
    }, 
    shortStory: { 
      EN: "The Lion Rock - A sky palace rising from the jungle.", 
      SI: "සීගිරි පර්වතය - වනාන්තරයෙන් මතුවන අහස් මාලිගය." 
    }, 
    tips: [
      { EN: "Come early before 8:00 AM. It is cooler and less busy.", SI: "රශ්මිය සහ සෙනඟ මඟහැරීමට උදෑසන 8 ට පෙර එන්න." },
      { EN: "Wear good shoes. The steps can be slippery.", SI: "ලිස්සන සුළු බැවින් හොඳ ග්‍රිප් එකක් සහිත සපත්තු අඳින්න්න." },
      { EN: "Bring a big bottle of water.", SI: "පුද්ගලයෙකුට අවම වශයෙන් වතුර ලීටර් 1.5 ක් රැගෙන එන්න." },
      { EN: "Do not write on the old Mirror Wall.", SI: "කැටපත් පවුර ඇල්ලීමෙන් හෝ එහි ලිවීමෙන් වළකින්න." },
      { EN: "Watch your bags. Monkeys might take them.", SI: "වඳුරන්ගෙන් ඔබේ බඩුබාහිරාදිය ප්‍රවේශම් කරගන්න." }
    ], 
    hiddenEchoes: { EN: "The Mirror Wall contains graffiti from the 7th to 11th centuries.", SI: "කැටපත් පවුරේ 7 වන සියවසේ සිට 11 වන සියවස දක්වා ලියූ කුරුටු ගී ඇත." }, 
    location: "Matale", 
    coordinates: { x: 52, y: 38 },
    nearbyAttractions: [
      { id: "pidurangala", name: { EN: "Pidurangala Rock", SI: "පිදුරංගල පර්වතය" }, image: "https://i.pinimg.com/736x/b5/d0/f7/b5d0f760425e71a84e69d7c9b45f3821.jpg" },
      { id: "dambulla", name: { EN: "Dambulla Cave Temple", SI: "දඹුලු ලෙන් විහාරය" }, image: "https://i.pinimg.com/1200x/ca/96/d8/ca96d8e009f8ad50128891ce45b59c9d.jpg" },
      { id: "minneriya", name: { EN: "Minneriya National Park", SI: "මින්නේරිය ජාතික වනෝද්‍යානය" }, image: "https://i.pinimg.com/1200x/38/12/a2/3812a200c26bee48e77332bc76ad368e.jpg" },
      { id: "kaudulla", name: { EN: "Kaudulla National Park", SI: "කවුඩුල්ල ජාතික වනෝද්‍යානය" }, image: "https://picsum.photos/seed/kaudulla/800/600" },
      { id: "vatadageya", name: { EN: "Vatadageya", SI: "වටදාගෙය" }, image: "https://i.pinimg.com/1200x/3e/16/a6/3e16a69f5a7a1aa1aa918ad765964902.jpg" },
      { id: "hiriwadunna", name: { EN: "Hiriwadunna Village Tour", SI: "හිරිවඩුන්න ගම්මාන සංචාරය" }, image: "https://picsum.photos/seed/village/800/600" }
    ]
  },
  {
    id: "ruwanwelisaya",
    name: { EN: "Ruwanwelisaya", SI: "රුවන්වැලිසෑය" },
    category: "ancient",
    image: "https://i.pinimg.com/1200x/e6/c4/67/e6c467b97e6ff3c8344d25e2b107b50e.jpg",
    gallery: ["https://i.pinimg.com/1200x/e6/c4/67/e6c467b97e6ff3c8344d25e2b107b50e.jpg"],
    history: {
      EN: "The Ruwanwelisaya is a magnificent stupa built by King Dutugemunu in 140 BC, standing as one of the world's tallest ancient monuments at 103 meters. Enshrining a large collection of the Buddha's relics, it is a masterpiece of ancient engineering and a central place of worship for Buddhists worldwide. The stupa is surrounded by a wall of elephant sculptures, symbolizing the strength that supports the structure. Its pure white dome against the blue sky is an iconic symbol of Anuradhapura's spiritual heritage.",
      SI: "රුවන්වැලිසෑය යනු ශ්‍රී ලංකාවේ අනුරාධපුරයේ පිහිටි මහා ස්තූපයකි. මෙය ලොව පුරා බෞද්ධයන්ගේ ගෞරවාදරයට පාත්‍ර වූ පූජනීය ස්ථානයකි."
    },
    shortStory: {
      EN: "The Great Stupa - A beacon of faith.",
      SI: "මහා ස්තූපය - ශ්‍රද්ධාවේ ප්‍රදීපාගාරය."
    },
    tips: [
      { EN: "Dress in white and walk clockwise.", SI: "සුදු ඇඳුමින් සැරසී දක්ෂිණාවර්තව වන්දනා කරන්න." },
      { EN: "Visit at night to see the stupa illuminated.", SI: "රාත්‍රී කාලයේදී විදුලි ආලෝකයෙන් බැබළෙන ස්තූපය නැරඹීමට එන්න." }
    ],
    hiddenEchoes: { EN: "The stupa contains the largest collection of relics of the Buddha.", SI: "බුදුරජාණන් වහන්සේගේ සර්වඥ ධාතූන් වහන්සේලා වැඩිම ප්‍රමාණයක් තැන්පත් කර ඇත්තේ මෙහිය." },
    location: "Anuradhapura",
    coordinates: { x: 48, y: 18 },
    nearbyAttractions: [
      { id: "jaya-sri-maha-bodhi", name: { EN: "Jaya Sri Maha Bodhi", SI: "ජය ශ්‍රී මහා බෝධිය" }, image: "https://i.pinimg.com/736x/32/e4/d3/32e4d3fad4b4b20511fdd331c732ac8f.jpg" },
      { id: "thuparamaya", name: { EN: "Thuparamaya", SI: "ථූපාරාමය" }, image: "https://i.pinimg.com/736x/a6/ae/4f/a6ae4fd861554769766daae2f0e621d2.jpg" },
      { id: "jetavanaramaya", name: { EN: "Jetavanaramaya", SI: "ජේතවනාරාමය" }, image: "https://i.pinimg.com/1200x/f9/0b/82/f90b8232972aeac986ffd2e906413d86.jpg" }
    ]
  },
  {
    id: "jaya-sri-maha-bodhi",
    name: { EN: "Jaya Sri Maha Bodhi", SI: "ජය ශ්‍රී මහා බෝධිය" },
    category: "ancient",
    image: "https://i.pinimg.com/736x/32/e4/d3/32e4d3fad4b4b20511fdd331c732ac8f.jpg",
    gallery: ["https://i.pinimg.com/736x/32/e4/d3/32e4d3fad4b4b20511fdd331c732ac8f.jpg"],
    history: {
      EN: "The Jaya Sri Maha Bodhi is the oldest living human-planted tree in the world with a known planting date, brought to Sri Lanka as a sapling from the sacred Bodhi tree in Bodh Gaya, India, in 236 BC. Planted by King Devanampiyatissa in the Mahamewna Gardens, it has been continuously guarded and worshipped for over 2,000 years. It is the most sacred tree for Buddhists in Sri Lanka, symbolizing the living presence of the Buddha. The site remains a serene and spiritually charged destination for pilgrims.",
      SI: "ලොව පැරණිතම රෝපණය කළ දිනයක් සහිත ජීවමාන වෘක්ෂයයි."
    },
    shortStory: {
      EN: "The Sacred Tree - A living link to the Buddha.",
      SI: "පූජනීය බෝධීන් වහන්සේ - බුදුරජාණන් වහන්සේ සමඟ ඇති ජීවමාන සම්බන්ධය."
    },
    tips: [
      { EN: "Be silent and respectful.", SI: "නිහඬව සහ ගෞරවාන්විතව හැසිරෙන්න." },
      { EN: "Offer flowers at the designated altars.", SI: "නියමිත ස්ථානවල මල් පූජා කරන්න." }
    ],
    hiddenEchoes: { EN: "The tree has been guarded by kings for over 2,000 years.", SI: "වසර 2,000 කට වැඩි කාලයක් රජවරුන් විසින් මෙම බෝධිය ආරක්ෂා කර ඇත." },
    location: "Anuradhapura",
    coordinates: { x: 48.5, y: 18.5 },
    nearbyAttractions: [
      { id: "ruwanwelisaya", name: { EN: "Ruwanwelisaya", SI: "රුවන්වැලිසෑය" }, image: "https://i.pinimg.com/1200x/e6/c4/67/e6c467b97e6ff3c8344d25e2b107b50e.jpg" },
      { id: "thuparamaya", name: { EN: "Thuparamaya", SI: "ථූපාරාමය" }, image: "https://i.pinimg.com/736x/a6/ae/4f/a6ae4fd861554769766daae2f0e621d2.jpg" }
    ]
  },
  {
    id: "vatadageya",
    name: { EN: "Vatadageya", SI: "වටදාගෙය" },
    category: "ancient",
    image: "https://i.pinimg.com/1200x/3e/16/a6/3e16a69f5a7a1aa1aa918ad765964902.jpg",
    gallery: ["https://i.pinimg.com/1200x/3e/16/a6/3e16a69f5a7a1aa1aa918ad765964902.jpg"],
    detailedAbout: {
      EN: "🏛️ VATADAGE — POLONNARUWA\nSri Lanka — Complete Verified Guide\n\n📍 LOCATION\nPolonnaruwa Vatadage is located inside the Dalada Maluva — the Sacred Quadrangle in the heart of the ancient city of Polonnaruwa, North Central Province, Sri Lanka.\nDistance from Colombo: 215 km northeast — approximately 4 to 5 hours by road\nDistance from Sigiriya: approximately 70 km — about 1.5 hours by road\nDistance from Anuradhapura: approximately 90 km — about 2 hours by road\nDistance from Kandy: approximately 140 km — about 3 hours by road\nUNESCO Status: Part of the Ancient City of Polonnaruwa — inscribed 1982\n\n🏛️ WHAT IS A VATADAGE\nA vatadage is a type of Buddhist structure unique to Sri Lanka — found nowhere else in the world in this specific architectural form. It is a circular stone structure built around a small central stupa for its protection and veneration. The word itself breaks into two parts — vata meaning circular or surrounding, and dage meaning a stupa house or relic chamber. Together the word means a circular house built to protect a relic stupa.\nVatadages were constructed of stone and brick, with multiple concentric rows of stone columns that originally supported wooden roofs. They were entered through elaborately carved stone entrances featuring moonstones at the base of each stairway and guardstone figures flanking each doorway.\nOnly ten vatadages now remain in Sri Lanka — at Thuparama, Lankarama, Mihintale, Polonnaruwa, Medirigiriya, Attanagalla, Rajangana, Menikdena, Devundara, and Tiriyaya. Of these, the vatadages at Polonnaruwa, Medirigiriya, and Tiriyaya are the best preserved. The oldest known vatadage in Sri Lanka is at Thuparama in Anuradhapura, built around the 1st century AD.\nThe Polonnaruwa Vatadage is the finest, most architecturally complete, and most elaborately decorated vatadage surviving anywhere in the world. It represents the absolute peak development of this uniquely Sri Lankan building tradition.\n\n📜 FULL HISTORY — CONFIRMED FACTS\nPeriod of Construction — 12th Century AD\nThe Polonnaruwa Vatadage was built in the 12th century AD. There are two kings associated with its construction and the historical evidence supports the conclusion that both played a role.\nKing Parakramabahu I — reigned 1153 to 1186 AD\nThe ancient chronicle Culavamsa records that King Parakramabahu I constructed a circular building to enshrine the Tooth Relic of the Buddha in Polonnaruwa. The British archaeologist H.C.P. Bell, who conducted the first major excavation of the site in 1903, concluded that this description in the Culavamsa referred to the Vatadage. Architectural analysis of the core structure also suggests a date consistent with the reign of Parakramabahu I.\nKing Nissanka Malla — reigned 1187 to 1196 AD\nA stone inscription placed by King Nissanka Malla himself, found near the Vatadage within the Sacred Quadrangle, lists the Vatadage among his constructions. The chronicles Rajavaliya and Poojavaliya also attribute the structure to Nissanka Malla. However, Nissanka Malla is known historically to have exaggerated his accomplishments in his many inscriptions, and most historians do not accept his claim of original construction.\nThe Mainstream Historical Conclusion\nScholars including H.W. Codrington, Arthur Maurice Hocart, and Wilhelm Geiger concluded that Nissanka Malla did not build the Vatadage from the ground up but renovated, expanded, and embellished an already existing structure — most likely adding the entrance porch, outer terrace, and some decorative elements. The original core structure was almost certainly built under Parakramabahu I between 1153 and 1186. Nissanka Malla then significantly beautified it between 1187 and 1196.\nThe Vatadage as it exists today therefore reflects the combined work of both kings across a period of roughly 40 years in the second half of the 12th century AD.\nWhat Was Enshrined Inside\nAncient texts record two possibilities. The Culavamsa suggests the Tooth Relic of the Buddha. Other sources suggest the alms bowl used by the Buddha. No physical archaeological evidence has confirmed which relic — if any — was housed here. The small central stupa at the heart of the structure was built to enshrine something of supreme sacred importance, but what that was cannot be confirmed today.\nAbandonment — 1215 AD\nIn 1215 AD, the Eastern Ganga Dynasty king Kalinga Magha invaded from South India and sacked Polonnaruwa. The kingdom collapsed. The population fled south. The city was abandoned entirely and the jungle reclaimed it over the following centuries. The Vatadage disappeared beneath layers of earth, vegetation, and centuries of accumulated debris.\nRediscovery and Excavation — 1903\nIn 1903, the Department of Archaeology of Ceylon, under H.C.P. Bell, began excavation of the Sacred Quadrangle area. When Bell arrived at the Vatadage site, he recorded it as nothing more than a mound of earth. The meticulous excavation that followed uncovered the extraordinary degree of preservation that centuries of earth cover had actually protected. Stone carvings, columns, Buddha statues, moonstones, and guardstones were found largely intact. The excavation and careful restoration work carried out in the early 20th century produced the site as it appears today.\n\n🏗️ ARCHITECTURE — FULL VERIFIED DETAILS\nThe Two Platforms\nThe entire Vatadage structure is built across two raised circular platforms set concentrically one above the other.\nThe lower platform has a diameter of 120 feet (37 meters) and stands 4 feet 3 inches (1.30 meters) above the surrounding ground level. It is entered through a single doorway on the northern side — the most elaborately decorated entrance in the complex.\nThe upper platform has a diameter of 80 feet (24 meters) and stands 5 feet 3 inches (1.60 meters) above the lower platform. It is accessed through four doorways facing the four cardinal directions — north, south, east, and west. The upper platform is surrounded by a brick wall and contains the central stupa and the four Buddha statues.\nThe Central Stupa\nThe small central stupa sits at the exact heart of the upper platform. It was built in the bubble-shaped or Buddulakara design characteristic of Sri Lankan stupas — a perfect hemisphere sitting on a circular drum base. Its base diameter is 8.43 meters (27 feet 8 inches). This stupa was the single object that the entire circular complex was built to protect, venerate, and give access to.\nThe Concentric Stone Columns\nThe upper platform contains multiple concentric rings of stone columns arranged around the central stupa. The columns of the innermost ring are the tallest. The columns of each successive outer ring are progressively shorter. This graduated height profile was designed so that a wooden roof covering the entire structure would slope downward from the centre outward — highest over the stupa, lower toward the outer edges. Most of these columns survive to this day.\nWhether a complete wooden roof covered the entire structure or only a partial canopy existed over the stupa remains debated among archaeologists. The absence of surviving timber prevents a definitive conclusion.\nThe Four Entrances and Staircases\nAll four cardinal direction entrances to the upper platform are approached via stone staircases. Each staircase is flanked on both sides by carved guardstone figures and has a carved moonstone at its base.\nThe northern staircase and entrance is the most magnificent — the main approach featuring the finest moonstone and the most elaborate carved decoration in the entire Vatadage.\nThe Four Buddha Statues\nFour seated Buddha statues are positioned on the upper platform, each facing one of the four cardinal directions, each placed in front of the four entrances. Each statue faces outward, greeting the devotee who enters from that direction before they reach the central stupa.\nThese statues are carved in a distinctive Polonnaruwa style that differs from earlier Anuradhapura period statues in two notable ways. First, the robes lie completely flat against the body — carved with no folds or texture, as if the fabric is plastered to the stone. Second, the heads show no individual curls of hair — the surface is smooth. Art historians attribute these stylistic features to South Indian artistic influence during the Polonnaruwa period, when close cultural and political contacts with South India affected Sri Lankan artistic conventions.\nThree of the four Buddha statues survive in reasonable condition today. The northern entrance Buddha statue is considered the finest and best preserved.\n\n🎨 THE STONE CARVINGS — FINEST IN SRI LANKA\nThe Moonstones — Sandakada Pahana\nThe moonstones of the Polonnaruwa Vatadage are considered the finest examples of this architectural form from the Polonnaruwa period and among the most accomplished stone carvings in all of Sri Lanka.\nA moonstone is a semi-circular carved stone threshold set at the base of each entrance staircase. Every visitor steps over it when climbing the steps — it marks the transition from ordinary secular space into sacred space.\nMoonstones are carved with concentric bands of imagery reading from the outer edge inward. In the Anuradhapura period moonstones, the standard sequence from outer to inner was: flames, four animals (elephant, lion, horse, and bull), geese, lotus scrolls, and a central lotus. The bull in this sequence is the sacred vehicle of the Hindu god Shiva.\nThe Polonnaruwa period moonstones — including those of the Vatadage — show one important change: the bull has been removed from the sequence. Only three animals appear — elephant, lion, and horse. Historians believe this deliberate removal reflected an effort to create a purely Buddhist symbolic programme, excluding the animal most associated with Hindu religion.\nThe northern entrance moonstone of the Vatadage is the largest and most elaborate in the complex and is considered one of the finest moonstones surviving from the entire Polonnaruwa period.\nThe Guardstones — Muragalas\nEach entrance staircase is flanked by two tall carved guardstone figures. These are nagaraja figures — serpent king guardians — depicted as royal human figures with cobra hoods rising above their heads. They hold a vase overflowing with abundance in one hand. Their function was both protective — guarding the sacred space — and auspicious — blessing all who enter.\nThe guardstones of the Vatadage are among the finest examples of Polonnaruwa period sculpture. Their carving detail, facial expressions, and symbolic elements are extraordinarily refined for stone carvings of the 12th century.\nThe Frieze Carvings on the Platform Walls\nThe outer walls of both platforms carry carved decorative friezes running along their full circumference. These include lotus scrolls, geese friezes, and decorative bands in the standard vocabulary of Polonnaruwa period stone decoration. Their state of preservation — after 800 years of abandonment and eight centuries of weather — is remarkable.\n\n🏛️ THE SACRED QUADRANGLE — CONTEXT\nThe Vatadage does not stand alone. It is the centrepiece of the Dalada Maluva — the Sacred Quadrangle — the most concentrated group of sacred monuments within the entire ancient city of Polonnaruwa. All the major religious structures of the royal Polonnaruwa period were gathered within this enclosed quadrangle, creating a sacred precinct at the heart of the city.\nOther structures within the Sacred Quadrangle include:\nThe Thuparama — the oldest building in Polonnaruwa, a stone-roofed image house still standing to its original full height. One of the finest surviving examples of ancient Sinhalese roofed stone construction anywhere.\nThe Hatadage — a two-storey stone building built by Nissanka Malla, believed to have housed the Tooth Relic of the Buddha. Its name means the House of Sixty Relics. The ground floor walls survive to considerable height, still displaying carved stone pillars of great elegance.\nThe Atadage — the earliest known building in Polonnaruwa constructed specifically to house the Tooth Relic, built during the reign of Vijayabahu I (1055–1110 AD), the king who liberated Polonnaruwa from Chola occupation and established the Polonnaruwa kingdom.\nThe Latha Mandapaya — a unique miniature stone fence enclosing a small platform with stone columns shaped as lotus stems, built by Nissanka Malla as a personal meditation pavilion. Considered one of the most unusual and delicate stone structures in ancient Sri Lanka.\nThe Satmahal Prasada — a seven-storey stepped pyramid tower of unidentified purpose, unlike any other structure in Sri Lanka, showing possible Cambodian or Burmese architectural influence. Its function remains debated by archaeologists.\nThe Gal Potha — the Stone Book — a massive stone slab inscription by Nissanka Malla recording his conquests, good works, and genealogy. At 9 meters long, 1.5 meters wide, and weighing approximately 25 tons, it was transported from Mihintale over 90 km away. The inscription is the longest stone inscription in Sri Lanka.\n\n🎟️ ENTRY FEES AND OPENING HOURS\nEntry Fee:\nThe Vatadage is within the Polonnaruwa Archaeological Park. A single ticket covers the entire park including all monuments.\nForeign adults: approximately $25 USD for the full Polonnaruwa Archaeological Park\nForeign children: reduced rate\nSri Lankan nationals: nominal local rate\nOpening Hours: The archaeological park is open daily from 7:30 AM to 6:00 PM.\nTime Required: The Sacred Quadrangle alone deserves at least 1 to 1.5 hours. The full Polonnaruwa Archaeological Park — covering all major monuments — requires a minimum of 4 to 5 hours or a full day.\n\n🚌 GETTING THERE\nFrom Colombo: By car approximately 215 km, 4 to 5 hours via the A6 highway. By bus from Central Bus Stand via Dambulla, approximately 5 to 6 hours.\nFrom Sigiriya: Approximately 70 km, about 1 to 1.5 hours by car. The most natural combination — Sigiriya and Polonnaruwa make a perfect two-day circuit.\nFrom Anuradhapura: Approximately 90 km, about 2 hours by car via Habarana.\nFrom Kandy: Approximately 140 km, about 3 hours by car.\nWithin Polonnaruwa: The archaeological park is too large to explore on foot. Bicycles are the best and most enjoyable way — available for rent from guesthouses and shops near the park entrance for approximately 300 to 500 LKR per day. Tuk-tuks are also available for a guided tour of the full park.\n\n💡 ESSENTIAL TIPS\nVisit the Sacred Quadrangle first thing in the morning before the heat of the day. The Vatadage in morning light — with the carved moonstones catching low-angle sunlight and the Buddha statues glowing white in the early rays — is at its most beautiful.\nRemove shoes before entering the upper platform. The sacred terrace area requires bare feet as a sign of respect. The stone floors are cool and comfortable in the early morning.\nWalk around the full circumference of both platforms. The carvings change at every entrance and the views of the stupa and Buddha statues from different angles reward careful observation.\nHire a local guide at the park entrance. The Vatadage's symbolism, carving details, and historical debates are richly explained by knowledgeable local guides, most of whom are exceptionally well informed about the site.\nCombine with the full Sacred Quadrangle on the same visit. The Thuparama, Hatadage, Latha Mandapaya, Satmahal Prasada, and Gal Potha are all within walking distance of the Vatadage and together form one of the most extraordinary concentrations of ancient monuments in Asia.\nRent a bicycle for the full park. The Gal Vihara — the famous giant Buddha carvings, considered the greatest achievement of Polonnaruwa period sculpture — is approximately 1.5 km from the Sacred Quadrangle and best reached by bicycle along the ancient roadway through the park.",
      SI: "පැරණි ශ්‍රී ලංකාවේ ඇති ලස්සනම ගොඩනැගිලිවලින් එකක් වන වටදාගෙය."
    },
    history: {
      EN: "The Polonnaruwa Vatadage is a circular stone structure built around a small central stupa for its protection and veneration. Built in the 12th century AD, it represents the absolute peak development of this uniquely Sri Lankan building tradition.",
      SI: "පොළොන්නරුව වටදාගෙය යනු 12 වන සියවසේදී ඉදිකරන ලද, කුඩා මධ්‍යම ස්තූපයක් වටා ආරක්ෂාව සහ වන්දනාව සඳහා ඉදිකරන ලද වෘත්තාකාර ගල් ගොඩනැගිල්ලකි."
    },
    shortStory: {
      EN: "The Circular Shrine - A masterpiece of stone carving.",
      SI: "වටදාගෙය - ශිලා කැටයම් කලාවේ විශිෂ්ටතම නිර්මාණය."
    },
    tips: [
      { EN: "Look for the detailed moonstone at the entrance.", SI: "ඇතුල්වන ස්ථානයේ ඇති සඳකඩපහණේ කැටයම් නරඹන්න." },
      { EN: "Visit during the late afternoon for better photography.", SI: "ඡායාරූපකරණය සඳහා සවස් කාලයේ පැමිණෙන්න." }
    ],
    hiddenEchoes: { EN: "The structure was designed to protect the sacred tooth relic.", SI: "මෙම ගොඩනැගිල්ල සැලසුම් කර ඇත්තේ දන්ත ධාතූන් වහන්සේ ආරක්ෂා කිරීම සඳහාය." },
    location: "Polonnaruwa",
    coordinates: { x: 58, y: 34 },
    nearbyAttractions: [
      { id: "gal-vihara", name: { EN: "Gal Vihara", SI: "ගල් විහාරය" }, image: "https://i.pinimg.com/1200x/bd/35/c6/bd35c69b7b3ed5e31da0edc4e374b028.jpg" },
      { id: "lankatilaka-vihara", name: { EN: "Lankatilaka Vihara", SI: "ලංකාතිලක විහාරය" }, image: "https://i.pinimg.com/1200x/0d/a7/ef/0da7ef3f52a249fe6d3119d886a0eb6f.jpg" }
    ]
  },
  {
    id: "thuparamaya",
    name: { EN: "Thuparamaya", SI: "ථූපාරාමය" },
    category: "ancient",
    image: "https://i.pinimg.com/736x/a6/ae/4f/a6ae4fd861554769766daae2f0e621d2.jpg",
    gallery: ["https://i.pinimg.com/736x/a6/ae/4f/a6ae4fd861554769766daae2f0e621d2.jpg"],
    history: {
      EN: "🏛️ THUPARAMAYA — THE FIRST STUPA OF SRI LANKA\nAnuradhapura, Sri Lanka — Complete Verified Guide\n\n✅ HONEST NOTE BEFORE READING\nThroughout this guide, facts are clearly labelled:\n✅ CONFIRMED — physically verifiable or accepted by mainstream archaeology and history\n⭐ RELIGIOUS TRADITION — sincerely held belief, recorded in ancient chronicles, but not independently verifiable by science\n\n📍 LOCATION\nCity: Anuradhapura, North Central Province, Sri Lanka\nExact position: Inside the Mahamewuna Garden (Mahamevnawa) — the same sacred park that contains the Jaya Sri Maha Bodhi tree — in the northern section of the ancient sacred city\nDistance from Colombo: approximately 205 km north — 3.5 to 4.5 hours by road\nDistance from Kandy: approximately 130 km — about 3 hours by road\nDistance from Sigiriya: approximately 90 km — about 1.5 to 2 hours by road\nDistance from Ruwanwelisaya: approximately 500 meters walking distance\nDistance from Jaya Sri Maha Bodhi: approximately 700 meters walking distance\nUNESCO Status: Part of the Sacred City of Anuradhapura — inscribed 1982\n\n🏛️ WHAT IS THUPARAMAYA\n✅ CONFIRMED — Thuparamaya is the oldest Buddhist stupa in Sri Lanka. It is a white bell-shaped dagoba built in the 3rd century BC, making it the first stupa constructed on the island following the introduction of Buddhism. It stands in the Mahamewuna Garden, surrounded by four concentric rings of ancient stone columns — the surviving remnants of a vatadage structure once built over the stupa.\nThe name Thuparamaya is derived from two Sinhala and Pali words — Thupa meaning stupa, and Aramaya meaning a monastic complex or dwelling for monks. Together the name means the monastic complex containing the stupa — reflecting the fact that this was not merely a monument but the living heart of an active monastic community.\n✅ CONFIRMED — It is one of the Atamasthana — the eight most sacred places of Buddhist pilgrimage in Anuradhapura that every devout Sri Lankan Buddhist seeks to visit.\n\n📜 FULL HISTORY — CONFIRMED FACTS\nThe Introduction of Buddhism to Sri Lanka — 247 BC\n✅ CONFIRMED — Buddhism was formally introduced to Sri Lanka during the reign of King Devanampiyatissa of Anuradhapura (reigned approximately 307–267 BC). The missionary who brought the Dhamma was Arahat Mahinda Thero — a senior Buddhist monk who according to both the Mahavamsa and the Indian text Samantapasadika was the son of Emperor Ashoka of the Maurya Dynasty in India.\nThe first meeting between Mahinda Thero and King Devanampiyatissa took place at Mihintale — a rocky hill 12 km east of Anuradhapura — during a deer hunt. The king was so profoundly moved by the encounter and the teaching of the Dhamma that he embraced Buddhism immediately and dedicated the remainder of his reign to establishing it as the religion of the island.\nThe Relic — The Right Collarbone of the Buddha\n⭐ RELIGIOUS TRADITION — According to the Mahavamsa, Arahat Mahinda Thero brought to Sri Lanka the right collarbone relic of the Gautama Buddha. This relic had been preserved in India since the Buddha's cremation and was entrusted to Mahinda for transmission to Sri Lanka. The ancient chronicle records that the relic arrived on the island and was presented to King Devanampiyatissa.\nSome ancient texts also record a secondary theory — that the Thuparamaya may have originally also housed the Tooth Relic of the Buddha before it was moved elsewhere. This alternative theory is recorded in some chronicles but is a minority view and cannot be confirmed.\n✅ CONFIRMED — The relic claim is unverifiable by modern science as the stupa has never been opened. The relic — whatever it is — remains sealed within the structure.\nConstruction — 3rd Century BC\n✅ CONFIRMED — Thuparamaya was built in the 3rd century BC during the reign of King Devanampiyatissa, at the request of Arahat Mahinda Thero. This dating is accepted by mainstream historians and is broadly consistent with archaeological findings at the site. It is the earliest stupa in Sri Lanka for which there is documented historical evidence.\nThe Method of Construction — Confirmed by Archaeology\n✅ CONFIRMED — The original stupa was built of small sun-dried bricks. Archaeological analysis of the core structure has confirmed the use of ancient brick construction methods characteristic of the Anuradhapura period. The foundation was prepared on earth compacted and sealed in the manner typical of early Sinhalese stupa construction.\nThe Vatadage is Added — 1st–2nd Century AD\n✅ CONFIRMED — The circular vatadage structure surrounding the stupa was not part of the original construction. It was added approximately 400 years later, during the reign of King Vasabha (reigned 67–111 AD). Vasabha built the circular roofed vatadage around the already existing stupa to provide it with protection and a formal processional space for devotees.\nOriginally 176 stone columns stood in four concentric circles around the stupa, supporting a wooden roof. The inner ring of columns was the tallest. The outer rings were progressively shorter, creating a sloped roof profile that channelled rainwater away from the stupa. The column capitals were carved in lotus form — characteristic of Anuradhapura period craftsmanship.\n✅ CONFIRMED — Over 30 of the original 176 stone columns still stand today, several retaining their original polished surfaces and lotus-shaped capitals. Four concentric rings of column bases are visible.\nDestruction and Restorations — Multiple Historical Periods\n✅ CONFIRMED — The Thuparamaya was damaged and destroyed multiple times over its history. Ancient chronicles record that by the reign of King Aggabodhi II (reigned 604–614 AD) the site was in ruins and was fully restored by royal decree. This is one of the earliest documented restorations.\nFurther restorations were carried out by successive kings across the Anuradhapura and Polonnaruwa periods whenever resources and political stability allowed.\nThe 1842 Restoration\n✅ CONFIRMED — The current dome of the Thuparamaya as it stands today dates from a major reconstruction carried out in 1842, during the early British colonial period. This restoration was initiated by local Buddhist community leaders and supported by donations. The current bell shape and white plastered exterior are the product of this 1842 rebuilding. The core of the stupa beneath contains the original ancient brick structure.\nAn Ancient Hospital at the Site\n✅ CONFIRMED — Archaeological excavations at Thuparamaya revealed the ruins of an ancient hospital that existed on the grounds of the monastic complex. Artefacts recovered include medical equipment, surgical instruments of stone and metal, and the remains of a drainage and latrine system. This confirms that the Thuparamaya complex was not merely a place of worship but a functioning monastery that provided medical care — consistent with the Buddhist tradition of compassionate service.\n\n🏗️ ARCHITECTURE — FULL VERIFIED DETAILS\nThe Shape — Dhanyakara\n✅ CONFIRMED — The Thuparamaya stupa was built in the Dhanyakara shape — a classic bell shape resembling an inverted rice heap. This is one of the five canonical stupa shapes of Sri Lankan Buddhist architecture. The smooth curved profile rising from a cylindrical base to a pointed spire is the defining visual characteristic of the Anuradhapura school of stupa design. This shape directly influenced all the great stupas built in Anuradhapura in subsequent centuries — Ruwanwelisaya, Abhayagiri, Jetavanaramaya, and Mirisawetiya all drew on the foundational model established by Thuparamaya.\nCurrent Measurements — All Confirmed\nHeight of the entire structure including spire: approximately 50 meters (164 feet)\nDiameter of the dome at the base: 18 meters (59 feet)\nTotal diameter of the full complex including terrace: approximately 50 meters (164 feet)\nHeight of the plinth on which the dome sits: 3.45 meters (11 feet 4 inches)\nThe Stone Columns — Vatadage Remains\n✅ CONFIRMED — Four concentric rings of stone column bases are visible around the stupa, marking the positions of the original 176 columns that formed the vatadage structure. More than 30 columns still stand upright to varying heights, some preserving their polished surfaces and lotus capitals. These columns are among the most photographed elements of the site — their arrangement around the stupa creates an extraordinary visual composition of stone, sky, and white dome.\nThe Wooden Roof — No Longer Present\n✅ CONFIRMED — The wooden roof that once covered the entire vatadage structure no longer exists. It perished centuries ago. The stone columns are all that remain of what was once a complete roofed circular shrine. The Anuradhapura Museum contains a scale model showing how the original roofed vatadage would have appeared — highly recommended to visit before or after seeing the stupa.\nThe Surrounding Terrace\n✅ CONFIRMED — The stupa stands on a raised stone terrace paved with granite. This terrace is the circumambulation platform used by pilgrims walking clockwise around the stupa. The terrace is maintained in excellent condition and is regularly swept clean by temple attendants.\nThe Symbolic Architecture\nEvery element of the stupa encodes Buddhist philosophical meaning — as with all Sri Lankan Buddhist stupas of this tradition:\nThe dome represents the universe and the perfection of the Buddhist path.\nThe square harmika above the dome represents the Four Noble Truths.\nThe concentric rings rising from the harmika represent the Noble Eightfold Path.\nThe pinnacle crystal represents Nirvana — the ultimate goal of Buddhist practice.\n\n🙏 RELIGIOUS SIGNIFICANCE — CONFIRMED AND TRADITION CLEARLY SEPARATED\nAs the First Stupa — Confirmed Historical Significance\n✅ CONFIRMED — The construction of Thuparamaya marked the very moment Buddhism became established as a formal state religion in Sri Lanka. Before Thuparamaya, there was no Buddhist stupa anywhere on the island. Its construction was the first physical expression of the new Buddhist civilisation that would go on to produce Ruwanwelisaya, the Jaya Sri Maha Bodhi shrine, Abhayagiri, Jetavanaramaya, and eventually the Temple of the Tooth in Kandy — the entire tradition of Buddhist sacred architecture in Sri Lanka begins here.\nAtamasthana — One of Eight Sacred Sites\n✅ CONFIRMED — Thuparamaya is one of the eight Atamasthana — the eight most sacred Buddhist sites in Anuradhapura that form the essential pilgrimage circuit. Every devout Sri Lankan Buddhist seeks to visit all eight on a single pilgrimage day if possible.\nDaily Worship\n✅ CONFIRMED — Thuparamaya is a continuously active place of worship. Daily puja rituals are conducted by the resident monks throughout the day. Pilgrims offer white lotus flowers, light clay oil lamps, burn incense, and perform clockwise circumambulation of the stupa every day of the year.\n⭐ RELIGIOUS TRADITION — The relic of the Buddha's right collarbone enshrined within the stupa is venerated as a direct physical connection to the historical Gautama Buddha himself. This is the central belief that gives Thuparamaya its supreme importance for Buddhist pilgrims. The relic cannot be verified or viewed — it remains permanently sealed within the stupa.\nPoya Full Moon Days\n✅ CONFIRMED — On every monthly full moon Poya day, significantly larger numbers of white-robed pilgrims attend Thuparamaya as part of the full Anuradhapura pilgrimage circuit. The most sacred Poya days at the site are Poson Poya (May–June) and Duruthu Poya (January).\n\n🎟️ ENTRY FEES AND OPENING HOURS\nEntry Fee:\nThuparamaya is covered by the single Anuradhapura Sacred City Archaeological Park ticket — one ticket gives access to all major sites within the park.\nForeign adults: approximately USD $25 for the full Sacred City park ticket\nSri Lankan nationals: nominal local rate or free\nOpening Hours: The stupa complex is open daily from 6:00 AM to 8:00 PM. The surrounding terrace can technically be visited at any time of day or night as the site is not fully gated, but official opening hours apply for the inner complex.\nBest Time to Visit:\nEarly morning between 6:00 and 8:00 AM — the white dome in the golden morning light with the stone columns casting long shadows is extraordinary.\nEvening from 5:00 PM onward — when oil lamps are lit around the terrace and the stupa is beautifully illuminated.\n\n🗺️ NEARBY ATTRACTIONS WITHIN WALKING DISTANCE\nJaya Sri Maha Bodhi — approximately 700 meters. The sacred Bodhi tree, the oldest documented human-planted tree on earth. Together with Thuparamaya it forms the most historically significant pair of sites in the entire sacred city.\nRuwanwelisaya — approximately 500 meters. The great white stupa of King Dutugemunu, the largest and most venerated stupa in Anuradhapura. These two stupas — the first ever built in Sri Lanka and the greatest ever built in Sri Lanka — stand less than 10 minutes walk apart.\nLovamahapaya — The Brazen Palace — approximately 300 meters. The ruins of the nine-storey palace of 1,600 stone columns, built by King Dutugemunu as a monastic hall adjacent to Ruwanwelisaya. Its grid of ancient stone columns spread across an open field is one of the most haunting archaeological sights in Anuradhapura.\nPadalanchana Cetiya — approximately 50 meters from Thuparamaya. A small stupa built by King Lajjitissa (119–109 BC) according to the Mahavamsa to enshrine a footprint of the Buddha. One of the least visited but most historically significant small monuments in the entire sacred city.\nSamadhi Buddha Statue — approximately 800 meters. One of the finest ancient Buddha statues in Sri Lanka — a seated meditation figure carved in the Anuradhapura style of exceptional quality, located within the Mahamewuna Gardens near the Bodhi tree precinct.\nAbhayagiri Dagoba — approximately 1 km north. One of the largest ancient stupas in the world, with an associated museum displaying some of the finest Anuradhapura period sculptures ever found.\n\n🚌 GETTING THERE\nFrom Colombo: By train from Colombo Fort Station on the Northern Railway Line — approximately 4 to 5 hours. By express bus — approximately 4 to 5 hours. By car — approximately 205 km, 3.5 to 4.5 hours via the A9 highway.\nFrom Kandy: Approximately 130 km, about 3 hours by car or bus via Dambulla.\nFrom Sigiriya: Approximately 90 km, about 1.5 to 2 hours by car — the most natural pairing.\nFrom Dambulla: Approximately 65 km, about 1 hour by car.\nWithin Anuradhapura: Thuparamaya is approximately 25 minutes walk from Anuradhapura Railway Station. Tuk-tuks are available from the station. A bicycle is the ideal way to explore all major sites of the sacred city — available for rent near the station for approximately 300 to 500 LKR per day.\n\n👔 DRESS CODE\nWhite clothing is strongly preferred and widely worn by pilgrims. Shoulders and knees must be fully covered. Sarongs are available from vendors near the entrance. All footwear must be removed before entering the sacred terrace around the stupa. The granite paving can be hot during midday — early morning or evening visits avoid this discomfort.\n\n💡 ESSENTIAL TIPS — PRACTICAL ONLY\nVisit in the early morning. The white bell shape of the stupa catching the first light of the day, surrounded by the ancient stone columns, is one of the most beautiful sights in all of Anuradhapura.\nVisit the Anuradhapura Museum first. The museum contains a detailed scale model of the Thuparamaya vatadage as it originally appeared — with the wooden roof intact and all 176 columns standing. Seeing this model before the site itself transforms the experience.\nWalk the full circumambulation. Walking clockwise around the stupa on the granite terrace, observing the stone columns from all sides, takes less than 10 minutes but is the most direct way to appreciate the scale and grace of the structure.\nCombine with Ruwanwelisaya and the Jaya Sri Maha Bodhi on the same morning. The three sites form the absolute sacred heart of Anuradhapura. All are within 700 meters of each other. A dedicated morning covers all three comfortably on foot or by bicycle.\nBuy lotus flowers at the entrance. Fresh white lotus blossoms sold by vendors near the entrance are the traditional offering. Placing them at the base of the stupa as you circumambulate connects you directly to a devotional tradition that has continued without interruption for over 2,300 years.\nDo not climb onto the stupa. The structure is sacred and fragile. Climbing is strictly forbidden and considered deeply disrespectful.\nObserve silence near the stupa during puja rituals. When monks are chanting and pilgrims are in prayer, quiet respectful observation is expected of all visitors.\nStay at least a full day in Anuradhapura. The sacred city contains Thuparamaya, Ruwanwelisaya, the Bodhi tree, Abhayagiri, Jetavanaramaya, Lovamahapaya, the Twin Ponds, Isurumuniya, and many more extraordinary monuments. Two full days allows genuine exploration without rushing.",
      SI: "බුදුදහම හඳුන්වා දීමෙන් පසු ශ්‍රී ලංකාවේ ඉදිකරන ලද ප්‍රථම ස්තූපයයි."
    },
    shortStory: {
      EN: "The First Stupa - Where the journey began.",
      SI: "ප්‍රථම ස්තූපය - ගමන ආරම්භ වූ තැන."
    },
    tips: [
      { EN: "Observe the unique stone pillars surrounding the stupa.", SI: "ස්තූපය වටා ඇති සුවිශේෂී ගල් කණු නරඹන්න." }
    ],
    hiddenEchoes: { EN: "It houses the right collarbone relic of the Buddha.", SI: "මෙහි බුදුරජාණන් වහන්සේගේ දකුණු අකු ධාතුව තැන්පත් කර ඇත." },
    location: "Anuradhapura",
    coordinates: { x: 47.5, y: 17.5 },
    nearbyAttractions: [
      { id: "ruwanwelisaya", name: { EN: "Ruwanwelisaya", SI: "රුවන්වැලිසෑය" }, image: "https://i.pinimg.com/1200x/e6/c4/67/e6c467b97e6ff3c8344d25e2b107b50e.jpg" }
    ]
  },
  {
    id: "abhayagiriya",
    name: { EN: "Abhayagiriya", SI: "අභයගිරිය" },
    category: "ancient",
    image: "https://i.pinimg.com/1200x/94/5b/35/945b35c5ac0c487b5da9b06dd2640ba8.jpg",
    gallery: ["https://i.pinimg.com/1200x/94/5b/35/945b35c5ac0c487b5da9b06dd2640ba8.jpg"],
    history: {
      EN: "Abhayagiriya was a massive monastic complex and a major center of international Buddhist learning, rivaling the Mahavihara. Established by King Valagamba in the 1st century BC, it welcomed scholars from across the world and embraced Mahayana teachings. The stupa itself was once one of the tallest structures in the ancient world, second only to the pyramids of Giza. The site includes sophisticated ponds, refectories, and the finest moonstones in Sri Lanka, reflecting a golden age of art and philosophy.",
      SI: "ජාත්‍යන්තර බෞද්ධ අධ්‍යාපන මධ්‍යස්ථානයක් ලෙස පැවති ප්‍රධාන ආරාම සංකීර්ණයකි."
    },
    shortStory: {
      EN: "The Great Monastery - A center of ancient wisdom.",
      SI: "මහා ආරාමය - පැරණි ප්‍රඥාවේ මධ්‍යස්ථානය."
    },
    tips: [
      { EN: "Visit the Samadhi Buddha statue nearby.", SI: "ආසන්නයේ ඇති සමාධි බුදු පිළිමය වැඳපුදා ගන්න." }
    ],
    hiddenEchoes: { EN: "The Chinese monk Faxian stayed here for two years in the 5th century.", SI: "5 වන සියවසේදී චීන ජාතික පාහියන් හිමියන් වසර දෙකක් මෙහි වැඩසිටියහ." },
    location: "Anuradhapura",
    coordinates: { x: 49, y: 17 },
    nearbyAttractions: [
      { id: "jetavanaramaya", name: { EN: "Jetavanaramaya", SI: "ජේතවනාරාමය" }, image: "https://i.pinimg.com/1200x/f9/0b/82/f90b8232972aeac986ffd2e906413d86.jpg" }
    ]
  },
  {
    id: "jetavanaramaya",
    name: { EN: "Jetavanaramaya", SI: "ජේතවනාරාමය" },
    category: "ancient",
    image: "https://i.pinimg.com/1200x/f9/0b/82/f90b8232972aeac986ffd2e906413d86.jpg",
    gallery: ["https://i.pinimg.com/1200x/f9/0b/82/f90b8232972aeac986ffd2e906413d86.jpg"],
    history: {
      EN: "The Jetavanaramaya stupa, built by King Mahasena in the 3rd century AD, was once the tallest stupa in the world and the third-tallest structure in antiquity after the Great Pyramids of Giza. Constructed using over 93 million baked bricks, it is a testament to the advanced engineering skills of the ancient Sinhalese. The monastery complex covered 8 hectares and housed thousands of monks. Today, its massive dome dominates the Anuradhapura skyline, representing the grandeur of Sri Lanka's hydraulic civilization.",
      SI: "ලොව මෙතෙක් ඉදිකරන ලද විශාලතම ගඩොල් ගොඩනැගිල්ල සහ එවකට ලොව උසම ස්තූපයයි."
    },
    shortStory: {
      EN: "The Brick Giant - A marvel of ancient engineering.",
      SI: "යෝධ ගඩොල් නිර්මාණය - පැරණි ඉංජිනේරු විද්‍යාවේ විස්මිත නිර්මාණය."
    },
    tips: [
      { EN: "Explore the museum nearby to see artifacts found at the site.", SI: "මෙහි තිබී හමු වූ පුරාවස්තු නැරඹීමට ආසන්නයේ ඇති කෞතුකාගාරයට යන්න." }
    ],
    hiddenEchoes: { EN: "Over 93 million bricks were used in its construction.", SI: "මෙය ඉදිකිරීම සඳහා ගඩොල් මිලියන 93 කට වඩා භාවිතා කර ඇත." },
    location: "Anuradhapura",
    coordinates: { x: 49.5, y: 19 },
    nearbyAttractions: [
      { id: "ruwanwelisaya", name: { EN: "Ruwanwelisaya", SI: "රුවන්වැලිසෑය" }, image: "https://i.pinimg.com/1200x/e6/c4/67/e6c467b97e6ff3c8344d25e2b107b50e.jpg" }
    ]
  },
  {
    id: "gal-vihara",
    name: { EN: "Gal Vihara", SI: "ගල් විහාරය" },
    category: "ancient",
    image: "https://i.pinimg.com/1200x/bd/35/c6/bd35c69b7b3ed5e31da0edc4e374b028.jpg",
    gallery: ["https://i.pinimg.com/1200x/bd/35/c6/bd35c69b7b3ed5e31da0edc4e374b028.jpg"],
    history: {
      EN: "The Gal Vihara, or 'Rock Monastery', is a masterpiece of Sinhalese rock carving located in Polonnaruwa. Created in the 12th century by King Parakramabahu I, it features four magnificent Buddha statues carved into a single large granite rock face: a seated Buddha, a smaller seated Buddha inside a cave, a standing Buddha with crossed arms, and a massive reclining Buddha. The fluidity of the robes and the serene expressions on the statues are considered the pinnacle of ancient Sri Lankan sculpting.",
      SI: "තනි කළු ගලක නෙළන ලද විශිෂ්ට බුදු පිළිම හතරකින් යුත් ශිලා විහාරයකි."
    },
    shortStory: {
      EN: "The Rock Temple - Perfection in stone.",
      SI: "ගල් විහාරය - ගලෙහි නිමවූ පරිපූර්ණත්වය."
    },
    tips: [
      { EN: "Photography is allowed, but do not pose with your back to the statues.", SI: "ඡායාරූප ගැනීමට අවසර ඇත, නමුත් පිළිම වලට පිටුපා ඡායාරූප නොගන්න." }
    ],
    hiddenEchoes: { EN: "The standing statue is 7 meters tall and shows the Buddha in a rare posture.", SI: "මෙහි ඇති හිටි පිළිමය මීටර් 7 ක් උස වන අතර එය දුර්ලභ ඉරියව්වක් නිරූපණය කරයි." },
    location: "Polonnaruwa",
    coordinates: { x: 58.5, y: 33.5 },
    nearbyAttractions: [
      { id: "vatadageya", name: { EN: "Vatadageya", SI: "වටදාගෙය" }, image: "https://i.pinimg.com/1200x/3e/16/a6/3e16a69f5a7a1aa1aa918ad765964902.jpg" }
    ]
  },
  {
    id: "lankatilaka-vihara",
    name: { EN: "Lankatilaka Vihara", SI: "ලංකාතිලක විහාරය" },
    category: "ancient",
    image: "https://i.pinimg.com/1200x/0d/a7/ef/0da7ef3f52a249fe6d3119d886a0eb6f.jpg",
    gallery: ["https://i.pinimg.com/1200x/93/07/66/93076630d999bdecdb46b99f342db55d.jpg", "https://i.pinimg.com/736x/bc/19/75/bc197531202843c862029530233ca3ea.jpg", "https://i.pinimg.com/1200x/0d/a7/ef/0da7ef3f52a249fe6d3119d886a0eb6f.jpg"],
    history: {
      EN: "Lankatilaka Vihara is a massive image house (Gedige) in Polonnaruwa, built by King Parakramabahu I. Its towering brick walls, originally reaching five stories high, enclose a colossal standing Buddha statue, now headless but still imposing. The structure is a marvel of ancient architecture, with intricate stucco figures adorning the exterior walls and a unique vaulted roof design. It stands as a powerful symbol of the grandeur of the Polonnaruwa kingdom's religious architecture.",
      SI: "යෝධ හිස රහිත බුදු පිළිමයක් සහිත දැවැන්ත ගඩොල් ගොඩනැගිල්ලකි."
    },
    shortStory: {
      EN: "The Brick Cathedral - A towering monument of faith.",
      SI: "ලංකාතිලක විහාරය - අභිමානවත් ගඩොල් නිර්මාණය."
    },
    tips: [
      { EN: "Observe the intricate carvings on the outer walls.", SI: "පිටත බිත්තිවල ඇති සංකීර්ණ කැටයම් නරඹන්න." }
    ],
    hiddenEchoes: { EN: "The walls are 4 meters thick to support the massive roof it once had.", SI: "මෙහි බිත්ති මීටර් 4 ක් පමණ ඝනකමින් යුක්ත වේ." },
    location: "Polonnaruwa",
    coordinates: { x: 57.5, y: 34.5 },
    nearbyAttractions: [
      { id: "vatadageya", name: { EN: "Vatadageya", SI: "වටදාගෙය" }, image: "https://i.pinimg.com/1200x/3e/16/a6/3e16a69f5a7a1aa1aa918ad765964902.jpg" }
    ]
  },
  { 
    id: "galle-fort", 
    name: { EN: "Galle Fort", SI: "ගාල්ල කොටුව" }, 
    category: "ancient", 
    image: "https://i.pinimg.com/736x/42/6a/7c/426a7c600b8958994d16a273773a43b1.jpg", 
    gallery: ["https://i.pinimg.com/736x/42/6a/7c/426a7c600b8958994d16a273773a43b1.jpg", "https://i.pinimg.com/736x/fc/73/a0/fc73a0bd21708eeaa3baf5872482bf25.jpg"], 
    history: { 
      EN: "Galle Fort is a UNESCO World Heritage site and the best-preserved colonial sea fortress in Asia. Originally built by the Portuguese in 1588 and extensively fortified by the Dutch in the 17th century, it is a living city where history meets the ocean. The fort is a maze of narrow cobblestone streets lined with Dutch colonial villas, ancient churches, and vibrant boutiques. It survived the 2004 tsunami largely intact due to its massive ramparts, which now serve as a popular promenade for sunset views.", 
      SI: "යුනෙස්කෝ ලෝක උරුමයක් වන මෙය 1588 දී පෘතුගීසීන් විසින් ඉදිකරන ලද අතර පසුව ලන්දේසීන් විසින් ශක්තිමත් කරන ලදී. මෙය ආසියාවේ හොඳම මට්ටමින් පවතින මුහුදු බලකොටුවකි." 
    }, 
    shortStory: { 
      EN: "The Living Fort - Where history meets the ocean.", 
      SI: "ජීවමාන කොටුව - ඉතිහාසය සාගරය හමුවන තැන." 
    }, 
    tips: [
      { EN: "Walk along the ramparts at sunset.", SI: "හිරු බැස යන විට පවුර දිගේ ඇවිදින්න." },
      { EN: "Explore the narrow streets and boutique shops.", SI: "පටු වීදි සහ වෙළඳසැල් ගවේෂණය කරන්න." }
    ], 
    hiddenEchoes: { EN: "The Old Dutch Hospital is now a vibrant dining precinct.", SI: "පැරණි ලන්දේසි රෝහල අද වන විට ආපනශාලා සංකීර්ණයකි." }, 
    location: "Galle", 
    coordinates: { x: 42.5, y: 92.5 },
    nearbyAttractions: [
      { id: "unawatuna", name: { EN: "Unawatuna Beach", SI: "උණවටුන වෙරළ" }, image: "https://i.pinimg.com/736x/09/4c/77/094c771bcf9d20988d5cb0bd21e91487.jpg" },
      { id: "hikkaduwa", name: { EN: "Hikkaduwa Beach", SI: "හික්කඩුව වෙරළ" }, image: "https://i.pinimg.com/1200x/7c/db/39/7cdb39c88ab9b4684492930755128968.jpg" },
      { id: "mirissa", name: { EN: "Mirissa Beach", SI: "මිරිස්ස වෙරළ" }, image: "https://i.pinimg.com/736x/8b/20/84/8b20845913d1b7fef10a72a7472de8d3.jpg" }
    ]
  },
  { 
    id: "dambulla", 
    name: { EN: "Dambulla Temple", SI: "දඹුලු විහාරය" }, 
    category: "ancient", 
    image: "https://i.pinimg.com/1200x/ca/96/d8/ca96d8e009f8ad50128891ce45b59c9d.jpg", 
    gallery: ["https://i.pinimg.com/1200x/9d/21/2e/9d212e3794b123394712f2065098d5c.jpg", "https://i.pinimg.com/1200x/ca/96/d8/ca96d8e009f8ad50128891ce45b59c9d.jpg"], 
    history: { 
      EN: "The Dambulla Cave Temple, also known as the Golden Temple of Dambulla, is a UNESCO World Heritage site and the largest, best-preserved cave temple complex in Sri Lanka. Inhabited by forest monks since the 3rd century BC, the caves were transformed into a magnificent shrine by King Valagamba. The complex comprises five main caves adorned with over 150 Buddha statues and 2,100 square meters of intricate murals depicting the life of the Buddha. It remains a sacred pilgrimage site and a gallery of ancient Sinhalese art.", 
      SI: "සියවස් 22 ක් පුරා පූජනීය වන්දනා ස්ථානයක් වූ මෙම ලෙන් විහාරය ශ්‍රී ලංකාවේ විශාලතම හා හොඳම මට්ටමින් පවතින ලෙන් විහාර සංකීර්ණයයි." 
    }, 
    shortStory: { 
      EN: "The Golden Cave - A sanctuary of ancient Buddhist art.", 
      SI: "රන් ලෙන් විහාරය - පැරණි බෞද්ධ කලාවේ අභයභූමිය." 
    }, 
    tips: [
      { EN: "Wear white clothes as a mark of respect.", SI: "ගෞරවයක් ලෙස සුදු ඇඳුම් අඳින්න්න." },
      { EN: "Be prepared for a moderate climb up the rock.", SI: "පර්වතය තරණය කිරීමට සූදානම්ව එන්න." }
    ], 
    hiddenEchoes: { EN: "The ceiling paintings are original and date back centuries.", SI: "සිවිලිමේ සිතුවම් සියවස් ගණනාවක් පැරණි මුල් නිර්මාණ වේ." }, 
    location: "Matale", 
    coordinates: { x: 50, y: 42 },
    nearbyAttractions: [
      { id: "sigiriya", name: { EN: "Sigiriya", SI: "සීගිරිය" }, image: "https://i.pinimg.com/1200x/3a/e7/48/3ae7487f4e95b92ce2d3c10c5b1038e0.jpg" },
      { id: "pidurangala", name: { EN: "Pidurangala Rock", SI: "පිදුරංගල පර්වතය" }, image: "https://i.pinimg.com/736x/b5/d0/f7/b5d0f760425e71a84e69d7c9b45f3821.jpg" },
      { id: "ritigala", name: { EN: "Ritigala", SI: "රිටිගල" }, image: "https://i.pinimg.com/1200x/6f/b0/c0/6fb0c00a86082ccbdf8e6ac17b083319.jpg" }
    ]
  },
  { 
    id: "kandy-temple", 
    name: { EN: "Temple of the Tooth", SI: "දළදා මාළිගාව" }, 
    category: "ancient", 
    image: "https://i.pinimg.com/1200x/b6/4b/ca/b64bcaaf16fc3356cee1b56c84ebfd8f.jpg", 
    gallery: ["https://i.pinimg.com/1200x/b6/4b/ca/b64bcaaf16fc3356cee1b56c84ebfd8f.jpg"], 
    history: { 
      EN: "The Temple of the Sacred Tooth Relic (Sri Dalada Maligawa) in Kandy is the most sacred Buddhist shrine in Sri Lanka. It houses the relic of the tooth of the Buddha, which is kept in a golden casket inside the main shrine. The temple is part of the royal palace complex of the last Kingdom of Kandy and is a UNESCO World Heritage site. Rituals are performed three times daily, and the temple is the focal point of the annual Esala Perahera, one of the world's grandest religious festivals.", 
      SI: "පැරණි මහනුවර රාජධානියේ රාජකීය මාලිගා සංකීර්ණයේ පිහිටා ඇති අතර මෙහි බුදුරජාණන් වහන්සේගේ ශ්‍රී දන්ත ධාතූන් වහන්සේ වැඩසිටිති." 
    }, 
    shortStory: { 
      EN: "The Spiritual Heart - Sri Lanka's most sacred shrine.", 
      SI: "ආධ්‍යාත්මික හදවත - ශ්‍රී ලංකාවේ පූජනීයම සිද්ධස්ථානය." 
    }, 
    tips: [
      { EN: "Visit during the 'Thevava' (offering) ceremonies.", SI: "තේවාව පවත්වන වේලාවන්හිදී පැමිණෙන්න." },
      { EN: "Remove hats and shoes before entering.", SI: "ඇතුළු වීමට පෙර තොප්පි සහ පාවහන් ඉවත් කරන්න." }
    ], 
    hiddenEchoes: { EN: "The Octagon (Paththirippuwa) was once used by the King to address the people.", SI: "පත්තිරිප්පුව රජු විසින් ජනතාව ඇමතීමට භාවිතා කරන ලදී." }, 
    location: "Kandy", 
    coordinates: { x: 56, y: 52 },
    nearbyAttractions: [
      { id: "knuckles", name: { EN: "Knuckles Mountain Range", SI: "නකල්ස් කඳු පන්තිය" }, image: "https://i.pinimg.com/1200x/59/90/2a/59902a787d6a8c484b8d014234ef36d4.jpg" },
      { id: "nuwaraeliya", name: { EN: "Nuwara Eliya", SI: "නුවරඑළිය" }, image: "https://i.pinimg.com/1200x/47/cc/a0/47cca06e7d0433c00f458f87621f939b.jpg" }
    ]
  },
  { 
    id: "mihintale", 
    name: { EN: "Mihintale", SI: "මිහින්තලේ" }, 
    category: "ancient", 
    image: "https://i.pinimg.com/1200x/4b/ce/e7/4bcee74e0567cf2c845621fa93db5905.jpg", 
    gallery: ["https://i.pinimg.com/736x/87/b1/7f/87b17fb4f6d602cf2606fdf482e41c2b.jpg", "https://i.pinimg.com/1200x/4b/ce/e7/4bcee74e0567cf2c845621fa93db5905.jpg"], 
    history: { 
      EN: "Mihintale is revered as the cradle of Buddhism in Sri Lanka. It is the site where Arahat Mahinda, the son of Emperor Ashoka of India, met King Devanampiyatissa in 247 BC and introduced Buddhism to the island. The mountain peak is covered with ancient shrines, rock caves, and stupas, including the Maha Seya and the Aradhana Gala. A grand staircase of 1,840 granite steps leads to the summit, offering panoramic views and a profound sense of spiritual history.", 
      SI: "ක්‍රි.පූ. 247 දී මිහිඳු රහතන් වහන්සේ සහ දේවානම්පියතිස්ස රජු හමු වූ ශ්‍රී ලංකාවේ බුදුදහමේ තොටිල්ලයි." 
    }, 
    shortStory: { 
      EN: "The Mountain of Mahinda - A place of peace and light.", 
      SI: "මිහින්තලා පර්වතය - සාමය සහ ආලෝකය පිරි ස්ථානයක්." 
    }, 
    tips: [
      { EN: "Climb the Aradhana Gala for a panoramic view.", SI: "දර්ශනය නැරඹීමට ආරාධනා ගල තරණය කරන්න." },
      { EN: "Visit the ancient hospital ruins at the base.", SI: "පහළ ඇති පැරණි රෝහල් නටබුන් නරඹන්න." }
    ], 
    hiddenEchoes: { EN: "The Kantaka Cetiya features some of the earliest stone carvings.", SI: "කණ්ඨක චේතිය මුල්කාලීන ශිලා කැටයම් වලින් සමන්විත වේ." }, 
    location: "Anuradhapura", 
    coordinates: { x: 50, y: 20 },
    nearbyAttractions: [
      { id: "ruwanwelisaya", name: { EN: "Ruwanwelisaya", SI: "රුවන්වැලිසෑය" }, image: "https://i.pinimg.com/1200x/e6/c4/67/e6c467b97e6ff3c8344d25e2b107b50e.jpg" },
      { id: "ritigala", name: { EN: "Ritigala", SI: "රිටිගල" }, image: "https://i.pinimg.com/1200x/6f/b0/c0/6fb0c00a86082ccbdf8e6ac17b083319.jpg" },
      { id: "wilpattu", name: { EN: "Wilpattu National Park", SI: "විල්පත්තුව ජාතික වනෝද්‍යානය" }, image: "https://i.pinimg.com/736x/f6/51/77/f65177d61ea209acea5c455e00246b7b.jpg" }
    ]
  },
  { 
    id: "yapahuwa", 
    name: { EN: "Yapahuwa", SI: "යාපහුව" }, 
    category: "ancient", 
    image: "https://i.pinimg.com/736x/4b/c5/a7/4bc5a7066b6c9d4cb049dc1b12183fd7.jpg", 
    gallery: ["https://i.pinimg.com/736x/0c/d6/36/0cd6364b766c233d0d9f25252fb16d4d.jpg", "https://i.pinimg.com/736x/4b/c5/a7/4bc5a7066b6c9d4cb049dc1b12183fd7.jpg"], 
    history: { 
      EN: "Yapahuwa is a 13th-century rock fortress and former capital of Sri Lanka, built by King Bhuvanekabahu I. Often compared to Sigiriya, it rises 100 meters from the plain and was designed as a military stronghold against invaders. The site is most famous for its steep and ornate ornamental staircase, flanked by stone lions and intricate carvings, which once led to the Temple of the Tooth. Though short-lived as a capital, Yapahuwa remains a stunning example of medieval Sinhalese architecture.", 
      SI: "පොළොන්නරුව බිඳ වැටීමෙන් පසු අගනුවර ලෙස පැවති 13 වන සියවසේ ශිලා බලකොටුවකි. මෙය එහි අලංකාර පඩිපෙළ සඳහා ප්‍රසිද්ධය." 
    }, 
    shortStory: { 
      EN: "The Lion Staircase - A regal ascent into the past.", 
      SI: "සිංහ පඩිපෙළ - අතීතයට යන රාජකීය ගමනක්." 
    }, 
    tips: [
      { EN: "The staircase is steep; take your time climbing.", SI: "පඩිපෙළ බෑවුම් සහිත බැවින් ප්‍රවේශමෙන් තරණය කරන්න." },
      { EN: "Look for the detailed stone carvings of dancers.", SI: "නර්තන ශිල්පීන්ගේ සවිස්තරාත්මක කැටයම් සොයා බලන්න." }
    ], 
    hiddenEchoes: { EN: "The stone window (Seelawa) is a masterpiece of craftsmanship.", SI: "ගල් කැටයම් කවුළුව (සීලාව) විශිෂ්ට නිර්මාණයකි." }, 
    location: "Kurunegala", 
    coordinates: { x: 44, y: 46 },
    nearbyAttractions: [
      { id: "ritigala", name: { EN: "Ritigala", SI: "රිටිගල" }, image: "https://i.pinimg.com/1200x/6f/b0/c0/6fb0c00a86082ccbdf8e6ac17b083319.jpg" },
      { id: "ruwanwelisaya", name: { EN: "Ruwanwelisaya", SI: "රුවන්වැලිසෑය" }, image: "https://i.pinimg.com/1200x/e6/c4/67/e6c467b97e6ff3c8344d25e2b107b50e.jpg" },
      { id: "dambulla", name: { EN: "Dambulla Cave Temple", SI: "දඹුලු ලෙන් විහාරය" }, image: "https://i.pinimg.com/1200x/ca/96/d8/ca96d8e009f8ad50128891ce45b59c9d.jpg" }
    ]
  },
  { 
    id: "ritigala", 
    name: { EN: "Ritigala", SI: "රිටිගල" }, 
    category: "ancient", 
    image: "https://i.pinimg.com/1200x/6f/b0/c0/6fb0c00a86082ccbdf8e6ac17b083319.jpg", 
    gallery: ["https://i.pinimg.com/1200x/5c/e2/f3/5ce2f34e60d60c138b49f766aacab214.jpg", "https://i.pinimg.com/1200x/6f/b0/c0/6fb0c00a86082ccbdf8e6ac17b083319.jpg"], 
    history: { 
      EN: "Ritigala is an ancient Buddhist monastery nestled deep within a strict nature reserve. Dating back to the 1st century BC, it was a sanctuary for forest monks known as 'Pamsukulikas' who devoted themselves to extreme austerity. The site features unique double-platform stone structures, paved meditation paths, and ancient stone bridges, but notably lacks stupas or image houses. The mountain creates a unique microclimate, home to rare medicinal herbs and flora found nowhere else in the dry zone.", 
      SI: "පැරණි බෞද්ධ ආරාමයක් සහ කඳු පන්තියක් වන මෙය එහි සුවිශේෂී දේශගුණය සහ භාවනා මංපෙත් සඳහා ප්‍රසිද්ධය." 
    }, 
    shortStory: { 
      EN: "The Forest Monastery - A sanctuary of silence.", 
      SI: "වන ආරාමය - නිහඬතාවයේ අභයභූමිය." 
    }, 
    tips: [
      { EN: "Wear comfortable walking shoes for the stone paths.", SI: "ගල් මාවත්වල ඇවිදීමට පහසු පාවහන් අඳින්න්න." },
      { EN: "Stay on the marked paths to protect the environment.", SI: "පරිසරය සුරැකීමට නියමිත මාවත්වල පමණක් ගමන් කරන්න." }
    ], 
    hiddenEchoes: { EN: "The double-platform structures are unique to this tradition.", SI: "ද්විත්ව වේදිකා ව්‍යුහයන් මෙම සම්ප්‍රදායට පමණක් ආවේණික වේ." }, 
    location: "Anuradhapura", 
    coordinates: { x: 54, y: 26 },
    nearbyAttractions: [
      { id: "ruwanwelisaya", name: { EN: "Ruwanwelisaya", SI: "රුවන්වැලිසෑය" }, image: "https://i.pinimg.com/1200x/e6/c4/67/e6c467b97e6ff3c8344d25e2b107b50e.jpg" },
      { id: "mihintale", name: { EN: "Mihintale", SI: "මිහින්තලේ" }, image: "https://i.pinimg.com/1200x/4b/ce/e7/4bcee74e0567cf2c845621fa93db5905.jpg" },
      { id: "sigiriya", name: { EN: "Sigiriya", SI: "සීගිරිය" }, image: "https://i.pinimg.com/1200x/3a/e7/48/3ae7487f4e95b92ce2d3c10c5b1038e0.jpg" }
    ]
  },
  { 
    id: "buduruwagala", 
    name: { EN: "Buduruwagala", SI: "බුදුරුවගල" }, 
    category: "ancient", 
    image: "https://i.pinimg.com/1200x/7d/ce/23/7dce235eedb24bdcbd5ece2ef2836fd8.jpg", 
    gallery: ["https://i.pinimg.com/1200x/ce/b7/d6/ceb7d6e0eba3935d85da2d37f1ee8875.jpg", "https://i.pinimg.com/1200x/7d/ce/23/7dce235eedb24bdcbd5ece2ef2836fd8.jpg"], 
    history: { 
      EN: "Buduruwagala is an ancient Mahayana Buddhist site dating back to the 10th century. Its name means 'The Rock of Buddhist Sculptures'. The site features seven colossal statues carved into a sheer rock face, centered around a massive 16-meter standing Buddha image, which is the tallest of its kind in Sri Lanka. The central figure is flanked by Bodhisattva images, including Avalokitesvara and Maitreya. The statues, though weathered, still bear traces of their original plaster and paint, offering a glimpse into the island's Mahayana heritage.", 
      SI: "දැවැන්ත පර්වතයක නෙළන ලද පිළිම හතකින් යුත් 10 වන සියවසේ මහායාන බෞද්ධ විහාරස්ථානයකි." 
    }, 
    shortStory: { 
      EN: "The Rock of Sculptures - Giant figures in stone.", 
      SI: "ශිලා කැටයම් පර්වතය - ගලෙහි නෙළූ යෝධ රූප." 
    }, 
    tips: [
      { EN: "Visit during the golden hour for the best light on the statues.", SI: "පිළිම මත හොඳම ආලෝකය වැටෙන සවස් කාලයේ පැමිණෙන්න." },
      { EN: "The site is peaceful and great for meditation.", SI: "මෙම ස්ථානය ඉතා සාමකාමී බැවින් භාවනාවට සුදුසුය." }
    ], 
    hiddenEchoes: { EN: "A mysterious oil-like substance constantly moistens one alcove.", SI: "එක් කුහරයක අභිරහස් තෙල් වැනි ද්‍රව්‍යයක් නිරන්තරයෙන් පවතී." }, 
    location: "Wellawaya", 
    coordinates: { x: 68, y: 78 },
    nearbyAttractions: [
      { id: "diyaluma", name: { EN: "Diyaluma Falls", SI: "දියලුම ඇල්ල" }, image: "https://i.pinimg.com/736x/2c/6a/50/2c6a5022d41b3ee3a686ead9141d04f8.jpg" },
      { id: "ella", name: { EN: "Ella", SI: "ඇල්ල" }, image: "https://i.pinimg.com/736x/19/c4/ca/19c4ca9cac03989b7a94bbe48beb166d.jpg" },
      { id: "ravanafalls", name: { EN: "Ravana Falls", SI: "රාවණා ඇල්ල" }, image: "https://i.pinimg.com/1200x/e5/cf/c0/e5cfc05e4ebb57cf741b8dcf0677a269.jpg" }
    ]
  },

  // --- BEACHES (10) ---
  { id: "unawatuna", name: { EN: "Unawatuna", SI: "උණවටුන" }, category: "beach", image: "https://i.pinimg.com/736x/09/4c/77/094c771bcf9d20988d5cb0bd21e91487.jpg", gallery: ["https://i.pinimg.com/736x/09/4c/77/094c771bcf9d20988d5cb0bd21e91487.jpg"], history: { EN: "Unawatuna is a coastal town in Galle district and a major tourist attraction in Sri Lanka. Famous for its beautiful horseshoe-shaped beach and corals, it is mentioned in the Ramayana epic as a piece of the Himalayas that fell from Hanuman's hand. The beach is protected by a double reef, making it safe for swimming throughout the year. It is also known for its vibrant nightlife, beachside restaurants, and the Japanese Peace Pagoda overlooking the ocean.", SI: "රාම රාවණා කතාවේ වෙරළ." }, shortStory: { EN: "The Golden Beach.", SI: "රන්වන් වෙරළ." }, tips: [{ EN: "Try swimming with a mask.", SI: "කිමිදීමට උත්සාහ කරන්න." }], hiddenEchoes: { EN: "A path to Jungle Beach.", SI: "ජංගල් බීච් මංපෙත." }, location: "Galle", coordinates: { x: 44, y: 94 },
    nearbyAttractions: [
      { id: "galle-fort", name: { EN: "Galle Fort", SI: "ගාල්ල කොටුව" }, image: "https://i.pinimg.com/1200x/fa/56/b6/fa56b632b66edcf9c5ee396a4930278c.jpg" },
      { id: "hikkaduwa", name: { EN: "Hikkaduwa Beach", SI: "හික්කඩුව වෙරළ" }, image: "https://i.pinimg.com/1200x/7c/db/39/7cdb39c88ab9b4684492930755128968.jpg" },
      { id: "mirissa", name: { EN: "Mirissa Beach", SI: "මිරිස්ස වෙරළ" }, image: "https://i.pinimg.com/736x/8b/20/84/8b20845913d1b7fef10a72a7472de8d3.jpg" }
    ]
  },
  { id: "mirissa", name: { EN: "Mirissa", SI: "මිරිස්ස" }, category: "beach", image: "https://i.pinimg.com/736x/8b/20/84/8b20845913d1b7fef10a72a7472de8d3.jpg", gallery: ["https://i.pinimg.com/736x/8b/20/84/8b20845913d1b7fef10a72a7472de8d3.jpg"], history: { EN: "Mirissa is a picturesque beach town on the south coast of Sri Lanka, renowned for its stunning sunsets and laid-back atmosphere. It is the world's top destination for whale watching, where blue whales, sperm whales, and dolphins can be spotted just a few miles offshore. The beach features the iconic Parrot Rock and Coconut Tree Hill, offering breathtaking views of the Indian Ocean. Mirissa is also a hotspot for surfing and fresh seafood dining.", SI: "තල්මසුන් නැරඹීමේ මධ්‍යස්ථානය." }, shortStory: { EN: "A dream beach.", SI: "නිහඬ සාගර සිහිනය." }, tips: [{ EN: "Go to Coconut Tree Hill.", SI: "කොකනට් ට්‍රී හිල් වෙත යන්න." }], hiddenEchoes: { EN: "A path to Parrot Rock.", SI: "පැරට් රොක් මග." }, location: "Matara", coordinates: { x: 52, y: 96 },
    nearbyAttractions: [

      { id: "unawatuna", name: { EN: "Unawatuna Beach", SI: "උණවටුන වෙරළ" }, image: "https://i.pinimg.com/736x/09/4c/77/094c771bcf9d20988d5cb0bd21e91487.jpg" },
      { id: "yala", name: { EN: "Yala National Park", SI: "යාල ජාතික වනෝද්‍යානය" }, image: "https://i.pinimg.com/1200x/1f/61/a5/1f61a5f00d68b86b64e2dd496ba70d33.jpg" }
    ]
  },
  { id: "hikkaduwa", name: { EN: "Hikkaduwa", SI: "හික්කඩුව" }, category: "beach", image: "https://i.pinimg.com/1200x/7c/db/39/7cdb39c88ab9b4684492930755128968.jpg", gallery: ["https://i.pinimg.com/1200x/7c/db/39/7cdb39c88ab9b4684492930755128968.jpg"], history: { EN: "Hikkaduwa is one of the most popular beach resorts on the south-western coast, famous for its coral sanctuary and surfing waves. It was the first area in Sri Lanka to be developed for tourism in the 1960s. The Hikkaduwa National Park protects the shallow fringing reef, which can be viewed by glass-bottom boats or snorkeling. The town is also known for its vibrant nightlife, beach parties, and the annual Beach Fest.", SI: "කොරල් පාරාදීසය." }, shortStory: { EN: "A place for surfers.", SI: "සර්ෆින් පාරාදීසය." }, tips: [{ EN: "Feed the big turtles.", SI: "කැස්බෑවුන්ට ආහාර දෙන්න." }], hiddenEchoes: { EN: "Boats with glass floors.", SI: "වීදුරු පතුලේ බෝට්ටු." }, location: "Galle", coordinates: { x: 38, y: 90 },
    nearbyAttractions: [
      { id: "bentota", name: { EN: "Bentota Beach", SI: "බෙන්තොට වෙරළ" }, image: "https://i.pinimg.com/1200x/fa/56/b6/fa56b632b66edcf9c5ee396a4930278c.jpg" },
      { id: "galle-fort", name: { EN: "Galle Fort", SI: "ගාල්ල කොටුව" }, image: "https://i.pinimg.com/1200x/fa/56/b6/fa56b632b66edcf9c5ee396a4930278c.jpg" },
      { id: "unawatuna", name: { EN: "Unawatuna Beach", SI: "උණවටුන වෙරළ" }, image: "https://i.pinimg.com/736x/09/4c/77/094c771bcf9d20988d5cb0bd21e91487.jpg" }
    ]
  },
  { id: "arugambay", name: { EN: "Arugam Bay", SI: "ආරුගම්බේ" }, category: "beach", image: "https://i.pinimg.com/1200x/51/b0/d8/51b0d8fdddaf927052ffe51ab54b65f9.jpg", gallery: ["https://i.pinimg.com/1200x/51/b0/d8/51b0d8fdddaf927052ffe51ab54b65f9.jpg"], history: { EN: "Arugam Bay, located on the southeast coast, is a world-renowned surfing destination, often hosting international surfing competitions. Its long right-hand point break is considered one of the best in the world. Beyond surfing, the area is a gateway to the wild, with the Kumana National Park and Lahugala National Park nearby. The laid-back village vibe, lagoon safaris, and elephant sightings make it a unique blend of beach and wildlife experiences.", SI: "ලොව ප්‍රකට සර්ෆින් ස්ථානයක්." }, shortStory: { EN: "The East Coast.", SI: "නැගෙනහිර මායිම." }, tips: [{ EN: "Rent a surfboard.", SI: "සර්ෆ් බෝඩ් එකක් ගන්න." }], hiddenEchoes: { EN: "A quiet lagoon nearby.", SI: "පොතුවිල් කලපුව." }, location: "Ampara", coordinates: { x: 86, y: 78 },
    nearbyAttractions: [
      { id: "kumana", name: { EN: "Kumana National Park", SI: "කුමන ජාතික වනෝද්‍යානය" }, image: "https://i.pinimg.com/736x/71/50/16/71501668218b3602ac732a426f397666.jpg" },
      { id: "pasikudah", name: { EN: "Pasikudah Beach", SI: "පාසිකුඩා වෙරළ" }, image: "https://i.pinimg.com/1200x/02/4f/c9/024fc9b932d7565de43b861d11a58ef9.jpg" },
      { id: "yala", name: { EN: "Yala National Park", SI: "යාල ජාතික වනෝද්‍යානය" }, image: "https://i.pinimg.com/1200x/1f/61/a5/1f61a5f00d68b86b64e2dd496ba70d33.jpg" }
    ]
  },
  { id: "bentota", name: { EN: "Bentota", SI: "බෙන්තොට" }, category: "beach", image: "https://i.pinimg.com/1200x/fa/56/b6/fa56b632b66edcf9c5ee396a4930278c.jpg", gallery: ["https://i.pinimg.com/1200x/fa/56/b6/fa56b632b66edcf9c5ee396a4930278c.jpg"], history: { EN: "Bentota is a prime beach resort town on the southwest coast, famous for the Bentota Ganga river and its lagoon. It is the water sports capital of Sri Lanka, offering jet skiing, windsurfing, and banana boat rides. The broad, golden sandy beach is backed by luxury hotels and the architectural masterpieces of Geoffrey Bawa, including the Lunuganga estate. The river safari through the mangroves offers a chance to see monitors, crocodiles, and diverse birdlife.", SI: "ජල ක්‍රීඩා කලාපය." }, shortStory: { EN: "Where the river meets the sea.", SI: "ගංගා මෝය." }, tips: [{ EN: "Try a jet ski.", SI: "ජෙට් ස්කී පදින්න." }], hiddenEchoes: { EN: "A beautiful garden.", SI: "බ්‍රීෆ් උද්‍යානය." }, location: "Galle", coordinates: { x: 30, y: 82 },
    nearbyAttractions: [
      { id: "hikkaduwa", name: { EN: "Hikkaduwa Beach", SI: "හික්කඩුව වෙරළ" }, image: "https://i.pinimg.com/1200x/7c/db/39/7cdb39c88ab9b4684492930755128968.jpg" },
      { id: "galle-fort", name: { EN: "Galle Fort", SI: "ගාල්ල කොටුව" }, image: "https://i.pinimg.com/1200x/fa/56/b6/fa56b632b66edcf9c5ee396a4930278c.jpg" },
      { id: "unawatuna", name: { EN: "Unawatuna Beach", SI: "උණවටුන වෙරළ" }, image: "https://i.pinimg.com/736x/09/4c/77/094c771bcf9d20988d5cb0bd21e91487.jpg" }
    ]
  },
  { id: "nilaveli", name: { EN: "Nilaveli", SI: "නිලාවේලි" }, category: "beach", image: "https://i.pinimg.com/1200x/c8/c2/40/c8c240b6df4dfb3bccbaa0995b8266b4.jpg", gallery: ["https://i.pinimg.com/1200x/c8/c2/40/c8c240b6df4dfb3bccbaa0995b8266b4.jpg"], history: { EN: "Nilaveli is a pristine coastal resort town located north of Trincomalee, known for its white sandy beaches and crystal-clear blue waters. It is considered one of the finest beaches in Asia. The calm, shallow waters are perfect for swimming and snorkeling. Just offshore lies Pigeon Island National Park, a marine sanctuary with vibrant coral reefs and abundant marine life, including blacktip reef sharks and sea turtles.", SI: "සුදු වැලි පිරි වෙරළ." }, shortStory: { EN: "Deep blue water.", SI: "ගැඹුරු නිල් සාගරය." }, tips: [{ EN: "Visit Pigeon Island.", SI: "පීජන් අයිලන්ඩ් වෙත යන්න." }], hiddenEchoes: { EN: "Corals under the water.", SI: "මුහුදු පතුලේ කොරල්." }, location: "Trincomalee", coordinates: { x: 74, y: 24 },
    nearbyAttractions: [

      { id: "pasikudah", name: { EN: "Pasikudah Beach", SI: "පාසිකුඩා වෙරළ" }, image: "https://i.pinimg.com/1200x/02/4f/c9/024fc9b932d7565de43b861d11a58ef9.jpg" },
      { id: "sigiriya", name: { EN: "Sigiriya", SI: "සීගිරිය" }, image: "https://i.pinimg.com/1200x/3a/e7/48/3ae7487f4e95b92ce2d3c10c5b1038e0.jpg" }
    ]
  },
  { id: "pasikudah", name: { EN: "Pasikudah", SI: "පාසිකුඩා" }, category: "beach", image: "https://i.pinimg.com/1200x/02/4f/c9/024fc9b932d7565de43b861d11a58ef9.jpg", gallery: ["https://i.pinimg.com/1200x/02/4f/c9/024fc9b932d7565de43b861d11a58ef9.jpg"], history: { EN: "Pasikudah is a coastal resort town located in the Batticaloa District, famous for its golden bay and one of the longest stretches of shallow reef coastline in the world. The water is so shallow and calm that you can walk kilometers into the sea. It is a perfect destination for families and luxury travelers, with high-end resorts lining the bay. The area is recovering its former glory as a premier tourist destination after decades of isolation.", SI: "නොගැඹුරු සාමකාමී වෙරළ." }, shortStory: { EN: "Infinite Horizon.", SI: "නිමක් නැති ක්ෂිතිජය." }, tips: [{ EN: "Safe for kids.", SI: "ළමයින්ට ඉතා ආරක්ෂිතයි." }], hiddenEchoes: { EN: "Coral walk nodes.", SI: "කොරල් මංපෙත්." }, location: "Batticaloa", coordinates: { x: 80, y: 44 },
    nearbyAttractions: [
      { id: "nilaveli", name: { EN: "Nilaveli Beach", SI: "නිලාවේලි වෙරළ" }, image: "https://i.pinimg.com/1200x/c8/c2/40/c8c240b6df4dfb3bccbaa0995b8266b4.jpg" },
      { id: "arugambay", name: { EN: "Arugam Bay", SI: "ආරුගම්බේ" }, image: "https://i.pinimg.com/1200x/51/b0/d8/51b0d8fdddaf927052ffe51ab54b65f9.jpg" },
      { id: "vatadageya", name: { EN: "Vatadageya", SI: "වටදාගෙය" }, image: "https://i.pinimg.com/1200x/3e/16/a6/3e16a69f5a7a1aa1aa918ad765964902.jpg" }
    ]
  },




  // --- WILDLIFE (10) ---
  { id: "yala", name: { EN: "Yala", SI: "යාල" }, category: "wildlife", image: "https://i.pinimg.com/736x/80/a6/9b/80a69b9f0678cd5fc615dd2fc0bd559a.jpg", gallery: ["https://i.pinimg.com/736x/80/a6/9b/80a69b9f0678cd5fc615dd2fc0bd559a.jpg", "https://i.pinimg.com/1200x/1f/61/a5/1f61a5f00d68b86b64e2dd496ba70d33.jpg"], history: { EN: "Yala National Park is the most visited and second largest national park in Sri Lanka. It is famous for having one of the highest densities of leopards in the world. The park consists of five blocks, with a diverse ecosystem ranging from moist monsoon forests to freshwater and marine wetlands. Besides leopards, it is home to elephants, sloth bears, crocodiles, and a rich variety of bird species. The park also contains important ancient pilgrim sites like Sithulpawwa.", SI: "දිවියන් බහුලම වනාන්තරය." }, shortStory: { EN: "Home of the Leopard.", SI: "දඩයක්කාරයාගේ අණසක." }, tips: [{ EN: "Go very early in the morning.", SI: "උදෑසනම සූදානම් වන්න." }], hiddenEchoes: { EN: "Old ruins in the park.", SI: "සිතුල්පව්ව නටබුන්." }, location: "Hambantota", coordinates: { x: 74, y: 88 },
    nearbyAttractions: [
      { id: "kumana", name: { EN: "Kumana National Park", SI: "කුමන ජාතික වනෝද්‍යානය" }, image: "https://i.pinimg.com/736x/71/50/16/71501668218b3602ac732a426f397666.jpg" },
      { id: "bundala", name: { EN: "Bundala National Park", SI: "බූන්දල ජාතික වනෝද්‍යානය" }, image: "https://i.pinimg.com/1200x/8c/68/d3/8c68d38fe1b594fda91bcc42f6c43b97.jpg" },
      { id: "buduruwagala", name: { EN: "Buduruwagala Temple", SI: "බුදුරුවගල විහාරය" }, image: "https://i.pinimg.com/1200x/7d/ce/23/7dce235eedb24bdcbd5ece2ef2836fd8.jpg" }
    ]
  },
  { id: "udawalawe", name: { EN: "Udawalawe", SI: "උඩවලව" }, category: "wildlife", image: "https://i.pinimg.com/1200x/28/95/94/28959415856159f64b3a6f98073698b8.jpg", gallery: ["https://i.pinimg.com/1200x/28/95/94/28959415856159f64b3a6f98073698b8.jpg"], history: { EN: "Udawalawe National Park is renowned for its large population of wild Asian elephants, which can be seen in herds of up to 50 or more. Created to provide a sanctuary for wild animals displaced by the construction of the Udawalawe Reservoir, the park's landscape of open plains and grasslands resembles an African savanna. It is one of the best places in the world to see wild elephants throughout the year. The nearby Elephant Transit Home cares for orphaned elephant calves.", SI: "අලි අභයභූමිය." }, shortStory: { EN: "Big gentle elephants.", SI: "අහිංසක යෝධයෝ." }, tips: [{ EN: "See the baby elephants.", SI: "අලි අනාථාගාරයට යන්න." }], hiddenEchoes: { EN: "A beautiful river.", SI: "වලවේ ගංගා මෝය." }, location: "Ratnapura", coordinates: { x: 64, y: 84 },
    nearbyAttractions: [
      { id: "yala", name: { EN: "Yala National Park", SI: "යාල ජාතික වනෝද්‍යානය" }, image: "https://i.pinimg.com/1200x/1f/61/a5/1f61a5f00d68b86b64e2dd496ba70d33.jpg" },
      { id: "bundala", name: { EN: "Bundala National Park", SI: "බූන්දල ජාතික වනෝද්‍යානය" }, image: "https://i.pinimg.com/1200x/8c/68/d3/8c68d38fe1b594fda91bcc42f6c43b97.jpg" },
      { id: "belihuloya", name: { EN: "Belihuloya", SI: "බෙලිහුල්ඔය" }, image: "https://i.pinimg.com/1200x/a3/b4/c5/a3b4c5d6e7f8g9h0i1j2.jpg" }
    ]
  },
  { id: "minneriya", name: { EN: "Minneriya", SI: "මින්නේරිය" }, category: "wildlife", image: "https://i.pinimg.com/1200x/38/12/a2/3812a200c26bee48e77332bc76ad368e.jpg", gallery: ["https://i.pinimg.com/1200x/38/12/a2/3812a200c26bee48e77332bc76ad368e.jpg"], history: { EN: "Minneriya National Park is famous for the 'Great Gathering', a spectacular natural phenomenon where hundreds of Asian elephants congregate around the Minneriya Tank during the dry season (August to September). This is the largest known meeting of Asian elephants in the world. The park's central feature is the ancient Minneriya Tank, built by King Mahasena in the 3rd century AD. It supports a wide variety of wildlife, including deer, sambar, and numerous bird species.", SI: "මහා අලි රංචුව." }, shortStory: { EN: "Many elephants together.", SI: "අලි එකමුතුව." }, tips: [{ EN: "Go in the afternoon.", SI: "සවස් කාලයේ යන්න." }], hiddenEchoes: { EN: "A big old lake wall.", SI: "මින්නේරිය වැව් බැම්ම." }, location: "Polonnaruwa", coordinates: { x: 58, y: 36 },
    nearbyAttractions: [
      { id: "vatadageya", name: { EN: "Vatadageya", SI: "වටදාගෙය" }, image: "https://i.pinimg.com/1200x/3e/16/a6/3e16a69f5a7a1aa1aa918ad765964902.jpg" },
      { id: "sigiriya", name: { EN: "Sigiriya", SI: "සීගිරිය" }, image: "https://i.pinimg.com/1200x/3a/e7/48/3ae7487f4e95b92ce2d3c10c5b1038e0.jpg" },
      { id: "dambulla", name: { EN: "Dambulla Cave Temple", SI: "දඹුලු ලෙන් විහාරය" }, image: "https://i.pinimg.com/1200x/ca/96/d8/ca96d8e009f8ad50128891ce45b59c9d.jpg" }
    ]
  },
  { id: "wilpattu", name: { EN: "Wilpattu", SI: "විල්පත්තුව" }, category: "wildlife", image: "https://i.pinimg.com/736x/f6/51/77/f65177d61ea209acea5c455e00246b7b.jpg", gallery: ["https://i.pinimg.com/736x/f6/51/77/f65177d61ea209acea5c455e00246b7b.jpg"], history: { EN: "Wilpattu National Park is the largest and one of the oldest national parks in Sri Lanka. It is unique for its 'Willus'—natural, sand-rimmed water basins or depressions that fill with rainwater. The park is world-renowned for its leopard population and sloth bears. Its dense dry zone forest and open grassy plains provide a habitat for a wide variety of wildlife. The park also has historical significance, with ruins of ancient palaces and legends linking it to the arrival of Prince Vijaya.", SI: "විල් පිරි වනෝද්‍යානය." }, shortStory: { EN: "Natural lakes.", SI: "ස්වභාවික විල්." }, tips: [{ EN: "Go for a full day trip.", SI: "දවස පුරා සෆාරි." }], hiddenEchoes: { EN: "Copper colored sand.", SI: "තඹ වන් වැලි." }, location: "Anuradhapura", coordinates: { x: 34, y: 22 },
    nearbyAttractions: [
      { id: "ruwanwelisaya", name: { EN: "Ruwanwelisaya", SI: "රුවන්වැලිසෑය" }, image: "https://i.pinimg.com/1200x/e6/c4/67/e6c467b97e6ff3c8344d25e2b107b50e.jpg" },

      { id: "mihintale", name: { EN: "Mihintale", SI: "මිහින්තලේ" }, image: "https://i.pinimg.com/1200x/4b/ce/e7/4bcee74e0567cf2c845621fa93db5905.jpg" }
    ]
  },
  { id: "kumana", name: { EN: "Kumana", SI: "කුමන" }, category: "wildlife", image: "https://i.pinimg.com/736x/71/50/16/71501668218b3602ac732a426f397666.jpg", gallery: ["https://i.pinimg.com/736x/71/50/16/71501668218b3602ac732a426f397666.jpg"], history: { EN: "Kumana National Park, formerly known as Yala East, is renowned for its avifauna, particularly its large flocks of migratory waterfowl and wading birds. The park's 200-hectare Kumana Villu mangrove swamp is a critical nesting ground for painted storks, pelicans, spoonbills, and ibises. Apart from birds, the park is home to leopards, elephants, and turtles. It is also a significant route for the annual 'Pada Yatra' pilgrimage to Kataragama.", SI: "කුරුලු පාරාදීසය." }, shortStory: { EN: "Wetland wildlife.", SI: "තෙත් බිම් වනජීවී." }, tips: [{ EN: "Bring your binoculars.", SI: "දුරදක්නයක් රැගෙන එන්න." }], hiddenEchoes: { EN: "Mangrove forests.", SI: "කඩොලාන වනාන්තර." }, location: "Ampara", coordinates: { x: 84, y: 82 },
    nearbyAttractions: [
      { id: "arugambay", name: { EN: "Arugam Bay", SI: "ආරුගම්බේ" }, image: "https://i.pinimg.com/1200x/51/b0/d8/51b0d8fdddaf927052ffe51ab54b65f9.jpg" },
      { id: "yala", name: { EN: "Yala National Park", SI: "යාල ජාතික වනෝද්‍යානය" }, image: "https://i.pinimg.com/1200x/1f/61/a5/1f61a5f00d68b86b64e2dd496ba70d33.jpg" },
      { id: "pasikudah", name: { EN: "Pasikudah Beach", SI: "පාසිකුඩා වෙරළ" }, image: "https://i.pinimg.com/1200x/02/4f/c9/024fc9b932d7565de43b861d11a58ef9.jpg" }
    ]
  },
  { id: "bundala", name: { EN: "Bundala", SI: "බූන්දල" }, category: "wildlife", image: "https://i.pinimg.com/1200x/8c/68/d3/8c68d38fe1b594fda91bcc42f6c43b97.jpg", gallery: ["https://i.pinimg.com/1200x/8c/68/d3/8c68d38fe1b594fda91bcc42f6c43b97.jpg"], history: { EN: "Bundala National Park is an internationally important wintering ground for migratory waterbirds in Sri Lanka. It was the first wetland to be declared a Ramsar site in the country and a UNESCO Man and Biosphere Reserve. The park is famous for its large flocks of Greater Flamingos that migrate here. Its diverse landscape includes lagoons, dunes, and scrub jungle, hosting elephants, crocodiles, and five species of marine turtles.", SI: "ෆ්ලෙමින්ගෝ පක්ෂීන්." }, shortStory: { EN: "The Pink Coast.", SI: "රෝස වෙරළ." }, tips: [{ EN: "See the salt pans.", SI: "ලුණු ලේවායන් බලන්න." }], hiddenEchoes: { EN: "Paths for birds.", SI: "සංචාරක පක්ෂි මග." }, location: "Hambantota", coordinates: { x: 70, y: 92 },
    nearbyAttractions: [
      { id: "yala", name: { EN: "Yala National Park", SI: "යාල ජාතික වනෝද්‍යානය" }, image: "https://i.pinimg.com/1200x/1f/61/a5/1f61a5f00d68b86b64e2dd496ba70d33.jpg" },

      { id: "udawalawe", name: { EN: "Udawalawe National Park", SI: "උඩවලව ජාතික වනෝද්‍යානය" }, image: "https://i.pinimg.com/1200x/28/95/94/28959415856159f64b3a6f98073698b8.jpg" }
    ]
  },
  { id: "sinharaja", name: { EN: "Sinharaja", SI: "සිංහරාජය" }, category: "wildlife", image: "https://i.pinimg.com/1200x/85/a0/62/85a06272c31ffa951d64c4fa7437ee63.jpg", gallery: ["https://i.pinimg.com/1200x/85/a0/62/85a06272c31ffa951d64c4fa7437ee63.jpg"], history: { EN: `
<div className="space-y-8">
  <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100/50">
    <h3 className="text-xl font-semibold text-emerald-900 mb-4 flex items-center gap-2">
      <span className="text-emerald-600">📍</span> Location & Geography
    </h3>
    <ul className="space-y-3 text-emerald-800/80">
      <li className="flex items-start gap-3">
        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
        <p><strong className="text-emerald-900">Province:</strong> Sabaragamuwa Province and Southern Province, Sri Lanka</p>
      </li>
      <li className="flex items-start gap-3">
        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
        <p><strong className="text-emerald-900">Zone:</strong> South-west lowland wet zone</p>
      </li>
      <li className="flex items-start gap-3">
        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
        <p><strong className="text-emerald-900">Distance from Colombo:</strong> Approximately 90 km southeast — about 3 to 3.5 hours by road via Ratnapura, or 172 km via the Southern Expressway</p>
      </li>
      <li className="flex items-start gap-3">
        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
        <p><strong className="text-emerald-900">Nearest towns:</strong> Kudawa village (northwest entrance), Deniyaya (southeast entrance)</p>
      </li>
    </ul>
  </div>

  <div className="space-y-4">
    <h3 className="text-2xl font-bold text-gray-900">What is Sinharaja?</h3>
    <p className="text-gray-600 leading-relaxed">
      Sinharaja Forest Reserve is a forest reserve and a biodiversity hotspot in Sri Lanka. It is of international significance and has been designated a Biosphere Reserve and World Heritage Site by UNESCO. According to the International Union for Conservation of Nature (IUCN), Sinharaja is the country's last viable area of primary tropical rainforest.
    </p>
    <p className="text-gray-600 leading-relaxed">
      Encompassing the last extensive patch of primary lowland rainforest in Sri Lanka, Sinharaja Forest Reserve is situated in the south-west lowland wet zone of Sri Lanka. Covering an area of 8,864 ha and ranging from an altitude of 300 to 1,170 meters, it consists of 6,092 ha of Forest Reserve and 2,772 ha of Proposed Forest Reserve. This narrow strip of undulating terrain encompasses a series of ridges and valleys that are crisscrossed by an intricate network of streams.
    </p>
    <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
      <p className="text-amber-800 text-sm">
        <strong className="font-semibold">Name meaning:</strong> The word Sinharaja means lion — සිංහ/சிங்கம் sinha — king or kingdom — රාජ/ராஜා raja. <br/>
        ⭐ <strong className="font-semibold">LEGEND:</strong> A popular folk legend has it that a legendary lion lived in this protected forest. This is a traditional story with no scientific or historical basis.
      </p>
    </div>
  </div>

  <div className="space-y-4">
    <h3 className="text-2xl font-bold text-gray-900">Full History</h3>
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
        <h4 className="font-semibold text-gray-900 mb-2">Ancient Geological Origin</h4>
        <p className="text-sm text-gray-600">The rainforest likely formed during the Jurassic period, from 200 million years to 145 million years ago. The plant families and ecological patterns found in Sinharaja today trace their lineage back many millions of years, making this forest one of the most ancient living ecosystems on earth.</p>
      </div>
      <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
        <h4 className="font-semibold text-gray-900 mb-2">First Official Recognition (1875)</h4>
        <p className="text-sm text-gray-600">Most of the area of Sinharaja forest was originally declared a forest reserve under the Waste Lands Ordinance in 1875. This was a British colonial administrative measure that gave the forest its first legal protection.</p>
      </div>
      <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
        <h4 className="font-semibold text-gray-900 mb-2">UNESCO World Heritage Site (1988)</h4>
        <p className="text-sm text-gray-600">In December 1988, the Sinharaja Biosphere Reserve became Sri Lanka's first natural site to be added to the UNESCO World Heritage list, recognised as an outstanding repository of biodiversity found nowhere else on earth.</p>
      </div>
      <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
        <h4 className="font-semibold text-gray-900 mb-2">Conservation Concerns</h4>
        <p className="text-sm text-gray-600">IUCN's Conservation Outlook Assessment rates the conservation status of Sinharaja as being of "significant concern" due to agricultural expansion, fragmentation, and illegal collection of rare species.</p>
      </div>
    </div>
  </div>

  <div className="space-y-4">
    <h3 className="text-2xl font-bold text-gray-900">Flora & Fauna</h3>
    <div className="space-y-6">
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-2">Plant Life</h4>
        <p className="text-gray-600 leading-relaxed mb-3">
          More than 60% of the trees are endemic and many of them are considered rare. Of Sri Lanka's 217 endemic wet lowland trees and woody climbers, 139 (64%) have been recorded in Sinharaja. Dominant tree families include Dipterocarpaceae and Shorea (Hora).
        </p>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-2">Birds & The Mixed Species Bird Flock</h4>
        <p className="text-gray-600 leading-relaxed mb-3">
          Faunal endemism is particularly high for birds with 19 (95%) of 20 species recorded in the property being endemic to Sri Lanka. Sinharaja Forest is the best place to watch mixed species bird flocks. These flocks regularly contain 30 to 50 birds of 10 to 15 different species moving rapidly through the forest simultaneously.
        </p>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-2">Mammals, Reptiles & Amphibians</h4>
        <p className="text-gray-600 leading-relaxed">
          There are 39 mammals in Sinharaja (8 endemic), including the elusive Sri Lanka Leopard, Purple-Faced Langur, and Rusty-Spotted Cat. The forest also hosts 72 reptile species (21 endemic) like the Sri Lanka green pit viper, and 20 amphibian species (10 endemic).
        </p>
      </div>
    </div>
  </div>

  <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100/50">
    <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center gap-2">
      <span className="text-blue-600">🥾</span> Practical Information
    </h3>
    <div className="grid gap-6 md:grid-cols-2">
      <div>
        <h4 className="font-semibold text-blue-900 mb-2">Entrances</h4>
        <ul className="space-y-2 text-sm text-blue-800/80">
          <li>• <strong className="font-medium">Kudawa (North-west):</strong> Most popular for day visitors and birders.</li>
          <li>• <strong className="font-medium">Deniyaya (South-east):</strong> Access to higher elevations, good for multi-day treks.</li>
          <li>• <strong className="font-medium">Neluwa (South-west):</strong> Less visited but excellent for specific species.</li>
          <li>• <strong className="font-medium">Rakwana (North-east):</strong> Highest entrance, occasional elephant sightings.</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-blue-900 mb-2">Entry & Regulations</h4>
        <ul className="space-y-2 text-sm text-blue-800/80">
          <li>• <strong className="font-medium">Entry Fee:</strong> ~700-800 LKR for foreign adults.</li>
          <li>• <strong className="font-medium">Compulsory Guide:</strong> All visitors MUST be accompanied by a licensed guide. Guide fee is separate (~2,000-3,000 LKR per half-day).</li>
          <li>• <strong className="font-medium">Hours:</strong> Daily from ~6:30 AM to 5:00 PM.</li>
        </ul>
      </div>
    </div>
  </div>

  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">Essential Tips</h3>
    <ul className="space-y-3 text-sm text-gray-600">
      <li className="flex items-start gap-3">
        <span className="text-gray-400 mt-0.5">1.</span>
        <p><strong className="text-gray-900">Prepare for leeches:</strong> Wear long trousers tucked tightly into thick socks. Apply a repellent of salt solution or tobacco juice. Carry salt to detach them.</p>
      </li>
      <li className="flex items-start gap-3">
        <span className="text-gray-400 mt-0.5">2.</span>
        <p><strong className="text-gray-900">Wear dark colours:</strong> Bright clothing disturbs wildlife. Dark greens, browns, and blacks are ideal.</p>
      </li>
      <li className="flex items-start gap-3">
        <span className="text-gray-400 mt-0.5">3.</span>
        <p><strong className="text-gray-900">Arrive at dawn:</strong> The bird wave flocks are most active in the first two hours after sunrise. Arrive at 6:30 AM when gates open.</p>
      </li>
      <li className="flex items-start gap-3">
        <span className="text-gray-400 mt-0.5">4.</span>
        <p><strong className="text-gray-900">Waterproof everything:</strong> The forest is damp and sudden rain can occur anytime. Keep electronics in waterproof bags.</p>
      </li>
      <li className="flex items-start gap-3">
        <span className="text-gray-400 mt-0.5">5.</span>
        <p><strong className="text-gray-900">Do not remove anything:</strong> Collecting plants, animals, or any biological material is illegal and violates conservation regulations.</p>
      </li>
    </ul>
  </div>
</div>
`, SI: "නොඉඳුල් වැසි වනාන්තරය." }, shortStory: { EN: "A world heritage site.", SI: "ලෝක උරුමයක්." }, tips: [{ EN: "Wear long socks for bugs.", SI: "කූඩැල්ලන්ගෙන් ආරක්ෂා වන්න." }], hiddenEchoes: { EN: "Many rare birds.", SI: "ආවේණික පක්ෂි රංචු." }, location: "Ratnapura", coordinates: { x: 44, y: 80 },
    nearbyAttractions: [
      { id: "galle-fort", name: { EN: "Galle Fort", SI: "ගාල්ල කොටුව" }, image: "https://i.pinimg.com/1200x/fa/56/b6/fa56b632b66edcf9c5ee396a4930278c.jpg" },
      { id: "unawatuna", name: { EN: "Unawatuna Beach", SI: "උණවටුන වෙරළ" }, image: "https://i.pinimg.com/736x/09/4c/77/094c771bcf9d20988d5cb0bd21e91487.jpg" },
      { id: "bopathella", name: { EN: "Bopath Ella", SI: "බෝපත් ඇල්ල" }, image: "https://i.pinimg.com/736x/bd/ba/05/bdba05c1bd88ef141866a2b37f2d2ebf.jpg" }
    ]
  },
  { id: "horton", name: { EN: "Horton Plains", SI: "හෝර්ටන් තැන්න" }, category: "wildlife", image: "https://i.pinimg.com/736x/dc/0f/bb/dc0fbbb8b94e6038509e4b79a53c2f58.jpg", gallery: ["https://i.pinimg.com/736x/dc/0f/bb/dc0fbbb8b94e6038509e4b79a53c2f58.jpg"], history: { EN: "Horton Plains National Park is a protected area in the central highlands of Sri Lanka and is covered by montane grassland and cloud forest. This plateau at an altitude of 2,100–2,300 meters is rich in biodiversity and many species found here are endemic to the region. The park's most famous feature is 'World's End', a sheer precipice with a 870m drop. It is also the headwaters of three major Sri Lankan rivers: the Mahaweli, Kelani, and Walawe.", SI: "කඳුකර තැන්න." }, shortStory: { EN: "World's End.", SI: "ලෝකාන්තය." }, tips: [{ EN: "Start early at 5 AM.", SI: "පාන්දර 5 ට ආරම්භ කරන්න." }], hiddenEchoes: { EN: "A beautiful waterfall.", SI: "බේකර්ස් ඇල්ල." }, location: "Nuwara Eliya", coordinates: { x: 62, y: 72 },
    nearbyAttractions: [
      { id: "nuwaraeliya", name: { EN: "Nuwara Eliya", SI: "නුවරඑළිය" }, image: "https://i.pinimg.com/1200x/47/cc/a0/47cca06e7d0433c00f458f87621f939b.jpg" },
      { id: "ella", name: { EN: "Ella", SI: "ඇල්ල" }, image: "https://i.pinimg.com/736x/19/c4/ca/19c4ca9cac03989b7a94bbe48beb166d.jpg" },
      { id: "adam'speak", name: { EN: "Adam's Peak", SI: "ශ්‍රී පාදය" }, image: "https://i.pinimg.com/736x/4f/ca/f7/4fcaf7f3fa7753f8d381557712fe023c.jpg" }
    ]
  },



  // --- MOUNTAINS / HILLS (10) ---
  { id: "ella", name: { EN: "Ella", SI: "ඇල්ල" }, category: "mountains", image: "https://i.pinimg.com/736x/19/c4/ca/19c4ca9cac03989b7a94bbe48beb166d.jpg", gallery: ["https://i.pinimg.com/736x/19/c4/ca/19c4ca9cac03989b7a94bbe48beb166d.jpg"], history: { EN: "Ella is a small town in the Badulla District of Uva Province, governed by an Urban Council. It is approximately 200 kilometres east of Colombo and is situated at an elevation of 1,041 metres above sea level. The area has a rich bio-diversity, dense with numerous varieties of flora and fauna. Ella is surrounded by hills covered with cloud forests and tea plantations. The town has a cooler climate than surrounding lowlands, due to its elevation. The Ella Gap allows views across the southern plains of Sri Lanka.", SI: "කඳුකර නිම්න ගම්මානය." }, shortStory: { EN: "A village in the clouds.", SI: "වලාකුළු ගම්මානය." }, tips: [{ EN: "See the Nine Arch Bridge.", SI: "ආරුක්කු නවය පාලමට යන්න." }], hiddenEchoes: { EN: "Old caves to see.", SI: "රාවණා ගුහාව." }, location: "Badulla", coordinates: { x: 68, y: 68 },
    nearbyAttractions: [
      { id: "ravanafalls", name: { EN: "Ravana Falls", SI: "රාවණා ඇල්ල" }, image: "https://i.pinimg.com/1200x/e5/cf/c0/e5cfc05e4ebb57cf741b8dcf0677a269.jpg" },
      { id: "diyaluma", name: { EN: "Diyaluma Falls", SI: "දියලුම ඇල්ල" }, image: "https://i.pinimg.com/736x/2c/6a/50/2c6a5022d41b3ee3a686ead9141d04f8.jpg" },
      { id: "nuwaraeliya", name: { EN: "Nuwara Eliya", SI: "නුවරඑළිය" }, image: "https://i.pinimg.com/1200x/47/cc/a0/47cca06e7d0433c00f458f87621f939b.jpg" }
    ]
  },
  { id: "nuwaraeliya", name: { EN: "Nuwara Eliya", SI: "නුවරඑළිය" }, category: "mountains", image: "https://i.pinimg.com/1200x/47/cc/a0/47cca06e7d0433c00f458f87621f939b.jpg", gallery: ["https://i.pinimg.com/1200x/47/cc/a0/47cca06e7d0433c00f458f87621f939b.jpg"], history: { EN: "Nuwara Eliya is a city in the hill country of the Central Province, Sri Lanka. Its name means 'city on the plain (table land)' or 'city of light'. The city is the administrative capital of Nuwara Eliya District, with a picturesque landscape and temperate climate. It is at an altitude of 1,868 m (6,128 ft) and is considered to be the most important location for tea production in Sri Lanka. The city is overlooked by Pidurutalagala, the tallest mountain in Sri Lanka. Nuwara Eliya is known for its temperate, cool climate – the coolest area in Sri Lanka.", SI: "පුංචි එංගලන්තය." }, shortStory: { EN: "A misty town.", SI: "මීදුම් පිරි හදවත." }, tips: [{ EN: "Drink fresh hot tea.", SI: "නැවුම් තේ රස බලන්න." }], hiddenEchoes: { EN: "A beautiful lake.", SI: "ග්‍රෙගරි වැව." }, location: "Nuwara Eliya", coordinates: { x: 60, y: 64 },
    nearbyAttractions: [
      { id: "horton", name: { EN: "Horton Plains", SI: "හෝර්ටන් තැන්න" }, image: "https://i.pinimg.com/736x/dc/0f/bb/dc0fbbb8b94e6038509e4b79a53c2f58.jpg" },
      { id: "ella", name: { EN: "Ella", SI: "ඇල්ල" }, image: "https://i.pinimg.com/736x/19/c4/ca/19c4ca9cac03989b7a94bbe48beb166d.jpg" }
    ]
  },
  { id: "adam'speak", name: { EN: "Adam's Peak", SI: "ශ්‍රී පාදය" }, category: "mountains", image: "https://i.pinimg.com/736x/4f/ca/f7/4fcaf7f3fa7753f8d381557712fe023c.jpg", gallery: ["https://i.pinimg.com/736x/4f/ca/f7/4fcaf7f3fa7753f8d381557712fe023c.jpg"], history: { EN: "Adam's Peak is a 2,243 m (7,359 ft) tall conical mountain located in central Sri Lanka. It is well known for the Sri Pada, i.e., 'sacred footprint', a 1.8 m (5 ft 11 in) rock formation near the summit, which in Buddhist tradition is held to be the footprint of the Buddha, in Hindu tradition that of Hanuman or Shiva and in some Islamic and Christian traditions that of Adam, or that of St. Thomas.", SI: "පූජනීය ශ්‍රී පාද පියුම." }, shortStory: { EN: "A holy mountain peak.", SI: "සදාකාලික කඳු මුදුන." }, tips: [{ EN: "Start climbing at midnight.", SI: "මධ්‍යම රාත්‍රියේ අරඹන්න." }], hiddenEchoes: { EN: "A shadow at sunrise.", SI: "හිරු උදාවේ සෙවණැල්ල." }, location: "Ratnapura", coordinates: { x: 54, y: 70 },
    nearbyAttractions: [
      { id: "kitulgala", name: { EN: "Kitulgala", SI: "කිතුල්ගල" }, image: "https://i.pinimg.com/1200x/4e/29/29/4e2929ee8842aac82e8cbb66db6dc9b9.jpg" },
      { id: "laxapana", name: { EN: "Laxapana Falls", SI: "ලක්ෂපාන ඇල්ල" }, image: "https://i.pinimg.com/1200x/a8/fe/54/a8fe54d30c1b388e746b74f2e31c1329.jpg" }
    ]
  },
  { id: "knuckles", name: { EN: "Knuckles", SI: "නකල්ස්" }, category: "mountains", image: "https://i.pinimg.com/1200x/59/90/2a/59902a787d6a8c484b8d014234ef36d4.jpg", gallery: ["https://i.pinimg.com/1200x/59/90/2a/59902a787d6a8c484b8d014234ef36d4.jpg"], history: { EN: "The Knuckles Mountain Range lies in central Sri Lanka, in the Districts of Matale and Kandy. The range takes its name from a series of recumbent folds and peaks in the west of the massif which resemble the knuckles of clenched fist when viewed from certain locations in the Kandy District. Whilst this name was assigned by early British surveyors, the Sinhalese residents have traditionally referred to the area as Dumbara Kanduvetiya meaning Mist-laden Mountain Range.", SI: "දුෂ්කර කඳු පන්තිය." }, shortStory: { EN: "Old wild hills.", SI: "පුරාණ කඳුකරය." }, tips: [{ EN: "You must have a guide.", SI: "මඟපෙන්වන්නෙකු අවශ්‍යයි." }], hiddenEchoes: { EN: "A very old village.", SI: "මීමුරේ ගම්මානය." }, location: "Kandy", coordinates: { x: 62, y: 44 },
    nearbyAttractions: [
      { id: "meemure", name: { EN: "Meemure", SI: "මීමුරේ" }, image: "https://i.pinimg.com/1200x/ba/07/ee/ba07ee618d2e4a8f1146754ae8ae8710.jpg" },
      { id: "riverston", name: { EN: "Riverston", SI: "රිවර්ස්ටන්" }, image: "https://i.pinimg.com/736x/a8/72/64/a872646bb1a038b1580e1096651bb288.jpg" },
      { id: "kandy-temple", name: { EN: "Temple of the Tooth", SI: "දළදා මාළිගාව" }, image: "https://i.pinimg.com/1200x/b6/4b/ca/b64bcaaf16fc3356cee1b56c84ebfd8f.jpg" }
    ]
  },
  { id: "haputale", name: { EN: "Haputale", SI: "හපුතලේ" }, category: "mountains", image: "https://i.pinimg.com/1200x/c3/bc/5e/c3bc5e159f35130bcad02b0ee7b0f91f.jpg", gallery: ["https://i.pinimg.com/1200x/c3/bc/5e/c3bc5e159f35130bcad02b0ee7b0f91f.jpg"], history: { EN: "Haputale is a town of Badulla District in the Uva Province, Sri Lanka, governed by an Urban Council. The elevation is 1431 m (4695 ft) above the sea level. The area has a rich bio-diversity dense with numerous varieties of flora and fauna. Haputale is surrounded by hills covered with cloud forests and tea plantations. The town has a cooler climate than its surroundings, due to its elevation. The Haputale pass allows views across the Southern plains of Sri Lanka.", SI: "අහසේ තේ උයන්." }, shortStory: { EN: "The edge of the sky.", SI: "අහසේ මායිම." }, tips: [{ EN: "Go to Lipton's Seat.", SI: "ලිප්ටන් සීට් වෙත යන්න." }], hiddenEchoes: { EN: "A beautiful old house.", SI: "ඇඩිෂම් බංගලාව." }, location: "Badulla", coordinates: { x: 64, y: 70 },
    nearbyAttractions: [
      { id: "diyaluma", name: { EN: "Diyaluma Falls", SI: "දියලුම ඇල්ල" }, image: "https://i.pinimg.com/736x/2c/6a/50/2c6a5022d41b3ee3a686ead9141d04f8.jpg" },
      { id: "ella", name: { EN: "Ella", SI: "ඇල්ල" }, image: "https://i.pinimg.com/736x/19/c4/ca/19c4ca9cac03989b7a94bbe48beb166d.jpg" }
    ]
  },
  { id: "pidurangala", name: { EN: "Pidurangala", SI: "පිදුරංගල" }, category: "mountains", image: "https://i.pinimg.com/736x/b5/d0/f7/b5d0f760425e71a84e69d7c9b45f3821.jpg", gallery: ["https://i.pinimg.com/1200x/3a/e7/48/3ae7487f4e95b92ce2d3c10c5b1038e0.jpg", "https://i.pinimg.com/736x/b5/d0/f7/b5d0f760425e71a84e69d7c9b45f3821.jpg"], history: { EN: "Pidurangala is a massive rock formation located a few kilometers north of Sigiriya. It has an interesting history closely related to the Sigiriya Rock Fortress. Being less difficult to climb than Sigiriya, Pidurangala is often overlooked by tourists, but offers a arguably better view of Sigiriya itself. Pidurangala Vihara is an ancient Buddhist temple situated in Pidurangala village of Matale District, Sri Lanka. The temple was constructed on a massive rock called Pidurangala, which is located a few kilometers north of the historical fort Sigiriya.", SI: "භික්ෂූන්ගේ වාසස්ථානය." }, shortStory: { EN: "The best view around.", SI: "හොඳම දර්ශනපථය." }, tips: [{ EN: "Bring a light for your head.", SI: "විදුලි පන්දමක් ගන්න." }], hiddenEchoes: { EN: "A big sleeping Buddha statue.", SI: "සැතපෙන බුදු පිළිමය." }, location: "Matale", coordinates: { x: 53, y: 37 },
    nearbyAttractions: [
      { id: "sigiriya", name: { EN: "Sigiriya", SI: "සීගිරිය" }, image: "https://i.pinimg.com/1200x/3a/e7/48/3ae7487f4e95b92ce2d3c10c5b1038e0.jpg" },
      { id: "dambulla", name: { EN: "Dambulla Cave Temple", SI: "දඹුලු ලෙන් විහාරය" }, image: "https://i.pinimg.com/1200x/ca/96/d8/ca96d8e009f8ad50128891ce45b59c9d.jpg" },
      { id: "minneriya", name: { EN: "Minneriya National Park", SI: "මින්නේරිය ජාතික වනෝද්‍යානය" }, image: "https://i.pinimg.com/1200x/38/12/a2/3812a200c26bee48e77332bc76ad368e.jpg" }
    ]
  },
  { id: "riverston", name: { EN: "Riverston", SI: "රිවර්ස්ටන්" }, category: "mountains", image: "https://i.pinimg.com/736x/a8/72/64/a872646bb1a038b1580e1096651bb288.jpg", gallery: ["https://i.pinimg.com/1200x/d2/e3/f4/d2e3f4g5h6i7j8k9l0m1.jpg", "https://i.pinimg.com/736x/a8/72/64/a872646bb1a038b1580e1096651bb288.jpg"], history: { EN: "Riverston is a peak in the Knuckles Mountain Range located in Matale District, Central Province, Sri Lanka. It is one of the most popular hill stations in the country. The peak is located about 30 km from the Matale town. It is known for its strong winds and the beautiful view of the surrounding mountains. The area is also home to a number of endemic species of flora and fauna.", SI: "සුළං සහිත කඳු මුදුන්." }, shortStory: { EN: "A small World's End.", SI: "පුංචි ලෝකාන්තය." }, tips: [{ EN: "It is very windy. Wear warm clothes.", SI: "දැඩි සුළඟ, උණුසුම් වන්න." }], hiddenEchoes: { EN: "A beautiful waterfall nearby.", SI: "සේරා ඇල්ල." }, location: "Matale", coordinates: { x: 58, y: 46 },
    nearbyAttractions: [
      { id: "knuckles", name: { EN: "Knuckles Mountain Range", SI: "නකල්ස් කඳු පන්තිය" }, image: "https://i.pinimg.com/1200x/59/90/2a/59902a787d6a8c484b8d014234ef36d4.jpg" },

      { id: "sigiriya", name: { EN: "Sigiriya", SI: "සීගිරිය" }, image: "https://i.pinimg.com/1200x/3a/e7/48/3ae7487f4e95b92ce2d3c10c5b1038e0.jpg" }
    ]
  },

  // --- WATERFALLS (10) ---
  { id: "diyaluma", name: { EN: "Diyaluma", SI: "දියලුම" }, category: "waterfalls", image: "https://i.pinimg.com/736x/2c/6a/50/2c6a5022d41b3ee3a686ead9141d04f8.jpg", gallery: ["https://i.pinimg.com/736x/2c/6a/50/2c6a5022d41b3ee3a686ead9141d04f8.jpg"], history: { EN: "Diyaluma Falls is 220 m (720 ft) high and the second highest waterfall in Sri Lanka and 361st highest waterfall in the world. It is situated 6 km away from Koslanda in Badulla District on Colombo-Badulla highway. The Falls are formed by Punagala Oya, a tributary of Kuda Oya which in turn, is a tributary of Kirindi Oya.", SI: "ඛේදජනක ප්‍රේම කතාවේ ඇල්ල." }, shortStory: { EN: "A beautiful water veil.", SI: "දිය සළුව." }, tips: [{ EN: "Walk to the top of the falls.", SI: "මුදුනට ඇවිදින්න." }], hiddenEchoes: { EN: "Natural pools at the top.", SI: "ස්වභාවික තටාක." }, location: "Badulla", coordinates: { x: 66, y: 74 },
    nearbyAttractions: [
      { id: "ella", name: { EN: "Ella", SI: "ඇල්ල" }, image: "https://i.pinimg.com/736x/19/c4/ca/19c4ca9cac03989b7a94bbe48beb166d.jpg" },
      { id: "haputale", name: { EN: "Haputale", SI: "හපුතලේ" }, image: "https://i.pinimg.com/1200x/c3/bc/5e/c3bc5e159f35130bcad02b0ee7b0f91f.jpg" },
      { id: "buduruwagala", name: { EN: "Buduruwagala", SI: "බුදුරුවගල" }, image: "https://i.pinimg.com/1200x/7d/ce/23/7dce235eedb24bdcbd5ece2ef2836fd8.jpg" }
    ]
  },
  { id: "bambarakanda", name: { EN: "Bambarakanda", SI: "බඹරකන්ද" }, category: "waterfalls", image: "https://i.pinimg.com/736x/2c/90/80/2c908064d4b0d03c0051128438b872dd.jpg", gallery: ["https://i.pinimg.com/736x/2c/90/80/2c908064d4b0d03c0051128438b872dd.jpg"], history: { EN: "Bambarakanda Falls is the tallest waterfall in Sri Lanka. With a height of 263 m (863 ft), it ranks as the 299th highest waterfall in the world. Situated in Kalupahana in the Badulla District, this waterfall is directly visible from the A4 Highway. The waterfall was formed by Kuda Oya, which is a branch of the Walawe River. The Bambarakanda Falls can be found in a forest of pine trees.", SI: "ලංකාවේ උසම දිය ඇල්ල." }, shortStory: { EN: "A very high waterfall.", SI: "මුදුනේ දිය දහර." }, tips: [{ EN: "It looks best after it rains.", SI: "වැස්සෙන් පසු අලංකාරයි." }], hiddenEchoes: { EN: "A path through pine trees.", SI: "පයින් වනාන්තර මග." }, location: "Badulla", coordinates: { x: 62, y: 76 },
    nearbyAttractions: [
      { id: "belihuloya", name: { EN: "Belihuloya", SI: "බෙලිහුල්ඔය" }, image: "https://i.pinimg.com/1200x/a3/b4/c5/a3b4c5d6e7f8g9h0i1j2.jpg" },
      { id: "haputale", name: { EN: "Haputale", SI: "හපුතලේ" }, image: "https://i.pinimg.com/1200x/c3/bc/5e/c3bc5e159f35130bcad02b0ee7b0f91f.jpg" },
      { id: "horton", name: { EN: "Horton Plains", SI: "හෝර්ටන් තැන්න" }, image: "https://i.pinimg.com/736x/dc/0f/bb/dc0fbbb8b94e6038509e4b79a53c2f58.jpg" }
    ]
  },
  { id: "ravanafalls", name: { EN: "Ravana Falls", SI: "රාවණා ඇල්ල" }, category: "waterfalls", image: "https://i.pinimg.com/1200x/e5/cf/c0/e5cfc05e4ebb57cf741b8dcf0677a269.jpg", gallery: ["https://i.pinimg.com/1200x/e5/cf/c0/e5cfc05e4ebb57cf741b8dcf0677a269.jpg"], history: { EN: "Ravana Falls is a popular sightseeing attraction in Sri Lanka. It currently ranks as one of the widest falls in the country. This waterfall measures approximately 25 m (82 ft) in high and cascades from an oval-shaped concave rock outcrop. During the local wet season, the waterfall turns into what is said to resemble an areca flower with withering petals. The falls have been named after the legendary king Ravana, which is connected to the famous Indian epic, the Ramayana.", SI: "ගුහා සැඟවුණු තැන." }, shortStory: { EN: "The King's waterfall.", SI: "රජුගේ දිය ඇල්ල." }, tips: [{ EN: "Watch out for monkeys.", SI: "වඳුරන්ගෙන් ප්‍රවේශම් වන්න." }], hiddenEchoes: { EN: "A secret tunnel.", SI: "රහස් උමග." }, location: "Badulla", coordinates: { x: 68, y: 70 },
    nearbyAttractions: [
      { id: "ella", name: { EN: "Ella", SI: "ඇල්ල" }, image: "https://i.pinimg.com/736x/19/c4/ca/19c4ca9cac03989b7a94bbe48beb166d.jpg" },
      { id: "diyaluma", name: { EN: "Diyaluma Falls", SI: "දියලුම ඇල්ල" }, image: "https://i.pinimg.com/736x/2c/6a/50/2c6a5022d41b3ee3a686ead9141d04f8.jpg" }
    ]
  },
  { id: "dunhinda", name: { EN: "Dunhinda", SI: "දුන්හිඳ" }, category: "waterfalls", image: "https://i.pinimg.com/736x/91/0e/cf/910ecf8865df3a8d4ced56e2d3856562.jpg", gallery: ["https://i.pinimg.com/736x/91/0e/cf/910ecf8865df3a8d4ced56e2d3856562.jpg"], history: { EN: "Dunhinda Falls is a waterfall located about 5 kilometres (3.1 mi) from Badulla town in Sri Lanka. The waterfall, which is 64 metres (210 ft) high, gets its name from the smoky dew drops spray, (Dun in sinhala means mist or smoke) which surrounds the area at the foot of the waterfall. The waterfall is created by the river called Badulu Oya which goes through the Badulla town.", SI: "දුම් දමන දිය ඇල්ල." }, shortStory: { EN: "The mist maker.", SI: "මීදුම සාදන්නා." }, tips: [{ EN: "The path can be very slippery.", SI: "මග ලිස්සන සුළුයි." }], hiddenEchoes: { EN: "A smaller waterfall nearby.", SI: "කුඩා දුන්හිඳ." }, location: "Badulla", coordinates: { x: 72, y: 64 },
    nearbyAttractions: [
      { id: "ella", name: { EN: "Ella", SI: "ඇල්ල" }, image: "https://i.pinimg.com/736x/19/c4/ca/19c4ca9cac03989b7a94bbe48beb166d.jpg" },
      { id: "pasikudah", name: { EN: "Pasikudah Beach", SI: "පාසිකුඩා වෙරළ" }, image: "https://i.pinimg.com/1200x/02/4f/c9/024fc9b932d7565de43b861d11a58ef9.jpg" }
    ]
  },
  { id: "baker'sfalls", name: { EN: "Baker's Falls", SI: "බේකර්ස් ඇල්ල" }, category: "waterfalls", image: "https://i.pinimg.com/1200x/dd/42/d0/dd42d0c6e1682f11c854f199aaeaeb9b.jpg", gallery: ["https://i.pinimg.com/1200x/dd/42/d0/dd42d0c6e1682f11c854f199aaeaeb9b.jpg"], history: { EN: "Baker's Falls is a famous waterfall in Sri Lanka. It is located in the Horton Plains National Park, on a tributary of the Belihul Oya. The height of the Baker's waterfalls is 20 metres (66 ft). The waterfall was named after Sir Samuel Baker, who was a famous explorer. The waterfall is known for its beautiful surroundings and the cool climate.", SI: "හෝර්ටන් තැන්නේ මැණික." }, shortStory: { EN: "A very cold waterfall.", SI: "සීතල දිය ඇල්ල." }, tips: [{ EN: "It is very cold in the morning.", SI: "උදෑසනට අධික සීතලයි." }], hiddenEchoes: { EN: "An area with many ferns.", SI: "මීවන ශාක කලාපය." }, location: "Nuwara Eliya", coordinates: { x: 63, y: 73 },
    nearbyAttractions: [
      { id: "horton", name: { EN: "Horton Plains", SI: "හෝර්ටන් තැන්න" }, image: "https://i.pinimg.com/736x/dc/0f/bb/dc0fbbb8b94e6038509e4b79a53c2f58.jpg" },
      { id: "nuwaraeliya", name: { EN: "Nuwara Eliya", SI: "නුවරඑළිය" }, image: "https://i.pinimg.com/1200x/47/cc/a0/47cca06e7d0433c00f458f87621f939b.jpg" },
      { id: "ella", name: { EN: "Ella", SI: "ඇල්ල" }, image: "https://i.pinimg.com/736x/19/c4/ca/19c4ca9cac03989b7a94bbe48beb166d.jpg" }
    ]
  },
  { id: "stclair's", name: { EN: "St. Clair's", SI: "සෙන්ට් ක්ලෙයාර්" }, category: "waterfalls", image: "https://i.pinimg.com/1200x/74/c2/32/74c2320adae0d8151df278cc62d5b5be.jpg", gallery: ["https://i.pinimg.com/1200x/74/c2/32/74c2320adae0d8151df278cc62d5b5be.jpg"], history: { EN: "St. Clair's Falls is one of the widest waterfalls in Sri Lanka and is commonly known as the 'Little Niagara of Sri Lanka'. It is one of six waterfalls formed by the Kotmale Oya, a tributary of the Mahaweli River. The falls are located 3 km (1.9 mi) west of the town of Talawakele on the Hatton-Talawakele Highway in Nuwara Eliya District.", SI: "ලංකාවේ නයගරා." }, shortStory: { EN: "A wide waterfall.", SI: "පුළුල් දිය ඇල්ල." }, tips: [{ EN: "You can see it from the train.", SI: "දුම්රියෙන් නැරඹිය හැකිය." }], hiddenEchoes: { EN: "Old tea farms.", SI: "පැරණි තේ වතු." }, location: "Nuwara Eliya", coordinates: { x: 52, y: 64 },
    nearbyAttractions: [
      { id: "devonfalls", name: { EN: "Devon Falls", SI: "ඩෙවෝන් ඇල්ල" }, image: "https://i.pinimg.com/736x/dd/09/05/dd0905293bbaf9e3d7d3075fbc87a1a0.jpg" },
      { id: "nuwaraeliya", name: { EN: "Nuwara Eliya", SI: "නුවරඑළිය" }, image: "https://i.pinimg.com/1200x/47/cc/a0/47cca06e7d0433c00f458f87621f939b.jpg" }
    ]
  },
  { id: "devonfalls", name: { EN: "Devon Falls", SI: "ඩෙවෝන් ඇල්ල" }, category: "waterfalls", image: "https://i.pinimg.com/736x/dd/09/05/dd0905293bbaf9e3d7d3075fbc87a1a0.jpg", gallery: ["https://i.pinimg.com/736x/dd/09/05/dd0905293bbaf9e3d7d3075fbc87a1a0.jpg"], history: { EN: "Devon Falls is a waterfall in Sri Lanka, situated 6 km west of Talawakele, Nuwara Eliya District on the A7 highway. The falls is named after a pioneer English coffee planter called Devon, whose plantation was situated nearby the falls. The waterfall is 97 metres (318 ft) high and is the 19th highest in the country. The falls are formed by a tributary of Kothmale Oya, which is a tributary of Mahaweli River.", SI: "වැවිලිකරුවෙකුගේ නම." }, shortStory: { EN: "A beautiful waterfall.", SI: "සුවඳවත් දිය ඇල්ල." }, tips: [{ EN: "Drink tea at the castle nearby.", SI: "තේ කෝප්පයක් රස බලන්න." }], hiddenEchoes: { EN: "A view of the deep valley.", SI: "නිම්නයේ දර්ශනය." }, location: "Nuwara Eliya", coordinates: { x: 50, y: 64 },
    nearbyAttractions: [
      { id: "stclair's", name: { EN: "St. Clair's Falls", SI: "සෙන්ට් ක්ලෙයාර් ඇල්ල" }, image: "https://i.pinimg.com/1200x/74/c2/32/74c2320adae0d8151df278cc62d5b5be.jpg" },
      { id: "nuwaraeliya", name: { EN: "Nuwara Eliya", SI: "නුවරඑළිය" }, image: "https://i.pinimg.com/1200x/47/cc/a0/47cca06e7d0433c00f458f87621f939b.jpg" }
    ]
  },
  { id: "bopathella", name: { EN: "Bopath Ella", SI: "බෝපත් ඇල්ල" }, category: "waterfalls", image: "https://i.pinimg.com/736x/bd/ba/05/bdba05c1bd88ef141866a2b37f2d2ebf.jpg", gallery: ["https://i.pinimg.com/736x/bd/ba/05/bdba05c1bd88ef141866a2b37f2d2ebf.jpg"], history: { EN: "Bopath Ella is a waterfall situated in the Ratnapura District of Sri Lanka. It has a shape very similar to the leaf of the Sacred Fig or 'Bo' tree, which has earned it this name. The waterfall is a major tourist attraction in the country. The falls are formed by the Kuru Ganga, which is a tributary of the Kalu Ganga.", SI: "බෝ පතක හැඩය." }, shortStory: { EN: "A holy shape.", SI: "පූජනීය හැඩය." }, tips: [{ EN: "Good for a family trip.", SI: "විනෝද චාරිකා සඳහා සුදුසුයි." }], hiddenEchoes: { EN: "Old stories and myths.", SI: "පැරණි ජනප්‍රවාද." }, location: "Ratnapura", coordinates: { x: 42, y: 76 },
    nearbyAttractions: [
      { id: "sinharaja", name: { EN: "Sinharaja Rainforest", SI: "සිංහරාජ වැසි වනාන්තරය" }, image: "https://i.pinimg.com/1200x/85/a0/62/85a06272c31ffa951d64c4fa7437ee63.jpg" },
      { id: "udawalawe", name: { EN: "Udawalawe National Park", SI: "උඩවලව ජාතික වනෝද්‍යානය" }, image: "https://i.pinimg.com/1200x/28/95/94/28959415856159f64b3a6f98073698b8.jpg" },
      { id: "adam'speak", name: { EN: "Adam's Peak", SI: "ශ්‍රී පාදය" }, image: "https://i.pinimg.com/736x/4f/ca/f7/4fcaf7f3fa7753f8d381557712fe023c.jpg" }
    ]
  },
  { id: "laxapana", name: { EN: "Laxapana", SI: "ලක්ෂපාන" }, category: "waterfalls", image: "https://i.pinimg.com/1200x/a8/fe/54/a8fe54d30c1b388e746b74f2e31c1329.jpg", gallery: ["https://i.pinimg.com/1200x/a8/fe/54/a8fe54d30c1b388e746b74f2e31c1329.jpg"], history: { EN: "Laxapana Falls is 126 m (413 ft) high and the 8th highest waterfall in Sri Lanka and 625th highest waterfall in the world. It is situated in Maskeliya area in Nuwara Eliya District, about 16 km from Maskeliya town on Maskeliya-Norton Bridge road, in a village called Kiriwan Eliya. It is formed by Maskeliya Oya near the confluence of Kehelgamu Oya and Maskeliya Oya which forms Kelani River.", SI: "විදුලි බල උල්පත." }, shortStory: { EN: "The electric waterfall.", SI: "විදුලි දිය ඇල්ල." }, tips: [{ EN: "See the bridge nearby.", SI: "පාලම නරඹන්න." }], hiddenEchoes: { EN: "Tunnels under the ground.", SI: "භූගත උමං." }, location: "Nuwara Eliya", coordinates: { x: 48, y: 70 },
    nearbyAttractions: [
      { id: "aberdeen", name: { EN: "Aberdeen Falls", SI: "ඇබර්ඩීන් ඇල්ල" }, image: "https://i.pinimg.com/1200x/b3/c4/d5/b3c4d5e6f7g8h9i0j1k2.jpg" },
      { id: "adam'speak", name: { EN: "Adam's Peak", SI: "ශ්‍රී පාදය" }, image: "https://i.pinimg.com/736x/4f/ca/f7/4fcaf7f3fa7753f8d381557712fe023c.jpg" }
    ]
  },
  { id: "aberdeen", name: { EN: "Aberdeen", SI: "ඇබර්ඩීන් ඇල්ල" }, category: "waterfalls", image: "https://i.pinimg.com/1200x/b3/c4/d5/b3c4d5e6f7g8h9i0j1k2.jpg", gallery: ["https://i.pinimg.com/1200x/b3/c4/d5/b3c4d5e6f7g8h9i0j1k2.jpg"], history: { EN: "Aberdeen Falls is a 98 m (322 ft) high waterfall on the Kehelgamu Oya near Ginigathena, in the Nuwara Eliya District of Sri Lanka. Aberdeen is named after Aberdeen, the third largest city in Scotland and the capital of Aberdeenshire. The waterfall is ranked as the 18th highest in the Island.", SI: "ස්කොට්ලන්ත නම." }, shortStory: { EN: "Highland beauty.", SI: "කඳුකර අසිරිය." }, tips: [{ EN: "The walk is a bit hard.", SI: "ගමන මදක් දුෂ්කරයි." }], hiddenEchoes: { EN: "A deep pool at the bottom.", SI: "ගැඹුරු විල." }, location: "Nuwara Eliya", coordinates: { x: 46, y: 72 },
    nearbyAttractions: [
      { id: "laxapana", name: { EN: "Laxapana Falls", SI: "ලක්ෂපාන ඇල්ල" }, image: "https://i.pinimg.com/1200x/a8/fe/54/a8fe54d30c1b388e746b74f2e31c1329.jpg" },
      { id: "kitulgala", name: { EN: "Kitulgala", SI: "කිතුල්ගල" }, image: "https://i.pinimg.com/1200x/4e/29/29/4e2929ee8842aac82e8cbb66db6dc9b9.jpg" }
    ]
  },

  // --- CAMPING (10) ---
];

export const DESTINATIONS_DATA: Destination[] = BASE_DESTINATIONS.map(dest => ({
  ...dest,
  detailedAbout: ABOUT_DATA[dest.id] || { EN: "Deep archival narrative pending for this node.", SI: "මෙම ස්ථානය පිළිබඳ විස්තරය සකසමින් පවතී." },
  logistics: LOGISTICS_DATA[dest.id] || { EN: "Logistics data syncing...", SI: "ප්‍රවාහන දත්ත යාවත්කාලීන වෙමින් පවතී..." }
}));
