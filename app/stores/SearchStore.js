/**
 * Created by Tuane on 2016/11/10.
 */

import alt from '../alt';
import SearchActions from '../actions/SearchActions';

class SearchStore {
    constructor() {
        this.bindActions(SearchActions);
        this.search = '';
    }

    onUpdateSearch(event) {
    	this.search = event.target.value;
    } // EOF

    onGetQueryFail(data){
        console.log(data);
    } // EOF

    onGetQuerySuccess(data) {
        console.log(data);
    } // EOF

}

export default alt.createStore(SearchStore);