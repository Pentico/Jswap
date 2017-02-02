'use strict';

/**
 * Created by Tuane on 2016/11/10.
 */


import alt from '../../alt';
import {assign} from 'underscore';

class ItemActions {
    constructor() {
        this.generateActions(
            'fetchItemDetailsSuccess',
            'fecthItemDetailsFail'
        );
    }

    fetchItemDetailsAttempt(payload){

        $.ajax({
            url:'/Items/Details',
            item:payload.ID
        })
            .done((data)=>{
                this.actions.fetchItemDetailsSuccess(data.message)
            })
            .fail((data) => { 
                this.actions.fetchItemDetailsFail(data.message);
            });
    }

}

export default alt.createActions(ItemActions);