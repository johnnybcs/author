import React from 'react';
import Typical from 'react-typical';

import Header from './Header';

import './style.css';

const About = () => {
    return (
        <div>
            <Header />
            <div className="app">
                <br />
                <div className="ui card">
                    <div className="image">
                        <img src="headShot.jpg" alt='author' />
                    </div>
                    <div className="content">
                        <div className="header">
                            Hi, I'm Johnny
                        </div>
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
            </div>
        </div>
    );
}

export default About;