/**
 * Created by Tuane on 2016/11/03.
 */

'use strict';

import alt from '../alt';
import SignUpActions from '../actions/SignUpActions';

class SignUpStore {
    constructor(){
        this.bindActions(SignUpActions);
        this.name='';
        this.email = '';
        this.password0 = '';
        this.password1 = '';

    }

    onUpdateName(event){
        this.name = event.target.value;
    }
    
    onUpdatePassword0(event){
        this.password0 = event.target.value;
    }

    onUpdatePassword1(event) {
        this.password1 = event.target.value;
    }

    onUpdateEmail(event) {
        this.email = event.target.value;
    }

    onSignUpFail(data){
        console.log('onSingUpFail');
        console.log(data);
        
    } // EOF

    onSignUpSuccess(data){
        console.log('onSignUpSuccess');
        this.login_SignUp_Componet = Logout;
        
    } // EOF

}

export default alt.createStore(SignUpStore);
