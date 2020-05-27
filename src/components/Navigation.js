import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

class Navigation extends React.Component {

    render() {
        return (
            <div>
                <div className="ui centered grid">
                    <div className="row">
                        <div className="navigation-title" id="top">Johnny Li</div>
                    </div>
                    <div className="row">
                        <div className="ui text menu">
                            <div className="item">
                                <NavLink exact to='/' className="nav-link" activeStyle={{textDecoration:"underline", color:"black"}}>
                                    Books
                                </NavLink>
                            </div>
                            <div className="item">
                                <NavLink exact to='/about' className="nav-link" activeStyle={{textDecoration:"underline", color:"black"}}>
                                    Biography
                                </NavLink>
                            </div>
                            <div className="item">
                                <NavLink exact to='/projects' className="nav-link" activeStyle={{textDecoration:"underline", color:"black"}}>
                                    Projects
                                </NavLink>
                            </div>
                            <div className="item">
                                <NavLink exact to='/contact' className="nav-link" activeStyle={{textDecoration:"underline", color:"black"}}>
                                    Contact
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navigation;