'use strict';

/**
 * Created By Tuane on 2017/02/09
 */
import alt from '../../alt';
import ProfileActions from '../../actions/User/ProfileActions';

class ProfileStore {
    constructor() {
        this.bindActions(ProfileActions);

        this.name='';
        this.email = '';
        this.password = '';
        this.password1 = '';
        this.gender = '';
        this.location = '';

    } // EOF


    onUpdateName(event){
        this.name = event.target.value;
    }

    onUpdateGender(event) {
        this.gender = event.target.value;
    }

    onUpdateLocation(event) {
        this.location = event.target.value;
    }
    
    onUpdatePassword0(event){
        this.password0 = event.target.value;
    }

    onUpdatePassword(event) {
        this.password = event.target.value;
    }

    onUpdateEmail(event) {
        this.email = event.target.value;
    }
}

export default alt.createStore(ProfileStore);