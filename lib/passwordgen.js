const program = require('commander');
const generatePassword = require('./generator');

program
    .version('0.0.1')
    .option('-l, --length <value>', 'Password length')
    .option('-u, --uppercase <value>', 'Number of uppercase characters')
    .option('-d, --digits <value>', 'Number of digits')
    .option('-s, --special <value>', 'Number of special characters')
    .parse(process.argv);

const options = {
    length: parseInt(program.length) || 14,
    uppercase: parseInt(program.uppercase) || 1,
    digits: parseInt(program.digits) || 1,
    special: parseInt(program.special) || 1
}

generatePassword(options);
