var fs = require('fs'),
    dir = process.argv[2],
    ext = process.argv[3];
    
fs.readdir(dir, function(err, list) {
    console.log(list.filter(function(file) {
        return file.endsWith('.'+ ext);
    }).join('\n'));        
});
