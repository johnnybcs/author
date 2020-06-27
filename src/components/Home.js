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
    componentDidMount() {
        window.$(".moveArea").mousemove(function(event) {
            var eye = window.$(".eye");
            var x = (eye.offset().left) + (eye.width() / 2);
            var y = (eye.offset().top) + (eye.height() / 2);
            var rad = Math.atan2(event.pageX - x, event.pageY - y);
            var rot = (rad * (180 / Math.PI) * -1) + 180;
            eye.css({
            '-webkit-transform': 'rotate(' + rot + 'deg)',
            '-moz-transform': 'rotate(' + rot + 'deg)',
            '-ms-transform': 'rotate(' + rot + 'deg)',
            'transform': 'rotate(' + rot + 'deg)'
            });
        });
    }

    onClickCar = () => {
        window.$('#car').transition('shake').transition('fly left', '2000ms').transition('fly right', '2000ms');
    }

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
                        <br />
                    </div>
                    <div className="row">
                        <section className="moveArea">
                            <div className='containerOwl'>
                                <img unselectable="on" className="unselectable" src={require("./assets/owl.png")} style={{zIndex: "-5", width: "200px", position: "absolute", left: "50%", marginTop: "-195px", marginLeft: "-100px"}} alt="owl" />
                                <div className='eye' style={{position: "absolute", left: "50%", marginTop: "-133px", marginLeft: "20px"}}></div>
                                <div className='eye' style={{position: "absolute", left: "50%", marginTop: "-133px", marginLeft: "-50px"}}></div>
                            </div>
                        </section>
                    </div>
                    <div className="row">
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
                        <br />
                        <br />
                    </div>
                    <div className="row">
                        <br />
                        <div className="ui container raised segment" id="namesOfFruitsAndVegetables" style={{width: "700px"}}>
                            <a className="ui blue ribbon large label" target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/dp/B07GDCXYZ6">Names of Fruits and Vegetables</a>
                            <ImageGallery items={images2}  showFullscreenButton={false} showThumbnails={false} showPlayButton={false}/>
                        </div>
                    </div>
                    <div className="row">
                        <br />
                        <br />
                        <br />
                    </div>
                    <div className="row">
                        <br />
                        <div className="ui container raised segment" id="myFirstBookOfThingsThatMove" style={{width: "700px"}}>
                            <a className="ui purple ribbon large label" target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/dp/B07G721HP3">My First Book of Things that Move</a>
                            <img className="ui fluid image" src={require("./assets/thingsThatMoveCover.jpg")} alt="cover" />
                        </div>
                    </div>
                    <div className="centered container row">
                        <div className="ui tiny images">
                        <div className="ui purple large pointing below label">Available from these sellers</div><br/><br />

                            <a href="https://www.amazon.com/dp/B07G721HP3" target="_blank" rel="noopener noreferrer">
                                <img src={require("./assets/logos/amazon.png")} alt="content" style={{marginLeft: "40px", marginRight: "30px"}}/>
                            </a>
                            <a href="https://www.apple.com/ca/apple-books/" target="_blank" rel="noopener noreferrer">
                                <img src={require("./assets/logos/apple.png")} alt="content"  style={{marginLeft: "40px", marginRight: "30px"}}/>
                            </a>
                            <a href="https://www.kobo.com/ca/en/ebook/my-first-book-of-things-that-move" target="_blank" rel="noopener noreferrer">
                                <img src={require("./assets/logos/kobo.png")} alt="content"  style={{marginLeft: "40px", marginRight: "30px"}}/>
                            </a>
                        </div>
                    </div>
                    <div className="row">
                        <br />
                        <br />
                        <br />
                    </div>
                    <div className="row">
                        <div className="ui container raised segment" id="nature" style={{width: "700px"}}>
                            <a className="ui teal ribbon large label" target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/dp/B07FT3MCTT">Beautiful Photographs of Nature</a>
                            <img className="ui fluid image" src={require("./assets/natureCover.jpg")} alt="cover" />
                        </div>
                    </div>
                    <div className="row">
                        <br />
                        <br />
                        <br />
                    </div>
                    <div className="row">
                        <div className="ui container raised segment" id="ape" style={{width: "700px"}}>
                            <a className="ui brown ribbon large label" target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/dp/B07TQ73JFY">Ape: A Visual Enyclopedia of Primates</a>
                            <ImageGallery items={images3}  showFullscreenButton={false} showThumbnails={false} showPlayButton={false}/>
                        </div>
                    </div>
                    <div className="row">
                        <br />
                        <br />
                        <br />
                    </div>
                    <div className="row">
                        <div className="ui container raised segment" id="vehicles" style={{width: "700px"}}>
                            <a className="ui black ribbon large label" target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/dp/B07FYCBVSC">My First Book of Vehicles</a>
                            <img className="ui fluid image" src={require("./assets/vehiclesCover.jpg")} alt="cover" />
                        </div>
                    </div>
                    <div className="row">
                        <br />
                        <br />
                        <br />
                    </div>
                    <div className="centered row">
                    <button onClick={this.onClickCar} style={{border: "none", outline: "none", background: "none", cursor: "pointer"}}>
                        <img id="car" className="ui rounded image" src={require("./assets/porsche.png")} alt='content'  style={{height: "130px"}}/>
                    </button>
                </div>
                <div className="row">
                    <br />
                    <br />
                    <br />
                </div>
                </div>
                <Footer />
            </div>
        );
    };
}

export default App;