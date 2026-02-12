// Pick<T, Keys> (The "Slicer")
// Creates a new type by picking only the specific keys you want from a larger interface.

// Use Case: A "User Card" component that only needs to display the name and email, but doesn't care about the id or password.

// TypeScript
// We only want 'name' and 'email'
type UserContactInfo = Pick<User1, "name" | "email" >;

const contact: UserContactInfo = {
    name: "Nitesh",
    email: "nitesh@dev.com",
    // uid:43
    
};