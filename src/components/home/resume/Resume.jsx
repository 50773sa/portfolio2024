// components
import BackgroundImage from "./children/BackgroundImage"
import Education from "./children/Education"
import Experiences from "./children/Experiences"
import Interests from "./children/Interests"
import Languages from "./children/Languages"
import SectionWrapper from "../SectionWrapper"
import SoftSkills from "./children/SoftSkills"
import SoftwareSkills from "./children/SoftwareSkills"
import TitleWithDescription from "../TitleWithDescription"
// mui
import Grid from "@mui/material/Unstable_Grid2/Grid2"


const Resume = ({ theme, resume, isLoading }) => {
    return (
        <SectionWrapper bgcolor='dark' sectionId='resume'>
          
            <BackgroundImage />
            
            <TitleWithDescription h2='Resume' description= '' />

            <Grid container justifyContent='center' spacing={10} sx={{ zIndex: 10 }}>
                {!isLoading && resume && (
                    <>
                        <Grid xs={12} md={5}>
                            <SoftwareSkills resume={resume} />
                            <Languages resume={resume} theme={theme} />
                            <SoftSkills resume={resume} theme={theme} />
                            <Interests resume={resume} theme={theme} />
                        </Grid>
                        <Grid xs={12} md={6}>
                            <Education resume={resume} theme={theme} />
                            <Experiences resume={resume} theme={theme} />
                        </Grid>
                    </>
                )}
            </Grid>
        </SectionWrapper>
    )
}

export default Resume