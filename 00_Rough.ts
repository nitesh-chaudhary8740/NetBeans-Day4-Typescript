
// // 1. The Blueprint (The Generic Interface)
// interface ApiResponse<T> {
//     statusCode:number,
//     message: string;
//     success: boolean;
//     data?: T; // This will hold our Admin, User, or Product
// }


// const sendSuccessResponse = <T>(
//     res: Response<ApiResponse<T>>, // We tell Express the JSON will match ApiResponse
//     apiRes: ApiResponse<T>
// ) => {
//     // Now res.json() will ONLY accept an object that matches ApiResponse<T>
//     return res.status(apiRes.statusCode).json(apiRes);
// };

// // // 3. Using it with your Admin Login logic
// // const mockAdmin = { 
// //     username: "Nitesh_Dev", 
// //     role: "SuperAdmin" 
// // };

// // // When we call the function, TypeScript "captures" the shape of mockAdmin 
// // // and plugs it into 'DataType'
// // const loginResponse = createSuccessResponse(mockAdmin, "Login successfully");

// // // 4. Verification
// // console.log(loginResponse.success);       // true
// // console.log(loginResponse.data?.username); // "Nitesh_Dev" (TS knows this exists!)