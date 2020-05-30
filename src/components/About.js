import React from 'react';
import Typical from 'react-typical';
import Navigation from './Navigation';
import Footer from './Footer';
import ImageGallery from 'react-image-gallery';
import './style.css';

var images = [];
for (var i = 0; i < 3; i++) {
    var pagePath = './pages5/p' + i.toString() + '.png';
    images.push({ original: pagePath, thumbnail: pagePath });
}

class About extends React.Component {
    onClickLeft = () => {
        window.$('.shape').shape();
        window.$('.shape').shape('flip left');
    }

    onClickRight = () => {
        window.$('.shape').shape();
        window.$('.shape').shape('flip right');
    }

    onClickCar = () => {
        window.$('#car').transition('shake').transition('bounce').transition('fly right', '2000ms').transition('fly left', '2000ms');
    }

    onClickRocket = () => {
        window.$('#rocket').transition('jiggle').transition('fly down', '3000ms').transition('fly down', '2000ms');
    }

    render() {
        return (
            <div>
                <Navigation />
                <br />
                <div className="ui app">
                        <div className="ui card">
                            <img className="ui fluid rounded image" src="headShot.jpg" alt='author' />
                            <div className="content" style={{textAlign: "center"}}>
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
                        <br />
                        <br />
                        <div className="ui card">
                            <img className="ui fluid rounded image" src="SAP.png" alt='content' />
                            <div className="content" style={{textAlign: "center"}}>
                                <div className="ui large header">Agile Developer Intern</div>
                                <div className="ui header" style={{color: "#696969"}}>SAP Analytics Cloud</div>
                                <div className="ui sub header" style={{color: "#696969", marginTop: "0px"}}>
                                    Infrastructure Team
                                </div>
                                <br />
                                <br />
                                <br />
                                <span className="" style={{fontSize: "15px"}}>Sep 2019 - Apr 2020</span>
                            </div>
                        </div>
                        <br />
                        <br />
                        <div className="ui card">
                            <div className="aligned content" style={{paddingTop: "150px"}}>
                                <button onClick={this.onClickCar} style={{border: "none", outline: "none", background: "none"}}>
                                    <img id="car" className="ui rounded image" src="car.png" alt='content'  style={{height: "170px"}}/>
                                </button>
                            </div>
                        </div>
                        <br />
                        <br />
                        <div className="ui card">
                            <ImageGallery items={images} showFullscreenButton={false} showThumbnails={false} 
                            showPlayButton={false} showNav={false} autoPlay={true} slideInterval={2000} />
                            <div className="content" style={{textAlign: "center"}}>
                                <div className="ui header">Professional Certifications</div>
                            </div>
                        </div>
                        <br />
                        <br />
                        <div className="ui card">
                            <div class="ui people shape">
                                <div class="sides">
                                    <div class="side">
                                        <div class="ui fluid card">
                                            <img className="ui fluid image" src="uofa.jpg" alt="content" />
                                            <div class="content" style={{textAlign: "center"}}>
                                                <div class="ui header" style={{fontSize: "17px"}}>The University of Alberta</div>
                                                <div class="ui sub header" style={{fontSize: "13px", color: "#696969"}}>
                                                    Bachelor of Science in Psychology
                                                </div>
                                                <br />
                                                <br />
                                                <span className="d" style={{fontSize: "13px"}}>Graduated Jun 2008</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="side">
                                        <div class="ui fluid card">
                                            <img className="ui fluid image" src="uofa.jpg" alt="content" />
                                            <div class="content" style={{textAlign: "center"}}>
                                                <div class="ui header" style={{fontSize: "17px"}}>The University of Alberta</div>
                                                <div class="ui sub header" style={{fontSize: "13px", color: "#696969"}}>
                                                    Doctor of Medicine
                                                </div>
                                                <br />
                                                <br />
                                                <span className="d" style={{fontSize: "13px"}}>Completed 3 years</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="side active">
                                        <div class="ui fluid card">
                                            <img className="ui fluid image" src="ubc.jpg" alt="content" />
                                            <div class="content" style={{textAlign: "center"}}>
                                                <div class="ui header" style={{fontSize: "17px"}}>The University of British Columbia</div>
                                                <div class="ui sub header" style={{fontSize: "13px", color: "#696969"}}>
                                                    Bachelor of Computer Science
                                                </div>
                                                <br />
                                                <br />
                                                <span className="d" style={{fontSize: "13px"}}>Graduating Apr 2021</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ui fluid buttons">
                                <div class="ui blue button" onClick={this.onClickLeft}>
                                    <i class="left long arrow icon"></i>
                                </div>
                                <div class="ui blue button" onClick={this.onClickRight}>
                                    <i class="right long arrow icon"></i>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />
                        <div className="ui card">
                            <div className="aligned content" style={{paddingTop: "200px"}}>
                                <button onClick={this.onClickRocket} style={{border: "none", outline: "none", background: "none"}}>
                                    <img id="rocket" className="ui rounded image" src="rocket.png" alt='content' style={{height: "140px"}} />
                                </button>
                            </div>
                            <br />
                        </div>
                </div>
                <br />
                <Footer />
            </div>
        );
    }
}

export default About;