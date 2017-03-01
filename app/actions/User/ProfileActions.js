'use strict'
/**
 * Created by Tuane on 2017/02/09.
 */
import alt from '../../alt';
import {assign} from 'underscore';

class ProfileActions {
    constructor() {
        this.generateActions(
            'updateEmail',
            'updateName',
            'updateGender',
            'updateLocation',
            'updatePassword',
            'updatePassword0',
            'changePsdSuccess',
            'changePsdFail',
            'changeInfoSuccess',
            'changeInfoFail',
            'deleteAccountFail',
            'deleteAccountSuccess'
        );
    } // EOF

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

    changePsdAttempt(payload){

        $.ajax({
            type:'POST',
            url:'/UserServer/ChangePsd',
            data:{
                password:payload.password1,
                password0:payload.password0
            }
        })
            .done((data)=>{
                this.actions.changePsdSuccess(data.message)
            })
            .fail((data) => {
                this.actions.changePsdFail(data.message);
            });
    } // EOF

    changeInfoAttempt(payload){

        $.ajax({
            type:'POST',
            url:'/UserServer/ChangeInfo',
            data:{
                name:payload.name,
                email:payload.email,
                location:payload.location
            }
        })
            .done((data)=>{
                this.actions.changeInfoSuccess(data)
            })
            .fail((data) => {
                this.actions.changeInfoFail(data);
            });
    } // EOF


    deleteAccountAttempt(payload){

        $.ajax({
            type:'POST',
            url:'/UserServer/deleteAccount'
        })
            .done((data)=>{
                this.actions.deleteAccountSuccess(data)
            })
            .fail((data) => {
                this.actions.deleteAccountFail(data);
            });
    } // EOF
}

export default alt.createActions(ProfileActions);