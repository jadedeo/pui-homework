
//setting up the glazing objects


let glazingOptions = [
    {
        glaze: "Original",
        glazingPrice: 0,
    },
    {
        glaze: "Sugar Milk",
        glazingPrice: 0,
    },
    {
        glaze: "Vanilla Milk",
        glazingPrice: .50,
    },
    {
        glaze: "Double Chocolate",
        glazingPrice: 1.5,
    }

]

let packOptions = [
    {
        packSize: "1",
        packPrice: 1,
    },
    {
        packSize: "3",
        packPrice: 3,
    },
    {
        packSize: "6",
        packPrice: 5,
    },
    {
        packSize: "12",
        packPrice: 10,
    }

]


//populating the glaze select dropdown menu
let selectElementGlaze = document.querySelector('#glazingOptions')
    for(let i = 0; i < glazingOptions.length; i++){
        var optionElementGlaze = document.createElement("option");

        optionElementGlaze.text = glazingOptions[i].glaze; 
        optionElementGlaze.value = glazingOptions[i].glazingPrice;
        selectElementGlaze.appendChild(optionElementGlaze); 
    }


//populating the pack size select dropdown menu
let selectElementPack = document.querySelector('#pack-size')
    for(let i = 0; i < glazingOptions.length; i++){
        var optionElementPack = document.createElement("option");
        
        optionElementPack.text = packOptions[i].packSize; 
        optionElementPack.value = packOptions[i].packPrice;
        selectElementPack.appendChild(optionElementPack);     
    }

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
    
const baseprice = rolls[chosenRoll]["basePrice"];; //initializing the constant base price based on selection 
let price = 0; //initializing price which will be used in the price calculation; just setting to 0 to start


let priceText = document.getElementById("priceText"); //initializing the variable that will be used to change html 
priceText.innerHTML = "$" + baseprice;

function glazingChange(){
    const glazePriceTest = document.getElementById("glazingOptions"); //accessing the html values created from the objects in js
    const packPriceTest = document.getElementById("pack-size");

    let glazePriceTestChange = glazePriceTest.value; //assigning a variable the value of the selected option
    let packPriceTestChange = packPriceTest.value;

    glazePriceTestChange = parseFloat(glazePriceTestChange); //changing the variable into a integer
    packPriceTestChange = parseFloat(packPriceTestChange);

    price = (baseprice + glazePriceTestChange) * packPriceTestChange; //calculating

    price = price.toFixed(2); //making sure this calculation only has two decimal places
    priceText.innerHTML = "$" + price; //chaning the html 
}




