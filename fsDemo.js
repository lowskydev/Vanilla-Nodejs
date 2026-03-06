import fs from "fs";

// readFile() - callback
fs.readFile("./text.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// readFileSync() - synchronous version
const data = fs.readFileSync("./text.txt", "utf-8");
console.log(data);
