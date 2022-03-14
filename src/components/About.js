import React from 'react';
import Typical from 'react-typical';
import Navigation from './Navigation';
import Footer from './Footer';
import ImageGallery from 'react-image-gallery';
import './style.css';

var images = [];
for (var i = 0; i < 3; i++) {
    var pagePath = require('./assets/pages5/p' + i.toString() + '.png');
    images.push({ original: pagePath, thumbnail: pagePath });
}

class About extends React.Component {
    constructor(props) {
        super(props);
        this.shapeInterval = null;
      }

    componentDidMount() {
        this.shapeInterval = setInterval(function(){
            window.$('.shape').shape();
            window.$('.shape').shape('flip right');
        }, 3000);
    }

    componentWillUnmount(){
        this.shapeInterval = clearInterval(this.shapeInterval);
    }

    onClickCar = () => {
        window.$('#car').transition('bounce').transition('shake').transition('fly right', '2000ms').transition('fly left', '2000ms');
    }

    onClickRocket = () => {
        window.$('#rocket').transition('jiggle').transition('fly down', '3000ms').transition('fly down', '2000ms');
    }

    render() {
        return (
            <div>
                <Navigation />
                <br />
                <br />
                <div className="ui app">
                        <div className="ui card" style={{width: "400px"}}>
                            <div className="content" style={{textAlign: "center"}}>
                            <br />
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
                                <br />
                            </div>
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className="ui card" style={{width: "400px"}}>
                            <img className="ui fluid rounded image" src={require("./assets/bclc.png")} alt='content' />
                            <div className="content" style={{textAlign: "center"}}>
                                <div className="ui large header">Cyber Security Intern</div>
                                <div className="ui header" style={{color: "#696969"}}>Security Team</div>
                                <br />
                                <br />
                                <span className="" style={{fontSize: "17px"}}>May 2021 - Jan 2022</span>
                            </div>
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className="ui card" style={{width: "400px"}}>
                            <img className="ui fluid rounded image" src={require("./assets/rogers.png")} alt='content' />
                            <div className="content" style={{textAlign: "center"}}>
                                <div className="ui large header">DevOps Engineer Intern</div>
                                <div className="ui header" style={{color: "#696969"}}>HR and Corporate Systems Team</div>
                                <br />
                                <br />
                                <span className="" style={{fontSize: "17px"}}>Jan 2021 - Apr 2021</span>
                            </div>
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className="ui card" style={{width: "400px"}}>
                            <img className="ui fluid rounded image" src={require("./assets/SAP.png")} alt='content' />
                            <div className="content" style={{textAlign: "center"}}>
                                <div className="ui large header">Software Developer Intern</div>
                                <div className="ui header" style={{color: "#696969"}}>SAP Analytics Cloud Infrastructure Team</div>
                                <br />
                                <br />
                                <span className="" style={{fontSize: "17px"}}>Sep 2019 - Apr 2020</span>
                            </div>
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className="ui card" style={{width: "400px"}}>
                            <ImageGallery items={images} showFullscreenButton={false} showThumbnails={false} 
                            showPlayButton={false} showNav={false} autoPlay={true} slideInterval={3000} />
                            <div className="content" style={{textAlign: "center"}}>
                                <div className="ui huge header">Professional Certifications</div>
                            </div>
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className="ui card" style={{width: "400px"}}>
                            <div className="aligned content" style={{paddingTop: "150px"}}>
                                <button onClick={this.onClickCar} style={{border: "none", outline: "none", background: "none"}}>
                                    <img id="car" className="ui rounded image" src={require("./assets/car.png")} alt='content'  style={{height: "200px", cursor: "pointer"}}/>
                                </button>
                            </div>
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className="ui card" style={{width: "400px"}}>
                            <div className="ui people shape">
                                <div className="sides">
                                    <div className="side">
                                        <div className="ui fluid card">
                                            <img className="ui fluid image" src={require("./assets/uofa.jpg")} alt="content" />
                                            <div className="content" style={{textAlign: "center"}}>
                                                <div className="ui large header">The University of Alberta</div>
                                                <div className="ui header" style={{color: "#696969"}}>
                                                    Bachelor of Science in Psychology
                                                </div>
                                                <br />
                                                <br />
                                                <span className="d" style={{fontSize: "17px"}}>Graduated Jun 2008</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="side">
                                        <div className="ui fluid card">
                                            <img className="ui fluid image" src={require("./assets/uofa.jpg")} alt="content" />
                                            <div className="content" style={{textAlign: "center"}}>
                                                <div className="ui large header">The University of Alberta</div>
                                                <div className="ui header" style={{color: "#696969"}}>
                                                    Doctor of Medicine 
                                                </div>
                                                <br />
                                                <br />
                                                <span className="d" style={{fontSize: "17px"}}>Completed 3 years</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="side active">
                                        <div className="ui fluid card">
                                            <img className="ui fluid image" src={require("./assets/ubc.jpg")} alt="content" />
                                            <div className="content" style={{textAlign: "center"}}>
                                                <div className="ui large header">The University of British Columbia</div>
                                                <div className="ui header" style={{color: "#696969"}}>
                                                    Bachelor of Computer Science
                                                </div>
                                                <br />
                                                <br />
                                                <span className="d" style={{fontSize: "17px"}}>Graduating May 2022</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className="ui card" style={{width: "400px"}}>
                            <div className="aligned content" style={{paddingTop: "200px"}}>
                                <button onClick={this.onClickRocket} style={{border: "none", outline: "none", background: "none"}}>
                                    <img id="rocket" className="ui rounded image" src={require("./assets/rocket.png")} alt='content' style={{height: "200px", cursor: "pointer"}} />
                                </button>
                            </div>
                            <br />
                        </div>
                </div>
                <br />
                <br />
                <Footer />
            </div>
        );
    }
}

export default About;