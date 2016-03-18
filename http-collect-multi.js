var http = require('http'),
    url1 = process.argv[2],
    url2 = process.argv[3],
    url3 = process.argv[4],
    result = {},
    done = 0;

[url1, url2, url3].forEach(function(url) {
    http.get(url, function(response) {
        var text = '';
        response.setEncoding('utf8');
        response.on("data", function (data) { text += data; });
        response.on("end", function () { result[url] = text; 
            if (++done >= 3) console.log(result[url1] + '\n' +result[url2] + '\n' +result[url3] + '\n');    
        });    
    });
});
