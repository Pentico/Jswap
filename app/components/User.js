
/**
 * Created by Tuane on 2016/11/10.
 */

import React from 'react';
import {Link} from 'react-router';
import UserStore from '../stores/UserStore';
import UserActions from '../actions/UserActions';
import UserLeftBar from './User/UserLeftBar';
import UserRightBar from './User/UserRightBar';

class User extends React.Component {

    constructor(props) {
        super(props);
        this.state = UserStore.getState();
        this.onChange = this.onChange.bind(this);
    } // EOF

    componentDidMount() {
        UserStore.listen(this.onChange);
    } // EOF

    componentWillUnmount() {
        UserStore.unlisten(this.onChange);
    } // EOF

    onChange(state) {
        this.setState(state);
    }

    render() {
        return (
            <div className='positionMain'>
               <div className="alert alert-info">
                <div className="row">
                    <div className="col-sm-4">
                        <UserLeftBar/>
                    </div>
                    <div className="col-sm-8">
                        <UserRightBar/>
                    </div>
                </div>
               </div> 
            </div>
                
        );
    } // EOF
}

export default User;