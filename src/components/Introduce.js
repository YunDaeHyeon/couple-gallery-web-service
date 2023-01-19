import {SectionsContainer, Section} from 'react-fullpage';
import { Fade } from "react-awesome-reveal";
import '../styled/Introduce_style.css'; 

export default function Introduce(){
    // react-fullpage options
    let options = {
      anchors: ['sectionOne','sectionTwo','sectionThree'],
      delay: 1200,
    };
    
    return(
        <SectionsContainer {...options}>
            <Section>
                <div className='introduce-image1'>
                    <Fade cascade damping={0.1}>
                        <div className='introduce-text1'>
                            <p>소중한 사람과</p>
                            <p>함께한 추억들을</p>
                        </div>
                    </Fade>
                </div>
            </Section>
            <Section>
                <div className='introduce-image2'>
                    <Fade cascade damping={0.1}>
                        <div className='introduce-text2'>
                            <p>서로 기억하고</p>
                            <p>나누기 위해</p>
                        </div>
                    </Fade>
                </div>
            </Section>
            <Section>
                <div className='introduce-image3'>
                    <Fade cascade damping={0.1}>
                        <div className='introduce-text3'>
                            <p>제목 들어갈 자리</p>
                        </div>
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

  멘트
  page 1
    소중한 사람과
    함께한 추억들을
  page 2
    서로 기억하고
    나누기 위해
  page 3
    ** 사이트 제목 들어갈 자리 **
*/
