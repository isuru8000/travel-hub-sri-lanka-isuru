import fs from 'fs';

const file = 'about_destinations.tsx';
let content = fs.readFileSync(file, 'utf8');

// Strip empty spaces before >
content = content.replace(/ \>/g, '>');

fs.writeFileSync(file, content);
console.log('Done');
