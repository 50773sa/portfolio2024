// components
import SectionWrapper from '../SectionWrapper'
import TechStack from '../techStack/TechStack'
import TitleWithDescription from '../TitleWithDescription'

const AboutSection = ({ about, isLoadingAbout, theme, techStack, isLoadingTechnologies }) => {
    return (
        <SectionWrapper bgcolor='dark' sectionId='about'>
            <TitleWithDescription
                 h2='About'  
                 paragraph={!isLoadingAbout && about[0].text.en}
            />

            <TechStack theme={theme} techStack={techStack} isLoading={isLoadingTechnologies} />

        </SectionWrapper>
    )
}

export default AboutSection