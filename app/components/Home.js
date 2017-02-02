/**
 * Created by Tuane on 2016/10/31.
 */

import React from 'react';
import HomeActions from '../actions/HomeActions';
import HomeStore from '../stores/HomeStore';
import LeftNavBar from './LeftNavBar';
import MainContent from './MainContent';
import Search from './Search';


class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = HomeStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        HomeStore.listen(this.onChange);
    }
    
    componentWillUnmount() {
        HomeStore.unlisten(this.onChange);
    } //EOF

    onChange(state) {
        this.setState(state);
    } // EOF

    handleOnCategoryItemClick(index) {
        // The index stands for each category 0-6 category!!
        HomeActions. fetchCategoryItemsAttempt({'category' : index})
    }

    render() { 

        return (

            <div>
            <Search/>
             <div className="alert alert-info">
                <div className="row">
                    <div className="col-sm-4">
                        <LeftNavBar itemClick={this.handleOnCategoryItemClick.bind(this)} />
                    </div>
                    <div className="col-sm-8">
                        <MainContent handleItems={this.state.ItemsInList} />
                    </div>
                </div>
            </div>
            </div>
           

    );
    }
}

export default Home;