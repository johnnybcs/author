import React from 'react';
import Typical from 'react-typical';

import Navigation from './Navigation';

import './style.css';

const About = () => {
    return (
        <div>
            <Navigation />
            <div className="app background-about">
                <br />
                <br />
                <div className="ui card">
                    <div className="image">
                        <img src="headShot.jpg" alt='author' />
                    </div>
                    <div className="content">
                        <div className="header-text">
                            Hi, I'm Johnny
                        </div>
                        <br />
                        <div className="description">
                            I'm{' '}
                            <Typical
                                steps={[
                                    'an author ✍️', 1500,
                                    'a developer ☕', 1500,
                                    'a student 📚', 1500
                                ]} 
                                loop={Infinity}
                                wrapper="b"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;