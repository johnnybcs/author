import React from 'react';
import './style.css';

class Footer extends React.Component {

    render() {
        return (
            <div>
                <br />
                <br />
                <div className="ui centered grid">
                    <div className="row">
                        <a href="#top" style={{color:"black"}}><i className="hand point up outline huge icon"  /></a>
                    </div>
                    <i className="copyright outline icon"></i>Johnny Li
                </div>
                <br />
                <br />        
            </div>
        );
    }
}

export default Footer;