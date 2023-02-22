var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    // we can include modifiers such as private
    // is public and leaving without anything is the same?
    // protected means that a child class can access this property
    // In Java the constructor has same name as the class itself
    // in JavaScript we are explicit in telling that this is a
    // constructor
    // In Python the constructor is __init__()
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log("User created " + this.name);
    }
    // we can make this private
    User.prototype.register = function () {
        console.log(this.name + " is now registered.");
    };
    User.prototype.payInvoice = function () {
        console.log(this.name + " paid invoice");
    };
    return User;
}());
var john = new User("John Dow", "jdoe@email.com", 22);
john.register();
// example of inheritence, Member inherits from User
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = 
        // the constructor of a derived class must have a super call
        _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User));
var mike = new Member(1, "Mike Smith", "mike@email.com", 33);
mike.payInvoice();
