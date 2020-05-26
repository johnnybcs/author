import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

class Navigation extends React.Component {

    render() {
        return (
            <div>
                <div class="ui centered grid">
                    <div class="row">
                        <div className="navigation-title" id="top">Johnny Li</div>
                    </div>
                    <div class="row">
                        <div class="ui text menu">
                            <div class="item">
                                <NavLink exact to='/' className="nav-link" activeStyle={{textDecoration:"underline", color:"black"}}>
                                    Books
                                </NavLink>
                            </div>
                            <div class="item">
                                <NavLink exact to='/about' className="nav-link" activeStyle={{textDecoration:"underline", color:"black"}}>
                                    Biography
                                </NavLink>
                            </div>
                            <div class="item">
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