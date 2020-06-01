import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import Typical from 'react-typical';
import './style.css';

class Contact extends React.Component {
    submit = () => {
        document.getElementById("notification").innerHTML = "Submitted!";
        document.getElementById("form").reset();
    }

    onClickSpeechBubble = () => {
        window.$('#speechBubble').transition('jiggle').transition('tada');
    }

    render() {
        return (
            <div>
                <Navigation />
                <br />
                <div className="app">
                <button onClick={this.onClickSpeechBubble} style={{border: "none", outline: "none", background: "none"}}>
                    <img id="speechBubble" className="ui image" src="speechBubble.png" alt='content'  style={{height: "120px"}}/>
                </button>                   
                    <h1 id="notification" className="ui huge header" style={{fontSize: "30px"}}>
                        <Typical id="typical"
                        steps={[
                            'Questions?', 2000,
                            'Drop me a line.', 1500,
                        ]} 
                        loop={1}
                        wrapper="b"
                        />
                    </h1>
                    <div className="ui segment container" style={{textAlign: "left", width: "370px"}}>
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
                </div>
                <br />
                <br />
                <Footer />
            </div>
        );
    }
}

export default Contact;