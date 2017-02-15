/**
 * Created by Tuane on 2016/11/03.
 */

'use strict';

import alt from '../alt';
import {assign} from 'underscore';

class SignUpActions {
    constructor(){
        this.generateActions(
            'signUpSuccess',
            'signUpFail',
            'updatePassword0',
            'updatePassword1',
            'updateEmail',
            'updateName'
        );
    }

    signUpAttempt(payload){

        $.ajax({
            type:'POST',
            url:'/UserServer/signUp',
            data:{
                email:payload.email,
                password:payload.password1,
                password0:payload.password0,
                name:payload.name
            }
        })
            .done((data)=>{
                this.actions.signUpSuccess(data.message)
            })
            .fail((data) => {
                this.actions.signUpFail(data.message);
            });
    } // EOF

}

export default alt.createActions(SignUpActions);