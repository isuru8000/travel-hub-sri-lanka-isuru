import React from 'react';
import { Language } from '../types';

interface AboutBakersFallsProps {
  language: Language;
}

const AboutBakersFalls: React.FC<AboutBakersFallsProps> = ({ language }) => {
  const content = {
    title: language === 'EN' ? "Complete Travel Guide — Baker's Falls" : "සම්පූර්ණ සංචාරක මාර්ගෝපදේශය — බේකර්ස් ඇල්ල",
    subtitle: language === 'EN' ? "The cloud forest waterfall of Horton Plains — a 20-meter cascade enclosed in ancient mossy forest at the heart of Sri Lanka's most celebrated highland plateau walk" : "හෝර්ටන් තැන්නේ වලාකුළු වනාන්තර දියඇල්ල — ශ්‍රී ලංකාවේ වඩාත්ම ප්‍රසිද්ධ කඳුකර සානුවේ ඇවිදීමේ මාර්ගය අද්දර පිහිටි පාසි සහිත පුරාණ වනාන්තරයකින් වටවූ මීටර් 20ක දියඇල්ල",
    description: language === 'EN' ? "Horton Plains National Park, Nuwara Eliya District • UNESCO World Heritage Site • Within the Horton Plains circuit trail • 2,100 m elevation" : "හෝර්ටන් තැන්න ජාතික වනෝද්‍යානය, නුවරඑළිය දිස්ත්‍රික්කය • යුනෙස්කෝ ලෝක උරුම අඩවිය • හෝර්ටන් තැන්න පරිපථ මාවත තුළ • උස මීටර් 2,100",
    sections: [
      {
        title: language === 'EN' ? "Section 01: Introduction — The Falls Within the Plateau" : "01 වන කොටස: හැඳින්වීම — සානුව තුළ ඇති දියඇල්ල",
        body: "Baker's Falls is the most celebrated waterfall within Horton Plains National Park, encountered approximately halfway along the standard circuit trail that connects the park entrance at Pattipola with the dramatic escarpment viewpoint of World's End. It descends approximately 20 meters over a series of rock faces in the valley of the Belihul Oya, surrounded by the densest and most ecologically ancient section of cloud forest on the plateau, and it offers an experience of enclosed, intimate, forest-framed waterfall beauty that is entirely different in character from the open dramatic scale of Bambarakanda or the sheer height of Diyaluma. Where those falls are defined by their overwhelming vertical dimension and their relationship with the cliff and the sky above them, Baker's Falls is defined by the forest that encloses it — the mossy trees, the fern-draped boulders, the filtered green light, and the quality of cool seclusion that makes the arrival at the falls after the open exposure of the World's End escarpment feel like entering a completely different world within the same half-day walk.\n\nThe falls are named after Sir Samuel Baker, the British explorer and naturalist who visited the Horton Plains plateau in the 1840s and who documented his experiences in the published account of his Ceylon travels that brought the highland landscape to the attention of the British reading public. Baker was among the first Europeans to describe the plateau's extraordinary character in detail — its open grasslands, its dramatic escarpment, its cloud forest, and its wildlife — and his name has been attached to both the falls and to several species of highland flora and fauna as a memorial to his early documentation of the Horton Plains ecology.\n\nBaker's Falls is not a standalone destination in the sense that Bambarakanda or Diyaluma are — it is a feature of the Horton Plains circuit trail rather than the primary destination of a dedicated visit, and it is most meaningfully experienced as part of the full plateau walk that begins at the park entrance, traverses the open grassland to World's End, and returns via the falls and the forest sections of the trail. This integration with the broader Horton Plains experience gives Baker's Falls a contextual richness that purely isolated waterfall visits cannot provide."
      },
      {
        title: language === 'EN' ? "Section 02: History — Sir Samuel Baker and the Horton Plains Exploration" : "02 වන කොටස: ඉතිහාසය — ශ්‍රීමත් සැමුවෙල් බේකර් සහ හෝර්ටන් තැන්නේ ගවේෂණය",
        body: "Sir Samuel Baker arrived in Ceylon in 1845 as a young man of twenty-two, having come to the island with the initially practical purpose of establishing an agricultural settlement in the highland interior for British emigrants. He explored the Horton Plains plateau with the thoroughness and the genuine naturalistic curiosity of someone who was paying close attention to the landscape rather than simply passing through it. His account of the plateau, published in his 1853 book about Ceylon, was one of the first extended descriptions of the Horton Plains landscape and its natural character to reach a wider audience, and it established many of the features — the World's End escarpment, the open grasslands, the cloud forest and its wildlife — that subsequent visitors and naturalists would describe and study in more detail.\n\nThe Horton Plains plateau on which Baker walked in the 1840s was, in its essential ecological character, much the same landscape that visitors encounter today — the same open grasslands, the same cloud forest patches, the same dramatic escarpment — though the specific ecological condition of the plateau has been significantly altered by the subsequent introduction of exotic tree species, the effects of tea plantation encroachment at the plateau margins, and the impacts of the recreational and pilgrimage use that the site now receives in very much larger numbers than Baker and his contemporaries would have contemplated."
      },
      {
        title: language === 'EN' ? "Section 03: The Falls — Character and Description" : "03 වන කොටස: දියඇල්ල — දියඇල්ලේ ස්වභාවය සහ විස්තරය",
        body: "Baker's Falls descends approximately 20 meters over a series of rocky steps in the valley of the Belihul Oya, the stream that drains the central section of the Horton Plains plateau and descends from the escarpment edge on the southern side of the park. The falls are not a single sheer drop in the manner of Bambarakanda or Diyaluma but a more complex multi-stage cascade that tumbles over a sequence of rock faces and ledges before collecting in the pool at the base — a form that is both more intimate in scale and more varied in character than the single unbroken plunge of the great highland waterfalls. The water in the Belihul Oya at Baker's Falls is cold and clear, reflecting the highland catchment from which it comes and the filtering of the forest floor through which it passes before reaching the falls.\n\nThe volume of water at Baker's Falls varies with the season and the recent rainfall. At its peak, following heavy rain on the plateau, the falls expand to a wider and more turbulent cascade that fills more of the rock face width and produces a continuous mist of fine spray that extends well beyond the immediate base pool. At lower flows, the falls narrow to a cleaner, more defined column that reveals the detailed texture and coloring of the underlying rock — the dark metamorphic stone streaked with the white and gold of mineral veins and the green and black of lichen growth."
      },
      {
        title: language === 'EN' ? "Section 04: The Cloud Forest Setting" : "04 වන කොටස: වලාකුළු වනාන්තර පසුබිම",
        body: "The most distinctive and most ecologically significant feature of the Baker's Falls experience is not the falls themselves but the cloud forest that encloses them — one of the finest and most intact sections of highland montane forest in Sri Lanka, growing in the sheltered valley of the Belihul Oya. This forest is what makes Baker's Falls genuinely special among Sri Lankan waterfalls — not its height or its volume or its visual drama but the quality of the natural environment that surrounds it.\n\nThe trees of the Baker's Falls cloud forest are the species characteristic of the upper montane wet zone of the Sri Lankan highlands — Calophyllum walkeri, Syzygium rotundifolium, Gordonia speciosa, and other endemic and near-endemic species. These trees grow slowly in the cool, cloud-saturated conditions of the plateau and are consequently old relative to their modest height. The moss and lichen community of the Baker's Falls forest is of extraordinary richness and includes numerous endemic and rare species found only in the montane cloud forest zone of Sri Lanka. Every surface is covered in a community of mosses of different species, textures, and colors that creates a visual impression of complete biological occupation of every available substrate."
      },
      {
        title: language === 'EN' ? "Section 05: Wildlife at Baker's Falls" : "05 වන කොටස: බේකර්ස් ඇල්ලේ වනජීවීන්",
        body: "The Baker's Falls section of the Horton Plains circuit trail is one of the most productive sections for wildlife observation on the full walk, particularly for bird species associated with the cloud forest habitat. The Sri Lanka whistling thrush, one of the most sought-after and most beautiful of Sri Lanka's highland endemic birds, inhabits the stream-side forest in the Baker's Falls valley and is regularly encountered by visitors who move slowly and quietly through this section of the trail.\n\nThe sambar deer of Horton Plains occasionally descend to the stream in the Baker's Falls valley for water, and encounters with deer in the forest around the falls are somewhat more intimate and closer in range than the open-grassland encounters that are more typical on the plateau sections of the trail."
      },
      {
        title: language === 'EN' ? "Section 06: The Horton Plains Circuit — Baker's Falls in Context" : "06 වන කොටස: හෝර්ටන් තැන්න පරිපථය — සන්දර්භය තුළ බේකර්ස් ඇල්ල",
        body: "Baker's Falls is most meaningfully experienced as part of the full Horton Plains circuit trail rather than as an isolated destination. The standard circuit from the Pattipola park entrance covers approximately nine kilometers and takes three to four hours at a moderate pace, visiting World's End and Little World's End on the southern escarpment before returning via Baker's Falls and the forest sections of the return route. This sequence — open grassland to escarpment to cloud forest to falls — is the most satisfying order in which to experience the plateau's contrasting habitats."
      },
      {
        title: language === 'EN' ? "Section 07: The Belihul Oya Stream — Above and Below the Falls" : "07 වන කොටස: බඹරකන්ද ඔය සහ දියඇල්ල — පහළ ඇති ස්වාභාවික ගලන මාර්ගය",
        body: "The Belihul Oya that feeds Baker's Falls is one of the principal streams draining the Horton Plains plateau and one of the headwater tributaries of the Walawe Ganga. The ecological significance of the Horton Plains plateau as a watershed for the rivers of the southern Sri Lankan lowlands is perhaps most directly understood by following the course of the Belihul Oya from its origins in the plateau grasslands above the falls, through the cloud forest of the Baker's Falls valley, over the falls, and then descending through the forest below the Horton Plains boundary toward the lowland river system far below."
      },
      {
        title: language === 'EN' ? "Section 08: Photography at Baker's Falls" : "08 වන කොටස: ඡායාරූපකරණය — බේකර්ස් ඇල්ලේ සුන්දරත්වය",
        body: "Baker's Falls is one of the most photographically rewarding waterfall subjects in Sri Lanka, not because of the dramatic vertical scale of Bambarakanda or the raw power of Diyaluma in flood, but because of the exceptional quality of the surrounding natural environment and the way the falls interact with the cloud forest light and the mossy rock surfaces of the valley. A wide-angle lens of approximately 16 to 24mm is the most useful focal length, and a tripod is highly recommended for the long-exposure waterfall effect. The most reliable strategy is to arrive at the falls with adequate time and a tripod and to shoot in whatever light conditions are present."
      },
      {
        title: language === 'EN' ? "Section 09: Practical Information" : "09 වන කොටස: ප්‍රායෝගික තොරතුරු",
        body: "Baker's Falls is accessible only as part of the Horton Plains National Park circuit trail. There is no separate admission or additional charge for the falls section of the trail. The park entry fee covers the full circuit including the falls. All visitors are accompanied by a ranger escort throughout the walk. The park entrance at Pattipola is reached by road from Nuwara Eliya — approximately one hour by road.\n\nTemperature: 8–16°C • cold and windy at times • warm layers essential"
      },
      {
        title: language === 'EN' ? "Section 10: Baker's Falls vs Other Horton Plains Waterfalls" : "10 වන කොටස: බේකර්ස් ඇල්ල සහ අනෙකුත් හෝර්ටන් තැන්නේ දියඇලි",
        body: "Several smaller cascades occur along the various stream channels of the plateau where the gradient increases or the stream crosses harder rock bands. While none of them approaches Baker's Falls in scale or ecological setting, they contribute to the general quality of the plateau's water landscape. The falls collectively encountered on the Horton Plains circuit provide a complete spectrum of highland waterfall character — from the smallest trickles to the full development of Baker's Falls."
      },
      {
        title: language === 'EN' ? "Section 11: The Experience Through the Seasons" : "11 වන කොටස: වසරේ විවිධ කාලවල අත්දැකීම",
        body: "The character of Baker's Falls section changes noticeably across the year. During the drier months between January and April, the forest around the falls has a quality of particular luminosity. The wetter months, when the northeast monsoon brings regular rain to the plateau, transform the section into a different and in many ways more dramatic environment. The transition periods — April to May and October to November — bring the most unpredictable conditions and can produce the most atmospheric and most visually dramatic cloud forest experiences."
      },
      {
        title: language === 'EN' ? "Section 12: Where to Stay — Bases for a Horton Plains Visit" : "12 වන කොටස: නැවතීමේ පහසුකම් — හෝර්ටන් තැන්නට යාමට හොඳම පදනම්",
        body: "Accommodation options for this visit are the same as for any Horton Plains trip — Nuwara Eliya to the north, Haputale to the southeast, or Ella somewhat further east. Nuwara Eliya has the closest road access and the widest range of accommodation, making it the most convenient base for early morning entry. Visitors combining the Horton Plains circuit with a broader Uva highland itinerary that includes Ella, Haputale, and the highland waterfalls will find that a two-night Horton Plains base gives the most complete and least rushed engagement."
      },
      {
        title: language === 'EN' ? "Section 13: Tips for Experiencing Baker's Falls at Its Best" : "13 වන කොටස: බේකර්ස් ඇල්ලේ හොඳම අත්දැකීමක් ලබා ගැනීමට උපදෙස්",
        body: "Do not rush through the cloud forest to reach the falls. Walk at half speed, stop frequently, look closer. Bring a tripod if photography is important. Spend at least fifteen minutes at the falls rather than the five that the hurried walkers typically allocate. Before you leave, stand at the pool's edge and listen to the sound of the falls in the forest silence for a full minute—an experience you wouldn't want to miss."
      }
    ]
  };

  return (
    <div className="space-y-20">
      <header className="mb-20 border-b border-[#5A5A40]/10 pb-12">
        <span className="text-[11px] uppercase tracking-[0.5em] text-[#5A5A40]/60 font-medium">Horton Plains Waterfall</span>
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
              <p className="text-[#2d2d2d]/80 leading-relaxed font-light whitespace-pre-line">{section.body}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default AboutBakersFalls;
