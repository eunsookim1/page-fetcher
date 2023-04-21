const request = require('request'); // npm install request
const fs = require("fs"); // built-in library in node

const path = process.argv[3];
const domain = process.argv[2];

request(domain, (error, response, body) => {
  if (error) { //from line 8
    console.log('error:', error);
    return;
  }
  // if (status code errors)
  fs.writeFile(`${path}`, body, function(error) {
    if (error) { // error from line 12
      console.log("error:", error); // prints the error if erorr occured during trying to write file.
    } else {
      console.log(`Downloaded and saved ${response.headers["content-length"]} bytes to ${path}`);
    }
  });
});

// 'axios' library is more used nowadays than 'request'


