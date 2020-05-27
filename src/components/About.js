import React from 'react';
import Typical from 'react-typical';
import Navigation from './Navigation';
import Footer from './Footer';
import './style.css';

class About extends React.Component {
    render() {
        return (
            <div>
                <Navigation />
                <div className="app background-about">
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="ui move up reveal">
                        <div className="visible content">
                            <img className="ui image" src="curtains.jpg" alt="curtains" />
                        </div>
                        <div className="hidden content">
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
                </div>
                <Footer />
            </div>
        );
    }
}

export default About;