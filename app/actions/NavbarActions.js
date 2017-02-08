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
            'clickEventFail'
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
            type:'GET',
            url:'/Router'
        })
            .done((data)=>{
                data.ref = ref;
                this.actions.clickEventSuccess(data)
                
            })
            .fail((data) => {
                this.actions.clickEventFail(data);
            
            })

  } // EOF
    
}

export default alt.createActions(NavbarActions);