import React from 'react';

import Navigation from './Navigation';
import Typical from 'react-typical';

import {SpeechBubble} from 'react-kawaii';

import './style.css';

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
                <Navigation />
                <div className="app background-contact">
                    <br />
                    <div onClick={this.onClick} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                        <SpeechBubble size={300} mood={this.state.mood} color="#83D1FB" text="Hello!" />
                    </div>
                    <br />
                    <div className="contact-title">
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
                    <h1>Questions?{' '}<a href = "mailto:johnny@alumni.ubc.ca">Drop me a line</a></h1>
                </div>
            </div>
        );
    }
}

export default Contact;