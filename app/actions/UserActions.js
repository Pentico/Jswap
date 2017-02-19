
/**
 * Created by Tuane on 2016/11/10.
 */
import alt from '../alt';
import {assign} from 'underscore';

class UserActions {
    constructor() {
       this.generateActions(
        	'fetchUserDetailsSuccess',
            'fetchUserDetailsFail'
        );
    } // EOF

    fetchUserDetailsAttempt(){

        $.ajax({
            type:'POST',
            url:'/User/userDetails'
        })
            .done((data)=>{
                this.actions.fetchUserDetailsSuccess(data)
            })
            .fail((data) => {
                this.actions.fetchUserDetailsFail(data);
            });
    } // EOF
}

export default alt.createActions(UserActions);