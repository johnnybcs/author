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
                <img src="headShot.jpg" className="about-picture" alt='author' />
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