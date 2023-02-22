console.log("Hello from ts");

let myString: string;

myString = "Hello World";

console.log(myString);

let myNum: number;
// are there no integer and floats in type script?

myNum = 22;
myNum = 22.12312; //  we can include floats
myNum = 0x10fabc; // we can include hexdecimal numbers

// vscode will give an error here
// but the tsc will not if it is valid js
// myNum = "Hi there";
// myNum =kk "Hi there";

let myBool: boolean;

myBool = true;

myString = "Hello".slice(0, 3);
console.log(myString);

let myVar: any;
myVar = 5;
myVar = "Hi there";
myVar = true;
myVar = 0xfae;
myVar = `This is: ${myVar}`;
console.log(myVar);

// about arrays
let strArr: string[];

strArr = ["Hello ", "There"];

let numArr: number[];
numArr = [1, 2, 3, 4];

// last checkpoint
// https://youtu.be/rAy_3SIqT-E?t=1025

let boolArr: boolean[] = [true, false, true];

let strArr2: Array<string>;
strArr2 = ["hi", "there"];

let numArr2: Array<number>;
let boolArr2: Array<boolean>;

// a tuple is an array with a defined number of elements
let myTuple1: [string, number];

myTuple1 = ["Bob", 10];
// myTuple1 = [10, true];

let myVoid: void = null;
myVoid = undefined;
// myVoid = 0;
// myVoid = "";

let myNull: null = null;
let myUndef: undefined = undefined;

myUndef = null;
myNull = undefined;




