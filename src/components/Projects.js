import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import ImageGallery from 'react-image-gallery';
import './style.css';

var images = [];
for (var i = 0; i < 4; i++) {
    var pagePath = './pages4/p' + i.toString() + '.jpg';
    images.push({ original: pagePath, thumbnail: pagePath });
}

var images2 = [];
for (var j = 0; j < 10; j++) {
    var pagePath2 = './pages8/p' + j.toString() + '.png';
    images2.push({ original: pagePath2, thumbnail: pagePath2 });
}

class Projects extends React.Component {
    render() {
        return (
            <div>
                <Navigation />
                <br />
                <div className="app">
                    <div className="ui container raised segments" style={{width: "1000px"}}>
                        <div className="ui segment">
                            <a href="https://prescriptiontranslator.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                <img className="ui fluid image" src="prescriptionTranslator.png" alt="screenshot" />
                            </a>
                            <div className="ui red tag bottom right attached large label">Implemented with HTML, CSS, Bootstrap, JavaScript, PHP, and MySQL</div>
                        </div>
                    </div>
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
                    <div className="ui container raised segments" style={{width: "1000px"}}>
                        <div className="ui segment">
                            <a href="https://github.com/johnnybcs/MedicalDiagnosisSystem" target="_blank" rel="noopener noreferrer">
                                <div className="ui two column stackable center aligned grid">
                                    <div className="ui vertical divider">
                                    </div>
                                    <div className="middle aligned row">
                                        <div className="column">
                                            <img className="ui huge image" src="medicalDiagnosisSystem1.png" alt="screenshot" />
                                        </div>
                                        <div className="column">
                                            <img className="ui huge image" src="medicalDiagnosisSystem2.png" alt="screenshot" />
                                        </div>
                                        <div className="ui blue tag bottom right attached large label">Implemented with Java and JavaFX</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div> 
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
                <Footer />
            </div>
        );
    }
}  

export default Projects;