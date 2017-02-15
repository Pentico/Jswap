/**
 * Created by Tuane on 2016/11/03.
 */

import React from 'react';
import LoginStore from '../stores/LoginStore';
import LoginActions from '../actions/LoginActions';
import {Link} from 'react-router';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = LoginStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount(){
        LoginStore.listen(this.onChange);
    } // EOF

    componentWillUnmount() {
        LoginStore.unlisten(this.onChange); 
    } // EOF

    onChange(state){
        this.setState(state);
    } //EOF

    handleSubmitLogin(event) {
        event.preventDefault();

        let userEmail = this.state.email.trim();
        let userpassword = this.state.password.trim();

        LoginActions.loginAttempt({
            email:userEmail,
            password:userpassword
        });
    } // EOF
        


    render() {
        return (

            <form ref='loginForm'  className="loginForm" onSubmit={this.handleSubmitLogin.bind(this)}>

                <div className="container">
                    <div className='input-group'>
                        <input type='text' className='form-control' placeholder={'email'}
                            value={this.state.email} onChange={LoginActions.updateEmail}/>
                    </div>
                     <div className='input-group'>
                        <input type='password' className='form-control' placeholder={'Password'}
                           value={this.state.password} onChange={LoginActions.updatePassword}/>
                    </div>
                    <div className='input-group RememberColor'  >
                        <Link to='/'>Forgot Password</Link> 
                    </div>
                    <div className='input-group RememberColor'  >
                        <Link to='/SignUp'>Don't have an Account</Link>
                    </div>
                    <div className='input-group'>
                        <button type="submit" className="btn btn-default" 
                           >Login &rarr;</button>                
                    </div>
                </div>
        </form>
        );
    }
}

export default Login;