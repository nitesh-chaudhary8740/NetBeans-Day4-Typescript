// Using an Interface
interface User {
    readonly id: number;   // Cannot be changed after creation
    name: string;
    email: string;
    age?: number;          // Optional property
}

// Using a Type Alias
type Point = {
    x: number;
    y: number;
};

const intern: User = {
    id: 101,
    name: "Nitesh",
    email: "nitesh@office.com"
    // age is optional, so we can omit it
};

// intern.id = 102; // Error: Cannot assign to 'id' because it is a read-only property.

//Extending Interfaces
interface Person {
    name: string;
}

interface Employee extends Person {
    employeeId: number;
    department: string;
}

const nitesh: Employee = {
    name: "Nitesh",
    employeeId: 8740,
    department: "Engineering"
};

//practice tasks
interface Vehicle{
    brand:string,
   readonly model:string,
    year?:number
}
interface Car extends Vehicle{
    isElectric:boolean
}
const myWorkCar:Car={
    isElectric:true,
    brand:"my brand",
    model:"model 123",
    year:2026
}
// myWorkCar.model="new model" //Error:04_Interfaces.ts:55:11 - error TS2540: Cannot assign to 'model' because it is a read-only property.
interface Inventory{
    [key:string]:number
}
const myInventory:Inventory={
    totalItem1:34,
    totalItem2:98,
    totalItem3:56,
}
//extra
interface FlexibleObject {
    [key: string]: string | number; 
}

const officeData: FlexibleObject = {
    employeeName: "Nitesh",    // string value
    officeCode: 8740,          // number value
    department: "Engineering", // string value
    floor: 5                   // number value
};