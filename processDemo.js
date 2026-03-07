// when you run `node processDemo.js name`
// the `name` get trapped in argv
console.log(process.argv);

// process.env
console.log(process.env);

// pid
// node js process pid
console.log(process.pid);

// cwd
// current working directory
console.log(process.cwd());

// title
// current process title
console.log(process.title);

// memoryUsage()
console.log(process.memoryUsage());

// uptime()
// time from where you run the command to the script executing
console.log(process.uptime());

// on process listiner
process.on("exit", (code) => {
  console.log(`About to exit with code ${code}`);
});

// exit()
// exit the process and you can pass specific code
// where = 0 means success, and 1 = genral error
console.log(process.exit(0));

console.log("NOT GONNA RUN");
