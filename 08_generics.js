// // 🛠️ Practice Task: 07_Generics_Retry.ts
// // Since you are working in React, let’s do a task that mimics a React Hook.
// // Create a function called wrapInState<T>:
// // It should take an initialValue of type T.
// // It should return an object with two properties:
// // value: which is type T.
// // getValue: a function that returns type T.
// // Example of how it should work:
// // TypeScript
// function wrapInState<T>(value:string):<T>{
// }
// const stringState = wrapInState("Hello");
// console.log(stringState.value); // TS knows this is a string
// const numberState = wrapInState(100);
// console.log(numberState.value); // TS knows this is a number
function wrapInState(value) {
    return [value, function () {
            return value;
        }];
}
var _a = wrapInState("nitesh"), value = _a[0], getValue = _a[1];
var _b = wrapInState(101), num = _b[0], getNum = _b[1];
console.log(getNum());
var records = {
    rec1: { id: 123, }
};
function fetchData(data, metaData) {
    return {
        data: data,
        metaData: metaData
    };
}
var myData = 123;
var fetchedData = fetchData(myData, typeof myData);
console.log(fetchedData);
function updateRecord(record) {
}
