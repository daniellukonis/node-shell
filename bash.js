const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    if(cmd === 'pwd'){
        pwd();
        // process.stdout.write(process.env.PWD);
        // process.stdout.write('\nprompt > ');
    }
    if(cmd === 'ls'){
        ls();
    }

    if(cmd.split(' ')[0] === 'cat'){
        const filename = cmd.split(' ')[1];
        cat(filename);
    }
    // process.stdout.write('You typed: ' + cmd);
    // process.stdout.write('\nprompt > ');

});
