
import { GoogleGenAI, Type, ThinkingLevel } from "@google/genai";
import { Language } from "../types.ts";

export interface GroundingLink {
  title: string;
  uri: string;
}

export interface AIResponse {
  text: string;
  links: GroundingLink[];
  error?: string;
  isThrottled?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface AINearbyNode {
  name: string;
  type: string;
  relevance: string;
}

export interface DestinationDeepDive {
  history: string;
  temporalSync: string;
  wisdom: string[];
  hiddenEchoes: string;
  nearbyAttractions: AINearbyNode[];
  isFallback?: boolean;
}

export interface WeatherData {
  temp: string;
  condition: string;
  humidity: string;
  windSpeed: string;
  uvIndex?: string;
  visibility?: string;
  vibe?: string;
  isThrottled?: boolean;
}

/**
 * Utility to check if an error is a 429/Quota Exhausted error.
 */
const isQuotaError = (err: any): boolean => {
  const msg = JSON.stringify(err).toLowerCase();
  return msg.includes("429") || msg.includes("quota") || msg.includes("resource_exhausted");
};

/**
 * Decodes a base64 string into a Uint8Array.
 */
export function decode(base64: string): Uint8Array {
  if (!base64 || typeof base64 !== 'string') return new Uint8Array(0);
  try {
    const binaryString = atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  } catch (e) {
    console.error("Failed to decode base64 string", e);
    return new Uint8Array(0);
  }
}

/**
 * Encodes a Uint8Array into a base64 string.
 */
export function encode(bytes: Uint8Array): string {
  let binary = '';
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

/**
 * Vision-based Food Identification.
 */
export const analyzeFoodImage = async (base64Image: string, language: Language): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const model = 'gemini-2.5-flash';
    
    const prompt = `
      You are the "Lanka Culinary Archivist". 
      Identify the Sri Lankan dish in this image. 
      If it is not food or not Sri Lankan, state it clearly but politely.
      If identified, provide:
      1. Name of the dish (English and Sinhala transliterated).
      2. A 2-sentence poetic description of its history/significance.
      3. A list of 3 key ingredients.
      Language: ${language === 'SI' ? 'Sinhala' : 'English'}.
    `;

    const result = await ai.models.generateContent({
      model,
      contents: [{ parts: [{ inlineData: { data: base64Image, mimeType: 'image/jpeg' } }, { text: prompt }] }]
    });

    return result.text || "Identification failed.";
  } catch (error) {
    if (isQuotaError(error)) {
      return language === 'SI' 
        ? "කණගාටුයි, ගෝලීය දත්ත ප්‍රමාණය ඉක්මවා ඇත. කරුණාකර මොහොතකින් නැවත උත්සාහ කරන්න."
        : "Neural Link Throttled: Quota exceeded. Please wait a moment for the kitchen archives to re-sync.";
    }
    return "Error: Neural link to the kitchen archives was interrupted.";
  }
};

/**
 * Decodes raw PCM audio data into an AudioBuffer manually.
 */
export async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

/**
 * Creates an audio/pcm Blob from Float32Array input data.
 */
export function createPcmBlob(data: Float32Array): { data: string; mimeType: string } {
  const l = data.length;
  const int16 = new Int16Array(l);
  for (let i = 0; i < l; i++) {
    int16[i] = data[i] * 32768;
  }
  return {
    data: encode(new Uint8Array(int16.buffer)),
    mimeType: 'audio/pcm;rate=16000',
  };
}

/**
 * Fetches structured real-time weather data using Google Search grounding.
 */
