const os = require("os");
// INFO ABOUT CURRENT USER
const user = os.userInfo();
console.log(user);

console.log(`${os.type()}`);
console.log(`${os.version()}`);
console.log(`${os.hostname()}`);

