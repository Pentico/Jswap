/**
 * Created by Tuane on 2017/02/15
 */
import alt from '../../alt';
import {assign} from 'underscore';

class UserRightBarActions {
    constructor() {
        this.generateActions(
            'categoryClick'
        );
    }
}

export default alt.createActions(UserRightBarActions);