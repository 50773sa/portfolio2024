// components
import AllProjectsButton from "./AllProjectsButton"
import PlaceholderCard from "./PlaceholderCard"
import SectionWrapper from "../SectionWrapper"
import TitleWithDescription from "../TitleWithDescription"
// mui
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import LoadingImgSkeletons from "./children/LoadingImgSkeletons"

const Projects = ({ projects, isLoading }) => {
    return (
        <SectionWrapper bgcolor='light'>
            <TitleWithDescription 
                h2='Projects'
                paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae '
            />
            <Grid container spacing={4} justifyContent='center' mb={4}>

                {isLoading && (
                    <LoadingImgSkeletons />
                )}

                {projects.length !== 0 && projects.map((project) => {
                    project.images.sort((a, b) => a.order - b.order)

                    return (
                        <PlaceholderCard 
                            key={project.images[0].url} 
                            image={project.images[0].url} 
                            name={project.name}
                        />

                    )
                })}
            </Grid>
                <AllProjectsButton path='/projects' buttonText='View All Projects' />
        </SectionWrapper>
    )
}

export default Projects