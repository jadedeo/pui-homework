
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

let packSelections = [
    {
        packSize: "1",
        packPrice: 1,
    },
    {
        packSize: "3",
        packPrice: 3,
    },
    {
        packSize: "5",
        packPrice: 5,
    },
    {
        packSize: "10",
        packPrice: 10,
    }

]

// let glazingDisplay = document.getElementById(glazingOptions);

let selectElementGlaze = document.querySelector('#glazingOptions')

    
    for(let i = 0; i < glazingOptions.length; i++){
        var optionElementGlaze = document.createElement("option");

        optionElementGlaze.textContent = glazingOptions[i].glaze; 
        optionElementGlaze.value = glazingOptions[i].glazingPrice;
        selectElementGlaze.appendChild(optionElementGlaze);

        
        
       
    }

let selectElementPack = document.querySelector('#pack-size')
    for(let i = 0; i < glazingOptions.length; i++){

        var optionElementPack = document.createElement("option");
        optionElementPack.textContent = packSelections[i].packSize; 
        optionElementPack.value = packSelections[i].packPrice;
        selectElementPack.appendChild(optionElementPack);

     
        
}

    
    /*

    for(element in langArray)
        {
           
           opt.value= index;
           ; // whatever property it has
        
           // then append it to the select element
           ;
           index++;
        }
    let glazeOption = document.querySelector('#car-title');
    let carInfoElement = document.querySelector('#car-info');
  
    carTitleElement.innerText = car.model;
    carInfoElement.innerText = car.description;
    var option = document.createElement('option');
    option.
    8/
  }


function glazingChange(element) {
    
    console.log("1");
    
    

}
*/


/*
get element by id for glaze and pack size
find the value 

do console log to see if storing 
plug into equation
convert into number 
print what type of variable it is 

.innerhtml allows you to edit on screen 
*/