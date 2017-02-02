'use strict';

import alt from '../alt';
import HomeActins from '../actions/HomeActions';

class HomeStore {
    constructor(){
        this.bindActions(HomeActins);
        this.ItemsInList = ['name','bill','heoes'];
    }

    onFetchCategorySuccess(data){
        console.log(data);

        this.onFetchCategory(data);
    
    } // EOF

    onFetchCategoryFail(data){
        console.log('failer');
    } // EOF

    onFetchCategory(data) {
        console.log(data);
        this.ItemsInList= data;        
    }// EOF
}

export default alt.createStore(HomeStore);