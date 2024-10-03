let cart = [];



//creating the class roll
class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
        this.element = null;
    }
}

//constructing objects for display on shopping cart page
let originalRoll = new Roll("Original","Sugar Milk", 1, 2.49);
cart.push(originalRoll);

let walnutRoll = new Roll("Walnut", "Vanilla Milk", 12, 3.49);
cart.push(walnutRoll);

let raisinRoll = new Roll("Raisin", "Sugar Milk", 3, 2.99);
cart.push(raisinRoll);

let appleRoll = new Roll("Apple", "Original", 3, 3.49);
cart.push(appleRoll);

console.log(cart);

function createElement(cartitem) {
    // make a clone of the notecard template
    const template = document.querySelector('#shopping-cart-item');
    const clone = template.content.cloneNode(true);
    
    cartitem.element = clone.querySelector('.cart-item');

    const btnDelete = cartitem.element.querySelector('.remove');
    btnDelete.addEventListener('click', () => {
      deleteNote(cartitem);

    })

    // add the notecard clone to the DOM
    // find the notecard parent (#notecard-list) and add our notecard as its child
    const rollCartElement = document.querySelector('.cart-body');
    rollCartElement.prepend(cartitem.element);
    
    // populate the notecard clone with the actual notecard content
    updateElement(cartitem);

  
  }


  function deleteNote(cartitem) {
    // remove the notecard DOM object from the UI
    cartitem.element.remove();
    // remove the actual Notecard object from our set of notecards
    cart.delete(cartitem);
  }
  
  function updateElement(cartitem) {
    // get the HTML elements that need updating
    const cartImageElement = cartitem.element.querySelector("#shoppingCartImage");
    const cartTypeElement = cartitem.element.querySelector('#rollSelection');
    const cartGlazeElement = cartitem.element.querySelector('#glazeSelection');
    const cartPackElement = cartitem.element.querySelector('#packSelection');
    const cartPriceElement = cartitem.element.querySelector('#cart-price');
    
    // copy our notecard content over to the corresponding HTML elements
    //noteImageElement.src = notecard.noteImageURL;
    cartImageElement.src = "assets/products/" + cartitem.type.toLowerCase()+"-cinnamon-roll.jpg";
    cartTypeElement.innerText = cartitem.type + " Cinnamon Roll";
    cartGlazeElement.innerText = "Glazing: " + cartitem.glazing;
    cartPackElement.innerText = "Pack Size: " + cartitem.size;
    cartPriceElement.innerText = "$" + cartitem.basePrice;
  }

  function priceCalculation(cartitem){
    //const rollGlaze = document.getElementById("glazingOptions");
    //const packSize = document.getElementById("pack-size");
    //console.log(rollGlaze)

    //let glazePrice = rollGlaze[cartitem.glazing];
   //glazePrice = glazeNewObject.value;
    console.log(glazingOptions[0].glazingPrice);
  }
createElement(originalRoll);
createElement(walnutRoll);
createElement(raisinRoll);
createElement(appleRoll);

priceCalculation(walnutRoll);
