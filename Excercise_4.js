let products = [
  { product: "Shirt", price: 10 },
  { product: "Laptop", price: 2400 },
  { product: "Bike", price: 450 },
  { product: "Chair", price: 150 },
  { product: "Phone", price: 1500 },
  { product: "Shoes", price: 60 },
  { product: "Car", price: 25000 },
  { product: "Coffe Machine", price: 500 },
];

// Функция за категоризиране на продуктите

function categorizeProducts(products) {
  let categorizedProducts = {
    cheap: [],
    normal: [],
    expensive: [],
    very_expensive: [],
  };

  // Обхождане на продуктите по цени и добавяне на всеки в правилна категория (cheap, normal, expensive, very_expensive)

  for (let i = 0; i < products.length; i++) {
    if (products[i].price >= 0 && products[i].price <= 100) {
      categorizedProducts.cheap.push(products[i]);
    } else if (products[i].price >= 100 && products[i].price <= 500) {
      categorizedProducts.normal.push(products[i]);
    } else if (products[i].price >= 500 && products[i].price <= 3000) {
      categorizedProducts.expensive.push(products[i]);
    } else {
      categorizedProducts.very_expensive.push(products[i]);
    }
  }

  // Изчисляване на сумата на всички продукти

  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    sum += products[i].price;
  }

  console.log("the total price of all of the products is " + sum + " lv");
  return categorizedProducts;
}

console.log(categorizeProducts(products));
