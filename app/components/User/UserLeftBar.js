
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
            <div class="bg-1">
  <div class="container text-center">
    <h3>Profile</h3>
    <img src="bird.jpg" class="img-circle" alt="Bird" width="150" height="150"/>
    <h3>Name : Nikia Sonja</h3>
    <h3>Email : NikiaSonja@gmail.com</h3>
    <h3>Account Type : Admin</h3>
    <h3>University :Libraraie</h3>
  </div>
</div>
                
        );
    } // EOF
}

export default UserLeftBar;