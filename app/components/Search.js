/**
 * Created by Tuane on 2016/11/10.
 */

import React from 'react';
import {Link} from 'react-router';
import SearchStore from '../stores/SearchStore';
import SearchActions from '../actions/SearchActions';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = SearchStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        SearchStore.listen(this.onChange);
    } // EOF

    componentWillUnmount() {
        SearchStore.unlisten(this.onChange);
    } // EOF

    onChange(state) {
        this.setState(state);
    }

    handleSubmitSearch(event) {

         event.preventDefault();
        let search  = this.state.search.trim();
        console.log("You are Searching " + search);
        SearchActions.queryAttempt({
            searchQuery:search,
            searchForm:this.refs.searchForm
        });

    } // EOF

    render() {

        return (

            <form className="form-horizontal SearchBar " ref='searchForm'   
                    onSubmit={this.handleSubmitSearch.bind(this)}>
                <div className="form-group">
                    <div className="col-sm-10">
                        <div className="input-group">
                            <span className="input-group-addon"><i className='fa fa-bars'></i></span>
                            <input type="text" className="form-control" id="search" 
                                placeholder="What are you looking for ?" value={this.state.search} 
                                onChange={SearchActions.updateSearch}/> 
                            <span className="input-group-addon"><i className='fa fa-search'></i></span>
                        </div>
                    </div>
                </div>

            </form>
        );
    }
}

export default Search;