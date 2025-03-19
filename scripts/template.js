function dishesGallery(i){

    return /*html*/`
    <div id="dish${i + 1}" class="dish">
        <div id="dishName${i + 1}" class="dishName">${meals[i].name}</div>
        <div id="dishName${i + 1}" class="dishName">${meals[i].price.toLocaleString("de-DE", {style: 'currency', currency: 'EUR'})}</div>
        <div id="dishName${i + 1}" class="dishName">${meals[i].description}</div>


        </div>
    `
}