/**
 * Created by Tuane on 2016/11/10.
 */

import alt from '../alt';
import UserActions from '../actions/UserActions';

class UserStore {
    constructor() {
        this.bindActions(UserActions);
        this.userData = {};
    } // EOF

    onFetchUserDetailsSuccess(data) {

        
        this.userData = {
            name : data.name,
            account : data.account,
            email : data.email,
            reputation : data.reputation,
            university : data.university,
            img     : data.img
        };
        

    } // EOF

    onFetchUserDetailsFail(data) {

    } // EOF
}

export default alt.createStore(UserStore);
