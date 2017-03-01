
/**
 * Created by Tuane on 2017/02/15.
 */

import React from 'react';
import {Link} from 'react-router';
import UserRightBarStore from '../../stores/User/UserRightBarStore';
import UserRightBarActions from '../../actions/User/UserRightBarActions';
import UserItem from './UserItem';

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

    onHandleCategoryClick(ref, event) {
        
        console.log(ref);

        UserRightBarActions.categoryClick(ref);              

        // if(ref == 1){
        //     console.log('in ref 1');
        //     this.setState.classTab1 = "tab-pane fade in active";
        //     this.setState.classTab_1 = "active"
        //     this.setState.classTab0 = "tab-pane fade";
        //     this.setState.classTab_0 = "";

        // }else if(ref == 0) {
        //      console.log(' in ref 0');
        //      this.setState.classTab0 = "tab-pane fade in active";  
        //      this.setState.classTab1 = "tab-pane fade";
        //      this.setState.classTab_0 = 'active';
        //      this.setState.classTab_1 = "";
        // }
        
    } // EOF


    render() {
        
        return (
            <div>
               <ul className='nav nav-tabs nav-justified'>
                    <li className={this.state.classTab_0} ><a data-toggle='tab' href="#" onClick={this.onHandleCategoryClick.bind(this, 0)}>Selling</a></li>
                    <li className={this.state.classTab_1} ><a a data-toggle="tab" href="#" onClick={this.onHandleCategoryClick.bind(this, 1)}>Bought</a></li>
                        <div>
                            <div classID='selling' className= {this.state.classTab0} >
                                <h3>Selling</h3>
                                {this.props.selling.map((value,key) => <UserItem Id={key} value={value}/>)}
                            </div>
                            <div classID='bought' className= {this.state.classTab1} >
                                <h3>Bought</h3>
                                <p>Some content.</p>
                            </div>
                        </div>
               </ul>
            </div>
                
        );
    } // EOF
}

export default UserRightBar;