
/**
 * Created by Tuane on 2016/11/10.
 */

import React from 'react';
import {Link} from 'react-router';
import UserStore from '../stores/UserStore';
import UserActions from '../actions/UserActions';

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
                <h1 >The User Profile Page </h1>
            </div>
                
        );
    } // EOF
}

export default User;