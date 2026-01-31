// 1. Primitive Alias
type ID = string | number;

// 2. Union Alias (Very common in real apps)
type UserRole = "Admin" | "Intern" | "Lead";

// 3. Object Alias
type EmployeeRecord = {
    id: ID;
    username: string;
    role: UserRole;
};

// 4. Intersections (Combining types)
type ContactDetails = {
    email: string;
    phone: number;
};

// Combining EmployeeRecord and ContactDetails
type FullEmployeeProfile = EmployeeRecord & ContactDetails;

const internProfile: FullEmployeeProfile = {
    id: "INT-8740",
    username: "Nitesh_Dev",
    role: "Intern",
    email: "nitesh@office.com",
    phone: 9876543210
};

//practice tasks

//#task1: Create a type Status: It should only allow the values "ToDo", "InProgress", or "Done".
type Statuses = "Todo"|"InProgress"|"Done" //I think Status(identifier) I used somewhere in other file in same directory(./Typescript) so using Statuses
const task1Status:Statuses="Done"
// const task2Status:Statuses="done" //case senstive too(observation)

//#task2: Create a type Task:

// title: string.

// status: Use your Status type.

// importance: A number from 1 to 10.

type Task ={
    title:string,
    status:Statuses,
    importance:number//I've no idea to format(not appropriate word I found to describe so used "format") it for 1 to 10
}

//#task3: Create an Intersection:

// Create a type TimedTask that combines Task with an object containing deadline: Date.

type Duration={
    deadline:Date
}
type TimedTask = Task & Duration;
const myTimedTask1:TimedTask  ={
    title:"this is title",
    status:"Todo",
    importance:3,
    deadline:new Date("01/02/2026")
}
//#task-4: Test the "Contract": Try to create a task with a status of "Backlog" and see if TypeScript catches the mistake.
// const myTimedTask2:TimedTask  ={
//     title:"this is title",
//     status:"Backlog",//Type '"Backlog"' is not assignable to type 'Statuses'.ts(2322), 
//     // 05_Alias.ts(48, 5): The expected type comes from property 'status' which is declared here on type 'TimedTask'
//     importance:3,
//     deadline:new Date("01/02/2026")
// }