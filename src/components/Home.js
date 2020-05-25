import React from 'react';
import Navigation from './Navigation';
import ImageGallery from 'react-image-gallery';

import './style.css';

var images = [];

for (var i = 0; i < 20; i++) {
    var pagePath = './pages/p' + i.toString() + '.jpg';
    var thumbnailPath = './thumbnails/p' + i.toString() + '.jpg';

    images.push({ original: pagePath, thumbnail: thumbnailPath });
}

class App extends React.Component {

    render() {
        return (
            <div>
                <Navigation />
                <div class="ui grid">
                    <div class="row">
                        <br />
                        <div class="ui container raised segment">
                            <a class="ui orange ribbon huge label" target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/dp/B07D4LX1LY">101 Animals</a>
                            <ImageGallery items={images} />
                        </div>
                    </div>
                    <div class="row">
                    </div>
                    <div class="row">
                        <div class="ui container raised segment">
                            <a class="ui red ribbon huge label" target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/dp/B07CJ29VPJ">World Breaker</a>
                            <div class="ui two column stackable center aligned grid">
                                <div class="ui vertical divider">
                                </div>
                                <div class="middle aligned row">
                                    <div class="column">
                                        <img class="ui huge image" src="WorldBreakerCover.png" alt="cover" />
                                    </div>
                                    <div class="column">
                                        <img class="ui huge image" src="WorldBreakerBack.png" alt="cover" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default App;