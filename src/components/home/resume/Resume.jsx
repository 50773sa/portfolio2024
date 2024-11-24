// components
import Experiences from "./children/Experiences"
import SectionWrapper from "../SectionWrapper"
import TitleWithDescription from "../TitleWithDescription"
// mui
import Grid from "@mui/material/Unstable_Grid2/Grid2"


const Resume = ({ theme, resume, isLoading }) => {
    return (

        <SectionWrapper bgcolor='dark' sectionId='Resume'>
            
            <TitleWithDescription
                h2='Resume'
                paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae '
            />

            <Grid container spacing={10}>
                {!isLoading && resume && (
                    <>
                        <Grid xs={12} md={6}>
                            <Experiences theme={theme} resume={resume} />
                        </Grid>
                    </>
                )}
            </Grid>
        </SectionWrapper>
        
    )
}

export default Resume