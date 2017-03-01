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

    onCategoryClick(ref){

         if(ref == 1){
            console.log('in ref 1');
            this.classTab1 = "tab-pane fade in active";
            this.classTab_1 = "active"
            this.classTab0 = "tab-pane fade";
            this.classTab_0 = "";

        }else if(ref == 0) {
             console.log(' in ref 0');
             this.classTab0 = "tab-pane fade in active";  
             this.classTab1 = "tab-pane fade";
             this.classTab_0 = 'active';
             this.classTab_1 = "";
        }
    } // EOF
}

export default alt.createStore(UserRightBarStore);  