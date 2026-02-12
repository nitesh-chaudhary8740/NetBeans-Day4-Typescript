const myProfile: Readonly<User1> = { uid: 1, name: "Nitesh", email: "n@m.com" };
// myProfile.email="ds"
// myProfile.name = "New Name"; // ❌ Error: Cannot assign to 'name' because it is a read-only property.