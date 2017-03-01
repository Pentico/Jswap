/**
 * Created by Tuane on 2016/11/10.
 */

import alt from '../alt';
import UserActions from '../actions/UserActions';

class UserStore {
    constructor() {
        this.bindActions(UserActions);
        this.userData = {};
        this.itemsData = "";
        this.selling = [];
        this.buying = [];
    } // EOF

    onFetchUserDetailsSuccess(data) {


        this.userData = {
            name       : data.name,
            email      : data.email,
            reputation : data.reputation,
            university : data.university,
            img        : data.img
        };


        console.log(data.selling);
        this.buying = data.buying;
        this.selling = data.selling;
        
    } // EOF

    onFetchUserDetailsFail(data) {

    } // EOF
}

export default alt.createStore(UserStore);
