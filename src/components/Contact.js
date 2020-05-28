import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import {SpeechBubble} from 'react-kawaii';
import './style.css';

const DEFAULT_MOOD = 'happy';

class Contact extends React.Component {
    state = {
        mood: DEFAULT_MOOD
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

    submit = () => {
        document.getElementById("formTitle").innerHTML = "Submitted! Thanks for your interest.";
        document.getElementById("form").reset();
    }

    render() {
        return (
            <div>
                <Navigation />
                <div className="app background-contact">
                    <br />
                    <br />
                    <br />
                    <div onClick={this.onClick} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                        <SpeechBubble size={300} mood={this.state.mood} color="#83D1FB" text="Hello!" />
                    </div>
                    <br />
                    <div className="ui segment container" style={{textAlign: "left", width: "370px", paddingTop: "3em"}}>
                    <label id="formTitle" className="ui top attached green huge label" style={{textAlign: "center"}}>Questions? Drop me a line.</label>
                        <form id="form" className="ui form" style={{fontSize: "17px"}} action="mailto:johnny@ualberta.ca" method="post">
                            <div className="field">
                                <label>Name</label>
                                <input type="text" name="name" placeholder="Name" />
                            </div>
                            <div className="field">
                                <label>Email</label>
                                <input type="text" name="email" placeholder="Email" />
                            </div>
                            <div className="field">
                                <label>Comment</label>
                                <textarea name="comment" rows="4" />
                            </div>
                            <button className="ui primary button" onClick={this.submit} type="submit">Submit</button>
                        </form>
                    </div>
                    <br />
                    <br />
                    <br />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Contact;