'use strict'
/**
 * Created by Tuane on 2017/02/05.
 */

import alt from '../../alt';
import {assign} from 'underscore';

class AddItemActions{
    constructor(){
        this.generateActions();
    } // EOF
}

export default alt.createActions(AddItemActions);
