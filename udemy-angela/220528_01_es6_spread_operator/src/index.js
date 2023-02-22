import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

const citrus = ["Lime", "Lemon", "Orange"];

const fruits = ["Apple", "Banana", "Coconut"];


citrus.forEach(elem => {
    fruits.push(elem);
})

console.log("First method of joining to arrays: ", fruits);


let citrus2 = ["Lime", "Lemon", "Orange"];
let fruits2 = ["Apple", "Banana", "Coconut"];

fruits2 = [...fruits2, ...citrus2];
console.log("Using spread operator for joining to arrays: ", fruits);

// ============================================= //

const fullName = {
    fName: "James",
    lName: "Bond",
};

const user = {
    fName: "Default First Name",
    lName: "Default Last Name",
    ...fullName,
}

console.log(user);

const user2 = {
    ...fullName,
    fName: "Default First Name",
    lName: "Default Last Name",
    // the order in which we include the keys inside the object will make a difference
    // on the which keys are kept, in this case the latest keys that were included are kept
}

console.log(user2);

const user3 = {
    fullName,
    fName: "Default First Name",
    lName: "Default Last Name",
}

// in the case of user3 fullName will be the new key
// and this will be a new object, which is inside the object
// user3



