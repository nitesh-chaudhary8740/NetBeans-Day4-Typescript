function createLoggers(val: number, obj: { text: string }) {
    return {
        logPrimitive: () => console.log("Primitive:", val),
        logObject: () => console.log("Object:", obj.text)
    };
}

let myNum = 10;
let myObj = { text: "Original" };

const loggers = createLoggers(myNum, myObj);

// Change the original variables
myNum = 20; 
myObj.text = "Changed";

loggers.logPrimitive(); // Prints: 10 (It kept the copy of the value at that moment)
loggers.logObject();    // Prints: "Changed" (It followed the reference to the same object)