'use strict'
/**
 * Created by Tuane on 2017/02/05.
 */

import alt from '../../alt';
import { browserHistory } from 'react-router';
import {assign} from 'underscore';

class AddItemActions{
    constructor(){
        this.generateActions(
            'addItemSuccess',
            'addItemFail',
            'updateName',
            'updatePrice',
            'updateInfo',
            'updateCategory',
            'authenticationSuccess',
            'authenticationFail'

        );
    } // EOF

    AddItemAttempt(payload) {

         $.ajax({
            type:'POST',
            url:'/Items/AddItem',
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

     Authentication() {

         $.ajax({
            type:'POST',
            url:'/User/authentication'
        })
            .done((data)=>{
                this.actions.authenticationSuccess(data.message)
                if(data.message){
                    window.location = '/User'; // Added Successfully
                }else {
                    window.location = '/Login';  // Not logged In
                }
            })
            .fail((data) => {
                this.actions.authenticationFail(data.message);
            })

    } // EOF
}

export default alt.createActions(AddItemActions);
