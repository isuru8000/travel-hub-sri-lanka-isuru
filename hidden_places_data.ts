import { HiddenPlace } from './types';

export const HIDDEN_PLACES: Record<string, HiddenPlace[]> = {
  /*
    Template to add new hidden places:
    "destinationId": [
      {
        id: "unique-id",
        name: { EN: "English Name", SI: "සිංහල නම" },
        image: "image_url",
        description: { EN: "Description in English", SI: "විස්තරය සිංහලෙන්" },
        location: "Location"
      }
    ],
  */

  "sigiriya": [
    {
      id: "sigiriya-gem1",
      name: { EN: "Boulder Garden Secret Cave", SI: "පාෂාණ උද්‍යානයේ රහස් ගුහාව" },
      image: "https://images.unsplash.com/photo-150208221f6e7-7518d844c9b9?q=80&w=600&auto=format&fit=crop",
      description: { EN: "A secluded small cave tucked away in the boulder gardens, rarely visited by tourists, offering a peaceful meditation spot.", SI: "සංචාරකයන්ගේ අවධානයට ලක් නොවන, පාෂාණ උද්‍යානය තුළ සැඟවුණු නිහඬ ගුහාවකි." },
      location: "Sigiriya Boulder Gardens",
      coordinates: { lat: 7.9571, lng: 80.7600 },
      discoveryLevel: 4,
      accessibility: ['hiking', 'moderate'],
      mapUrl: "https://maps.app.goo.gl/example1"
    }
  ],
  "yala": [
    {
      id: "yala-gem1",
      name: { EN: "The Hidden Waterhole", SI: "සැඟවුණු දිය මංකඩ" },
      image: "https://images.unsplash.com/photo-1590486803838-7fd859bc0607?q=80&w=600&auto=format&fit=crop",
      description: { EN: "A small, natural waterhole far from the main safari tracks where elusive leopards often come to drink.", SI: "ප්‍රධාන මාර්ගවලින් බැහැරව පිහිටා ඇති, දිවියන් ජලය පානය කිරීමට පැම්ණෙන සැඟවුණු දිය මංකඩකි." },
      location: "Yala Block 5",
      coordinates: { lat: 6.3654, lng: 81.5160 },
      discoveryLevel: 5,
      accessibility: ['4x4', 'difficult'],
      mapUrl: "https://maps.app.goo.gl/example2"
    }
  ]
};
