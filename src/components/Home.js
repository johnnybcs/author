import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
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
                <p />
                <div className="row" style={{height: "65px"}}>
                    <div className="ui grid">
                        <div className="four wide column" />
                        <div className="eight wide column centralize">
                            <Logo />
                        </div>
                        <div className="two wide column" />
                        <div className="two wide column" >
                            <Navigation />
                        </div>
                    </div>
                </div>
                <div className="background">
                    <ImageGallery items={images} />
                </div>
            </div>
        );
    };
}

export default App;