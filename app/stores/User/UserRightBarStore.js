/**
 * Created by Tuane on 2017/02/15.
 */

import alt from '../../alt';
import UserRightBarActions from '../../actions/User/UserRightBarActions';

class UserRightBarStore {
    constructor() {
        this.bindActions(UserRightBarActions);
    }
}

export default alt.createStore(UserRightBarStore);