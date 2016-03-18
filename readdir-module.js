module.exports = function readdir(dir, ext, callback) {
    var fs = require('fs');

    fs.readdir(dir, function(err, list) {
        if (err)
            callback(err);
        else
            callback(err, list.filter(function(file) {
                return file.endsWith('.'+ ext);
            }));        
    });        
};
