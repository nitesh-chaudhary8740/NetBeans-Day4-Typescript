interface User1 {
    uid: number;
    name: string;
    email: string;
}
// Makes every property in an interface optional.

// Partial<User> is like: { id?: number; name?: string; email?: string; }
function updateUser(fieldsToUpdate: Partial<User1>) {
    // Logic to save to DB

}

updateUser({ name: "Nitesh",email:"dsh" }); // ✅ Valid! No need to provide email or id.