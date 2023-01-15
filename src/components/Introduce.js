import {SectionsContainer, Section} from 'react-fullpage';
import { Fade } from "react-awesome-reveal";
import '../styled/Introduce_style.css'; 

export default function Introduce(){
    // react-fullpage options
    let options = {
      anchors: ['sectionOne','sectionTwo','sectionThree'],
      delay: 500,
    };
    
    return(
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
    );
}

/*
  react-fullpage options 기본값
  activeClass:          'active', // the class that is appended to the sections links
  anchors:              [], // the anchors for each sections
  arrowNavigation:      true, // use arrow keys
  className:            'SectionContainer', // the class name for the section container
  delay:                1000, // the scroll animation speed
  navigation:           true, // use dots navigatio
  scrollBar:            false, // use the browser default scrollbar
  sectionClassName:     'Section', // the section class name
  sectionPaddingTop:    '0', // the section top padding
  sectionPaddingBottom: '0', // the section bottom padding
  verticalAlign:        false // align the content of each section vertical
*/
