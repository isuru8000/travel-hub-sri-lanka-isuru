
import { Destination } from './types';
import { ABOUT_DATA, LOGISTICS_DATA } from './about_destinations';

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
      EN: "Explore Sigiriya Rock Fortress, the 'Eighth Wonder of the World'. Discover ancient frescoes, water gardens, and the history of King Kashyapa's sky palace.", 
      SI: "සීගිරි පර්වතය - ලෝකයේ අටවන පුදුමය. පුරාණ බිතුසිතුවම්, ජල උද්‍යාන සහ කාශ්‍යප රජුගේ අහස් මාලිගයේ ඉතිහාසය ගවේෂණය කරන්න." 
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
      EN: "Ruwanwelisaya Stupa - Ancient Anuradhapura's spiritual masterpiece. Discover the history and engineering of this iconic Buddhist monument.",
      SI: "රුවන්වැලිසෑය - අනුරාධපුරයේ පූජනීය මහා ස්තූපය. පුරාණ ඉංජිනේරු විද්‍යාව සහ බෞද්ධ උරුමය ගවේෂණය කරන්න."
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
      EN: "The Jaya Sri Maha Bodhi is the oldest living human-planted tree in the world, brought to Sri Lanka by Sanghamitta Theri in the 3rd century BC.",
      SI: "ලොව පැරණිතම මිනිසා විසින් රෝපණය කරන ලද වෘක්ෂයයි."
    },
    shortStory: { EN: "Jaya Sri Maha Bodhi - The world's oldest human-planted tree. Visit this sacred site in Anuradhapura, Sri Lanka.", SI: "ජය ශ්‍රී මහා බෝධිය - ලොව පැරණිතම මිනිසා විසින් රෝපණය කරන ලද වෘක්ෂය. අනුරාධපුරයේ පිහිටි මෙම පූජනීය ස්ථානය වන්දනා කරන්න." },
    tips: [{ EN: "Dress modestly.", SI: "සංවරව ඇඳුම් අඳින්න්න." }],
    hiddenEchoes: { EN: "It is the oldest human-planted tree in the world.", SI: "ලොව පැරණිතම මිනිසා විසින් රෝපණය කරන ලද වෘක්ෂයයි." },
    location: "Anuradhapura",
    coordinates: { x: 48, y: 19 },
    nearbyAttractions: []
  },
  {
    id: "vatadage",
    name: { EN: "Vatadage", SI: "වටදාගෙය" },
    category: "ancient",
    image: "https://i.pinimg.com/1200x/3e/16/a6/3e16a69f5a7a1aa1aa918ad765964902.jpg",
    gallery: ["https://i.pinimg.com/1200x/3e/16/a6/3e16a69f5a7a1aa1aa918ad765964902.jpg"],
    history: {
      EN: "The Polonnaruwa Vatadage is a circular stone structure built around a small central stupa for its protection and veneration. Built in the 12th century AD, it represents the absolute peak development of this uniquely Sri Lankan building tradition.",
      SI: "පොළොන්නරුව වටදාගෙය යනු 12 වන සියවසේදී ඉදිකරන ලද, කුඩා මධ්‍යම ස්තූපයක් වටා ආරක්ෂාව සහ වන්දනාව සඳහා ඉදිකරන ලද වෘත්තාකාර ගල් ගොඩනැගිල්ලකි."
    },
    shortStory: {
      EN: "Polonnaruwa Vatadage - A masterpiece of ancient Sri Lankan stone carving. Explore this iconic circular shrine and its historical significance.",
      SI: "පොළොන්නරුව වටදාගෙය - පුරාණ ශිලා කැටයම් කලාවේ විශිෂ්ටතම නිර්මාණය. මෙම පූජනීය වෘත්තාකාර විහාරය ගවේෂණය කරන්න."
    },
    tips: [
      { EN: "Visit the Sacred Quadrangle first thing in the morning.", SI: "උදෑසනම පැමිණීම වඩාත් සුදුසුය." },
      { EN: "Remove shoes before entering the upper platform.", SI: "පූජනීය ස්ථානයක් බැවින් පාවහන් ඉවත් කර ඇතුළු වන්න." },
      { EN: "Look for the detailed moonstone at the entrance.", SI: "ඇතුල්වන ස්ථානයේ ඇති සඳකඩපහණේ කැටයම් නරඹන්න." },
      { EN: "Visit during the late afternoon for better photography.", SI: "ඡායාරූපකරණය සඳහා සවස් කාලයේ පැමිණෙන්න." }
    ],
    hiddenEchoes: { EN: "The Vatadage's symbolism, carving details, and historical debates are richly explained by knowledgeable local guides. The structure was designed to protect the sacred tooth relic.", SI: "වටදාගෙයි සංකේතවාදය, කැටයම් විස්තර සහ ඓතිහාසික විවාද දැනුමැති දේශීය මාර්ගෝපදේශකයින් විසින් පොහොසත් ලෙස පැහැදිලි කරනු ලැබේ. මෙම ගොඩනැගිල්ල සැලසුම් කර ඇත්තේ දන්ත ධාතූන් වහන්සේ ආරක්ෂා කිරීම සඳහාය." },
    location: "Polonnaruwa",
    coordinates: { x: 50, y: 20 },
    nearbyAttractions: [
      { id: "thuparamaya", name: { EN: "Thuparamaya", SI: "ථූපාරාමය" }, image: "https://i.pinimg.com/736x/a6/ae/4f/a6ae4fd861554769766daae2f0e621d2.jpg" },
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
    detailedAbout: {
      EN: "🏛️ THUPARAMAYA — THE FIRST STUPA OF SRI LANKA\nAnuradhapura, Sri Lanka — Complete Verified Guide\n\n✅ HONEST NOTE BEFORE READING\nThroughout this guide, facts are clearly labelled:\n✅ CONFIRMED — physically verifiable or accepted by mainstream archaeology and history\n⭐ RELIGIOUS TRADITION — sincerely held belief, recorded in ancient chronicles, but not independently verifiable by science\n\n📍 LOCATION\nCity: Anuradhapura, North Central Province, Sri Lanka\nExact position: Inside the Mahamewuna Garden (Mahamevnawa) — the same sacred park that contains the Jaya Sri Maha Bodhi tree — in the northern section of the ancient sacred city\nDistance from Colombo: approximately 205 km north — 3.5 to 4.5 hours by road\nDistance from Kandy: approximately 130 km — about 3 hours by road\nDistance from Sigiriya: approximately 90 km — about 1.5 to 2 hours by road\nDistance from Ruwanwelisaya: approximately 500 meters walking distance\nDistance from Jaya Sri Maha Bodhi: approximately 700 meters walking distance\nUNESCO Status: Part of the Sacred City of Anuradhapura — inscribed 1982\n\n🏛️ WHAT IS THUPARAMAYA\n✅ CONFIRMED — Thuparamaya is the oldest Buddhist stupa in Sri Lanka. It is a white bell-shaped dagoba built in the 3rd century BC, making it the first stupa constructed on the island following the introduction of Buddhism. It stands in the Mahamewuna Garden, surrounded by four concentric rings of ancient stone columns — the surviving remnants of a vatadage structure once built over the stupa.\nThe name Thuparamaya is derived from two Sinhala and Pali words — Thupa meaning stupa, and Aramaya meaning a monastic complex or dwelling for monks. Together the name means the monastic complex containing the stupa — reflecting the fact that this was not merely a monument but the living heart of an active monastic community.\n✅ CONFIRMED — It is one of the Atamasthana — the eight most sacred places of Buddhist pilgrimage in Anuradhapura that every devout Sri Lankan Buddhist seeks to visit.\n\n📜 FULL HISTORY — CONFIRMED FACTS\nThe Introduction of Buddhism to Sri Lanka — 247 BC\n✅ CONFIRMED — Buddhism was formally introduced to Sri Lanka during the reign of King Devanampiyatissa of Anuradhapura (reigned approximately 307–267 BC). The missionary who brought the Dhamma was Arahat Mahinda Thero — a senior Buddhist monk who according to both the Mahavamsa and the Indian text Samantapasadika was the son of Emperor Ashoka of the Maurya Dynasty in India.\nThe first meeting between Mahinda Thero and King Devanampiyatissa took place at Mihintale — a rocky hill 12 km east of Anuradhapura — during a deer hunt. The king was so profoundly moved by the encounter and the teaching of the Dhamma that he embraced Buddhism immediately and dedicated the remainder of his reign to establishing it as the religion of the island.\nThe Relic — The Right Collarbone of the Buddha\n⭐ RELIGIOUS TRADITION — According to the Mahavamsa, Arahat Mahinda Thero brought to Sri Lanka the right collarbone relic of the Gautama Buddha. This relic had been preserved in India since the Buddha's cremation and was entrusted to Mahinda for transmission to Sri Lanka. The ancient chronicle records that the relic arrived on the island and was presented to King Devanampiyatissa.\nSome ancient texts also record a secondary theory — that the Thuparamaya may have originally also housed the Tooth Relic of the Buddha before it was moved elsewhere. This alternative theory is recorded in some chronicles but is a minority view and cannot be confirmed.\n✅ CONFIRMED — The relic claim is unverifiable by modern science as the stupa has never been opened. The relic — whatever it is — remains sealed within the structure.\nConstruction — 3rd Century BC\n✅ CONFIRMED — Thuparamaya was built in the 3rd century BC during the reign of King Devanampiyatissa, at the request of Arahat Mahinda Thero. This dating is accepted by mainstream historians and is broadly consistent with archaeological findings at the site. It is the earliest stupa in Sri Lanka for which there is documented historical evidence.\nThe Method of Construction — Confirmed by Archaeology\n✅ CONFIRMED — The original stupa was built of small sun-dried bricks. Archaeological analysis of the core structure has confirmed the use of ancient brick construction methods characteristic of the Anuradhapura period. The foundation was prepared on earth compacted and sealed in the manner typical of early Sinhalese stupa construction.\nThe Vatadage is Added — 1st–2nd Century AD\n✅ CONFIRMED — The circular vatadage structure surrounding the stupa was not part of the original construction. It was added approximately 400 years later, during the reign of King Vasabha (reigned 67–111 AD). Vasabha built the circular roofed vatadage around the already existing stupa to provide it with protection and a formal processional space for devotees.\nOriginally 176 stone columns stood in four concentric circles around the stupa, supporting a wooden roof. The inner ring of columns was the tallest. The outer rings were progressively shorter, creating a sloped roof profile that channelled rainwater away from the stupa. The column capitals were carved in lotus form — characteristic of Anuradhapura period craftsmanship.\n✅ CONFIRMED — Over 30 of the original 176 stone columns still stand today, several retaining their original polished surfaces and lotus-shaped capitals. Four concentric rings of column bases are visible.\nDestruction and Restorations — Multiple Historical Periods\n✅ CONFIRMED — The Thuparamaya was damaged and destroyed multiple times over its history. Ancient chronicles record that by the reign of King Aggabodhi II (reigned 604–614 AD) the site was in ruins and was fully restored by royal decree. This is one of the earliest documented restorations.\nFurther restorations were carried out by successive kings across the Anuradhapura and Polonnaruwa periods whenever resources and political stability allowed.\nThe 1842 Restoration\n✅ CONFIRMED — The current dome of the Thuparamaya as it stands today dates from a major reconstruction carried out in 1842, during the early British colonial period. This restoration was initiated by local Buddhist community leaders and supported by donations. The current bell shape and white plastered exterior are the product of this 1842 rebuilding. The core of the stupa beneath contains the original ancient brick structure.\nAn Ancient Hospital at the Site\n✅ CONFIRMED — Archaeological excavations at Thuparamaya revealed the ruins of an ancient hospital that existed on the grounds of the monastic complex. Artefacts recovered include medical equipment, surgical instruments of stone and metal, and the remains of a drainage and latrine system. This confirms that the Thuparamaya complex was not merely a place of worship but a functioning monastery that provided medical care — consistent with the Buddhist tradition of compassionate service.\n\n🏗️ ARCHITECTURE — FULL VERIFIED DETAILS\nThe Shape — Dhanyakara\n✅ CONFIRMED — The Thuparamaya stupa was built in the Dhanyakara shape — a classic bell shape resembling an inverted rice heap. This is one of the five canonical stupa shapes of Sri Lankan Buddhist architecture. The smooth curved profile rising from a cylindrical base to a pointed spire is the defining visual characteristic of the Anuradhapura school of stupa design. This shape directly influenced all the great stupas built in Anuradhapura in subsequent centuries — Ruwanwelisaya, Abhayagiri, Jetavanaramaya, and Mirisawetiya all drew on the foundational model established by Thuparamaya.\nCurrent Measurements — All Confirmed\nHeight of the entire structure including spire: approximately 50 meters (164 feet)\nDiameter of the dome at the base: 18 meters (59 feet)\nTotal diameter of the full complex including terrace: approximately 50 meters (164 feet)\nHeight of the plinth on which the dome sits: 3.45 meters (11 feet 4 inches)\nThe Stone Columns — Vatadage Remains\n✅ CONFIRMED — Four concentric rings of stone column bases are visible around the stupa, marking the positions of the original 176 columns that formed the vatadage structure. More than 30 columns still stand upright to varying heights, some preserving their polished surfaces and lotus capitals. These columns are among the most photographed elements of the site — their arrangement around the stupa creates an extraordinary visual composition of stone, sky, and white dome.\nThe Wooden Roof — No Longer Present\n✅ CONFIRMED — The wooden roof that once covered the entire vatadage structure no longer exists. It perished centuries ago. The stone columns are all that remain of what was once a complete roofed circular shrine. The Anuradhapura Museum contains a scale model showing how the original roofed vatadage would have appeared — highly recommended to visit before or after seeing the stupa.\nThe Surrounding Terrace\n✅ CONFIRMED — The stupa stands on a raised stone terrace paved with granite. This terrace is the circumambulation platform used by pilgrims walking clockwise around the stupa. The terrace is maintained in excellent condition and is regularly swept clean by temple attendants.\nThe Symbolic Architecture\nEvery element of the stupa encodes Buddhist philosophical meaning — as with all Sri Lankan Buddhist stupas of this tradition:\nThe dome represents the universe and the perfection of the Buddhist path.\nThe square harmika above the dome represents the Four Noble Truths.\nThe concentric rings rising from the harmika represent the Noble Eightfold Path.\nThe pinnacle crystal represents Nirvana — the ultimate goal of Buddhist practice.\n\n🙏 RELIGIOUS SIGNIFICANCE — CONFIRMED AND TRADITION CLEARLY SEPARATED\nAs the First Stupa — Confirmed Historical Significance\n✅ CONFIRMED — The construction of Thuparamaya marked the very moment Buddhism became established as a formal state religion in Sri Lanka. Before Thuparamaya, there was no Buddhist stupa anywhere on the island. Its construction was the first physical expression of the new Buddhist civilisation that would go on to produce Ruwanwelisaya, the Jaya Sri Maha Bodhi shrine, Abhayagiri, Jetavanaramaya, and eventually the Temple of the Tooth in Kandy — the entire tradition of Buddhist sacred architecture in Sri Lanka begins here.\nAtamasthana — One of Eight Sacred Sites\n✅ CONFIRMED — Thuparamaya is one of the eight Atamasthana — the eight most sacred Buddhist sites in Anuradhapura that form the essential pilgrimage circuit. Every devout Sri Lankan Buddhist seeks to visit all eight on a single pilgrimage day if possible.\nDaily Worship\n✅ CONFIRMED — Thuparamaya is a continuously active place of worship. Daily puja rituals are conducted by the resident monks throughout the day. Pilgrims offer white lotus flowers, light clay oil lamps, burn incense, and perform clockwise circumambulation of the stupa every day of the year.\n⭐ RELIGIOUS TRADITION — The relic of the Buddha's right collarbone enshrined within the stupa is venerated as a direct physical connection to the historical Gautama Buddha himself. This is the central belief that gives Thuparamaya its supreme importance for Buddhist pilgrims. The relic cannot be verified or viewed — it remains permanently sealed within the stupa.\nPoya Full Moon Days\n✅ CONFIRMED — On every monthly full moon Poya day, significantly larger numbers of white-robed pilgrims attend Thuparamaya as part of the full Anuradhapura pilgrimage circuit. The most sacred Poya days at the site are Poson Poya (May–June) and Duruthu Poya (January).\n\n🎟️ ENTRY FEES AND OPENING HOURS\nEntry Fee:\nThuparamaya is covered by the single Anuradhapura Sacred City Archaeological Park ticket — one ticket gives access to all major sites within the park.\nForeign adults: approximately USD $25 for the full Sacred City park ticket\nSri Lankan nationals: nominal local rate or free\nOpening Hours: The stupa complex is open daily from 6:00 AM to 8:00 PM. The surrounding terrace can technically be visited at any time of day or night as the site is not fully gated, but official opening hours apply for the inner complex.\nBest Time to Visit:\nEarly morning between 6:00 and 8:00 AM — the white dome in the golden morning light with the stone columns casting long shadows is extraordinary.\nEvening from 5:00 PM onward — when oil lamps are lit around the terrace and the stupa is beautifully illuminated.\n\n🗺️ NEARBY ATTRACTIONS WITHIN WALKING DISTANCE\nJaya Sri Maha Bodhi — approximately 700 meters. The sacred Bodhi tree, the oldest documented human-planted tree on earth. Together with Thuparamaya it forms the most historically significant pair of sites in the entire sacred city.\nRuwanwelisaya — approximately 500 meters. The great white stupa of King Dutugemunu, the largest and most venerated stupa in Anuradhapura. These two stupas — the first ever built in Sri Lanka and the greatest ever built in Sri Lanka — stand less than 10 minutes walk apart.\nLovamahapaya — The Brazen Palace — approximately 300 meters. The ruins of the nine-storey palace of 1,600 stone columns, built by King Dutugemunu as a monastic hall adjacent to Ruwanwelisaya. Its grid of ancient stone columns spread across an open field is one of the most haunting archaeological sights in Anuradhapura.\nPadalanchana Cetiya — approximately 50 meters from Thuparamaya. A small stupa built by King Lajjitissa (119–109 BC) according to the Mahavamsa to enshrine a footprint of the Buddha. One of the least visited but most historically significant small monuments in the entire sacred city.\nSamadhi Buddha Statue — approximately 800 meters. One of the finest ancient Buddha statues in Sri Lanka — a seated meditation figure carved in the Anuradhapura style of exceptional quality, located within the Mahamewuna Gardens near the Bodhi tree precinct.\nAbhayagiri Dagoba — approximately 1 km north. One of the largest ancient stupas in the world, with an associated museum displaying some of the finest Anuradhapura period sculptures ever found.\n\n🚌 GETTING THERE\nFrom Colombo: By train from Colombo Fort Station on the Northern Railway Line — approximately 4 to 5 hours. By express bus — approximately 4 to 5 hours. By car — approximately 205 km, 3.5 to 4.5 hours via the A9 highway.\nFrom Kandy: Approximately 130 km, about 3 hours by car or bus via Dambulla.\nFrom Sigiriya: Approximately 90 km, about 1.5 to 2 hours by car — the most natural pairing.\nFrom Dambulla: Approximately 65 km, about 1 hour by car.\nWithin Anuradhapura: Thuparamaya is approximately 25 minutes walk from Anuradhapura Railway Station. Tuk-tuks are available from the station. A bicycle is the ideal way to explore all major sites of the sacred city — available for rent near the station for approximately 300 to 500 LKR per day.\n\n👔 DRESS CODE\nWhite clothing is strongly preferred and widely worn by pilgrims. Shoulders and knees must be fully covered. Sarongs are available from vendors near the entrance. All footwear must be removed before entering the sacred terrace around the stupa. The granite paving can be hot during midday — early morning or evening visits avoid this discomfort.\n\n💡 ESSENTIAL TIPS — PRACTICAL ONLY\nVisit in the early morning. The white bell shape of the stupa catching the first light of the day, surrounded by the ancient stone columns, is one of the most beautiful sights in all of Anuradhapura.\nVisit the Anuradhapura Museum first. The museum contains a detailed scale model of the Thuparamaya vatadage as it originally appeared — with the wooden roof intact and all 176 columns standing. Seeing this model before the site itself transforms the experience.\nWalk the full circumambulation. Walking clockwise around the stupa on the granite terrace, observing the stone columns from all sides, takes less than 10 minutes but is the most direct way to appreciate the scale and grace of the structure.\nCombine with Ruwanwelisaya and the Jaya Sri Maha Bodhi on the same morning. The three sites form the absolute sacred heart of Anuradhapura. All are within 700 meters of each other. A dedicated morning covers all three comfortably on foot or by bicycle.\nBuy lotus flowers at the entrance. Fresh white lotus blossoms sold by vendors near the entrance are the traditional offering. Placing them at the base of the stupa as you circumambulate connects you directly to a devotional tradition that has continued without interruption for over 2,300 years.\nDo not climb onto the stupa. The structure is sacred and fragile. Climbing is strictly forbidden and considered deeply disrespectful.\nObserve silence near the stupa during puja rituals. When monks are chanting and pilgrims are in prayer, quiet respectful observation is expected of all visitors.\nStay at least a full day in Anuradhapura. The sacred city contains Thuparamaya, Ruwanwelisaya, the Bodhi tree, Abhayagiri, Jetavanaramaya, Lovamahapaya, the Twin Ponds, Isurumuniya, and many more extraordinary monuments. Two full days allows genuine exploration without rushing.",
      SI: "බුදුදහම හඳුන්වා දීමෙන් පසු ශ්‍රී ලංකාවේ ඉදිකරන ලද ප්‍රථම ස්තූපයයි."
    },
    history: {
      EN: "Thuparamaya is the oldest Buddhist stupa in Sri Lanka, built in the 3rd century BC by King Devanampiyatissa. It is a sacred pilgrimage site and one of the Atamasthana.",
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
      EN: "Abhayagiriya Monastery - A center of ancient Buddhist learning and philosophy in Anuradhapura.",
      SI: "අභයගිරිය - අනුරාධපුරයේ පැවති පැරණි බෞද්ධ අධ්‍යාපන සහ දාර්ශනික මධ්‍යස්ථානය."
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
      EN: "Jetavanaramaya Stupa - A marvel of ancient engineering and the world's largest brick structure.",
      SI: "ජේතවනාරාමය - පුරාණ ඉංජිනේරු විද්‍යාවේ විස්මිත නිර්මාණය සහ ලොව විශාලතම ගඩොල් ස්තූපය."
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
    detailedAbout: {
      EN: `🏛️ GAL VIHARA — POLONNARUWA
The Pinnacle of Ancient Sinhalese Rock Carving — Complete Verified Guide

✅ HONEST LABELLING THROUGHOUT
✅ CONFIRMED — verified by archaeology, mainstream history, inscriptions, UNESCO, and government records
⭐ RELIGIOUS TRADITION — sincerely held belief recorded in ancient chronicles, not independently verifiable by science

📍 LOCATION
District: Polonnaruwa District, North Central Province, Sri Lanka
Position: Located in the northern part of the ancient city of Polonnaruwa, a short distance from the Kiri Vehera and Lankatilaka image house.
Distance from Colombo: approximately 215 km northeast — 4 to 5 hours by road
Distance from Sigiriya: approximately 70 km — about 1.5 hours by road
Distance from Anuradhapura: approximately 90 km — about 2 hours by road
UNESCO Status: Part of the Ancient City of Polonnaruwa — inscribed 1982

🏛️ WHAT IS GAL VIHARA
✅ CONFIRMED — The Gal Vihara (originally named Uttararama, meaning the "Northern Monastery") is a rock temple of the Buddha situated in the ancient city of Polonnaruwa. It is widely considered the absolute pinnacle of ancient Sinhalese rock carving and sculpture.
✅ CONFIRMED — The site consists of four colossal Buddha statues carved directly into the face of a single, massive granite rock outcropping. The four statues depict the Buddha in different postures: seated (two statues), standing, and reclining.

📜 FULL HISTORY — CONFIRMED FACTS
Period of Construction — 12th Century AD
✅ CONFIRMED — The Gal Vihara was commissioned in the 12th century AD by King Parakramabahu I (reigned 1153–1186 AD), one of the greatest monarchs of the Polonnaruwa Kingdom. The ancient chronicle Culavamsa explicitly records that Parakramabahu I constructed the Uttararama (the original name of the site) and commissioned the carving of the statues.
The Polonnaruwa Katikavata (Code of Conduct)
✅ CONFIRMED — Carved directly into the rock face between the seated and standing Buddha statues is a massive stone inscription known as the Polonnaruwa Katikavata. This inscription, also commissioned by King Parakramabahu I, records a strict code of conduct and disciplinary rules for the Buddhist monastic order. It was created after the king successfully united the previously divided Buddhist sects (Mahavihara, Abhayagiri, and Jetavana) into a single unified Sangha.
Abandonment and Rediscovery
✅ CONFIRMED — Like the rest of Polonnaruwa, the Gal Vihara was abandoned in the 13th century following the invasion of Kalinga Magha and the collapse of the kingdom. The site was swallowed by the jungle and remained hidden for centuries. It was rediscovered in the 19th century during British colonial rule. The first major archaeological surveys and restorations were conducted by H.C.P. Bell in the early 20th century.

🏗️ THE FOUR STATUES — FULL VERIFIED DETAILS
The statues are carved from a single, long granite rock face. From left to right (south to north), the statues are:

1. The Seated Buddha (Vidyhadhara Guha)
✅ CONFIRMED — The first statue on the left is a large seated Buddha in the Samadhi (meditation) mudra. It sits on a carved lotus pedestal decorated with lions and thunderbolts (vajra). Behind the Buddha's head is a beautifully carved halo, and the background features intricate carvings of small shrines and celestial beings (Brahma and Vishnu).

2. The Cave Buddha (Vidyhadhara Guha)
✅ CONFIRMED — Next to the large seated Buddha is a smaller seated Buddha, also in the Samadhi mudra, located inside an artificial cave excavated directly into the rock. The cave walls were originally painted with frescoes, traces of which can still be seen today. The statue is flanked by two deities holding fly whisks (chauris).

3. The Standing Buddha
✅ CONFIRMED — This is perhaps the most unique and debated statue at the site. It is a 7-meter (23-foot) tall standing figure with its arms crossed over its chest (the Para Dukkhadukkhitha mudra, representing sorrow for the suffering of others).
⭐ RELIGIOUS TRADITION / HISTORICAL DEBATE — For many years, it was widely believed that this statue depicted Ananda, the Buddha's closest disciple, mourning the Buddha's passing (since it stands next to the reclining Buddha). However, modern archaeologists and art historians generally agree that it is a statue of the Buddha himself, given the presence of the lotus pedestal and the ushnisha (the cranial bump signifying enlightenment), which are reserved only for the Buddha.

4. The Reclining Buddha
✅ CONFIRMED — The final and largest statue is a massive reclining Buddha, measuring 14 meters (46 feet) in length. It depicts the Buddha's Parinirvana (passing away into final nirvana). The statue is carved with extraordinary realism and sensitivity. The slight depression in the pillow under the head, and the slight withdrawal of the upper foot (indicating that the figure is deceased, not merely sleeping), are masterclasses in subtle sculptural detail.

🎨 ARTISTIC SIGNIFICANCE
✅ CONFIRMED — The Gal Vihara statues represent a departure from the earlier Anuradhapura style. The robes of the Gal Vihara Buddhas are carved with distinct, parallel, shallow ridges, unlike the smooth, clinging robes of the Anuradhapura period. The facial expressions are deeply serene, and the proportions are monumental yet perfectly balanced. They are universally recognized as masterpieces of South Asian art.

🎟️ ENTRY FEES AND OPENING HOURS
Entry Fee: Included in the main Polonnaruwa Archaeological Park ticket.
Foreign adults: approximately $25 USD
Opening Hours: Daily from 7:30 AM to 6:00 PM.

💡 ESSENTIAL TIPS
Visit early morning or late afternoon: The granite rock reflects intense heat during the middle of the day. The lighting for photography is also much better in the early morning or late afternoon.
Remove footwear: You must remove your shoes and hats before entering the sandy area immediately in front of the statues. The sand can get very hot, so wearing socks is highly recommended.
Respectful Photography: You are allowed to take photographs, but it is strictly forbidden to pose with your back turned towards the Buddha statues. This is considered deeply disrespectful in Sri Lanka.
Observe the details: Take time to notice the subtle details, such as the depression in the pillow of the reclining Buddha and the intricate carvings behind the large seated Buddha.`,
      SI: `🏛️ ගල් විහාරය — පොළොන්නරුව
පැරණි සිංහල ශිලා කැටයම් කලාවේ අග්‍රගණ්‍ය නිර්මාණය — සම්පූර්ණ තහවුරු කළ මාර්ගෝපදේශය

✅ තහවුරු කළ කරුණු — පුරාවිද්‍යාව, ඉතිහාසය, සෙල්ලිපි සහ යුනෙස්කෝ වාර්තා මගින් තහවුරු කර ඇත.

📍 පිහිටීම
දිස්ත්‍රික්කය: පොළොන්නරුව දිස්ත්‍රික්කය, උතුරු මැද පළාත
පිහිටීම: පොළොන්නරුව පැරණි නගරයේ උතුරු දෙසින්, කිරි වෙහෙර සහ ලංකාතිලක පිළිම ගෙයට ආසන්නව පිහිටා ඇත.

🏛️ ගල් විහාරය යනු කුමක්ද?
✅ තහවුරු කළ කරුණු — ගල් විහාරය (මුල් නම: උත්තරාරාමය) යනු පොළොන්නරුවේ පිහිටි බෞද්ධ ශිලා විහාරයකි. මෙය පැරණි සිංහල ශිලා කැටයම් කලාවේ ඉහළම ස්ථානය ලෙස සැලකේ.
✅ තහවුරු කළ කරුණු — මෙහි තනි කළු ගලක නෙළන ලද දැවැන්ත බුදු පිළිම හතරක් ඇත: හිඳි පිළිම දෙකක්, හිටි පිළිමයක් සහ සැතපෙන පිළිමයක්.

📜 ඉතිහාසය
✅ තහවුරු කළ කරුණු — ගල් විහාරය 12 වන සියවසේදී මහා පරාක්‍රමබාහු රජු විසින් (ක්‍රි.ව. 1153–1186) ඉදිකරන ලදී. චූලවංශයට අනුව රජු විසින් මෙම උත්තරාරාමය කරවා පිළිම නෙළීමට උපදෙස් දී ඇත.
පොළොන්නරු කතිකාවත: හිඳි සහ හිටි පිළිම අතර ගලෙහි කොටා ඇති විශාල සෙල්ලිපිය පොළොන්නරු කතිකාවත ලෙස හැඳින්වේ. පරාක්‍රමබාහු රජු විසින් භික්ෂු ශාසනය එක්සත් කිරීමෙන් පසු භික්ෂූන් වහන්සේලා සඳහා පනවන ලද විනය නීති මෙහි ඇතුළත් වේ.

🏗️ පිළිම හතර
1. විශාල හිඳි පිළිමය: සමාධි මුද්‍රාවෙන් වැඩ සිටින මෙම පිළිමය පිටුපස අලංකාර තොරණක් සහ දේව රූප කැටයම් කර ඇත.
2. විද්‍යාධර ගුහාව (කුඩා හිඳි පිළිමය): ගල හාරා සාදන ලද කුඩා ගුහාවක් තුළ මෙම පිළිමය පිහිටා ඇත. ගුහාවේ බිත්තිවල පැරණි සිතුවම් වල ශේෂයන් තවමත් දැකගත හැක.
3. හිටි පිළිමය: මීටර් 7ක් උසැති මෙම පිළිමය පරදුක්ඛදුක්ඛිත මුද්‍රාවෙන් (අනුන්ගේ දුකේදී කම්පා වන බව) යුක්තය. මෙය ආනන්ද තෙරුන්ගේ පිළිමයක් බවට අතීතයේ විශ්වාස කළද, වර්තමාන පුරාවිද්‍යාඥයින් මෙය බුදුරජාණන් වහන්සේගේම පිළිමයක් බව තහවුරු කර ඇත.
4. සැතපෙන පිළිමය: මීටර් 14ක් දිගැති මෙම පිළිමයෙන් බුදුරජාණන් වහන්සේගේ පරිනිර්වාණය නිරූපණය වේ. කොට්ටයේ ඇති අවපාතය සහ පාදවල පිහිටීම වැනි සියුම් තොරතුරු ඉතා තාත්විකව නෙළා ඇත.

💡 වැදගත් උපදෙස්
* උදෑසන හෝ සවස් කාලයේ පැමිණීම වඩාත් සුදුසුය. දහවල් කාලයේදී ගල් තලාව සහ වැලි ඉතා උණුසුම් විය හැක.
* පිළිම අසලට යාමට පෙර පාවහන් සහ හිස්වැසුම් ඉවත් කළ යුතුය. වැලි උණුසුම් විය හැකි බැවින් මේස් පැළඳීම සුදුසුය.
* ඡායාරූප ගැනීමේදී පිළිම වලට පිටුපා සිටීමෙන් වළකින්න. එය අගෞරවයක් ලෙස සැලකේ.`
    },
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
    id: "mihintale",
    name: { EN: "Mihintale", SI: "මිහිඳු තලේ" },
    category: "ancient",
    image: "https://i.pinimg.com/1200x/1b/95/f6/1b95f6de2957767658ef8f7cb1ef658c.jpg",
    gallery: ["https://i.pinimg.com/1200x/1b/95/f6/1b95f6de2957767658ef8f7cb1ef658c.jpg"],
    history: {
      EN: "Mihintale is a series of rocky hills and mountain peaks that form the most historically significant pilgrimage site in Sri Lanka and one of the most important in the entire Buddhist world. It is universally recognised as the birthplace of Buddhism in Sri Lanka — the exact location where Buddhism was first preached on the island in 247 BC.",
      SI: "මිහින්තලය ශ්‍රී ලංකාවේ බුදුදහමේ උපන් ස්ථානය ලෙස සැලකේ. මෙය ඓතිහාසික වශයෙන් ඉතා වැදගත් වන්දනා ස්ථානයකි."
    },
    shortStory: {
      EN: "Mihintale - The cradle of Buddhism in Sri Lanka. Explore the sacred mountain where Buddhism was first introduced.",
      SI: "මිහින්තලේ - ශ්‍රී ලංකාවේ බුදුදහමේ තොටිල්ල. බුදුදහම මුලින්ම හඳුන්වා දුන් පූජනීය කඳුකරය ගවේෂණය කරන්න."
    },
    detailedAbout: {
      EN: `🏔️ MIHINTALE — මිහිඳු තලේ
The Cradle of Buddhism in Sri Lanka — Complete Verified Guide

✅ HONEST LABELLING THROUGHOUT
✅ CONFIRMED — verified by archaeology, mainstream history, inscriptions, UNESCO, and government records
⭐ RELIGIOUS TRADITION — sincerely held belief recorded in ancient chronicles, not independently verifiable by science
⚠️ UNCERTAIN — debated among historians

📍 LOCATION
District: Anuradhapura District, North Central Province, Sri Lanka
Position: Mihintale is a rocky mountain range situated 12.5 km east of Anuradhapura city, close to the Anuradhapura–Trincomalee Road (A12 highway)
Distance from Colombo: approximately 205 km north — 3.5 to 4.5 hours by road
Distance from Anuradhapura city centre: 12.5 km — approximately 20 to 25 minutes by car or tuk-tuk
Distance from Sigiriya: approximately 80 km — about 1.5 hours by road
Distance from Kandy: approximately 140 km — about 3 hours by road
Elevation: approximately 1,000 feet (300 meters) above the surrounding plains
UNESCO Status: Part of the Sacred City of Anuradhapura — inscribed 1982

🏔️ WHAT IS MIHINTALE
✅ CONFIRMED — Mihintale is a series of rocky hills and mountain peaks that form the most historically significant pilgrimage site in Sri Lanka and one of the most important in the entire Buddhist world. It is universally recognised as the birthplace of Buddhism in Sri Lanka — the exact location where Buddhism was first preached on the island in 247 BC.
✅ CONFIRMED — The name Mihintale comes from two Sinhala words — Mihin (a Sinhala rendering of the name Mahinda) and Thale meaning plateau or flat elevated ground. Together it means "the plateau of Mihindu (Mahinda)" — directly naming the site after the monk whose presence defined it forever.
✅ CONFIRMED — The site comprises four separate mountain peaks each approximately 1,000 feet (300 meters) in height:
Mihinthalawa Mountain — the main peak, home to the Mahaseya Stupa and the Aradhana Gala (Invitation Rock)
Rajagiri Lena Mountain — containing important cave complexes
Anaikutti Mountain
Ath Vehera Mountain
✅ CONFIRMED — Mihintale is one of the Solosmasthana — the sixteen most sacred places in all of Sri Lanka — and is an essential stop on every Buddhist pilgrimage to Anuradhapura.

📜 FULL HISTORY — CONFIRMED FACTS
Before Buddhism — Royal Hunting Ground
✅ CONFIRMED — In the 4th century BC, Mihintale was a dense jungle serving as a royal hunting ground for the kings of Anuradhapura. The forested hills were rich in wildlife and the kings regularly hunted there. Stone inscriptions found at the site confirm human presence and activity in the Mihintale area from at least the 3rd century BC.
The Meeting That Changed Sri Lanka — 247 BC
✅ CONFIRMED — The most important event in the entire history of Sri Lankan religion and civilisation took place on this hill on the full moon day of the month of Poson (June) in 247 BC. This date is recorded in both the ancient Pali chronicles Dipavamsa and Mahavamsa and is accepted by mainstream historians as broadly accurate.
✅ CONFIRMED — King Devanampiyatissa of Anuradhapura was hunting deer on the slopes of Mihintale when he encountered the Buddhist missionary monk Arahat Mahinda Thero. Mahinda tested the king's intelligence and wisdom through a series of questions about a mango tree — a famous episode recorded in detail in the Mahavamsa. Satisfied that the king possessed the wisdom to receive the Dhamma, Mahinda preached the Chulahatthipadopama Sutta — one of the key discourses of the Buddha — to the king and his 40,000 accompanying courtiers and subjects.
✅ CONFIRMED — The king and his entire court embraced Buddhism on the spot. This single event set in motion the adoption of Buddhism as the national faith of Sri Lanka — a transformation that would shape every aspect of Sri Lankan art, architecture, law, culture, agriculture, and statecraft for the following 2,300 years without interruption.
⭐ RELIGIOUS TRADITION — The Mahavamsa records that Mahinda Thero arrived at Mihintale by travelling through the air from India and descended to the summit of the Aradhana Gala. This is a matter of religious belief held by Buddhist devotees. It is not a literal historical or scientific claim.
Mahinda's Residence at Mihintale
✅ CONFIRMED — After his arrival in Sri Lanka, Mahinda Thero chose Mihintale as his personal residence and the base of his missionary activities. He lived at Mihintale for most of the remainder of his life, teaching and establishing the foundations of Sri Lankan Theravada Buddhism. His cave — Mihindu Guhawa — still exists at the site and is one of the most venerated spots in the entire complex.
✅ CONFIRMED — According to the Mahavamsa, Mahinda Thero passed away at Mihintale. His bodily relics were enshrined here. This is the basis for the supreme sacred importance of the Ambasthala Dagoba — the stupa believed to be built over the relics of Mahinda Thero himself.
Development as a Monastic Complex — Multiple Kings
✅ CONFIRMED — From the moment of the conversion event, successive Sri Lankan kings developed Mihintale as a massive sacred complex across many centuries. The following royal contributions are confirmed by archaeological evidence and ancient inscriptions:
King Devanampiyatissa (307–267 BC) — initiated the first development of Mihintale as a sacred site, building basic shrines and facilities for the monks.
King Lanjatissa (119–109 BC) — confirmed by inscription to have added a stone mantel to the Kantaka Cetiya stupa. This proves the Kantaka Cetiya predates 119 BC — making it one of the oldest dateable stupas in Sri Lanka.
King Bhathika Abhaya (22–7 BC) — ✅ CONFIRMED — constructed the 1,840 granite steps leading from the base of the hill to the summit. These original steps survive and are still used by pilgrims today after 2,000 years.
King Mahadathika Mahanaga (7–19 AD) — ✅ CONFIRMED — built the Ambasthala Dagoba on the spot where Mahinda Thero first met King Devanampiyatissa, and the Maha Seya (Mihintale Maha Stupa) on the summit of the main Mihintale hill.
King Aggabodhi I (575–608 AD) — converted the natural Naga Pokuna (Snake Pond) into a formally constructed stone pond.
Chinese Monk Fa Hien's Visit — 5th Century AD
✅ CONFIRMED — The Chinese Mahayana Buddhist monk Fa Hien (Faxian) visited Sri Lanka in the early 5th century AD and recorded his observations. His writings confirm that at the time of his visit, over 2,000 Buddhist monks resided at Mihintale — confirming it as one of the largest monastic communities in the ancient Buddhist world.
The Hospital Complex
✅ CONFIRMED — Archaeological excavations at Mihintale uncovered one of the most complete ancient hospital complexes found anywhere in the ancient world. The hospital consisted of a cluster of five rectangular buildings enclosed within a large compound wall. At the centre was a square structure serving as the main treatment building. At the four corners were residential buildings for monks receiving treatment. Surgical instruments, medicinal grinding stones, and drainage systems were all recovered. This confirms that Mihintale was not only a spiritual centre but also a major centre of ancient Sinhalese medical practice.
The Mihintale Inscriptions
✅ CONFIRMED — A total of 106 Brahmi script inscriptions have been found at Mihintale, ranging in date from the 3rd century BC to the 10th century AD. These inscriptions are among the most important historical documents of ancient Sri Lanka. They record royal donations, monastic regulations, land grants, and administrative records of the Mihintale monastery. The Mihintale Tablet — written in the 10th century AD — is the longest and best preserved of all the inscriptions. After the 10th century no more inscriptions were found, coinciding with the decline and fall of the Anuradhapura kingdom.
Abandonment and Rediscovery
✅ CONFIRMED — When the Kingdom of Anuradhapura fell to Chola invasion in the 10th century AD, Mihintale — like the broader sacred city — was largely abandoned. The jungle reclaimed the structures over subsequent centuries. British archaeologists and the Department of Archaeology of Ceylon carried out the major excavation and restoration work beginning in the 19th and early 20th centuries.

🏗️ THE SITE — EVERY MONUMENT IN DETAIL
The 1,840 Steps — Confirmed Physical Feature
✅ CONFIRMED — The approach to the summit of Mihintale is via three successive flights of granite steps totalling 1,840 steps in total, constructed during the reign of King Bhathika Abhaya (22–7 BC). The steps are cut from solid granite and have been used by pilgrims for over 2,000 years. They ascend through the shade of spreading frangipani and temple trees whose roots grip the ancient stone.
The first flight is wide and shallow — gentle and welcoming. The successive flights become progressively steeper and narrower as the summit approaches. The climb requires approximately 20 to 30 minutes at a comfortable pace for an average adult. A paved road built later provides an alternative motorised access for those unable to manage the steps.

The Kantaka Cetiya — Oldest Dated Stupa at Mihintale
✅ CONFIRMED — The Kantaka Cetiya is one of the oldest stupas in Sri Lanka and the oldest structure at Mihintale that can be positively dated. An inscription confirms that King Lanjatissa (119–109 BC) added a stone mantel to the existing structure, proving the stupa predates 119 BC — placing its original construction in the 2nd or 3rd century BC.
The stupa measures approximately 12 meters in height and 130 feet (40 meters) at the base. It features four Vahalkadas — elaborate ornamental entrance facades at the four cardinal points — decorated with some of the finest stone carvings at Mihintale. The southern Vahalkada is the best preserved and displays a continuous band of Ghana figures (also called Vamana or Bahirawa figures) — mythical dwarfs depicted in various dynamic and humorous poses — one of the most distinctive decorative elements of early Anuradhapura period stupa architecture.
The Kantaka Cetiya also features finely carved Nagaraja guardstones, balustrades, moonstones, and decorative friezes. These carvings are considered among the finest examples of pre-Christian era Buddhist sculptural art in Sri Lanka.

The Ambasthala Dagoba
✅ CONFIRMED — The Ambasthala Dagoba stands on the upper terrace of Mihintale at the exact spot where Mahinda Thero traditionally met King Devanampiyatissa in 247 BC. The name Ambasthala means "the place of the mango tree" — named after the mango tree that served as the backdrop to the famous meeting and the questions about the tree that Mahinda used to test the king's wisdom.
The dagoba was built by King Mahadathika Mahanaga (7–19 AD) — confirmed by archaeological analysis consistent with this date. The stupa enshrines the sacred relics of Arahat Mahinda Thero himself — the mortal remains of the monk whose presence defines Mihintale. Archaeological ruins surrounding the dagoba indicate that a vatadage (circular protective structure) once enclosed it, similar to the Polonnaruwa Vatadage.

The Maha Seya — The Summit Stupa
✅ CONFIRMED — The Maha Seya is the largest stupa at Mihintale, situated on the summit of the main Mihintale hill. It was built by King Mahadathika Mahanaga (7–19 AD). Its base diameter is 136 feet (41 meters). The stupa was in a heavily deteriorated condition and was completely restored in modern times. It stands as the highest point of the entire complex and is visible from a great distance across the flat Anuradhapura plains.
Access to the Maha Seya requires climbing to the very summit. Iron railings assist the climb in exposed and steep sections. Even in strong winds pilgrims make the ascent — the devotion of Sri Lankan Buddhists for this summit is extraordinary.

The Aradhana Gala — Invitation Rock
⭐ RELIGIOUS TRADITION combined with ✅ CONFIRMED physical feature — The Aradhana Gala — meaning Invitation Rock or Meditation Rock — is a large smooth granite outcrop near the Ambasthala Dagoba on the upper terrace. It is the rock from which Arahat Mahinda Thero is traditionally believed to have called out to King Devanampiyatissa by name to stop him shooting a deer — the first words the monk spoke to the king, initiating the famous encounter.
✅ CONFIRMED — The rock exists physically and is one of the most visited spots at Mihintale. It commands extraordinary panoramic views across the entire Anuradhapura plains — ancient reservoirs glittering in the distance, the white domes of Ruwanwelisaya and Abhayagiri visible on clear days.
⭐ RELIGIOUS TRADITION — That Mahinda descended from the sky onto this specific rock, and that this is the precise spot of the first meeting, is a matter of religious tradition recorded in the Mahavamsa. The general location of the meeting at Mihintale is accepted historically. The specific rock cannot be verified by archaeology.

Mihindu Guhawa — The Cave of Mahinda
✅ CONFIRMED — The cave where Arahat Mahinda Thero lived during his years at Mihintale exists and can be visited. It is a natural rock cave that shows evidence of ancient modification — walls were added, a drip ledge was carved above the entrance, and the interior was plastered. The cave is small, simple, and deeply atmospheric. It is the most intimate and personal monument at Mihintale — the actual place where one of the most important figures in Sri Lankan history slept, meditated, and taught for many years.

The Naga Pokuna — Snake Pond
✅ CONFIRMED — The Naga Pokuna — meaning Snake Pond — is a naturally occurring rock pool carved from the living granite and subsequently converted into a formal stone-lined pond. The name derives from a carved image of a seven-hooded cobra (Naga) cut into the rock face at one end of the pond. This cobra carving — approximately 5 meters (15 feet) long — remains clearly visible today and is one of the finest examples of ancient stone carving in Sri Lanka.
The natural spring that feeds the Naga Pokuna still flows. The pond supplied water to the Sinha Pokuna (Lion Pond) below through an underground tunnel, which in turn supplied the Alms Hall and the daily water needs of the monks.

The Sinha Pokuna — Lion Pond
✅ CONFIRMED — Below the Naga Pokuna, the Sinha Pokuna — Lion Pond — is a smaller stone-lined pool. It derives its name from the carved rampant lion figure on its face. Water flowed from the Naga Pokuna to the Sinha Pokuna through an underground rock-cut tunnel — a small but elegant example of ancient Sinhalese hydraulic engineering.

The Refectory — Dana Salawa (Alms Hall)
✅ CONFIRMED — The Dana Salawa — Alms Hall — is a large stone-paved hall where monks received their daily meals. A massive stone trough measuring approximately 9 meters long, 1.5 meters wide, and 0.9 meters deep still stands here. This trough was used to receive the daily food offerings brought by lay devotees from the surrounding villages. The scale of the trough gives a vivid sense of the enormous number of monks residing at Mihintale in its peak period — consistent with Fa Hien's record of 2,000 monks.

The Sannipatha Salawa — Chapter House
✅ CONFIRMED — The Sannipatha Salawa was the assembly hall where monks gathered for communal religious activities — the recitation of monastic rules, the ordination of new monks, and the resolution of communal matters. The hall had a square layout with each side approximately 62 feet (19 meters). It had no enclosing walls — the roof was supported by a symmetrical arrangement of stone pillars open on all sides. The stone pillars remain standing while the wooden roof they once supported is long gone.

The Hospital Complex
✅ CONFIRMED — At the base of the main staircase lies the ancient hospital complex — one of the most completely surviving ancient hospital sites in the entire world. It consists of five rectangular buildings in a Panchavasa layout — four residential buildings at the corners and one central treatment building. Recovered artefacts include stone grinding troughs for medicinal preparations, stone bathing troughs, drainage channels, and evidence of an organised medical practice. Nagaraja guardstones, balustrades, and moonstones at the hospital entrance demonstrate that the building was constructed with full architectural care.

The Kaludiya Pokuna — Black Water Pond
✅ CONFIRMED — The Kaludiya Pokuna — Black Water Pond — is located in a forest setting apart from the main monastic complex. The name derives from the dark appearance of the water, caused by the reflection of the dense forest canopy and the nature of the minerals in the rock. This was the bathing pond of the forest-dwelling monks of a separate, more austere hermitage attached to Mihintale. The cave temple adjacent to the pond — the Kaludiya Pokuna Cave Temple — was constructed with brick walls, granite window openings, and granite ceiling slabs — an unusual and technically accomplished construction for its period.

🙏 RELIGIOUS SIGNIFICANCE
The Poson Festival — Sri Lanka's Most Important Buddhist Anniversary
✅ CONFIRMED — Every year on the full moon day of Poson (June) — the exact anniversary of the meeting between Mahinda and King Devanampiyatissa — hundreds of thousands of white-robed Buddhist pilgrims descend on Mihintale and Anuradhapura for what is the most sacred date in the Sri Lankan Buddhist calendar. Poson Poya is a national public holiday. The entire city of Anuradhapura is filled with pilgrims. The 1,840 steps of Mihintale are climbed by a continuous stream of devotees throughout the night and into the following day. The atmosphere is profoundly moving.
✅ CONFIRMED — Mihintale is one of the Solosmasthana — the sixteen most sacred Buddhist sites in all of Sri Lanka.

🎟️ ENTRY FEES AND OPENING HOURS
Entry Fee:
✅ CONFIRMED — Mihintale is covered by the single Anuradhapura Archaeological Park ticket
Foreign adults: approximately USD $25 for the full park
Sri Lankan nationals: nominal local rate
Entry to the outer complex including the steps and most monuments is free at all times. The ticket covers access to the main monument areas.
Opening Hours: The site is accessible daily from dawn to dusk. There are no fixed closing hours for the outdoor complex. The full moon Poson Poya sees the site active throughout the night.
Best Times to Visit:
Early morning 6:00 to 8:00 AM — the mist lies across the plains below, the steps are cool, pilgrims are arriving quietly, and the entire complex is bathed in golden light
Sunset — the views from the Aradhana Gala and the Maha Seya summit across the Anuradhapura plains at sunset are among the finest in all of Sri Lanka
Poson full moon in June — the most intensely spiritual and atmospheric time to visit, though also the most crowded

🚌 GETTING THERE
From Anuradhapura: 12.5 km east on the A12 Trincomalee road — approximately 20 to 25 minutes by car or tuk-tuk. Tuk-tuk from Anuradhapura town to Mihintale cost approximately 500 to 700 LKR one way. Buses also run between Anuradhapura Bus Stand and Mihintale regularly.
From Colombo: 205 km north — approximately 4 to 5 hours by train or bus to Anuradhapura, then 20 minutes by tuk-tuk to Mihintale.
From Sigiriya: approximately 80 km — about 1.5 hours by car.
From Kandy: approximately 140 km — about 3 hours by car or bus via Dambulla and Anuradhapura.

👔 DRESS CODE
✅ CONFIRMED — strictly enforced
White clothing is strongly preferred and universally worn by local pilgrims. Shoulders must be covered. Knees must be covered. Sarongs available from vendors near the entrance for a small amount. All footwear must be removed before entering shrine areas. The granite steps and stone floors are cool in morning and hot at midday.

💡 ESSENTIAL TIPS — PRACTICAL ONLY
Arrive at dawn. The ascent of the 1,840 granite steps in the early morning — with the light filtering through the frangipani trees and the plains below still wrapped in mist — is one of the most beautiful walks in Sri Lanka. By 9:00 AM tour buses begin arriving and the atmosphere changes.
Climb all the way to the Maha Seya summit. Many visitors stop at the Ambasthala Dagoba and miss the final climb to the summit stupa. The views from the very top — across the entire Anuradhapura plains with the white domes of the great stupas visible in the distance — are extraordinary and worth every step.
Stand on the Aradhana Gala. The smooth granite rock where Mahinda is believed to have first called to the king commands the finest panoramic view of the Anuradhapura landscape. Allow time to simply stand quietly and absorb the immensity of what happened here 2,300 years ago.
Find the Mihindu Guhawa. The cave of Mahinda is not the most dramatic monument at the site but it is the most personally resonant — the actual small rock cave where the monk who changed Sri Lankan civilisation lived his daily life.
Visit the Naga Pokuna. The giant five-meter cobra carved into the rock face above the pool is one of the finest and most striking pieces of ancient stone carving in Sri Lanka. Many visitors miss it entirely because it requires a short detour from the main path.
Examine the Kantaka Cetiya carvings. Located at the base of the hill before ascending the main steps, the Kantaka Cetiya's Vahalkada carvings — particularly the Ghana dwarf figures on the southern entrance — are exceptional examples of 2nd century BC Buddhist sculptural art.
Carry sufficient water. The climb is physically demanding, particularly in the heat of the day. Bring at least 1.5 litres per person.
Combine with Anuradhapura on the same day. Mihintale is 12.5 km from the sacred city. A morning at Mihintale followed by an afternoon exploring Ruwanwelisaya, the Jaya Sri Maha Bodhi, and Thuparamaya makes a complete and deeply rewarding full day in the heartland of ancient Sri Lankan civilisation.
Stay in Anuradhapura. There is no accommodation at Mihintale itself. Anuradhapura city has a full range of accommodation from budget guesthouses to comfortable hotels. Staying overnight allows you to visit both Mihintale at dawn and the sacred city monuments in the same day.
Visit on Poson Poya if possible. The full moon of Poson in June transforms Mihintale into one of the most extraordinary pilgrimage spectacles in Asia. If your travel dates allow it, being at Mihintale on Poson Poya is an experience that cannot be replicated at any other time of the year.`,
      SI: "මිහින්තලය ශ්‍රී ලංකාවේ බුදුදහමේ උපන් ස්ථානයයි."
    },
    tips: [
      { EN: "Arrive at dawn.", SI: "අලුයම පැමිණෙන්න." },
      { EN: "Climb all the way to the Maha Seya summit.", SI: "මහා සෑය දක්වාම නගින්න." },
      { EN: "Stand on the Aradhana Gala.", SI: "ආරාධනා ගල මත සිටින්න." },
      { EN: "Find the Mihindu Guhawa.", SI: "මිහිඳු ගුහාව සොයා ගන්න." },
      { EN: "Visit the Naga Pokuna.", SI: "නාග පොකුණ නරඹන්න." },
      { EN: "Examine the Kantaka Cetiya carvings.", SI: "කණ්ඨක චේතියේ කැටයම් නරඹන්න." },
      { EN: "Carry sufficient water.", SI: "ප්‍රමාණවත් තරම් ජලය රැගෙන එන්න." },
      { EN: "Combine with Anuradhapura on the same day.", SI: "අනුරාධපුරය සමඟ එකම දිනකදී සංචාරය කරන්න." },
      { EN: "Stay in Anuradhapura.", SI: "අනුරාධපුරයේ නවාතැන් ගන්න." },
      { EN: "Visit on Poson Poya if possible.", SI: "හැකි නම් පොසොන් පොහොය දිනකදී පැමිණෙන්න." }
    ],
    hiddenEchoes: { EN: "The Mihintale Tablet is the longest and best preserved of all the inscriptions.", SI: "මිහින්තලේ ටැබ්ලටය පැරණි ශ්‍රී ලංකාවේ වැදගත්ම ඓතිහාසික ලේඛනයකි." },
    location: "Anuradhapura",
    coordinates: { x: 50, y: 20 },
    nearbyAttractions: [
      { id: "anuradhapura", name: { EN: "Anuradhapura", SI: "අනුරාධපුරය" }, image: "https://picsum.photos/seed/anuradhapura/800/600" }
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
      EN: "Galle Fort - A UNESCO World Heritage site and the best-preserved colonial sea fortress in Asia.", 
      SI: "ගාල්ල කොටුව - යුනෙස්කෝ ලෝක උරුමයක් සහ ආසියාවේ හොඳම මට්ටමින් පවතින මුහුදු බලකොටුව." 
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
      { id: "knuckles", name: { EN: "Knuckles Mountain Range", SI: "නකල්ස් කඳු පන්තිය" }, image: "https://i.pinimg.com/1200x/59/90/2a/59902a787d6a8c484b8d014234ef36d4.jpg" }
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
      EN: "Ritigala is an ancient Buddhist monastery and mountain in Sri Lanka. The ruins and rock inscriptions of the monastery date back to 1st century BCE. It is situated at an elevation of 766 m above sea level, and is the highest mountain in northern Sri Lanka.", 
      SI: "රිටිගල යනු ශ්‍රී ලංකාවේ පිහිටි පැරණි බෞද්ධ ආරාමයක් සහ කන්දකි. ආරාමයේ නටඹුන් සහ සෙල්ලිපි ක්‍රි.පූ. 1 වන සියවස දක්වා දිව යයි." 
    }, 
    detailedAbout: { 
      EN: `🏔️ RITIGALA — රිටිගල
Sri Lanka's Most Mysterious Ruins — Complete Verified Guide

✅ HONEST LABELLING THROUGHOUT
✅ CONFIRMED — verified by archaeology, inscriptions, government records, and scientific surveys
⭐ LEGEND / TRADITION — sincerely held belief or cultural tradition, not independently verifiable
⚠️ UNCERTAIN — debated among historians or varies between sources

📍 LOCATION
Province: North Central Province, Sri Lanka
District: Anuradhapura District
Position: Between Anuradhapura and Polonnaruwa, rising abruptly from the dry zone plains
Elevation of highest peak: 766 meters above sea level — 600 meters above the surrounding plains
Distance from Habarana: approximately 21 km — about 40 minutes by road
Distance from Anuradhapura: approximately 40 to 43 km — about 1 hour by road
Distance from Sigiriya: approximately 30 km — about 45 minutes by road
Distance from Polonnaruwa: approximately 50 km — about 1 hour by road
Distance from Colombo: approximately 180 km — about 4 hours by road
Access road: Turn off the Anuradhapura–Habarana highway at Ganewalpola junction — approximately 9 km of road to the archaeological site entrance

🏔️ WHAT IS RITIGALA
✅ CONFIRMED — Ritigala is a mountain range and ancient Buddhist monastery complex in the dry zone of Sri Lanka's North Central Province. It is simultaneously one of the most archaeologically extraordinary sites and one of the most biologically exceptional ecosystems in the entire country. Three things make it genuinely unlike any other destination in Sri Lanka.
✅ CONFIRMED — First, the ruins themselves. Ritigala monastery contains none of the traditional Buddhist temple icons found at every other ancient site in Sri Lanka — no stupas, no Bodhi tree, no Buddha statues in shrines. Instead the complex is a network of stone-paved double-platforms, winding forest paths, a stone bridge, stone reservoirs, and meditation walkways that are archaeologically unlike anything else on the island — and whose precise religious function remains partially unresolved even after decades of excavation.
✅ CONFIRMED — Second, the microclimate. Ritigala is the highest isolated mountain in northern Sri Lanka — rising 600 meters above the flat surrounding plains which extend without interruption in all directions. This height creates a unique wet microclimate in the middle of one of Sri Lanka's driest zones. During the southwest monsoon, when the plains all around are in drought and the surrounding land is brown and parched, the summit of Ritigala is covered in mist and cloud and the earth is moist. The mountain in effect generates its own rainfall through orographic condensation. This explains why a mountain surrounded by dry zone landscape supports an extraordinary concentration of wet zone and montane plant species at its higher elevations.
✅ CONFIRMED — Third, the atmosphere. Ritigala is visited by a tiny fraction of the number of tourists who go to Sigiriya or the Anuradhapura sacred city. The ruins are partially excavated and partially still being absorbed by the jungle. The stone path winds through dense forest with ruins emerging from the undergrowth on both sides. There are no crowds, no souvenir vendors, no managed queues, and no safety barriers. The experience of exploring Ritigala is as close to genuine archaeological discovery as a non-specialist visitor can come anywhere in Sri Lanka.

📜 THE NAME — CONFIRMED AND UNCERTAIN
✅ CONFIRMED — The ancient Sinhala and Pali name for the mountain was Aritta Pabbata — meaning Dreadful Mountain or Safety Rock depending on the specific interpretation of aritta. Both interpretations are supported by linguistic scholarship. The name in the Pali form appears in the ancient chronicle Mahavamsa, confirming the antiquity of the designation.
✅ CONFIRMED — An alternative derivation — also credible — links the name to Riti trees, a species of tree found growing on the mid-slopes of the mountain. The scientific name of the Riti tree is Antiaris toxicaria — a tree known in other traditions for its toxic properties and used historically to prepare arrow poison in some Asian cultures.
✅ CONFIRMED — The name Aritta also connected with the historical figure of Aritta — the Chief Minister of King Devanampiyatissa who later became the first Sri Lankan Arahath monk — who is recorded to have spent his monastic life at Ritigala in the 3rd century BC. Whether the mountain was named after the man or the man adopted the name of the mountain in his monastic identity is uncertain.

📜 HISTORY — CONFIRMED FACTS
🏔️ Pre-Buddhist and Earliest Human Presence
✅ CONFIRMED — Prince Pandukabhaya — who later became King Pandukabhaya and ruled from 437 to 367 BC — used Ritigala as a refuge and base during his military campaigns against his eight uncles who were attempting to prevent him from reaching the throne. Ritigala's isolated, elevated position made it a natural defensive refuge. This is confirmed in the Mahavamsa chronicles. Pandukabhaya is also credited with constructing the Banda Pokuna — the reservoir at the base of the monastery complex.
✅ CONFIRMED — Rock caves prepared for monks with carved drip-ledges date from the 1st century BC. At least 74 such caves have been documented within the Ritigala reserve and surrounding area. One cave inscription specifically records that King Lanjatissa — the brother of the great King Dutugamunu who reigned from 161 to 137 BC — gifted a cave at Ritigala and is credited with founding the first formal monastery at the site.
✅ CONFIRMED — Around the 3rd century BC, Aritta — the Chief Minister of King Devanampiyatissa who converted to Buddhism following the arrival of Arahat Mahinda from India in 247 BC — spent his monastic life at Ritigala after becoming a monk. Aritta is recorded as the first Sri Lankan-born person to achieve the status of Arahath — complete enlightenment in the Buddhist understanding — making his connection to Ritigala historically significant in the deepest sense.
🏛️ The Lanka Viharaya — 187 to 177 BC
✅ CONFIRMED — King Surathissa built the Lanka Viharaya at the base of Ritigala mountain during his reign from 187 to 177 BC. This was the first formally constructed monastery building at the site — preceding by a century the Aritta Viharaya built higher on the mountain.
🏛️ The Aritta Viharaya — 59 to 50 BC
✅ CONFIRMED — King Lajjatissa built the Aritta Viharaya on the mountain during his reign from 59 to 50 BC. This monastery complex higher on the slope established Ritigala as a major monastic destination rather than simply a forest refuge for individual hermit monks.
👑 King Sena I and the Pansukulika Monks — 9th Century AD
✅ CONFIRMED — The most architecturally distinctive phase of Ritigala's development occurred during the reign of King Sena I in the 9th century AD. Sena I made a major royal endowment to Ritigala for a specific and unusual group of Buddhist ascetic monks known as the Pansukulikas — meaning Monks of the Rag Robes.
✅ CONFIRMED — The Pansukulikas were Buddhist monks who had chosen the most extreme form of ascetic practice available within Theravada Buddhism. Their defining characteristic was their robes — rather than wearing properly woven or purchased cloth, they wore only cleaned, washed, and repaired rags, mostly shrouds collected from cremation grounds and cemeteries. This practice — one of the thirteen ascetic practices or Dhutanga outlined in Buddhist monastic discipline — expressed a complete rejection of material comfort, social status, and conventional monastic life.
✅ CONFIRMED — The Pansukulikas chose Ritigala precisely because of its isolation from village life and conventional society. Their practice required complete withdrawal from the world — no village temples, no lay patronage relationships, no conventional religious ceremonies. The remote, mist-covered mountain in the middle of the dry zone jungle was the ideal environment for monks devoted to extreme meditation practice and complete detachment from the ordinary world.
✅ CONFIRMED — The distinctive double-platform structures that define the Ritigala ruins were built specifically for Pansukulika use. Each structure consists of two stone platforms connected by a bridge — one platform for walking meditation, one for seated meditation. The design is unique to Pansukulika forest monastery sites and has not been found in the same form anywhere else in Sri Lanka. The absence of stupas, Buddha shrines, and Bodhi trees at Ritigala directly reflects the Pansukulikas' rejection of conventional devotional religious practice in favour of pure meditation.
⚔️ Abandonment — 10th to 12th Century
✅ CONFIRMED — Ritigala was abandoned following the South Indian invasions of the 10th and 11th centuries that also devastated Anuradhapura. The Chola occupation of northern Sri Lanka from 1017 to 1070 AD eliminated the royal patronage that had sustained the Pansukulika community. Without support, the monks dispersed, the monastery fell silent, and the jungle reclaimed the buildings over the following centuries.
🔬 Rediscovery — 19th Century
✅ CONFIRMED — British colonial officers rediscovered the ruins in the 19th century. The site was included in the systematic archaeological survey of the island begun under the British Department of Archaeology. The Central Cultural Fund of Sri Lanka and the Cultural Triangle project have conducted ongoing excavation and conservation work since the 1980s.
🌿 Declared Strict Nature Reserve — 1941
✅ CONFIRMED — Ritigala was declared a Strict Nature Reserve on 7 November 1941 under Gazette Notification No. 8809, covering an area of 1,528 hectares. A Strict Nature Reserve is the highest level of nature protection available under Sri Lankan law — Category 1a under the IUCN protected area classification system. This designation technically prohibits all public entry. In practice, the Department of Archaeology has authorised public access to approximately 60 acres of the site — the excavated monastery ruins — while the remainder of the reserve is protected.

🏗️ THE MONASTERY RUINS — COMPLETE CONFIRMED DETAILS
🏊 Banda Pokuna — The Ritual Bathing Tank
✅ CONFIRMED — The entrance to the monastery complex begins at the Banda Pokuna — a large ancient reservoir of remarkable engineering precision. The reservoir was constructed with a bund of polygonal plan completing a full circumference of 366 meters. The construction of the original reservoir is credited to King Pandukabhaya — dating the structure to the 4th century BC. The reservoir possibly served a ritual bathing purpose — the sequential arrangement of bathing tank, entrance complex ruins, and pedestrian path strongly suggests that visitors bathed here before entering the monastery precinct.
✅ CONFIRMED — The Banda Pokuna today is overgrown and the water surface has been reclaimed by forest. The massive stone steps descending into the former pool are cracked and threaded with tree roots — a powerful visual representation of the 1,000 years of forest growth since abandonment. A natural spring in one corner of the pool still flows — the same spring that supplied the reservoir in the 9th century.
🌉 The Stone Bridge
✅ CONFIRMED — Beyond the Banda Pokuna, a still-intact stone slab bridge crosses a stream on the path to the monastery. This bridge is one of the oldest surviving stone structures on the site and is used by visitors today exactly as it was used by monks 1,000 years ago. Its survival while the surrounding buildings crumbled reflects the durability of simple stone slab construction.
🧘 The Double Platform Structures — Padhanagharas
✅ CONFIRMED — The defining architectural feature of Ritigala is the series of double-platform structures — known in Pali as Padhanagharas — that line the winding stone path through the monastery complex. Each structure consists of two raised stone platforms connected by a narrow stone bridge. The platforms are precisely constructed, with carefully cut stone slabs, stone railings, and elaborately carved guard stones at the approaches.
✅ CONFIRMED — The two platforms of each Padhanagharas served distinct purposes. One platform was the walking meditation platform — monks paced back and forth on this surface during kinhin, the Buddhist practice of walking meditation, as an alternative to seated practice. The second platform was the seated meditation platform where monks sat in the standard cross-legged Samadhi posture. The bridge between them allowed transition between the two forms of practice without descending to ground level.
✅ CONFIRMED — The double-platform design is unique to Pansukulika forest monastery sites. Identical structures have been found at other forest monastery ruins in Sri Lanka — Arankele being the most intact comparable example — but nowhere are they as numerous, as well preserved, or as atmospherically situated as at Ritigala.
✅ CONFIRMED — The Padhanagharas at Ritigala are elevated above the ground surface on stone platforms and approached by stone staircases. The elevation served a practical purpose in the forest monastery context — raising the meditation surface above the damp ground, improving air circulation, and reducing insect disturbance during extended meditation sessions.
🗺️ The Stone Path — The Monastery Road
✅ CONFIRMED — The entire monastery complex is connected by a continuous stone-paved path that winds up the mountainside through the jungle for approximately 2 km. The path is constructed from precisely fitted stone slabs laid directly on the mountain surface. It is wide enough for two people walking abreast. The path passes through tunnel-like sections where overhanging trees create a closed canopy overhead, through open rock sections with views across the surrounding jungle, and past the ruins of dozens of monastic structures on both sides.
✅ CONFIRMED — The path itself is one of the most remarkable features of the site. It is in better condition than many roads built in the colonial period — the 1,000-year-old stone paving is level, stable, and clearly legible despite a millennium of forest growth around and over it. Walking this path is the central experience of visiting Ritigala.
🏥 The Hospital
✅ CONFIRMED — Ruins of a hospital — a medical treatment facility — have been identified within the Ritigala monastery complex. The presence of a hospital within the monastery reflects the integration of medical care into the monastic community's life — the same pattern found at Mihintale, where an ancient hospital complex has been extensively excavated. The Ritigala hospital ruins include stone structures for preparation of herbal medicines consistent with the Ayurvedic medical tradition.
🏛️ The Shrine Room Ruins
✅ CONFIRMED — The ruins of a shrine room have been identified within the complex. This is one of the few structures at Ritigala that would have housed conventional Buddhist devotional objects. Its presence confirms that the Pansukulika community was not entirely without conventional religious practice — only that it was minimal compared to village temple monasteries.
🏛️ The Uposatha Hall Ruins
✅ CONFIRMED — Ruins consistent with an Uposatha hall — the assembly room where monks gathered fortnightly for the recitation of the Patimokkha, the monastic code of discipline — have been identified. The Uposatha ceremony was a compulsory element of Buddhist monastic life regardless of the ascetic tradition of the monks involved.
📜 The 152 Stone Inscriptions
✅ CONFIRMED — 152 stone inscriptions have been documented within the Ritigala reserve and surrounding area. These inscriptions — carved in Brahmi script — date primarily from the 2nd to the 1st century BC and document the names of monks, royal donors, and religious dedications. They confirm the site's active monastic use across a span of many centuries and provide the primary archaeological evidence for the dates and phases of the monastery's development.
🪨 The 74 Rock Caves
✅ CONFIRMED — At least 74 rock caves with carved drip-ledges on their upper edges have been documented. The drip-ledge is a characteristic feature of early Sri Lankan Buddhist monk habitation — a groove carved across the top of the cave entrance that channels rainwater away from the interior, keeping it dry for habitation. The drip-ledge caves at Ritigala are identical in form to those found at Mihintale, Dambulla, and hundreds of other early monastic sites across Sri Lanka, confirming their use by monks from the 1st century BC onward.

🌿 THE UNIQUE MICROCLIMATE — SCIENCE CONFIRMED
✅ CONFIRMED — Ritigala's most extraordinary natural feature is its microclimate — a genuinely unique meteorological phenomenon in the Sri Lankan dry zone.
The surrounding Anuradhapura plains receive approximately 1,200 to 1,400 mm of annual rainfall distributed seasonally, with a pronounced dry period during the southwest monsoon when the northwest region receives little rain. The Ritigala summit receives significantly more rainfall — approximately 1,485 mm annually on average — through a combination of direct rainfall and orographic cloud condensation.
✅ CONFIRMED — During the southwest monsoon season from May to September, when the plains all around are experiencing drought conditions and the vegetation is brown and desiccated, the crests of Ritigala are covered in mist and cloud. The cloud condenses on the vegetation surface and drips to the ground — a form of horizontal rainfall that supplements direct precipitation. The result is that the mountain summit remains moist while the surrounding plains are dry.
✅ CONFIRMED — Three significant rivers originate within the Ritigala reserve — Na Ela, Deva Ela, and Malwathu Oya. The Malwathu Oya is the river that flows through Anuradhapura and has provided water to the ancient capital since its founding. Ritigala is therefore the hydrological source of the first Sri Lankan civilisation's primary water supply.
✅ CONFIRMED — The temperature contrast between the summit and the base is dramatic. The surrounding plains experience hot dry zone conditions averaging 28 degrees Celsius. The summit is measurably cooler throughout the year and cold during the monsoon mist season. This temperature gradient combined with the moisture gradient creates the conditions for the extraordinary botanical diversity described below.

🌿 BIODIVERSITY — CONFIRMED SCIENTIFIC DATA
🌿 Flora — Extraordinary Endemism
✅ CONFIRMED — 417 taxa of lower and higher plants have been documented within the Ritigala reserve. Of these, 337 are flowering plants. Approximately 54 to 57 species — approximately 16% of the total flora — are endemic to Sri Lanka. Four plant species are endemic specifically to Ritigala itself — found nowhere else on earth:
Madhuca clavata — Sapotaceae family — a tree species unknown outside Ritigala
Coleus elongatus — Lamiaceae family — a herbaceous plant confined to the mountain
Thunbergia fragrans var. parviflora — Acanthaceae family — a flowering vine variant unique to Ritigala
Dendrocalamus cinctus — a bamboo species
✅ CONFIRMED — 96 of the documented flowering plant species are known to be used in Ayurvedic medicine — the traditional Indian and Sri Lankan herbal medical system. This exceptional concentration of medicinal plants is the scientific basis of the long-held tradition that Ritigala possesses extraordinary healing properties.
✅ CONFIRMED — The first natural occurrence of Bambusa vulgaris in Sri Lanka was documented at Ritigala — a significant botanical discovery confirming that the mountain's unusual microclimate supports species distributions impossible on the surrounding plains.
✅ CONFIRMED — The vegetation shows a clear pattern of altitudinal zonation with five distinct plant communities identified: dry mixed evergreen forest at the lower elevations, disturbed dry mixed evergreen forest, short-stature forest on the summits and upper slopes, vegetation associated with rock outcrops, and scrub. Most wet zone species are found at higher elevations and some are strictly confined to the summit areas — a botanical island of wet zone ecology in the middle of a dry zone landscape.
🦎 Reptiles — A New Endemic Species
✅ CONFIRMED — Cnemaspis retigalensis — the Ritigala day gecko — is an endemic gecko species described specifically from specimens collected at Ritigala. It is currently known only from Ritigala and is one of the point-endemic species that make the reserve of exceptional conservation significance. The gecko is common in the dry mixed evergreen forest and short-stature forest of the lower and mid-elevation zones.
✅ CONFIRMED — Other reptile species confirmed at Ritigala include: Indian Rock Python, Rat Snake, Forsten's Cat Snake, Russell's Viper, endemic Green Pit Viper, Green Vine Snake, Land Monitor, Water Monitor, Star Tortoise, and multiple gecko and skink species.
🦅 Birds — Over 100 Species
✅ CONFIRMED — More than 100 bird species are documented at Ritigala. Notable species include:
Spot-winged Thrush — endemic, a secretive ground thrush of forest interior
Sri Lanka Junglefowl — endemic, national bird, commonly seen at forest edges
Sri Lanka Spurfowl — endemic, secretive game bird of forest undergrowth
Grey Hornbill — endemic, the characteristic large-billed bird of dry zone forests
Malabar Pied Hornbill — large, striking hornbill with a massive yellow-black casque
Blue-Faced Malkoha — a long-tailed, cryptic cuckoo of dense forest
Rufous Woodpecker — commonly heard drumming in the forest
Mountain Hawk-Eagle — a powerful highland eagle seen soaring over the mountain
Rufous-Bellied Hawk-Eagle — recorded at Ritigala
🐘 Mammals
✅ CONFIRMED — Wild elephants move through the Ritigala forest, particularly in the latter parts of the day. Fresh elephant dung on the access road is commonly reported by visitors and is confirmed by multiple independent accounts. Elephant presence is a genuine consideration and not a theoretical risk. Visit in the morning when elephants are typically less active near the road and ruins.
Sri Lanka Leopard — resident in the reserve
Sri Lanka Sloth Bear — present
Spotted Deer — common throughout the forest
Purple-Faced Langur — endemic, Endangered, present in the forest canopy
Toque Macaque — endemic, Endangered, present at forest edges
Wild Boar — common
🦋 Invertebrates
✅ CONFIRMED — Approximately 50 species of butterflies have been recorded at Ritigala. 20 species of freshwater fish and 16 species of land snails are documented within the reserve — all reflecting the ecological richness produced by the unusual microclimate.

⭐ THE LEGENDS — ALL TRADITIONS
⭐ LEGEND — THE HIMALAYAN FRAGMENT:
A Hindu and popular Buddhist tradition holds that Hanuman — the monkey god who assisted Rama in the Ramayana epic — was sent to the Himalayan mountains to collect a specific medicinal herb needed to heal a battle wound. Forgetting which specific herb was required, Hanuman cut an entire section of the Himalayan mountain range and carried it toward India. On his flight, a fragment of the mountain fell and landed in central Sri Lanka — creating the Ritigala mountain range. The legend holds that this Himalayan origin explains why Ritigala possesses such an extraordinary diversity of medicinal plants compared to the surrounding dry zone terrain.
This legend is the popular explanation for Ritigala's unique biodiversity. The scientific explanation is the orographic microclimate described above. Both explanations produce the same observable fact — an unusual concentration of medicinal and wet zone plants in the middle of Sri Lanka's dry zone.
⭐ LEGEND — THE SANSEVI HERB:
Local tradition holds that on the crests of Ritigala, a herb called Sansevi grows — believed to have the power of conferring longevity and curing all human illness. This herb has been sought by traditional healers for centuries. No plant matching these described properties has been scientifically validated, but the tradition reflects the genuine unusualness of the mountain's botanical richness.
⭐ LEGEND — THE YAKKA GUARDIANS:
All vegetation on Ritigala is said to be protected by Yakkas — guardian spirits of the mountain. The Mahavamsa chronicle records that Prince Pandukabhaya was assisted by Yakkas during his battles at the foot of Ritigala in the 3rd century BC. The scholar Walpola Rahula, in his History of Buddhism in Ceylon, wrote that the term Yaksa may denote both superhuman beings and certain pre-Buddhist aboriginal human tribes of Sri Lanka — suggesting that the Yakka tradition may have a historical kernel in the presence of indigenous peoples in the Ritigala area.

🎟️ ENTRY FEES AND PRACTICAL DETAILS — 2026
✅ CONFIRMED — Ritigala is included in the Cultural Triangle Ticket — the combined ticket covering Anuradhapura, Polonnaruwa, Sigiriya, Dambulla, and Kandy heritage sites.
Foreign adults: the Cultural Triangle round ticket covers approximately USD $50 and provides access to all major sites including Ritigala for a defined period
Day ticket for Ritigala specifically: approximately USD $25 as an individual site entry — verify current rates at the on-site archaeology office
Sri Lankan nationals: nominal local rate
Opening Hours: 8:00 AM to 5:00 PM daily — the site archaeology office is staffed during these hours. Visiting outside these hours is not recommended — the forest is dense, unmarked off the main path, and wild elephant presence in the late afternoon makes unsupervised late visits genuinely risky.
Compulsory Guide: A guide from the on-site Department of Archaeology office is required for all visitors. The guide fee is separate from the entry ticket and is paid at the archaeology office. This is not a bureaucratic formality — the forest paths beyond the main excavated trail are genuinely disorienting and the guide's knowledge of the site, its structures, and its wildlife is essential for a safe and informative visit.

🌤️ BEST TIME TO VISIT
February to April — Primary Recommendation
The dry season for the North Central Province. Comfortable morning temperatures, dry paths, good visibility through the forest, minimum leech activity. The ruins are most clearly visible when the undergrowth is drier and less dense. Wildlife is active at water sources during the dry season. March and April are particularly good — the dry season is at its most settled and the morning light through the forest canopy is extraordinary.
December to January
Good conditions. The northeast monsoon has recently passed, the forest is green and lush, and the paths are drying out after the monsoon season. Leeches may still be active in January.
May to September
The southwest monsoon brings rain to the Ritigala summit area even while the surrounding plains are dry. The summit mist and the extraordinary botanical spectacle of wet vegetation in a dry zone context is unique to this period and is specifically worth experiencing. However the paths are wet and slippery, leeches are abundant, and visibility through the misted forest is reduced. For visitors primarily interested in the biological phenomenon of the microclimate, this is actually the most revealing season to visit.
October to November
The northeast monsoon transition. Rain, wet paths, maximum leech activity. Not recommended.

🚌 GETTING THERE
🚗 From Habarana — Most Practical Base:
Habarana is 21 km from the site entrance — approximately 40 minutes by road. Turn off the Anuradhapura–Habarana A9 highway at the Ganewalpola junction, then 9 km on a secondary road to the archaeology office and car park. The road is passable by ordinary car in dry conditions.
🚗 From Sigiriya:
Approximately 30 km — about 45 minutes. Sigiriya and Ritigala on the same day is a natural and commonly made combination — Sigiriya or Pidurangala in the morning, Ritigala in the afternoon. However, given the morning recommendation for Ritigala, reversing this order — Ritigala in the morning, Sigiriya in the afternoon — is arguably better.
🚗 From Anuradhapura:
Approximately 40 to 43 km — about 1 hour via the A9 highway to Ganewalpola junction.
🚗 From Polonnaruwa:
Approximately 50 km — about 1 hour via Habarana.
🚗 From Colombo:
Approximately 180 km — about 4 hours via the A1 highway through Kurunegala and Habarana or via Kandy and Dambulla.
🛺 By Tuk-Tuk:
From Habarana junction, tuk-tuks are available for the round trip to Ritigala — negotiate a fixed rate including waiting time. The standard rate from Habarana is approximately 3,000 to 5,000 LKR for the vehicle for the full visit. The driver will wait at the car park while you explore. Most visits take 2 to 3 hours.

🏨 WHERE TO STAY
In Habarana — Most Convenient:
Habarana is the nearest town and the most practical base for Ritigala. It is also centrally located for visits to Sigiriya, Minneriya, Polonnaruwa, and Anuradhapura — making it one of the finest base towns for the Cultural Triangle.
Budget: Habarana Village by Cinnamon — mid-range property in village-style cottages with good facilities and central location. Rates approximately USD $80 to $100 per night.
Luxury: Cinnamon Lodge Habarana — a large, well-established resort with extensive grounds, multiple pools, wildlife safaris, and the full range of luxury facilities. The finest established property in Habarana. Rates approximately USD $200 per night.
Luxury: Aliya Resort and Spa — approximately 20 km from Habarana near Sigiriya, offering excellent facilities and well-organised safari booking. Rates from approximately USD $120 per night.
Near the site:
No accommodation within the reserve itself. The nearest guesthouses are in Kekirawa town, approximately 15 km from the Ganewalpola junction.

💡 ESSENTIAL TIPS — PRACTICAL ONLY
⏰ Arrive by 8:00 AM when the site opens. The morning hours are the finest for the visit — cool forest temperatures, active bird life, best light through the forest canopy, and minimum elephant activity near the path. The heat builds significantly from 10:00 AM onward and elephant activity near the ruins increases in the afternoon.
🦟 Apply leech repellent before entering the forest. The Ritigala forest supports abundant land leeches, particularly after any rain and during the monsoon periods. Apply DEET-based insect repellent or salt to footwear, socks, and lower trouser legs before beginning the walk. Wear long socks pulled over trouser cuffs. This is not optional precaution — leeches are confirmed abundant and the forest path is sufficiently long that multiple leeches will attach to unprepared visitors.
👟 Wear proper hiking shoes. The stone path is level and well-maintained but wet sections near the reservoir and the stream crossing are slippery. The surrounding terrain off the path involves uneven rock and root surfaces. Proper rubber-soled shoes are important. Flip-flops are entirely inappropriate.
🐘 Stay on the path and follow the guide's instructions on elephants. Wild elephants move through the Ritigala forest throughout the day and are confirmed in the area regularly. If elephants are sighted near the path, the guide will direct you appropriately. Never attempt to approach an elephant or deviate from the path toward undergrowth where animals may be present.
🔭 Bring binoculars for birds. The forest canopy of Ritigala supports a remarkable range of endemic and rare birds. The hornbills, hawk-eagles, and thrushes are best appreciated with binoculars. The bird activity is concentrated in the first two hours after dawn — another reason for the early morning visit.
📷 Give your camera time to adjust. Moving from bright open road conditions into the dense forest canopy requires lens adjustment from bright exterior to dark interior. The most photographically rewarding sections are the double-platform structures where shafts of light penetrate the canopy and illuminate the stone surfaces of the Padhanagharas.
💧 Carry sufficient water. There are no refreshment facilities within the site — not even a small shop. Carry a minimum of 1.5 litres of water per person. The combination of heat, humidity, and the 2 km of walking within the ruins makes dehydration a real consideration.
⏱️ Allow 2.5 to 3 hours. The main excavated trail covers approximately 2 km of winding forest path with ruins on both sides. Walking the full trail attentively — stopping to examine the double platforms, the reservoir, the cave inscriptions, and the forest ecology — takes 2 to 2.5 hours minimum. Rushing through in 45 minutes produces only a superficial impression of a site that rewards careful, attentive exploration.
📅 Combine with Sigiriya and Pidurangala. The three sites are within 45 minutes of each other. Pidurangala at dawn, Sigiriya mid-morning, Ritigala afternoon — or Ritigala at 8:00 AM, Sigiriya at midday, Pidurangala for the sunset — are both viable single-day programmes covering three of the most extraordinary sites in the Cultural Triangle.
🎒 This is not a casual tourist site. Unlike Sigiriya with its managed staircases, tour guide narrations, and souvenir shops, Ritigala is partially excavated ruins in an active forest. The experience is genuinely different from any other heritage site in Sri Lanka. Visitors who approach it with patience, curiosity, and physical preparation will find it one of the most remarkable places they have ever visited in Asia. Visitors who arrive expecting a managed tourist attraction will find it underdeveloped. It is emphatically the former.`, 
      SI: `🏔️ රිටිගල
ශ්‍රී ලංකාවේ අද්භූත නටඹුන් — සම්පූර්ණ තහවුරු කළ මාර්ගෝපදේශය

✅ අවංක ලේබල් කිරීම
✅ තහවුරු කර ඇත — පුරාවිද්‍යාව, ශිලා ලේඛන, රජයේ වාර්තා සහ විද්‍යාත්මක සමීක්ෂණ මගින්
⭐ පුරාවෘත්තය / සම්ප්‍රදාය — අවංකව විශ්වාස කරන නමුත් ස්වාධීනව තහවුරු කළ නොහැක
⚠️ අවිනිශ්චිත — ඉතිහාසඥයින් අතර විවාදයට ලක්ව ඇත

📍 ස්ථානය
පළාත: උතුරු මැද පළාත, ශ්‍රී ලංකාව
දිස්ත්‍රික්කය: අනුරාධපුර දිස්ත්‍රික්කය
පිහිටීම: අනුරාධපුරය සහ පොළොන්නරුව අතර, වියළි කලාපීය තැනිතලාවෙන් හදිසියේම ඉහළට මතු වේ
උසම කඳු මුදුනේ උස: මුහුදු මට්ටමේ සිට මීටර් 766 — අවට තැනිතලාවට වඩා මීටර් 600
හබරණ සිට දුර: දළ වශයෙන් කි.මී. 21 — මාර්ගයෙන් විනාඩි 40 ක් පමණ
අනුරාධපුරයේ සිට දුර: දළ වශයෙන් කි.මී. 40 සිට 43 දක්වා — මාර්ගයෙන් පැය 1 ක් පමණ
සීගිරියේ සිට දුර: දළ වශයෙන් කි.මී. 30 — මාර්ගයෙන් විනාඩි 45 ක් පමණ
පොළොන්නරුවේ සිට දුර: දළ වශයෙන් කි.මී. 50 — මාර්ගයෙන් පැය 1 ක් පමණ
කොළඹ සිට දුර: දළ වශයෙන් කි.මී. 180 — මාර්ගයෙන් පැය 4 ක් පමණ
ප්‍රවේශ මාර්ගය: ගනේවල්පොල හන්දියෙන් අනුරාධපුර-හබරණ අධිවේගී මාර්ගයෙන් හැරෙන්න — පුරාවිද්‍යා භූමියේ පිවිසුමට මාර්ගයේ කි.මී. 9 ක් පමණ

🏔️ රිටිගල යනු කුමක්ද
✅ තහවුරු කර ඇත — රිටිගල යනු ශ්‍රී ලංකාවේ උතුරු මැද පළාතේ වියළි කලාපයේ පිහිටි කඳුවැටියක් සහ පැරණි බෞද්ධ ආරාම සංකීර්ණයකි. එය එකවරම පුරාවිද්‍යාත්මකව අසාමාන්‍ය ස්ථානවලින් එකක් වන අතර මුළු රටේම ජීව විද්‍යාත්මකව සුවිශේෂී පරිසර පද්ධතිවලින් එකකි. කරුණු තුනක් එය ශ්‍රී ලංකාවේ වෙනත් ඕනෑම ගමනාන්තයකට වඩා වෙනස් කරයි.
✅ තහවුරු කර ඇත — පළමුව, නටඹුන්. රිටිගල ආරාමයේ ශ්‍රී ලංකාවේ වෙනත් සෑම පැරණි ස්ථානයකම දක්නට ලැබෙන සාම්ප්‍රදායික බෞද්ධ විහාර අයිකන කිසිවක් අඩංගු නොවේ — ස්තූප නැත, බෝධියක් නැත, සිද්ධස්ථානවල බුදු පිළිම නැත. ඒ වෙනුවට මෙම සංකීර්ණය යනු ගල් ඇතිරූ ද්විත්ව වේදිකා, වංගු සහිත වනාන්තර මාර්ග, ගල් පාලමක්, ගල් ජලාශ සහ භාවනා මංපෙත් ජාලයකි.
✅ තහවුරු කර ඇත — දෙවනුව, ක්ෂුද්‍ර දේශගුණය. රිටිගල යනු උතුරු ශ්‍රී ලංකාවේ උසම හුදකලා කන්දයි — සෑම දිශාවකටම බාධාවකින් තොරව විහිදෙන පැතලි අවට තැනිතලාවට වඩා මීටර් 600 ක් ඉහළට නැඟී ඇත. මෙම උස ශ්‍රී ලංකාවේ වියළිම කලාපයක මධ්‍යයේ සුවිශේෂී තෙත් ක්ෂුද්‍ර දේශගුණයක් නිර්මාණය කරයි.
✅ තහවුරු කර ඇත — තෙවනුව, වායුගෝලය. සීගිරියට හෝ අනුරාධපුර පූජනීය නගරයට යන සංචාරකයින් සංඛ්‍යාවෙන් ඉතා කුඩා කොටසක් රිටිගලට පැමිණේ. නටඹුන් අර්ධ වශයෙන් කැණීම් කර ඇති අතර අර්ධ වශයෙන් තවමත් කැලෑව විසින් ගිල ගනිමින් පවතී.

📜 නම — තහවුරු කළ සහ අවිනිශ්චිත
✅ තහවුරු කර ඇත — කන්ද සඳහා පැරණි සිංහල සහ පාලි නම අරිට්ඨ පබ්බත විය — අරිට්ඨ යන්නෙහි නිශ්චිත අර්ථ නිරූපණය මත පදනම්ව බිහිසුණු කන්ද හෝ ආරක්ෂිත පර්වතය යන්නයි.
✅ තහවුරු කර ඇත — විකල්ප ව්‍යුත්පන්නයක් — ද විශ්වාසදායක — කන්දේ මැද බෑවුම්වල වැඩෙන ගස් විශේෂයක් වන රිටි ගස් වලට නම සම්බන්ධ කරයි.
✅ තහවුරු කර ඇත — අරිට්ඨ යන නම අරිට්ඨ නම් ඓතිහාසික චරිතය සමඟ ද සම්බන්ධ විය — පසුව පළමු ශ්‍රී ලාංකික රහතන් වහන්සේ බවට පත් වූ දේවානම්පියතිස්ස රජුගේ ප්‍රධාන අමාත්‍යවරයා — ක්‍රි.පූ. 3 වන සියවසේදී රිටිගල සිය පැවිදි ජීවිතය ගත කළ බවට වාර්තා වේ.

📜 ඉතිහාසය — තහවුරු කළ කරුණු
🏔️ පූර්ව බෞද්ධ සහ මුල්ම මානව පැවැත්ම
✅ තහවුරු කර ඇත — පණ්ඩුකාභය කුමරු — පසුව පණ්ඩුකාභය රජු බවට පත් වූ අතර ක්‍රි.පූ. 437 සිට 367 දක්වා පාලනය කළේය — සිංහාසනයට පැමිණීම වැළැක්වීමට උත්සාහ කළ ඔහුගේ මාමාවරුන් අට දෙනාට එරෙහිව ඔහුගේ හමුදා මෙහෙයුම් වලදී රිටිගල රැකවරණයක් සහ කඳවුරක් ලෙස භාවිතා කළේය.
✅ තහවුරු කර ඇත — ක්‍රි.පූ. 1 වන සියවසේ සිට කැටයම් කරන ලද කටාරම් සහිත භික්ෂූන් වහන්සේලා සඳහා සකස් කරන ලද ගල් ගුහා. රිටිගල රක්ෂිතය සහ ඒ අවට ප්‍රදේශය තුළ මෙවැනි ගුහා 74 ක් වත් ලේඛනගත කර ඇත.
✅ තහවුරු කර ඇත — ක්‍රි.පූ. 3 වන සියවස පමණ වන විට, අරිට්ඨ — ක්‍රි.පූ. 247 දී මිහිඳු රහතන් වහන්සේගේ පැමිණීමෙන් පසු බුදුදහම වැළඳගත් දේවානම්පියතිස්ස රජුගේ ප්‍රධාන අමාත්‍යවරයා — භික්ෂුවක් වීමෙන් පසු රිටිගල සිය පැවිදි ජීවිතය ගත කළේය.
🏛️ ලංකා විහාරය — ක්‍රි.පූ. 187 සිට 177 දක්වා
✅ තහවුරු කර ඇත — සූරතිස්ස රජු ක්‍රි.පූ. 187 සිට 177 දක්වා ඔහුගේ පාලන සමයේදී රිටිගල කන්ද පාමුල ලංකා විහාරය ඉදි කළේය.
🏛️ අරිට්ඨ විහාරය — ක්‍රි.පූ. 59 සිට 50 දක්වා
✅ තහවුරු කර ඇත — ලජ්ජතිස්ස රජු ක්‍රි.පූ. 59 සිට 50 දක්වා ඔහුගේ පාලන සමයේදී කන්ද මත අරිට්ඨ විහාරය ඉදි කළේය.
👑 පළමුවන සේන රජු සහ පාංශුකූලික භික්ෂූන් — ක්‍රි.ව. 9 වන සියවස
✅ තහවුරු කර ඇත — රිටිගල සංවර්ධනයේ වාස්තු විද්‍යාත්මකව වඩාත්ම සුවිශේෂී අදියර සිදු වූයේ ක්‍රි.ව. 9 වන සියවසේ පළමුවන සේන රජුගේ පාලන සමයේදීය.
✅ තහවුරු කර ඇත — පාංශුකූලිකයන් යනු ථෙරවාද බුදුදහම තුළ පවතින අන්තවාදී තාපස පිළිවෙත තෝරා ගත් බෞද්ධ භික්ෂූන් ය.
✅ තහවුරු කර ඇත — පාංශුකූලිකයන් රිටිගල තෝරා ගත්තේ ග්‍රාමීය ජීවිතයෙන් සහ සාම්ප්‍රදායික සමාජයෙන් එහි හුදකලා වීම නිසාමය.
✅ තහවුරු කර ඇත — රිටිගල නටඹුන් නිර්වචනය කරන සුවිශේෂී ද්විත්ව වේදිකා ව්‍යුහයන් පාංශුකූලික භාවිතය සඳහා විශේෂයෙන් ඉදිකරන ලදී.
⚔️ අතහැර දැමීම — 10 සිට 12 වන සියවස
✅ තහවුරු කර ඇත — අනුරාධපුරය විනාශ කළ 10 වන සහ 11 වන සියවස්වල දකුණු ඉන්දීය ආක්‍රමණවලින් පසු රිටිගල අතහැර දමන ලදී.
🔬 නැවත සොයා ගැනීම — 19 වන සියවස
✅ තහවුරු කර ඇත — බ්‍රිතාන්‍ය යටත් විජිත නිලධාරීන් 19 වන සියවසේදී නටඹුන් නැවත සොයා ගත්හ.
🌿 දැඩි ස්වභාව රක්ෂිතයක් ලෙස ප්‍රකාශයට පත් කිරීම — 1941
✅ තහවුරු කර ඇත — රිටිගල 1941 නොවැම්බර් 7 වන දින හෙක්ටයාර 1,528 ක ප්‍රදේශයක් ආවරණය වන පරිදි දැඩි ස්වභාව රක්ෂිතයක් ලෙස ප්‍රකාශයට පත් කරන ලදී.

🏗️ ආරාම නටඹුන් — සම්පූර්ණ තහවුරු කළ විස්තර
🏊 බන්දා පොකුණ — චාරිත්‍රානුකූල ස්නානය කරන ටැංකිය
✅ තහවුරු කර ඇත — ආරාම සංකීර්ණයේ පිවිසුම ආරම්භ වන්නේ බන්දා පොකුණෙනි — විශිෂ්ට ඉංජිනේරු නිරවද්‍යතාවයකින් යුත් විශාල පැරණි ජලාශයකි.
🌉 ගල් පාලම
✅ තහවුරු කර ඇත — බන්දා පොකුණෙන් ඔබ්බට, තවමත් නොවෙනස්ව පවතින ගල් පුවරු පාලමක් ආරාමයට යන මාර්ගයේ ඇළක් හරහා ගමන් කරයි.
🧘 ද්විත්ව වේදිකා ව්‍යුහයන් — පධානඝර
✅ තහවුරු කර ඇත — රිටිගල නිර්වචනය කරන වාස්තු විද්‍යාත්මක ලක්ෂණය වන්නේ ආරාම සංකීර්ණය හරහා වංගු සහිත ගල් මාර්ගයේ පෙළ ගැසී ඇති ද්විත්ව වේදිකා ව්‍යුහයන් මාලාවයි — පාලි භාෂාවෙන් පධානඝර ලෙස හැඳින්වේ.
🗺️ ගල් මාර්ගය — ආරාම පාර
✅ තහවුරු කර ඇත — සම්පූර්ණ ආරාම සංකීර්ණය කි.මී. 2 ක් පමණ කැලෑව හරහා කන්ද ඉහළට වංගු වන අඛණ්ඩ ගල් ඇතිරූ මාර්ගයකින් සම්බන්ධ වේ.
🏥 රෝහල
✅ තහවුරු කර ඇත — රිටිගල ආරාම සංකීර්ණය තුළ රෝහලක — වෛද්‍ය ප්‍රතිකාර මධ්‍යස්ථානයක — නටඹුන් හඳුනාගෙන ඇත.
🏛️ සිද්ධස්ථාන කාමර නටඹුන්
✅ තහවුරු කර ඇත — සංකීර්ණය තුළ සිද්ධස්ථාන කාමරයක නටඹුන් හඳුනාගෙන ඇත.
🏛️ උපෝසථ ශාලා නටඹුන්
✅ තහවුරු කර ඇත — උපෝසථ ශාලාවකට අනුකූල නටඹුන් — භික්ෂූන් වහන්සේලා පෝය දිනවල රැස් වූ ශාලාව — හඳුනාගෙන ඇත.
📜 ගල් ශිලා ලේඛන 152
✅ තහවුරු කර ඇත — රිටිගල රක්ෂිතය සහ ඒ අවට ප්‍රදේශය තුළ ගල් ශිලා ලේඛන 152 ක් ලේඛනගත කර ඇත.
🪨 ගල් ගුහා 74
✅ තහවුරු කර ඇත — ඉහළ දාරවල කැටයම් කරන ලද කටාරම් සහිත ගල් ගුහා 74 ක් වත් ලේඛනගත කර ඇත.

🌿 සුවිශේෂී ක්ෂුද්‍ර දේශගුණය — විද්‍යාව තහවුරු කර ඇත
✅ තහවුරු කර ඇත — රිටිගල වඩාත්ම අසාමාන්‍ය ස්වාභාවික ලක්ෂණය වන්නේ එහි ක්ෂුද්‍ර දේශගුණයයි — ශ්‍රී ලංකාවේ වියළි කලාපයේ සැබවින්ම අද්විතීය කාලගුණ විද්‍යාත්මක සංසිද්ධියකි.
✅ තහවුරු කර ඇත — මැයි සිට සැප්තැම්බර් දක්වා නිරිතදිග මෝසම් සමයේදී, අවට තැනිතලා නියඟ තත්ත්වයන් අත්විඳින විට සහ වෘක්ෂලතාදිය දුඹුරු සහ වියළී ගිය විට, රිටිගල කඳු මුදුන් මීදුමෙන් සහ වලාකුළු වලින් වැසී ඇත.
✅ තහවුරු කර ඇත — රිටිගල රක්ෂිතය තුළ සැලකිය යුතු ගංගා තුනක් ආරම්භ වේ — නා ඇළ, දේව ඇළ සහ මල්වතු ඔය.
✅ තහවුරු කර ඇත — කඳු මුදුන සහ පාමුල අතර උෂ්ණත්ව වෙනස නාටකාකාරය.

🌿 ජෛව විවිධත්වය — තහවුරු කළ විද්‍යාත්මක දත්ත
🌿 ශාක — අසාමාන්‍ය ආවේණිකත්වය
✅ තහවුරු කර ඇත — රිටිගල රක්ෂිතය තුළ පහළ සහ ඉහළ ශාක වර්ග 417 ක් ලේඛනගත කර ඇත. මින් 337 ක් සපුෂ්ප ශාක වේ.
✅ තහවුරු කර ඇත — ලේඛනගත සපුෂ්ප ශාක විශේෂ 96 ක් ආයුර්වේද වෛද්‍ය විද්‍යාවේ භාවිතා කරන බව දන්නා කරුණකි.
🦎 උරගයින් — නව ආවේණික විශේෂයක්
✅ තහවුරු කර ඇත — Cnemaspis retigalensis — රිටිගල දිවා හූනා — යනු රිටිගලින් එකතු කරන ලද නිදර්ශක වලින් විශේෂයෙන් විස්තර කරන ලද ආවේණික හූනන් විශේෂයකි.
🦅 පක්ෂීන් — විශේෂ 100 කට වඩා
✅ තහවුරු කර ඇත — රිටිගල කුරුලු විශේෂ 100 කට වඩා ලේඛනගත කර ඇත.
🐘 ක්ෂීරපායින්
✅ තහවුරු කර ඇත — වන අලි රිටිගල වනාන්තරය හරහා ගමන් කරයි, විශේෂයෙන් දවසේ අග භාගයේදී.
🦋 අපෘෂ්ඨවංශීන්
✅ තහවුරු කර ඇත — සමනලුන් විශේෂ 50 ක් පමණ රිටිගල වාර්තා වී ඇත.

⭐ පුරාවෘත්ත — සියලුම සම්ප්‍රදායන්
⭐ පුරාවෘත්තය — හිමාලයානු කොටස:
රාමායණ වීර කාව්‍යයේ රාමාට සහාය වූ වඳුරු දෙවියා වන හනුමාන් — සටන් තුවාලයක් සුව කිරීමට අවශ්‍ය විශේෂිත ඖෂධීය පැළෑටියක් එකතු කිරීම සඳහා හිමාලය කඳුකරයට යවන ලද බව හින්දු සහ ජනප්‍රිය බෞද්ධ සම්ප්‍රදායක් පවසයි.
⭐ පුරාවෘත්තය — සංජීවනි ඖෂධය:
රිටිගල කඳු මුදුන්වල සංජීවනි නම් ඖෂධීය පැළෑටියක් වැඩෙන බව දේශීය සම්ප්‍රදායක් පවසයි — එය දීර්ඝායුෂ ලබා දීමේ සහ සියලුම මිනිස් රෝග සුව කිරීමේ බලය ඇති බව විශ්වාස කෙරේ.
⭐ පුරාවෘත්තය — යක්ෂ ආරක්ෂකයින්:
රිටිගල සියලුම වෘක්ෂලතාදිය යක්ෂයින් විසින් ආරක්ෂා කරන බව කියනු ලැබේ — කන්දේ ආරක්ෂක ආත්මයන්.

🎟️ ප්‍රවේශ ගාස්තු සහ ප්‍රායෝගික විස්තර — 2026
✅ තහවුරු කර ඇත — රිටිගල සංස්කෘතික ත්‍රිකෝණ ප්‍රවේශ පත්‍රයට ඇතුළත් කර ඇත.
විවෘත වේලාවන්: දිනපතා පෙරවරු 8:00 සිට පස්වරු 5:00 දක්වා.
අනිවාර්ය මාර්ගෝපදේශක: සියලුම අමුත්තන් සඳහා ස්ථානීය පුරාවිද්‍යා දෙපාර්තමේන්තු කාර්යාලයෙන් මාර්ගෝපදේශකයෙකු අවශ්‍ය වේ.

🌤️ සංචාරය කිරීමට හොඳම කාලය
පෙබරවාරි සිට අප්‍රේල් දක්වා — ප්‍රාථමික නිර්දේශය
උතුරු මැද පළාත සඳහා වියළි සමය. සුවපහසු උදෑසන උෂ්ණත්වය, වියළි මාර්ග, වනාන්තරය හරහා හොඳ දෘශ්‍යතාව, අවම කූඩැල්ලන්ගේ ක්‍රියාකාරිත්වය.

🚌 එහි යාම
🚗 හබරණ සිට — වඩාත්ම ප්‍රායෝගික පදනම:
හබරණ පිවිසුමේ සිට කි.මී. 21 කි — මාර්ගයෙන් විනාඩි 40 ක් පමණ.
🚗 සීගිරියේ සිට:
දළ වශයෙන් කි.මී. 30 — විනාඩි 45 ක් පමණ.
🚗 අනුරාධපුරයේ සිට:
දළ වශයෙන් කි.මී. 40 සිට 43 දක්වා — පැය 1 ක් පමණ.
🚗 පොළොන්නරුවේ සිට:
දළ වශයෙන් කි.මී. 50 — පැය 1 ක් පමණ.
🚗 කොළඹ සිට:
දළ වශයෙන් කි.මී. 180 — පැය 4 ක් පමණ.

🏨 නැවතී සිටිය යුතු ස්ථානය
හබරණ — වඩාත්ම පහසු:
හබරණ යනු ළඟම ඇති නගරය වන අතර රිටිගල සඳහා වඩාත්ම ප්‍රායෝගික පදනම වේ.

💡 අත්‍යවශ්‍ය උපදෙස් — ප්‍රායෝගික පමණි
⏰ වෙබ් අඩවිය විවෘත වන විට පෙරවරු 8:00 ට පැමිණෙන්න.
🦟 වනාන්තරයට ඇතුළු වීමට පෙර කූඩැල්ලන් විකර්ෂක යොදන්න.
👟 නිසි කඳු නැගීමේ සපත්තු පළඳින්න.
🐘 මාර්ගයේ රැඳී සිටින්න සහ අලි ඇතුන් පිළිබඳ මාර්ගෝපදේශකයාගේ උපදෙස් අනුගමනය කරන්න.
🔭 කුරුල්ලන් සඳහා දුරදක්න රැගෙන එන්න.
📷 ඔබේ කැමරාවට ගැලපීමට කාලය දෙන්න.
💧 ප්‍රමාණවත් තරම් ජලය රැගෙන යන්න.
⏱️ පැය 2.5 සිට 3 දක්වා කාලය ලබා දෙන්න.
📅 සීගිරිය සහ පිදුරංගල සමඟ ඒකාබද්ධ කරන්න.
🎒 මෙය සාමාන්‍ය සංචාරක ස්ථානයක් නොවේ.`
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
      { id: "mihintale", name: { EN: "Mihintale", SI: "මිහින්තලේ" }, image: "https://i.pinimg.com/1200x/1b/95/f6/1b95f6de2957767658ef8f7cb1ef658c.jpg" },
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
  { id: "unawatuna", name: { EN: "Unawatuna", SI: "උණවටුන" }, category: "beach", image: "https://i.pinimg.com/736x/09/4c/77/094c771bcf9d20988d5cb0bd21e91487.jpg", gallery: ["https://i.pinimg.com/736x/09/4c/77/094c771bcf9d20988d5cb0bd21e91487.jpg"], 
    detailedAbout: {
      EN: `🌊 UNAWATUNA — උනවටුන
Sri Lanka's Southern Jewel — Complete Verified Guide

✅ HONEST LABELLING THROUGHOUT
✅ CONFIRMED — verified by historical records, archaeological evidence, and physical observation
⭐ LEGEND / TRADITION — cultural tradition or folklore, not independently verifiable
⚠️ UNCERTAIN — figures vary between sources or are debated

📍 LOCATION
Province: Southern Province, Sri Lanka
District: Galle District
Position: Southeastern shore of a sheltered bay, on the southern coast of Sri Lanka
Elevation: approximately 5 meters above sea level
Distance from Galle Fort: approximately 5 to 6 km southeast — about 10 to 15 minutes by tuk-tuk
Distance from Colombo: approximately 108 to 125 km south — about 2 to 2.5 hours by road or train
Distance from Mirissa: approximately 30 km east — about 40 to 50 minutes
Distance from Weligama: approximately 20 km east — about 30 minutes
Distance from Hikkaduwa: approximately 15 km west — about 20 minutes
Nearest railway station: Unawatuna Railway Station — on the Colombo–Matara coastal line, within walking distance of the beach

🌊 WHAT IS UNAWATUNA
✅ CONFIRMED — Unawatuna is a small coastal town approximately 5 km southeast of Galle city centre on Sri Lanka's southern coast. It is shaped around a crescent-shaped bay with a banana-curved beach approximately 800 meters long — walkable end to end in about 15 minutes. The bay is sheltered by a wooded headland — Rumassala Hill — to the west and a smaller rocky point to the east, creating naturally calm, protected swimming conditions.
✅ CONFIRMED — Unawatuna is one of the most visited beach destinations in Sri Lanka, combining a beautiful sheltered beach, clear shallow water, coral reef snorkelling, proximity to Galle Fort, a vibrant café and restaurant scene, and a lively but not overwhelming atmosphere. It draws a broad mix of travellers — backpackers, families, honeymooners, and visitors using it as a base for the broader southern coast.
✅ CONFIRMED — Despite significant tourism development in the past decade, Unawatuna still supports a population of the endemic and Endangered purple-faced langur — unusual for a developed beach town. The remaining forested areas of Rumassala Hill provide the habitat that keeps this shy endemic monkey present in the area.

📜 NAME AND MEANING — CONFIRMED AND TRADITION
⚠️ UNCERTAIN — NAME ORIGIN:
Two explanations for the name Unawatuna circulate and both are widely repeated:
The most commonly cited explanation derives the name from the Sinhala phrase Una-Watuna — meaning fell into or that which fell down — connecting the name to the Ramayana legend of Hanuman dropping a piece of the Himalayan mountains at this location.
An alternative explanation — cited by some sources — derives the name from a shipwreck that occurred off the coast, with una-watuna meaning fell into the saltwater.
⚠️ CONFIRMED — UNCERTAINTY: Neither etymology has been definitively confirmed by linguistic or historical scholarship. Both explanations are plausible and widely believed. The true origin of the name is uncertain.

📜 HISTORY — CONFIRMED FACTS
🏛️ Ancient Seaport
✅ CONFIRMED — Unawatuna's position on the southern coast made it an important maritime location in ancient times. The area attracted traders from China, India, Persia, Egypt, and Greece — a consequence of the Indian Ocean trade routes that made the southern Sri Lankan coast a natural stopping point for vessels crossing between the Persian Gulf, India, and Southeast Asia.
🛕 The Devol Devalaya — Over 1,000 Years Old
✅ CONFIRMED — A kovil — Hindu shrine — at the western point of the Unawatuna bay has a documented history of over 1,000 years. This is the Devol Devalaya — dedicated to the deity Devol, one of the guardian deities of Sri Lanka. The shrine predates all European presence in Sri Lanka and is among the oldest continuously active religious sites on the southern coast. Thousands of pilgrims visit during the annual Esala festival — a new rice offering ceremony during which cultivators bring a share of their crop and pray for timely rain and plentiful harvest.
⭐ LEGEND — Devol Deity:
Local tradition records that Devol was a prince from India who was shipwrecked off this coast. The Goddess of Chastity, Pattini, created a wall of fire to prevent him coming ashore. Being a person of supreme power, he set in motion a tsunami with his foot to extinguish the fire and landed at Unawatuna. He is said to have lived here and helped the people in various ways. This tradition is sincerely held locally and is the foundation of the Devol Devalaya's significance.
🛕 The Suwethamali Dagoba
✅ CONFIRMED — Built on the hill immediately adjacent to the Devol Devalaya, the Suwethamali Dagoba is a Buddhist stupa on the hillock at the western end of the bay. It was built after the Devalaya and the two religious structures — one Hindu, one Buddhist — coexist on the same hillock, reflecting the syncretic religious culture of the southern Sri Lankan coast.
⭐ TRADITION — The dagoba is said to contain a hair relic of the Buddha. This is a religious tradition and is not independently verifiable.
🇳🇱 Dutch Colonial Period — 1640
✅ CONFIRMED — After defeating the Portuguese at Negombo, the Dutch fleet sailed south and landed at Unawatuna in 1640 before marching to Galle. The Portuguese encountered the Dutch forces at Magalle — where the Closenberg Hotel now stands — and fierce fighting occurred. Over 400 Dutch soldiers were killed in the engagement and only 49 Portuguese survived to retreat to the fortification at Galle, where they were held under siege for four days before surrendering.
✅ CONFIRMED — The Dutch subsequently built administrative residences in Unawatuna. Confirmed structures from this period include the Nooit Gedacht — a Dutch colonial mansion whose name means Never Thought in Dutch — which survives in modified form. The area known as Parangiyawatta — meaning Land of the Portuguese — preserves the memory of the earlier Portuguese presence in the place name. The area called Ja-Kotuwa suggests a settlement of Javanese people — known as Hollanders — who may have maintained some fortification here.
🌊 The 2004 Tsunami
✅ CONFIRMED — The 2004 Indian Ocean Tsunami struck Unawatuna with great destructive force on December 26, 2004. The bay's normally sheltered geography offered no protection — the tsunami waves overwhelmed the entire beachfront. Significant loss of life and destruction of infrastructure occurred. The town was substantially rebuilt following the disaster and the Unawatuna that exists today is largely a post-tsunami reconstruction.

🏖️ THE BEACHES — CONFIRMED DETAILS
🏖️ Unawatuna Main Beach
✅ CONFIRMED — The main beach is an 800-meter crescent of sand curving around the sheltered bay. The water is warm year-round — approximately 27 to 29 degrees Celsius. The bay's sheltered geography creates naturally calm swimming conditions for most of the year, making it one of the safest swimming beaches on the southern coast. The beach is lined with cafés, restaurants, guesthouses, and sun lounger operators.
⚠️ WATER QUALITY CONCERN:
✅ CONFIRMED — Unawatuna beach has experienced documented water quality issues in recent years. Reports of sewage contamination affecting the bay water have been published, particularly in the period around and after heavy rain when the drainage system in the surrounding town overflows into the bay. This is a genuine and documented environmental concern. Check current water quality reports before swimming, particularly after heavy rain.
🌿 Jungle Beach
✅ CONFIRMED — Jungle Beach is a small, quieter bay immediately west of the main beach, accessible by a 30-minute walk along the rocky headland path or by a short boat ride from the main beach. The bay has calmer, cleaner water than the main beach in most conditions and a jungle-backed shoreline that is more scenic and less developed. A second smaller and even quieter bay is accessible by continuing along the rocks beyond Jungle Beach. Both bays are best visited in the morning before the heat and any afternoon crowd arrive.
🏖️ Dalawella Beach
✅ CONFIRMED — Approximately 2 km east of Unawatuna, Dalawella Beach is a quieter stretch of sand with a more relaxed atmosphere than the main beach. Famous for the rope swing — a rope hung from a palm tree leaning over the water — which became one of the most photographed beach attractions in Sri Lanka and is credited by some travel writers with significantly boosting Sri Lanka's international social media profile as a destination from approximately 2015 onward. The rope swing costs approximately 500 LKR for three swings. Adjacent to the swing, a coconut tree leaning dramatically over a rock over the sea creates an extremely photogenic natural composition particularly at sunset.
🏖️ Mihiripenna Beach and Koggala Beach
✅ CONFIRMED — Continuing east along the coast from Dalawella, Mihiripenna and Koggala offer progressively quieter and less developed stretches of the southern shoreline. Koggala — approximately 8 km east of Unawatuna — is the location of the famous stilt fishermen, traditional fishermen who fish from poles embedded in the shallow reef, perching above the water in a technique unique to this section of the Sri Lankan coast. The stilt fishing is a genuine traditional practice, though today the stilt fishermen near the main road often charge tourists for photographs.

🐠 MARINE LIFE AND WATER ACTIVITIES
🐠 Coral Reef and Snorkelling
✅ CONFIRMED — A coral reef lies offshore in the Unawatuna bay at shallow depth — accessible by swimming from the main beach. The reef supports a range of tropical fish species, sea turtles, and invertebrates. The reef is shallow enough for beginner snorkellers without any equipment beyond a mask and snorkel.
⚠️ REEF CONDITION CONCERN:
✅ CONFIRMED — The coral reef at Unawatuna has experienced documented degradation in recent decades. Coral bleaching events — linked to elevated sea surface temperatures — combined with physical damage from tourist activity, boat anchoring, and the impacts of the 2004 tsunami have reduced the reef's condition compared to its former state. The reef retains biological interest and snorkelling value but is not the pristine coral ecosystem it was several decades ago.
🤿 Scuba Diving
✅ CONFIRMED — Several dive schools operate from Unawatuna beach offering beginner certification courses and guided dives. Notable dive sites accessible from Unawatuna include:
Rock Island — a shallow reef dive ideal for beginners, 10 to 15 minutes by boat from the beach
The Wreck of the Rangoon — a 19th-century British cargo ship sunk in the bay; accessible at 15 to 20 meters depth; one of the most historically interesting dive sites on the southern coast
Multiple coral reef sites along the Unawatuna headland
Typical costs: a beginner discover dive with equipment approximately USD $40 to $60; a two-dive guided trip for certified divers approximately USD $60 to $80; PADI Open Water certification approximately USD $300 to $350 for a 3 to 4 day course.
🚣 Other Water Activities
Glass-bottom boat tours — 30 to 60-minute tours over the reef for non-swimmers; approximately 1,500 to 3,000 LKR per person
Kayaking — single and double kayaks available for rent from beach operators; approximately 500 to 800 LKR per hour
Stand-Up Paddleboarding — available from several beach operators; approximately 1,000 LKR per hour
Surfing — Unawatuna's main beach is not a surf beach due to its sheltered bay geography. Dewata Beach — a short distance from Unawatuna — has a sand-bottomed beach break suitable for beginners. Weligama, 20 km east, is the finest beginner surf destination on the southern coast.

🏛️ CULTURAL AND HISTORICAL SITES
⛩️ The Devol Devalaya
✅ CONFIRMED — Located at the western rocky point of the bay. A Hindu kovil with a confirmed history of over 1,000 years. An active place of worship. The Esala festival here draws thousands of pilgrims annually. Remove shoes before entering the shrine area. Visitors are welcome but respectful behaviour and appropriate dress are required.
🕌 The Suwethamali Dagoba
✅ CONFIRMED — Immediately adjacent to the Devol Devalaya on the same hillock. An active Buddhist stupa. The combination of Hindu and Buddhist sacred structures sharing the same hillock above the bay is a distinctive expression of the syncretic religious culture of the southern Sri Lankan coast.
🕊️ Japanese Peace Pagoda
✅ CONFIRMED — A white Buddhist stupa built by Japanese monks of the Nipponzan Myohoji Order on the summit of Rumassala Hill above Unawatuna. The Peace Pagoda was constructed to promote peace — part of a global network of Peace Pagodas built by this Japanese Buddhist order at significant locations worldwide. The pagoda on Rumassala Hill was built predominantly by a single elderly Japanese monk over many years.
✅ CONFIRMED — The pagoda commands a panoramic view across the entire Unawatuna bay, the surrounding coastline, and on clear days Galle Fort visible to the northwest. The hike to the pagoda from the main beach takes approximately 20 to 30 minutes through the forested hill. The path passes through the Rumassala forest — home to the purple-faced langur and a range of bird species.
✅ CONFIRMED — Construction is ongoing adjacent to the Peace Pagoda of a larger structure in honour of Hanuman — built by Japanese Mahayana Buddhist monks. This structure references the Ramayana tradition associating Rumassala Hill with the Himalayan mountain fragment dropped by Hanuman.
🛕 Yatagala Rajamaha Viharaya
✅ CONFIRMED — An ancient Buddhist rock temple located approximately 10 minutes by tuk-tuk from Unawatuna beach. The temple is set against and within massive granite boulders — the cave shrine is carved from and built beneath a natural rock overhang. The temple contains a large reclining Buddha and ancient frescoes. The surrounding landscape of lush rice paddies and massive rocks creates an extraordinary pastoral-sacred atmosphere profoundly different from the beach environment of Unawatuna.
✅ CONFIRMED — The Bodhi tree at Yatagala Rajamaha Viharaya is documented to be over 1,000 years old — one of the oldest confirmed Bodhi trees on the southern coast of Sri Lanka. Sitting beneath this ancient tree in the silence of the temple compound is described by many visitors as one of the most calming experiences available near Unawatuna.
🏰 Galle Fort (5 to 6 km northwest)
✅ CONFIRMED — Galle Fort is the most significant heritage site immediately adjacent to Unawatuna. A UNESCO World Heritage Site, the largest remaining European colonial fortress in Asia, with three colonial periods — Portuguese, Dutch, and British — all represented in the surviving architecture. Full details in the Galle Fort guide above.

🌿 RUMASSALA HILL — NATURE AND BIODIVERSITY
✅ CONFIRMED — Rumassala Hill is the forested headland forming the western boundary of Unawatuna bay. It rises steeply from the shoreline and its forest has been preserved from development, making it a genuine ecological enclave within an otherwise heavily developed tourist zone.
✅ CONFIRMED — Over 60 species of endemic birds have been recorded in the Rumassala area by ornithologist Clive Byers, including terns, egrets, herons, sandpipers, kingfishers, lesser whistling duck, Asian palm swift, white-breasted waterhen, Loten's sunbird, and black bittern. The remaining marshy areas and the forested hill together create a bird habitat of surprising diversity within the suburban context.
✅ CONFIRMED — The endemic and Endangered purple-faced langur is present in the Rumassala forest — one of the few remaining populations of this endemic monkey in the heavily developed southern coastal zone. The langurs are shy and arboreal — most easily seen in the early morning in the forest canopy.
⭐ TRADITION — THE HIMALAYAN HERBS:
Local tradition, and the Ramayana legend, holds that the Rumassala Hill was formed from a piece of the Himalayan mountains dropped by Hanuman and that the hill contains rare medicinal herbs brought from the Himalayas. Several sources note that the botanical diversity and unusual rock formations of Rumassala are genuinely atypical for a coastal headland in this region — though this does not confirm the mythological origin. The tradition is sincerely held and the hill is treated as a sacred space by local people.

🌤️ BEST TIME TO VISIT
November to April — Primary Recommendation
The dry season for the southern and western coasts. Clear skies, calm seas, excellent swimming and snorkelling conditions. December to March is peak season — finest weather, maximum visitor numbers, highest accommodation prices.
December to February — the absolute best weather window. The northeast monsoon has brought rain to the north and east of the country but the south coast is dry and settled. Christmas and New Year are the peak of the peak — book accommodation months in advance.
February to April — slightly fewer tourists than December to January, the same excellent weather, and better accommodation prices. The most comfortable period for visitors who want good conditions without maximum crowds.
May to October — The Southwest Monsoon
The southwest monsoon brings rain, rough seas, and strong offshore winds to the southern coast from May to October. The main beach at Unawatuna remains swimmable for much of this period due to its sheltered bay geography — the headlands provide some protection from the direct monsoon swell — but conditions are less reliable and less pleasant than the dry season. Many tourist businesses reduce hours or close. Not recommended for a first visit.

🚌 GETTING THERE
🚂 By Train from Colombo — Strongly Recommended
The coastal railway from Colombo Fort Station to Matara is one of the most scenic train journeys in Asia, running directly along the shoreline for much of its length on the southern section. Unawatuna has its own railway station on this line.
From Colombo Fort to Unawatuna: approximately 2.5 to 3 hours. Multiple trains daily. Second class reserved approximately 250 to 400 LKR. The train from Colombo to Galle and beyond runs directly along the coast — the views of the Indian Ocean from the train window in the final approach to Galle are extraordinary.
🚗 By Road from Colombo:
Approximately 108 to 125 km via the Southern Expressway (E01) to Pinnaduwa junction then local road to Unawatuna. Journey time approximately 2 to 2.5 hours by car.
🚌 By Bus from Colombo:
Buses from Colombo Central Bus Stand to Galle — approximately 2.5 to 3 hours. From Galle Bus Stand, local buses and tuk-tuks to Unawatuna — approximately 15 minutes.
From Galle Fort:
5 to 6 km — approximately 10 to 15 minutes by tuk-tuk, approximately 300 to 400 LKR.
From Mirissa:
30 km west — approximately 40 to 50 minutes by bus or tuk-tuk.
From Hikkaduwa:
15 km east — approximately 20 minutes.
Within Unawatuna:
The main beach, Jungle Beach path, Rumassala Hill, Devol Devalaya, and Suwethamali Dagoba are all within walking distance. Tuk-tuks are available for Yatagala Rajamaha Viharaya, Dalawella, and Galle Fort.

🍽️ WHERE TO EAT
Hideout Restaurant — consistently cited as one of the best restaurants on the entire southern coast. Mexican-inspired food with Sri Lankan influences — jackfruit BBQ tacos, grilled mahi mahi, craft cocktails. Open garden setting. Taco Tuesday is the most popular evening. The menu creativity is unusual for the southern coast.
The Social — popular restaurant and bar with live music and excellent cocktails. One of the liveliest evening venues in town.
Kingfisher Hotel Restaurant and Bar — beach bar and restaurant known for the Saturday night beach party — the most active nightlife event in Unawatuna. Music from approximately 10:00 PM. Drinks priced at tourist rates — significantly more expensive than inland prices.
Dream Café — well-regarded for breakfasts, smoothie bowls, and healthy options. Popular with the morning surfing and yoga crowd.
Local rice and curry restaurants along the back streets — several small, family-run Sri Lankan restaurants on the streets behind the beachfront serve genuine Sri Lankan food at local prices. The best value eating in Unawatuna is at these establishments, not at the beachfront tourist restaurants.
Galle Market (7 km northwest) — the vibrant fruit, spice, and flower markets of Galle town — 7 km from Unawatuna — are among the finest local food markets on the southern coast. Fresh tropical fruits including unusual varieties, spices, vegetables, and fresh fish. Worth a morning visit combined with Galle Fort.

🏨 WHERE TO STAY
Budget (USD $15–35/night):
La Villa Guesthouse — simple rooms, lovely owners, excellent home-cooked dinners on the veranda. One of the most frequently praised budget options by visitor accounts. Very close to the beach.
Green Escape Unawatuna — eco-conscious budget guesthouse in a quiet garden setting.
KAJU Green Eco Lodges — sustainable eco-accommodation.
Multiple family guesthouses on the back streets of Unawatuna at 3,000 to 6,000 LKR per night — simple, clean, and within walking distance of everything.
Mid-Range (USD $40–100/night):
Thaproban Beach House — 4-star property right on Unawatuna beach. Spacious rooms, sea or garden views, restaurant, bar, pool, spa. Rates from approximately USD $70 per night.
Calamander Unawatuna Beach — 4-star beachfront hotel with modern, comfortable rooms, restaurant, pool, children's play area. Rates from approximately USD $80 per night.
Cocobay Unawatuna — eco-friendly resort with comfortable rooms and villas in lush tropical gardens, pool, Sri Lankan dining.
Gloria Grand Hotel — well-located mid-range option in the heart of the action.
Luxury (USD $150–500+/night):
Radisson Collection Resort Galle — one of the finest luxury resort properties in the broader Unawatuna–Galle area. Exceptional facilities, outstanding dining, and the highest service standards. Rates from approximately USD $200 per night.
Closenberg Hotel — a historic property occupying the former residence of a Dutch colonial captain at Magalle — the site of the 1640 Dutch–Portuguese battle. One of the most historically significant hotel locations on the southern coast. Victorian-era architecture, gardens, and sea views.

💡 ESSENTIAL TIPS — PRACTICAL ONLY
🕗 Check water quality before swimming. Unawatuna bay has experienced sewage contamination events, particularly after heavy rain. This is a documented and ongoing issue. Ask locally about current water quality conditions on the day of arrival, particularly after any significant rainfall in the preceding 48 hours.
🌅 Hike to the Japanese Peace Pagoda at dawn. The 20 to 30 minute walk through the Rumassala forest to the pagoda summit at sunrise — before the heat of the day builds — produces the finest view of the full sweep of the bay and coastline. The purple-faced langurs in the forest canopy are most active in the early morning. The pagoda itself is most atmospheric in the early light before the day's visitors arrive.
🛕 Visit Yatagala Rajamaha Viharaya. The ancient rock temple 10 minutes by tuk-tuk from the beach is one of the most peaceful and spiritually significant sites in the entire southern region. The 1,000-year-old Bodhi tree, the cave shrine, and the surrounding rice paddy landscape create an atmosphere of complete calm that contrasts profoundly with the beach town. Remove footwear on entry. Best visited in the morning.
🚢 Take a glass-bottom boat over the reef. For non-swimmers or visitors who want a quick overview of the reef without diving equipment, the glass-bottom boat provides a clear view of the reef fish and coral structure. The best time is morning when the water is clearest. Negotiate price before boarding.
🏰 Go to Galle Fort in the late afternoon. The fort is 10 to 15 minutes by tuk-tuk from Unawatuna. The late afternoon light — from 4:00 PM onward — turns the fort's Dutch-era walls golden and the rampart walk at sunset is one of the finest evening experiences on the southern coast. The fort's restaurants, boutique shops, and cafés are at their most lively in the late afternoon.
🤿 Choose a reputable dive school. Dive school quality varies significantly in Unawatuna. Ask specifically for PADI or SSI certified instructors. For wreck diving — the Rangoon wreck is the most historically significant dive site — choose an operator who has guided this site regularly. The wreck is at depth and requires a certain level of comfort underwater.
🌊 Swim at Jungle Beach for cleaner water. Jungle Beach, accessible by the 30-minute headland walk, generally has cleaner, clearer water than the main bay due to better circulation and fewer boats and drainage inputs. Worth the walk particularly for snorkelling — the visibility is typically better than at the main beach.
📅 Allow at least 3 days. Unawatuna's combination of the beach, Jungle Beach, Rumassala Hill, Devol Devalaya, Yatagala temple, Peace Pagoda, Galle Fort, Dalawella, and day trips to Mirissa and Hikkaduwa requires a minimum of 3 days to explore comfortably. Visitors using Unawatuna as a base for the entire southern coast benefit from a week or more.
💰 Negotiate tuk-tuk fares before boarding. Tuk-tuk fares from Unawatuna to Galle Fort, Dalawella, and Yatagala should be agreed before the journey begins. Typical fares: Galle Fort approximately 300 to 400 LKR one way; Dalawella approximately 200 to 300 LKR; Yatagala approximately 500 to 700 LKR return including waiting time.
🎒 Use Unawatuna as a base for the southern coast. Galle Fort (6 km), Hikkaduwa (15 km), Weligama (20 km), Mirissa (30 km), and Yala National Park (approximately 100 km) are all accessible as day trips from an Unawatuna base. The combination of a comfortable beach base with day trip access to the finest heritage, surf, and wildlife destinations of the southern coast is Unawatuna's greatest practical advantage as a travel hub.`,
      SI: "උණවටුන පිළිබඳ සවිස්තරාත්මක තොරතුරු."
    },
    history: { EN: "Unawatuna is a coastal town in Galle district and a major tourist attraction in Sri Lanka. Famous for its beautiful horseshoe-shaped beach and corals, it is mentioned in the Ramayana epic as a piece of the Himalayas that fell from Hanuman's hand. The beach is protected by a double reef, making it safe for swimming throughout the year. It is also known for its vibrant nightlife, beachside restaurants, and the Japanese Peace Pagoda overlooking the ocean.", SI: "රාම රාවණා කතාවේ වෙරළ." }, shortStory: { EN: "The Golden Beach.", SI: "රන්වන් වෙරළ." }, tips: [{ EN: "Try swimming with a mask.", SI: "කිමිදීමට උත්සාහ කරන්න." }], hiddenEchoes: { EN: "A path to Jungle Beach.", SI: "ජංගල් බීච් මංපෙත." }, location: "Galle", coordinates: { x: 44, y: 94 },
    nearbyAttractions: [
      { id: "galle-fort", name: { EN: "Galle Fort", SI: "ගාල්ල කොටුව" }, image: "https://i.pinimg.com/1200x/fa/56/b6/fa56b632b66edcf9c5ee396a4930278c.jpg" },
      { id: "hikkaduwa", name: { EN: "Hikkaduwa Beach", SI: "හික්කඩුව වෙරළ" }, image: "https://i.pinimg.com/1200x/7c/db/39/7cdb39c88ab9b4684492930755128968.jpg" },
      { id: "mirissa", name: { EN: "Mirissa Beach", SI: "මිරිස්ස වෙරළ" }, image: "https://i.pinimg.com/736x/8b/20/84/8b20845913d1b7fef10a72a7472de8d3.jpg" }
    ]
  },
  { id: "mirissa", name: { EN: "Mirissa", SI: "මිරිස්ස" }, category: "beach", image: "https://i.pinimg.com/736x/8b/20/84/8b20845913d1b7fef10a72a7472de8d3.jpg", gallery: ["https://i.pinimg.com/736x/8b/20/84/8b20845913d1b7fef10a72a7472de8d3.jpg"], 
    detailedAbout: {
      EN: `🌊 MIRISSA — මිරිස්ස
Sri Lanka's Southern Coast — Complete Verified Guide

📍 LOCATION
Province: Southern Province, Sri Lanka
Position: On the southern tip of Sri Lanka's coastline, facing the open Indian Ocean
Distance from Colombo: approximately 150 km south — 2.5 to 3 hours by car or train
Distance from Galle Fort: approximately 35 km west — about 45 minutes to 1 hour
Distance from Unawatuna: approximately 30 km west — about 40 minutes
Distance from Matara: approximately 10 km east — about 20 minutes
Distance from Tangalle: approximately 40 km east — about 1 hour
Nearest railway station: Weligama — approximately 10 km west, or Matara — approximately 10 km east

🏖️ WHAT IS MIRISSA
Mirissa is a small, crescent-shaped beach town on the extreme southern tip of Sri Lanka. It is simultaneously Sri Lanka's most famous whale-watching destination, a popular surf beach, a vibrant seafood and nightlife hub, and one of the most beautiful bays on the entire island. The beach curves around a sheltered bay flanked by low rocky headlands, with a small coconut-covered island — Parrot Rock — sitting just offshore at the eastern end.
The town itself is small and compact — essentially one main road, one beautiful beach, a harbour, and a network of guesthouses, restaurants, and surf shops spread across the hillside above the bay. Despite its small size, Mirissa draws visitors from all over the world during the high season and has one of the most active and enjoyable beach atmospheres in Sri Lanka.

📜 HISTORY
Mirissa was historically a small fishing village — one of dozens of coastal settlements on Sri Lanka's southern coast whose economy revolved entirely around the sea. The harbour at Mirissa is today the largest fishing port on Sri Lanka's southern coast, handling enormous daily catches of tuna, mullet, snapper, swordfish, and other ocean fish. The fishing industry predates tourism by many generations and remains the economic foundation of the local community alongside tourism.
The transformation of Mirissa from a quiet fishing village into an international tourist destination happened rapidly from the late 1990s onward, accelerating dramatically after the end of Sri Lanka's civil war in 2009 and the subsequent opening of the country to mass international tourism. The development of whale watching from Mirissa harbour — which began commercially around 2008 to 2010 — was the single biggest factor in putting the town on the international tourism map.
The 2004 Indian Ocean Tsunami caused significant destruction in Mirissa. The town was severely damaged by the waves that struck the southern coast of Sri Lanka on 26 December 2004. The fishing harbour and beachfront were particularly badly hit. Recovery and rebuilding took several years and the town that exists today is largely rebuilt from that destruction.

🐋 WHALE WATCHING — FULL CONFIRMED DETAILS
Why Mirissa for Whales — The Scientific Reason
The waters immediately south and southwest of Mirissa are extraordinarily productive marine habitat. The ocean shelf drops steeply off the southern coast of Sri Lanka creating deep-water upwelling zones where cold, nutrient-rich water rises from the deep ocean floor toward the surface. This upwelling creates massive concentrations of phytoplankton and krill — the microscopic organisms that blue whales and other large whales feed on. The whales follow this food source as they migrate through the Indian Ocean, making the waters around Mirissa one of the most reliable blue whale feeding grounds on earth.
Species Confirmed Visible from Mirissa:
Blue Whale (Balaenoptera musculus) — the primary target species. The largest animal that has ever lived on earth. Adults reach lengths of 24 to 30 meters and weights of up to 180 tonnes. The blue whale's heart alone is the size of a small car. Mirissa is one of the most reliable places in the world to see blue whales — these are not coastal or shallow-water whales but true deep-ocean giants seen regularly from the boats.
Sperm Whale (Physeter macrocephalus) — the largest toothed animal on earth. Famous for their enormous squared-off heads containing the largest brain of any creature ever to have lived. Seen regularly on whale watching trips from Mirissa.
Bryde's Whale (Balaenoptera edeni) — a medium-sized baleen whale. Frequently observed.
Fin Whale (Balaenoptera physalus) — the second-largest animal on earth after the blue whale. Occasionally observed.
Orca / Killer Whale (Orcinus orca) — occasional sightings, not regular. When orca pods are encountered they are extraordinary to observe.
Spinner Dolphin (Stenella longirostris) — extremely commonly seen in large acrobatic pods near the boats. Frequently encountered in groups of dozens to hundreds, leaping and spinning above the water surface.
Bottlenose Dolphin (Tursiops truncatus) — commonly seen.
Whale Shark (Rhincodon typus) — occasionally observed during the season.
Flying Fish, Sea Turtles, and Manta Rays — regularly seen during whale watching trips as additional encounters.
The Season — Confirmed
The primary whale watching season runs from November to April when the southwest monsoon has ended, sea conditions are calm, and blue whales are migrating northward through the Indian Ocean.
The peak months for blue whale sightings are December, January, February, and March — these are the months when sea conditions are most reliably calm and whale concentrations are highest.
May to October is the off-season for whale watching — the southwest monsoon creates rough seas that make boat trips uncomfortable and sometimes dangerous. Whales may still be present but conditions make them difficult to find and observe.
Departure Time and Trip Duration
All whale watching boats depart from Mirissa Harbour at approximately 6:00 to 6:30 AM. Early departure takes advantage of the calmest sea conditions before the wind picks up in the afternoon.
Trip duration varies significantly depending on how far from shore whales are located on any given day. Trips typically last between 3 and 6 hours on average, with some days extending to 7 or 8 hours if whales are found far offshore. Boats travel up to 20 km offshore to reach whale feeding areas.
Sighting Probability — Honest Assessment
During peak season (December to March), sighting probability for at least one whale species is generally high — approximately 80 to 90% on average. Probability specifically for blue whales varies more — approximately 50 to 70% on any given trip. On some days even the best operators find nothing.
Wildlife watching is inherently unpredictable and no operator — however experienced — can guarantee a sighting. Any operator claiming a 100% sighting guarantee should be treated with scepticism.
The Overcrowding Problem — Important Honest Information
This is a critical issue that any honest guide to Mirissa whale watching must address directly.
Scientific studies published in peer-reviewed journals in 2012 and 2013 documented that unregulated whale watching boat activity in Sri Lanka was causing measurable disturbance to blue whales — boats approaching too fast, too close, and unpredictably were causing avoidance responses. Research linked this harassment to a documented shift in whale distribution and an increase in whale strandings during the study period.
Multiple visitor reviews confirm that during busy periods multiple boats — sometimes 10 to 15 simultaneously — converge on a single whale sighting, surrounding the animal, preventing it from diving naturally, and creating extreme stress for the whales.
Sri Lanka introduced formal whale watching regulations in 2012. However, monitoring and enforcement of these regulations has been described by a 2016 scientific review as weak and insufficient.
The consequence is an industry that at its best provides extraordinary, responsible wildlife encounters and at its worst can cause measurable harm to the very animals it exists to show visitors.
How to Choose an Ethical Operator:
Choose operators who maintain a minimum distance of at least 300 feet from whales and do not encircle or chase them. Choose operators with smaller boats carrying fewer passengers. Choose operators with documented conservation commitments and trained naturalist guides on board. Avoid operators who boast about guaranteed sightings above all else — this incentive structure drives the most harmful behaviour.
Cost — 2026
Standard whale watching boat tours from Mirissa harbour cost approximately USD $45 to $60 per person for a standard large vessel. Private speedboat tours for small groups cost significantly more — approximately USD $200 to $350 for the entire boat.

🏄 SURFING IN MIRISSA
Mirissa offers good surfing particularly for beginner and intermediate surfers. The main beach produces gentle, consistent waves well-suited to learning. More experienced surfers head to nearby Weligama Bay — approximately 10 km west — which is one of the finest beginner and intermediate surf destinations on the entire island with long, consistent, rolling breaks ideal for learning.
Surf season at Mirissa: November to April — the same window as whale watching season. The offshore winds and clean swells of this period produce the best wave conditions.
Surfboards are available for rent from numerous shops along the Mirissa beachfront for approximately 500 to 800 LKR per hour or 1,500 to 2,500 LKR per day. Surf lessons are available from approximately USD $20 to $30 for a 2-hour beginner session.

🌴 PARROT ROCK — SECRET BEACH
At the eastern end of Mirissa beach, a small rocky island — Parrot Rock — sits just a short wade from the shore at low tide. The rock is accessible by wading through shallow water at low tide or by a short swim. The top of the rock commands an excellent view across the full sweep of Mirissa bay and is a popular sunset viewing spot.
On the eastern side of Parrot Rock, hidden from the main beach, is a small quiet cove — informally called Secret Beach — a short scramble over the rocks from the main beach. This cove is calmer, less crowded, and more beautiful than the main beach and is one of Mirissa's best-kept secrets.
Note: The wade and scramble to Parrot Rock and Secret Beach requires care at high tide when the water can be deep and currents strong. Check tide times before attempting.

🌅 COCONUT TREE HILL
Approximately 1 km east of Mirissa Beach, a small hill covered with swaying coconut palms — Coconut Tree Hill — overlooks both the beach and the open Indian Ocean. It is one of the most photographed viewpoints on the entire southern coast of Sri Lanka. The path to the top takes approximately 10 minutes on foot from the road. It is at its most beautiful at sunrise and sunset when the coconut palms are silhouetted against the coloured sky.

🍽️ WHERE TO EAT
Mirissa has an outstanding food scene concentrated along the beachfront and the main road above it.
Paradise Beach Club — the most famous and long-established beachfront restaurant and bar. Right on the sand. Fresh grilled seafood, good cocktails, sunset views.
Dewmini Roti Shop — a local institution on the main road. Sri Lankan rotis, curries, and short eats at extremely affordable prices. Beloved by both locals and budget travellers.
The Wijaya Beach Restaurant — excellent grilled tuna, Sri Lankan rice and curry, and fresh juice. Good value, reliable quality.
Hangover Bar — the most popular late-night bar in Mirissa, on the beachfront. Beach parties, fire shows, and live music.
Pink Elephant Beach Bar — popular afternoon and evening beach bar.
The Fisherman's Wharf — at the harbour, serving the freshest possible fish brought directly off the boats each morning. Extremely good value.
Street Food along the main road — numerous small stalls selling kottu roti, hoppers, rice and curry, and fresh coconuts at local prices. The best value eating in Mirissa is at these roadside stalls.

🏨 WHERE TO STAY
Budget (USD $10–25/night):
Hangover Hostel Mirissa — the most social budget option, known for its party atmosphere and beachfront location.
Green Garden Guest House — simple clean rooms with air conditioning, breakfast included, close to the beach.
Multiple small guesthouses on the hillside above the beach offering basic but comfortable accommodation.
Mid-Range (USD $40–90/night):
Sira's Chalets — literally on the beach, private rooms with air conditioning, some with ocean views.
Ballena Regency — rooftop restaurant with good views, comfortable rooms, 150 meters from the beach.
Imagine Villa Hotel — boutique hotel beside a quiet beach with a large pool.
Luxury (USD $150–500+/night):
Three Gables Boutique Villa — the finest property in Mirissa itself. Beachfront, private beach access, pool overlooking the ocean, excellent restaurant.
Cape Weligama (10 km west) — one of the finest luxury resorts on the southern coast. A clifftop resort with extraordinary ocean views, exceptional dining, and the highest level of service. Rooms from approximately USD $434 per night.

🌤️ BEST TIME TO VISIT
November to April — the prime season. Dry weather, calm seas, excellent beach and surf conditions, whale watching season active. December to February is the absolute peak — busiest, most expensive, and finest weather.
May to October — the southwest monsoon season. Heavy rainfall, rough seas, whale watching not operating. The beach is far less pleasant and most tourist businesses reduce hours or close. Not recommended for a first visit.

🚌 GETTING THERE
By Train from Colombo — Recommended:
The coastal railway from Colombo Fort to Matara is one of the most scenic train journeys in Asia — the tracks run directly along the ocean shoreline for much of the southern coast. Journey time approximately 2.5 to 3.5 hours to Weligama or Matara stations. From either station, tuk-tuks to Mirissa cost approximately 500 to 800 LKR and take 15 to 20 minutes.
By Bus from Colombo:
Regular and express buses from Colombo Central Bus Stand to Matara via the Southern Expressway. Journey time approximately 2.5 to 3 hours. From Matara Bus Stand, local buses and tuk-tuks to Mirissa.
By Car from Colombo:
Approximately 150 km via the Southern Expressway (E01) to Pinnaduwa junction then local road to Mirissa. Journey time approximately 2 to 2.5 hours.
From Galle Fort:
35 km east — approximately 45 to 60 minutes by bus or tuk-tuk.
From Unawatuna:
30 km east — approximately 40 minutes.
Within Mirissa:
The beach, harbour, Coconut Tree Hill, and main road are all within comfortable walking distance of each other. Tuk-tuks are available everywhere for short trips.

💡 ESSENTIAL TIPS — PRACTICAL ONLY
Book whale watching well in advance. During peak season (December to March) the better operators fill their boats days or weeks ahead. Booking 3 to 7 days in advance at minimum is strongly recommended. Walk-up bookings are often unavailable during peak weeks.
Take seasickness medication the night before and again one hour before boarding. The Indian Ocean is not a calm ocean even in good weather. There is always at least a light swell and many visitors experience significant seasickness, particularly on longer trips of 5 to 6 hours. Taking medication proactively before any symptoms begin is far more effective than taking it after sickness has started.
Bring sun protection for the full day. The boat trip involves hours of complete exposure on open ocean water. Sunscreen of SPF 50 or higher, a hat with a wide brim, and UV-protective sunglasses are essential. The combination of direct sun and reflection off the water surface burns exposed skin extremely quickly.
Arrive at the harbour by 6:00 AM. Boats depart early to take advantage of calmer morning sea conditions. Missing the departure is not possible — the boat will not wait.
Choose an operator with a smaller boat. Large boats carrying 50 to 100 passengers are cheaper but the experience of whale watching from a crowded double-decked vessel is significantly inferior to smaller boats. Smaller group sizes also generally mean operators are more careful about approach distances to avoid disturbing the whales.
The whale watching trip will likely be your longest most physically demanding activity in Sri Lanka. Dress in layers — the open ocean at 6:00 AM can be surprisingly cold before the sun rises, and the middle of the day can be intensely hot. Bring extra clothing to remove as the day warms.
Visit Coconut Tree Hill at sunrise. The walk from the beach takes 10 minutes and the view at sunrise — coconut palms and golden ocean light — is one of the most beautiful natural compositions on the entire southern coast.
Explore Secret Beach. Wade around Parrot Rock at low tide to find the quiet cove on the far side. Check tide times first.
Eat fresh tuna at the harbour. The fishing boats return in the early morning with overnight catches of the finest tuna. Several small restaurants and stalls near the harbour serve the freshest tuna in Sri Lanka — grilled, curried, and raw — at very local prices.
Combine with Galle Fort on the same trip. Galle Fort is 35 km west — 45 minutes by tuk-tuk. A whale watching morning followed by an afternoon exploring the fort's cobblestone streets and rampart walks is the perfect southern coast day.
Respect the local community. Mirissa is still at its core a fishing village. The approximately 3,000 to 5,000 local residents go about their daily lives alongside the tourism industry. Dress modestly when away from the beach, be considerate of noise late at night near residential areas, and buy from local vendors and restaurants rather than exclusively from tourist-facing businesses.`,
      SI: "තල්මසුන් නැරඹීමේ මධ්‍යස්ථානය."
    },
    history: {
      EN: "Mirissa is a picturesque beach town on the south coast of Sri Lanka, renowned for its stunning sunsets and laid-back atmosphere. It is the world's top destination for whale watching, where blue whales, sperm whales, and dolphins can be spotted just a few miles offshore. The beach features the iconic Parrot Rock and Coconut Tree Hill, offering breathtaking views of the Indian Ocean. Mirissa is also a hotspot for surfing and fresh seafood dining.",
      SI: "තල්මසුන් නැරඹීමේ මධ්‍යස්ථානය."
    },
    shortStory: { EN: "A dream beach.", SI: "නිහඬ සාගර සිහිනය." },
    tips: [
      { EN: "Go to Coconut Tree Hill.", SI: "කොකනට් ට්‍රී හිල් වෙත යන්න." },
      { EN: "Book whale watching in advance.", SI: "කල්තියා තල්මසුන් නැරඹීම වෙන්කරවා ගන්න." },
      { EN: "Visit Coconut Tree Hill at sunrise.", SI: "සූර්ය උදාවට කොකනට් ට්‍රී හිල් වෙත යන්න." }
    ],
    hiddenEchoes: { EN: "A path to Parrot Rock.", SI: "පැරට් රොක් මග." },
    location: "Matara",
    coordinates: { x: 52, y: 96 },
    nearbyAttractions: [
      { id: "unawatuna", name: { EN: "Unawatuna Beach", SI: "උණවටුන වෙරළ" }, image: "https://i.pinimg.com/736x/09/4c/77/094c771bcf9d20988d5cb0bd21e91487.jpg" },
      { id: "yala", name: { EN: "Yala National Park", SI: "යාල ජාතික වනෝද්‍යානය" }, image: "https://i.pinimg.com/1200x/1f/61/a5/1f61a5f00d68b86b64e2dd496ba70d33.jpg" }
    ]
  },
  { id: "hikkaduwa", name: { EN: "Hikkaduwa", SI: "හික්කඩුව" }, category: "beach", image: "https://i.pinimg.com/1200x/7c/db/39/7cdb39c88ab9b4684492930755128968.jpg", gallery: ["https://i.pinimg.com/1200x/7c/db/39/7cdb39c88ab9b4684492930755128968.jpg"], history: { EN: "Hikkaduwa is one of the most popular beach resorts on the south-western coast, famous for its coral sanctuary and surfing waves. It was the first area in Sri Lanka to be developed for tourism in the 1960s. The Hikkaduwa National Park protects the shallow fringing reef, which can be viewed by glass-bottom boats or snorkeling. The town is also known for its vibrant nightlife, beach parties, and the annual Beach Fest.", SI: "කොරල් පාරාදීසය." }, shortStory: { EN: "Hikkaduwa Beach - Famous for its coral sanctuary, surfing waves, and vibrant nightlife.", SI: "හික්කඩුව වෙරළ - කොරල් පාරාදීසය, සර්ෆින් සහ රාත්‍රී ජීවිතය සඳහා ප්‍රසිද්ධ වෙරළ තීරය." }, tips: [{ EN: "Feed the big turtles.", SI: "කැස්බෑවුන්ට ආහාර දෙන්න." }], hiddenEchoes: { EN: "Boats with glass floors.", SI: "වීදුරු පතුලේ බෝට්ටු." }, location: "Galle", coordinates: { x: 38, y: 90 },
    nearbyAttractions: [
      { id: "bentota", name: { EN: "Bentota Beach", SI: "බෙන්තොට වෙරළ" }, image: "https://i.pinimg.com/1200x/fa/56/b6/fa56b632b66edcf9c5ee396a4930278c.jpg" },
      { id: "galle-fort", name: { EN: "Galle Fort", SI: "ගාල්ල කොටුව" }, image: "https://i.pinimg.com/1200x/fa/56/b6/fa56b632b66edcf9c5ee396a4930278c.jpg" },
      { id: "unawatuna", name: { EN: "Unawatuna Beach", SI: "උණවටුන වෙරළ" }, image: "https://i.pinimg.com/736x/09/4c/77/094c771bcf9d20988d5cb0bd21e91487.jpg" }
    ]
  },
  { id: "arugambay", name: { EN: "Arugam Bay", SI: "ආරුගම්බේ" }, category: "beach", image: "https://i.pinimg.com/1200x/51/b0/d8/51b0d8fdddaf927052ffe51ab54b65f9.jpg", gallery: ["https://i.pinimg.com/1200x/51/b0/d8/51b0d8fdddaf927052ffe51ab54b65f9.jpg"], history: { EN: "Arugam Bay, located on the southeast coast, is a world-renowned surfing destination, often hosting international surfing competitions. Its long right-hand point break is considered one of the best in the world. Beyond surfing, the area is a gateway to the wild, with the Kumana National Park and Lahugala National Park nearby. The laid-back village vibe, lagoon safaris, and elephant sightings make it a unique blend of beach and wildlife experiences.", SI: "ලොව ප්‍රකට සර්ෆින් ස්ථානයක්." }, shortStory: { EN: "Arugam Bay - A world-renowned surfing destination on Sri Lanka's southeast coast.", SI: "ආරුගම්බේ - ශ්‍රී ලංකාවේ ගිනිකොනදිග වෙරළ තීරයේ පිහිටි ලොව ප්‍රකට සර්ෆින් ගමනාන්තය." }, tips: [{ EN: "Rent a surfboard.", SI: "සර්ෆ් බෝඩ් එකක් ගන්න." }], hiddenEchoes: { EN: "A quiet lagoon nearby.", SI: "පොතුවිල් කලපුව." }, location: "Ampara", coordinates: { x: 86, y: 78 },
    nearbyAttractions: [
      { id: "kumana", name: { EN: "Kumana National Park", SI: "කුමන ජාතික වනෝද්‍යානය" }, image: "https://i.pinimg.com/736x/71/50/16/71501668218b3602ac732a426f397666.jpg" },
      { id: "pasikudah", name: { EN: "Pasikudah Beach", SI: "පාසිකුඩා වෙරළ" }, image: "https://i.pinimg.com/1200x/02/4f/c9/024fc9b932d7565de43b861d11a58ef9.jpg" },
      { id: "yala", name: { EN: "Yala National Park", SI: "යාල ජාතික වනෝද්‍යානය" }, image: "https://i.pinimg.com/1200x/1f/61/a5/1f61a5f00d68b86b64e2dd496ba70d33.jpg" }
    ]
  },
  { id: "bentota", name: { EN: "Bentota", SI: "බෙන්තොට" }, category: "beach", image: "https://i.pinimg.com/1200x/fa/56/b6/fa56b632b66edcf9c5ee396a4930278c.jpg", gallery: ["https://i.pinimg.com/1200x/fa/56/b6/fa56b632b66edcf9c5ee396a4930278c.jpg"], history: { EN: "Bentota is a prime beach resort town on the southwest coast, famous for the Bentota Ganga river and its lagoon. It is the water sports capital of Sri Lanka, offering jet skiing, windsurfing, and banana boat rides. The broad, golden sandy beach is backed by luxury hotels and the architectural masterpieces of Geoffrey Bawa, including the Lunuganga estate. The river safari through the mangroves offers a chance to see monitors, crocodiles, and diverse birdlife.", SI: "ජල ක්‍රීඩා කලාපය." }, shortStory: { EN: "Bentota - Sri Lanka's water sports capital, famous for its golden beaches and river safaris.", SI: "බෙන්තොට - ශ්‍රී ලංකාවේ ජල ක්‍රීඩා අගනුවර, රන්වන් වෙරළ තීරය සහ ගංගා සෆාරි සඳහා ප්‍රසිද්ධයි." }, tips: [{ EN: "Try a jet ski.", SI: "ජෙට් ස්කී පදින්න." }], hiddenEchoes: { EN: "A beautiful garden.", SI: "බ්‍රීෆ් උද්‍යානය." }, location: "Galle", coordinates: { x: 30, y: 82 },
    nearbyAttractions: [
      { id: "hikkaduwa", name: { EN: "Hikkaduwa Beach", SI: "හික්කඩුව වෙරළ" }, image: "https://i.pinimg.com/1200x/7c/db/39/7cdb39c88ab9b4684492930755128968.jpg" },
      { id: "galle-fort", name: { EN: "Galle Fort", SI: "ගාල්ල කොටුව" }, image: "https://i.pinimg.com/1200x/fa/56/b6/fa56b632b66edcf9c5ee396a4930278c.jpg" },
      { id: "unawatuna", name: { EN: "Unawatuna Beach", SI: "උණවටුන වෙරළ" }, image: "https://i.pinimg.com/736x/09/4c/77/094c771bcf9d20988d5cb0bd21e91487.jpg" }
    ]
  },
  { id: "nilaveli", name: { EN: "Nilaveli", SI: "නිලාවේලි" }, category: "beach", image: "https://i.pinimg.com/1200x/c8/c2/40/c8c240b6df4dfb3bccbaa0995b8266b4.jpg", gallery: ["https://i.pinimg.com/1200x/c8/c2/40/c8c240b6df4dfb3bccbaa0995b8266b4.jpg"], history: { EN: "Nilaveli is a pristine coastal resort town located north of Trincomalee, known for its white sandy beaches and crystal-clear blue waters. It is considered one of the finest beaches in Asia. The calm, shallow waters are perfect for swimming and snorkeling. Just offshore lies Pigeon Island National Park, a marine sanctuary with vibrant coral reefs and abundant marine life, including blacktip reef sharks and sea turtles.", SI: "සුදු වැලි පිරි වෙරළ." }, shortStory: { EN: "Nilaveli Beach - Pristine white sands and crystal-clear waters in Trincomalee.", SI: "නිලාවේලි වෙරළ - ත්‍රිකුණාමලයේ පිහිටි සුදු වැලි පිරි පිරිසිදු වෙරළ තීරය." }, tips: [{ EN: "Visit Pigeon Island.", SI: "පීජන් අයිලන්ඩ් වෙත යන්න." }], hiddenEchoes: { EN: "Corals under the water.", SI: "මුහුදු පතුලේ කොරල්." }, location: "Trincomalee", coordinates: { x: 74, y: 24 },
    nearbyAttractions: [

      { id: "pasikudah", name: { EN: "Pasikudah Beach", SI: "පාසිකුඩා වෙරළ" }, image: "https://i.pinimg.com/1200x/02/4f/c9/024fc9b932d7565de43b861d11a58ef9.jpg" },
      { id: "sigiriya", name: { EN: "Sigiriya", SI: "සීගිරිය" }, image: "https://i.pinimg.com/1200x/3a/e7/48/3ae7487f4e95b92ce2d3c10c5b1038e0.jpg" }
    ]
  },
  { id: "pasikudah", name: { EN: "Pasikudah", SI: "පාසිකුඩා" }, category: "beach", image: "https://i.pinimg.com/1200x/02/4f/c9/024fc9b932d7565de43b861d11a58ef9.jpg", gallery: ["https://i.pinimg.com/1200x/02/4f/c9/024fc9b932d7565de43b861d11a58ef9.jpg"], history: { EN: "Pasikudah is a coastal resort town located in the Batticaloa District, famous for its golden bay and one of the longest stretches of shallow reef coastline in the world.", SI: "පාසිකුඩා යනු මඩකලපුව දිස්ත්‍රික්කයේ පිහිටි වෙරළබඩ නිවාඩු නිකේතනයක් වන අතර එය එහි රන්වන් බොක්ක සහ ලෝකයේ දිගම නොගැඹුරු කොරල්පර වෙරළ තීරයක් සඳහා ප්‍රසිද්ධය." }, detailedAbout: { EN: `🏖️ PASIKUDAH — පාසිකුඩා
The Safest Bay in Sri Lanka — Complete Verified Guide

✅ HONEST LABELLING THROUGHOUT
✅ CONFIRMED — verified by historical records, geographical data, and physical observation

📍 LOCATION
Province: Eastern Province, Sri Lanka
District: Batticaloa District
Position: East coast of Sri Lanka, 35 km northwest of Batticaloa city

🌊 WHAT IS PASIKUDAH?
Pasikudah is a coastal resort bay on the east coast of Sri Lanka, 35 km northwest of Batticaloa. The name derives from the Tamil words Paasi — meaning green algae — and Kudah — meaning bay. The historic Tamil name therefore translates as Green Algae Bay — a reference to the algae that once colonised the shallow reef offshore. The name predates modern tourism by many centuries and reflects the bay's long history as a Tamil fishing settlement.

The defining physical characteristic of Pasikudah is its extraordinarily shallow reef coastline. The gradual underwater slope of the bay allows visitors to walk approximately 500 metres from the shore and still be in waist-deep water. This is among the longest stretches of shallow reef coastline in the world. The currents are measurably weaker than at most Sri Lankan beaches. These two factors — extreme shallowness and weak currents — make Pasikudah the safest natural swimming environment in Sri Lanka and arguably one of the safest anywhere in Asia.

📜 HISTORY
Pasikudah and the adjacent Kalkudah bay were historically Tamil fishing communities whose economy was based on the sea. The shallow reef provided abundant fish and the sheltered bay made it a safe harbour for traditional outrigger fishing boats. Before the civil war began in 1983, Pasikudah and Kalkudah were among the most popular beach destinations in Sri Lanka. Following the end of the civil war in May 2009, the Sri Lankan government designated Pasikudah as a Special Tourist Development Zone.

🏖️ THE BEACH AND BAY
The shallow reef coastline of Pasikudah is the bay's most extraordinary physical characteristic. The underwater topography slopes so gradually that the water remains waist-deep for approximately 500 metres from the shore. The beach sand at Pasikudah is white, fine-grained, and soft. A coral reef lies offshore, parallel to the beach, forming the natural barrier responsible for the bay's calm conditions.

🤿 WATER ACTIVITIES
* **Swimming:** Swimming is the primary activity at Pasikudah and the bay is universally regarded as the safest swimming beach in Sri Lanka.
* **Snorkelling:** Snorkelling over the reef is the most popular water activity at Pasikudah beyond simple swimming. The reef is accessible by swimming from the beach.
* **Scuba Diving:** Several dive operators offer guided dives at Pasikudah. The bay is suitable for beginner dives given its calm, shallow conditions.`, SI: `🏖️ පාසිකුඩා — PASIKUDAH
ශ්‍රී ලංකාවේ ආරක්ෂිතම මුහුදු බොක්ක — සම්පූර්ණ තහවුරු කළ මාර්ගෝපදේශය

📍 පිහිටීම සහ භූගෝලය
පළාත: නැගෙනහිර පළාත, ශ්‍රී ලංකාව
දිස්ත්‍රික්කය: මඩකලපුව දිස්ත්‍රික්කය
පිහිටීම: ශ්‍රී ලංකාවේ නැගෙනහිර වෙරළ තීරය, මඩකලපුව නගරයේ සිට කි.මී. 35ක් වයඹ දෙසින්

🌊 පාසිකුඩා යනු කුමක්ද?
පාසිකුඩා යනු මඩකලපුවට කිලෝමීටර් 35ක් වයඹ දෙසින් ශ්‍රී ලංකාවේ නැගෙනහිර වෙරළ තීරයේ පිහිටි වෙරළබඩ නිවාඩු නිකේතනයකි. මෙම නම පැමිණෙන්නේ දෙමළ වචන වන පාසි — එනම් හරිත ඇල්ගී — සහ කුඩා — එනම් බොක්ක — යන වචන වලිනි. එබැවින් ඓතිහාසික දෙමළ නාමය හරිත ඇල්ගී බොක්ක ලෙස පරිවර්තනය වේ — මෙය වෙරළට ඔබ්බෙන් වූ නොගැඹුරු ගල්පරයේ වරක් ජනාවාස වූ ඇල්ගී ගැන සඳහනකි. මෙම නම නවීන සංචාරක ව්‍යාපාරයට සියවස් ගණනාවකට පෙර සිට පැවත එන අතර දෙමළ ධීවර ජනාවාසයක් ලෙස බොක්කෙහි දිගු ඉතිහාසය පිළිබිඹු කරයි.

පාසිකුඩාවේ නිර්වචනය කරන භෞතික ලක්ෂණය වන්නේ එහි අසාමාන්‍ය ලෙස නොගැඹුරු ගල්පර වෙරළ තීරයයි. බොක්කෙහි ක්‍රමානුකූල දිය යට බෑවුම නිසා අමුත්තන්ට වෙරළේ සිට මීටර් 500ක් පමණ දුරක් ඉණ දක්වා ගැඹුරු ජලයේ ගමන් කිරීමට ඉඩ සලසයි. මෙය ලෝකයේ දිගම නොගැඹුරු ගල්පර වෙරළ තීරයන්ගෙන් එකකි. බොහෝ ශ්‍රී ලාංකික වෙරළ තීරයන්ට වඩා මෙහි දියවැල් මැනිය හැකි තරම් දුර්වලය. මෙම සාධක දෙක — අධික නොගැඹුරු බව සහ දුර්වල දියවැල් — පාසිකුඩා ශ්‍රී ලංකාවේ ආරක්ෂිතම ස්වභාවික පිහිනුම් පරිසරය බවට පත් කරන අතර ආසියාවේ ඕනෑම තැනක ඇති ආරක්ෂිතම ස්ථානයක් බවට පත් කරයි.

📜 ඉතිහාසය
පාසිකුඩා සහ යාබද කල්කුඩා බොක්ක ඓතිහාසික වශයෙන් දෙමළ ධීවර ප්‍රජාවන් වූ අතර ඔවුන්ගේ ආර්ථිකය මුහුද මත පදනම් විය. නොගැඹුරු ගල්පරය බහුල ලෙස මසුන් ලබා දුන් අතර ආරක්ෂිත බොක්ක සම්ප්‍රදායික ඔරු ධීවර බෝට්ටු සඳහා ආරක්ෂිත වරායක් බවට පත් කළේය. 1983 සිවිල් යුද්ධය ආරම්භ වීමට පෙර, පාසිකුඩා සහ කල්කුඩා ශ්‍රී ලංකාවේ වඩාත් ජනප්‍රිය වෙරළ ගමනාන්ත අතර විය. 2009 මැයි මාසයේදී සිවිල් යුද්ධය අවසන් වීමෙන් පසු, ශ්‍රී ලංකා රජය විසින් පාසිකුඩා විශේෂ සංචාරක සංවර්ධන කලාපයක් ලෙස නම් කරන ලදී.

🏖️ වෙරළ සහ බොක්ක
පාසිකුඩාවේ නොගැඹුරු ගල්පර වෙරළ තීරය බොක්කෙහි අසාමාන්‍ය භෞතික ලක්ෂණයයි. දිය යට භූ විෂමතාවය කෙතරම් ක්‍රමානුකූලව බෑවුම් වේද යත්, වෙරළේ සිට මීටර් 500ක් පමණ දුරක් ජලය ඉණ දක්වා ගැඹුරට පවතී. පාසිකුඩාවේ වෙරළේ වැලි සුදු, සියුම් සහ මෘදුයි. වෙරළට සමාන්තරව වෙරළට ඔබ්බෙන් කොරල්පරයක් පිහිටා ඇති අතර එය බොක්කෙහි සන්සුන් තත්වයන්ට වගකිව යුතු ස්වභාවික බාධකය සාදයි.

🤿 ජල ක්‍රියාකාරකම්
* **පිහිනීම:** පාසිකුඩාවේ ප්‍රධාන ක්‍රියාකාරකම පිහිනීම වන අතර බොක්ක ශ්‍රී ලංකාවේ ආරක්ෂිතම පිහිනුම් වෙරළ ලෙස විශ්වීයව සැලකේ.
* **ස්නෝකර්ලිං:** සරල පිහිනුම් වලින් ඔබ්බට පාසිකුඩාවේ වඩාත් ජනප්‍රිය ජල ක්‍රියාකාරකම වන්නේ ගල්පරය මත ස්නෝකර්ලිං කිරීමයි. වෙරළේ සිට පිහිනීමෙන් ගල්පරයට ප්‍රවේශ විය හැකිය.
* **ස්කූබා කිමිදීම:** කිමිදුම් ක්‍රියාකරුවන් කිහිප දෙනෙකු පාසිකුඩාවේ මාර්ගෝපදේශක කිමිදුම් ලබා දෙයි. එහි සන්සුන්, නොගැඹුරු තත්වයන් සැලකිල්ලට ගෙන ආරම්භක කිමිදුම් සඳහා බොක්ක සුදුසු වේ.` }, shortStory: { EN: "Pasikudah Beach - Famous for its golden bay and one of the longest stretches of shallow reef coastline.", SI: "පාසිකුඩා වෙරළ - රන්වන් බොක්ක සහ ලෝකයේ දිගම නොගැඹුරු කොරල්පර වෙරළ තීරයක් සඳහා ප්‍රසිද්ධයි." }, tips: [{ EN: "Safe for kids.", SI: "ළමයින්ට ඉතා ආරක්ෂිතයි." }], hiddenEchoes: { EN: "Coral walk nodes.", SI: "කොරල් මංපෙත්." }, location: "Batticaloa", coordinates: { x: 80, y: 44 },
    nearbyAttractions: [
      { id: "nilaveli", name: { EN: "Nilaveli Beach", SI: "නිලාවේලි වෙරළ" }, image: "https://i.pinimg.com/1200x/c8/c2/40/c8c240b6df4dfb3bccbaa0995b8266b4.jpg" },
      { id: "arugambay", name: { EN: "Arugam Bay", SI: "ආරුගම්බේ" }, image: "https://i.pinimg.com/1200x/51/b0/d8/51b0d8fdddaf927052ffe51ab54b65f9.jpg" },
      { id: "vatadageya", name: { EN: "Vatadageya", SI: "වටදාගෙය" }, image: "https://i.pinimg.com/1200x/3e/16/a6/3e16a69f5a7a1aa1aa918ad765964902.jpg" }
    ]
  },




  // --- WILDLIFE (10) ---
  { id: "yala", name: { EN: "Yala", SI: "යාල" }, category: "wildlife", image: "https://i.pinimg.com/736x/80/a6/9b/80a69b9f0678cd5fc615dd2fc0bd559a.jpg", gallery: ["https://i.pinimg.com/736x/80/a6/9b/80a69b9f0678cd5fc615dd2fc0bd559a.jpg", "https://i.pinimg.com/1200x/1f/61/a5/1f61a5f00d68b86b64e2dd496ba70d33.jpg"], history: { EN: "Yala National Park is the most visited and second largest national park in Sri Lanka. It is famous for having one of the highest densities of leopards in the world. The park consists of five blocks, with a diverse ecosystem ranging from moist monsoon forests to freshwater and marine wetlands. Besides leopards, it is home to elephants, sloth bears, crocodiles, and a rich variety of bird species. The park also contains important ancient pilgrim sites like Sithulpawwa.", SI: "දිවියන් බහුලම වනාන්තරය." }, shortStory: { EN: "Yala National Park - Famous for its high density of leopards and diverse wildlife.", SI: "යාල ජාතික වනෝද්‍යානය - දිවියන් බහුලම සහ විවිධ වන සතුන් සඳහා ප්‍රසිද්ධ වනෝද්‍යානය." }, tips: [{ EN: "Go very early in the morning.", SI: "උදෑසනම සූදානම් වන්න." }], hiddenEchoes: { EN: "Old ruins in the park.", SI: "සිතුල්පව්ව නටබුන්." }, location: "Hambantota", coordinates: { x: 74, y: 88 },
    nearbyAttractions: [
      { id: "kumana", name: { EN: "Kumana National Park", SI: "කුමන ජාතික වනෝද්‍යානය" }, image: "https://i.pinimg.com/736x/71/50/16/71501668218b3602ac732a426f397666.jpg" },
      { id: "bundala", name: { EN: "Bundala National Park", SI: "බූන්දල ජාතික වනෝද්‍යානය" }, image: "https://i.pinimg.com/1200x/8c/68/d3/8c68d38fe1b594fda91bcc42f6c43b97.jpg" },
      { id: "buduruwagala", name: { EN: "Buduruwagala Temple", SI: "බුදුරුවගල විහාරය" }, image: "https://i.pinimg.com/1200x/7d/ce/23/7dce235eedb24bdcbd5ece2ef2836fd8.jpg" }
    ]
  },
  { id: "udawalawe", name: { EN: "Udawalawe National Park", SI: "උඩවලව ජාතික වනෝද්‍යානය" }, category: "wildlife", image: "https://i.pinimg.com/1200x/28/95/94/28959415856159f64b3a6f98073698b8.jpg", gallery: ["https://i.pinimg.com/1200x/28/95/94/28959415856159f64b3a6f98073698b8.jpg"], history: { EN: "Udawalawe National Park is Sri Lanka's premier elephant destination and one of the finest locations in the world for observing wild Asian elephants in their natural habitat. The park is home to a permanently resident population of 500 to 700 Sri Lankan elephants — one of the highest elephant population densities on earth. Created to provide a sanctuary for wild animals displaced by the construction of the Udawalawe Reservoir, the park's landscape of open plains and grasslands resembles an African savanna.", SI: "උඩවලව ජාතික වනෝද්‍යානය ශ්‍රී ලංකාවේ අලි ඇතුන් සඳහා ඇති ප්‍රමුඛතම ගමනාන්තය වන අතර ස්වාභාවික වාසභූමිවල වල් ආසියානු අලි ඇතුන් නිරීක්ෂණය කිරීම සඳහා ලොව ඇති හොඳම ස්ථානවලින් එකකි. උඩවලව ජලාශය ඉදිකිරීම නිසා අවතැන් වූ වන සතුන් සඳහා අභයභූමියක් ලෙස මෙය නිර්මාණය කරන ලදී." }, shortStory: { EN: "The Elephant Capital - A sanctuary in the dry zone.", SI: "අලි ඇතුන්ගේ නිජබිම - වියළි කලාපයේ අභයභූමියක්." }, tips: [{ EN: "Arrive at the gate at 6:00 AM.", SI: "උදෑසන 6:00 ට ගේට්ටුව අසලට පැමිණෙන්න." }, { EN: "Book a full-day safari for the best experience.", SI: "හොඳම අත්දැකීම සඳහා දිනක සෆාරි චාරිකාවක් වෙන් කරගන්න." }, { EN: "Visit the Elephant Transit Home.", SI: "ඇත් අතුරු සෙවණ නරඹන්න." }, { EN: "Bring sun protection and plenty of water.", SI: "හිරු ආවරණ සහ ප්‍රමාණවත් තරම් ජලය රැගෙන එන්න." }, { EN: "Never exit the vehicle.", SI: "කිසිවිටෙකත් රථයෙන් බැසීමෙන් වළකින්න." }], hiddenEchoes: { EN: "The park is home to a permanently resident population of 500 to 700 Sri Lankan elephants.", SI: "මෙම වනෝද්‍යානය තුළ අලි ඇතුන් 500 සිට 700 දක්වා ස්ථිර ගහනයක් වෙසේ." }, location: "Ratnapura/Monaragala", coordinates: { x: 64, y: 84 },
    nearbyAttractions: [
      { id: "yala", name: { EN: "Yala National Park", SI: "යාල ජාතික වනෝද්‍යානය" }, image: "https://i.pinimg.com/1200x/1f/61/a5/1f61a5f00d68b86b64e2dd496ba70d33.jpg" },
      { id: "bundala", name: { EN: "Bundala National Park", SI: "බූන්දල ජාතික වනෝද්‍යානය" }, image: "https://i.pinimg.com/1200x/8c/68/d3/8c68d38fe1b594fda91bcc42f6c43b97.jpg" },
      { id: "belihuloya", name: { EN: "Belihuloya", SI: "බෙලිහුල්ඔය" }, image: "https://i.pinimg.com/1200x/a3/b4/c5/a3b4c5d6e7f8g9h0i1j2.jpg" }
    ],
    detailedAbout: {
      EN: "🐘 UDAWALAWE NATIONAL PARK — උඩවලව ජාතික වනෝද්යානය\nSri Lanka's Elephant Capital — Complete Verified Guide\n\n✅ HONEST LABELLING THROUGHOUT\n✅ CONFIRMED — verified by government records, scientific surveys, and physical observation\n⚠️ UNCERTAIN — figures vary between sources or are debated\n\n📍 LOCATION\nProvince: Sabaragamuwa Province and Uva Province, Sri Lanka\nDistricts: Ratnapura District and Monaragala District\nPosition: South-central Sri Lanka, on the boundary between the wet and dry zones\nArea: 30,821 hectares — 308 square kilometres\nDistance from Colombo: approximately 165 km southeast — about 3.5 to 4 hours by road\nDistance from Ella: approximately 45 km — about 1 to 1.5 hours by road\nDistance from Mirissa: approximately 80 km — about 2 hours by road\nDistance from Galle: approximately 110 km — about 2.5 hours by road\nDistance from Yala National Park Block I: approximately 80 km east — about 2 hours by road\nDistance from Sinharaja Forest Reserve: approximately 40 km northwest — about 1 hour\nDistance from Hambantota: approximately 50 km southeast — about 1 hour\nDistance from Adam's Peak trailhead at Hatton: approximately 100 km — about 2.5 hours\nMain entrance: Thanamalvila Road entrance — the primary visitor entry point with the ticket office\nElephant Transit Home: approximately 5 km from the main entrance\n\n🐘 WHAT IS UDAWALAWE\n✅ CONFIRMED — Udawalawe National Park is Sri Lanka's premier elephant destination and one of the finest locations in the world for observing wild Asian elephants in their natural habitat. The park is home to a permanently resident population of 500 to 700 Sri Lankan elephants — one of the highest elephant population densities on earth. Unlike most other Sri Lankan national parks where elephants move seasonally across large ranges, Udawalawe's elephant population is largely year-round resident — a consequence of the park's fenced boundary, the permanent water supply of the Udawalawe Reservoir, and the abundant grassland food resources within the park.\n✅ CONFIRMED — The defining characteristic that makes Udawalawe exceptional for elephant viewing is its open landscape. The park sits on the boundary between the wet and dry zones — a transition zone where dense jungle gives way to broad, open grassland plains. Visibility across these plains is extraordinary. Elephants that in other parks would be hidden in dense jungle are here visible from great distances across open savannah-like terrain. Herds of 50 to 60 elephants feeding in open grassland in morning light is the defining Udawalawe experience — a spectacle available virtually nowhere else in Asia.\n✅ CONFIRMED — Udawalawe is Sri Lanka's third most visited national park after Yala and Minneriya in terms of tourist numbers. Its accessibility from both the southern coast and the hill country, combined with its near-certain elephant sightings, make it a near-essential component of any Sri Lanka wildlife itinerary.\n✅ CONFIRMED — The park was declared Sri Lanka's fifth national park after Wilpattu, Yala, Gal Oya, and Kumana, on June 30, 1972 under Government Gazette Notification No. 14.\n\n📜 HISTORY — CONFIRMED FACTS\n🌊 The Udawalawe Reservoir — The Reason the Park Exists\n✅ CONFIRMED — Udawalawe National Park was created as a direct consequence of the construction of the Udawalawe Reservoir on the Walawe River. The reservoir was built as part of the Walawe River development scheme — a major post-independence irrigation and hydroelectric project designed to bring water and power to the dry zone lowlands of the south and to expand agricultural land for the growing population.\n✅ CONFIRMED — The construction of the reservoir displaced both the human farming communities who had been conducting chena — shifting cultivation — in the area, and the wild animals — particularly elephants — whose habitat was flooded or fragmented by the new water body. The national park was established with the dual purpose of providing a sanctuary for the displaced wild animals and protecting the catchment area of the reservoir itself. The park was therefore created simultaneously as a wildlife sanctuary and a hydrological protection zone.\n✅ CONFIRMED — The Udawalawe Reservoir covers a surface area of approximately 34 square kilometres. It measures 8.5 km in length with a maximum width of roughly 4.5 km. The reservoir draws water from the Horton Plains Reserve, the Peak Wilderness Sanctuary, and the Haputale area — the same highland watersheds that feed the great river systems of central Sri Lanka. The reservoir lies entirely within the national park boundaries and is the permanent water source that makes the park viable as a year-round elephant habitat.\n✅ CONFIRMED — The reservoir's relative youth — constructed in the 1960s and 1970s — is visible within the park to this day. The creeks running into the reservoir are lined with the skeletal trunks of trees killed by the rising water when the reservoir filled — submerged forest skeletons preserved in the shallows for decades, a distinctive visual feature of the park's water margins.\n🐘 The Fenced Boundary — Why the Elephants Stay\n✅ CONFIRMED — The park boundary is fenced to protect surrounding farmland from elephant incursions. This fencing, while creating an ethical discussion about elephant freedom of movement, is the primary reason why Udawalawe maintains a stable, year-round resident elephant population. In other unfenced Sri Lankan parks — Yala, Wilpattu, Minneriya — elephant populations fluctuate seasonally as animals migrate in and out. At Udawalawe, the fence prevents this migration, resulting in a stable resident population that is almost certain to be encountered on any safari at any time of year.\n✅ CONFIRMED — The Human-Elephant Conflict across Sri Lanka is a documented and serious conservation issue. Although as many as 10,000 elephants may have roamed Sri Lanka at the turn of the 20th century, only approximately 5,000 live in the wild today. Between 150 and 200 elephants die each year in conflict with humans — making the Sri Lankan elephant Endangered under IUCN classification. The fenced national park system, including Udawalawe, is one of the primary conservation tools for protecting the remaining population.\n🏠 The Elephant Transit Home — 1995\n✅ CONFIRMED — The Udawalawe Elephant Transit Home was established in 1995 by the Department of Wildlife Conservation approximately 5 km from the main park entrance. It is the only facility of its specific type in Sri Lanka and one of the most significant elephant rehabilitation programmes in Asia. The Transit Home takes in orphaned, abandoned, and injured elephant calves from across the island — not only from Udawalawe — cares for them until they are ready for independent survival, and releases them back into the wild within the national park.\n✅ CONFIRMED — The Transit Home has housed over 150 individual elephants since its establishment in 1995. The rehabilitation and release programme is considered one of the most successful elephant conservation interventions in Asia. Released elephants are tracked by park officials after release to monitor their adjustment to independent wild life.\n✅ CONFIRMED — The Transit Home is open to public visitors at specific feeding times — typically 9:00 AM, noon, 3:00 PM, and 6:00 PM. Visitors can observe the baby and juvenile elephants being fed milk and other foods at close range from a raised viewing platform. This is a genuinely extraordinary experience — watching young elephants from months-old calves to juvenile animals eating, playing, and interacting with each other at close range. Entry fee for the Transit Home is separate from the national park entry fee.\n\n🌿 THE LANDSCAPE — CONFIRMED DETAILS\n✅ CONFIRMED — Udawalawe sits on the boundary between Sri Lanka's wet zone and dry zone — a transition zone of considerable ecological significance. The topography is dominated by broad, open grassland plains across most of the park's accessible area. These plains are the direct legacy of the former chena farming that cleared the original forest cover. The farmers' departure and the establishment of the national park allowed grassland to establish itself — creating the open savannah-like habitat that makes elephant viewing so reliable.\n✅ CONFIRMED — The northern section of the park transitions toward more mountainous terrain — the Kalthota Range and Diyawini Falls form the northern boundary. The rock outcrops of Bambaragala and Reminikotha lie within the park. This landscape variety — grassland plains, riverine forest along the Walawe River, montane scrub in the north, and the large open reservoir in the south — creates the diverse habitat mosaic that supports the park's 43 mammal species, 184 bird species, and 33 reptile species.\n✅ CONFIRMED — The Walawe River forms the northern boundary of the park. Riverine forest along the river banks provides habitat distinct from the open grasslands — denser, shadier, and more sheltered. Elephants use this riverine corridor regularly, particularly at midday when the shade provides relief from the heat.\n🌡️ Climate\n✅ CONFIRMED — The park has an average annual temperature of approximately 27 to 28 degrees Celsius with low seasonal variation. Relative humidity ranges from 70% to 83%. Annual rainfall is approximately 1,500 mm — significantly more than the dry zone parks of Yala and Wilpattu, and distributed across two wet seasons rather than one. Rainfall peaks occur in April to May and October to November. A dry spell occurs between February and March, and a prolonged dry period runs from mid-May to the end of September. This dual wet season pattern — unique among Sri Lankan national parks — means there is no single long dry season equivalent to that at Yala or Wilpattu.\n\n🐘 ELEPHANTS — THE DEFINING SPECIES\nSri Lankan Elephant (Elephas maximus maximus)\n✅ CONFIRMED — The Sri Lankan elephant is a confirmed subspecies of the Asian elephant — distinguished from the mainland Asian elephant by specific genetic, morphological, and behavioural characteristics. It is classified as Endangered by the IUCN Red List. The Sri Lankan elephant is the largest subspecies of Asian elephant — adult bulls can reach 2.5 to 3.5 metres at the shoulder and weigh between 2 and 5.5 tonnes.\n⚠️ UNCERTAIN — POPULATION FIGURES:\nSources give varying estimates for the resident elephant population at Udawalawe: some cite 250, others 500 to 600, and others 600 to 700. The variation reflects the difficulty of accurately counting a mobile population within 30,000 hectares of mixed habitat. The most commonly cited and most recently confirmed figure is approximately 600 resident elephants. What is not uncertain is that the population is stable, large, and one of the most reliably viewable concentrations of wild Asian elephants anywhere on earth.\n✅ CONFIRMED — Herds of 50 to 60 elephants moving together across the open grasslands are regularly encountered during safaris. Large mixed herds — family groups of females and young with older matriarchs leading — are the most commonly seen formation. Solitary adult bulls are also frequently encountered, particularly near the reservoir margins.\n✅ CONFIRMED — Elephant behaviour commonly observed at Udawalawe during safari includes: feeding on grassland vegetation, drinking and bathing at the reservoir and other water bodies, mud bathing — elephants cover themselves in wet mud which protects skin from insects and regulates body temperature — dust bathing on dry ground for the same purposes, calf nursing and play, and occasional inter-herd and intra-herd social interactions including vocalisations, touch, and coordinated movement.\n✅ CONFIRMED — The open landscape of Udawalawe means that approaching elephants at close range in the jeep — legally within the permitted minimum distance of approximately 50 metres — is a regular and unremarkable occurrence. Elephants here are substantially less disturbed by safari vehicles than elephants at other parks and frequently continue feeding, bathing, and interacting with complete indifference to nearby jeeps.\n⚠️ MALE MUSTH — IMPORTANT SAFETY AWARENESS:\nAdult male elephants periodically enter a hormonal state called musth — a period of dramatically elevated testosterone characterised by heightened aggression, secretion from the temporal glands on the sides of the head, and unpredictable, potentially dangerous behaviour. Musth males approach vehicles more aggressively than non-musth males and are responsible for the majority of dangerous encounters between elephants and safari vehicles in Sri Lanka. Experienced guides recognise musth males immediately — the temporal gland secretion is visible — and maintain greater distances. Never encourage a guide to approach closer to a musth male than the guide recommends.\n\n🦁 MAMMALS — ALL CONFIRMED SPECIES\nSri Lankan Leopard (Panthera pardus kotiya) — present but very rarely seen. The dense network of grassland and scrub provides good cover for leopards but the open landscape that makes elephant viewing easy makes leopard spotting difficult. Sighting probability per safari is very low — approximately 5% or less. Udawalawe is not a destination for leopard-focused visitors.\nSri Lankan Sloth Bear (Melursus ursinus inornatus) — present but seldom seen. Even lower sighting probability than leopards.\nWater Buffalo (Bubalus arnee) — wild water buffalo are present in significant numbers and commonly encountered. Large, powerful, and impressive — adult bulls can be aggressive and experienced guides treat them with great respect.\nSri Lankan Sambar Deer (Rusa unicolor) — commonly seen throughout\nSri Lankan Axis Deer / Spotted Deer (Axis axis) — very common throughout, particularly at grassland edges\nIndian Muntjac / Barking Deer (Muntiacus muntjak) — present, less commonly seen\nSri Lankan Spotted Chevrotain / Mouse Deer (Moschiola meminna) — the world's smallest hoofed mammal, endemic to Sri Lanka; present but secretive and very rarely seen clearly\nWild Boar (Sus scrofa) — common throughout\nGolden Jackal (Canis aureus) — commonly seen particularly at dawn and dusk\nFishing Cat (Prionailurus viverrinus) — present along the reservoir and river margins; Vulnerable by IUCN\nRusty-Spotted Cat (Prionailurus rubiginosus) — present; one of the world's smallest wild cats; occasionally encountered, usually at night\nToque Macaque (Macaca sinica) — endemic, Endangered; present in forest areas\nTufted Grey Langur (Semnopithecus priam) — common in forest and scrubland\nAsian Palm Civet (Paradoxurus hermaphroditus) — present; primarily nocturnal\nGolden Palm Civet (Paradoxurus zeylonensis) — endemic; confirmed in large numbers at a 1989 study; primarily nocturnal\nThree species of Mongoose — stripe-necked, ruddy, and small Indian mongoose all present\nIndian Hare (Lepus nigricollis) — commonly seen on open grassland\nIndian Bush Rat and five species of mice — confirmed\nCeylon Spiny Mouse (Mus fernandoni) — endemic; confirmed at Udawalawe in 1989 study\n\n🦅 BIRDS — CONFIRMED DETAILS\n✅ CONFIRMED — 184 bird species have been recorded at Udawalawe National Park, of which 33 are migratory species present from November to March. The park's position on the wet zone/dry zone boundary creates exceptional bird diversity — species characteristic of both habitat types are present simultaneously.\n🦅 Raptors — Confirmed Present:\nGrey-Headed Fish Eagle — the most impressive raptor of the reservoir margins; a large, powerful eagle with a grey head and white underparts; commonly seen perched on dead trees over the water surface\nWhite-Bellied Sea Eagle — large, distinctive eagle of the reservoir and river areas; confirmed resident\nCrested Serpent Eagle — commonly seen and heard throughout the forest areas\nChangeable Hawk-Eagle — present in the scrub and forest edges\nBrown Fish Owl — confirmed; best seen at dusk near the reservoir\nBlack-Shouldered Kite — commonly seen hovering over the open grasslands\nCommon Kestrel — confirmed\nShikra — a small accipiter; commonly seen\n🦜 Endemic Birds Confirmed:\nSri Lanka Junglefowl — the national bird; very commonly seen at forest edges and grassland margins. The unmistakable brilliant red, orange, and gold plumage of the male is one of the most visually striking sights in the park.\nSri Lanka Spurfowl — endemic; a secretive game bird of scrub and forest undergrowth; heard more often than seen\nRed-Faced Malkoha — a beautiful, long-tailed bird with a striking red facial patch; endemic; confirmed at Udawalawe\nSri Lanka Grey Hornbill — endemic; distinctive large-billed bird of dry zone forest; commonly seen in pairs\nBrown-Capped Babbler — endemic; small, active, noisy birds in scrub undergrowth\n🦢 Water Birds at the Reservoir:\nThe Udawalawe Reservoir is one of the most important water bird habitats in southern Sri Lanka. Confirmed species include: Spot-Billed Pelican, Painted Stork, Asian Openbill Stork, Lesser Adjutant Stork, Little Cormorant, Indian Cormorant, Great Cormorant, Indian Darter, Grey Heron, Purple Heron, Great Egret, Intermediate Egret, Little Egret, Indian Pond Heron, Black-Crowned Night Heron, Eurasian Spoonbill, Black-Headed Ibis, Lesser Whistling Duck, Cotton Pygmy Goose, various sandpipers and waders during the migratory season from November to March.\n🦚 Other Notable Species:\nIndian Peafowl — present in large numbers; peacocks displaying full tail feathers in the early morning are a regular and spectacular sight\nSri Lanka Blue-Magpie — endemic, Vulnerable; present in the forest sections\nIndian Roller — brilliant turquoise-blue flash when flying; commonly seen perching on low branches and fence posts\nBee-Eater species — multiple species hawking insects from low perches\nKingfisher species — multiple species along the reservoir and river margins\n\n🦎 REPTILES — CONFIRMED DETAILS\nMugger Crocodile (Crocodylus palustris) — very commonly seen throughout all water bodies. The reservoir margins, river edges, and any water body within the park should be treated as containing crocodiles at all times. Crocodiles at Udawalawe are large — adult males reaching 3 to 4 metres — and present in substantial numbers. Never approach the water's edge on foot.\nWater Monitor (Varanus salvator) — very commonly seen at water bodies and crossing roads throughout the park. Large individuals — up to 2 metres long — are regularly encountered.\nLand Monitor (Varanus bengalensis) — commonly seen basking on roads and rocks.\nIndian Rock Python (Python molurus) — present; occasionally seen crossing roads.\n30 species of snakes — confirmed within the park including Cobra, Russell's Viper, Rat Snake, Green Pit Viper, and others. The grassland and scrub habitat supports a rich snake fauna.\nStar Tortoise (Geochelone elegans) — present in dry scrubland; occasionally seen crossing roads.\n\n🌿 FLORA — CONFIRMED DETAILS\n✅ CONFIRMED — Over 400 species of plants have been recorded at Udawalawe. The park lies on the wet zone/dry zone boundary producing unusual botanical diversity.\nGrasslands — the dominant visible vegetation across most of the park's open areas. Panicum maximum and Imperata cylindrica are the most important grass species and primary food sources for the elephants. Cymbopogon confertiflorus grass and Grewia tiliifolia bushes are also common.\nForest species — the taller trees of the park include Chloroxylon swietenia (satinwood), Berrya cordifolia, Diospyros ebenum (ebony), Adina cordifolia, Vitex pinnata, Schleichera oleosa, and Diospyros ovalifolia.\nRiverine species — Hopea cordifolia and Terminalia arjuna grow along the river margins of the Walawe River.\nMedicinal plants — Terminalia bellirica and Phyllanthus emblica are among the documented medicinal plants of the park.\nEndemic plants — Udawalawe Dwarf Bamboo, Udawalawe Orchid, and Udawalawe Fern are documented endemic species — found within the park and described from collections made there.\n\n🎟️ ENTRY FEES AND SAFARI DETAILS — 2026\nEntry Fees:\nForeign adults: approximately USD $15 park entry fee — verify current rate at the ticket office\nSri Lankan nationals: nominal local rate\nVehicle entry fee: approximately 250 LKR per vehicle\nService charges and taxes are added to the basic entry fee\nElephant Transit Home Entry:\nApproximately 1,000 to 2,000 LKR for foreign adults — verify current rate at the Transit Home entrance\nSri Lankan nationals: nominal local rate\nOpen at specific feeding times: approximately 9:00 AM, 12:00 noon, 3:00 PM, and 6:00 PM\nSafari Jeep Options:\nHalf-day safari (3 to 4 hours): approximately 4,000 to 7,000 LKR for the full jeep — up to 6 passengers\nFull-day safari (7 to 8 hours): approximately 7,000 to 12,000 LKR for the full jeep\nPrivate jeep with licensed guide: recommended over shared jeeps for better flexibility and guide attention\nSafari Departure Times:\nMorning safari: 6:00 AM — the most productive session. The first 2 hours after dawn are the finest of the entire day. Elephant herds are most active, light is best, and the park is at its coolest.\nAfternoon safari: 2:00 PM to 3:00 PM — good for afternoon elephant activity as herds move to water before dusk\nFull-day safari: entering at 6:00 AM and remaining until 6:00 PM — the most comprehensive option; allows both morning and afternoon active periods\nOpening Hours: Daily 6:00 AM to 6:00 PM\n\n🌤️ BEST TIME TO VISIT\nMay to September — Dry Season, Primary Recommendation\nThe prolonged dry period from mid-May to end of September produces the best safari conditions. Water sources concentrate at the reservoir and permanent water holes — drawing maximum numbers of elephants, deer, and other wildlife into visible open areas. Vegetation thins and dries, improving sightlines across the grasslands. This is the period of maximum elephant concentration at water sources and the finest photographic conditions.\nJune, July, and August are the peak months — reliably dry, hot, and brilliant for wildlife sightings. These coincide with the east coast dry season at Arugam Bay, Pasikudah, and Nilaveli, allowing a logical circuit.\nDecember to March\nA secondary dry period between the two wet seasons. Good conditions for safaris with elephants reliably present year-round. Migratory birds are present from November to March — the reservoir is at maximum bird activity. The grasslands are green from the preceding October to November rains.\nOctober to November — First Wet Season\nHeavy rain possible. Roads within the park can become muddy. Wildlife disperses as water is available everywhere. Not the optimal safari season but the park remains open and elephants are always present year-round.\nApril to May — Second Wet Season\nApril to May rainfall is the second wet season. Similar considerations to October to November.\n✅ CONFIRMED — YEAR-ROUND ELEPHANTS:\nUnlike Minneriya — where the famous elephant gathering is strictly seasonal — Udawalawe's fenced boundary and permanent water supply mean that elephants are present and visible year-round. Even during the wet season, sighting probability remains high. No single season should be avoided on grounds of zero elephant probability.\n\n🚌 GETTING THERE\n🚗 From Colombo — 165 km, approximately 3.5 to 4 hours:\nVia the Southern Expressway (E01) to Pinnaduwa junction then A18 highway through Embilipitiya to the park entrance. The expressway reduces travel time significantly compared to the old coastal route.\nFrom Ella — 45 km, approximately 1 to 1.5 hours:\nThe most natural combination in Sri Lanka — Ella's highlands followed by Udawalawe's elephant country. The descent from the highland scenery of Ella through tea estates and jungle to the open plains of Udawalawe is one of the most rewarding drive sequences in the country.\nFrom Mirissa — 80 km, approximately 2 hours:\nVia Matara and the A2 coastal highway to Hambantota then north to the park. A natural combination — south coast beach followed by elephant safari.\nFrom Galle — 110 km, approximately 2.5 hours:\nVia the Southern Expressway to Hambantota then north.\nFrom Yala — 80 km, approximately 2 hours:\nVia Wellawaya or Tissamaharama. Combining Yala for leopards and Udawalawe for elephants in a single trip covers the finest wildlife destinations of southern Sri Lanka.\nFrom Sinharaja — 40 km, approximately 1 hour:\nThe closest national park to Udawalawe — combining Sri Lanka's finest primary rainforest with its finest elephant country in a single trip.\nFrom Hambantota — 50 km, approximately 1 hour:\nHambantota is the nearest town with significant transport connections.\nWithin the Park:\nAll movement inside the park is by safari jeep. No walking is permitted. Jeeps are available for hire at the park entrance — walk-up hire is possible but booking in advance through accommodation is recommended during peak season when jeep availability can be constrained.\n\n🏨 WHERE TO STAY\nNear the Park Entrance:\nBudget: Multiple small guesthouses and homestays near the park entrance at approximately 3,000 to 6,000 LKR per night. Basic clean rooms with breakfast and dinner on request. The most economical option for budget safari visitors.\nMid-Range: Udawalawe Safari Resort — comfortable mid-range property 10 minutes from the park entrance; swimming pool, restaurant, reliable safari booking service. Rates approximately USD $60 to $90 per night.\nGrand Udawalawe Safari Resort — modern hotel in lush tropical gardens attracting numerous birds; rooms with garden view and private terrace or balcony; swimming pool and restaurant. Rates approximately USD $70 to $100 per night.\nNearby:\nCentauria Lake Resort — located on the edge of the Chandrika Reservoir south of the park. 42 rooms and four lakeside cottages. Swimming pool, Ayurvedic centre, excursions with naturalist guides. The most atmospheric accommodation option in the area. Rates approximately USD $100 to $150 per night.\nIn Ella (45 km):\nThe full range of Ella accommodation described in the Ella guide above. Many visitors use Ella as a base and make Udawalawe a day trip — the 45 km drive is manageable for a morning safari with return to Ella by afternoon.\n\n🍽️ WHERE TO EAT\nAt Accommodation:\nMost guesthouses and resort hotels near the park entrance provide breakfast and dinner — Sri Lankan rice and curry with fresh local vegetables. The meal quality at smaller family guesthouses is often superior to resort restaurant food at a fraction of the price. Most full-day safari visitors take breakfast before the morning safari and dinner on return.\nAt the Park Entrance:\nA small canteen near the ticket office serves tea, biscuits, short eats, and basic food. Adequate for a pre-safari tea but not a full meal. Carry water and snacks for the safari itself — no food service is available inside the park.\nIn Embilipitiya Town (approximately 20 km):\nThe nearest town with a full range of local restaurants, supermarkets, and food stalls at local prices. Worth stopping on arrival or departure for fresh fruit, provisions, and a proper local meal.\n\n💡 ESSENTIAL TIPS — PRACTICAL ONLY\n🌅 Arrive at the gate at 6:00 AM when it opens. The first two hours of daylight — 6:00 to 8:00 AM — are the finest of the entire day for elephant viewing. Herds that spent the night at the reservoir move through the open grasslands in the early morning before retreating to shade. The light is golden and the air is cool. Visitors who arrive at 9:00 AM miss the finest hour consistently.\n🐘 Book a full-day safari. Udawalawe's park road network is extensive. Full-day safaris access more of the park, reach the more remote water bodies where large herds gather, and capture both the morning active period and the late afternoon movement to water before dusk. The value-to-cost ratio of a full-day compared to a half-day safari at Udawalawe is significantly better than at smaller, more compact parks.\n👁️ Hire the most experienced guide available. An experienced guide at Udawalawe knows the specific locations where large herds gather at different times of year, which water bodies are most active on any given day based on rainfall patterns, and can identify individual elephants — matriarchs, bulls in musth, known mothers with calves — that transform the experience from casual observation into genuine wildlife understanding.\n🐘 Visit the Elephant Transit Home. The feeding sessions at the Transit Home — particularly the 9:00 AM or 3:00 PM sessions — allow observation of young elephants from months-old calves to juveniles at very close range. The calves' behaviour — competing for milk, playing, sleeping, exploring — is extraordinary to observe. This experience is not replicated anywhere else in Sri Lanka and is only 5 km from the main park entrance.\n☀️ Bring sun protection for the full day. The open-top safari jeep provides no shade. Extended exposure in tropical sun across a full-day safari without sun protection causes severe sunburn. Wear a wide-brimmed hat, long sleeves, and apply SPF 50 sunscreen at departure and reapply during the safari. A large scarf or light shawl can serve as both sun protection and dust protection on the rough dirt roads.\n💧 Carry sufficient water. A minimum of 2 litres per person for a half-day safari and 3 litres for a full day. The heat and dust of the open jeep safari are dehydrating even when the air temperature does not feel extreme. No drinking water is available inside the park.\n🔭 Bring binoculars. Even at a park famous for close elephant encounters, binoculars transform the birdwatching experience — the Grey-Headed Fish Eagle, Painted Storks, and Sri Lanka Junglefowl are all more rewarding to observe in detail. For elephant viewing across the open reservoir, binoculars allow counting herd composition and identifying calves and bulls at distances too great for the naked eye.\n⚠️ Never exit the vehicle. Udawalawe contains 600 wild elephants, mugger crocodiles, wild water buffalo, and venomous snakes. Exiting the vehicle without the explicit instruction of the guide is prohibited and genuinely dangerous. The open landscape creates the illusion of safety that the dense jungle of other parks does not — but the animals are equally wild and equally capable of causing harm.\n📅 Combine with Ella. Udawalawe and Ella are only 45 km apart — a pairing of highland hill country scenery with elephant safari. Most visitors coming from Kandy or Colombo naturally pass through the Ella area on the way to Udawalawe. Spending 2 nights in Ella and doing the morning safari at Udawalawe before continuing to the south coast is one of the finest sequences in Sri Lanka.\n📅 Combine with Yala and the southern coast. Yala National Park — Sri Lanka's premier leopard destination — is approximately 80 km east of Udawalawe. Combining a 2-night Udawalawe elephant experience with a 2-night Yala leopard safari, bookended by the beaches of Mirissa or Unawatuna, covers the finest wildlife and coast destinations of southern Sri Lanka in a single coherent circuit.\n📅 Combine with Sinharaja. Sinharaja Forest Reserve — Sri Lanka's last primary rainforest — is approximately 40 km northwest of Udawalawe. The contrast between the open elephant country of Udawalawe and the dense, birdcall-filled cloud forest of Sinharaja is one of the most striking single-day contrasts available in Sri Lankan nature tourism. The distance between the two makes a combined visit entirely practical."
    }
  },
  { id: "minneriya", name: { EN: "Minneriya", SI: "මින්නේරිය" }, category: "wildlife", image: "https://i.pinimg.com/1200x/38/12/a2/3812a200c26bee48e77332bc76ad368e.jpg", gallery: ["https://i.pinimg.com/1200x/38/12/a2/3812a200c26bee48e77332bc76ad368e.jpg"], history: { EN: "Minneriya National Park is famous for the 'Great Gathering', a spectacular natural phenomenon where hundreds of Asian elephants congregate around the Minneriya Tank during the dry season (August to September). This is the largest known meeting of Asian elephants in the world. The park's central feature is the ancient Minneriya Tank, built by King Mahasena in the 3rd century AD. It supports a wide variety of wildlife, including deer, sambar, and numerous bird species.", SI: "මහා අලි රංචුව." }, shortStory: { EN: "Minneriya National Park - Home to the world-famous 'Great Gathering' of Asian elephants.", SI: "මින්නේරිය ජාතික වනෝද්‍යානය - ලොව ප්‍රකට අලි ඇතුන්ගේ 'මහා එකමුතුව' සඳහා ප්‍රසිද්ධයි." }, tips: [{ EN: "Go in the afternoon.", SI: "සවස් කාලයේ යන්න." }], hiddenEchoes: { EN: "A big old lake wall.", SI: "මින්නේරිය වැව් බැම්ම." }, location: "Polonnaruwa", coordinates: { x: 58, y: 36 },
    nearbyAttractions: [
      { id: "vatadageya", name: { EN: "Vatadageya", SI: "වටදාගෙය" }, image: "https://i.pinimg.com/1200x/3e/16/a6/3e16a69f5a7a1aa1aa918ad765964902.jpg" },
      { id: "sigiriya", name: { EN: "Sigiriya", SI: "සීගිරිය" }, image: "https://i.pinimg.com/1200x/3a/e7/48/3ae7487f4e95b92ce2d3c10c5b1038e0.jpg" },
      { id: "dambulla", name: { EN: "Dambulla Cave Temple", SI: "දඹුලු ලෙන් විහාරය" }, image: "https://i.pinimg.com/1200x/ca/96/d8/ca96d8e009f8ad50128891ce45b59c9d.jpg" }
    ]
  },
  { id: "wilpattu", name: { EN: "Wilpattu", SI: "විල්පත්තුව" }, category: "wildlife", image: "https://i.pinimg.com/736x/f6/51/77/f65177d61ea209acea5c455e00246b7b.jpg", gallery: ["https://i.pinimg.com/736x/f6/51/77/f65177d61ea209acea5c455e00246b7b.jpg"], history: { EN: "Wilpattu National Park is the largest and one of the oldest national parks in Sri Lanka. It is unique for its 'Willus'—natural, sand-rimmed water basins or depressions that fill with rainwater. The park is world-renowned for its leopard population and sloth bears. Its dense dry zone forest and open grassy plains provide a habitat for a wide variety of wildlife. The park also has historical significance, with ruins of ancient palaces and legends linking it to the arrival of Prince Vijaya.", SI: "විල් පිරි වනෝද්‍යානය." }, shortStory: { EN: "Wilpattu National Park - Sri Lanka's largest park, famous for its natural 'Willus' and leopard sightings.", SI: "විල්පත්තු ජාතික වනෝද්‍යානය - ස්වාභාවික විල් සහ දිවියන් දැක බලා ගැනීමට ප්‍රසිද්ධ ශ්‍රී ලංකාවේ විශාලතම වනෝද්‍යානය." }, tips: [{ EN: "Go for a full day trip.", SI: "දවස පුරා සෆාරි." }], hiddenEchoes: { EN: "Copper colored sand.", SI: "තඹ වන් වැලි." }, location: "Anuradhapura", coordinates: { x: 34, y: 22 },
    nearbyAttractions: [
      { id: "ruwanwelisaya", name: { EN: "Ruwanwelisaya", SI: "රුවන්වැලිසෑය" }, image: "https://i.pinimg.com/1200x/e6/c4/67/e6c467b97e6ff3c8344d25e2b107b50e.jpg" },

      { id: "mihintale", name: { EN: "Mihintale", SI: "මිහින්තලේ" }, image: "https://i.pinimg.com/1200x/1b/95/f6/1b95f6de2957767658ef8f7cb1ef658c.jpg" }
    ]
  },
  { id: "kumana", name: { EN: "Kumana", SI: "කුමන" }, category: "wildlife", image: "https://i.pinimg.com/736x/71/50/16/71501668218b3602ac732a426f397666.jpg", gallery: ["https://i.pinimg.com/736x/71/50/16/71501668218b3602ac732a426f397666.jpg"], history: { EN: "Kumana National Park, formerly known as Yala East, is renowned for its avifauna, particularly its large flocks of migratory waterfowl and wading birds. The park's 200-hectare Kumana Villu mangrove swamp is a critical nesting ground for painted storks, pelicans, spoonbills, and ibises. Apart from birds, the park is home to leopards, elephants, and turtles. It is also a significant route for the annual 'Pada Yatra' pilgrimage to Kataragama.", SI: "කුරුලු පාරාදීසය." }, shortStory: { EN: "Kumana National Park - A paradise for migratory birds and wetland wildlife.", SI: "කුමන ජාතික වනෝද්‍යානය - සංක්‍රමණික පක්ෂීන් සහ තෙත් බිම් වනජීවීන් සඳහා ප්‍රසිද්ධ පාරාදීසය." }, tips: [{ EN: "Bring your binoculars.", SI: "දුරදක්නයක් රැගෙන එන්න." }], hiddenEchoes: { EN: "Mangrove forests.", SI: "කඩොලාන වනාන්තර." }, location: "Ampara", coordinates: { x: 84, y: 82 },
    nearbyAttractions: [
      { id: "arugambay", name: { EN: "Arugam Bay", SI: "ආරුගම්බේ" }, image: "https://i.pinimg.com/1200x/51/b0/d8/51b0d8fdddaf927052ffe51ab54b65f9.jpg" },
      { id: "yala", name: { EN: "Yala National Park", SI: "යාල ජාතික වනෝද්‍යානය" }, image: "https://i.pinimg.com/1200x/1f/61/a5/1f61a5f00d68b86b64e2dd496ba70d33.jpg" },
      { id: "pasikudah", name: { EN: "Pasikudah Beach", SI: "පාසිකුඩා වෙරළ" }, image: "https://i.pinimg.com/1200x/02/4f/c9/024fc9b932d7565de43b861d11a58ef9.jpg" }
    ]
  },
  { id: "bundala", name: { EN: "Bundala", SI: "බූන්දල" }, category: "wildlife", image: "https://i.pinimg.com/1200x/8c/68/d3/8c68d38fe1b594fda91bcc42f6c43b97.jpg", gallery: ["https://i.pinimg.com/1200x/8c/68/d3/8c68d38fe1b594fda91bcc42f6c43b97.jpg"], history: { EN: "Bundala National Park is an internationally important wintering ground for migratory waterbirds in Sri Lanka. It was the first wetland to be declared a Ramsar site in the country and a UNESCO Man and Biosphere Reserve. The park is famous for its large flocks of Greater Flamingos that migrate here. Its diverse landscape includes lagoons, dunes, and scrub jungle, hosting elephants, crocodiles, and five species of marine turtles.", SI: "ෆ්ලෙමින්ගෝ පක්ෂීන්." }, shortStory: { EN: "Bundala National Park - A Ramsar wetland famous for migratory waterbirds and flamingos.", SI: "බූන්දල ජාතික වනෝද්‍යානය - සංක්‍රමණික පක්ෂීන් සහ ෆ්ලෙමින්ගෝ පක්ෂීන් සඳහා ප්‍රසිද්ධ රැම්සා තෙත් බිම." }, tips: [{ EN: "See the salt pans.", SI: "ලුණු ලේවායන් බලන්න." }], hiddenEchoes: { EN: "Paths for birds.", SI: "සංචාරක පක්ෂි මග." }, location: "Hambantota", coordinates: { x: 70, y: 92 },
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
`, SI: "නොඉඳුල් වැසි වනාන්තරය." }, shortStory: { EN: "Sinharaja Forest Reserve - Sri Lanka's last primary tropical rainforest and a UNESCO World Heritage site.", SI: "සිංහරාජ වැසි වනාන්තරය - ශ්‍රී ලංකාවේ ඉතිරිව ඇති ප්‍රධානතම නිවර්තන වැසි වනාන්තරය සහ යුනෙස්කෝ ලෝක උරුමයක්." }, tips: [{ EN: "Wear long socks for bugs.", SI: "කූඩැල්ලන්ගෙන් ආරක්ෂා වන්න." }], hiddenEchoes: { EN: "Many rare birds.", SI: "ආවේණික පක්ෂි රංචු." }, location: "Ratnapura", coordinates: { x: 44, y: 80 },
    nearbyAttractions: [
      { id: "galle-fort", name: { EN: "Galle Fort", SI: "ගාල්ල කොටුව" }, image: "https://i.pinimg.com/1200x/fa/56/b6/fa56b632b66edcf9c5ee396a4930278c.jpg" },
      { id: "unawatuna", name: { EN: "Unawatuna Beach", SI: "උණවටුන වෙරළ" }, image: "https://i.pinimg.com/736x/09/4c/77/094c771bcf9d20988d5cb0bd21e91487.jpg" },
      { id: "bopathella", name: { EN: "Bopath Ella", SI: "බෝපත් ඇල්ල" }, image: "https://i.pinimg.com/736x/bd/ba/05/bdba05c1bd88ef141866a2b37f2d2ebf.jpg" }
    ]
  },
  { id: "horton", name: { EN: "Horton Plains", SI: "හෝර්ටන් තැන්න" }, category: "wildlife", image: "https://i.pinimg.com/736x/dc/0f/bb/dc0fbbb8b94e6038509e4b79a53c2f58.jpg", gallery: ["https://i.pinimg.com/736x/dc/0f/bb/dc0fbbb8b94e6038509e4b79a53c2f58.jpg"], history: { EN: "Horton Plains National Park is a protected area in the central highlands of Sri Lanka and is covered by montane grassland and cloud forest. This plateau at an altitude of 2,100–2,300 meters is rich in biodiversity and many species found here are endemic to the region. The park's most famous feature is 'World's End', a sheer precipice with a 870m drop. It is also the headwaters of three major Sri Lankan rivers: the Mahaweli, Kelani, and Walawe.", SI: "කඳුකර තැන්න." }, shortStory: { EN: "Horton Plains National Park - Famous for the 'World's End' precipice and montane cloud forests.", SI: "හෝර්ටන් තැන්න ජාතික වනෝද්‍යානය - 'ලෝකාන්තය' සහ කඳුකර වලාකුළු වනාන්තර සඳහා ප්‍රසිද්ධයි." }, tips: [{ EN: "Start early at 5 AM.", SI: "පාන්දර 5 ට ආරම්භ කරන්න." }], hiddenEchoes: { EN: "A beautiful waterfall.", SI: "බේකර්ස් ඇල්ල." }, location: "Central Highlands", coordinates: { x: 62, y: 72 },
    nearbyAttractions: [
      { id: "ella", name: { EN: "Ella", SI: "ඇල්ල" }, image: "https://i.pinimg.com/736x/19/c4/ca/19c4ca9cac03989b7a94bbe48beb166d.jpg" },
      { id: "adam'speak", name: { EN: "Adam's Peak", SI: "ශ්‍රී පාදය" }, image: "https://i.pinimg.com/736x/4f/ca/f7/4fcaf7f3fa7753f8d381557712fe023c.jpg" }
    ]
  },



  // --- MOUNTAINS / HILLS (10) ---
  { id: "ella", name: { EN: "Ella", SI: "ඇල්ල" }, category: "mountains", image: "https://i.pinimg.com/736x/19/c4/ca/19c4ca9cac03989b7a94bbe48beb166d.jpg", gallery: ["https://i.pinimg.com/736x/19/c4/ca/19c4ca9cac03989b7a94bbe48beb166d.jpg"], history: { EN: "Ella is a small town in the Badulla District of Uva Province, governed by an Urban Council. It is approximately 200 kilometres east of Colombo and is situated at an elevation of 1,041 metres above sea level. The area has a rich bio-diversity, dense with numerous varieties of flora and fauna. Ella is surrounded by hills covered with cloud forests and tea plantations. The town has a cooler climate than surrounding lowlands, due to its elevation. The Ella Gap allows views across the southern plains of Sri Lanka.", SI: "කඳුකර නිම්න ගම්මානය." }, shortStory: { EN: "Ella - A scenic hill country village famous for its stunning views and tea plantations.", SI: "ඇල්ල - සුන්දර දර්ශන සහ තේ වතු සඳහා ප්‍රසිද්ධ කඳුකර ගම්මානය." }, tips: [{ EN: "See the Nine Arch Bridge.", SI: "ආරුක්කු නවය පාලමට යන්න." }], hiddenEchoes: { EN: "Old caves to see.", SI: "රාවණා ගුහාව." }, location: "Badulla", coordinates: { x: 68, y: 68 },
    nearbyAttractions: [
      { id: "ravanafalls", name: { EN: "Ravana Falls", SI: "රාවණා ඇල්ල" }, image: "https://i.pinimg.com/1200x/e5/cf/c0/e5cfc05e4ebb57cf741b8dcf0677a269.jpg" },
      { id: "diyaluma", name: { EN: "Diyaluma Falls", SI: "දියලුම ඇල්ල" }, image: "https://i.pinimg.com/736x/2c/6a/50/2c6a5022d41b3ee3a686ead9141d04f8.jpg" }
    ]
  },

  { id: "adam'speak", name: { EN: "Adam's Peak", SI: "ශ්‍රී පාදය" }, category: "mountains", image: "https://i.pinimg.com/736x/4f/ca/f7/4fcaf7f3fa7753f8d381557712fe023c.jpg", gallery: ["https://i.pinimg.com/736x/4f/ca/f7/4fcaf7f3fa7753f8d381557712fe023c.jpg"], history: { EN: "Adam's Peak is a 2,243 m (7,359 ft) tall conical mountain located in central Sri Lanka. It is well known for the Sri Pada, i.e., 'sacred footprint', a 1.8 m (5 ft 11 in) rock formation near the summit, which in Buddhist tradition is held to be the footprint of the Buddha, in Hindu tradition that of Hanuman or Shiva and in some Islamic and Christian traditions that of Adam, or that of St. Thomas.", SI: "පූජනීය ශ්‍රී පාද පියුම." }, shortStory: { EN: "Adam's Peak (Sri Pada) - A sacred mountain peak famous for the 'sacred footprint' and breathtaking sunrise views.", SI: "ශ්‍රී පාදය - පූජනීය 'ශ්‍රී පාද පියුම' සහ හිරු උදාවේ දර්ශන සඳහා ප්‍රසිද්ධ පූජනීය කඳු මුදුන." }, tips: [{ EN: "Start climbing at midnight.", SI: "මධ්‍යම රාත්‍රියේ අරඹන්න." }], hiddenEchoes: { EN: "A shadow at sunrise.", SI: "හිරු උදාවේ සෙවණැල්ල." }, location: "Ratnapura", coordinates: { x: 54, y: 70 },
    nearbyAttractions: [
      { id: "kitulgala", name: { EN: "Kitulgala", SI: "කිතුල්ගල" }, image: "https://i.pinimg.com/1200x/4e/29/29/4e2929ee8842aac82e8cbb66db6dc9b9.jpg" },
      { id: "laxapana", name: { EN: "Laxapana Falls", SI: "ලක්ෂපාන ඇල්ල" }, image: "https://i.pinimg.com/736x/39/fa/e5/39fae53bd62e11db5fd2ef09d1eb819b.jpg" }
    ]
  },
  { id: "knuckles", name: { EN: "Knuckles", SI: "නකල්ස්" }, category: "mountains", image: "https://i.pinimg.com/1200x/59/90/2a/59902a787d6a8c484b8d014234ef36d4.jpg", gallery: ["https://i.pinimg.com/1200x/59/90/2a/59902a787d6a8c484b8d014234ef36d4.jpg"], history: { EN: "The Knuckles Mountain Range lies in central Sri Lanka, in the Districts of Matale and Kandy. The range takes its name from a series of recumbent folds and peaks in the west of the massif which resemble the knuckles of clenched fist when viewed from certain locations in the Kandy District. Whilst this name was assigned by early British surveyors, the Sinhalese residents have traditionally referred to the area as Dumbara Kanduvetiya meaning Mist-laden Mountain Range.", SI: "දුෂ්කර කඳු පන්තිය." }, shortStory: { EN: "Knuckles Mountain Range - A mist-laden range with diverse flora, fauna, and challenging hiking trails.", SI: "නකල්ස් කඳු පන්තිය - විවිධ ශාක හා සත්ව විශේෂයන්ගෙන් යුත් මීදුමෙන් වැසුණු කඳු පන්තිය." }, tips: [{ EN: "You must have a guide.", SI: "මඟපෙන්වන්නෙකු අවශ්‍යයි." }], hiddenEchoes: { EN: "A very old village.", SI: "මීමුරේ ගම්මානය." }, location: "Kandy", coordinates: { x: 62, y: 44 },
    nearbyAttractions: [
      { id: "meemure", name: { EN: "Meemure", SI: "මීමුරේ" }, image: "https://i.pinimg.com/1200x/ba/07/ee/ba07ee618d2e4a8f1146754ae8ae8710.jpg" },
      { id: "riverston", name: { EN: "Riverston", SI: "රිවර්ස්ටන්" }, image: "https://i.pinimg.com/736x/a8/72/64/a872646bb1a038b1580e1096651bb288.jpg" },
      { id: "kandy-temple", name: { EN: "Temple of the Tooth", SI: "දළදා මාළිගාව" }, image: "https://i.pinimg.com/1200x/b6/4b/ca/b64bcaaf16fc3356cee1b56c84ebfd8f.jpg" }
    ]
  },
  { id: "haputale", name: { EN: "Haputale", SI: "හපුතලේ" }, category: "mountains", image: "https://i.pinimg.com/1200x/c3/bc/5e/c3bc5e159f35130bcad02b0ee7b0f91f.jpg", gallery: ["https://i.pinimg.com/1200x/c3/bc/5e/c3bc5e159f35130bcad02b0ee7b0f91f.jpg"], history: { EN: "Haputale is a town of Badulla District in the Uva Province, Sri Lanka, governed by an Urban Council. The elevation is 1431 m (4695 ft) above the sea level. The area has a rich bio-diversity dense with numerous varieties of flora and fauna. Haputale is surrounded by hills covered with cloud forests and tea plantations. The town has a cooler climate than its surroundings, due to its elevation. The Haputale pass allows views across the Southern plains of Sri Lanka.", SI: "අහසේ තේ උයන්." }, shortStory: { EN: "Haputale - A scenic hill town in the central highlands, famous for Lipton's Seat and tea plantations.", SI: "හපුතලේ - ලිප්ටන් සීට් සහ තේ වතු සඳහා ප්‍රසිද්ධ මධ්‍යම කඳුකරයේ සුන්දර නගරය." }, tips: [{ EN: "Go to Lipton's Seat.", SI: "ලිප්ටන් සීට් වෙත යන්න." }], hiddenEchoes: { EN: "A beautiful old house.", SI: "ඇඩිෂම් බංගලාව." }, location: "Badulla", coordinates: { x: 64, y: 70 },
    nearbyAttractions: [
      { id: "diyaluma", name: { EN: "Diyaluma Falls", SI: "දියලුම ඇල්ල" }, image: "https://i.pinimg.com/736x/2c/6a/50/2c6a5022d41b3ee3a686ead9141d04f8.jpg" },
      { id: "ella", name: { EN: "Ella", SI: "ඇල්ල" }, image: "https://i.pinimg.com/736x/19/c4/ca/19c4ca9cac03989b7a94bbe48beb166d.jpg" }
    ]
  },
  { id: "pidurangala", name: { EN: "Pidurangala", SI: "පිදුරංගල" }, category: "mountains", image: "https://i.pinimg.com/736x/b5/d0/f7/b5d0f760425e71a84e69d7c9b45f3821.jpg", gallery: ["https://i.pinimg.com/1200x/3a/e7/48/3ae7487f4e95b92ce2d3c10c5b1038e0.jpg", "https://i.pinimg.com/736x/b5/d0/f7/b5d0f760425e71a84e69d7c9b45f3821.jpg"], history: { EN: "Pidurangala is a massive rock formation located a few kilometers north of Sigiriya. It has an interesting history closely related to the Sigiriya Rock Fortress. Being less difficult to climb than Sigiriya, Pidurangala is often overlooked by tourists, but offers a arguably better view of Sigiriya itself. Pidurangala Vihara is an ancient Buddhist temple situated in Pidurangala village of Matale District, Sri Lanka. The temple was constructed on a massive rock called Pidurangala, which is located a few kilometers north of the historical fort Sigiriya.", SI: "භික්ෂූන්ගේ වාසස්ථානය." }, shortStory: { EN: "Pidurangala Rock - A massive rock formation offering panoramic views of Sigiriya and the surrounding landscape.", SI: "පිදුරංගල පර්වතය - සීගිරිය සහ අවට ප්‍රදේශයේ දර්ශනීය දසුන් ලබා දෙන දැවැන්ත පර්වතය." }, tips: [{ EN: "Bring a light for your head.", SI: "විදුලි පන්දමක් ගන්න." }], hiddenEchoes: { EN: "A big sleeping Buddha statue.", SI: "සැතපෙන බුදු පිළිමය." }, location: "Matale", coordinates: { x: 53, y: 37 },
    nearbyAttractions: [
      { id: "sigiriya", name: { EN: "Sigiriya", SI: "සීගිරිය" }, image: "https://i.pinimg.com/1200x/3a/e7/48/3ae7487f4e95b92ce2d3c10c5b1038e0.jpg" },
      { id: "dambulla", name: { EN: "Dambulla Cave Temple", SI: "දඹුලු ලෙන් විහාරය" }, image: "https://i.pinimg.com/1200x/ca/96/d8/ca96d8e009f8ad50128891ce45b59c9d.jpg" },
      { id: "minneriya", name: { EN: "Minneriya National Park", SI: "මින්නේරිය ජාතික වනෝද්‍යානය" }, image: "https://i.pinimg.com/1200x/38/12/a2/3812a200c26bee48e77332bc76ad368e.jpg" }
    ]
  },
  { id: "riverston", name: { EN: "Riverston", SI: "රිවර්ස්ටන්" }, category: "mountains", image: "https://i.pinimg.com/736x/a8/72/64/a872646bb1a038b1580e1096651bb288.jpg", gallery: ["https://i.pinimg.com/1200x/d2/e3/f4/d2e3f4g5h6i7j8k9l0m1.jpg", "https://i.pinimg.com/736x/a8/72/64/a872646bb1a038b1580e1096651bb288.jpg"], history: { EN: "Riverston is a peak in the Knuckles Mountain Range located in Matale District, Central Province, Sri Lanka. It is one of the most popular hill stations in the country. The peak is located about 30 km from the Matale town. It is known for its strong winds and the beautiful view of the surrounding mountains. The area is also home to a number of endemic species of flora and fauna.", SI: "සුළං සහිත කඳු මුදුන්." }, shortStory: { EN: "Riverston - A peak in the Knuckles range known for its strong winds and breathtaking mountain views.", SI: "රිවර්ස්ටන් - දැඩි සුළඟ සහ කඳුකරයේ දර්ශනීය දසුන් සඳහා ප්‍රසිද්ධ නකල්ස් කඳු පන්තියේ කඳු මුදුනක්." }, tips: [{ EN: "It is very windy. Wear warm clothes.", SI: "දැඩි සුළඟ, උණුසුම් වන්න." }], hiddenEchoes: { EN: "A beautiful waterfall nearby.", SI: "සේරා ඇල්ල." }, location: "Matale", coordinates: { x: 58, y: 46 },
    nearbyAttractions: [
      { id: "knuckles", name: { EN: "Knuckles Mountain Range", SI: "නකල්ස් කඳු පන්තිය" }, image: "https://i.pinimg.com/1200x/59/90/2a/59902a787d6a8c484b8d014234ef36d4.jpg" },

      { id: "sigiriya", name: { EN: "Sigiriya", SI: "සීගිරිය" }, image: "https://i.pinimg.com/1200x/3a/e7/48/3ae7487f4e95b92ce2d3c10c5b1038e0.jpg" }
    ]
  },

  // --- WATERFALLS (10) ---
  { id: "diyaluma", name: { EN: "Diyaluma", SI: "දියලුම" }, category: "waterfalls", image: "https://i.pinimg.com/736x/2c/6a/50/2c6a5022d41b3ee3a686ead9141d04f8.jpg", gallery: ["https://i.pinimg.com/736x/2c/6a/50/2c6a5022d41b3ee3a686ead9141d04f8.jpg"], history: { EN: "Diyaluma Falls is 220 m (720 ft) high and the second highest waterfall in Sri Lanka and 361st highest waterfall in the world. It is situated 6 km away from Koslanda in Badulla District on Colombo-Badulla highway. The Falls are formed by Punagala Oya, a tributary of Kuda Oya which in turn, is a tributary of Kirindi Oya.", SI: "ඛේදජනක ප්‍රේම කතාවේ ඇල්ල." }, shortStory: { EN: "Diyaluma Falls - Sri Lanka's second-highest waterfall, famous for its natural pools at the top.", SI: "දියලුම ඇල්ල - ශ්‍රී ලංකාවේ දෙවන උසම දිය ඇල්ල සහ මුදුනේ ඇති ස්වභාවික තටාක සඳහා ප්‍රසිද්ධයි." }, tips: [{ EN: "Walk to the top of the falls.", SI: "මුදුනට ඇවිදින්න." }], hiddenEchoes: { EN: "Natural pools at the top.", SI: "ස්වභාවික තටාක." }, location: "Badulla", coordinates: { x: 66, y: 74 },
    nearbyAttractions: [
      { id: "ella", name: { EN: "Ella", SI: "ඇල්ල" }, image: "https://i.pinimg.com/736x/19/c4/ca/19c4ca9cac03989b7a94bbe48beb166d.jpg" },
      { id: "haputale", name: { EN: "Haputale", SI: "හපුතලේ" }, image: "https://i.pinimg.com/1200x/c3/bc/5e/c3bc5e159f35130bcad02b0ee7b0f91f.jpg" },
      { id: "buduruwagala", name: { EN: "Buduruwagala", SI: "බුදුරුවගල" }, image: "https://i.pinimg.com/1200x/7d/ce/23/7dce235eedb24bdcbd5ece2ef2836fd8.jpg" }
    ]
  },
  { id: "bambarakanda", name: { EN: "Bambarakanda", SI: "බඹරකන්ද" }, category: "waterfalls", image: "https://i.pinimg.com/736x/2c/90/80/2c908064d4b0d03c0051128438b872dd.jpg", gallery: ["https://i.pinimg.com/736x/2c/90/80/2c908064d4b0d03c0051128438b872dd.jpg"], history: { EN: "Bambarakanda Falls is the tallest waterfall in Sri Lanka. With a height of 263 m (863 ft), it ranks as the 299th highest waterfall in the world. Situated in Kalupahana in the Badulla District, this waterfall is directly visible from the A4 Highway. The waterfall was formed by Kuda Oya, which is a branch of the Walawe River. The Bambarakanda Falls can be found in a forest of pine trees.", SI: "ලංකාවේ උසම දිය ඇල්ල." }, shortStory: { EN: "Bambarakanda Falls - The tallest waterfall in Sri Lanka, surrounded by a scenic pine forest.", SI: "බඹරකන්ද ඇල්ල - පයින් වනාන්තරයකින් වට වූ ශ්‍රී ලංකාවේ උසම දිය ඇල්ල." }, tips: [{ EN: "It looks best after it rains.", SI: "වැස්සෙන් පසු අලංකාරයි." }], hiddenEchoes: { EN: "A path through pine trees.", SI: "පයින් වනාන්තර මග." }, location: "Badulla", coordinates: { x: 62, y: 76 },
    nearbyAttractions: [
      { id: "belihuloya", name: { EN: "Belihuloya", SI: "බෙලිහුල්ඔය" }, image: "https://i.pinimg.com/1200x/a3/b4/c5/a3b4c5d6e7f8g9h0i1j2.jpg" },
      { id: "haputale", name: { EN: "Haputale", SI: "හපුතලේ" }, image: "https://i.pinimg.com/1200x/c3/bc/5e/c3bc5e159f35130bcad02b0ee7b0f91f.jpg" },
      { id: "horton", name: { EN: "Horton Plains", SI: "හෝර්ටන් තැන්න" }, image: "https://i.pinimg.com/736x/dc/0f/bb/dc0fbbb8b94e6038509e4b79a53c2f58.jpg" }
    ]
  },
  { id: "ravanafalls", name: { EN: "Ravana Falls", SI: "රාවණා ඇල්ල" }, category: "waterfalls", image: "https://i.pinimg.com/1200x/e5/cf/c0/e5cfc05e4ebb57cf741b8dcf0677a269.jpg", gallery: ["https://i.pinimg.com/1200x/e5/cf/c0/e5cfc05e4ebb57cf741b8dcf0677a269.jpg"], history: { EN: "Ravana Falls is a popular sightseeing attraction in Sri Lanka. It currently ranks as one of the widest falls in the country. This waterfall measures approximately 25 m (82 ft) in high and cascades from an oval-shaped concave rock outcrop. During the local wet season, the waterfall turns into what is said to resemble an areca flower with withering petals. The falls have been named after the legendary king Ravana, which is connected to the famous Indian epic, the Ramayana.", SI: "ගුහා සැඟවුණු තැන." }, shortStory: { EN: "Ravana Falls - A wide and scenic waterfall named after the legendary King Ravana.", SI: "රාවණා ඇල්ල - රාවණා රජුගේ පුරාවෘත්තය හා සම්බන්ධ පුළුල් සහ දර්ශනීය දිය ඇල්ල." }, tips: [{ EN: "Watch out for monkeys.", SI: "වඳුරන්ගෙන් ප්‍රවේශම් වන්න." }], hiddenEchoes: { EN: "A secret tunnel.", SI: "රහස් උමග." }, location: "Badulla", coordinates: { x: 68, y: 70 },
    nearbyAttractions: [
      { id: "ella", name: { EN: "Ella", SI: "ඇල්ල" }, image: "https://i.pinimg.com/736x/19/c4/ca/19c4ca9cac03989b7a94bbe48beb166d.jpg" },
      { id: "diyaluma", name: { EN: "Diyaluma Falls", SI: "දියලුම ඇල්ල" }, image: "https://i.pinimg.com/736x/2c/6a/50/2c6a5022d41b3ee3a686ead9141d04f8.jpg" }
    ]
  },
  { id: "dunhinda", name: { EN: "Dunhinda", SI: "දුන්හිඳ" }, category: "waterfalls", image: "https://i.pinimg.com/736x/91/0e/cf/910ecf8865df3a8d4ced56e2d3856562.jpg", gallery: ["https://i.pinimg.com/736x/91/0e/cf/910ecf8865df3a8d4ced56e2d3856562.jpg"], history: { EN: "Dunhinda Falls is a waterfall located about 5 kilometres (3.1 mi) from Badulla town in Sri Lanka. The waterfall, which is 64 metres (210 ft) high, gets its name from the smoky dew drops spray, (Dun in sinhala means mist or smoke) which surrounds the area at the foot of the waterfall. The waterfall is created by the river called Badulu Oya which goes through the Badulla town.", SI: "දුම් දමන දිය ඇල්ල." }, shortStory: { EN: "Dunhinda Falls - A spectacular waterfall known for its smoky mist and lush surroundings.", SI: "දුන්හිඳ ඇල්ල - මීදුමෙන් වැසුණු දර්ශනීය දිය ඇල්ල." }, tips: [{ EN: "The path can be very slippery.", SI: "මග ලිස්සන සුළුයි." }], hiddenEchoes: { EN: "A smaller waterfall nearby.", SI: "කුඩා දුන්හිඳ." }, location: "Badulla", coordinates: { x: 72, y: 64 },
    nearbyAttractions: [
      { id: "ella", name: { EN: "Ella", SI: "ඇල්ල" }, image: "https://i.pinimg.com/736x/19/c4/ca/19c4ca9cac03989b7a94bbe48beb166d.jpg" },
      { id: "pasikudah", name: { EN: "Pasikudah Beach", SI: "පාසිකුඩා වෙරළ" }, image: "https://i.pinimg.com/1200x/02/4f/c9/024fc9b932d7565de43b861d11a58ef9.jpg" }
    ]
  },
  { id: "baker'sfalls", name: { EN: "Baker's Falls", SI: "බේකර්ස් ඇල්ල" }, category: "waterfalls", image: "https://i.pinimg.com/1200x/dd/42/d0/dd42d0c6e1682f11c854f199aaeaeb9b.jpg", gallery: ["https://i.pinimg.com/1200x/dd/42/d0/dd42d0c6e1682f11c854f199aaeaeb9b.jpg"], history: { EN: "Baker's Falls is a famous waterfall in Sri Lanka. It is located in the Horton Plains National Park, on a tributary of the Belihul Oya. The height of the Baker's waterfalls is 20 metres (66 ft). The waterfall was named after Sir Samuel Baker, who was a famous explorer. The waterfall is known for its beautiful surroundings and the cool climate.", SI: "හෝර්ටන් තැන්නේ මැණික." }, shortStory: { EN: "Baker's Falls - A beautiful waterfall located within the Horton Plains National Park.", SI: "බේකර්ස් ඇල්ල - හෝර්ටන් තැන්න ජාතික වනෝද්‍යානය තුළ පිහිටි සුන්දර දිය ඇල්ල." }, tips: [{ EN: "It is very cold in the morning.", SI: "උදෑසනට අධික සීතලයි." }], hiddenEchoes: { EN: "An area with many ferns.", SI: "මීවන ශාක කලාපය." }, location: "Central Highlands", coordinates: { x: 63, y: 73 },
    nearbyAttractions: [
      { id: "horton", name: { EN: "Horton Plains", SI: "හෝර්ටන් තැන්න" }, image: "https://i.pinimg.com/736x/dc/0f/bb/dc0fbbb8b94e6038509e4b79a53c2f58.jpg" },
      { id: "ella", name: { EN: "Ella", SI: "ඇල්ල" }, image: "https://i.pinimg.com/736x/19/c4/ca/19c4ca9cac03989b7a94bbe48beb166d.jpg" }
    ]
  },
  { id: "stclair's", name: { EN: "St. Clair's", SI: "සෙන්ට් ක්ලෙයාර්" }, category: "waterfalls", image: "https://i.pinimg.com/1200x/74/c2/32/74c2320adae0d8151df278cc62d5b5be.jpg", gallery: ["https://i.pinimg.com/1200x/74/c2/32/74c2320adae0d8151df278cc62d5b5be.jpg"], history: { EN: "St. Clair's Falls is one of the widest waterfalls in Sri Lanka and is commonly known as the 'Little Niagara of Sri Lanka'. It is one of six waterfalls formed by the Kotmale Oya, a tributary of the Mahaweli River. The falls are located 3 km (1.9 mi) west of the town of Talawakele on the Hatton-Talawakele Highway in the Central Highlands.", SI: "ලංකාවේ නයගරා." }, shortStory: { EN: "St. Clair's Falls - Known as the 'Little Niagara of Sri Lanka', one of the widest waterfalls.", SI: "සෙන්ට් ක්ලෙයාර් ඇල්ල - 'ලංකාවේ කුඩා නයගරා' ලෙස හැඳින්වෙන පුළුල්ම දිය ඇල්ල." }, tips: [{ EN: "You can see it from the train.", SI: "දුම්රියෙන් නැරඹිය හැකිය." }], hiddenEchoes: { EN: "Old tea farms.", SI: "පැරණි තේ වතු." }, location: "Central Highlands", coordinates: { x: 52, y: 64 },
    nearbyAttractions: [
      { id: "devonfalls", name: { EN: "Devon Falls", SI: "ඩෙවෝන් ඇල්ල" }, image: "https://i.pinimg.com/736x/dd/09/05/dd0905293bbaf9e3d7d3075fbc87a1a0.jpg" }
    ]
  },
  { id: "devonfalls", name: { EN: "Devon Falls", SI: "ඩෙවෝන් ඇල්ල" }, category: "waterfalls", image: "https://i.pinimg.com/736x/dd/09/05/dd0905293bbaf9e3d7d3075fbc87a1a0.jpg", gallery: ["https://i.pinimg.com/736x/dd/09/05/dd0905293bbaf9e3d7d3075fbc87a1a0.jpg"], history: { EN: "Devon Falls is a waterfall in Sri Lanka, situated 6 km west of Talawakele, Central Highlands on the A7 highway. The falls is named after a pioneer English coffee planter called Devon, whose plantation was situated nearby the falls. The waterfall is 97 metres (318 ft) high and is the 19th highest in the country. The falls are formed by a tributary of Kothmale Oya, which is a tributary of Mahaweli River.", SI: "වැවිලිකරුවෙකුගේ නම." }, shortStory: { EN: "Devon Falls - A stunning 97-metre high waterfall named after a pioneer tea planter.", SI: "ඩෙවෝන් ඇල්ල - මීටර් 97ක් උස දර්ශනීය දිය ඇල්ල." }, tips: [{ EN: "Drink tea at the castle nearby.", SI: "තේ කෝප්පයක් රස බලන්න." }], hiddenEchoes: { EN: "A view of the deep valley.", SI: "නිම්නයේ දර්ශනය." }, location: "Central Highlands", coordinates: { x: 50, y: 64 },
    nearbyAttractions: [
      { id: "stclair's", name: { EN: "St. Clair's Falls", SI: "සෙන්ට් ක්ලෙයාර් ඇල්ල" }, image: "https://i.pinimg.com/1200x/74/c2/32/74c2320adae0d8151df278cc62d5b5be.jpg" }
    ]
  },
  { id: "bopathella", name: { EN: "Bopath Ella", SI: "බෝපත් ඇල්ල" }, category: "waterfalls", image: "https://i.pinimg.com/736x/bd/ba/05/bdba05c1bd88ef141866a2b37f2d2ebf.jpg", gallery: ["https://i.pinimg.com/736x/bd/ba/05/bdba05c1bd88ef141866a2b37f2d2ebf.jpg"], history: { EN: "Bopath Ella is a waterfall situated in the Ratnapura District of Sri Lanka. It has a shape very similar to the leaf of the Sacred Fig or 'Bo' tree, which has earned it this name. The waterfall is a major tourist attraction in the country. The falls are formed by the Kuru Ganga, which is a tributary of the Kalu Ganga.", SI: "බෝ පතක හැඩය." }, shortStory: { EN: "Bopath Ella - A unique waterfall shaped like a Bo leaf, a major tourist attraction.", SI: "බෝපත් ඇල්ල - බෝ පතක හැඩය ගත් ප්‍රධාන සංචාරක ආකර්ෂණයක් වන දිය ඇල්ල." }, tips: [{ EN: "Good for a family trip.", SI: "විනෝද චාරිකා සඳහා සුදුසුයි." }], hiddenEchoes: { EN: "Old stories and myths.", SI: "පැරණි ජනප්‍රවාද." }, location: "Ratnapura", coordinates: { x: 42, y: 76 },
    nearbyAttractions: [
      { id: "sinharaja", name: { EN: "Sinharaja Rainforest", SI: "සිංහරාජ වැසි වනාන්තරය" }, image: "https://i.pinimg.com/1200x/85/a0/62/85a06272c31ffa951d64c4fa7437ee63.jpg" },
      { id: "udawalawe", name: { EN: "Udawalawe National Park", SI: "උඩවලව ජාතික වනෝද්‍යානය" }, image: "https://i.pinimg.com/1200x/28/95/94/28959415856159f64b3a6f98073698b8.jpg" },
      { id: "adam'speak", name: { EN: "Adam's Peak", SI: "ශ්‍රී පාදය" }, image: "https://i.pinimg.com/736x/4f/ca/f7/4fcaf7f3fa7753f8d381557712fe023c.jpg" }
    ]
  },
  { id: "laxapana", name: { EN: "Laxapana", SI: "ලක්ෂපාන" }, category: "waterfalls", image: "https://i.pinimg.com/736x/39/fa/e5/39fae53bd62e11db5fd2ef09d1eb819b.jpg", gallery: ["https://i.pinimg.com/736x/39/fa/e5/39fae53bd62e11db5fd2ef09d1eb819b.jpg"], history: { EN: "Laxapana Falls is 126 m (413 ft) high and the 8th highest waterfall in Sri Lanka and 625th highest waterfall in the world. It is situated in Maskeliya area in the Central Highlands, about 16 km from Maskeliya town on Maskeliya-Norton Bridge road, in a village called Kiriwan Eliya. It is formed by Maskeliya Oya near the confluence of Kehelgamu Oya and Maskeliya Oya which forms Kelani River.", SI: "විදුලි බල උල්පත." }, shortStory: { EN: "Laxapana Falls - A powerful 126-metre high waterfall in the Central Highlands.", SI: "ලක්ෂපාන ඇල්ල - මධ්‍යම කඳුකරයේ පිහිටි මීටර් 126ක් උස දර්ශනීය දිය ඇල්ල." }, tips: [{ EN: "See the bridge nearby.", SI: "පාලම නරඹන්න." }], hiddenEchoes: { EN: "Tunnels under the ground.", SI: "භූගත උමං." }, location: "Central Highlands", coordinates: { x: 48, y: 70 },
    nearbyAttractions: [
      { id: "aberdeen", name: { EN: "Aberdeen Falls", SI: "ඇබර්ඩීන් ඇල්ල" }, image: "https://i.pinimg.com/736x/fd/6b/36/fd6b3609c401c2f7e13de0b5b03b94fa.jpg" },
      { id: "adam'speak", name: { EN: "Adam's Peak", SI: "ශ්‍රී පාදය" }, image: "https://i.pinimg.com/736x/4f/ca/f7/4fcaf7f3fa7753f8d381557712fe023c.jpg" }
    ]
  },
  { id: "aberdeen", name: { EN: "Aberdeen", SI: "ඇබර්ඩීන් ඇල්ල" }, category: "waterfalls", image: "https://i.pinimg.com/736x/fd/6b/36/fd6b3609c401c2f7e13de0b5b03b94fa.jpg", gallery: ["https://i.pinimg.com/736x/fd/6b/36/fd6b3609c401c2f7e13de0b5b03b94fa.jpg"], history: { EN: "Aberdeen Falls is a 98 m (322 ft) high waterfall on the Kehelgamu Oya near Ginigathena, in the Central Highlands of Sri Lanka. Aberdeen is named after Aberdeen, the third largest city in Scotland and the capital of Aberdeenshire. The waterfall is ranked as the 18th highest in the Island.", SI: "ස්කොට්ලන්ත නම." }, shortStory: { EN: "Aberdeen Falls - A 98-metre high waterfall named after the Scottish city of Aberdeen.", SI: "ඇබර්ඩීන් ඇල්ල - මීටර් 98ක් උස දර්ශනීය දිය ඇල්ල." }, tips: [{ EN: "The walk is a bit hard.", SI: "ගමන මදක් දුෂ්කරයි." }], hiddenEchoes: { EN: "A deep pool at the bottom.", SI: "ගැඹුරු විල." }, location: "Central Highlands", coordinates: { x: 46, y: 72 },
    nearbyAttractions: [
      { id: "laxapana", name: { EN: "Laxapana Falls", SI: "ලක්ෂපාන ඇල්ල" }, image: "https://i.pinimg.com/736x/39/fa/e5/39fae53bd62e11db5fd2ef09d1eb819b.jpg" },
      { id: "kitulgala", name: { EN: "Kitulgala", SI: "කිතුල්ගල" }, image: "https://i.pinimg.com/1200x/4e/29/29/4e2929ee8842aac82e8cbb66db6dc9b9.jpg" }
    ]
  },

  // --- CAMPING (10) ---
];

export const DESTINATIONS_DATA: Destination[] = BASE_DESTINATIONS.map(dest => ({
  ...dest,
  detailedAbout: dest.detailedAbout || ABOUT_DATA[dest.id] || { EN: "Deep archival narrative pending for this node.", SI: "මෙම ස්ථානය පිළිබඳ විස්තරය සකසමින් පවතී." },
  logistics: dest.logistics || LOGISTICS_DATA[dest.id] || { EN: "Logistics data syncing...", SI: "ප්‍රවාහන දත්ත යාවත්කාලීන වෙමින් පවතී..." }
}));
