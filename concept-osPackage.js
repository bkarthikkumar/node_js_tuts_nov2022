const osObj = require("os");

// console.log(osObj);

console.log(osObj.arch()); // x64

console.log(osObj.freemem()); //3635671040 --- Free memory in bytes

console.log(osObj.freemem() / (1024 * 1024 * 1024)); // 3.295917510986328 -m GB

console.log(osObj.totalmem()); //total memory of the system --- 12792705024

console.log(osObj.totalmem() / (1024 * 1024 * 1024)); //11.914134979248047

console.log(osObj.hostname()); // Give Host name: LAPTOP-NJR1M7DM

console.log(osObj.platform()); // win32

console.log(osObj.userInfo());
/*
{
  uid     : -1,
  gid     : -1,
  username: 'HP',
  homedir : 'C:\\Users\\HP',
  shell   : null
}
*/
