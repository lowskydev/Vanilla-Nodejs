import url from "url";

const urlString = "https://www.google.com/search?q=hello+world";

// URL Object
// create object URL with a lot of properties of url
const urlObj = new URL(urlString);
console.log(urlObj);
console.log(urlObj.search);

// format
// from URL object to string
console.log(url.format(urlObj));

// file URL
console.log(import.meta.url);

// fileURLToPath()
console.log(url.fileURLToPath(import.meta.url));

// extract search params from URL object
const params = new URLSearchParams(urlObj.searchParams);
console.log(params);
console.log(params.get("q"));
params.append("limit", "5");
console.log(params);
