import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

class Navigation extends React.Component {

    render() {
        return (
            <div className="ui grid navigation">
                <div className="column" />
                <div className="three wide column">
                    <NavLink to='/'>
                        <div className="navigation-title">
                            Johnny Li
                        </div>
                    </NavLink>
                </div>
                <div className="nine wide column" />
                <div className="column">
                    <div className="pad">
                        <NavLink exact to='/about' className="nav-link" activeStyle={{textDecoration:"underline", color:"black"}}>
                            About
                        </NavLink>
                    </div>
                </div>
                <div className="column">
                    <div className="pad">
                        <NavLink exact to='/contact' className="nav-link" activeStyle={{textDecoration:"underline", color:"black"}}>
                            Contact
                        </NavLink>
                    </div>
                </div>
                <div className="column" />
            </div>
        );
    }
}

export default Navigation;