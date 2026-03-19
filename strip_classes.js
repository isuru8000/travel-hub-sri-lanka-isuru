import fs from 'fs';

const file = 'about_destinations.tsx';
let content = fs.readFileSync(file, 'utf8');

// Remove class="..." and className="..."
content = content.replace(/class="[^"]*"/g, '');
content = content.replace(/className="[^"]*"/g, '');

fs.writeFileSync(file, content);
console.log('Done');
