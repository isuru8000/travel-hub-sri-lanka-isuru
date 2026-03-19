const fs = require('fs');
const TurndownService = require('turndown');

const turndownService = new TurndownService({
  headingStyle: 'atx',
  bulletListMarker: '-'
});

let content = fs.readFileSync('about_destinations.tsx', 'utf-8');

// We need to find all the template literals that contain HTML and convert them.
// Since the file structure is like: EN: `<div>...</div>`, SI: `<div>...</div>`
// We can use a regex to match the template literals.

const regex = /(EN|SI|history|hiddenEchoes):\s*`([\s\S]*?)`/g;

content = content.replace(regex, (match, key, html) => {
  // Check if it looks like HTML
  if (html.includes('<')) {
    try {
      const markdown = turndownService.turndown(html);
      return `${key}: \`${markdown}\``;
    } catch (e) {
      console.error('Error converting HTML to Markdown:', e);
      return match;
    }
  }
  return match;
});

fs.writeFileSync('about_destinations.tsx', content, 'utf-8');
console.log('Conversion complete!');
