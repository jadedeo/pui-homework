let cart = [];



//creating the class roll
class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
        
        //initializing variables for calculating prices
        this.fullPrice = null;
        this.glazePrice = 0;
        this.packPrice = 1;
        
        this.element = null;
       
    }

    getGlazePrice(){
       
      for(let i = 0; i <glazingOptions.length; i++){
         
       if(this.glazing == glazingOptions[i].glaze){
           this.glazePrice = glazingOptions[i].glazingPrice;
           console.log(this.glazePrice);
         }
       }
     }

    getPackPrice(){
       for(let i = 0; i <packOptions.length; i++){
        
        if(this.size == packOptions[i].packSize){
            this.packPrice = packOptions[i].packPrice;
            console.log(this.packPrice);
        }
      }
    }

    calculateTotalPrice(){
      this.getGlazePrice();
      this.getPackPrice();
      this.fullPrice = (this.glazePrice + this.basePrice) * this.packPrice;
      this.fullPrice = this.fullPrice.toFixed(2);
      return this.fullPrice;
    }
  }//end of class roll 

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
    const template = document.querySelector('#shopping-cart-item');
    const clone = template.content.cloneNode(true);
    
    cartitem.element = clone.querySelector('.cart-item');

    const btnDelete = cartitem.element.querySelector('.remove');
    btnDelete.addEventListener('click', () => {
      deleteNote(cartitem);
      calculateTotalPrice();
    })

    const rollCartElement = document.querySelector('.cart-body');
    rollCartElement.prepend(cartitem.element);

    updateElement(cartitem);
  }


  function deleteNote(cartitem) {
    cartitem.element.remove();

    for(let i = 0; i <cart.length; i++){
      if(cartitem.type == cart[i].type){
          cart.splice(i, i+1);
        }
      }
  }
  
  function updateElement(cartitem) {
    const cartImageElement = cartitem.element.querySelector("#shoppingCartImage");
    const cartTypeElement = cartitem.element.querySelector('#rollSelection');
    const cartGlazeElement = cartitem.element.querySelector('#glazeSelection');
    const cartPackElement = cartitem.element.querySelector('#packSelection');
    const cartPriceElement = cartitem.element.querySelector('#cart-price');
    
    cartImageElement.src = "assets/products/" + cartitem.type.toLowerCase()+"-cinnamon-roll.jpg";
    cartTypeElement.innerText = cartitem.type + " Cinnamon Roll";
    cartGlazeElement.innerText = "Glazing: " + cartitem.glazing;
    cartPackElement.innerText = "Pack Size: " + cartitem.size;
    cartPriceElement.innerText = "$" + cartitem.calculateTotalPrice();
  }

createElement(originalRoll);
createElement(walnutRoll);
createElement(raisinRoll);
createElement(appleRoll);


//calculating total cart price 
const cartTotalPrice = document.querySelector("#total-cart-price");
let cartPrice = 0;
for (let i = 0; i < cart.length; i++){
  cartPrice = cartPrice + parseFloat(cart[i].fullPrice);
}
cartTotalPrice.innerText = "$" + cartPrice;




function calculateTotalPrice(){
  let cartPrice = 0;
  for (let i = 0; i < cart.length; i++){
    cartPrice = cartPrice + parseFloat(cart[i].fullPrice); 
  }
  cartTotalPrice.innerText = "$" + cartPrice;
}




