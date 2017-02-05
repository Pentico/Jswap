'use strict'

/**
 * Created By Tuane  on 2017/02/05
 */

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {Link} from 'react-router';
import AddItemStore from '../../stores/User/AddItemStore';
import AddItemActions from '../../actions/User/AddItemActions';
import UploadItem from './UploadItem';

class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = AddItemStore.getState();
        this.onChange = this.onChange.bind(this);

    } // EOF

     componentDidMount() {
        AddItemStore.listen(this.onChange);

    } // EOF

      componentWillUnmount() {
        AddItemStore.unlisten(this.onChange);
    } // EOF
 
    onChange(state) {
        this.setState(state);
    }

    render() {

        return (
            <div className="AddItem">
                <h1> Color of this is what? </h1>
                <form >
                 <div className="form-group">
                    <div className="row">
                        <div className="col-md-6">
                            <label>Name : </label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="col-md-6">
                            <label>Price</label>
                            <input type="text" className="form-control"/>
                        </div>
                         <UploadItem/>   
                         <div className="col-md-6">
                                <label for="category">Category </label>
                                <select className="form-control" id="category">
                                    <option>Electrical_Appliance</option>
                                    <option>Books_and_Stationery</option>
                                    <option>Laptops_and_Gadgets</option>
                                    <option>Furniture</option>
                                    <option>Jobs</option>
                                    <option>Tutors</option>
                                    <option>Event</option>
                                </select>
                        </div>
                    </div>
                 </div>
                 <div className="form-group">
                    <label>Tell Us More about your product :</label>
                    <input type="text" className="form-control"/>
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-default">Submit</button>
                 </div>
             </form>
          </div>
        );
    } // EOF
}

export default AddItem
