import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

class Navigation extends React.Component {

    render() {
        return (
            <div className="ui grid header">
                <div className="column" />
                <div className="three wide column">
                    <NavLink to='/'>
                        <div className="logo-title">
                            Johnny Li
                        </div>
                    </NavLink>
                </div>
                <div className="ten wide column" />
                <div className="two wide column">
                    <NavLink exact to='/about'>
                        <i class="big info circle icon" />
                    </NavLink>
                    <NavLink exact to='/contact'>
                        <i class="big address card icon" />
                    </NavLink>
                </div>
                <div className="column" />
            </div>
        );
    }
}

export default Navigation;