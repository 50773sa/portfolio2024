// components
import SectionWrapper from "../SectionWrapper"
import StyledEmptyCard from "./StyledEmptyCard"
import TitleWithDescription from "../TitleWithDescription"

const TechStack = () => {
    return (
        <SectionWrapper>
            <TitleWithDescription 
                h2='Current Tech Stack'
                paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae '
            />

            <StyledEmptyCard />
        </SectionWrapper>
    )
}

export default TechStack