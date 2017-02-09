'use strict';

/**
 * Created By Tuane on 2017/02/09
 */
import alt from '../../alt';
import ProfileActions from '../../actions/User/ProfileActions';

class ProfileStore {
    constructor() {
        this.bindActions(ProfileActions);
    } // EOF

}

export default alt.createStore(ProfileStore);