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
        	'logoutFail',
            'clickEventSuccess',
            'clickEventFail',
            'authenticationSuccess',
            'authenticationFail'
        );
    }

    logoutAttempt(){
  	    $.ajax({
            type:'GET',
            url:'/UserServer/logout'
        })
            .done((data)=>{
                this.actions.logoutSuccess(data)
            })
            .fail((data) => {
                this.actions.logoutFail(data);
            })

  } // EOF


/**
 * This routes the user depending on weather they are logged in our not!!!
 */
    clickEvent(payload){

  	$.ajax({
            type:'POST',
            url:'/index/router'
        })
            .done((data)=>{
                this.actions.clickEventSuccess({
                    message:data.message,
                    ref : payload.ref
                })
                
            })
            .fail((data) => {
                this.actions.clickEventFail(data);
            
            })

  } // EOF

  Authentication() {

        $.ajax({
            type:'POST',
            url:'/UserServer/authentication'
        })
            .done((data)=>{
                this.actions.authenticationSuccess(data)
            })
            .fail((data) => {
                this.actions.authenticationFail(data);
            })

    } // EOF 
    
}

export default alt.createActions(NavbarActions);