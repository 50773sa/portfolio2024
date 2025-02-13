// components
import SectionWrapper from "../SectionWrapper"
import StyledEmptyCard from "./StyledEmptyCard"
import TechStackImgSkeleton from "./TechStackImgSkeleton"
import TitleWithDescription from "../TitleWithDescription"
// mui
import Grid from '@mui/material/Unstable_Grid2/Grid2'

const TechStack = ({ techStack, isLoading, theme }) => {
    return (
        <SectionWrapper bgcolor='dark'>
            <TitleWithDescription 
                h2='Current Tech Stack'
                paragraph='In my projects, I have used the following languages ​and technologies among others.'
            />
            <Grid container spacing={4} justifyContent='center'>

                {isLoading && <TechStackImgSkeleton />}

                {!isLoading && techStack.sort((a, b) => a.order - b.order).map((tech) => {
                    return (
                        <Grid xs={6} sm={4} md={3} key={tech.name}>    
                            <StyledEmptyCard 
                                image={tech.logoPath}
                                name={tech.name}
                                theme={theme}
                            />
                        </Grid>
                    )
                })}
            </Grid>
        </SectionWrapper>
    )
}

export default TechStack