import React from 'react';
import Typical from 'react-typical';

import Logo from './Logo';
import Navigation from './Navigation';

import './style.css';

const About = () => {
    return (
        <div>
            <p />
            <div className="row" style={{height: "65px"}}>
                <div className="ui grid">
                    <div className="four wide column" />
                    <div className="eight wide column centralize">
                        <Logo />
                    </div>
                    <div className="two wide column" />
                    <div className="two wide column" >
                        <Navigation />
                    </div>
                </div>
            </div>
            <div className="app">
                <br />
                <img src="headShot.jpg" className="app-logo" alt='logo' />
                <h1>Hi, I'm Johnny</h1>
                <div className="description">
                    I'm{' '}
                    <Typical
                        steps={[
                            'an author ✍️', 1500,
                            'a developer ☕', 1500,
                            'a student 📚', 1500,
                            'a husband 🔗', 1500,
                            'a father 👶', 1500
                        ]} 
                        loop={Infinity}
                        wrapper="b"
                    />
                </div>
            </div>
        </div>
    );
}

export default About;