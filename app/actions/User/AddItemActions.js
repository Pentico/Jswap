'use strict'
/**
 * Created by Tuane on 2017/02/05.
 */

import alt from '../../alt';
import {assign} from 'underscore';

class AddItemActions{
    constructor(){
        this.generateActions(
            'addItemSuccess',
            'addItemFail',
            'updateName',
            'updatePrice',
            'updateInfo',
            'updateCategory'
        );
    } // EOF

    AddItemAttempt(payload) {

         $.ajax({
            type:'POST',
            url:'/User/AddItem',
            data:{
                name:payload.name,
                price:payload.price,
                category:payload.category,
                info:payload.info
                }
        })
            .done((data)=>{
                this.actions.addItemSuccess(data.message) 
            })
            .fail((data) => {
                this.actions.addItemFail(data.message);
            })

    } // EOF
}

export default alt.createActions(AddItemActions);
