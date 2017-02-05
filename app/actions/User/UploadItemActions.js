'use strict';

/**
 * Created by Tuane on 2016/11/10.
 */

import alt from '../../alt';
import {assign} from 'underscore';

class UploadItemActions {
    constructor() {
        this.generateActions(
        'uploadItemData',
        'uploadFail',
        'removeItemFail',
        'removeItemSuccess',
        'uploadSuccess'
        );
    } // EOF

    /**
     * Removing the image on server
     */
    removeItem(payload){

        console.log('on removeItem ajax call');
     $.ajax({
            type:'POST',
            url:'/User/removeItem',
            data:{
                item:payload.name
            }
        })
            .done((data)=>{
                this.actions.removeItemSuccess(data.message)
            })
            .fail((data) => {
                this.actions.removeItemFail(data.message);
            });
        } // EOF

}

export default alt.createActions(UploadItemActions);