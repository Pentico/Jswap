'use strict';

import alt from '../alt';
import{assign} from 'underscore';

class HomeActions {
    constructor(){
        this.generateActions(
            'fetchCategoryFail',
            'fetchCategorySuccess',
            'fetchCategory'
        );
    }

    fetchCategoryItemsAttempt(payload){

        $.ajax({
            type:'POST',
            url:'/index/getCategory',
            data:{
                category:payload.category
            }
        })
            .done((data)=>{
                console.log(data);

                switch (payload.category) {
                    case 0:
                        this.actions.fetchCategorySuccess(data.Electrical_Appliance);
                        break;
                    case 1:
                    this.actions.fetchCategorySuccess(data.Books_and_Stationery);
                    break;
                    case 2:
                    this.actions.fetchCategorySuccess(data.Laptops_and_Gadgets); 
                    break;
                    case 3:
                    this.actions.fetchCategorySuccess(data.Furniture);
                    break;
                    case 4:
                    this.actions.fetchCategorySuccess(data.Jobs);
                    break;
                    case 5:
                    this.actions.fetchCategorySuccess(data.Tutors);
                    break;
                    case 6:
                    this.actions.fetchCategorySuccess(data.Event);
                    break;
                    default:
                    this.actions.fetchCategorySuccess(data.All); // TODO add this for mixture
                        break;
                }
                
            })
            .fail((data) => {
                this.actions.fetchCategoryFail(data);
            });
    }
}

export default alt.createActions(HomeActions);