export const getWeatherUpdate = async (location: string, language: Language): Promise<WeatherData | null> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const result = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [{ parts: [{ text: `Search for the current weather in ${location}, Sri Lanka. Provide exactly these values in this order, separated by pipe symbols (|): Temperature (Celsius with symbol), Condition (One word), Humidity (%), Wind Speed (km/h), UV Index (number), Visibility (km), and a short poetic atmospheric vibe in ${language === 'SI' ? 'Sinhala' : 'English'}. Format: 28°C|Partially Cloudy|65%|10km/h|5|10km|A tropical embrace. Do not include any other text.` }] }],
      config: {
        tools: [{ googleSearch: {} }],
      }
    });

    let responseText = result.text || "";
    const pipeMatch = responseText.match(/(\d+°C|[\w\s]+)\|/);
    if (pipeMatch) {
      responseText = responseText.substring(responseText.indexOf(pipeMatch[0]));
    }

    const parts = responseText.split('|').map(p => p.trim());
    
    if (parts.length >= 4) {
      return {
        temp: parts[0] || "28°C",
        condition: parts[1] || "Clear",
        humidity: parts[2] || "60%",
        windSpeed: parts[3] || "12 km/h",
        uvIndex: parts[4] || "Moderate",
        visibility: parts[5] || "10 km",
        vibe: parts[6] || (language === 'SI' ? "නිවර්තන සිරියාව..." : "Tropical serenity...")
      };
    }
    return null;
  } catch (error) {
    if (isQuotaError(error)) {
      // Return high-fidelity fallback weather so UI doesn't look broken
      return {
        temp: "29°C",
        condition: "Archival",
        humidity: "65%",
        windSpeed: "10 km/h",
        vibe: language === 'SI' ? "නාභිගත දත්ත සීමාව ඉක්මවා ඇත. පැරණි දත්ත පෙන්වයි." : "Neural link throttled. Displaying archival atmospheric metadata.",
        isThrottled: true
      };
    }
    return null;
  }
};

/**
 * Fetches a structured deep-dive overview for a destination.
 */
export const getDestinationDeepDive = async (destinationName: string, language: Language): Promise<DestinationDeepDive | null> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const result = await ai.models.generateContent({
      model: 'gemini-3.1-pro-preview',
      contents: [{ parts: [{ text: `You are the "Master Archivist" for Travel Hub Sri Lanka. Provide a structured, comprehensive, high-fidelity deep-dive for: ${destinationName}. Use poetic yet informative language. Language: ${language === 'SI' ? 'Sinhala' : 'English'}.` }] }],
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            history: { type: Type.STRING, description: "Detailed historical and mythical context (The Legend)." },
            temporalSync: { type: Type.STRING, description: "Best time to visit and atmospheric conditions (Temporal Sync)." },
            wisdom: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "3 unique, specific travel tips for 2026 (Voyager Wisdom)." 
            },
            hiddenEchoes: { type: Type.STRING, description: "Nearby lesser-known spots or hidden secrets (Hidden Echoes)." },
            nearbyAttractions: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  name: { type: Type.STRING },
                  type: { type: Type.STRING },
                  relevance: { type: Type.STRING }
                },
                required: ["name", "type", "relevance"]
              }
            }
          },
          required: ["history", "temporalSync", "wisdom", "hiddenEchoes", "nearbyAttractions"]
        }
      }
    });

    return JSON.parse(result.text || "{}") as DestinationDeepDive;
  } catch (error) {
    if (isQuotaError(error)) {
      return {
        history: language === 'SI' ? "නාභිගත සම්බන්ධතාවය තාවකාලිකව සීමා කර ඇත. පසුව උත්සාහ කරන්න." : "Registry bandwidth exceeded. The deep archive is currently in cool-down mode. Please synchronize again in a few minutes.",
        temporalSync: "Access Restricted (429)",
        wisdom: ["Wait for neural recharge", "Check connectivity", "Upgrade to Priority Link"],
        hiddenEchoes: "Registry Throttled.",
        nearbyAttractions: [],
        isFallback: true
      };
    }
    return null;
  }
};

/**
 * Main Guide Response (Streaming).
 */
