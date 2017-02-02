/**
 * Created by Tuane on 2016/11/09.
 */

'use strict'

import React from 'react';
import {Link} from 'react-router';
import MainContentStore from '../stores/MainContentStore';
import MainContentActions from '../actions/MainContentActions';
import Item from './MainContent/Item';
import UploadItem from './MainContent/UploadItem';

class MainContent extends React.Component {
    constructor(props) { 
        super(props);
        this.state = MainContentStore.getState();
        this.onChange = this.onChange.bind(this);
    }

     componentDidMount() {
        MainContentStore.listen(this.onChange);
        MainContentActions.fetchItemsAttempt();
    } // EOF

    componentWillUnmount() {
        MainContentStore.unlisten(this.onChange);
    } // EOF

    onChange(state) {
        this.setState(state);
    } // EOF

    
    render() {                 
        return (
            <UploadItem/>           
           );
    }
}

export default MainContent;

/**
 * <div >  
 *   {this.props.handleItems.map((value,key) => <Item Id={key} value={value}/>)}
 * </div>
 */