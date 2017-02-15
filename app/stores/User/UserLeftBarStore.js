/**
 * Created by Tuane on 2017/02/15.
 */

import alt from '../alt';
import UserLeftBarActions from '../actions/User/UserLeftBarActions';

class UserLeftBarStore {
    constructor() {
        this.bindActions(UserLeftBarActions);
    }
}

export default alt.createStore(UserLeftBarStore);