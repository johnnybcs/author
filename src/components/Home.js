import React from 'react';
import Navigation from './Navigation';
import ImageGallery from 'react-image-gallery';

import './style.css';

const images = [
    {
        original: 'headShot.jpg',
        thumbnail: 'headShot.jpg'
      },
      {
        original: 'brick.jpg',
        thumbnail: 'brick.jpg'
      },
      {
        original: 'twitter-logo.png',
        thumbnail: 'twitter-logo.png'
      }
]

class App extends React.Component {

    render() {
        return (
            <div>
                <Navigation />
                <div className="background-home">
                    <ImageGallery items={images} />
                </div>
            </div>
        );
    };
}

export default App;