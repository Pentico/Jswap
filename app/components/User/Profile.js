'use strict';

import React from 'react';
import {Link} from 'react-router';
import ProfileStore from '../stores/User/ProfileStore';
import ProfileActions from '../actions/User/ProfileActions';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = ProfileStore.getState();
        this.onChange = this.onChange.bind(this);
    } // EOF

     componentDidMount() {
        ProfileStore.listen(this.onChange);
    } // EOF

    componentWillUnmount() {
        ProfileStore.unlisten(this.onChange);
    } // EOF

    onChange(state) {
        this.setState(state);
    } // EOF

    render() {
        return (
            <div>
                <h1> User Account Settig </h1>

            </div>
        );
    } // EOF
}