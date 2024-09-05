// components
import SectionWrapper from '../SectionWrapper'
import TitleWithDescription from '../TitleWithDescription'
import StyledDots from './StyledDots'

const AboutSection = () => {
    return (
        <SectionWrapper bgcolor='light'>
            <TitleWithDescription
                 h2='About' 
                 paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,'
            />

            <StyledDots />
               
        </SectionWrapper>
    )
}

export default AboutSection