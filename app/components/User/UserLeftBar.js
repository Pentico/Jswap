
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
                    <img src="bird.jpg" className="img-circle" alt="user Profile img" width="150" height="150"/>
                    <h4>Name : Nikia Sonja</h4>
                    <h4>Email : NikiaSonja@gmail.com</h4>
                    <h4>Account Type : Admin</h4>
                    <h4>University :Libraraie</h4>
                    <h4>Reputation : 10</h4>
                </div>
            </div>
                
        );
    } // EOF
}

export default UserLeftBar;