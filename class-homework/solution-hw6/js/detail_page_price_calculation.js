//populating the glaze select dropdown menu
let selectElementGlaze = document.querySelector('#glazingOptions')
console.log(selectElementGlaze);
    
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

    
