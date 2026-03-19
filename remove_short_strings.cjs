const fs = require('fs');

let content = fs.readFileSync('about_destinations.tsx', 'utf-8');

const aboutDataStart = content.indexOf('export const ABOUT_DATA: Record<string, { EN: string, SI: string }> = {');
const logisticsDataStart = content.indexOf('export const LOGISTICS_DATA: Record<string, { EN: string, SI: string }> = {');

let aboutDataContent = content.substring(aboutDataStart, logisticsDataStart);

// Remove lines that look like `  key: { EN: "...", SI: "..." },`
aboutDataContent = aboutDataContent.replace(/^\s*"?([a-zA-Z0-9_'-]+)"?:\s*\{\s*EN:\s*"[^"]*",\s*SI:\s*"[^"]*"\s*\},?\n/gm, '');

content = content.substring(0, aboutDataStart) + aboutDataContent + content.substring(logisticsDataStart);

fs.writeFileSync('about_destinations.tsx', content);
console.log('Removed short strings from ABOUT_DATA');
