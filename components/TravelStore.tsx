import React, { useState, useMemo } from 'react';
import { Language } from '../types';
import { 
  ShieldCheck, 
  Sparkles, 
  Zap, 
  Gift, 
  ShoppingBag,
  Lock,
  ArrowLeft,
  Search,
  Plus,
  Minus,
  Trash2,
  Package,
  Weight,
  CreditCard,
  MapPin,
  Check,
  FileText,
  Truck,
  Eye,
  Info,
  Sliders,
  AlertTriangle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import StripePaymentModal from './StripePaymentModal';

interface HubProduct {
  id: string;
  name: { EN: string; SI: string };
  price: number;
  weightGrams: number;
  category: 'backpacks' | 'equipment' | 'essentials';
  image: string;
  desc: { EN: string; SI: string };
  origin: { EN: string; SI: string };
  specs: { EN: string[]; SI: string[] };
  recommendation: { EN: string; SI: string };
  specsAttributes: { [key: string]: string };
}

const HUB_PRODUCTS: HubProduct[] = [
  {
    id: 'p_heavy_backpack',
    name: { EN: 'Adams Peak 65L Expedition Rucksack 🎒', SI: 'ශ්‍රී පාද 65L ප්‍රමුඛ ගවේෂණ සංචාරක බෑගය' },
    price: 125,
    weightGrams: 1450,
    category: 'backpacks',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80',
    desc: { 
      EN: 'Pro-grade high-capacity alpine trekking rucksack. Features a heavy-duty frame support system, water-tight DWR coated ripstop fabric, multi-access chambers, and an ergonomic padded bio-form hip belt with dynamic weight distribution.', 
      SI: 'දැඩි කඳු නැගීම් සහ වනගත කඳවුරු සඳහා උරහිස්වලට බර නොදැනෙන පරිදි සැකසූ ශක්තිමත්, විශාල 65L වෘත්තීය මට්ටමේ බෑගයකි. ජලයට නිරාවරණය නොවන විශේෂ ආවරණයක් සහිතයි.' 
    },
    origin: { EN: 'Highland Alpine Co. ⛰️', SI: 'උඩරට ඇල්පයින් නිෂ්පාදන' },
    specs: { 
      EN: ['Triple-Weave Ripstop Nylon', 'Internal Aluminum Contour Rods', 'Integrated Fluorescent Rain Protection'], 
      SI: ['ත්‍රිත්ව වියුම් ශක්තිමත් නයිලෝන්', 'ඇලුමිනියම් ආධාරක සැකිලි රාමුව', 'කම්පන සහ වැහි ආවරණ ඇතුළත්'] 
    },
    recommendation: { EN: 'Ideal for multi-day treks in Knuckles, Sri Pada, or Sinharaja camps.', SI: 'නකල්ස්, ශ්‍රී පාද, හෝ සිංහරාජ වනගත සංචාරයන් සදහා ඉතා කදිමයි.' },
    specsAttributes: { Capacity: '65 Liters', Material: 'Nylon 1000D', Frame: 'Internal' }
  },
  {
    id: 'p_day_pack',
    name: { EN: 'Ella Wilderness 24L Tech-Daypack 💼', SI: 'ඇල්ල වනගත 24L සැහැල්ලු දෛනික සංචාරක මල්ල' },
    price: 49,
    weightGrams: 680,
    category: 'backpacks',
    image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=600&q=80',
    desc: { 
      EN: 'Sleek, featherlight, and incredibly robust. Specially optimized for short day-hikes, waterfall excursions, and train journeys. Includes dual high-elastic side water-bottle pockets and an integrated media cable organizer.', 
      SI: 'ඇල්ල ආශ්‍රිත කෙටි සංචාර, දියඇලි නැරඹීම් සහ දුම්රිය ගමන් සඳහා අතිශය සැහැල්ලු මෙන්ම ශක්තිමත් 24L මල්ලකි. මෙහි ජල බෝතල් රැගෙන යාමේ පහසුව සහ කේබල් තබා ගැනීමේ වෙනම සාක්කු ඇත.' 
    },
    origin: { EN: 'Southern Coast Craft Guild 🌊', SI: 'දකුණු වෙරළබඩ නිර්මාණ එකතුව' },
    specs: { 
      EN: ['Durable Ripstop Canvas Mesh', 'Breathable Air-Vent Sweat Guard Panel', 'Reflective Safety Stripping'], 
      SI: ['දහඩිය නොරඳන වාතාශ්‍රය සපිරි පිටුපස නිමාව', 'පහසුවෙන් පිළිගත හැකි රෙදි නිමාව', 'රාත්‍රී ගමන් සඳහා දිලිසෙන තීරු'] 
    },
    recommendation: { EN: 'Perfect for climbing Ella Rock, Pidurangala, or traveling by Ceylon Blue Train.', SI: 'ඇල්ල රොක්, පිදුරංගල කඳු නැගීම හෝ සුප්‍රසිද්ධ නිල් දුම්රිය සංචාර සඳහා සුදුසුය.' },
    specsAttributes: { Capacity: '24 Liters', Weight: '680 Grams', Pockets: '8 Sections' }
  },
  {
    id: 'p_dry_bag',
    name: { EN: 'Kitulgala Torrent 15L Extreme Dry Bag 🌊', SI: 'කිතුල්ගල දියඇලුම් 15L පාවෙන ජල වාරක මල්ල' },
    price: 24,
    weightGrams: 310,
    category: 'backpacks',
    image: 'https://images.unsplash.com/photo-1517404281873-c76537b31129?auto=format&fit=crop&w=600&q=80',
    desc: { 
      EN: '100% waterproof military-grade welded seam PVC dry bag. Utilizes a secure roll-top lock to encapsulate electronics, clothing, and cameras. It naturally traps air and floats on water to prevent gear loss during rapids.', 
      SI: 'කිතුල්ගල ඔරු පැදීම්, දියඇලි නෑම හෝ හදිසි මෝසම් වැසි වලදී කැමරා, දුරකථන සහ ඇඳුම් තෙතමනයෙන් 100% ක්ම ආරක්ෂා කරන, ජලය මත පා කළ හැකි ප්‍රමුඛ පෙළේ ජලරහිත බෑගයකි.' 
    },
    origin: { EN: 'Kitulgala Rafting Depot 🛶', SI: 'කිතුල්ගල ක්‍රියාශීලී ගවේෂණ කණ්ඩායම' },
    specs: { 
      EN: ['Heavy-Duty Reinforced Tarpaulin', 'D-Ring Multi-Point Strap Anchors', 'Completely Floatable on Open Water'], 
      SI: ['ඝනකම වැඩි ශක්තිමත් තාරපතින් ලෝහ', 'එල්ලීමට පහසු ඩී-වලලු පද්ධතිය', 'දිය මත ආරක්ෂිතව පාවීමේ හැකියාව'] 
    },
    recommendation: { EN: 'Mandatory gear for white-water rafting, waterfalls, or monsoon adventures.', SI: 'දියඇලි නෑම, ගංගා තරණය සහ මෝසම් කාලසීමාවේ සංචාර සඳහා අත්‍යවශ්‍ය වේ.' },
    specsAttributes: { Rating: 'IPX8 Waterproof', Material: 'Welded PVC', Volume: '15 Liters' }
  },
  {
    id: 'p_hydration_vest',
    name: { EN: 'Horton Range 2L Active Hydration Vest 🏃', SI: 'හෝර්ටන් තැන්න 2L ජලය පිරි සක්‍රීය ධාවන කබාය' },
    price: 39,
    weightGrams: 280,
    category: 'backpacks',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80',
    desc: { 
      EN: 'Low-profile hyper-breathable vest styled for long-distance trail running and speed-hiking. Features dual quick-pull front pockets for soft water flasks, zippered energy gel sleeves, and a sleek rear insulated 2-Liter reservoir hydration bladder slot.', 
      SI: 'දිගු දුර කඳු නැගීම් සහ ධාවනයේ යෙදෙන සංචාරකයන් සඳහාම නිපදවන ලද සැහැල්ලු ඇඟලුම් කබායකි. මෙහි පහසුවෙන්ම ජලය පානය කිරීමේ බෝතල් සහ නළ පද්ධතියක් ඇත.' 
    },
    origin: { EN: 'Horton Athletics Supply 🏃', SI: 'හෝර්ටන් ක්‍රීඩා හා ගවේෂණ ඇඟලුම්' },
    specs: { 
      EN: ['Hexagonal Poly-Mesh Construction', 'Fully Adjustable Sternum Cables', 'Zero-Bounce Body Mapping fit'], 
      SI: ['වාතය ගමන් කරන ඝන දැල් රෙදි පැනල', 'උස සකස් කළ හැකි පපුව පටි', 'ගැස්සීමකින් තොර ශරීරයට ඇලෙන හැඩය'] 
    },
    recommendation: { EN: 'Superb for high-altitude running or trekking across Horton Plains.', SI: 'හෝර්ටන් තැන්න සහ උඩරට තේ වතු ආශ්‍රිත දැඩි ධාවන කටයුතු වලට කදිමයි.' },
    specsAttributes: { Reservoir: '2.0 Liters', Fit: 'Active Fit', Mesh: 'Hexa-Cool' }
  },
  {
    id: 'p_trek_poles',
    name: { EN: 'Adams Peak Carbon-X Trekking Poles 🧗', SI: 'ශ්‍රී පාද කාබන් කඳු නැගීමේ කිණිසි යුගල' },
    price: 45,
    weightGrams: 420,
    category: 'equipment',
    image: 'https://images.unsplash.com/photo-1519817914152-22d216bb9170?auto=format&fit=crop&w=600&q=80',
    desc: { 
      EN: 'Ultra-light carbon fiber composite telescopic hiking poles designed to reduce joint and knee impact by up to 35%. Features sweat-wicking slip-free natural Portuguese cork grips, secure flick-lock height adjustments, and terrain carbide tips.', 
      SI: 'ශ්‍රී පාද වන්දනාවේදී සහ කඳු නැගීමේදී දණහිස් සහ කොන්දේ අමාරුව උපරිම ලෙස අඩු කරන සැහැල්ලුම කාබන් කෙඳිවලින් නිමවූ කිණිසි යුගලයකි. මෙහි උස ඔබගේ අවශ්‍යතාව පරිදි වෙනස් කළ හැකිය.' 
    },
    origin: { EN: 'Adam\'s Peak Expedition Craft ✨', SI: 'ශ්‍රී පාද ගවේෂණ ශිල්පීන්' },
    specs: { 
      EN: ['High-Modulus Core Carbon Fiber', 'Natural Anti-Sweat Pure Cork Knobs', 'Interchangeable Snow & Mud Baskets included'], 
      SI: ['ශක්තිමත් ඉහළ ඝනත්ව ඇති කාබන්', 'දහඩිය නොරඳන ස්වභාවික පොතු මිටවල්', 'ලිස්සීම් වළක්වන කාබයිඩ් තුඩු'] 
    },
    recommendation: { EN: 'Highly recommended for climbing Adams Peak\'s 5,500 steep concrete stairs.', SI: 'ශ්‍රී පාදයේ පඩිපෙල් 5,500ක් නැගීමේදී සහ බැසීමේදී දණහිස් ආරක්ෂාවට අතිශය සුදුසුය.' },
    specsAttributes: { Core: 'Carbon Fiber', ExtendedLength: '135 cm', FoldedLength: '36 cm' }
  },
  {
    id: 'p_headlamp',
    name: { EN: 'Horton Plains Dark-Orbit Pro Headlamp 🔦', SI: 'හෝර්ටන් තැන්න රාත්‍රී ගවේෂණ හෙඩ්ලෑම්ප් එක' },
    price: 35,
    weightGrams: 140,
    category: 'equipment',
    image: 'https://images.unsplash.com/photo-1510519138101-570d1dca3d66?auto=format&fit=crop&w=600&q=80',
    desc: { 
      EN: 'Extreme output 1200 Lumens rechargeable multi-beam headlamp. Features dual-switch interfaces, responsive hand-free gesture activation, and specialized fog-cutting red/amber floodlight modes to pierce heavy mountain morning mist.', 
      SI: 'මීටර් 150ක දුරක් විහිදෙන තද ආලෝක ධාරාවක් සහිත, නැවත ආරෝපණය කළ හැකි වෘත්තීය හෙඩ්ලෑම්ප් එකකි. මීදුම මැද්දේ පෙනීම වර්ධනය කරන කහ සහ රතු ආලෝක පහසුකම් පවතී.' 
    },
    origin: { EN: 'Knuckles Adventure Depot 🏕️', SI: 'නකල්ස් ගවේෂණ කඳවුර' },
    specs: { 
      EN: ['1200 Max Lumens Cree LED Element', 'Rapid USB-C Rechargeable Core', 'Dust-Tight & IPX6 Dynamic Weatherproofing'], 
      SI: ['ලූමන් 1200ක දැවැන්ත Cree LED එළිය', 'වේගවත් USB-C ආරෝපණ පද්ධතිය', 'මීදුම සහ වැස්සට නොතෙමෙන නිමාව'] 
    },
    recommendation: { EN: 'Indispensable for early 3 AM summit hikes at Adam\'s Peak or Knuckles camping.', SI: 'පාන්දර කඳු නැගීම්, ගුහා ගවේෂණ සහ රාත්‍රී කඳවුරු බැඳීම් වලදී අනිවාර්යයෙන්ම තිබිය යුතුය.' },
    specsAttributes: { Brightness: '1200 Lumens', Battery: 'USB-C Li-ion', Range: '150 Meters' }
  },
  {
    id: 'p_stream_filter',
    name: { EN: 'Sinharaja Pure-Sip Micro Water Filter 🧪', SI: 'සිංහරාජ වනගත පිරිසිදු පානීය ජල ක්ෂුද්‍ර පෙරහන' },
    price: 28,
    weightGrams: 95,
    category: 'equipment',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80',
    desc: { 
      EN: 'Ultralight hollow-fiber membrane filter. Removes 99.999% of raw aquatic bacteria, microplastics, and protozoan parasites from remote forest waterfalls or streams. Fits standard wide-mouth camping bottles or directly to water bags.', 
      SI: 'වනාන්තරයේ ඇති ඕනෑම දිය පහරකින් ලැබෙන ජලය, ක්ෂුද්‍ර ප්ලාස්ටික් සහ සියලුම බැක්ටීරියා වර්ග 99.999%ක් ඉවත් කර ක්ෂණිකව පානය කිරීම සුදුසු කරන අතේ ගෙන යා හැකි නළ පෙරහනකි.' 
    },
    origin: { EN: 'Sinharaja Forester Guild 🌲', SI: 'සිංහරාජ පාරම්පරික වනාන්තර සංගමය' },
    specs: { 
      EN: ['0.1-Micron Hollow Membrane Core', 'Purifies up to 2,000 Liters easily', 'Extremely lightweight pocket size'], 
      SI: ['මයික්‍රෝන 0.1 ක සිදුරු සහිත පෙරහන', 'ලීටර් 2000ක් දක්වා ජලය පිරිසිදු කරයි', 'සාමාන්‍ය සාක්කුවක දැමිය හැකි කුඩා බව'] 
    },
    recommendation: { EN: 'Saves weight on remote multi-day wild jungle camps by using natural sources.', SI: 'වනගත ගමන්වලදී විශාල ජල බෝතල් රැගෙන යාමට වෙනුවට ස්වභාවික ජල උල්පත් භාවිත කිරීමට ඉඩ සලසයි.' },
    specsAttributes: { MicronSize: '0.1 Micron', Lifespan: '2,000 Liters', Certification: 'EPA Compliant' }
  },
  {
    id: 'p_trauma_kit',
    name: { EN: 'Knuckles Camp Pro-X Expedition Trauma Kit 🩹', SI: 'නකල්ස් කඳුකර ප්‍රථමාධාර හා අනතුරු හදිසි කට්ටලය' },
    price: 29,
    weightGrams: 410,
    category: 'equipment',
    image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=600&q=80',
    desc: { 
      EN: 'Military-grade tear-resistant ripstop EVA hard-shell case safely stocking crucial medicine, split blankets, emergency chemical ice, sterile gauze, saline wash, blister patches, and heavy tweezers. Specially compiled for dense forest trail hazards.', 
      SI: 'වනාන්තර මැද සිදුවිය හැකි තුවාල, සීරීම් හෝ කූඩැල්ලන්ගෙන් සිදුවන ලේ ගැලීම් ආදියට කඩිනමින් ප්‍රතිකාර කිරීම සඳහා සකස් කරන ලද ජලයට ඔරොත්තු දෙන ශක්තිමත් ප්‍රථමාධාර පෙට්ටියකි.' 
    },
    origin: { EN: 'Colombo Trauma Responders 🩺', SI: 'කොළඹ ප්‍රථමාධාර වෛද්‍ය විශේෂඥයෝ' },
    specs: { 
      EN: ['Crushproof Semi-Rigid Shell casing', 'Blister treatments & Leech sting extract tools', 'Tightly packed organized partitions'], 
      SI: ['නොබිඳෙන කල්පවත්නා ආරක්ෂිත කොපුව', 'කූඩැලි තුවාල සහ සීරීම් සත්කාරක', 'වෙන වෙනම වර්ග කරන ලද කුටි සැකැස්ම'] 
    },
    recommendation: { EN: 'Vital safety backup for remote hikes through knuckles mountains and thick rainforests.', SI: 'නකල්ස් සහ සිංහරාජය වැනි ජනාවාසවලින් තොර ප්‍රදේශවල ගමන් කිරීමේදී අත්‍යවශ්‍ය ආරක්ෂක කට්ටලයක්.' },
    specsAttributes: { ItemsInPack: '48 Sterile Elements', Case: 'Semi-Rigid Waterproof', Dimension: '18x12 cm' }
  },
  {
    id: 'p_solar_bank',
    name: { EN: 'Sol-Cascade 24W Rugged Solar Power Bank 🔋', SI: 'සූර්ය බල ශක්තිමත් ජලරහිත පවර් බෑන්ක් එක' },
    price: 54,
    weightGrams: 390,
    category: 'essentials',
    image: 'https://images.unsplash.com/photo-1609592424081-373f72df9b77?auto=format&fit=crop&w=600&q=80',
    desc: { 
      EN: 'Rugged IP67 shock/waterproof chassis power bank with high-efficiency nested solar panels. Equips dual 22W fast charging outputs to keep GPS, dynamic offline maps, and translation apps completely online under zero grid zones.', 
      SI: 'වන මැද සංචාරයේදී ඔබගේ ජීපීඑස් සිතියම් සහ දුරකථන සැමවිටම සක්‍රීයව තැබීමට හැකි, සූර්ය බලයෙන් ආරෝපණය වන 20,000mAh ජල සහ කම්පන රහිත ශක්තිමත් පවර් බෑන්ක් එකකි.' 
    },
    origin: { EN: 'Sinharaja Eco-Energy Lab 🔋', SI: 'සිංහරාජ පරිසර බලශක්ති විද්‍යාගාරය' },
    specs: { 
      EN: ['Massive 20,000mAh Storage Core', 'High efficiency Monocrystalline Solar Cell Integration', 'Heavy emergency SOS strobe light array'], 
      SI: ['දැවැන්ත 20,000mAh ගබඩා ධාරිතාව', 'පීඩනයට සහ ජලයට ඔරොත්තු දෙන IP67 ආරක්ෂාව', 'බලවත් හදිසි සංඥා ලයිට් පහසුකම'] 
    },
    recommendation: { EN: 'Survival gear during extended off-grid multi-day jungle expeditions.', SI: 'දුරකථන සංඥා සහ විදුලිය නොමැති වනගත සංචාරයන්හි දිවි බේරාගැනීමේ අත්‍යවශ්‍ය උපාංගයකි.' },
    specsAttributes: { Capacity: '20,000 mAh', Output: 'Dual USB QuickCharge', Shield: 'IP67 Waterproof' }
  },
  {
    id: 'p_travel_adapter',
    name: { EN: 'Universal Smart Ground D/G Power Hub 🔌', SI: 'විශ්ව සංචාරක පේනු ඇඩැප්ටරය (ලංකාවටම ගැලපෙන)' },
    price: 18,
    weightGrams: 110,
    category: 'essentials',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=600&q=80',
    desc: { 
      EN: 'Sri Lankan native wall systems use the round Type D or thick square Type G sockets. This smart unit seamlessly adapts any US, EU, and UK charger plug instantly, coupled with dual, high-output 18W USB-C charge sockets.', 
      SI: 'ශ්‍රී ලංකාවේ බහුලව භාවිත වන රවුම් සහ හතරැස් පේනු සඳහා විදේශීය චාජර් සම්බන්ධ කිරීමට උචිත, ඕනෑම රටක පේනුවක් සම්බන්ධ කළ හැකි උසස් USB ඇඩැප්ටරයකි.' 
    },
    origin: { EN: 'Colombo Port Tech Supply 🔌', SI: 'කොළඹ ඇඩැප්ටර තාක්ෂණික එකතුව' },
    specs: { 
      EN: ['Type D and G Native Compliant layout', 'Embedded overload fuse power surge shielding', 'Twin USB-A + Twin high-capacity USB-C slots'], 
      SI: ['ලංකාවේ වන ප්‍රධාන පේනු වර්ග දෙකටම ගැලපේ', 'විදුලි සැර වැඩිවීම් වලින් දුරකථන ආරක්ෂා කරයි', 'පෝට් සතරක් සහිතයි (USB + USB-C)'] 
    },
    recommendation: { EN: 'Essential for foreign travelers charging state-of-the-art camera batteries and phones.', SI: 'විදේශීය කැමරා, ලැප්ටොප් සහ දුරකථන හෝටල් කාමර වලදී ආරෝපණය කරගැනීමට අත්‍යවශ්‍ය වේ.' },
    specsAttributes: { Outlets: '4 ports', Compliance: 'Type D/G Grounded', FuseProtection: '10A Auto Reset' }
  },
  {
    id: 'p_rain_poncho',
    name: { EN: 'Monsoon Shield Breathable Heavy-Duty Poncho 🌧️', SI: 'මෝසම් මේඝ මඟහරින සැහැල්ලු වැහි කබාය' },
    price: 16,
    weightGrams: 170,
    category: 'essentials',
    image: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=600&q=80',
    desc: { 
      EN: 'Lightweight, ultra-airy, and non-sticky rain poncho engineered with premium environment-friendly EVA material. Styled with extensive hood toggles and a back expander space to fit over bulky hiking backpacks.', 
      SI: 'තෙත් කලාපීය දේශගුණය උදෙසා නිපදවන ලද, ඇඟට නොඇලෙන සහ ඉක්මනින් වියළෙන සැහැල්ලු වැහි කබායකි. කඳු නැගීමේ බෑගය පිටෙහි තිබියදීම මෙය පැළඳිය හැකිය.' 
    },
    origin: { EN: 'Wetzone Outdoor Tailors 🧵', SI: 'තෙත් කලාපීය එළිමහන් මැහුම්කරුවෝ' },
    specs: { 
      EN: ['Biodegradable Odor-free EVA', 'Extended Backpack Guard Expansion panel', 'Neon visibility color options'], 
      SI: ['ස්වභාවික දිරායන සෞඛ්‍යාරක්ෂිත EVA ද්‍රව්‍ය', 'පිටුපස බෑගයද ආවරණය වන විශේෂ හැඩය', 'මීදුම මැද පවා පෙනෙන දීප්තිමත් වර්ණ'] 
    },
    recommendation: { EN: 'Saves your main rucksack from sudden tropical monsoons while hiking in rainforests.', SI: 'හදිසියේ ඇද හැලෙන තද වැසි වලදී මුළු ශරීරයම සහ බෑගය තෙමීමෙන් බේරා ගනී.' },
    specsAttributes: { Materials: 'Premium EVA', Thickness: '0.15mm', Coverage: 'Full Body' }
  },
  {
    id: 'p_leech_socks',
    name: { EN: 'Sinharaja High-Stretch Antileech Socks 🧦', SI: 'සිංහරාජ වනාන්තර කූඩැල්ලන් මඟහරින මේස් යුගල' },
    price: 12,
    weightGrams: 90,
    category: 'essentials',
    image: 'https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=600&q=80',
    desc: { 
      EN: 'High-density canvas-weave thick cotton socks coated in eucalyptus natural extracts. Blocks aggressive forest leeches and ticks from biting legs. Styled with high elastic-band toggle cuffs for knee-high absolute security.', 
      SI: 'සිංහරාජයේ හෝ කඳුකර වනාන්තරවල සංචාරය කිරීමේදී ලේ උරා බොන කූඩැල්ලන් සහ කුඩිත්තන් සමට ඇතුල් වීම වළක්වන, දණහිස දක්වා ආවරණය වන විශේෂ මේස් යුගලයකි.' 
    },
    origin: { EN: 'Sinharaja Forester Guild 🌲', SI: 'සිංහරාජ පාරම්පරික වනාන්තර සංගමය' },
    specs: { 
      EN: ['Dense anti-puncture weave system', 'Lemongrass oil pre-treated repellent shield', 'Cozy soft material prevents heel chafing'], 
      SI: ['සිදුරු නොකළ හැකි ඉතා ඝන නූල් වියුම', 'ස්වභාවික තෙල් ගල්වන ලද ලෙහෙසි ගඳ සුවඳ', 'ඇවිදීමේදී මිරිස් වීම වළක්වන ලයිනිං සවිබල'] 
    },
    recommendation: { EN: 'Crucial for wet jungle explorations like Sinharaja, Knuckles, or Meemure pools.', SI: 'සිංහරාජය, නකල්ස් හෝ මීමුරේ වැනි තෙත් පරිසර වල ඇවිදීමේදී අනිවාර්යයෙන්ම අවශ්‍ය වේ.' },
    specsAttributes: { Length: 'Knee High Toggle', Treatment: 'Citronella Infused', Material: 'Canvas Cotton' }
  }
];

const BOX_STYLES = [
  {
    id: 'b_comp_pouch',
    name: { EN: 'Dry-Seal Compression Bundle Pouch 🎒', SI: 'ජලරහිත සම්පීඩන සංචාරක මල්ල' },
    price: 8,
    weightGrams: 80,
    image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=400&q=80',
    desc: { EN: 'Saves 50% interior space by using vacuum compression. Keeps clothes bone dry.', SI: 'ඇඳුම් ඉතා කුඩා වන සේ තද කර ඔබගේ ප්‍රධාන බෑගයේ ඉඩ ඉතිරි කරන සුවිශේෂී ජල වාරක කවරයකි.' }
  },
  {
    id: 'b_utility_roll',
    name: { EN: 'Heavy-Canvas Tech & Cord Tool Roll 🧵', SI: 'කැන්වස් ඇදෙනසුළු උපකරණ තන්තු මල්ල' },
    price: 18,
    weightGrams: 200,
    image: 'https://images.unsplash.com/photo-1544921603-91185f0962b1?auto=format&fit=crop&w=400&q=80',
    desc: { EN: 'Tough wax utility wrap keeps lights, knives, flashlights, and cables strapped.', SI: 'චාජර් වයර්, කුඩා හෙඩ්ලෑම්ප් සහ මෙවලම් පිළිවෙළකට ගැටගසා තැබිය හැකි සාක්කු සහිත ශක්තිමත් මල්ලකි.' }
  },
  {
    id: 'b_hard_case',
    name: { EN: 'Military-Grade Hard Shell Explorer Box 📦', SI: 'ශ්‍රී ලංකා ගවේෂණ ආරක්ෂිත පෙට්ටිය' },
    price: 26,
    weightGrams: 450,
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=400&q=80',
    desc: { EN: 'Crushproof, lockable security storage to defend high-end digital SLR cameras and lenses.', SI: 'වටිනා කැමරා, අව්කණ්ණාඩි, මුදල් සහ ලියකියවිලි වැටීම් හෝ වැලි වලින් ආරක්ෂා කරන කල්පවත්නා පෙට්ටියකි.' }
  }
];

interface TravelStoreProps {
  language: Language;
  onBack?: () => void;
}

const TravelStore: React.FC<TravelStoreProps> = ({ language, onBack }) => {
  const [activeTab, setActiveTab] = useState<'store' | 'curator'>('store');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // Custom Box builder state
  const [chosenBoxStyle, setChosenBoxStyle] = useState<string>('b_comp_pouch');
  const [boxItems, setBoxItems] = useState<{ [productId: string]: number }>({});
  const [customMsg, setCustomMsg] = useState('');
  
  // Checkout & Alert flows
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutAmount, setCheckoutAmount] = useState(0);
  const [isOrderSuccess, setIsOrderSuccess] = useState(false);
  const [orderReceipt, setOrderReceipt] = useState<any | null>(null);
  const [warningMessage, setWarningMessage] = useState<string | null>(null);

  // Selected details modal
  const [detailsProduct, setDetailsProduct] = useState<HubProduct | null>(null);

  // A la carte cart
  const [cart, setCart] = useState<{ [id: string]: number }>({});

  const t = {
    back: language === 'EN' ? 'Back' : 'ආපසු',
    title: language === 'EN' ? 'CEYLON OUTDOOR & EXPEDITION GEAR' : 'ලක්දිව ගවේෂණ සහ කඳු නැගීමේ උපකරණ',
    slogan: language === 'EN' ? 'Engineered for tropical rainforests, high-altitude peaks, and country-compliant local power networks.' : 'නිවර්තන වනාන්තර, උස් කඳු වැටි සහ ලංකාවටම ගැලපෙන විදුලි පද්ධති සඳහාම විශේෂිත ක්‍රියාශීලී උපකරණ.',
    searchPlaceholder: language === 'EN' ? 'Search heavy backpacks, adapters, carbon trekking poles... 🧗' : 'බෑග්, හෙඩ්ලෑම්ප්, කාබන් කිණිසි ආදිය සොයන්න... 🧗',
    categories: {
      all: language === 'EN' ? 'All Gear' : 'සියලුම උපකරණ',
      backpacks: language === 'EN' ? 'Backpacks / Bags' : 'සංචාරක බෑග්',
      equipment: language === 'EN' ? 'Trek & Safety' : 'ගවේෂණ සහ ආරක්ෂාව',
      essentials: language === 'EN' ? 'Essentials' : 'අත්‍යවශ්‍ය දේවල්'
    },
    weightGauge: language === 'EN' ? 'Expedition Load Meter' : 'පැකේජයේ දරා ගැනීමේ බර මැනුම',
    curatorTitle: language === 'EN' ? 'Bundle Creator' : 'සංචාරක පැකේජයක් තනන්න',
    addBox: language === 'EN' ? 'Add To Bundle' : 'පැකේජයට එක් කරන්න',
    addCart: language === 'EN' ? 'Add To Cart' : 'කරත්තයට එක් කරන්න',
    boxStyleTitle: language === 'EN' ? '1. Select Premium Storage Container' : '1. ආරක්ෂිත ඇසුරුම් ක්‍රමය තෝරන්න',
    curationTitle: language === 'EN' ? '2. Fill Bundle with Hiking Essentials' : '2. මේස්, හෙඩ්ලෑම්ප් ආදිය මල්ලට පුරවන්න',
    greetingTitle: language === 'EN' ? '3. Custom Instruction Notes / Recipient Name' : '3. සංචාරකයාගේ නම හෝ විශේෂ ලිපිනයක් එක්කරන්න',
    greetingPlaceholder: language === 'EN' ? 'Provide hotel reception address, target trek path, or guide name. (e.g., Deliver to Kandy Town Hotel...)' : 'හෝටල් පිළිගැනීමේ කවුන්ටර ලිපිනය හෝ විශේෂ සටහනක් ලියන්න... (උදා: කන්ඩි ටවුන් හෝටලයට භාර දෙන්න...)',
    ayubowanBtn: language === 'EN' ? 'Insert "Ayubowan!"' : '"ආයුබෝවන්!" එක්කරන්න',
    safeBtn: language === 'EN' ? 'Insert "Subha Gaman!"' : '"සුභ ගමන්!" එක්කරන්න',
    checkoutTitle: language === 'EN' ? 'Curated Bundle Breakdown' : 'සංචාරක පැකේජයේ සාරාංශය',
    cartIconTitle: language === 'EN' ? 'Cart Total Summary' : 'මිලදී ගැනීමේ සාරාංශය',
    specsTab: language === 'EN' ? 'TECHNICAL SPECIFICATIONS' : 'තාක්ෂණික තොරතුරු',
    benefitsTitle: language === 'EN' ? 'TRAIL ADVANTAGES' : 'සංචාරක වාසි'
  };

  const filteredProducts = useMemo(() => {
    return HUB_PRODUCTS.filter(p => {
      const matchSearch = p.name.EN.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          p.name.SI.includes(searchTerm) || 
                          p.desc.EN.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          p.desc.SI.includes(searchTerm) ||
                          p.origin.EN.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.origin.SI.includes(searchTerm);
      const matchCategory = selectedCategory === 'all' || p.category === selectedCategory;
      return matchSearch && matchCategory;
    });
  }, [searchTerm, selectedCategory]);

  const selectedBox = useMemo(() => {
    return BOX_STYLES.find(b => b.id === chosenBoxStyle) || BOX_STYLES[0];
  }, [chosenBoxStyle]);

  // Box Curation totals
  const curationTotals = useMemo(() => {
    let itemsPrice = 0;
    let itemsWeight = 0;
    Object.entries(boxItems).forEach(([pId, count]) => {
      const prod = HUB_PRODUCTS.find(p => p.id === pId);
      if (prod && count > 0) {
        itemsPrice += prod.price * count;
        itemsWeight += prod.weightGrams * count;
      }
    });
    
    const totalPrice = itemsPrice + selectedBox.price;
    const totalWeight = itemsWeight + selectedBox.weightGrams;
    return {
      price: totalPrice,
      weight: totalWeight,
      count: Object.values(boxItems).reduce((a, b) => a + b, 0)
    };
  }, [boxItems, selectedBox]);

  // General Cart totals
  const cartTotals = useMemo(() => {
    let price = 0;
    let weight = 0;
    let count = 0;
    Object.entries(cart).forEach(([pId, qty]) => {
      const prod = HUB_PRODUCTS.find(p => p.id === pId);
      if (prod && qty > 0) {
        price += prod.price * qty;
        weight += prod.weightGrams * qty;
        count += qty;
      }
    });
    return { price, weight, count };
  }, [cart]);

  // Add item helper for Curated Box
  const handleBoxItemChange = (pId: string, delta: number) => {
    const prod = HUB_PRODUCTS.find(p => p.id === pId);
    if (!prod) return;

    const currentCount = boxItems[pId] || 0;
    const nextCount = Math.max(0, currentCount + delta);

    if (delta > 0) {
      // Check weight limit (Max 5.0kg total payload for safety)
      const potentialWeight = curationTotals.weight + prod.weightGrams;
      if (potentialWeight > 5000) {
        setWarningMessage(language === 'EN' 
          ? 'Recommended expedition weight limit is capped at 5kg per hand-pack bundle! 🎒' 
          : 'සංචාරක පැකේජයක නිර්දේශිත උපරිම බර ප්‍රමාණය කිලෝග්‍රෑම් 5 කි! 🎒');
        setTimeout(() => setWarningMessage(null), 3500);
        return;
      }
    }

    setBoxItems(prev => ({
      ...prev,
      [pId]: nextCount
    }));
  };

  // Add item helper for standard a la carte cart
  const handleCartChange = (pId: string, qty: number) => {
    const currentQty = cart[pId] || 0;
    const nextQty = Math.max(0, currentQty + qty);
    setCart(prev => ({
      ...prev,
      [pId]: nextQty
    }));
  };

  const currentActiveTotals = activeTab === 'curator' ? curationTotals : cartTotals;

  const handleTriggerCheckout = () => {
    if (activeTab === 'curator' && curationTotals.count === 0) {
      setWarningMessage(language === 'EN' ? 'Add gear equipment into your bundle first! 🧗' : 'කරුණාකර ප්‍රථමයෙන් පැකේජයට අවශ්‍ය උපකරණ එක් කරන්න! 🧗');
      setTimeout(() => setWarningMessage(null), 3000);
      return;
    }
    if (activeTab === 'store' && cartTotals.count === 0) {
      setWarningMessage(language === 'EN' ? 'Your equipment cart is currently empty! 🎒' : 'ඔබගේ උපකරණ කරත්තය හිස්ය! 🎒');
      setTimeout(() => setWarningMessage(null), 3000);
      return;
    }
    setCheckoutAmount(currentActiveTotals.price);
    setIsCheckoutOpen(true);
  };

  const handleCheckoutSuccess = () => {
    setIsCheckoutOpen(false);
    const traceId = 'EXP-' + Math.floor(100000 + Math.random() * 900000);
    const orderItemsList: any[] = [];
    
    if (activeTab === 'curator') {
      Object.entries(boxItems).forEach(([pId, count]) => {
        if (count > 0) {
          const prod = HUB_PRODUCTS.find(p => p.id === pId);
          if (prod) orderItemsList.push({ name: prod.name, count, price: prod.price });
        }
      });
    } else {
      Object.entries(cart).forEach(([pId, qty]) => {
        if (qty > 0) {
          const prod = HUB_PRODUCTS.find(p => p.id === pId);
          if (prod) orderItemsList.push({ name: prod.name, count: qty, price: prod.price });
        }
      });
    }

    setOrderReceipt({
      traceId,
      date: new Date().toLocaleDateString(),
      items: orderItemsList,
      boxStyle: activeTab === 'curator' ? selectedBox : null,
      totalPrice: currentActiveTotals.price,
      totalWeight: currentActiveTotals.weight,
      customMessage: activeTab === 'curator' ? customMsg : '',
      deliveryEstimate: 'Next-Day Express Courier to Kandy/Ella/Colombo Hotels'
    });
    
    // Clear state
    setCart({});
    setBoxItems({});
    setCustomMsg('');
    setIsOrderSuccess(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-24 relative overflow-hidden selection:bg-orange-500/35 selection:text-white">
      
      {/* High-end decorative lights */}
      <div className="absolute top-0 right-[-10%] w-[35rem] h-[35rem] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[30%] left-[-15%] w-[40rem] h-[40rem] bg-teal-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Dynamic Alert Messages */}
      <AnimatePresence>
        {warningMessage && (
          <motion.div 
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.9 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-[60] flex items-center gap-3 px-6 py-4 bg-red-950 text-red-200 font-bold rounded-2xl shadow-[0_20px_50px_rgba(239,68,68,0.3)] text-xs border border-red-500/20 max-w-md"
          >
            <AlertTriangle size={18} className="text-red-500 shrink-0" />
            <span>{warningMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 pt-10">
        
        {/* Top bar */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-orange-500 uppercase tracking-widest mb-1">
              <Sparkles size={14} className="text-orange-500" />
              <span>Premium Outdoor Store</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white uppercase font-sans">
              {language === 'EN' ? 'CEYLON GEAR LABORATORY' : 'ශ්‍රී ලංකා කඳුකර ගවේෂණ කුටිය'}
            </h1>
          </div>

          {onBack && (
            <button
              onClick={onBack}
              className="flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-full border border-slate-800/80 transition-all font-bold text-xs uppercase"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-slate-400" />
              <span>{t.back}</span>
            </button>
          )}
        </div>

        {/* Dynamic Slogan & Banner */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-10 mb-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-5 pointer-events-none" 
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519817914152-22d216bb9170?auto=format&fit=crop&w=1600&q=80')` }}
          />

          <div className="relative max-w-2xl space-y-2 text-center md:text-left">
            <h2 className="text-lg sm:text-xl font-bold tracking-tight text-white">
              {t.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-semibold">
              {t.slogan}
            </p>
          </div>

          <div className="flex gap-3 bg-slate-950 p-2 rounded-2xl border border-slate-800 shrink-0">
            <button
              onClick={() => { setActiveTab('store'); setIsOrderSuccess(false); }}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all ${
                activeTab === 'store' 
                  ? 'bg-orange-600 text-white shadow-lg shadow-orange-700/30' 
                  : 'text-slate-400 hover:text-slate-100'
              }`}
            >
              <ShoppingBag size={14} />
              <span>{language === 'EN' ? '🎒 Explore Store' : 'උපකරණ ගබඩාව'}</span>
            </button>
            <button
              onClick={() => { setActiveTab('curator'); setIsOrderSuccess(false); }}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all ${
                activeTab === 'curator' 
                  ? 'bg-orange-600 text-white shadow-lg shadow-orange-700/30' 
                  : 'text-slate-400 hover:text-slate-100'
              }`}
            >
              <Gift size={14} />
              <span>{t.curatorTitle}</span>
            </button>
          </div>
        </div>

        {/* Global Stats Widget (Displays load details dynamically) */}
        {!isOrderSuccess && (
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl px-6 py-4 flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Package size={16} className="text-orange-500" />
                <span className="text-xs font-mono text-slate-400">
                  {language === 'EN' ? 'Cart Items' : 'තෝරාගත් දේ'}: <strong className="text-slate-200">{currentActiveTotals.count}</strong>
                </span>
              </div>
              <div className="h-4 w-px bg-slate-800" />
              <div className="flex items-center gap-2">
                <Weight size={16} className="text-teal-400" />
                <span className="text-xs font-mono text-slate-400">
                  {language === 'EN' ? 'Est Load' : 'මුළු බර'}: <strong className={`transition-all ${currentActiveTotals.weight > 4000 ? 'text-orange-500' : 'text-slate-200'}`}>{(currentActiveTotals.weight / 1000).toFixed(2)} kg</strong>
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-xs text-slate-400 font-mono">Current Total Valuation:</span>
              <span className="text-xl font-black text-emerald-400 font-mono">${currentActiveTotals.price}</span>
            </div>
          </div>
        )}

        {/* Main Grid Interface with Glassmorphic Lock Cover */}
        <div className="relative rounded-[2.5rem] overflow-hidden border border-slate-800/80 bg-slate-900/10 mb-6 min-h-[500px] flex items-center justify-center">
          
          {/* Blur Cover Overlay */}
          <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-[10px] z-30 flex flex-col items-center justify-center p-6 text-center select-none">
            <div className="max-w-xl mx-auto space-y-6 p-8 sm:p-10 bg-[#0e1423]/95 border border-slate-800/80 rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.8)] relative overflow-hidden animate-in zoom-in-95 duration-700">
              {/* Decorative lights inside the overlay card */}
              <div className="absolute -top-16 -left-16 w-36 h-36 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-16 -right-16 w-36 h-36 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

              <div className="w-18 h-18 mx-auto bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-2xl flex items-center justify-center border border-orange-500/30 shadow-inner text-amber-500 animate-pulse">
                <Lock size={32} className="text-amber-400" />
              </div>

              <div className="space-y-3">
                <span className="inline-block text-[10px] font-mono font-extrabold text-orange-400 uppercase tracking-widest bg-orange-500/15 px-3.5 py-1.5 rounded-full border border-orange-500/20">
                  ⚠️ DEMO SAFEKEEPING ACTIVE
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase font-sans pt-1">
                  {language === 'EN' ? 'Ceylon Gear Lab Locked' : 'මාර්ගගත සාප්පුව අක්‍රීය කර ඇත'}
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-semibold font-sans">
                  {language === 'EN' 
                    ? "This expedition store is running in an interactive sandbox mode. Actual payment gateways and courier dispatch are permanently locked for safety so you can publish without any worries or commercial liabilities!" 
                    : "මෙම උපකරණ සාප්පුව දැනට ආදර්ශන (Demo Preview) මට්ටමේ ක්‍රියාත්මක වේ. සත්‍ය මුදල් ගෙවීම් හෝ භාණ්ඩ ප්‍රවාහන ක්‍රමවේද සම්පූර්ණයෙන්ම අක්‍රීය කර ඇත. එම නිසා ඔබට මෙම වෙබ් අඩවිය කිසිදු බියකින් හෝ ගැටලුවකින් තොරව ප්‍රසිද්ධ කළ හැකිය!"}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row gap-3 justify-center items-center">
                <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono bg-slate-950/60 px-4 py-2 rounded-xl border border-slate-850">
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
                  <span>Stripe Sandbox Protected</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono bg-slate-950/60 px-4 py-2 rounded-xl border border-slate-850">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Interactive Catalog Active</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-full opacity-20 pointer-events-none select-none filter blur-[5px] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start p-6">
            {/* LEFT: PRODUCTS / CURATION FORMS */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* INVOICE / ORDER SUCCESS STATE */}
              {isOrderSuccess && orderReceipt && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-slate-900 border border-slate-800 p-6 sm:p-10 rounded-3xl relative overflow-hidden shadow-2xl"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full blur-3xl" />
                  
                  <div className="flex flex-col items-center text-center space-y-3 pb-6 border-b border-slate-800">
                    <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center border border-emerald-500/20">
                      <ShieldCheck size={26} className="animate-bounce" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white uppercase tracking-tight">{language === 'EN' ? 'EXPEDITION GEAR DISPATCHED' : 'උපකරණ සාර්ථකව ඇණවුම් කරන ලදී'}</h3>
                      <p className="text-slate-400 text-xs mt-1">{language === 'EN' ? 'Tracking registry active. Safe journey through Sri Lanka - Subha Gaman!' : 'ඔබගේ සංචාරක සවිබල මෙවලම් ඇණවුම නිමයි. ඔබට සුභ ගමන්!'}</p>
                    </div>
                  </div>


                <div className="py-6 space-y-6">
                  <div className="grid grid-cols-2 gap-4 text-xs font-mono uppercase tracking-wider">
                    <div>
                      <span className="text-slate-500 block">Package Code</span>
                      <span className="text-orange-500 text-sm font-bold">{orderReceipt.traceId}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-slate-500 block">Transit Status</span>
                      <span className="text-emerald-400 text-sm font-bold">Priority Courier 🚚</span>
                    </div>
                  </div>

                  <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3 font-mono text-xs">
                    <div className="text-xs font-bold uppercase text-slate-300 border-b border-slate-800 pb-2 flex items-center justify-between">
                      <span>Gear Inventory Check</span>
                      <span className="text-slate-500">Qty</span>
                    </div>
                    {orderReceipt.items.map((it: any, k: number) => (
                      <div key={k} className="flex justify-between text-slate-400">
                        <span>{it.name[language]}</span>
                        <span>x{it.count} <strong className="text-slate-200 ml-4">${it.price * it.count}</strong></span>
                      </div>
                    ))}
                    
                    {orderReceipt.boxStyle && (
                      <div className="flex justify-between text-slate-500 border-t border-slate-800 pt-2 bg-slate-900/40 p-1.5 rounded mt-2">
                        <span>Carrier Container: {orderReceipt.boxStyle.name[language]}</span>
                        <span className="text-slate-300 font-bold">${orderReceipt.boxStyle.price}</span>
                      </div>
                    )}

                    <div className="flex justify-between text-slate-400 border-t border-slate-800 pt-2">
                      <span>Total Payload Weight</span>
                      <span>{(orderReceipt.totalWeight / 1000).toFixed(2)} kg</span>
                    </div>
                    <div className="flex justify-between text-sm font-bold text-emerald-400 pt-1">
                      <span>Grand Total Charge</span>
                      <span>${orderReceipt.totalPrice}</span>
                    </div>
                  </div>

                  {orderReceipt.customMessage && (
                    <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                      <div className="text-[10px] font-mono uppercase text-orange-500 mb-1">Custom Safety Notes / Delivery Directives</div>
                      <p className="text-slate-300 italic text-xs leading-relaxed">"{orderReceipt.customMessage}"</p>
                    </div>
                  )}

                  <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                    <Truck size={15} className="text-orange-500" />
                    <span>Deliver To: <strong className="text-slate-200">{orderReceipt.deliveryEstimate}</strong></span>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800">
                  <button
                    onClick={() => setIsOrderSuccess(false)}
                    className="w-full py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    Return to Store Catalog 🛍️
                  </button>
                </div>
              </motion.div>
            )}

            {/* TAB 1: PRODUCT SHIELD CATALOG */}
            {!isOrderSuccess && activeTab === 'store' && (
              <div className="space-y-6">
                
                {/* Search and Category Filter Interface */}
                <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex flex-col md:flex-row items-center gap-4">
                  <div className="relative w-full md:w-auto flex-grow">
                    <Search size={15} className="absolute left-4.5 top-1/2 -translate-y-1/2 text-slate-500" />
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder={t.searchPlaceholder}
                      className="w-full bg-slate-950 text-slate-200 pl-11 pr-4 py-3 rounded-xl text-xs border border-slate-800 focus:outline-none focus:border-orange-500 transition-all placeholder-slate-500"
                    />
                  </div>

                  {/* Sub Categories Tabs */}
                  <div className="flex flex-wrap gap-1.5 shrink-0 justify-end w-full md:w-auto">
                    {Object.entries(t.categories).map(([catKey, label]) => (
                      <button
                        key={catKey}
                        onClick={() => setSelectedCategory(catKey)}
                        className={`text-[11px] px-3.5 py-2.5 rounded-lg font-bold uppercase tracking-wider transition-all border ${
                          selectedCategory === catKey
                            ? 'bg-orange-600 text-white border-orange-500 shadow-md'
                            : 'bg-slate-950 text-slate-400 border-slate-800/80 hover:text-slate-200 hover:bg-slate-900'
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Ultimate Adventure Grid Products */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredProducts.map((prod) => {
                    const itemsInCart = cart[prod.id] || 0;
                    return (
                      <div 
                        key={prod.id} 
                        className="bg-slate-900 border border-slate-800/80 rounded-2xl overflow-hidden flex flex-col hover:border-slate-700 transition-all group"
                      >
                        {/* Image wrapper */}
                        <div className="relative h-48 overflow-hidden bg-slate-950">
                          <img 
                            src={prod.image} 
                            alt={prod.name[language]} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                          
                          {/* Top-Badges */}
                          <div className="absolute top-3 left-3 flex gap-2">
                            <span className="text-[9.5px] font-mono font-bold px-2.5 py-1 bg-slate-950/80 text-orange-400 backdrop-blur-sm rounded border border-orange-500/10">
                              {prod.weightGrams}g
                            </span>
                            <span className="text-[9.5px] font-mono font-bold px-2.5 py-1 bg-slate-950/80 text-teal-400 backdrop-blur-sm rounded border border-teal-500/10">
                              {prod.specsAttributes.Capacity || prod.specsAttributes.Rating || prod.specsAttributes.Reservoir}
                            </span>
                          </div>

                          <div className="absolute bottom-3 left-3">
                            <span className="text-[10px] font-bold text-slate-400 font-mono tracking-tight uppercase flex items-center gap-1 bg-slate-950/40 px-2 py-0.5 rounded">
                              <MapPin size={10} className="text-orange-500" />
                              {prod.origin[language]}
                            </span>
                          </div>
                        </div>

                        {/* Description & Action panel */}
                        <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-start justify-between gap-1">
                              <h4 className="text-sm font-bold text-white group-hover:text-orange-400 transition-colors leading-snug">
                                {prod.name[language]}
                              </h4>
                              <span className="text-base font-bold font-mono text-emerald-400">${prod.price}</span>
                            </div>
                            
                            <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                              {prod.desc[language]}
                            </p>
                          </div>

                          {/* Expanded Specifications Preview Button */}
                          <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                            <span>{t.specsTab}</span>
                            <button
                              onClick={() => setDetailsProduct(prod)}
                              className="text-orange-500 hover:text-orange-400 font-bold flex items-center gap-1 uppercase"
                            >
                              <Eye size={12} />
                              <span>Details</span>
                            </button>
                          </div>

                          {/* Quick Advantages Badge list */}
                          <div className="flex flex-wrap gap-1">
                            {prod.specs[language].slice(0, 2).map((sp, idx) => (
                              <span key={idx} className="text-[9.5px] bg-slate-950/60 text-slate-300 py-1 px-2.5 rounded border border-slate-800">
                                ✓ {sp}
                              </span>
                            ))}
                          </div>

                          {/* Interactive Cart controls */}
                          <div className="pt-2">
                            {itemsInCart > 0 ? (
                              <div className="flex items-center justify-between gap-2 bg-slate-950 border border-slate-800 p-1 rounded-xl">
                                <button 
                                  onClick={() => handleCartChange(prod.id, -1)}
                                  className="w-9 h-9 flex items-center justify-center bg-slate-900 text-slate-300 hover:text-red-400 rounded-lg border border-slate-800"
                                >
                                  <Minus size={13} />
                                </button>
                                <span className="text-xs font-mono font-bold text-slate-200">{itemsInCart} inside cart</span>
                                <button 
                                  onClick={() => handleCartChange(prod.id, 1)}
                                  className="w-9 h-9 flex items-center justify-center bg-slate-900 text-slate-300 hover:text-emerald-400 rounded-lg border border-slate-800"
                                >
                                  <Plus size={13} />
                                </button>
                              </div>
                            ) : (
                              <button
                                onClick={() => handleCartChange(prod.id, 1)}
                                className="w-full py-2.5 bg-orange-600 hover:bg-orange-500 text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all"
                              >
                                <Plus size={13} />
                                <span>{t.addCart}</span>
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* TAB 2: PACKS & BUNDLES CONFIGURATOR */}
            {!isOrderSuccess && activeTab === 'curator' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                
                {/* CONFIGURATOR STEP 1: SELECT CARRIER CONTAINER */}
                <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-4">
                  <div className="flex items-center gap-2 text-white font-bold text-sm border-b border-slate-800 pb-3">
                    <Sliders size={16} className="text-orange-500" />
                    <h4>{t.boxStyleTitle}</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {BOX_STYLES.map((box) => (
                      <button
                        key={box.id}
                        onClick={() => setChosenBoxStyle(box.id)}
                        className={`group text-left rounded-xl p-4.5 border transition-all flex flex-col justify-between space-y-3 ${
                          chosenBoxStyle === box.id 
                            ? 'bg-slate-950 border-orange-500 text-white shadow-lg' 
                            : 'bg-slate-950/40 border-slate-800/80 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between gap-1">
                            <span className="text-xs font-bold text-slate-200 group-hover:text-orange-400 transition-colors leading-normal">
                              {box.name[language]}
                            </span>
                            <span className="text-xs font-mono font-bold text-emerald-400 shrink-0">${box.price}</span>
                          </div>
                          <p className="text-[11px] text-slate-400 leading-relaxed font-semibold">
                            {box.desc[language]}
                          </p>
                        </div>

                        <div className="flex justify-between items-center pt-2 border-t border-slate-800">
                          <span className="text-[10px] font-mono text-slate-500">Weight: {box.weightGrams}g</span>
                          {chosenBoxStyle === box.id && (
                            <div className="w-4 h-4 rounded-full bg-orange-600 flex items-center justify-center text-white scale-110">
                              <Check size={10} strokeWidth={3} />
                            </div>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* CONFIGURATOR STEP 2: CHOOSE SPECIFIC TRAVEL HARDWARE */}
                <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-4">
                  <div className="flex items-center gap-2 text-white font-bold text-sm border-b border-slate-800 pb-3">
                    <Package size={16} className="text-orange-500" />
                    <h4>{t.curationTitle}</h4>
                  </div>

                  <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-800">
                    {HUB_PRODUCTS.map((prod) => {
                      const count = boxItems[prod.id] || 0;
                      return (
                        <div 
                          key={prod.id} 
                          className="bg-slate-950 border border-slate-800/80 rounded-xl p-3.5 flex flex-col sm:flex-row items-center gap-4 hover:border-slate-700 transition-all group"
                        >
                          <img 
                            src={prod.image} 
                            alt={prod.name[language]} 
                            className="w-14 h-14 rounded-lg object-cover shrink-0 bg-slate-900" 
                          />

                          <div className="flex-grow space-y-0.5 min-w-0 text-center sm:text-left">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                              <h5 className="text-xs sm:text-sm font-bold text-slate-200 group-hover:text-orange-400 transition-colors">
                                {prod.name[language]}
                              </h5>
                              <span className="text-xs font-mono font-bold text-emerald-400 shrink-0">${prod.price}</span>
                            </div>
                            <p className="text-[11px] text-slate-400 line-clamp-1">
                              {prod.desc[language]}
                            </p>
                            <div className="flex items-center justify-center sm:justify-start gap-4 text-[9.5px] text-slate-500 font-mono uppercase">
                              <span>Origin: {prod.origin[language]}</span>
                              <span>•</span>
                              <span>Weight: {prod.weightGrams}g</span>
                            </div>
                          </div>

                          {/* Controls */}
                          <div className="shrink-0 flex items-center bg-slate-900 border border-slate-800 p-1 rounded-xl">
                            <button
                              onClick={() => handleBoxItemChange(prod.id, -1)}
                              className="w-7 h-7 flex items-center justify-center text-slate-400 hover:text-red-400 rounded transition-colors"
                            >
                              <Minus size={11} />
                            </button>
                            <span className="w-8 text-center text-xs font-mono font-bold text-slate-200">{count}</span>
                            <button
                              onClick={() => handleBoxItemChange(prod.id, 1)}
                              className="w-7 h-7 flex items-center justify-center text-slate-400 hover:text-emerald-400 rounded transition-colors"
                            >
                              <Plus size={11} />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* CONFIGURATOR STEP 3: CUSTOM METADATA DIRECTIVES */}
                <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-4">
                  <div className="flex items-center gap-2 text-white font-bold text-sm border-b border-slate-800 pb-3">
                    <FileText size={16} className="text-orange-500" />
                    <h4>{t.greetingTitle}</h4>
                  </div>

                  <div className="space-y-4">
                    <textarea
                      value={customMsg}
                      onChange={(e) => setCustomMsg(e.target.value.slice(0, 180))}
                      placeholder={t.greetingPlaceholder}
                      rows={3}
                      maxLength={180}
                      className="w-full bg-slate-950 text-slate-200 p-3.5 rounded-xl text-xs border border-slate-800 focus:outline-none focus:border-orange-500 placeholder-slate-500 transition-all font-sans"
                    />

                    <div className="flex flex-wrap justify-between items-center text-[10px] text-slate-500 font-mono gap-3">
                      <div className="flex gap-2">
                        <button 
                          onClick={() => setCustomMsg(language === 'EN' ? 'Please deliver to Ella Hotel reception under name John Explorer! - Subha Gaman!' : 'කරුණාකර ඇල්ල හෝටලයේ පිළිගැනීමේ කවුන්ටරයට භාර දෙන්න! - සුභ ගමන්!')}
                          className="text-orange-400 hover:text-orange-300 border border-slate-800 bg-slate-950 px-2.5 py-1.5 rounded transition-all font-bold"
                        >
                          {t.safeBtn}
                        </button>
                        <button 
                          onClick={() => setCustomMsg(language === 'EN' ? 'Safety First: Deliver package to Knuckles Camp organizer before Monday.' : 'ආරක්ෂාව මුලින්ම: සඳුදාට පෙර නකල්ස් කණ්ඩායම් ආධාරකරුට භාර දෙන්න.')}
                          className="text-teal-400 hover:text-teal-300 border border-slate-800 bg-slate-950 px-2.5 py-1.5 rounded transition-all font-bold"
                        >
                          {language === 'EN' ? 'Insert Priority Instructions' : 'වැදගත් උපදෙස්'}
                        </button>
                      </div>
                      <span>{customMsg.length}/180 characters limit</span>
                    </div>
                  </div>
                </div>

              </div>
            )}
          </div>

          {/* RIGHT: BILL / WEIGHT DISPATCH SUMMARY PANEL */}
          {!isOrderSuccess && (
            <div className="lg:col-span-4 lg:sticky lg:top-24">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="border-b border-slate-800 pb-3">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                  {activeTab === 'curator' ? t.checkoutTitle : t.cartIconTitle}
                </h4>
                <p className="text-[10px] text-slate-500 font-mono uppercase mt-1">Ready for dispatcher check 📦</p>
              </div>

              {/* Items in bundle list */}
              <div className="space-y-3 max-h-[220px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-800">
                {activeTab === 'curator' ? (
                  <>
                    <div className="flex justify-between items-start text-xs font-mono">
                      <div>
                        <span className="text-slate-400 block uppercase font-bold">Selected Carrier:</span>
                        <span className="text-[10px] text-slate-500 leading-normal">{selectedBox.name[language]}</span>
                      </div>
                      <span className="text-emerald-400 font-bold shrink-0">${selectedBox.price}</span>
                    </div>

                    {Object.entries(boxItems).map(([pId, count]) => {
                      if (count === 0) return null;
                      const prod = HUB_PRODUCTS.find(p => p.id === pId);
                      if (!prod) return null;
                      return (
                        <div key={pId} className="flex justify-between text-xs font-mono border-t border-slate-800 pt-2 pb-1">
                          <span className="text-slate-400">{prod.name[language]} <strong className="text-orange-400 font-bold">x{count}</strong></span>
                          <span className="text-emerald-400 shrink-0">${prod.price * count}</span>
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <>
                    {Object.entries(cart).map(([pId, qty]) => {
                      if (qty === 0) return null;
                      const prod = HUB_PRODUCTS.find(p => p.id === pId);
                      if (!prod) return null;
                      return (
                        <div key={pId} className="flex justify-between items-center text-xs font-mono border-b border-slate-800 pb-2">
                          <span className="text-slate-400">{prod.name[language]} <strong className="text-orange-400 font-bold">x{qty}</strong></span>
                          <span className="text-emerald-400 shrink-0">${prod.price * qty}</span>
                        </div>
                      );
                    })}
                    {cartTotals.count === 0 && (
                      <div className="text-center text-slate-500 text-xs py-10 font-mono">
                        No equipment inside shopping bag.
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Weight Payload Bar */}
              <div className="space-y-2 pt-4 border-t border-slate-800 font-mono text-[10px]">
                <div className="flex justify-between text-slate-400 uppercase font-bold tracking-wider">
                  <span>{t.weightGauge}</span>
                  <span className={currentActiveTotals.weight > 4000 ? 'text-orange-500' : 'text-slate-200'}>
                    {(currentActiveTotals.weight / 1000).toFixed(2)} kg / 5.0 kg Limit
                  </span>
                </div>
                <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden border border-slate-800">
                  <div 
                    className={`h-full rounded-full transition-all duration-500 ${
                      currentActiveTotals.weight > 4000 ? 'bg-orange-500 animate-pulse' : 'bg-gradient-to-r from-teal-500 to-orange-500'
                    }`}
                    style={{ width: `${Math.min(100, (currentActiveTotals.weight / 5000) * 100)}%` }}
                  />
                </div>
                {currentActiveTotals.weight > 4000 && (
                  <p className="text-[10px] text-orange-400 bg-orange-950/20 p-2 rounded-lg border border-orange-500/10 leading-normal">
                    ⚠️ Dispatch Warning: Higher weight can slow downs active hiking trails. Pack efficiently!
                  </p>
                )}
              </div>

              {/* Accounting details */}
              <div className="space-y-2.5 bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Subtotal Value</span>
                  <span className="text-slate-200">${currentActiveTotals.price}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Express Dispatch</span>
                  <span className="text-teal-400 font-bold">FREE DELIVERY</span>
                </div>
                <div className="h-px bg-slate-850" />
                <div className="flex justify-between items-center pt-1">
                  <span className="uppercase text-slate-400 font-bold">Total Cost</span>
                  <span className="text-xl font-bold text-emerald-400">${currentActiveTotals.price}</span>
                </div>
              </div>

              {/* Pay trigger */}
              <button
                onClick={handleTriggerCheckout}
                className="w-full py-3.5 bg-orange-600 hover:bg-orange-500 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-700/20"
              >
                <CreditCard size={14} />
                <span>Secure Checkout 🔒</span>
              </button>

              <div className="text-[9.5px] text-slate-500 text-center font-mono uppercase">
                Secured Stripe Processing Interface
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>

      {/* DETAIL DRAWER / POPUP FOR SPECIFICATION CHECKS */}
      <AnimatePresence>
        {detailsProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDetailsProduct(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 space-y-5 relative z-10 text-xs shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <div className="flex justify-between items-start border-b border-slate-850 pb-3">
                <h4 className="text-base font-bold text-white uppercase">{detailsProduct.name[language]}</h4>
                <button 
                  onClick={() => setDetailsProduct(null)}
                  className="text-slate-450 hover:text-white bg-slate-950 px-2 py-1 rounded border border-slate-800"
                >
                  X
                </button>
              </div>

              <div className="h-44 rounded-xl overflow-hidden bg-slate-950 relative border border-slate-800">
                <img src={detailsProduct.image} alt="Detail view" className="w-full h-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 p-3 flex justify-between items-end">
                  <span className="text-xs font-mono text-slate-300 font-bold">{detailsProduct.origin[language]}</span>
                  <span className="text-sm font-mono text-emerald-400 font-extrabold">${detailsProduct.price}</span>
                </div>
              </div>

              {/* Tabs */}
              <div className="space-y-3">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-orange-500 block mb-1">Overview DESCRIPTION</span>
                  <p className="text-slate-300 leading-relaxed font-semibold">{detailsProduct.desc[language]}</p>
                </div>

                <div className="h-px bg-slate-850" />

                <div className="grid grid-cols-2 gap-3 bg-slate-950 p-3 rounded-xl border border-slate-850 font-mono text-[11px] text-slate-400">
                  {Object.entries(detailsProduct.specsAttributes).map(([k, v]) => (
                    <div key={k}>
                      <span className="text-slate-500 block text-[9px] uppercase">{k}</span>
                      <span className="text-slate-200">{v}</span>
                    </div>
                  ))}
                  <div>
                    <span className="text-slate-500 block text-[9px] uppercase">Weight Metric</span>
                    <span className="text-orange-400">{detailsProduct.weightGrams}g</span>
                  </div>
                </div>

                <div className="h-px bg-slate-850" />

                <div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-teal-400 block mb-1.5">{t.benefitsTitle}</span>
                  <div className="space-y-1 bg-slate-950/40 p-3 rounded-xl border border-slate-850/50">
                    {detailsProduct.specs[language].map((sp, sIdx) => (
                      <div key={sIdx} className="flex gap-2 text-slate-300 font-medium">
                        <span className="text-teal-400 font-mono">▸</span>
                        <span>{sp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-orange-950/20 p-3 rounded-xl border border-orange-500/10 text-slate-300 font-serif italic text-xs leading-relaxed flex items-start gap-2">
                  <Info size={16} className="text-orange-400 shrink-0 mt-0.5" />
                  <span>{detailsProduct.recommendation[language]}</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Embedded Stripe Integration Modal */}
      {isCheckoutOpen && (
        <StripePaymentModal
          amount={checkoutAmount}
          title={activeTab === 'curator' ? '⛰️ SECURE EXPEDITION CHECKOUT ⛰_' : '🔌 OUTDOOR HARDWARE BILLING 🔌'}
          onSuccess={handleCheckoutSuccess}
          onClose={() => setIsCheckoutOpen(false)}
        />
      )}
    </div>
  );
};

export default TravelStore;
