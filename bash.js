const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl');
const head = require('./head');

const done = (output) => {
    process.stdout.write(output);
    process.stdout.write("\nprompt > ");
}

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    if(cmd === 'pwd'){
        pwd(done);
    }

    if(cmd === 'ls'){
        ls(done);
    }

    if(cmd.split(' ')[0] === 'cat'){
        const filename = cmd.split(' ')[1];
        cat(filename, done);
    }

    if(cmd.split(' ')[0] === 'curl') {
        const address = cmd.split(' ')[1];
        curl(address, done);
    }
    if(cmd.split(' ')[0] === 'head'){
        const filename = cmd.split(' ')[1];
        head(filename, done);
    }
    
});
