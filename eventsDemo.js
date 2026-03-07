import { EventEmitter } from "events";

const myEmitter = new EventEmitter();

function greetEmitter() {
  console.log("Hello World");
}

function goodbyeHandler() {
  console.log("Goodbye World");
}
