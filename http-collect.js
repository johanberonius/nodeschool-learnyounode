var http = require('http');

http.get(process.argv[2], function(response) {
    var text = '';
    response.setEncoding('utf8');
    response.on("data", function (data) { text += data; });
    response.on("end", function (data) { console.log(text.length + '\n' + text); });    
});