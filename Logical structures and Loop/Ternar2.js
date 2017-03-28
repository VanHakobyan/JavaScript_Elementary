var quantity = 10;           
var price = 100;      
var discount = 0.75;  
var cost;             


cost = quantity >= 10 ? quantity * price * discount : quantity * price;

document.write("Coins " + cost + "$");
