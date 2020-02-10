import React from 'react';
import Header from './Header';
import ImageGallery from 'react-image-gallery';

import './style.css';

const images = [
    {
        original: 'favicon.ico',
        thumbnail: 'favicon.ico'
      },
      {
        original: 'favicon.ico',
        thumbnail: 'favicon.ico'
      },
      {
        original: 'favicon.ico',
        thumbnail: 'favicon.ico'
      }
]

class App extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <div className="background">
                    <ImageGallery items={images} />
                </div>
            </div>
        );
    };
}

export default App;