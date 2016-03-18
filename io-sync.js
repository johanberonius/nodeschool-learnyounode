var fs = require('fs'),
    text = fs.readFileSync(process.argv[2]).toString(),
    matches = text.match(/\n/g);
    
console.log(matches.length);
