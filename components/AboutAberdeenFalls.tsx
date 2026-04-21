import React from 'react';
import { Language } from '../types';

interface AboutAberdeenFallsProps {
  language: Language;
}

const AboutAberdeenFalls: React.FC<AboutAberdeenFallsProps> = ({ language }) => {
  const content = {
    title: language === 'EN' ? "Complete Travel Guide — Aberdeen Falls" : "සම්පූර්ණ සංචාරක මාර්ගෝපදේශය — ඇබර්ඩීන් ඇල්ල",
    subtitle: language === 'EN' ? "The Hidden Giant of the Kelani Valley — 98 Metres of Undisturbed Highland Water in the Forest Below Ginigathena" : "කැළණි නිම්නයේ සැඟවුණු යෝධයා - ගිනිගත්හේන වනාන්තරය පහළින් නිසලව ගලා හැලෙන මීටර් 98ක ජලස්කන්ධය",
    description: language === 'EN' ? "Kegalle District, Sabaragamuwa Province • 98 m height • Natural waterfall site • Off the main tourist circuit • Near Ginigathena, Hatton corridor" : "කෑගල්ල දිස්ත්‍රික්කය, සබරගමුව පළාත • උස මීටර් 98 • ස්වාභාවික දිය ඇල්ල • ප්‍රධාන සංචාරක ගමන් මාර්ගයෙන් බැහැර වූ • ගිනිගත්හේන ආසන්නයේ හැටන් කොරිඩෝව",
    sections: [
      {
        title: language === 'EN' ? "Section 01: Introduction — Why Aberdeen Falls Matters" : "01 වන කොටස: හැඳින්වීම — ඇබර්ඩීන් ඇල්ලේ වැදගත්කම",
        body: language === 'EN' ? 
          "Aberdeen Falls is one of the finest and most consistently underappreciated waterfalls in Sri Lanka — a single-drop cascade of approximately 98 metres formed by the Kehelgamu Oya as it plunges from the edge of the highland plateau into the deep, forested Kelani Valley below. At 98 metres it is among the tallest single-drop waterfalls in the country — virtually equal in height to Devon Falls and surpassed among Sri Lanka's named waterfalls only by Laxapana — and yet it receives a fraction of the visitor numbers of its more celebrated peers.\n\nWhat makes Aberdeen Falls remarkable is not simply its height — though 98 metres of falling water in a forest gorge is remarkable by any standard — but the specific quality of the forest setting that encloses it. The gorge through which the Kehelgamu Oya descends is clothed in a dense, intact, species-rich forest that represents one of the finest surviving examples of the intermediate wet zone forest type in the Sabaragamuwa Province.\n\nAberdeen Falls is the waterfall for the traveller who has seen the celebrated falls of the highland circuit and wants something more — something that requires more effort to reach, that offers fewer facilities and fewer fellow visitors, and that delivers in return a quality of encounter with wild highland nature that the more managed sites cannot any longer provide." :
          "ඇබර්ඩීන් ඇල්ල යනු ශ්‍රී ලංකාවේ පවතින අතිශය සුන්දර, එහෙත් අඩුවෙන්ම අවධානයට ලක් වූ අගනා දිය ඇල්ලකි. ගිනිගත්හේන ප්‍රදේශයට ආසන්නව පිහිටා ඇති මෙම ඇල්ල, කෙහෙල්ගමුව ඔයේ ජලය ගැඹුරු කැළණි නිම්නයට කඩා හැලීමෙන් නිර්මාණය වී ඇත. මීටර් 98ක උසකින් යුත් මෙහි උස ඩෙවෝන් ඇල්ලට සමාන වන අතර ශ්‍රී ලංකාවේ උසම දිය ඇලි අතරින් එය දෙවැනි වන්නේ ලක්ෂපාන ඇල්ලට පමණි. නමුත් දැඩි ජනප්‍රියත්වයක් නැති නිසා එය නරඹන්නට පැමිණෙන්නේ ඉතා සුළු පිරිසක් පමණි.\n\nමෙම දිය ඇල්ලේ ඇති විශිෂ්ටත්වය එහි උස පමණක් නොවේ; එය වටා ඇති ස්වාභාවික වනාන්තර පරිසරයයි. කෙහෙල්ගමුව ඔය ගලා යන මෙම මිටියාවත සබරගමුව පළාතේ දක්නට ලැබෙන හොඳම අන්තර් තෙත් කලාපීය වනාන්තරයකින් (Intermediate wet zone forest) වටවී ඇත. එය ශාක හා සත්ව විශේෂ රැසකට වාසස්ථානයකි.\n\nවිශාල පහසුකම් නොමැති, වඩාත් වෙහෙසකර ගමනක් ගොස්, සෙනගින් තොර නිසල පරිසරයක සැබෑ වනගත අත්දැකීමක් සොයන සංචාරකයින් සඳහා ඇබර්ඩීන් ඇල්ල අපූරු තේරීමකි."
      },
      {
        title: language === 'EN' ? "Section 02: History — The Kehelgamu Oya and the Kelani Valley" : "02 වන කොටස: ඉතිහාසය — කෙහෙල්ගමුව ඔය සහ කැළණි නිම්න බැවුම්",
        body: language === 'EN' ?
          "The Kehelgamu Oya is a highland river that descends from the plateau area near Ginigathena through the forested escarpment of the Sabaragamuwa Province before joining the Kelani Ganga in the lower valley below. The Kelani Ganga and its tributaries have been central to the agricultural and cultural life of the Sabaragamuwa Province for centuries.\n\nThe name Aberdeen Falls reflects the colonial-era practice of naming natural features after the tea estates or the individuals associated with the land through which they flow. The exact documentation that exists for the more celebrated falls of Nuwara Eliya is largely absent for Aberdeen, reflecting the less prominent position of the Ginigathena area in colonial highland recreational geography.\n\nThe relative obscurity of Aberdeen Falls in the modern tourist landscape reflects a combination of factors — it sits off the main tourist routes, the approach requires more effort, and the absence of formal management infrastructure means it doesn't appear prominently in official tourism promotions. All of these factors together have preserved Aberdeen in a condition of relative wildness.\n\n\"Aberdeen Falls has stayed beautiful precisely because it has stayed secret — the forest that hides it from the road is the same forest that has kept it from being managed into something less than itself.\"" :
          "කෙහෙල්ගමුව ඔය යනු ගිනිගත්හේන කඳුකරයේ සිට ගලා විත් සබරගමුවේ වනගත බෑවුම් පසු කර පහළ නිම්නයේදී කැළණි ගඟට එකතු වන කඳුකර ජල ප්‍රවාහයකි. සියවස් ගණනාවක් තිස්සේ කැළණි ගඟ සහ එහි අතු ගංගා සබරගමුව පළාතේ කෘෂිකාර්මික හා සංස්කෘතික ජීවිතයට ඉමහත් මෙහෙවරක් ඉටු කර ඇත.\n\nඇබර්ඩීන් ඇල්ල යන නම යටත් විජිත යුගයේදී මෙම දිය ඇල්ල ගලා බසිනා භූමියේ පිහිටි තේ වත්තකට හෝ ඒ ආශ්‍රිත පුද්ගලයෙකුට සම්බන්ධ ඉංග්‍රීසි නමක් අනුව යෙදී ඇති බව සැලකේ. නුවරඑළිය ආශ්‍රිත දිය ඇලිවලට අදාළව පවතින පැරණි වාර්තා මෙතරම් ඇබර්ඩීන් ඇල්ල සම්බන්ධයෙන් හමු නොවේ.\n\nප්‍රධාන සංචාරක මාර්ගයෙන් බැහැරව පිහිටීම, ළඟාවීමේ දුෂ්කරතාවය සහ විධිමත් යටිතල පහසුකම් නොමැති වීම නිසා නූතන සංචාරක සිතියම තුළ මෙම ඇල්ල තරමක් සැඟවී පවතී. නමුත් එම හේතූන් නිසාම ඇබර්ඩීන් ඇල්ල එහි ඇති වනගත, නොඉඳුල් සුන්දරත්වය අදටත් එලෙසම පවත්වාගෙන යයි.\n\n\"ඇබර්ඩීන් ඇල්ල මෙතරම් ලස්සනට ඉතිරිව ඇත්තේ එය රහසක්ව පවතින නිසාවෙනි - මාර්ගයෙන් එය සඟවාගෙන සිටින මෙම වනාන්තරයම, වාණිජකරණයෙන් එය විනාශ වීමෙන් ද ආරක්ෂා කර ඇත.\""
      },
      {
        title: language === 'EN' ? "Section 03: The Falls — Form, Scale, and the Forest Frame" : "03 වන කොටස: දිය ඇල්ල — හැඩය, ප්‍රමාණය සහ වනගත ආවරණය",
        body: language === 'EN' ?
          "Aberdeen Falls descends approximately 98 metres in a single, nearly vertical plunge from the lip of the highland escarpment to the plunge pool at the base of the gorge, framed by dense, intact forest. The Kehelgamu Oya at the lip is a substantial highland stream drawing from a wet zone catchment that receives rainfall from both monsoon systems — meaning the falls run at their most powerful flow during the southwest monsoon.\n\nThe rock face over which Aberdeen Falls descends is a dark highland cliff heavily colonised by mosses, liverworts, and ferns of the perpetually moist gorge microclimate. The visual composition of dark rock, white water, and dense green forest creates a scene of considerable richness.\n\nThe plunge pool at the base is a deep, spray-filled basin whose character in the months of high flow is genuinely awesome — producing a sustained roar and spray cloud. At lower flow the pool is calmer and clearer, and the quality of the forest reflection in its surface is one of those quiet photographic pleasures that the high-flow version cannot offer." :
          "ඇබර්ඩීන් ඇල්ල මීටර් 98ක් පමණ පහළට සෘජුවම කඩා හැලෙන අතර, ඝන වනාන්තරයෙන් එය හතර වටින්ම ආවරණය වී ඇත. කඳුකර ප්‍රදේශයෙන් ගලා එන නිරිතදිග මෝසම් වර්ෂාවෙන් පෝෂණය වන කෙහෙල්ගමුව ඔයේ ජලය නිසා මෝසම් සමයේදී මෙහි ජල ප්‍රවාහය ඉතා ප්‍රබල මට්ටමකට පත්වේ.\n\nදිය ඇල්ල කඩා හැලෙන අඳුරු ගල් තලාව නිරන්තරයෙන්ම තෙත් පරිසරයක් පවත්වා ගන්නා නිසා පාසි සහ මීවන ශාකවලින් වැසී පවතී. අඳුරු පැහැති ගල් තලාව, සුදෝ සුදු ජලය සහ අවට පවතින තද කොළ පැහැති වනාන්තරය එකට එක්වී අපූරු දසුනක් නිර්මාණය කරයි.\n\nදිය ඇල්ල පාමුල ඇති ගැඹුරු තටාකය, අධික වර්ෂා කාලයේදී දැවැන්ත හඬක් සහ ජල බිඳිති වලාකුළක් මවයි. නමුත් ජලය අඩු කාලයට එය වඩාත් සන්සුන් සහ පැහැදිලි වන අතර, වනාන්තරයේ සෙවනැලි එහි ජලය මත පරාවර්තනය වීම ඡායාරූප ශිල්පීන්ට කදිම දර්ශනයක් වේ."
      },
      {
        title: language === 'EN' ? "Section 04: The Forest — The Living Setting of the Falls" : "04 වන කොටස: වනාන්තරය — දිය ඇල්ලේ ජීවමාන පරිසරය",
        body: language === 'EN' ?
          "The forest that surrounds Aberdeen Falls is the single most important ecological feature of the site — more significant, in terms of biological value and long-term conservation importance, than the waterfall itself. This intermediate wet zone forest is in excellent condition, historically surviving due to the steepness and inaccessibility of the gorge terrain.\n\nThe species composition is a mixture of wet zone and mid-elevation highland elements. Characteristic trees form the canopy layer, with understorey species of remarkable diversity filling the space beneath them. The fern flora of the gorge is exceptional, with several species of ancient tree fern rising above the path.\n\nThe bird community of the Aberdeen forest is outstanding. The Sri Lanka blue magpie occurs at this altitude and is occasionally encountered. The Sri Lanka grey hornbill, the red-faced malkoha, the green-billed coucal, the brown-headed barbet, and various kingfishers are regularly encountered by visitors who walk the approach path with patience." :
          "ඇබර්ඩීන් ඇල්ල අවට පිහිටි වනාන්තරය මෙහි ඇති වැදගත්ම පාරිසරික ලක්ෂණයයි. ජීව විද්‍යාත්මක වටිනාකම සහ දිගුකාලීන සංරක්ෂණය අතින් බැලූ විට එය දිය ඇල්ලටත් වඩා වටිනාකමකින් යුක්ත වේ. අධික ආනතියකින් යුත් සෙවුම් කළ නොහැකි භූමියක් වීම නිසාම මෙම වනාන්තරය විනාශ වීමෙන් ආරක්ෂා වී ඇත.\n\nමෙහි ශාක ප්‍රජාව මිශ්‍ර තෙත් කලාපීය සහ මධ්‍යම කඳුකරයට ආවේණික ශාකවල එකතුවකි. අනර්ඝ මීවන (Ferns) වර්ග රැසක් මෙහි ඇති අතර ඉපැරණි පෙනුමෙන් යුත් විශාල උසකට වැඩුණු මීවන විශේෂ කිහිපයක් ද දැකගත හැකිය.\n\nඇබර්ඩීන් වනාන්තරයේ පක්ෂිගහනය ඉතා විශිෂ්ටය. ඉතා හිඟ ශ්‍රී ලංකා නිල් මාළුවා (Sri Lanka blue magpie) මෙන්ම ශ්‍රී ලංකා අළු කෑදැත්තා, රතු මුහුණැති මල්කොහා, බට ඇටි කුකුළා ඇතුළු ආවේණික පක්ෂීන් රැසක් අවධානයෙන් යන ගමනකදී දැකගත හැකිය."
      },
      {
        title: language === 'EN' ? "Section 05: The Approach — Getting to the Base of the Falls" : "05 වන කොටස: ප්‍රවේශය — දිය ඇල්ල පාමුලට ළඟාවීම",
        body: language === 'EN' ?
          "The approach to Aberdeen Falls is demanding and critical. The falls are not accessible from a conventional road viewpoint. Reaching the base involves a walk through the forest that takes between forty-five minutes and one and a half hours, navigating steep sections, exposed roots and rocks, and crossing streams.\n\nThe path is not formally maintained. It defined by use rather than construction. In the dry months, the path is negotiable by any reasonably fit walker with appropriate footwear. In the wet months, stream crossings become knee-deep wades, and the path becomes deeply slippery. Visiting after heavy rain requires willingness to turn back if conditions are unsafe.\n\nA local guide is essential. The path is unmarked, and a guide with current knowledge of path conditions, stream levels, and safe navigation provides a safety benefit that is disproportionately valuable where help is not immediately accessible. Guides can be arranged through local accommodation or tour operators." :
          "ඇබර්ඩීන් ඇල්ල වෙත පිවිසීම සාමාන්‍ය දිය ඇලිවලට වඩා අභියෝගාත්මකය. මහා මාර්ගයේ සිට මෙය නැරඹිය නොහැකිය. දිය ඇල්ල පාමුලට ළඟා වීමට නම් කැලය හරහා විනාඩි 45ත් පැය 1 1/2ත් අතර කාලයක් ගතවන, මුල්, ගල් සහ දිය පාරවල් සහිත කඳු බෑවුම් පසුකර යා යුතු වේ.\n\nමෙම ගමන් මාර්ගය විධිමත්ව සකස් කළ එකක් නොවේ. වියළි කාලවලදී සුදුසු සපත්තු පැළඳ සිටින ඕනෑම අයෙකුට පහසුවෙන් ගමන් කළ හැකි වුවද වර්ෂා කාලවලදී ගමන් කිරීම බෙහෙවින් ලිස්සන සුළු සහ අනතුරුදායක විය හැකිය. වර්ෂාවෙන් පසු ගමන අපහසු නම් ආපසු හැරී පැමිණිය හැකි මානසිකත්වයකින් යුතුව යා යුතුය.\n\nමේ ගමනට ප්‍රදේශයේ මගපෙන්වන්නෙකු (Guide) අත්‍යවශ්‍ය වේ. මාර්ග සලකුණු නොමැති නිසාත්, ආරක්ෂාව තහවුරු කිරීමටත් ප්‍රාදේශීය මගපෙන්වන්නෙකුගේ සහය ලබාගැනීම පිරිවැයට වඩා වටිනාකමකින් යුක්තය. ඔබ නැවතී සිටින හෝටලයෙන් මේ සඳහා සහය ලබාගත හැක."
      },
      {
        title: language === 'EN' ? "Section 06: Photography — Resistant to Standard Treatment" : "06 වන කොටස: ඡායාරූපකරණය — අභියෝගාත්මක නමුත් වටිනා අත්දැකීමක්",
        body: language === 'EN' ?
          "Aberdeen Falls presents photographers with unique challenges and rewards. The dense, species-rich tropical forest frames the falls with a biological richness that commercialized falls lack. The challenge lies in low light, high humidity, mist, and the necessity of carrying equipment through a demanding forest walk.\n\nThe most distinctive opportunity is including the forest context in the composition, showing the falls as a feature of a specific, living forest. This requires a wider angle of view, making the white cascade an element in a scene dominated by green and shadow. The filtered, dappled tropical light is beautiful when managed correctly." :
          "ඇබර්ඩීන් ඇල්ල ඡායාරූපකරණය අභියෝග මෙන්ම ප්‍රීතිමත් අත්දැකීමක් ද ලබාදෙයි. වාණිජකරණය වූ දිය ඇලිවල අහිමි වී ගිය ඝන, ජෛව විවිධත්වයෙන් යුතු ස්වාභාවික පසුබිම මෙහිදී ඡායාරූපවලට අපූරු වටිනාකමක් එක් කරයි. අඩු ආලෝකය, අධික තෙතමනය සහ මීදුම අතරේ උපකරණ ආරක්ෂා කරගනිමින් මේ ගමන යාම ඡායාරූප ශිල්පීන්ට අභියෝගයකි.\n\nහොඳම ඡායාරූපයක් ලබාගැනීම සඳහා දිය ඇල්ල පමණක් රාමු කරනු වෙනුවට, එය වටා ඇති ස්වාභාවික වනාන්තරය ද ඡායාරූපයට එක්කර ගැනීම වැදගත්ය. ඒ සඳහා Wide-angle කාච භාවිතා කිරීම වඩාත් උචිත වේ. පෙරී එන හිරු එළිය සහ වනාන්තරයේ සෙවනැලි ඡායාරූපයේ කලාත්මක ස්වභාවය තවත් ඉස්මතු කරයි."
      },
      {
        title: language === 'EN' ? "Section 07: The Kelani Valley — Landscape Understanding" : "07 වන කොටස: කැළණි නිම්නය — භූමි දර්ශනය අවබෝධ කරගැනීම",
        body: language === 'EN' ?
          "Aberdeen Falls sits at the edge of the Kelani River valley. The Kelani Ganga descends from the central highland massif, feeding agricultural communities and passing through gem-mining areas before reaching Colombo. The falls exist exactly where the Kehelgamu Oya tributary commits to the valley below.\n\nThe landscape of the Kelani Valley near Ginigathena is dramatically wild. The drive reveals successive views of intact forest rising from the river to the ridgeline. The river communities represent a way of life adapted to the highland river valley's specific conditions, using seasonal floods for irrigation and gravel beds for gem prospecting." :
          "ඇබර්ඩීන් ඇල්ල පිහිටා ඇත්තේ කැළණි ගඟේ නිම්නයක කෙළවරට වන්නටය. මධ්‍යම කඳුකරයෙන් පහළට බසිමින්, කෘෂිකාර්මික සහ මැණික් පතල් කර්මාන්තයට දායක වෙමින්, කැළණි ගඟ කොළඹ හරහා මුහුදට ගලා බසියි. කෙහෙල්ගමුව ඔය කැළණි නිම්නයට එක්වන්නේ මේ අලංකාර දිය ඇල්ල නිර්මාණය කරමිනි.\n\nගිනිගත්හේන ආසන්නයේ කැළණි නිම්නයේ භූ දර්ශන ඉතා වනගත සුන්දරත්වයකින් යුක්තය. රිය ගමන අතරතුරදී ගඟේ සිට කඳුවැටිය දක්වා විහිදෙන වනාන්තරවල අපූරු දසුන් දැකගත හැකිය. නිම්න ආශ්‍රිත ජනතාව සියවස් ගණනාවක් තිස්සේ මැණික් ගැරීම සහ කෘෂිකර්මාන්තය සඳහා මෙම නිම්නයේ ජලයට අනුගතව ජීවත් වෙති."
      },
      {
        title: language === 'EN' ? "Section 08: Practical Information" : "08 වන කොටස: ප්‍රායෝගික තොරතුරු",
        body: language === 'EN' ?
          "Height of falls: ~98 metres | Approach walk: 45 min – 1.5 hrs each way | Nearest town: Ginigathena / Hatton\n\nThere is no formal entry ticket system and no managed tourist infrastructure at the site. Engage a local guide through your accommodation in Ginigathena, Hatton, or Kitulgala. Appropriate footwear is absolutely essential. Carry adequate water and snacks for the round trip.\n\nDo not attempt the visit without a guide. Assess conditions before committing to the approach, and allow a full morning for the entire visit. Leeches are common, so applying DEET-based repellent and wearing appropriate clothing is highly advised." :
          "දිය ඇල්ලේ උස: මීටර් 98 පමණ | ගමන් කාලය: එක පැත්තකට විනාඩි 45 - පැය 1.5 | ආසන්නතම නගරය: ගිනිගත්හේන / හැටන්\n\nමෙහි විධිමත් ප්‍රවේශපත්‍ර ක්‍රමයක් හෝ සංචාරක යටිතල පහසුකම් නොමැත. ගිනිගත්හේන, හැටන් හෝ කිතුල්ගලින් ප්‍රාදේශීය මගපෙන්වන්නෙකු සොයාගැනීම අත්‍යවශ්‍ය වේ. ගමන් අඩිපාරට ඔරොත්තු දෙන හොඳ සපත්තු පැළඳීම අනිවාර්ය වන අතර ගමනට අවශ්‍ය තරම් ජලය සහ සුළු කෑම වර්ග රැගෙන යාම වැදගත්ය.\n\nමගපෙන්වන්නකු නොමැතිව ගමනට සහභාගී නොවන්න. කාලගුණික තත්ත්වයන් පරීක්ෂා කර සම්පූර්ණ උදෑසන කාලයම මේ සඳහා වෙන් කරන්න. කූඩැල්ලන්ගෙන් ආරක්ෂා වීමට අවශ්‍ය ආලේපන සහ සුදුසු ඇඳුම් පැළඳුම් භාවිත කිරීම නිර්දේශ කෙරේ."
      },
      {
        title: language === 'EN' ? "Section 09: Best Time to Visit — The Southwest Monsoon" : "09 වන කොටස: සංචාරයට සුදුසුම කාලය — නිරිතදිග මෝසම",
        body: language === 'EN' ?
          "Aberdeen Falls is uniquely optimal during the southwest monsoon months (May through September) when the flow is most dramatically powerful. The Kehelgamu Oya receives the maximum rainfall during this time, producing a roar of sound and spray that is genuinely overwhelming.\n\nHowever, this is also when the approach path is wettest, with deep stream crossings and slippery clay sections. A monsoon visit requires an honest assessment of fitness and a willingness to treat the approach with respect. Without preparation, it can be dangerous.\n\nThe drier months from January through April offer the easiest path conditions. While the waterfall's volume is reduced, the experience is more manageable, making this a great introductory visit for those who haven't walked highland forest paths before." :
          "ඇබර්ඩීන් ඇල්ලේ උපරිම සුන්දරත්වය දැකගත හැකි වන්නේ නිරිතදිග මෝසම් වර්ෂා කාලයේදීය (මැයි සිට සැප්තැම්බර් දක්වා). මේ කාලයේදී කෙහෙල්ගමුව ඔයේ ජල මට්ටම ඉහළ යාම හේතුවෙන් දිය ඇල්ලෙන් නැගෙන ශබ්දය සහ ජල බිඳිති ඉතා ප්‍රබල තත්ත්වයක පවතී.\n\nනමුත් අභියෝගය වන්නේ අධික වර්ෂාවත් සමඟ ගමන් මාර්ගයේ අපහසුතා වැඩි වීමයි. මඩ සහ දිය පාරවල් හරහා ගමන් කිරීම ඉතා දුෂ්කර බැවින් ශාරීරික යෝග්‍යතාව සහ සූදානම පිළිබඳව දෙවරක් සිතා බැලිය යුතුය. නිසි සූදානමක් නොමැතිව යාම අනතුරුදායක විය හැක.\n\nජනවාරි සිට අප්‍රේල් දක්වා වියළි කාලය ගමන පහසු කරවයි. දිය ඇල්ලේ ජල ප්‍රමාණය අඩු වුවද, ආරක්ෂාකාරීව සහ පහසුවෙන් ගමනාන්තයට ළඟා වීමට කැමති අයට මෙය වඩාත් සුදුසු කාල සීමාවක් වේ."
      },
      {
        title: language === 'EN' ? "Section 10: Getting There — Reaching Aberdeen Falls" : "10 වන කොටස: ළඟා වන ආකාරය — ඇබර්ඩීන් ඇල්ල වෙත ගමන",
        body: language === 'EN' ?
          "The nearest significant town is Ginigathena, approximately 15 km from Hatton. The journey by road takes about 25 minutes from Hatton, descending through a scenic transition zone of tea estates into the Kelani Valley.\n\nFrom Colombo, Aberdeen Falls is approximately 125 km (2.5 to 3 hours). The direct route follows the A7 highway through Avissawella, Kitulgala, and Ginigathena, offering some of the most scenic mid-altitude driving in the west.\n\nKitulgala is also an alternative base, around 25 km away, letting visitors combine river adventure with the Aberdeen forest trek." :
          "ආසන්නතම ප්‍රධාන නගරය හැටන් නගරයේ සිට කිලෝමීටර් 15ක් දුරින් පිහිටි ගිනිගත්හේනයි. හැටන් සිට වාහනයකින් විනාඩි 25කින් පමණ මෙහි ළඟා විය හැකි අතර, තේ වතු ආශ්‍රිත සුන්දර කඳු පල්ලම් පිරි කැළණි නිම්න මාර්ගය එහිදී ඔබට හමුවේ.\n\nකොළඹ සිට කිලෝමීටර් 125ක් පමණ වන මෙම ගමනට පැය 2 1/2 සිට පැය 3ක් පමණ ගතවේ. අවිස්සාවේල්ල, කිතුල්ගල සහ ගිනිගත්හේන හරහා A7 මාර්ගයේ ඇති රිය ගමන බස්නාහිර පළාතේ ඇති සුන්දරම කඳුකර ගමන් මාර්ගයකි.\n\nදිය ඇල්ලට කිලෝමීටර් 25ක් දුරින් පිහිටි කිතුල්ගල ප්‍රදේශය ද ගමන ආරම්භ කිරීමට හොඳ තෝතැන්නකි. එමඟින් ඇබර්ඩීන් ඇල්ලේ වනගත ගමන මෙන්ම කිතුල්ගල ජල ක්‍රීඩා අත්දැකීම් ද එකවර ලබාගැනීමට සංචාරකයින්ට අවස්ථාව ලැබේ."
      },
      {
        title: language === 'EN' ? "Section 11: Nearby Attractions — Kitulgala and Kelani Valley" : "11 වන කොටස: අවට ආකර්ෂණීය ස්ථාන — කිතුල්ගල සහ කැළණි නිම්නය",
        body: language === 'EN' ?
          "Kitulgala is the natural companion destination. It is famous for white-water rafting, kayaking, and its association with the 1957 film 'Bridge on the River Kwai'. Combining Kitulgala adventures with the Aberdeen trek provides a diverse experience.\n\nThe highland pass at Ginigathena is a landmark transition between two of Sri Lanka's distinctive landscape types, offering dramatic views. Roadside gem mining and sales provide a colorful introduction to the region's geological richness." :
          "කිතුල්ගල යනු ඇබර්ඩීන් ඇල්ලට සමාන්තරව සංචාරය කළ යුතුම ප්‍රදේශයකි. 1957 'Bridge on the River Kwai' චිත්‍රපටයේ පසුබිම මෙන්ම, Water Rafting සහ Kayaking වැනි ක්‍රියාදාම ජල ක්‍රීඩා සඳහා ද කිතුල්ගල ප්‍රසිද්ධය. ඇබර්ඩීන් ඇල්ල සමඟ මෙම ත්‍රාසජනක අත්දැකීම ලබාගැනීම සංචාරයේ වටිනාකම වැඩි කරයි.\n\nගිනිගත්හේන කඳුකර දුර්ගය, ශ්‍රී ලංකාවේ භූ දර්ශන කලාප දෙකක් වෙන්කරන ප්‍රධාන සන්ධිස්ථානයක් වන අතර, එයින් දිස්වන දර්ශන අතීශය සුන්දරය. මාර්ගය දෙපස ඇති මැණික් ගැරීම් කර්මාන්ත සහ වෙළෙඳසැල් කලාපයේ ඇති භූ විද්‍යාත්මක වැදගත්කම කියාපායි."
      },
      {
        title: language === 'EN' ? "Section 12: Final Thoughts — The Waterfall That Keeps Its Own Counsel" : "12 වන කොටස: අවසන් අදහස — නිහඬව සැඟවුණු ස්වාභාවික ආශ්චර්යය",
        body: language === 'EN' ?
          "Aberdeen Falls belongs to a category of natural sites that exist at the edge of the known — not completely remote but sufficiently off the established path to preserve a quality of genuine discovery.\n\nIts integrity is entirely preserved because the threshold of effort deters the standard tourist crowds. The falls on the other side of that threshold are extraordinary. The walk into the spray — the roar and the white column above the canopy — is a profoundly rewarding experience.\n\nAberdeen Falls is waiting at the end of the forest path, having fallen into the Kelani Valley long before the roads were built. Earning the approach will offer an encounter with 98 metres of intact tropical highland water entirely on its own terms — an increasingly rare and precious find." :
          "ඇබර්ඩීන් ඇල්ල යනු ප්‍රකට මාවතේ සිට තරමක් දුරින් නිහඬව, සැඟවී ජීවමානව පවතින ස්වාභාවික අපූර්වත්වයන්ගෙන් යුත් ස්ථානයකි.\n\nගමනේ දුෂ්කර බව නිසාම සෙනඟින් අඩුවීමෙන්, එහි ස්වාභාවිකත්වය උපරිමව ආරක්ෂා වී ඇත. මාර්ගය අවසානයේ ඔබව පිළිගන්නා මෙම සුවිශාල දිය හැලියත්, එම හඬත්, මීදුමත් ජීවිතයේ අමතක නොවන අත්දැකීමක් වනු නොඅනුමානය.\n\nමාර්ග ඉදිවීමට පෙර සිටම කැළණි නිම්නයට කඩා හැලුණු ඇබර්ඩීන් ඇල්ල අදටත් එම වන පියස කෙළවර ඔබ එනතුරු බලා සිටියි. නිසි මගපෙන්වීමක් සහිතව, වෙහෙසක් දරා එහි ළඟාවන ඔබට ශ්‍රී ලංකා භූමියේ කලාතුරකින් දැකගත හැකි ස්වභාවික අරුමයක් වන මීටර් 98ක නිදහස් ජලස්කන්ධයක ගාම්භීරත්වය විඳගැනීමට අවස්ථාව සැලසෙනු ඇත."
      }
    ]
  };

  return (
    <div className="space-y-20">
      <header className="mb-20 border-b border-[#5A5A40]/10 pb-12">
        <span className="text-[11px] uppercase tracking-[0.5em] text-[#5A5A40]/60 font-medium">Highland Waterfall</span>
        <h1 className="text-5xl md:text-7xl font-light tracking-tighter mt-6 mb-6 text-[#2d2d2d]">{content.title}</h1>
        <h2 className="text-2xl font-light text-[#2d2d2d]/70">{content.subtitle}</h2>
        <p className="text-sm text-[#2d2d2d]/50 mt-4 max-w-xl">{content.description}</p>
      </header>
      
      <div className="space-y-20">
        {content.sections.map((section, index) => (
          <section key={index} className="grid md:grid-cols-[200px,1fr] gap-8">
            <h3 className="text-[11px] uppercase tracking-[0.3em] text-[#5A5A40]/50 pt-2">{section.title.split('—')[0].trim()}</h3>
            <div className="space-y-4">
              <h4 className="text-2xl md:text-3xl font-semibold text-black">{section.title.split('—')[1]?.trim() || section.title.split(':')[1]?.trim() || ''}</h4>
              <p className="text-[#2d2d2d]/80 leading-relaxed font-light whitespace-pre-line">
                {section.body.split('\n\n').map((paragraph, pIndex) => (
                  <React.Fragment key={pIndex}>
                    <span className={paragraph.startsWith('"') || paragraph.startsWith('\"') ? 'text-xl md:text-2xl italic border-l-4 border-[#5A5A40] pl-6 my-10 font-medium block' : ''}>
                      {paragraph}
                    </span>
                    {pIndex < section.body.split('\n\n').length - 1 && <><br /><br /></>}
                  </React.Fragment>
                ))}
              </p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default AboutAberdeenFalls;
