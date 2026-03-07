import path from "path";
import url from "url";

const filePath = "./dir1/dir2/test.txt";

// basename()
// return last portion of path
console.log(path.basename(filePath));

// dirname()
// return directries leading to path
console.log(path.dirname(filePath));

// extname()
// return extension
console.log(path.extname(filePath));

// parse()
// return objects with path properites
console.log(path.parse(filePath));

// filename leading to this project path
// import.meta.url gives something like file://home/desktop/.../nodejs-crash
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename);
console.log(__dirname);

// join()
const filePath2 = path.join(__dirname, "dir1", "dir2", "test.txt");
console.log(filePath2);
