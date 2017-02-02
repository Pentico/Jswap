/**
 * Created by Tuane on 2016/11/12.
 */

import alt from '../../alt';
import LogoutActions from '../../actions/Navbar/LogoutActions';

class LogoutStore {
    constructor() {
        this.bindActions(LogoutActions);
        
    }
}

export default alt.createStore(LogoutStore);