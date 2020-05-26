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

class App extends React.Component {

    render() {
        return (
            <div>
                <Navigation />
                <div class="ui grid">
                    <div class="row">
                        <div class="ui container raised segment" id="101Animals">
                            <a class="ui orange ribbon huge label" target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/dp/B07D4LX1LY">101 Animals</a>
                            <ImageGallery items={images} />
                        </div>
                    </div>
                    <div class="row">
                        <div class="ui container raised segment" id="worldBreaker">
                            <a class="ui red ribbon huge label" target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/dp/B07CJ29VPJ">World Breaker</a>
                            <div class="ui two column stackable center aligned grid">
                                <div class="ui vertical divider">
                                </div>
                                <div class="middle aligned row">
                                    <div class="column">
                                        <img class="ui huge image" src="worldBreakerCover.jpg" alt="cover" />
                                    </div>
                                    <div class="column">
                                        <img class="ui huge image" src="worldBreakerBack.jpg" alt="back" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <br />
                        <div class="ui container raised segment" id="namesOfFruitsAndVegetables">
                            <a class="ui blue ribbon huge label" target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/dp/B07GDCXYZ6">Names of Fruits and Vegetables</a>
                            <ImageGallery items={images2} />
                        </div>
                    </div>
                    <div class="row">
                        <br />
                        <div class="ui container raised segment" id="myFirstBookOfThingsThatMove">
                            <a class="ui purple ribbon huge label" target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/dp/B07G721HP3">My First Book of Things that Move</a>
                            <img class="ui fluid image" src="thingsThatMoveCover.jpg" alt="cover" />
                        </div>
                    </div>
                    <div class="centered row">
                    <div class="ui text menu">
                        <h3 class="item" style={{color:"black", fontWeight:"bold"}}>BOOKS</h3>
                        <a class="item" href="#101Animals">101 Animals</a>
                        <a class="item" href="#worldBreaker">World Breaker</a>
                        <a class="item" href="#namesOfFruitsAndVegetables">Names of Fruits and Vegetables</a>
                        <a class="item" href="#myFirstBookOfThingsThatMove">My First Book of Things that Move</a>
                    </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    };
}

export default App;