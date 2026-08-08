import { type Shape, type Circle } from "./shape";

function greet(name: string) : string {
    return `Hello, ${name} 2`;
}

function printShape(shape: Shape) {
    console.log(shape.kind);
}

const message: string = greet("World");
console.log(message);
console.log("-----");

let s: Circle = {
    kind: "circle",
    radius: 30
};

printShape(s);
