// Access Modifiers (The "Shields")
// This is the most important feature TS adds to JS classes. It controls "visibility."
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
// public (Default): The property/method can be accessed from anywhere.
// private: The property/method is only accessible inside the class it was defined in. Even "child" classes cannot see it.
// protected: The property/method is accessible inside the class and any class that extends (inherits) from it.
var Intern = /** @class */ (function () {
    // By adding 'public' or 'private' in the constructor, 
    // TS automatically creates and assigns the property.
    function Intern(name, stipend) {
        this.name = name;
        this.stipend = stipend;
    }
    Intern.prototype.setId = function (id) {
        this.id = id;
    };
    return Intern;
}());
var nitesh1 = new Intern("Nitesh", 5000);
console.log(nitesh1.name); // Works
// console.log(nitesh.stipend); // ❌ Error: Property 'stipend' is private
var Account = /** @class */ (function () {
    function Account() {
        this._balance = 0;
    }
    Object.defineProperty(Account.prototype, "balance", {
        get: function () {
            return "Your balance is $".concat(this._balance);
        },
        set: function (amount) {
            if (amount < 0)
                return; // Validation logic
            this._balance = amount;
        },
        enumerable: false,
        configurable: true
    });
    return Account;
}());
var myAccount = new Account();
myAccount.balance = 999999;
console.log(myAccount.balance);
// Task 1: The Base Class
// Create an abstract class called Employee.
// Properties: A public name and a protected id (use shorthand constructor).
// Abstract Method: Define an abstract method getSalary(): number. (This forces every type of employee to implement their own salary logic).
var Employee = /** @class */ (function () {
    function Employee(name, id) {
        this.name = name;
        this.id = id;
    }
    return Employee;
}());
// Task 2: The Specific Employee
// Create a class Developer that extends Employee.
// Constructor: Should take name, id, and a private property language.
// Method: Implement getSalary(). Let's say developers get a flat $5000.
// Method: A describe() method that logs "I am [name], I code in [language]."
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(name, id, salary, language) {
        if (salary === void 0) { salary = 5000; }
        var _this = _super.call(this, name, id) || this;
        _this.salary = salary;
        _this.language = language;
        return _this;
    }
    Developer.prototype.getSalary = function () {
        return this.salary;
    };
    Developer.prototype.describe = function () {
        console.log("I am ".concat(this.name, " I code in ").concat(this.language));
    };
    return Developer;
}(Employee));
var dev1 = new Developer("Nitesh", 8740, undefined, "js");
console.log(dev1.getSalary());
dev1.describe();
// Task 3: The Manager (Protected Access)
// Create a class Manager that extends Employee.
// Properties: A private array managedEmployees: string[].
// Method: addEmployee(name: string).
// Method: listId() — This should log the id property. (This tests if protected is working, as Manager should be able to see the id from the parent Employee class).
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, id, salary) {
        var _this = _super.call(this, name, id) || this;
        _this.salary = salary;
        _this.managedEmployess = [];
        return _this;
    }
    Manager.prototype.getSalary = function () {
        return this.salary;
    };
    Manager.prototype.addEmployee = function (name) {
        this.managedEmployess.push(name);
    };
    Manager.prototype.getEmployees = function () {
        return this.managedEmployess;
    };
    Manager.prototype.listId = function () {
        console.log(this.id);
    };
    return Manager;
}(Employee));
var manager1 = new Manager("ManagerA", 123, 20000);
manager1.listId();
manager1.addEmployee("emp1");
manager1.addEmployee("emp2");
manager1.addEmployee("emp3");
var allEmployees = manager1.getEmployees();
allEmployees.forEach(function (emp) {
    console.log(emp);
});
