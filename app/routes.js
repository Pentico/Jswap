/**
 * Created by Tuane on 2016/10/31.
 */
import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import User from './components/User';
import AddItem from './components/User/AddItem';

export default (
    <Route component={App}>
        <Route path='/' component={Home} />
        <Route path='/Login' component={Login}/>
        <Route path='/SignUp' component={SignUp}/>
        <Route path='/User' component={User} />
        <Route path='/AddItem' component={AddItem}/>
    </Route>
);