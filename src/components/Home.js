import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import ImageGallery from 'react-image-gallery';
import './style.css';

var images = [];
for (var i = 0; i < 20; i++) {
    var pagePath = require('./assets/pages/p' + i.toString() + '.jpg');
    var thumbnailPath = require('./assets/thumbnails/p' + i.toString() + '.jpg');
    images.push({ original: pagePath, thumbnail: thumbnailPath });
}

var images2 = [];
for (var j = 0; j < 7; j++) {
    var pagePath2 = require('./assets/pages2/p' + j.toString() + '.jpg');
    images2.push({ original: pagePath2, thumbnail: pagePath2 });
}

var images3 = [];
for (var k = 0; k < 11; k++) {
    var pagePath3 = require('./assets/pages3/p' + k.toString() + '.jpg');
    images3.push({ original: pagePath3, thumbnail: pagePath3 });
}

var images7 = [];
for (var l = 0; l < 4; l++) {
    var pagePath7 = require('./assets/pages7/p' + l.toString() + '.png');
    images7.push({ original: pagePath7, thumbnail: pagePath7 });
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Navigation />
                <br />
                <br />
                <div className="ui grid">
                    <div className="row">
                        <div className="ui container raised segment" id="101Animals" style={{width: "700px"}}>
                            <a className="ui orange ribbon large label" target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/dp/B07D4LX1LY">101 Animals</a>
                            <ImageGallery items={images} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="ui container raised segment" style={{width: "700px", height: "150px", padding: "0 0 0 0"}}>
                            <ImageGallery items={images7} showFullscreenButton={false} showThumbnails={false} 
                            showPlayButton={false} showNav={false} autoPlay={true} slideInterval={4000} />
                            <a className="ui top right attached orange label" target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/dp/B07D4LX1LY">
                                Amazon Reviews
                            </a>
                        </div>
                    </div>
                    <div className="row">
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>
                    <div className="row">
                        <div className="ui container raised segment" id="worldBreaker" style={{width: "700px"}}>
                            <a className="ui red ribbon large label" target="_blank" rel="noopener noreferrer" href="https://www.royalroad.com/fiction/18650/world-breaker">World Breaker</a>
                            <div className="ui two column stackable center aligned grid">
                                <div className="ui vertical divider">
                                </div>
                                <div className="middle aligned row">
                                    <div className="column">
                                        <img className="ui huge image" src={require("./assets/worldBreakerCover.jpg")} alt="cover" />
                                    </div>
                                    <div className="column">
                                        <img className="ui huge image" src={require("./assets/worldBreakerBack.jpg")} alt="back" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <br />
                    </div>
                    <div className="centered row" >
                        <div className="ui four statistics" style={{width: "700px"}}>
                            <div className="statistic">
                                <div className="value">
                                    212
                                </div>
                                <div className="label">
                                    Followers
                                </div>
                            </div>
                            <div className="statistic">
                                <div className="text value">
                                    Eighty
                                    <br />
                                    Thousand
                                </div>
                                <div className="label">
                                    Total Views
                                </div>
                            </div>
                            <div className="statistic">
                                <div className="value">
                                    <div className="ui rating">
                                        <i className="large yellow icon" />
                                        <i className="large yellow icon" />
                                        <i className="large yellow icon" />
                                        <i className="large yellow icon" />
                                        <i className="large icon" />
                                    </div>
                                </div>
                                <div className="label">
                                    Overall Score
                                </div>
                            </div>
                            <div className="statistic">
                            <div className="value">
                                <a target="_blank" rel="noopener noreferrer" href="https://www.royalroad.com/fiction/18650/world-breaker">
                                    <img src={require("./assets/royalroad.png")} alt="content" style={{width: "150px"}}></img>
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <br />
                    </div>
                    <div className="row">
                        <div className="ui container raised segment" style={{width: "700px"}}>
                            <img className="ui huge image" src={require("./assets/royalRoadReviews.png")} alt="reviews" />
                            <a className="ui top right attached red label" target="_blank" rel="noopener noreferrer" href="https://www.royalroad.com/fiction/18650/world-breaker">
                            Royal Road Reviews
                        </a>
                        </div>
                    </div>
                    <div className="row">
                        <br />
                    </div>
                </div>
                <Footer />
            </div>
        );
    };
}

export default App;