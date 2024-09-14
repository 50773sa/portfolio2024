// components
import PlaceholderCard from "./PlaceholderCard"
import SectionWrapper from "../SectionWrapper"
import TitleWithDescription from "../TitleWithDescription"

const Projects = () => {
    return (
        <SectionWrapper bgcolor='light'>
            <TitleWithDescription 
                h2='Projects'
                paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae '
            />
            <PlaceholderCard />
        </SectionWrapper>
    )
}

export default Projects