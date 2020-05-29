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

    onClickCat = () => {
        window.$('#cat').transition('jiggle').transition('bounce').transition('tada').transition('pulse').transition('shake').transition('flash').transition('fade', '5000ms');
    }

    onClickRocket = () => {
        window.$('#rocket').transition('jiggle').transition('fly down', '5000ms');
    }

    render() {
        return (
            <div>
                <Navigation />
                <div className="ui container">
                    <br />
                    <br />
                    <br />
                    <div className="ui stackable three column centered grid" style={{textAlign: "center"}}>
                        <div className="five wide column" style={{minWidth: "330px"}}>
                            <div className="ui move up reveal card" style={{minWidth: "330px"}}>
                                <div className="visible content">
                                    <img src="curtains.jpg" className="ui fluid rounded image" alt="curtains" />
                                </div>
                                <div className="hidden content">
                                    <ImageGallery items={images} showFullscreenButton={false} showThumbnails={false} 
                                    showPlayButton={false} showNav={false} autoPlay={true} slideInterval={2000} />
                                    <div className="content" style={{textAlign: "center"}}>
                                        <br />
                                        <div className="ui large header">Professional Certifications</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="five wide column" style={{minWidth: "330px"}}>
                            <div className="ui move up reveal card" style={{minWidth: "330px"}}>
                                <div className="visible content">
                                    <img src="curtains.jpg" className="ui fluid rounded image" alt="curtains" />
                                    </div>
                                <div className="hidden content">
                                    <img className="ui fluid rounded image" src="headShot.jpg" alt='author' />
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
                                    </div>
                                </div>
                            </div> 
                            </div>
                        <div className="five wide column" style={{minWidth: "330px"}}>
                            <div className="ui move up reveal card" style={{minWidth: "330px"}}>
                                <div className="visible content">
                                    <img src="curtains.jpg" className="ui fluid rounded image" alt="curtains" />
                                </div>
                                <div className="hidden content" style={{textAlign: "center"}}>
                                    <img className="ui fluid rounded image" src="SAP.png" alt='content' />
                                    <br />
                                    <br />
                                    <br />
                                    <div className="content">
                                        <div className="ui large header">Agile Developer Intern</div>
                                        <div className="ui header" style={{color: "#696969"}}>SAP Analytics Cloud<br />Infrastructure Team</div>
                                        <br />
                                        <br />
                                        <br />
                                        <span className="right floated" style={{fontSize: "15px"}}>Sep 2019 - Apr 2020</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="five wide column" style={{minWidth: "330px"}}>
                            <div className="ui move up reveal card" style={{minWidth: "330px"}}>
                                <div className="visible content">
                                    <img src="curtains.jpg" className="ui fluid rounded image" alt="curtains" />
                                </div>
                                <div className="hidden content">
                                    <div class="ui people shape">
                                        <div class="sides">
                                            <div class="side">
                                                <div class="ui fluid card">
                                                    <img className="ui fluid image" src="uofa.jpg" alt="content" />
                                                    <div class="content" style={{textAlign: "center"}}>
                                                        <div class="ui header" style={{fontSize: "17px"}}>The University of Alberta</div>
                                                        <div class="ui sub header" style={{fontSize: "14px"}}>
                                                            Bachelor of Science in Psychology
                                                        </div>
                                                    <br />
                                                    <br />
                                                    <span className="right floated" style={{fontSize: "15px"}}>Graduated Jun 2008</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="side">
                                                <div class="ui fluid card">
                                                    <img className="ui fluid image" src="uofa.jpg" alt="content" />
                                                    <div class="content" style={{textAlign: "center"}}>
                                                        <div class="ui header" style={{fontSize: "17px"}}>The University of Alberta</div>
                                                        <div class="ui sub header" style={{fontSize: "14px"}}>
                                                            Doctor of Medicine
                                                        </div>
                                                    <br />
                                                    <br />
                                                    <span className="right floated" style={{fontSize: "15px"}}>Completed 3 years</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="side active">
                                                <div class="ui fluid card">
                                                    <img className="ui fluid image" src="ubc.jpg" alt="content" />
                                                    <div class="content" style={{textAlign: "center"}}>
                                                        <div class="ui header" style={{fontSize: "17px"}}>The University of British Columbia</div>
                                                        <div class="ui sub header" style={{fontSize: "14px"}}>
                                                            Bachelor of Computer Science
                                                        </div>
                                                        <br />
                                                        <br />
                                                        <span className="right floated" style={{fontSize: "15px"}}>Graduating Apr 2021</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ui fluid buttons">
                                        <div class="ui green button" onClick={this.onClickLeft}>
                                            <i class="left long arrow icon"></i>
                                        </div>
                                        <div class="ui green button" onClick={this.onClickRight}>
                                            <i class="right long arrow icon"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="five wide column" style={{minWidth: "330px"}}>
                            <div className="ui move up reveal card" style={{minWidth: "330px"}}>
                                <div className="visible content">
                                    <img src="curtains.jpg" className="ui fluid rounded image" alt="curtains" />
                                </div>
                                <div className="hidden content" style={{paddingTop: "280px", paddingLeft: "120px"}}>
                                    <button onClick={this.onClickRocket} style={{border: "none", outline: "none", background: "none"}}>
                                        <img id="rocket" className="ui rounded image" src="rocket.png" alt='content' style={{height: "120px"}} />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="five wide column" style={{minWidth: "330px"}}>
                            <div className="ui move up reveal card" style={{minWidth: "330px"}}>
                                <div className="visible content">
                                    <img src="curtains.jpg" className="ui fluid rounded image" alt="curtains" />
                                </div>
                                <div className="hidden content" style={{paddingTop: "80px"}}>
                                    <button onClick={this.onClickCat} style={{border: "none", outline: "none", background: "none"}}>
                                        <img id="cat" className="ui fluid rounded image" src="cat.png" alt='content' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default About;