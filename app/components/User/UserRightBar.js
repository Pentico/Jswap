
/**
 * Created by Tuane on 2017/02/15.
 */

import React from 'react';
import {Link} from 'react-router';
import UserRightBarStore from '../../stores/User/UserRightBarStore';
import UserRightBarActions from '../../actions/User/UserRightBarActions';

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
                <h1> Right User Sidebar </h1>
            </div>
                
        );
    } // EOF
}

export default UserRightBar;