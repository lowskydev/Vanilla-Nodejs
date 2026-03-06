import { getPosts, getPostsLength } from "./postController.js";

for (let post of getPosts()) {
    console.log(post.title);
}

console.log(`Posts length ${getPostsLength()}`);

// const { generateRandomNumber, celciusToFahrenheit } = require("./utils");

// console.log(`Random number: ${generateRandomNumber()}`);

// console.log(`0 Celcius in fahrenheit: ${celciusToFahrenheit(0)}`);
