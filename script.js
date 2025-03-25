function init() {
  renderDishesGallery();
  renderTotal(cartItems);
}

function renderDishesGallery() {
  for (let i = 0; i < meals.length; i++) {
    document.getElementById("dishes-container").innerHTML += dishesGallery(i);
  }
}

function addMealtoCart(i) {
  let addMealNameValue = meals[i].name;
  let addMealPriceValue = meals[i].price;

  let addMeal = { name: addMealNameValue, price: addMealPriceValue, amount: 1 };
  let newItem = true;

  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].name === addMeal.name) {
      cartItems[i].amount = cartItems[i].amount + 1;
      cartItems[i].price = addMeal.price * cartItems[i].amount;
      newItem = false;
    }
  }
  if (newItem === true) {
    cartItems.push(addMeal);
  }

  document.getElementById("orderedMeals").innerHTML =
    orderedMealsTemplate(cartItems);
  renderTotal(cartItems);
}

function increase(i) {
  cartItems[i].amount = cartItems[i].amount + 1;
  cartItems[i].price = meals[i].price * cartItems[i].amount;

  document.getElementById("orderedMeals").innerHTML =
    orderedMealsTemplate(cartItems);

  renderTotal(cartItems);
}

function decrease(i) {
  if (cartItems[i].amount <= 1) {
  } else {
    cartItems[i].amount = cartItems[i].amount - 1;
    cartItems[i].price = meals[i].price * cartItems[i].amount;

    document.getElementById("orderedMeals").innerHTML =
      orderedMealsTemplate(cartItems);

    renderTotal(cartItems);
  }
}

function deleteItem(i) {
  cartItems.splice(i, 1);
  console.log(cartItems);

  document.getElementById("orderedMeals").innerHTML =
    orderedMealsTemplate(cartItems);
  renderTotal(cartItems);
}

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
} 

  function mealsInResponsiveCart(cartItems){
    let cartContentNormal = document.getElementById('order');
    let cartContentResponsive = document.getElementById('orderedMealsResponsive');
    cartContentResponsive.innerHTML = cartContentNormal.innerHTML;
  }


  function renderFromResponsiveCartToCart(cartItems){

    document.getElementById("orderedMealsResponsive").innerHTML = ""
    
    document.getElementById("orderedMeals").innerHTML =
    orderedMealsTemplate(cartItems);
  renderTotal(cartItems);

  }


  function confirmOrder(i) {

    let totalPriceAfterOrder = 0

    document.getElementById("orderedMeals").innerHTML = ""
    document.getElementById("orderedMeals").innerHTML += confirmOrderRenderResponse()
    cartItems.splice(i, 1);
    
    document.getElementById("totalSum").innerHTML = "Gesamt: " + totalPriceAfterOrder.toLocaleString("de-DE", {style: 'currency', currency: 'EUR'});  
    document.getElementById("orderBTN").innerHTML = "Gesamt: " + totalPriceAfterOrder.toLocaleString("de-DE", {style: 'currency', currency: 'EUR'});     
  }

