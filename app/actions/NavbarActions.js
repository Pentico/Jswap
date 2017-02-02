/**
 * Created by Tuane on 2016/10/31.
 */

import alt from '../alt';
import {assign} from 'underscore';

class NavbarActions {
    constructor() {
        this.generateActions(
            'updateOnlineUsers',
            'updateAjaxAnimation',
            'updateEmailEntries',
            'getCharacterCountSuccess',
            'getCharacterCountFail',
            'loginSign',
            'logoutSuccess',
        	'logoutFail'
        );
    }

    logoutAttempt(){

  	$.ajax({
            type:'GET',
            url:'/User/logout'
        })
            .done((data)=>{
                this.actions.logoutSuccess(data.message)
                console.log("Hello success");
            })
            .fail((data) => {
                this.actions.logoutFail(data.message);
                console.log('Hello failure');
            })

  } // EOF
    
}

export default alt.createActions(NavbarActions);