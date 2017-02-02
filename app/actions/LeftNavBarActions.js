/**
 * Created by Tuane on 2016/11/09.
 */

import alt from '../alt';
import {assign} from 'underscore';

class LeftNavBarActions {
	constructor() {
		this.generateActions(
			'fetchCategoryCountSuccess',
            'fetchCategoryCountFail'
		);
	}

	 fetchCategoryCountAttempt(){

        $.ajax({
            type:'POST',
            url:'/index/ItemInCategory'
        })
            .done((data)=>{
                this.actions.fetchCategoryCountSuccess(data)
            })
            .fail((data) => {
                this.actions.fetchCategoryCountFail(data);
            });
    }
}

export default alt.createActions(LeftNavBarActions);