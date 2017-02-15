
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

    render() {
        return (
            <div>
               <ul className='nav nav-tabs nav-justified'>
                    <li ><a data-toggle='tab' href="#">Selling</a></li>
                    <li className='active'><a a data-toggle="tab" href="#">Bought</a></li>

                        <div>
                            <div classID='selling' className='tab-pane fade in active'>
                                <h3>Selling</h3>
                                <UserItem/>
                            </div>
                            <div classID='bought' className='tab-pane fade'>
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