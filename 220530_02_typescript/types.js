console.log("Hello from ts");
var myString;
myString = "Hello World";
console.log(myString);
var myNum;
// are there no integer and floats in type script?
myNum = 22;
myNum = 22.12312; //  we can include floats
myNum = 0x10fabc; // we can include hexdecimal numbers
// vscode will give an error here
// but the tsc will not if it is valid js
// myNum = "Hi there";
// myNum =kk "Hi there";
var myBool;
myBool = true;
myString = "Hello".slice(0, 3);
console.log(myString);
var myVar;
myVar = 5;
myVar = "Hi there";
myVar = true;
myVar = 0xfae;
myVar = "This is: ".concat(myVar);
console.log(myVar);
// about arrays
var strArr;
strArr = ["Hello ", "There"];
var numArr;
numArr = [1, 2, 3, 4];
// last checkpoint
// https://youtu.be/rAy_3SIqT-E?t=1025
var boolArr = [true, false, true];
var strArr2;
strArr2 = ["hi", "there"];
var numArr2;
var boolArr2;
// a tuple is an array with a defined number of elements
var myTuple1;
myTuple1 = ["Bob", 10];
// myTuple1 = [10, true];
var myVoid = null;
myVoid = undefined;
// myVoid = 0;
// myVoid = "";
var myNull = null;
var myUndef = undefined;
myUndef = null;
myNull = undefined;
