const chalkPackage = require('chalk')

const error   = chalkPackage.bold.red;
const warning = chalkPackage.hex('#FFA500');  // Orange color

console.log(error('Error!'));
console.log(warning('Warning!'));