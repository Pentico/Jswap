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

    handleSubmitAccountDelete(event) {

    } // EOF

    handleSubmitChangePassword(event) {

    } // EOF

    handleSubmitProfileInfo(event) {

    } // EOF

    render() {
        return (
            <div className='positionMain'>
                <div className='container'>
                    <div className='page-header'>
                        <h3>Profile Information</h3>
                    </div>
                    <form ref='pInformation' onSubmit={this.handleSubmitProfileInfo.bind()}>
                        <div className='form-group'>
                             <label className="col-sm-3 control-label">Email</label>
                            <div className="col-sm-7"><input className="form-control" 
                            type="email" onChange={ProfileActions.updateEmail} value={this.state.email}  /></div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-3 control-label">Name</label><div className="col-sm-7">
                            <input className="form-control" type="text" onChange={ProfileActions.updateName} value={this.state.name}/></div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-3 control-label">Gender</label><div className="col-sm-6"><label className="radio col-sm-3"><input type="radio" name="gender" value={this.state.gender} data-toggle="radio"/><span>Male</span></label>
                            <label className="radio col-sm-3"><input type="radio" name="gender" value="female" data-toggle="radio"/><span>Female</span></label><label class="radio col-sm-3"><input type="radio" name="gender" value="other" data-toggle="radio"/><span>Other</span></label></div>
                        </div>

                        <div className="form-group">
                            <label className="col-sm-3 control-label">Location</label>
                            <div className="col-sm-7"><input className="form-control" type="text" onChange={ProfileActions.updatetLocation} value={this.state.Location}/>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-sm-3 control-label">Gravatar</label><div className="col-sm-4">
                            <img className="profile" src="https://gravatar.com/avatar/bc1c025568bbae701c76a5d69e7d6a98?s=200&amp;d=retro" width="100" height="100"/></div>
                        </div>

                        <div className="form-group">
                            <div className="col-sm-offset-3 col-sm-4"><button className="btn btn btn-primary" type="submit">
                            <i className="fa fa-pencil"></i>Update Profile</button></div>
                        </div>
                    </form>

                    <div className="page-header">
                        <h3>Change Password</h3>
                    </div>

                    <form className="form-horizontal" ref='' onSubmit={this.handleSubmitChangePassword.bind(this)}>
                        <div className="form-group">
                            <label className="col-sm-3 control-label" >New Password</label><div className="col-sm-7">
                            <input class="form-control" type="password" value={this.state.password} onChange={ProfileActions.updatePassword}/></div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-3 control-label" >Confirm Password</label>
                            <div className="col-sm-7"><input className="form-control" type="password" 
                                value={this.state.password0} onChange={ProfileActions.updatePassword0}/></div></div>
                            <div className="form-group"><div className="col-sm-offset-3 col-sm-4"><button className="btn btn-primary" type="submit">
                            <i className="fa fa-lock"></i>Change Password</button></div>
                        </div>
                        
                    </form>
                    <div className="page-header"><h3>Delete Account</h3></div>
                        <form className="form-horizontal" ref='AccountDelete' onSubmit={this.handleSubmitAccountDelete}>
                            <div className="form-group">
                                <p className="col-sm-offset-3 col-sm-4">You can delete your account, but keep in mind this action is irreversible.</p>
                                <div className="col-sm-offset-3 col-sm-4">
                                    <button className="btn btn-danger" type="submit"><i className="fa fa-trash"></i>Delete my account</button>
                                </div>
                            </div>
                        </form>
                    <div class="page-header"><h3>Linked Accounts</h3></div>
                    
                </div>
            </div>
        );
    } // EOF
}