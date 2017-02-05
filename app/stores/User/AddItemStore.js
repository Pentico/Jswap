'use strict';

/**
 * Created by Tuane on 2017/02/05.
 */

import alt from '../../alt';
import AddItemActions from '../../actions/User/AddItemActions';

class AddItemStore {
    constructor(){
        this.bindActions(AddItemActions);
        
    } // EOF
}

export default alt.createStore(AddItemStore);