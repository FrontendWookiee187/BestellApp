function dishesGallery(i){

    return /*html*/`
    <div id="dish${i + 1}" class="dish">
        <button id="addMeal${i + 1}" class="addMeal">Add</button>
        <div id="Properties${i + 1}" class="Properties">

        <div id="dishName${i + 1}" class="dishName">${meals[i].name}</div>
        <div id="dishPrice${i + 1}" class="dishName">${meals[i].price.toLocaleString("de-DE", {style: 'currency', currency: 'EUR'})}</div>
        <div id="dishDescription${i + 1}" class="dishName">${meals[i].description}</div>

        </div>
        </div>
    `
}