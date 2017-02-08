'use strict';

class UtilsApp {
    constructor(){}

    onCategoryName(index) {

        let categoryName = ["Electrical_Appliance","Books_and_Stationery","Laptops_and_Gadgets","Furniture","Jobs","Tutors","Event"];
        return categoryName[index];
    }

    /**
     * Check if User Logged index
     * 
     * */
     
    onAuthentication(user){
        
        if(user){
            return true;
        }else {
            return false;
        }
    }
  
}

export default UtilsApp;