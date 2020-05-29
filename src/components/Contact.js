import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import Typical from 'react-typical';
import './style.css';

class Contact extends React.Component {
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
                    <h1 className="ui huge header" style={{fontSize: "50px"}}>
                        <Typical
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