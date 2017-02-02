/**
 * Created by Tuane on 2016/11/10.
 */

import alt from '../alt';
import {assign} from 'underscore';

class SearchActions {
    constructor() {
        this.generateActions(
        	'updateSearch',
            'getQuerySuccess',
            'getQueryFail'
        );
    }

    // Search making a call to server 
    // TODO 
    queryAttempt (payload){

         $.ajax({
            type:'POST',
            url:'/index/queryString',
            item:payload.queryString
        })
            .done((data)=>{
                this.actions.getQuerySuccess(data)
            })
            .fail((data) => {
                this.actions.getQueryFail(data);
            });
    }


}

export default alt.createActions(SearchActions);