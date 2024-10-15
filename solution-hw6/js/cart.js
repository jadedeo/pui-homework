//let cart = []; 

let cart = []; 

  function addNewCartItem(rollType, rollGlazing, packSize, rollPrice, cartID) {
    const cartItemStored = new Roll(rollType, rollGlazing, packSize, rollPrice, cartID);

    cart.push(cartItemStored);
  
    return cartItemStored;
  }


function createElement(cartitem) {
    const template = document.querySelector('#shopping-cart-item');
    const clone = template.content.cloneNode(true);
    
    cartitem.element = clone.querySelector('.cart-item');

    const btnDelete = cartitem.element.querySelector('.remove');
    btnDelete.addEventListener('click', () => {
      deleteCartitem(cartitem);
      calculateTotalPrice();
    })

    const rollCartElement = document.querySelector('.cart-body');
    rollCartElement.prepend(cartitem.element);

    updateElement(cartitem);
  }

  function retrieveFromLocalStorage() {
    const cartItemsString= localStorage.getItem('storedItems');
    const cartItemsArray = JSON.parse(cartItemsString);
    
    for (const item of cartItemsArray) {
      const cartItem = addNewCartItem(item.type, item.glazing,
        item.size, item.basePrice, item.cartID);
        createElement(cartItem);
    }
  }


  function deleteCartitem(cartitem) {
    cartitem.element.remove();

    for(let i = 0; i <cart.length; i++){
      if(cartitem.cartID == cart[i].cartID){
          cart.splice(i, 1);
          cartLocalStorage.splice(i,1);
        }
      }
    
      saveToLocalStorage();
      console.log(cartLocalStorage);
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


retrieveFromLocalStorage();


const cartTotalPrice = document.querySelector("#total-cart-price");
let cartPrice = 0;
for (let i = 0; i < cart.length; i++){
  cartPrice = cartPrice + parseFloat(cart[i].fullPrice);
}
cartTotalPrice.innerText = "$" + cartPrice.toFixed(2);


function calculateTotalPrice(){
  let cartPrice = 0;
  for (let i = 0; i < cart.length; i++){
    cartPrice = cartPrice + parseFloat(cart[i].fullPrice);
  }
  cartTotalPrice.innerText = "$" + cartPrice.toFixed(2);
}








