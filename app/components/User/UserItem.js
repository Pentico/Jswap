
/**
 * Created by Tuane on 2017/02/15.
 */

import React from 'react';
import {Link} from 'react-router';
import UserItemStore from '../../stores/User/UserItemStore';
import UserItemActions from '../../actions/User/UserItemActions';

class UserItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = UserItemStore.getState();
        this.onChange = this.onChange.bind(this);
    } // EOF

     componentDidMount() {
        UserItemStore.listen(this.onChange);
    } // EOF

    componentWillUnmount() {
        UserItemStore.unlisten(this.onChange);
    } // EOF

    onChange(state) {
        this.setState(state);
    } // EOF

    render() {
        return (  // Create a DropDown here show only importante informacion.
            <div className='well well-lg'>
              <h4> The Art Of War </h4>
              <h5> Price : 12$ </h5>
              <h5> Date Created : 12$ </h5>
              <h5> Edit </h5>
            </div>    
        );
    } // EOF

}

export default UserItem;