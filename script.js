function init(){

    renderDishesGallery()
}


function renderDishesGallery(){

    for (let i = 0; i < meals.length; i++) {
        document.getElementById("dishes-container").innerHTML += dishesGallery(i)
        
        
    }
}