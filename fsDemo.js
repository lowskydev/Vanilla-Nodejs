/*
import fs from "fs";

// readFile() - callback
fs.readFile("./text.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// readFileSync() - synchronous version
const data = fs.readFileSync("./text.txt", "utf-8");
console.log(data);
*/

import fs from "fs/promises";

// readFile() - Promise .then()
fs.readFile("./text.txt", "utf-8")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// readFile() - Promise async/await
const readFile = async () => {
  try {
    const data = await fs.readFile("./text.txt", "utf-8");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

readFile();

// writeFile()
const writeFile = async () => {
  try {
    const data = "Hello file?!";
    await fs.writeFile("new.txt", data, "utf-8");
  } catch (error) {
    console.log(error);
  }
};

writeFile();

// appendFile()
const appendFile = async () => {
  try {
    const data = "\nappend this!";
    await fs.appendFile("text.txt", data, "utf-8");
  } catch (error) {
    console.log(error);
  }
};

appendFile();
readFile();