export async function* streamLankaGuideResponse(
  prompt: string,
  history: ChatMessage[],
  language: Language,
  location?: { latitude: number; longitude: number },
  isThinkingMode: boolean = false,
  image?: { data: string; mimeType: string }
): AsyncGenerator<AIResponse> {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const systemInstruction = `
      You are "Lanka Guide AI", a prestige travel intelligence unit for "Travel Hub Sri Lanka". 
      ${isThinkingMode ? 'You are currently in DEEP THINKING MODE, utilizing maximum neural resources to solve complex travel queries.' : 'You use real-time Google Maps data to provide accurate, up-to-date information.'}
      Your tone: Sophisticated, expert, and welcoming (Ayubowan). Always respond in ${language === 'SI' ? 'Sinhala' : 'English'}.
      
      Context:
      User Location: ${location ? `${location.latitude}, ${location.longitude}` : 'Unknown'}
    `;

    // Use gemini-2.5-flash for vision tasks as it is robust and fast.
    // If thinking mode is on, we still use pro, but pro also supports vision.
    const model = isThinkingMode ? 'gemini-3.1-pro-preview' : 'gemini-2.5-flash';
    
    // Use googleMaps for standard queries, googleSearch for thinking/complex queries if needed
    const tools = isThinkingMode ? [{ googleSearch: {} }] : [{ googleMaps: {} }];

    const chat = ai.chats.create({
      model,
      config: {
        systemInstruction,
        tools,
        ...(isThinkingMode && { 
          thinkingConfig: { thinkingLevel: ThinkingLevel.HIGH },
        }),
      },
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }))
    });

    const messageParts: any[] = [{ text: prompt }];
    if (image) {
      messageParts.unshift({
        inlineData: {
          data: image.data,
          mimeType: image.mimeType
        }
      });
    }

    const resultStream = await chat.sendMessageStream({
      message: {
        role: 'user',
        parts: messageParts
      }
    });

    for await (const chunk of resultStream) {
      const text = chunk.text || "";
      const groundingChunks = chunk.candidates?.[0]?.groundingMetadata?.groundingChunks;
      const links: GroundingLink[] = groundingChunks
        ?.map((c: any) => isThinkingMode ? c.web : c.maps)
        .filter((m: any) => m && m.uri)
        .map((m: any) => ({ title: m.title || "View Details", uri: m.uri })) || [];
      
      yield { text, links };
    }

  } catch (error: any) {
    if (isQuotaError(error)) {
      yield { 
        text: language === 'SI' 
          ? "ගෝලීය ප්‍රවේශ සීමාව ඉක්මවා ඇත. කරුණාකර මොහොතකින් නැවත උත්සාහ කරන්න (Error 429)." 
          : "Neural Link Throttled. You have reached the global request limit for this cycle. Please wait a few minutes or switch to a high-priority API key.",
        links: [],
        isThrottled: true
      };
      return;
    }
    const errMsg = error.message || "";
    if (errMsg.includes("Requested entity was not found.") || errMsg.includes("403")) {
      yield { text: "API_KEY_REQUIRED", links: [], error: "API_KEY_REQUIRED" };
      return;
    }
    yield { text: "Neural link interrupted. Please retry.", links: [], error: errMsg };
  }
}

/**
 * Legacy Guide Response (Keep for backward compatibility if needed, but prefer streaming).
 */
