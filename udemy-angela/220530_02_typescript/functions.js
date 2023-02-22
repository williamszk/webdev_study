// https://youtu.be/rAy_3SIqT-E?t=1333
function getSome(num1, num2) {
    return num1 + num2;
}
// getSome("hello", 20);
var mySum = function (num1, num2) {
    if (typeof num1 === "string") {
        num1 = parseInt(num1);
        // does parseint will make floats right?
    }
    if (typeof num2 === "string") {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
mySum("10", 10);
function getName(firstName, lastName) {
    return firstName + " " + lastName;
}
getName("John", "Doe");
