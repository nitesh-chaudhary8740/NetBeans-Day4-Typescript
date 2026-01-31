var internProfile = {
    id: "INT-8740",
    username: "Nitesh_Dev",
    role: "Intern",
    email: "nitesh@office.com",
    phone: 9876543210
};
var task1Status = "Done";
var myTimedTask1 = {
    title: "this is title",
    status: "Todo",
    importance: 3,
    deadline: new Date("01/02/2026")
};
//#task-4: Test the "Contract": Try to create a task with a status of "Backlog" and see if TypeScript catches the mistake.
// const myTimedTask2:TimedTask  ={
//     title:"this is title",
//     status:"Backlog",//Type '"Backlog"' is not assignable to type 'Statuses'.ts(2322), 
//     // 05_Alias.ts(48, 5): The expected type comes from property 'status' which is declared here on type 'TimedTask'
//     importance:3,
//     deadline:new Date("01/02/2026")
// }
