/**
 * Created by Tuane on 2016/10/31.
 */

import React from  'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Search from './Search';

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar history={this.props.history}  />
                {this.props.children}
                <Footer/>
            </div>
        );
    }
}

export default App;