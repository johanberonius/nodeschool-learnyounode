var net = require('net'),
    strftime = require('strftime');

var server = net.createServer(function (socket) {  
    socket.end(strftime('%F %H:%M\n', new Date()));  
});
     
server.listen(process.argv[2]);
