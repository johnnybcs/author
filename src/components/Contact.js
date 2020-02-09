import React from 'react';

import Logo from './Logo';
import Navigation from './Navigation';
import Typical from 'react-typical';

import {SpeechBubble} from 'react-kawaii';

const DEFAULT_MOOD = 'happy';

class Contact extends React.Component {
    state = {
        mood: ''
    };

    componentDidMount() {
        this.setState({mood: DEFAULT_MOOD});
    }

    onClick = () => {
        if (this.state.mood !== 'shocked') {
            this.setState({mood: 'shocked'});
        } else {
            this.setState({mood: DEFAULT_MOOD});
        }
    }

    onMouseEnter = () => {
        this.setState({mood: 'blissful'});
    }

    onMouseLeave = () => {
        this.setState({mood: DEFAULT_MOOD});
    }

    render() {
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
                    <div onClick={this.onClick} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                        <SpeechBubble size={300} mood={this.state.mood} color="#83D1FB" text="Hello!" />
                    </div>
                    <br />
                    <div className="title">
                        <Typical
                            steps={[
                                'Hello', 1000
                            ]} 
                            loop="1"
                            wrapper="b"
                        />
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <h2>Questions? Drop me a line</h2>
                        <a href = "mailto:johnny@alumni.ubc.ca">johnny@alumni.ubc.ca</a>
                </div>
            </div>
        );
    }
}

export default Contact;