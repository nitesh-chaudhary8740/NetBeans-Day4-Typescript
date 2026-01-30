let myName: string = "Nitesh";
let totalProjects: number = 10;
let isLearningTS: boolean = true;
console.log("myName <String>",myName)
console.log("totalProjects <Number>",totalProjects)
console.log("isLearningTS <Boolean>",isLearningTS)
// TS will throw an error if you try this:
// myName = 100; // Error: Type 'number' is not assignable to type 'string'.

let emptyValue: null = null;
console.log("emptyValue <null>",emptyValue)
let notFound: undefined = undefined;
console.log("not found <undefined>",notFound)

//The any type is basically telling TypeScript to "shut up and let me do whatever I want." It turns off type checking.

// Warning: Overusing any makes your TypeScript project just a regular (and heavy) JavaScript project. Avoid it!
let anyType:any= "any"
console.log("anyType <any>",anyType)
anyType=100
console.log("anyType <any>",anyType)

// Array of strings
let skills: string[] = ["HTML", "CSS", "JS"];
console.log("skills[] <String>",skills)
// Tuple: [id, username, isActive]
let user: [number, string, boolean] = [1, "nitesh_dev", true];
console.log("user[id, username, isActive] [<Number> <String> <Boolean>]",user)

// Error: The order matters in Tuples!
// user = ["Admin", 1, true]; // Error
enum Status {
    Pending,   // 0
    Active,    // 1
    Completed  // 2
}

let currentStatus: Status = Status.Active;
console.log(currentStatus); // Outputs: 1
 
//practice tasks
let car:string = "Dodge Charger"
console.log(car)
let prices:number[] = [67999,54999,98999]
console.log(prices)
let cord:[number,number]=[23.3015,77.3672]
console.log(cord)
// car=45 //Type 'number' is not assignable to type 'string'.