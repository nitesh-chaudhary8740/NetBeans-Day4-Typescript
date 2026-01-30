function add(a, b) {
    return a + b;
}
// TS knows 'result' is a number because of the return type
var result = add(5, 10);
// Optional (?): Use a question mark if a parameter isn't always needed.
// Default: Give a parameter a value if none is provided.
function greet(name, greeting) {
    return "".concat(greeting || "Hello", ", ").concat(name, "!");
}
console.log(greet("Nitesh")); // "Hello, Nitesh!"
console.log(greet("Nitesh", "Welcome")); // "Welcome, Nitesh!"
// console.log(greet("Nitesh", 65)); //03_funtions.ts:17:29 - error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
function logMessage(msg) {
    console.log(msg);
}
logMessage("normally logged message");
function throwError(msg) {
    console.log("before error");
    throw new Error(msg);
    // console.log("after error")
}
// throwError("error thrown")
//practice set
function calculateTax(price, taxrate) {
    if (taxrate === void 0) { taxrate = 0.10; }
    return price * taxrate;
}
console.log("tax is", calculateTax(90000));
function processInput(input) {
    if (typeof input === "string")
        return input.toUpperCase();
    if (typeof input === "number")
        return Math.pow(input, 2);
}
console.log(processInput("nitesh"));
console.log(processInput(28));
