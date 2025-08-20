// Script to add lastUpdated: 7 to all hospitals that don't have it
const fs = require('fs');

// Read the HTML file
let content = fs.readFileSync('mapALLvaccines.html', 'utf8');

// Replace all hospital entries that don't have lastUpdated
content = content.replace(/vaccines: \{[^}]+\}\}/g, (match) => {
  if (!match.includes('lastUpdated')) {
    return match.slice(0, -1) + ', lastUpdated: 7}';
  }
  return match;
});

// Write back to file
fs.writeFileSync('mapALLvaccines.html', content);
console.log('Updated all hospitals to have lastUpdated: 7');
