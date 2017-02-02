/**
 * Created by Tuane on 2016/11/09.
 */

import React from 'react';
import {Link} from 'react-router';
import LeftNavBarStore from '../stores/LeftNavBarStore';
import LeftNavBarActions from '../actions/LeftNavBarActions';

class LeftNavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = LeftNavBarStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		LeftNavBarStore.listen(this.onChange);
        LeftNavBarActions.fetchCategoryCountAttempt();
	} // EOF

	componentWillUnmount() {
		LeftNavBarStore.unlisten(this.onChange);
	} // EOF

	onChange(state) {
		this.setState(state);
	}

    onHandleCategoryClick(ref,event){

        event.preventDefault();
        console.log('CategoryClickeed')
        this.props.itemClick(ref);
    }
 
	render() {

		return (

            <div className="Category" >
                <h3>Category</h3>
                <ul className="list-group">
                    <li className="list-group-item" onClick={this.onHandleCategoryClick.bind(this, 0)}  >
                        Electrical Appliances   
                        <span className="badge"  >{this.state.Electrical}</span>  
                    </li >
                    <li className="list-group-item" onClick={this.onHandleCategoryClick.bind(this, 1)} >
                        Books And Stationery
                        <span className="badge">{this.state.Books}</span>  
                    </li>
                     <li className="list-group-item" onClick={this.onHandleCategoryClick.bind(this, 2)} >
                        Laptops and Gadgets
                        <span className="badge">{this.state.Gadgets}</span>  
                    </li>

                     <li className="list-group-item" onClick={this.onHandleCategoryClick.bind(this, 3)} >
                        Furniture
                        <span className="badge">{this.state.furniture}</span>  
                    </li>

                     <li className="list-group-item" onClick={this.onHandleCategoryClick.bind(this, 4)} >
                        Jobs
                        <span className="badge">{this.state.Jobs}</span>  
                    </li>

                     <li  className="list-group-item" onClick={this.onHandleCategoryClick.bind(this, 5)} >
                        Tutors
                        <span className="badge">{this.state.Tutors}</span>  
                    </li>

                     <li className="list-group-item" onClick={this.onHandleCategoryClick.bind(this, 6)} >
                        Event
                        <span className="badge">{this.state.Event}</span>  
                    </li>
                </ul>
            </div>
			); 
            
	} // EOF

}
 export default LeftNavBar;