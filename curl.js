const request = require('request');

module.exports = (address) => {
    request(address, (error, response, body) => {
        if (error) throw error; // Print the error if one occurred
        
        process.stdout.write(body);
        process.stdout.write("\nprompt > ");
        /*
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
        */
      });
};