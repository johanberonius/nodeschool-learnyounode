var http = require('http'),
    port = process.argv[2];

var server = http.createServer(function (request, response) {
    if (request.method == 'POST') {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        request.setEncoding('utf8');                
        request.on('data', function(chunk) {
            response.write(chunk.toUpperCase());
        });        
        request.on('end', function() {
            response.end();
        });        
    } else {
        response.writeHead(405);
        response.end();
    }                            
});
     
server.listen(port);
