var fs = require('fs');
fs.readFile(process.argv[2], function(err, buffer) {
    console.log(buffer.toString().match(/\n/g).length);        
});
