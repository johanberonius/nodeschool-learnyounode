var http = require('http'),
    URL = require('url'),
    port = process.argv[2];

var server = http.createServer(function (request, response) {
    if (request.method == 'GET') {
        var url = URL.parse(request.url, true);
                        
        if (url.pathname == '/api/parsetime') {
            var date = new Date(url.query.iso);
            response.writeHead(200, {'Content-Type': 'application/json'});
            response.end(JSON.stringify({
                hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds(),
            }));            
        } else if (url.pathname == '/api/unixtime') {
            var time = Date.parse(url.query.iso);
            response.writeHead(200, {'Content-Type': 'application/json'});
            response.end(JSON.stringify({
                unixtime: time,
            }));                    
        } else {
            response.writeHead(404);
            response.end();
        }                                            
    } else {
        response.writeHead(405);
        response.end();
    }                            
});
     
server.listen(port);
