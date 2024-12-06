const fs = require('fs');
const path = require('path');

// build filterlist
async function buildFilterlist(blacklist) {
  const filterlist = [];
  for (const domain of Object.values(blacklist)) {
    // Generate filterlist in UBlock Origin's syntax  
      filterlist.push('||' + domain + '^$all');
    }
  filterlist.sort((a, b) => a.localeCompare(b));
  
  // Write filterlist to file
  await fs.writeFileSync(path.join(__dirname, '..', 'filterlist', 'eth-phishing-list.filter'), filterlist.join('\n'));
  console.log('Filterlist generated and written to file!');
}

// Load config.json
fetch("https://raw.githubusercontent.com/MetaMask/eth-phishing-detect/refs/heads/main/src/config.json")
.then(async (res) => {
    if (! res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

  const response = await res.json();
  const blacklist = response.blacklist;
  buildFilterlist(blacklist);
  })
.catch((error) => {
  console.error(`Error reading config.json: ${error}`);
  process.exit(1);
});