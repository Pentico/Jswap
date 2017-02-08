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
        this.userSession = false;
        this.login_SignUp_Componet = Logout; // TODO FIx this ...
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
    	console.log('onLogoutSuccess');
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
                window.location = '/User';  
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
                case 1:
                    window.location = '/Bids'
                    break;
                case 1:
                    window.location = '/Bids'
                    break;
                default:
                console.log('perdon');
                    break;
            }
        }
    } // EOF

}

export default alt.createStore(NavbarStore);