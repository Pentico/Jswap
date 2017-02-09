/**
 * Created by Tuane on 2016/10/31.
 */
import React from 'react';
import {Link} from 'react-router';
import FooterStore from '../stores/FooterStore';
import FooterActions from '../actions/FooterActions';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = FooterStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        FooterStore.listen(this.onChange);
        FooterActions.getTopCharacters();
    }

    componentWillUnmount() {
        FooterStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let leaderboardCharacters = this.state.characters.map((character) => {
            return (
                <li key={character.characterId}>
                    <Link to={'/characters/' + character.characterId}>
                        <img className='thumb-md'
                             src={'http://image.eveonline.com/Character/' + character.characterId + '_128.jpg'}/>
                    </Link>
                </li>
            )
        });


        return (
            <footer>
                <div className='container text-center'>
                    <p className='pull-left'>© 2017  Jswap Company, Inc. All Rights Reserved</p>
                    <ul className='pull-right list-inline'>
                        <li><a href="">MTArain Corporations</a></li>
                    </ul>
                </div>
            </footer>
        );
    }

}

export default Footer;

// <footer>
//                 <div className='container'>
//                     <div className='row'>
//                         <div className='col-sm-4'>
//                             <h3 className='lead'><strong>Information</strong> and <strong>Copyright</strong></h3>
//                             <p>Powered by <strong>Zero Corporations </strong>,</p>
//                             <p>All Rights Reserved</p>
//                             <p>© 2016 Jswap </p>
//                         </div>
//                         <div className='col-sm-4 '>
//                             <h3 className='lead'><strong>Sponsors</strong></h3>
//                             <p> BoilerPlate</p>
//                         </div>
//                         <div className='col-sm-4 '>
//                             <h3 className='lead'><strong>Details</strong></h3>
//                            <p><strong> Help and Contact Us </strong>,</p>
//                            <p><strong> Terms of Use</strong>,</p>
//                            <p><strong>Zero Corporations </strong>,</p>
//                         </div>
//                     </div>
//                 </div>
//             </footer>