const request = require('request');

module.exports = (address, done) => {
    request(address, (error, response, body) => {
        if (error) throw error; // Print the error if one occurred

        done(body);
      });
};