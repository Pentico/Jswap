/**
 * Created by Tuane on 2017/02/15.
 */

import alt from '../../alt';
import UserRightBarActions from '../../actions/User/UserRightBarActions';

class UserRightBarStore {
    constructor() {
        this.bindActions(UserRightBarActions);
        this.classTab0 = "tab-pane fade ";
        this.classTab1  = "tab-pane fade in active";
        this.classTab_0 = "";
        this.classTab_1 = "active";
    }
}

export default alt.createStore(UserRightBarStore);