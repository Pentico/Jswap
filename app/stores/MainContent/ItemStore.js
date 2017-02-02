/**
 * Created by Tuane on 2016/11/10.
 */

import alt from '../../alt';
import ItemActions from '../../actions/MainContent/ItemActions';

class ItemStore {
    constructor() {
        this.bindActions(ItemActions);
        this.name = '';
        this.price = '';
    }

    onFetchItemDetailsSuccess(data) {
        // this.name = data.name;
        // this.price = data.price;
        // this.info = data.info;
        console.log('onFetchItemDetailsSuccess');
    } // EOF

    onFetchItemDetailsFail(data){
        console.log('onFetchItemDetailsFail');
    } // EOF
    
}

export default alt.createStore(ItemStore);