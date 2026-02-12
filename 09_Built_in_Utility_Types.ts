// Utility,What it does,Real-World Use Case
// Partial<T>,     Makes all properties optional (?).  ,Updating a profile where only 1-2 fields change.
// Required<T>,    Makes all properties mandatory.     ,Ensuring a configuration object is fully filled out.
// Readonly<T>,    Makes all properties immutable.     ,Preventing state or config from being accidentally edited.


// 🛠️ Practice Task: 08_Utility_Types.ts
// Let's apply this to your React knowledge. Imagine a Product Dashboard.

// Define a Product interface: id, name, price, description, stock.

// Task 1 (Omit): Create a ProductForm type that omits the id (because the DB creates it).

// Task 2 (Pick): Create a ProductPriceTag type that only picks name and price.

// Task 3 (Partial): Write a function updatePrice(id: number, data: Partial<Product>).

// Try to write these out. Which of these "transformers" do you think you'll use most in your current React project? (Hint: Usually it's Partial and Omit!)
interface Product {
    id:number
    name:string
    price:number
    description:string
    stock:number
}
const ProductForm: Omit<Product,"id"> = {
    name:"one plus",
    price:59599,
    description:"this is mobile device",
    stock:99
}
const ProductPriceTag :Pick<Product,"name"|"price"> = {
    name:"Samsung",
    price:99999
}
//standard way
const Products:Product[] = [{   
    id:1,
    name:"Lenovo Laptop",
    price:79999,
    description:"this is laptop",
    stock:11
}]
//generic way

const Products1:Array<Product> = [{
        id:1,
    name:"Lenovo Laptop",
    price:79999,
    description:"this is laptop",
    stock:11
}]
//Immutable pro way
const Products2 :Readonly<Product>[]=[{
        id:1,
    name:"Lenovo Laptop",
    price:79999,
    description:"this is laptop",
    stock:11
}] 
// Products2[0].id=454 //this is immutable

const updatePrice = (id:number,data:Partial<Product>)=>{
        const pIndex = Products.findIndex((p)=>p.id===id)
        if(pIndex===-1) alert("product not found")
        Products[pIndex] = {...Products[pIndex],...data}
}

// Define a Union Type: type Category = "Electronics" | "Fashion" | "Home";

// Create a Record: Use Record<Category, boolean> to track if each category is "active" or "enabled".

// TypeScript
type Category = "Electronics" | "Fashion" | "Home";

// Record ensures you MUST provide a value for EVERY category in the union
const categoryStatus: Record<Category, boolean> = {
    Electronics: true,
    Fashion: false,
    Home: true
};

// If you add a new category to the Union, TS will highlight 'categoryStatus' 
// and say: "Hey, you forgot to add the new category here!"