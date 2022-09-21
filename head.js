const fs = require('fs');

module.exports = (filename, done) => {
    //stuff here
    fs.readFile(filename, 'utf8', (err, data) => {
        if(err){
            throw err;
        } else {
            // done(data);
            // return;
            done(data.split('\n').slice(0, 10).join('\n'));
            // done(data.split('\n')[0]);
            // console.log(data);
        }
    });
}