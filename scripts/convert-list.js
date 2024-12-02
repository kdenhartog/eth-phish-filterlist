const fs = require('fs');
const path = require('path');

// Load config.json
let config;
try {
  config = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'eth-phishing-detect', 'src', 'config.json'), 'utf8'));
} catch (error) {
  console.error(`Error reading config.json: ${error}`);
  process.exit(1);
}

// Generate filterlist in UBlock Origin's syntax
const filterlist = [];
for (const domain of Object.values(config.blacklist)) {
    filterlist.push('||' + domain + '^$all');
  }
filterlist.sort((a, b) => a.localeCompare(b));

// Write filterlist to file
fs.writeFileSync(path.join(__dirname, '..' , 'filterlist', 'eth-phishing-list.filter'), filterlist.join('\n'));
console.log('Filterlist generated and written to file!');