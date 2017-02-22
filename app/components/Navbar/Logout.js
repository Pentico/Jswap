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
                    <ul className='nav navbar-nav navbar-right'>
                        <li className='dropdown'>
                            <Link to='/AddItem'>AddItem</Link>
                            <a className='dropdown-toggle' href='#' data-toggle='dropdown'>
                                <img src='#' />
                                <span> morulaneat@gmail.com </span>
                                <i className='caret'></i>
                            </a>
                            <ul className='dropdown-menu' >
                                <li><Link to='/Profile'><span className="glyphicon glyphicon-user"></span>Profile</Link></li>
                                <li className='divider'></li>
                                <li><Link to='/Privacy'><span className="glyphicon glyphicon-lock"></span> Privacy</Link></li>
                                <li className='divider'></li>
                                <li onClick={this.props.handleLogout}><a> <span className="glyphicon glyphicon-log-out"></span> Logout</a></li>
                            </ul>
                        </li>
                    </ul>
    		);
    }
}


export default Logout;	