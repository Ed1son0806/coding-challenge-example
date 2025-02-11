//Task 1

let products = [
    {name: "Laptop", price: 1200, category: "Electronics" },
    {name: "Phone", price: 800, category: "Electronics" },
    {name: "Desk Chair", price: 150, category: "Furniture" },
    {name: "Nootebook", price: 5, category: "Stationery" },
    {name: "Headphones", price: 100, category: "Electronics" },
]

function getProductsByCategory(products, category) {
   return products.filter(product => product.categoory === category)
}

console.log(getProductsByCategory(products, "Electronics"));


//Task 2 - Array Methods - Map

function applyDiscount(products, discountRate) {
    return products.map(product => ({
        ...product,
        price: product.price - (product.price * discountRate)
    }

    ))
}

console.log(applyDiscount(products, .1))


//Taks 3 Array Methos - Reduce
let sales = [250, 400, 150, 900, 1200];
function calculateTotalRevenue(sales) {

    return sales.reduce((total, item)=> total + sale, 0)

}

console.log(calculateTotalRevenue(sales));

//Task 4 - Object Manipulation

let emplooyee = {
    name: "John Doe",
    salary: 50000,
    position: "Manager"
};

function updateSalary(emplooyee, percentageIncrease) {
    emplooyee.salary = emplooyee.salary + (emplooyee.salary * percentageIncrease)

};


updateSalary(emplooyee, .1)

console.log(emplooyee)