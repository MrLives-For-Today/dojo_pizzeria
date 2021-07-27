function pizzaOven(crust, sauce, cheese, toppings) {
    var pizza = {};
    pizza.crust = crust;
    pizza.sauce = sauce;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}

var pz1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
console.log(pz1);

var pz2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pz2);

var pz3 = pizzaOven("stuffed", "spicy", ["provolone", "feta"], ["mushrooms", "green peppers", "onions"]);
console.log(pz3);

var pz4 = pizzaOven("thin", "creamy Alfredo", "cheddar", ["pineapple", "sausage", "animal crackers"]);
console.log(pz4);