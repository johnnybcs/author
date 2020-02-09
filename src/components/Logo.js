import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

class Logo extends React.Component {

    render() {
        return (
            <NavLink to='/'>
                <div className="logo-title">
                    Johnny Li
                </div>
            </NavLink>
        );
    }
}

export default Logo;