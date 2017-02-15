/**
 * Created by Tuane on 2017/02/15.
 */

import alt from '../../alt';
import UserItemActions from '../../actions/User/UserItemActions';

class UserItemStore {
    constructor() {
        this.bindActions(UserItemActions);
    }
}


export default alt.createStore(UserItemStore);