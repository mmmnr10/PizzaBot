const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

// ==================================================
// ==================================================
// ==================== FUNCTIONS ===================
// ==================================================
// ==================================================

function getFormInfo() {
  let orderName = document.querySelector(`#pizzaSelect`).value;
  /* console.log(orderName); */
  let isPizzaOnMenu = checkOrderName(orderName);
  if (isPizzaOnMenu == false) {
    alert("Vänligen ange en Pizza som finns på menyn...");
    document.getElementById(`#pizzaSelect`).value = ""; 
    getFormInfo(); 
  }
 
  let orderQuantity = document.querySelector(`#orderQuantity`).value;
  let realAmount = checkOrderQuantity(orderQuantity);
  if (realAmount == false) {
    alert("Vänligen ange en riktig mängd pizzor...");
    document.getElementById(`#orderQuantity`).value = 0; 
    getFormInfo(); /
  }

  const orderWaitTime = cookingTime(orderQuantity);

  const orderTotal = totalCost(orderQuantity, pizzaPrice);
    
  alert(
  `Great, I'll get started on your ${orderQuantity} ${orderName} right away, it will cost ${orderTotal} kr. The pizzas will take ${orderWaitTime} minutes.`
);
  
} 

function checkOrderName(orderName) {
  if (
    orderName == vegetarian ||
    orderName == hawaiian ||
    orderName == pepperoni
  ) {
    return true;
  } else {
    return false;
  }
}

function checkOrderQuantity(orderQuantity) {
  orderQuantity = parseInt(orderQuantity); 
  if (!Number.isInteger(orderQuantity)) { 
    return false;
  }
  if (orderQuantity < 0) { 
    return false;
  }
  return true;
}

function cookingTime(orderQuantity) {
  let orderWaitTime = 0;
  if (orderQuantity >= 1 && orderQuantity <= 2) {
    orderWaitTime = 10; // minutes...
    //} else if ( (3 <= orderQuantity <= 5) ) {
  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    orderWaitTime = 15;
  } else {
    // if 6+ pizzas.. or negative pizzas (controlled for that earlier though))
    orderWaitTime = 20;
  }
  return orderWaitTime;
}


function totalCost(orderQuantity, pizzaPrice) {
  
  return orderQuantity * pizzaPrice;
}



// not using, only used when User could type in their pizza (instead of drop-down-menu):

function fixOrderName(orderName) {
  
  orderName = orderName.trim().toLowerCase(); 
  if (!orderName.includes("pizza")) {
    orderName = orderName + " pizza"; 
  }
  return orderName;
}