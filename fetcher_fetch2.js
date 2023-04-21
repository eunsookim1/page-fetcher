/** Takes two command line arguments:
 * a URL
 * a local file path  */



// Asynch Operations:
// 1. Make an http request and wait for the response
// 2. After the http request is complete, take the data received adn write it to a file in local filesystem.

// writeFileSync x dont use

// const fs = require('fs');
// const path = require('path');

const fetch = require('node-fetch');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

fetch(url)
  .then(res => res.buffer())
  .then(buffer => {
    fs.writeFileSync(filePath, buffer);
    console.log(`Downloaded and saved ${buffer.length} bytes to ${filePath}`);
  })
  .catch(err => console.error(err));