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
