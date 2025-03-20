let cartItems = []

function init(){

    renderDishesGallery()
    
}


function renderDishesGallery(){

    for (let i = 0; i < meals.length; i++) {
        document.getElementById("dishes-container").innerHTML += dishesGallery(i)
        
        
    }
}

function addMealtoCart(i){      
    
        // let addMealNameValueRef = document.getElementById(`dishName${i}`);
        // let addMealPriceValueRef = document.getElementById(`dishPrice${i}`);

        let addMealNameValue = meals[i].name;
        let addMealPriceValue = meals[i].price;

        let addMeal = {name: addMealNameValue, price: addMealPriceValue, amount:1}
        
        
    
        console.log(addMeal);
        
    
    cartItems.push(addMeal);

    document.getElementById("orderedMeals").innerHTML += orderedMealsTemplate(i)

   
    
}


// function amountCounter(i){

//     if ( cartItems[i].amount == 1) {}
//     else {
//         cartItems[i].amount + 1
//         document.getElementById("orderedMeals").innerHTML = `<div id="amountCounter${i}" class="amountCounter">${cartItems[i].amount}x</div>`

//     }
// }
 
