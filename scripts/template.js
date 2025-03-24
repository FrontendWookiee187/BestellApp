function dishesGallery(i){

    return /*html*/`
    <div id="dish${i + 1}" class="dish">
        <button id="addMeal${i}" class="addMeal" onclick="addMealtoCart(${i})" ><img src="assets/img/plus_icon_circle_transparent.png" alt=""></button>
        <div id="Properties${i}" class="Properties">

        <div id="dishName${i}" class="dishName"><h3>${meals[i].name}</h3></div>
        <div id="dishPrice${i}" class="dishName">${meals[i].price.toLocaleString("de-DE", {style: 'currency', currency: 'EUR'})}</div>
        <div id="dishDescription${i}" class="dishName">${meals[i].description}</div>

        </div>
        </div>
    `
}

function orderedMealsTemplate(cartItems){

    let cart = ""

    for (let i = 0; i < cartItems.length; i++) {

        cart +=  /*html*/`
        <div id="meal${i}" class="meal">

            <button id="increase${i}" class="inDecrease" onclick="increase(${i})"><img src="assets/img/plus_icon_transparent.png" alt=""></button>

            <div id="amountCounter${i}" class="amountCounter">${cartItems[i].amount}x</div>

            <button id="decrease${i}" class="inDecrease" onclick="decrease(${i})"><img src="assets/img/minus_icon_transparent.png" alt=""></button>

            <div id="orderedMealWrapper" class="orderedMealWrapper">
    
            <div id="orderedMealName${i}" class="orderedMeal">${cartItems[i].name}</div>
            <div id="orderedMealPrice${i}" class="orderedMeal">${cartItems[i].price.toLocaleString("de-DE", {style: 'currency', currency: 'EUR'})}</div>
    
            </div>

            <button id="delteDish${i}" onclick="(deleteItem(${i}))" class="deleteBTN"><img src="assets/img/delete_forever_.png" alt=""></button>
    
            </div>     `
            }

    return cart
}

function renderTotal(cartItems){

    let totalPrice = 0;

    for (let i = 0; i < cartItems.length; i++) {
    
        totalPrice += cartItems[i].price;
    
}

document.getElementById("totalSum").innerHTML = "Gesamt: " + totalPrice.toLocaleString("de-DE", {style: 'currency', currency: 'EUR'});

}



