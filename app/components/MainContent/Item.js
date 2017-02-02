/**
 * Created by Tuane on 2016/11/09.
 */

import React from 'react';
import {Link} from 'react-router';
import ItemStore from '../../stores/MainContent/ItemStore';
import ItemActions from '../../actions/MainContent/ItemActions'

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = ItemStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        ItemStore.listen(this.onChange);
        ItemActions.fetchItemDetailsAttempt({ID:this.props.Id});

    } // EOF

    componentWillUnmount() {
        ItemStore.unlisten(this.onChange);
    } // EOF

    onChange(state) {
        this.setState(state);
    }

    render() {

        return (

                <div className='Board' >
                    <img src='../img/17.jpg'/>
                     <p>Name : {this.state.name}</p>
                     <div className="sticker">
                        <p>Price : {this.state.price}</p>
                     </div>
                </div>
        );
    }
}

export default Item;