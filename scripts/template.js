function dishesGallery(i){

    return /*html*/`
    <div id="dish${i + 1}" class="dish">
        <button id="addMeal${i}" class="addMeal" onclick="addMealtoCart(${i})">Add</button>
        <div id="Properties${i}" class="Properties">

        <div id="dishName${i}" class="dishName">${meals[i].name}</div>
        <div id="dishPrice${i}" class="dishName">${meals[i].price.toLocaleString("de-DE", {style: 'currency', currency: 'EUR'})}</div>
        <div id="dishDescription${i}" class="dishName">${meals[i].description}</div>

        </div>
        </div>
    `
}

function orderedMealsTemplate(i){

    return /*html*/`
    <div id="meal${i}" class="meal">

        <div id="amountCounter${i}" class="amountCounter">${cartItems[i].amount}x</div>

        <div id="orderedMealWrapper" class="orderedMealWrapper">

        <div id="orderedMealName${i}" class="orderedMeal">${cartItems[i].name}</div>
        <div id="orderedMealPrice${i}" class="orderedMeal">${cartItems[i].price.toLocaleString("de-DE", {style: 'currency', currency: 'EUR'})}</div>

        </div>

        </div>
    `
}