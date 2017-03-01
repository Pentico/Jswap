
/**
 * Created by Tuane on 2017/02/15.
 */

import React from 'react';
import {Link} from 'react-router';
import UserLeftBarStore from '../../stores/User/UserLeftBarStore';
import UserLeftBarActions from '../../actions/User/UserLeftBarActions';

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
            <div className="bg-1 left-nav-user ">
                <div className="container ">
                    <h3>Profile</h3>
                    <img src={this.props.userData.img} className="img-circle" alt="user Profile img" width="150" height="150"/>
                    
                    <h4>Name : {this.props.userData.name} </h4>
                    <h4>Email : {this.props.userData.email} </h4>
                    <h4>University : {this.props.userData.university} </h4>
                    <h4>Reputation : {this.props.userData.reputation} </h4>
                </div>
            </div>
                
        );
    } // EOF
}

export default UserLeftBar;