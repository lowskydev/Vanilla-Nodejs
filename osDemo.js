import os from "os";

// userInfo()
console.log(os.userInfo());
console.log(os.userInfo().username);

// totalmem()
console.log(`${os.totalmem() / 1024 / 1024 / 1024} GB`); // in Bytes to GB

// freemem()
console.log(os.freemem());

// cpus()
console.log(os.cpus());
