// Access Modifiers (The "Shields")
// This is the most important feature TS adds to JS classes. It controls "visibility."

// public (Default): The property/method can be accessed from anywhere.

// private: The property/method is only accessible inside the class it was defined in. Even "child" classes cannot see it.

// protected: The property/method is accessible inside the class and any class that extends (inherits) from it.
class Intern {
    protected id!:number;
    setId(id:number){
        this.id=id
    }
    // By adding 'public' or 'private' in the constructor, 
    // TS automatically creates and assigns the property.
    constructor(public name: string, private stipend: number) {}
}
const nitesh1 = new Intern("Nitesh", 5000);
console.log(nitesh1.name); // Works
// console.log(nitesh.stipend); // ❌ Error: Property 'stipend' is private

class Account {
    private _balance: number = 0;

    get balance(): string {
        return `Your balance is $${this._balance}`;
    }

    set balance(amount: number) {
        if (amount < 0) return; // Validation logic
        this._balance = amount;
    }
}
const myAccount = new Account()
myAccount.balance=999999;
console.log(myAccount.balance)
// Task 1: The Base Class
// Create an abstract class called Employee.

// Properties: A public name and a protected id (use shorthand constructor).

// Abstract Method: Define an abstract method getSalary(): number. (This forces every type of employee to implement their own salary logic).

abstract class Employee{

    constructor(public name:string,protected id:number){  
    }
    abstract getSalary():number
}
// Task 2: The Specific Employee
// Create a class Developer that extends Employee.

// Constructor: Should take name, id, and a private property language.

// Method: Implement getSalary(). Let's say developers get a flat $5000.

// Method: A describe() method that logs "I am [name], I code in [language]."
class Developer extends Employee{
    getSalary(): number {
        return this.salary
    }
    describe():void{
        console.log(`I am ${this.name} I code in ${this.language}`)
    }
    constructor( name:string, id:number,private salary:number=5000,public language:string){
        super(name,id)
    }
}
const dev1 = new Developer("Nitesh",8740,undefined,"js")
console.log(dev1.getSalary())
dev1.describe()

// Task 3: The Manager (Protected Access)
// Create a class Manager that extends Employee.

// Properties: A private array managedEmployees: string[].

// Method: addEmployee(name: string).

// Method: listId() — This should log the id property. (This tests if protected is working, as Manager should be able to see the id from the parent Employee class).

class Manager extends Employee{
        getSalary(): number {
            return this.salary
        }
        addEmployee(name:string):void{
            this.managedEmployess.push(name)
        }
        getEmployees():string[]{
                return this.managedEmployess
        }
        private managedEmployess:string[] =[]

        listId():void{
            console.log(this.id)
        }
        constructor(name:string,id:number,private salary:number){
            super(name,id)
        }
}
const manager1 = new Manager("ManagerA",123,20000)
manager1.listId()
manager1.addEmployee("emp1")
manager1.addEmployee("emp2")
manager1.addEmployee("emp3")
const allEmployees = manager1.getEmployees()
allEmployees.forEach(emp=>{
    console.log(emp)
})