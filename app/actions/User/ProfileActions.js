'use strict'
/**
 * Created by Tuane on 2017/02/09.
 */
import alt from '../alt';
import {assign} from 'underscore';

class ProfileActions {
    constructor() {
        this.generateActions(
            'updateEmail',
            'updateName',
            'updateGender',
            'updateLocation',
            'updatePassword',
            'updatePassword0'
        );
    } // EOF
}

export default alt.createActions(ProfileActions);