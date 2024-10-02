// Store details
const storeName = "Vince Cruz World";
const storeLocation = "Downtown Quezon City";
const storeCapacity = 500; // Maximum capacity for products
// Dynamic product inventory (array of objects)
let products = [
    { name: "Laptop", price: 18999, quantity: 50 },
    { name: "Smartphone", price: 9999, quantity: 100 },
    { name: "Tablet", price: 12999, quantity: 80 }
];
// Calculate the total inventory value
let totalInventoryValue = 0; // Initial value
for (let product of products) {
    totalInventoryValue += product.price * product.quantity;
}
// Update the quantity of laptops after receiving a new shipment
for (let product of products) {
    if (product.name === "Laptop") {
        product.quantity += 10;  // New shipment of 10 laptops
    }
}
// Find the most expensive product based on price
let mostExpensiveProduct = products[0].name;  // Initialize with the first product
let highestPrice = products[0].price;         // Initialize with the first product's price

for (let product of products) {
    if (product.price > highestPrice) {
        highestPrice = product.price;
        mostExpensiveProduct = product.name;
    }
}
// Print output
console.log("Store Name:", storeName);
console.log("Store Location:", storeLocation);
console.log("Total Number of Products in the Store:", products.length);
console.log("Total Inventory Value: $", totalInventoryValue);
console.log("Updated Quantity of Laptops:", products[0].quantity);  // Laptop is the first product
console.log("Most Expensive Product:", mostExpensiveProduct);
