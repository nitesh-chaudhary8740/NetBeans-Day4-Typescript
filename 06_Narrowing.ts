// 1. Union Types (|)
// Think of this as an "OR" relationship. A variable can be one of several types.
let result: string | number;
result = "Success"; // OK
result = 200;       // OK

// 2. Intersection Types (&)
// Think of this as an "AND" relationship. This is mostly used to combine object types.
type Draggable = { drag: () => void };
type Resizable = { resize: () => void };

type UIElement = Draggable & Resizable; // Must have BOTH methods

// 3. Type Narrowing (The "Proof")
// If a variable is string | number, you can't just call .toUpperCase() because it might be a number. You have to narrow it using typeof.
function format(val: string | number) {
    if (typeof val === "string") {
        return val.trim(); // TS knows it's a string here
    }
    return val.toFixed(2); // TS knows it must be a number here
}

// 4. Discriminated Unions (The Pattern for Pros)
// When working with complex objects, we use a common property (a "literal") to tell them apart.
interface Circle { kind: "circle"; radius: number; }
interface Square { kind: "square"; side: number; }

type Shape = Circle | Square;

function getArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
    }
}
//practice tasks
// Create a Discriminated Union AppNotification:

// type: "email", address: string, body: string

// type: "sms", phoneNumber: number, content: string

// type: "push", deviceId: string, message: string

// type NotificationType = "email"|"sms"|"push"

// Write a function sendNotification(note: AppNotification):

// Use a switch or if/else on the type property.

// Log a specific message for each (e.g., "Sending Email to nitesh@office.com...").
interface Email {
    // type:NotificationType
    type:"email"
    address:string
    body:string
}
interface Sms {
    type:"sms",
    number:number
    content:string
}
interface Push { type: "push", deviceId: string, message: string }
type AppNotification = Email | Sms | Push

function sendNofication(note: AppNotification) {
    switch (note.type) {
        case "email":
            return () => console.log("Email logic...",note.body);
        case "sms":
            return () => console.log("SMS logic...");
        case "push":
            return () => console.log("Push logic...");
    }
}
const mySmsNotification:AppNotification = {
    type:"sms",
    number:76274398,
    content:"this is my smms"
}

const sendSmsNotification = sendNofication(mySmsNotification);
sendSmsNotification()
// Bonus (Intersection):

// Create a type Timestamp with a createdAt: Date property.

// Create a type LoggedNotification by intersecting AppNotification & Timestamp.
type TimeStamp = {createdAt:Date}
type LoggedNotification = AppNotification & TimeStamp
const myLoggedEmail:LoggedNotification = {
        type:"email",
        address:"nitesh@mail.com",
        body:"I am learning Typescript",
        createdAt:new Date() 
}
const sendEmailNotification = sendNofication(myLoggedEmail)
sendEmailNotification()


