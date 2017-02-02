/**
 * Created by Tuane on 2016/11/09.
 */

import alt from '../alt';
import MainContentActions from '../actions/MainContentActions';

class MainContentStore {
    constructor() {
        this.bindActions(MainContentActions);
        this.items = ['name','bill','heoes'];
    }

    onFetchItemsFail(data){
        console.log('onFetchItemsFail')
    } // EOF

    onFetchItemsSuccess(data) {
        console.log(data.name);
        console.log('onFetchSuccess');
    } // EOF

    onFetchCategorySuccess(data){

    }// EOF

    onFetchCategoryFail(data) {

    } // EOF
    
}

export default alt.createStore(MainContentStore);