interface UserInterface {
	name: string;
	email: string;
	age: number;

	register();
	payInvoice();
}

class User implements UserInterface {
	// properties and methods
	name: string;
	email: string;
	public age: number;

	// the modifiers that we can use are:
	// private
	// protected
	// public

	// we can include modifiers such as private
	// is public and leaving without anything is the same?
	// protected means that a child class can access this property

	// In Java the constructor has same name as the class itself
	// in JavaScript we are explicit in telling that this is a
	// constructor
	// In Python the constructor is __init__()
	constructor(name: string, email: string, age: number) {
		this.name = name;
		this.email = email;
		this.age = age;
		console.log("User created " + this.name);
	}

	// we can make this private
	register() {
		console.log(this.name + " is now registered.");
	}

	payInvoice() {
		console.log(this.name + " paid invoice");
	}
}

let john = new User("John Dow", "jdoe@email.com", 22);

john.register();

// example of inheritence, Member inherits from User
class Member extends User {
	id: number;

	constructor(id: number, name: string, email: string, age: number) {
		// the constructor of a derived class must have a super call
		super(name, email, age);
		this.id = id;
	}

	payInvoice() {
		super.payInvoice();
	}
}

let mike: User = new Member(1, "Mike Smith", "mike@email.com", 33);

mike.payInvoice();
