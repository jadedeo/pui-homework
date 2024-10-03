const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
};


//creating the URL parameters; searching for links with question mark
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const chosenRoll = params.get('roll')



//setting the landing title to the corresponding roll 
const headerElement = document.querySelector('.landing-title-detail');
if (chosenRoll === null){
    headerElement.innerText = "Original Cinnamon Roll";
    
}
else{
    headerElement.innerText = chosenRoll + " Cinnamon Roll";
}



//set the gallery page image to the corresponding roll
let detailImage = document.querySelector("#detail-image"); 
detailImage.src = "assets/products/" + rolls[chosenRoll]["imageFile"];






//creating empty array cart 
let cart = [];

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}


//function to add new object into the cart array based on customer's selections 
function addToCart() {

    const rollGlaze = document.getElementById("glazingOptions");
    console.log(rollGlaze);
    const packSize = document.getElementById("pack-size");

    let glazeNewObject = rollGlaze.options[rollGlaze.selectedIndex];
    glazeNewObject = glazeNewObject.text;
   
    let packNewObject = packSize.options[packSize.selectedIndex];
    packNewObject = packNewObject.text;

    let cartRoll = new Roll(chosenRoll,glazeNewObject, packNewObject, baseprice); //constructing new object
    cart.push(cartRoll);
    console.log(cart);
}



