"use strict";
// function identity(arg: any): any {
//   return arg;
// }
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var _07_Classes_1 = require("./07_Classes");
// const result = identity("Hello"); // result is type 'any'
function identity(arg) {
    return arg;
}
// Now, TS "captures" the type
var result1 = identity("Hello"); // T is now string
result1.charAt(0);
var result2 = identity(100); // T is now number
function getLastNumber(arr) { return arr[arr.length - 1]; }
function getLastString(arr) { return arr[arr.length - 1]; }
function getLastItem(arr) {
    return arr[arr.length - 1];
}
var lastNum = getLastItem([1, 2, 3]); // TS knows this is a number
var lastStr = getLastItem(["a", "b", "c"]); // TS knows this is a string
// In TypeScript, there isn't a "fixed number" of generics (like there are 8 primitive types). Instead, Generics are a system or a tool you use to create as many custom types as you need.
// However, we can categorize how they are used into three main levels. Think of it like a toolkit:
// 1. Custom Generics (The ones you create)
// You can apply the generic <T> syntax to almost anything you build:
// Generic Functions: function wrap<T>(item: T) { ... }
// Generic Interfaces: interface Box<T> { contents: T }
// Generic Classes: class Storage<T> { private data: T[] = [] }
// Generic Type Aliases: type Pair<T> = [T, T]
// 2. Built-in Generics (Provided by TypeScript)
// TypeScript gives you several "out-of-the-box" generics that are used constantly in professional development:
// Array: Array<string> is the same as string[].
// Promise: Promise<number> tells TS that a background task will eventually return a number.
// Map & Set: Map<string, number> defines a key-value store where keys are strings and values are numbers.
// 3. Utility Types (Advanced Generics)
// These are special "pre-made" generics that transform one type into another. These are part of Phase 3, Section 8 of your roadmap:
// Partial<T>: Makes all properties in an interface optional.
// Readonly<T>: Makes all properties unchangeable.
// Pick<T, K>: Creates a new type by picking only specific keys from a bigger interface.
// 💡 Can you use more than one?
// Yes! You aren't limited to just <T>. You can use as many placeholders as you want, usually labeled T, U, V, or K (for Key).
// TypeScript
// A function that merges two different types of objects
function merge(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var result = merge({ name: "Nitesh" }, { age: 25 });
// Create a Generic Function wrapData<T>:
// It takes an argument of type T.
// It returns an object of type ApiResponse<T>.
function wrapData(arg) {
    return {
        status: "success",
        data: arg
    };
}
// Create a Generic Function wrapData<T>:
// It takes an argument of type T.
// It returns an object of type ApiResponse<T>.
var respnseData1 = wrapData(_07_Classes_1.dev1);
var respnseData2 = wrapData("hi this is reponse data");
console.log(respnseData1.data.describe);
console.log(respnseData2.data.toLocaleUpperCase(), respnseData2.status);
