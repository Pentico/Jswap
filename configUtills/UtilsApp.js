'use strict';

class UtilsApp {
    constructor(){}

    onCategoryName(index) {

        let categoryName = ["Electrical_Appliance","Books_and_Stationery","Laptops_and_Gadgets","Furniture","Jobs","Tutors","Event"];
        return categoryName[index];
    }

    onCheckAuthentication(req, res, next, login){
        
        if (req.user){
            next();
        } else {
            res.redirect('$login');
        }
    }
}

export default UtilsApp;