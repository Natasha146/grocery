var banana =  .79;
var apple = 1.25;
var bread = 2.99;
var milk = 3.49;
var eggs = 4.25;

cartTotal = 0;
function addToCart(item){
cartTotal= item + cartTotal;
//return cartTotal;
}
//console.log(addToCart (banana));
function removeFromCart(item)
{
cartTotal= cartTotal - item;
}

function discountItem(item, discount){
return item - (item * discount)
}
function calculateTheTotal(){
    console.log("Final total: $" + cartTotal)
}

var discountMilk = discountItem(item, discount){
  
}