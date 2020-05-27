import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import ImageGallery from 'react-image-gallery';
import './style.css';

var images = [];
for (var i = 0; i < 20; i++) {
    var pagePath = './pages/p' + i.toString() + '.jpg';
    var thumbnailPath = './thumbnails/p' + i.toString() + '.jpg';
    images.push({ original: pagePath, thumbnail: thumbnailPath });
}

var images2 = [];
for (var j = 0; j < 7; j++) {
    var pagePath2 = './pages2/p' + j.toString() + '.jpg';
    images2.push({ original: pagePath2, thumbnail: pagePath2 });
}

var images3 = [];
for (var k = 0; k < 11; k++) {
    var pagePath3 = './pages3/p' + k.toString() + '.jpg';
    images3.push({ original: pagePath3, thumbnail: pagePath3 });
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Navigation />
                <div className="ui grid">
                    <div className="row">
                        <div className="ui container raised segment" id="101Animals">
                            <a className="ui orange ribbon huge label" target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/dp/B07D4LX1LY">101 Animals</a>
                            <ImageGallery items={images} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="ui container raised segment" id="worldBreaker">
                            <a className="ui red ribbon huge label" target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/dp/B07CJ29VPJ">World Breaker</a>
                            <div className="ui two column stackable center aligned grid">
                                <div className="ui vertical divider">
                                </div>
                                <div className="middle aligned row">
                                    <div className="column">
                                        <img className="ui huge image" src="worldBreakerCover.jpg" alt="cover" />
                                    </div>
                                    <div className="column">
                                        <img className="ui huge image" src="worldBreakerBack.jpg" alt="back" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <br />
                        <div className="ui container raised segment" id="vehicles">
                            <a className="ui black ribbon huge label" target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/dp/B07FYCBVSC">My First Book of Vehicles</a>
                            <img className="ui fluid image" src="vehiclesCover.jpg" alt="cover" />
                        </div>
                    </div>
                    <div className="row">
                        <br />
                        <div className="ui container raised segment" id="namesOfFruitsAndVegetables">
                            <a className="ui blue ribbon huge label" target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/dp/B07GDCXYZ6">Names of Fruits and Vegetables</a>
                            <ImageGallery items={images2} />
                        </div>
                    </div>
                    <div className="row">
                        <br />
                        <div className="ui container raised segment" id="myFirstBookOfThingsThatMove">
                            <a className="ui purple ribbon huge label" target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/dp/B07G721HP3">My First Book of Things that Move</a>
                            <img className="ui fluid image" src="thingsThatMoveCover.jpg" alt="cover" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="ui container raised segment" id="ape">
                            <a className="ui brown ribbon huge label" target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/dp/B07TQ73JFY">Ape: A Visual Enyclopedia of Primates</a>
                            <ImageGallery items={images3} />
                        </div>
                    </div>
                    <div className="row">
                        <br />
                        <div className="ui container raised segment" id="nature">
                            <a className="ui teal ribbon huge label" target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/dp/B07FT3MCTT">Beautiful Photographs of Nature</a>
                            <img className="ui fluid image" src="natureCover.jpg" alt="cover" />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    };
}

export default App;