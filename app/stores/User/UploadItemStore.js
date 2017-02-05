'use strict';

/**
 * Created by Tuane on 2016/11/22.
 */

import alt from '../../alt';  
import UploadItemActions from '../../actions/User/UploadItemActions';

class UploadItemStore {
    constructor(){
        this.bindActions(UploadItemActions);
        this.files = [];
        this.midropzone='';
    } // EOF

    onUploadItemData(){
        
    } // EOF

    onUploadSuccess(){
        console.log('onSuccessUpload');
    } // EOF

    onUploadFail(){
        console.log('onFaiUpload');
    } // EOF

    onRemoveItemSuccess(data){
        console.log('Item remove success');
    } // EOF

    onRemoveItemFail(data){
        console.log('item remove failed');;
    } // EOF
}

export default alt.createStore(UploadItemStore);