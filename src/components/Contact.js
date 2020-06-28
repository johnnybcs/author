import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import axios from 'axios';
import './style.css';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            comment: ''
        }
    }

    handleChange (event) {
        this.setState({[event.target.name]: event.target.value});
    }

    submit = (event) => {
        axios.post('http://localhost:5000/comment', {name: this.state.name, email: this.state.email, comment: this.state.comment}).then(res => {console.log(res); console.log(res.data);});
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
                        <img id="speechBubble" className="ui image" src={require("./assets/speechBubble.png")} alt='content'  style={{height: "120px", cursor: "pointer"}}/>
                    </button>
                    <h1 id="notification">Leave a comment</h1>               
                    <div className="ui segment container" style={{textAlign: "left", width: "370px"}}>
                        <form id="form" className="ui form" style={{fontSize: "17px"}} action="" method="post">
                            <div className="field">
                                <label>Name</label>
                                <input type="text" name="name" placeholder="Name" onChange={event => this.handleChange(event)} />
                            </div>
                            <div className="field">
                                <label>Email</label>
                                <input type="text" name="email" placeholder="Email" onChange={event => this.handleChange(event)} />
                            </div>
                            <div className="field">
                                <label>Comment</label>
                                <textarea name="comment" rows="4" onChange={event => this.handleChange(event)} />
                            </div>
                            <button className="ui primary button" onClick={this.submit} type="button">Submit</button>
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