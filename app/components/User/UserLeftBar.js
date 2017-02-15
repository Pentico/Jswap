
/**
 * Created by Tuane on 2017/02/15.
 */

import React from 'react';
import {Link} from 'react-router';
import UserLeftBarStore from '../stores/User/UserLeftBarStore';
import UserLeftBarActions from '../actions/User/UserLeftBarActions';

class UserLeftBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = UserLeftBarStore.getState();
        this.onChange = this.onChange.bind(this);
    } // EOF

    componentDidMount() {
        UserLeftBarStore.listen(this.onChange);
    } // EOF

    componentWillUnmount() {
        UserLeftBarStore.unlisten(this.onChange);
    } // EOF

    onChange(state) {
        this.setState(state);
    } // EOF

    render() {
        return (
            <div>
                <h1  >Left User SideBar </h1>
            </div>
                
        );
    } // EOF
}

export default UserLeftBar;