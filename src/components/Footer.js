import React from 'react';
import './style.css';

class Footer extends React.Component {

    render() {
        return (
            <div>
                <br />
                <br />
                <div className="ui centered grid">
                    <div class="row">
                        <a href="#top" style={{color:"black"}}><i class="hand point up outline huge icon"  /></a>
                    </div>
                    <i class="copyright outline icon"></i>Johnny Li
                </div>
                <br />
                <br />        
            </div>
        );
    }
}

export default Footer;