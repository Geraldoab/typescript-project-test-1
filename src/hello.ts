import { type Shape, type Circle } from './shape';
import { Square } from './Math';
import { createPair } from './BasicGenerics';
import { NamedValue } from './NamedValue';

function greet(name: string): string {
  return `Hello, ${name} 2`;
}

function printShape(shape: Shape) {
  console.log(shape.kind);
}

const message: string = greet('World');
//console.log(message);
//console.log("-----");

let s: Circle = {
  kind: 'circle',
  radius: 30,
};

//printShape(s);

// Arrays
const names: string[] = [];
names.push('Dylan');

// readonly
const readonlyNames: readonly string[] = [];
//readonlyNames.push("Dylan");

// TypeScript Tuples
type OurTuple = [id: number, isActive: boolean, name: string];

const tupleList: OurTuple[] = [];

tupleList.push([50, false, 'empty']);
tupleList.push([25, false, 'empty2']);

//const [id, isActive,  name] = tupleList[0]

tupleList.push([25, false, 'empty2']);
console.log(tupleList[0]);

// TypeScript Object Types
const car: { type: string; model: string; year: number; mileage?: number } = {
  type: 'Toyota',
  model: 'Corolla',
  year: 2009,
};

car.mileage = 5000;

console.log(car.model);
console.log(car.mileage);

// Enums
enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400,
  InternalServerError = 500,
}

console.log(`Status code: ${StatusCodes.InternalServerError}`);

// Union
type Status = 'success' | 'error';
const response: Status = 'success';
console.log(response);

// Interfaces
interface Rectangle {
  height: number;
  width: number;
}

const rectangle: Rectangle = {
  height: 20,
  width: 20,
};

console.log(`Area: ${(rectangle.height * rectangle.width) / 2}`);

// Extending Interfaces
interface ColoredRectangle extends Rectangle {
  color: string;
}

const newColoredRectangle: ColoredRectangle = {
  height: 30,
  width: 30,
  color: 'red',
};
console.log(newColoredRectangle.color);

// Union | (OR)
function printStatusCode(code: string | number) {
  console.log(`My status code is ${code}`);
}

printStatusCode(503);

// Return type
function getTime(): number {
  return new Date().getTime();
}

console.log(getTime());

// Optional Parameters || -> means to use the default value when c is null
function Add(a: number, b: number, c?: number): number {
  return a + b + (c || 0);
}

console.log(Add(1, 2));

function pow(value: number, exponent: number = 10): number {
  return value ** exponent;
}

console.log(pow(2));

const s1: Square = new Square(20);

console.log(s1.toString());

// Void return
function printMessage(message: string): void {
  console.log(message);
}

// Call generic createPair function
console.log(createPair<string, number>('Test', 42));

// Using a generic class
function printGenericValueByName(item: NamedValue<string>) {
  console.log(item.toString());
}

const newItem: NamedValue<string> = new NamedValue('test');
newItem.setValue('abc');

printGenericValueByName(newItem);

// Utility Types
// Partial<T> changes all the properties in an object to be optional.
interface Point {
  x: number;
  y: number;
}

let pointPart: Partial<Point> = {}; // `Partial` allows x and y to be optional
pointPart.x = 10;

// Required -> changes all the properties in an object to be required

interface Car {
  make: string;
  model: string;
  mileage?: number;
}

let myCar: Required<Car> = {
  make: 'Ford',
  model: 'Focus',
  mileage: 12000, // `Required` forces mileage to be defined
};

// Record is a shortcut to defining an object type with a specific key type and value type.
const nameAgeMap: Record<string, number> = {
  Alice: 21,
  Bob: 25,
};

// Readonly
interface Person {
  name: string;
  age: number;
}

const person: Readonly<Person> = {
  name: 'Dylan',
  age: 35,
};

//person.name = 'Israel';
