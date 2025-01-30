// components
import SectionWrapper from '../SectionWrapper'
import TitleWithDescription from '../TitleWithDescription'
import StyledDots from './StyledDots'

const AboutSection = ({ about, isLoading }) => {
    return (
        <SectionWrapper bgcolor='light' sectionId='about'>
            <TitleWithDescription
                 h2='About'  
                 paragraph={!isLoading && about[0].text.en}
            />

            <StyledDots />
               
        </SectionWrapper>
    )
}

export default AboutSection