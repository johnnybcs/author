import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import ImageGallery from 'react-image-gallery';
import './style.css';

var images = [];
for (var i = 0; i < 4; i++) {
    var pagePath = require('./assets/pages4/p' + i.toString() + '.jpg');
    images.push({ original: pagePath, thumbnail: pagePath });
}

var images2 = [];
for (var j = 0; j < 10; j++) {
    var pagePath2 = require('./assets/pages8/p' + j.toString() + '.png');
    images2.push({ original: pagePath2, thumbnail: pagePath2 });
}

class Projects extends React.Component {
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

    render() {
        return (
            <div>
                <Navigation />
                <br />
                <div className="app">
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="row">
                        <section className="moveArea">
                            <div className='containerOwl'>
                                <img unselectable="on" className="unselectable" src={require("./assets/owl.png")} style={{position: "absolute", zIndex: "-5", width: "150px", left: "50%", marginTop: "-120px", marginLeft: "-70px"}} alt="owl" />
                                <div className='eye' style={{left: "50%", marginTop: "-75px", marginLeft: "-34px"}}></div>
                                <div className='eye' style={{left: "50%", marginTop: "-75px", marginLeft: "20px"}}></div>
                            </div>
                        </section>
                    </div>                    
                    <div className="ui container raised segments" style={{width: "1000px"}}>
                        <div className="ui segment">
                            <a href="https://prescriptiontranslator.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                <img className="ui fluid image" src={require("./assets/prescriptionTranslator.png")} alt="screenshot" />
                            </a>
                            <div className="ui red tag bottom right attached large label">Implemented with HTML, CSS, Bootstrap, JavaScript, PHP, and MySQL</div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="ui container raised segments" style={{width: "1000px"}}>
                    <div className="ui segment">
                        <div className="ui container raised segment" id="ridehail">
                            <ImageGallery items={images2} showFullscreenButton={false} showThumbnails={false} showPlayButton={false} />
                        </div>
                        <a href="https://ridehail.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <div className="ui violet tag bottom right attached large label">Implemented with HTML, CSS, Bootstrap, JavaScript, PHP, and MySQL</div>
                        </a>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                    <div className="ui container raised segments" style={{width: "1000px"}}>
                        <div className="ui segment">
                            <a href="https://github.com/johnnybcs/MedicalDiagnosisSystem" target="_blank" rel="noopener noreferrer">
                                <div className="ui two column stackable center aligned grid">
                                    <div className="ui vertical divider">
                                    </div>
                                    <div className="middle aligned row">
                                        <div className="column">
                                            <img className="ui huge image" src={require("./assets/medicalDiagnosisSystem1.png")} alt="screenshot" />
                                        </div>
                                        <div className="column">
                                            <img className="ui huge image" src={require("./assets/medicalDiagnosisSystem2.png")} alt="screenshot" />
                                        </div>
                                        <div className="ui blue tag bottom right attached large label">Implemented with Java and JavaFX</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div> 
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="ui container raised segments" style={{width: "1000px"}}>
                    <div className="ui segment">
                        <div className="ui container raised segment" id="101Animals">
                            <ImageGallery items={images} showFullscreenButton={false} showThumbnails={false} showPlayButton={false}/>
                        </div>
                        <a href="https://github.com/johnnybcs/WeightTracker" target="_blank" rel="noopener noreferrer">
                            <div className="ui violet tag bottom right attached large label">Implemented with Java and JavaFX</div>
                        </a>
                    </div>
                </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <Footer />
            </div>
        );
    }
}  

export default Projects;