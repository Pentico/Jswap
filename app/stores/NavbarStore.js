/**
 * Created by Tuane on 2016/10/31.
 */
import alt from '../alt';
import NavbarActions from '../actions/NavbarActions';
import Logout from '../components/Navbar/Logout';


class NavbarStore {
    constructor() {
        this.bindActions(NavbarActions);
        this.totalCharacters = 0;
        this.onlineUsers = 0;
        this.ajaxAnimationClass = '';
        this.userSession = '';
        this.message1 ="L";
        this.message0 = " Sing ";

    }


    onUpdateOnlineUsers(data) {
        this.onlineUsers = data.onlineUsers;
    }

    onUpdateAjaxAnimation(className) {
        this.ajaxAnimationClass = className; //fadein or fadeout
    }

      

      onLogoutFail(data) {
    	console.log('onLogoutFail');
    } // EOF

    onLogoutSuccess(data){
    	console.log(data.message);
        if(data.message){
            // Logout successfully
            window.location = '/'
        }else {
            // Failed to Logout of Account!!
        }
    } // EOF



    /**
     * When You click login or sign Up
     */
    onLoginSign() {

        console.log("onLoginSignUp");
    }

    // handler Server Error
    onClickEventFail(data){
        // TODO server Error handle
    } // EOF

    // handle Route
    onClickEventSuccess(data){

        // data.message return true if user logged in else false.

        if(data.message){
            switch (data.ref) {
            case 0:
                window.location = '/';
                break;
            case 1:
                window.location = '/Bids';
                break;
            case 2:
                window.location = '/User';
                break;
            case 3:
                window.location = '/AddItem';
                break;
            case 4:
                window.location = '/Contacts';  
                break;
             case 5:
                window.location = '/About';  
                break;
            default:
                console.log('mas tarde');
                break;    
            }
        }else {
            switch (data.ref) {
                case 0:
                    window.location = '/'; 
                    break;
                case 1:
                    window.location = '/Bids'
                    break;
                case 2:
                    window.location = '/login'
                    break;
                case 3:
                    window.location = '/Login'
                    break;
                case 5:
                    window.location = '/About'
                    break;
                case 6:
                    window.location = '/Login'
                    break;
                default:
                console.log('perdon');
                    break;
            }
        }
    } // EOF


     onAuthenticationSuccess(data) {
        this.userSession = data.message;
    } // EOF

    onAuthenticationFail(data) {
        this.userSession = data.message;
        // TODO send a message of the error~!!!!!
        console.log('onAuthenticationFail');
    } // EOF
}

export default alt.createStore(NavbarStore);