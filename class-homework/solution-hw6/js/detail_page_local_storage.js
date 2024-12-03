let cartLocalStorage = JSON.parse(localStorage.getItem('storedItems')) || [];


//function to add new object into the cart array based on customer's selections 
function addToCart() {

    const rollGlaze = document.getElementById("glazingOptions");
    const packSize = document.getElementById("pack-size");

    let glazeNewObject = rollGlaze.options[rollGlaze.selectedIndex];
    glazeNewObject = glazeNewObject.text;
   
    let packNewObject = packSize.options[packSize.selectedIndex];
    packNewObject = packNewObject.text;
    
    //creating a unique ID for each cart item based on a timestamp and converting this timestamp into a string
    let cartID = Date.now();
    cartID.toString();
    
    let cartRoll = new Roll(chosenRoll,glazeNewObject, packNewObject, baseprice, cartID); //constructing new object
    cartLocalStorage.push(cartRoll); 
    
    saveToLocalStorage();
    console.log(cartLocalStorage);
}


function saveToLocalStorage() {
    const cartItemsArray = Array.from(cartLocalStorage);
    const cartItemsString = JSON.stringify(cartItemsArray);
    localStorage.setItem('storedItems', cartItemsString);
    
  }

  



