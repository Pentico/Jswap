/**
 * Created by Tuane on 2016/11/03.
 */

import React from 'react';
import {Link} from 'react-router';
import SignUpStore from '../stores/SignUpStore';
import SignUpActions from '../actions/SignUpActions';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = SignUpStore.getState();
        this.onChange = this.onChange.bind(this);
    } // EOF

    componentDidMount() {
        SignUpStore.listen(this.onChange);
    }// EOF

    componentWillUnmount() {
        SignUpStore.unlisten(this.onChange);
    } // EOF

    onChange(state) {
        this.setState(state);
    } // EOF

    handleSubmitSignUp(event){

        event.preventDefault();
        let userName = this.state.name.trim();
        let userEmail = this.state.email.trim();
        let userPassword = this.state.password0.trim();
        let userPasswordRe = this.state.password1.trim();   
        // TODO front end verification

        SignUpActions.signUpAttempt({
            email:userEmail,
            password0:userPassword,
            password1:userPasswordRe,
            name:userName
        }); 

    } // EOF


    render() {

        return (

            <form ref='signUpForm' className='formSignUp'
                  onSubmit={this.handleSubmitSignUp.bind(this)}>

                  <div className='container'>

                     <div className='input-group'>
                        <input type='text' className='form-control' placeholder={'Name'}
                           value={this.state.name}  onChange={SignUpActions.updateName}/>
                    </div>
                    <div className='input-group'>
                        <input type='text' className='form-control' placeholder={'email'}
                           value={this.state.email}  onChange={SignUpActions.updateEmail}/>
                    </div>
                    <div className='input-group'>
                        <input type='password' className='form-control' placeholder={'Password'}
                           value={this.state.password0} onChange={SignUpActions.updatePassword0}/>
                    </div>
                    <div className='input-group'>
                         <input type='password' className='form-control' placeholder={'Retype Password'}
                           value={this.state.password1} onChange={SignUpActions.updatePassword1}/>
                    </div>
                    <div className='input-group'>
                        <button type="submit" className="btn btn-default">Sign Up &rarr;</button>
                    </div>

                     <div className='input-group RememberColor'  >
                        <Link to='/Login'>Already have an Account ..</Link>
                    </div>

                  </div>
                 
            </form>
        );
    }

}

export default SignUp;