const fs = require('fs');

module.exports = (filename, done) => {
    //stuff here
    fs.readFile(filename, (err, data) => {
        if(err){
            throw err;
        } else {
            done(data);
        }
    });
}