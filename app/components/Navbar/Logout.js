/**
 * Created by Tuane on 2016/11/10.
 */

import React from 'react';
import {Link} from 'react-router';
import LogoutStore from '../../stores/Navbar/LogoutStore';
import LogoutActions from '../../actions/Navbar/LogoutActions';

class Logout extends React.Component {
    constructor(props){
        super(props);
        this.state = LogoutStore.getState();
        this.onChange = this.onChange.bind(this);
    } // EOF

     componentDidMount(){
        LogoutStore.listen(this.onChange);
    } // EOF

    componentWillUnmount() {
        LogoutStore.unlisten(this.onChange); 
    } // EOF

    onChange(state){
        this.setState(state);
    } //EOF

    onhandleLogout(event) {
        event.preventDefault();
        this.props.handleLogout();
    } // EOF


    render(){
         return (
                    <ul className='nav navbar-nav Navbar-right'>
                        <li><Link to='/Profile'><span className="glyphicon glyphicon-user"></span>Profile</Link></li>
                        <li><Link to='/Register'><span className="glyphicon glyphicon-lock"></span> Privacy</Link></li>
                        <li onClick={this.props.handleLogout}><a> <span className="glyphicon glyphicon-log-out"></span> Logout</a></li>
                    </ul>
    		);
    }
}


export default Logout;	