// 1. Union Types (|)
// Think of this as an "OR" relationship. A variable can be one of several types.
var result;
result = "Success"; // OK
result = 200; // OK
// 3. Type Narrowing (The "Proof")
// If a variable is string | number, you can't just call .toUpperCase() because it might be a number. You have to narrow it using typeof.
function format(val) {
    if (typeof val === "string") {
        return val.trim(); // TS knows it's a string here
    }
    return val.toFixed(2); // TS knows it must be a number here
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "square":
            return shape.side * shape.side;
    }
}
function sendNofication(note) {
    switch (note.type) {
        case "email":
            return function () { return console.log("Email logic...", note.body); };
        case "sms":
            return function () { return console.log("SMS logic..."); };
        case "push":
            return function () { return console.log("Push logic..."); };
    }
}
var mySmsNotification = {
    type: "sms",
    number: 76274398,
    content: "this is my smms"
};
var sendSmsNotification = sendNofication(mySmsNotification);
sendSmsNotification();
var myLoggedEmail = {
    type: "email",
    address: "nitesh@mail.com",
    body: "I am learning Typescript",
    createdAt: new Date()
};
var sendEmailNotification = sendNofication(myLoggedEmail);
sendEmailNotification();
