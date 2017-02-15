/**
 * Created by Tuane on 2016/11/09.
 */
'use strict'

import alt from '../alt';
import {assign} from 'underscore';

class MainContentActions {
    constructor() {
        this.generateActions(
            'fetchItemsSuccess',
            'fetchItemsFail'
        );
    }
    
    fetchItemsAttempt(){

        $.ajax({
            url:'/Items/List'
        })
            .done((data)=>{
                this.actions.fetchItemsSuccess(data)
            })
            .fail((data) => {
                this.actions.fetchItemsFail(data);
            });
    }

}

export default alt.createActions(MainContentActions);