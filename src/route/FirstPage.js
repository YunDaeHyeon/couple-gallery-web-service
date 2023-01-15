

import {SectionsContainer, Section} from 'react-fullpage';
import { Fade } from "react-awesome-reveal";

import '../styled/FirstPage_style.css';

export default function FirstPage(){
    // react-fullpage options
    let options = {
        anchors: ['sectionOne','sectionTwo','sectionThree'],
        sectionPaddingTop: 50,
        delay: 500,
    };

    return(
        <div>
        <header className='header'>
            <div className="header-container">
                <h1><a href="#!">Co</a></h1>
                <ul className="header-leftbar">
                    <li><a href="#!">Home</a></li>
                    <li><a href="#!">Hot</a></li>
                    <li><a href="#!">Gallery</a></li>
                </ul>
                <ul className="header-rightbar">
                    <li><a href="#!">Login</a></li>
                    <li><a href="#!">Search</a></li>
                    <li><a href="#!">Setting</a></li>
                </ul>
            </div>
        </header>
        <SectionsContainer {...options}>
            <Section>
                <div className='introduce-image1'>
                    <Fade>
                        <h1 className='introduce-text'>테스트 1</h1>
                    </Fade>
                </div>
            </Section>
            <Section>
                <div className='introduce-image2'>
                    <Fade>
                        <h1 className='introduce-text'>테스트 2</h1>
                    </Fade>
                </div>
            </Section>
            <Section>
                <div className='introduce-image3'>
                    <Fade>
                        <h1 className='introduce-text'>테스트 3</h1>
                    </Fade>
                </div>
            </Section>
        </SectionsContainer>
        </div>
    );
}