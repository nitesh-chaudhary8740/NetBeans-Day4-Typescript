var myName = "Nitesh";
var totalProjects = 10;
var isLearningTS = true;
console.log("myName <String>", myName);
console.log("totalProjects <Number>", totalProjects);
console.log("isLearningTS <Boolean>", isLearningTS);
// TS will throw an error if you try this:
// myName = 100; // Error: Type 'number' is not assignable to type 'string'.
var emptyValue = null;
console.log("emptyValue <null>", isLearningTS);
var notFound = undefined;
console.log("not found <undefined>", isLearningTS);
//The any type is basically telling TypeScript to "shut up and let me do whatever I want." It turns off type checking.
// Warning: Overusing any makes your TypeScript project just a regular (and heavy) JavaScript project. Avoid it!
var anyType = "any";
console.log("anyType <any>", anyType);
anyType = 100;
console.log("anyType <any>", anyType);
// Array of strings
var skills = ["HTML", "CSS", "JS"];
console.log("skills[] <String>", skills);
// Tuple: [id, username, isActive]
var user = [1, "nitesh_dev", true];
console.log("user[id, username, isActive] [<Number> <String> <Boolean>]", user);
// Error: The order matters in Tuples!
// user = ["Admin", 1, true]; // Error
var Status;
(function (Status) {
    Status[Status["Pending"] = 0] = "Pending";
    Status[Status["Active"] = 1] = "Active";
    Status[Status["Completed"] = 2] = "Completed"; // 2
})(Status || (Status = {}));
var currentStatus = Status.Active;
console.log(currentStatus); // Outputs: 1
//practice tasks
var car = "Dodge Charger";
console.log(car);
var prices = [67999, 54999, 98999];
console.log(prices);
var cord = [23.3015, 77.3672];
console.log(cord);
// car=45 //Type 'number' is not assignable to type 'string'.
