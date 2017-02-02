/**
* Created By Tuane on 2016/11/09.
*/

import alt from '../alt';
import LeftNavBarActions from '../actions/LeftNavBarActions';

class LeftNavBarStore {
	constructor() {
		this.bindActions(LeftNavBarActions);
		this.furniture='',
		this.Jobs = '',
		this.Tutors='',
		this.Event='',
		this.Books='',
		this.Electrical='',
		this.Gadgets=''

	}

	onFetchCategoryCountSuccess(data){

		console.log(data.Electrical);
		this.furniture= data.Furniture;
		this.Books= data.Stationery;
		this.Event= data.Event;
		this.Tutors= data.Tutors;
		this.Gadgets= data.Gadgets;
		this.Jobs= data.Jobs;
		this.Electrical= data.Electrical;

		console.log('onFetchCategorySuccess');
	}

	onFetchCategoryCountFail(data){
		console.log('onFetchCategoryFail');
	}

}  

export default alt.createStore(LeftNavBarStore);