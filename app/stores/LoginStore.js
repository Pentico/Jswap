/**
 * Created by Tuane on 2016/11/03.
 */

import alt from '../alt';
import LoginActions from '../actions/LoginActions';

class LoginStore  {
    constructor(){
        this.bindActions(LoginActions);
        this.email ='';
        this.password ='';
        this.handleLogout= '';

    }

   
    onUpdateEmail(event) {
        this.email = event.target.value;
    }

    onUpdatePassword(event){
        this.password = event.target.value;
    }


     onLoginFail(data){
        console.log('onLoginFail bugger');
    } //EOF

    onLoginSuccess(data){
        console.log(data.id);
        console.log(data.username);
    } // EOF

}


export default alt.createStore(LoginStore);