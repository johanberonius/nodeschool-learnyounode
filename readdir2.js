var rd = require('./readdir-module.js'),
    dir = process.argv[2],
    ext = process.argv[3];
    
rd(dir, ext, function(err, list) {
    if (err)
        console.log(err);
    else
        console.log(list.join('\n'));        
});
