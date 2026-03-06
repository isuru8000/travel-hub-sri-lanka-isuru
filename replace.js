import fs from 'fs';
const file = './services/gemini.ts';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(/new GoogleGenAI\(\{ apiKey: process\.env\.API_KEY \}\)/g, 'new GoogleGenAI({ apiKey: getApiKey() })');
fs.writeFileSync(file, content);
console.log('Done');
