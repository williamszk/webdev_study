// https://youtu.be/rAy_3SIqT-E?t=1333

function getSome(num1: number, num2: number): number {
	return num1 + num2;
}

// getSome("hello", 20);

const mySum = function (num1: any, num2: any): number {
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

// the question mark after will make the parameter optional
function getName(firstName: string, lastName?: string): string {
    if (lastName == undefined){
        return firstName;
    }

    return firstName + " " + lastName;
}

getName("John", "Doe");
getName("John");

function funcVoid(): void{
    // return 3;
    return;
}
