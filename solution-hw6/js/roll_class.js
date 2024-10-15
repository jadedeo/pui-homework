class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice, cartID) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
        this.cartID = cartID
        
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
         }
       }
     }

    getPackPrice(){
       for(let i = 0; i <packOptions.length; i++){
        
        if(this.size == packOptions[i].packSize){
            this.packPrice = packOptions[i].packPrice;
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


