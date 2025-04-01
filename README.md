# ETH Phishing Filterlist

This repository automatically converts MetaMask's eth-phishing-detect blocklist into a filterlist format compatible with Brave Shields, uBlock Origin and similar content blockers.

## How it works

- A GitHub Action runs every 30 minutes to fetch the latest blacklist from MetaMask's repository
- The script converts the blacklist into the uBlock Origin filter format
- Any changes are automatically committed to the repository

## Files

- `filterlist/eth-phishing-list.filter`: The generated filterlist in uBlock Origin format
- `scripts/convert-list.js`: Node.js script that fetches and converts the blacklist

## Automation

The filterlist is updated automatically via GitHub Actions every 30 minutes. The workflow:

1. Fetches the latest phishing domains from MetaMask's repository
2. Converts them to the proper format
3. Commits any changes directly to the repository

## Usage

To use this filterlist in uBlock Origin or similar content blockers, add the following URL to your custom filters:

```
https://raw.githubusercontent.com/kdenhartog/eth-phish-filterlist/main/filterlist/eth-phishing-list.filter
```

## License

MPL-2.0
