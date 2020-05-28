import React from 'react';
import Typical from 'react-typical';
import Navigation from './Navigation';
import Footer from './Footer';
import './style.css';
import ImageGallery from 'react-image-gallery';

var images = [];
for (var i = 0; i < 3; i++) {
    var pagePath = './pages5/p' + i.toString() + '.png';
    images.push({ original: pagePath, thumbnail: pagePath });
}

class About extends React.Component {

    render() {
        return (
            <div>
                <Navigation />
                <div className="ui container">
                    <br />
                    <br />
                    <br />
                    <div className="ui stackable three column centered grid" style={{textAlign: "center"}}>
                    <div className="five wide column">
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
                        <div className="five wide column">
                        <div className="ui move up reveal card" style={{minWidth: "330px"}}>
                            <div className="visible content">
                                <img src="curtains.jpg" className="ui fluid rounded image" alt="curtains" />
                                </div>
                            <div className="hidden content">
                                <div className="image">
                                    <img className="ui fluid rounded image" src="headShot.jpg" alt='author' />
                                </div>
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
                        <div className="five wide column">
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
                </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default About;