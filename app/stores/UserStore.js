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


        console.log(data);
        console.log(data.email);
        this.userData = {
            // name       : data.user.local.name,
            // email      : data.user.local.email,
            // reputation : data.user.local.reputation,
            // university : data.user.local.university,
            // img        : data.user.local.img
        };
        
    } // EOF

    onFetchUserDetailsFail(data) {

    } // EOF
}

export default alt.createStore(UserStore);
