var fs = require('fs'),
    http = require('http'),
    port = process.argv[2],
    file = process.argv[3];

var server = http.createServer(function (request, response) {    
    fs.createReadStream(file).pipe(response);                
});
     
server.listen(port);
