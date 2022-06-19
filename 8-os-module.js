const os = require('os');
// console.log(os.freemem());

// info about current user
const user = os.userInfo()
console.log(user);

// system uptime
const uptime = os.uptime()
console.log(uptime + " seconds");

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOS);