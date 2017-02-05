'use strict'

/**
 * Created By Tuane  on 2017/02/05
 */

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {Link} from 'react-router';
import AddItemStore from '../../stores/User/AddItemStore';
import AddItemActions from '../../actions/User/AddItemActions';

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
            <div>
                <h1> Hello Item Add </h1>
            </div>
        );
    } // EOF
}

export default AddItem
