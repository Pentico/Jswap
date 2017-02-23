
/**
 * Created by Tuane on 2017/02/15.
 */

import React from 'react';
import {Link} from 'react-router';
import UserRightBarStore from '../../stores/User/UserRightBarStore';
import UserRightBarActions from '../../actions/User/UserRightBarActions';
import UserItem from './UserItem';

class UserRightBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = UserRightBarStore.getState();
        this.onChange = this.onChange.bind(this);
    } // EOF

    componentDidMount() {
        UserRightBarStore.listen(this.onChange);
    } // EOF

    componentWillUnmount() {
        UserRightBarStore.unlisten(this.onChange);
    } // EOF

    onChange(state) {
        this.setState(state);
    } // EOF

    onHandleCategoryClick(event) {
        event.preventDefault();
        
    } // EOF

    onTabClick(ref, event) {
        event.preventDefault();

        if(ref === 0){
            classes = "tab-pane fade in active";
            classes2 = "tab-pane fade";
        }else if(ref === 1) {
             this.state.classTab0 = "tab-pane fade in active";
             this.state.classTab1 = "tab-pane fade";
        }
        this.state.active = true;
    } // EOF

    render() {
        
        return (
            <div>
               <ul className='nav nav-tabs nav-justified'>
                    <li ><a data-toggle='tab' href="#" onClick={this.onHandleCategoryClick.bind(this)}>Selling</a></li>
                    <li className='active'><a a data-toggle="tab" href="#">Bought</a></li>
                        <div>
                            <div classID='selling' className= {this.state.classTab0} onClick={this.onTabClick.bind(this, 0)}>
                                <h3>Selling</h3>
                                <UserItem/>
                            </div>
                            <div classID='bought' className= {this.state.classTab1} onClick={this.onTabClick.bind(this, 1)}>
                                <h3>Bought</h3>
                                <p>Some content.</p>
                            </div>
                        </div>
               </ul>
            </div>
                
        );
    } // EOF
}

export default UserRightBar;