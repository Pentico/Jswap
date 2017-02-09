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
            url:'/User/authentication'
        })
            .done((data)=>{
                this.actions.authenticationSuccess(data.message)
            })
            .fail((data) => {
                this.actions.authenticationFail(data.message);
            })

    } // EOF 
    
}

export default alt.createActions(NavbarActions);