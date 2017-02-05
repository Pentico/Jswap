'use strict';

/**
 * Created by Tuane on 2017/02/05.
 */

import alt from '../../alt';
import AddItemActions from '../../actions/User/AddItemActions';

class AddItemStore {

    constructor(){
        this.bindActions(AddItemActions);
        this.price = '';
        this.name = '';
        this.category = '';
        this.info = '';

    } // EOF
    
    onUpdateName(event) {
        this.name = event.target.value;
    }

    onUpdatePrice(event) {
        this.price = event.target.value;
    }

    onUpdateInfo(event) {
        this.info = event.target.value;
    }

    onUpdateCategory(event) {
        this.category = event.target.value;
    }

    onAddItemFail(data) {
        console.log('onAddItemFail bugger');
    } // EOF

    onAddItemSuccess(data) {
        console.log('onAddItemSuccess hihihi');
    }
}
export default alt.createStore(AddItemStore);