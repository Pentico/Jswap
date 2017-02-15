/**
 * Created by Tuane on 2016/11/03.
 */

import alt from '../alt';
import {assign} from 'underscore';

class LoginActions {
    constructor() {
        this.generateActions(
            'loginSuccess',
            'loginFail',
            'updatePassword',
            'updateEmail'
        );
    }



    loginAttempt(payload){
        $.ajax({
            type:'POST',
            url:'/UserServer/login',
            data:{
                email:payload.email,
                password:payload.password
                }
        })
            .done((data)=>{
                this.actions.loginSuccess(data) 
            })
            .fail((data) => {
                this.actions.loginFail(data);
            })
        } // EOF
}

export default alt.createActions(LoginActions);