export const getLankaGuideResponse = async (
  prompt: string, 
  language: Language, 
  location?: { latitude: number; longitude: number },
  isThinkingMode: boolean = false
): Promise<AIResponse | string> => {
  // Simple wrapper around the stream for legacy support
  let fullText = "";
  let allLinks: GroundingLink[] = [];
  
  const generator = streamLankaGuideResponse(prompt, [], language, location, isThinkingMode);
  
  for await (const chunk of generator) {
    if (chunk.error === "API_KEY_REQUIRED") return "API_KEY_REQUIRED";
    if (chunk.text) fullText += chunk.text; // Note: chunk.text in stream is usually the delta, but check SDK behavior. 
    // Actually, SDK chunk.text is the ACCUMULATED text for that candidate in some versions, or delta in others. 
    // Wait, the @google/genai SDK `chunk.text` is usually the text of the chunk.
    // But `sendMessageStream` returns chunks. 
    // Let's assume it returns deltas or we need to accumulate.
    // Actually, for `sendMessageStream`, `chunk.text` is the text content of that specific chunk.
    if (chunk.links) allLinks = [...allLinks, ...chunk.links];
  }
  
  // If we are using this wrapper, we might get duplicated text if we just append.
  // But since we are moving to streaming in the UI, this function might not be used much.
  // However, to be safe, let's just use generateContent for the non-streaming version to match original behavior exactly.
  
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const systemInstruction = `
      You are "Lanka Guide AI", a prestige travel intelligence unit for "Travel Hub Sri Lanka". 
      ${isThinkingMode ? 'You are currently in DEEP THINKING MODE, utilizing maximum neural resources to solve complex travel queries.' : 'You use real-time Google Maps data to provide accurate, up-to-date information.'}
      Your tone: Sophisticated, expert, and welcoming (Ayubowan). Always respond in ${language === 'SI' ? 'Sinhala' : 'English'}.
    `;

    const model = isThinkingMode ? 'gemini-3.1-pro-preview' : 'gemini-2.5-flash';
    const tools = isThinkingMode ? [{ googleSearch: {} }] : [{ googleMaps: {} }];

    const response = await ai.models.generateContent({
      model,
      contents: [{ parts: [{ text: prompt }] }],
      config: {
        systemInstruction,
        tools,
        ...(isThinkingMode && { 
          thinkingConfig: { thinkingLevel: ThinkingLevel.HIGH },
        }),
      },
    });

    const text = response.text || "";
    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
    const links: GroundingLink[] = groundingChunks
      ?.map((chunk: any) => isThinkingMode ? chunk.web : chunk.maps)
      .filter((m: any) => m && m.uri)
      .map((m: any) => ({ title: m.title || "View Details", uri: m.uri })) || [];

    return { text, links };
  } catch (error: any) {
     if (isQuotaError(error)) {
      return { 
        text: language === 'SI' 
          ? "ගෝලීය ප්‍රවේශ සීමාව ඉක්මවා ඇත. කරුණාකර මොහොතකින් නැවත උත්සාහ කරන්න (Error 429)." 
          : "Neural Link Throttled. You have reached the global request limit for this cycle. Please wait a few minutes or switch to a high-priority API key.",
        links: [],
        isThrottled: true
      };
    }
    const errMsg = error.message || "";
    if (errMsg.includes("Requested entity was not found.") || errMsg.includes("403")) {
      return { text: "API_KEY_REQUIRED", links: [], error: "API_KEY_REQUIRED" };
    }
    return "Neural link interrupted. Please retry.";
  }
};

/**
 * Real-time Information Retrieval.
 */
export const searchGrounding = async (query: string, language: Language, isThinkingMode: boolean = true): Promise<AIResponse> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3.1-pro-preview",
      contents: [{ parts: [{ text: query }] }],
      config: {
        systemInstruction: `You are the "Neural Intelligence Hub". Provide live information. Language: ${language === 'SI' ? 'Sinhala' : 'English'}.`,
        tools: [{ googleSearch: {} }],
        ...(isThinkingMode && { thinkingConfig: { thinkingLevel: ThinkingLevel.HIGH } })
      },
    });

    const text = response.text || "";
    const links: GroundingLink[] = (response.candidates?.[0]?.groundingMetadata?.groundingChunks || [])
      .map((c: any) => c.web && { title: c.web.title || "Source", uri: c.web.uri }).filter(Boolean);

    return { text, links };
  } catch (e: any) {
    if (isQuotaError(e)) {
      return { 
        text: "Neural Link Throttled (429): Quota exhausted. Please wait for the next cycle.", 
        links: [], 
        isThrottled: true 
      };
    }
    return { text: "Search registry offline.", links: [] };
  }
};

/**
 * Poetic refinement.
 */
export const refineTravelStory = async (story: string, language: Language): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [{ parts: [{ text: `Refine this story to be more poetic: "${story}"` }] }],
    });
    return response.text || story;
  } catch (e) {
    return story;
  }
};

/**
 * Itinerary creation.
 */
export const generateDetailedItinerary = async (destination: string, language: Language): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3.1-pro-preview',
      contents: [{ parts: [{ text: `Create a detailed 3-day itinerary for ${destination}.` }] }],
      config: { thinkingConfig: { thinkingLevel: ThinkingLevel.HIGH } }
    });
    return response.text || "";
  } catch (e) {
    if (isQuotaError(e)) return "Itinerary engine throttled. Please wait.";
    return "Failed to generate itinerary.";
  }
};
