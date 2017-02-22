import React from 'react';
import {Link} from 'react-router';
import NavbarStore from '../stores/NavbarStore';
import NavbarActions from '../actions/NavbarActions';
import Logout from './Navbar/Logout';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = NavbarStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentWillMount() {
        
    }
    componentDidMount() {
        NavbarStore.listen(this.onChange);

        // NavbarActions.getCharacterCount();

        // console.log('hersfd');
        // let socket = io.connect();

        // socket.on('onlineUsers', (data) => {
        //     NavbarActions.updateOnlineUsers(data);
        // });

        $(document).ajaxStart(() => {
            NavbarActions.Authentication();
        });

        // $(document).ajaxComplete(() => {
        //     setTimeout(() => {
        //         NavbarActions.updateAjaxAnimation('fadeOut');
        //     }, 750);
        // });
    } // EOF

    componentWillUnmount() {
        NavbarStore.unlisten(this.onChange);
    } //EOF

    onChange(state) {
        this.setState(state);
    } // EOF


    handleLogout(event){
        event.preventDefault();
        NavbarActions.logoutAttempt()
        console.log('handleLogout');
    } // EOF

    handleClickEvent(ref, event){

        event.preventDefault();
        NavbarActions.clickEvent({
            ref:ref
        })
    }      


    render() {


        const isLoggedIn =  this.state.userSession;

        return (
            <nav className='navbar navbar-default navbar-fixed-top'>
                <div className='container'>
                    <div className='navbar-header'>
                        <button className='navbar-toggle' type='button'data-toggle='collapse' data-target='.navbar-collapse'>
                            <span className='sr-only'>Toggle navigation</span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                        </button>
                        <Link to='/' className='navbar-brand'>
                            <i className='fa fa-cube'/>
                            Jswap
                        </Link>
                    </div>
                        <div className='collapse navbar-collapse'>
                            <ul className='nav navbar-nav'>
                                <li><a onClick={this.handleClickEvent.bind(this,0)}>Home</a></li>
                                <li><a onClick={this.handleClickEvent.bind(this,1)}>Bids</a></li>
                                <li><a onClick={this.handleClickEvent.bind(this,4)}>Contacts</a></li>
                                <li><a onClick={this.handleClickEvent.bind(this,5)}>About</a></li>      
                            </ul>
                            {isLoggedIn ? (
                                <Logout handleLogout= {this.handleLogout}/>
                            ) : (

                            <ul className='nav navbar-nav navbar-right'>
                                <li><a onClick={this.handleClickEvent.bind(this,3)}>Add Item</a></li>
                                <li><a onClick={this.handleClickEvent.bind(this,6)}>Login</a></li>
                            </ul>
                            )}
                      </div>
                </div>
            </nav>
            
        );
    } //EOF
}

export default Navbar;
//  <this.state.login_SignUp_Componet handleSubmitLogin={this.handleSubmitLogin.bind(this)}
//                         NavbarActions ={NavbarActions} hello="Hello"
//                         handleLogout={this.handleLogout.bind(this)} handleSubmitSignUp={this.handleSubmitSignUp.bind(this)}
//                          />
//                     <a onClick={NavbarActions.loginSign} >{this.state.message0}</a>


    //   <nav className='navbar navbar-default navbar-fixed-top'>
    //             <div className='navbar-header'>
    //                 <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar'>
    //                     <span className='sr-only'>Toggle navigation</span>
    //                     <span className='icon-bar'></span>
    //                     <span className='icon-bar'></span>
    //                     <span className='icon-bar'></span>
    //                 </button>
    //                 <Link to='/' className='navbar-brand'>
    //                  <span ref='triangles' className={'triangles animated ' + this.state.ajaxAnimationClass}>
    //           <div className='tri invert'></div>
    //           <div className='tri invert'></div>
    //           <div className='tri'></div>
    //           <div className='tri invert'></div>
    //           <div className='tri invert'></div>
    //           <div className='tri'></div>
    //           <div className='tri invert'></div>
    //           <div className='tri'></div>
    //           <div className='tri invert'></div>
    //         </span>
    //             <div  className="Name">
    //                     Jswap
    //                     <span className='badge badge-up badge-danger'>{this.state.onlineUsers}</span>
    //             </div>
    //           </Link>
    //       </div>
    //             <div id='navbar' className='navbar-collapse collapse'>
    //                 <ul className='nav navbar-nav'>
    //                     <li><a onClick={this.handleClickEvent.bind(this,0)}>Home</a></li>
    //                     <li><a onClick={this.handleClickEvent.bind(this,1)}>Bids</a></li>
    //                     <li><a onClick={this.handleClickEvent.bind(this,2)}>My Account</a></li>
    //                     <li><a onClick={this.handleClickEvent.bind(this,3)}>Add Item</a></li>
    //                 </ul>
                    
    //             </div>
    //         </nav>