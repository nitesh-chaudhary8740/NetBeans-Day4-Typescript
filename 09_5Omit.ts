// Omit<T, Keys> (The "Cleaner")
// The opposite of Pick. It creates a type by removing specific keys.

// Use Case: When sending data to an API to create a new user. You have the User interface, but the API generates the id automatically, so you want to send everything except the id.

// TypeScript
type NewUserRequest = Omit<User1, "uid">;

const request: NewUserRequest = {
    name: "New Joiner",
    email: "new@company.com"
    // id is not allowed here!
};