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
function wrapInState<T>(value:T){
    return [value ,()=>{
        return value;
    } ] as const    
}
const [value,getValue] = wrapInState("nitesh")
const [num,getNum] = wrapInState(101)
console.log(getNum())

const records = {
    rec1:{id:123,}
}
interface DataPacket<T,U>{
    data:T,
    metaData:U
}

function fetchData<T,U>(data:T, metaData:U):DataPacket<T,U>{
        return {
            data,
            metaData
        }
}
const myData = 123
const fetchedData = fetchData(myData,typeof myData)
console.log(fetchedData)
// function updateRecord<T extends {id:number}>(record:T){
      
// }


function updateRecord<T extends { id: number }>(record: T) {
    // Because of the constraint, TS knows for SURE 'record' has an 'id'
    console.log(`Updating record with ID: ${record.id}`);
    
    // You can also access other properties if they exist, 
    // but TS only guarantees 'id' is there.
    return record;
}

// ✅ Test 1: Works! (It has an id)
updateRecord({ id: 8740, name: "Nitesh" }); 

// ✅ Test 2: Works! (Even with extra properties)
updateRecord({ id: 99, title: "Learn TS", priority: "High" });

// ❌ Test 3: ERROR! (Missing 'id')
// updateRecord({ name: "Stranger" });