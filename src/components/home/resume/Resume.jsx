// components
import BackgroundImage from "./children/BackgroundImage"
import Education from "./children/Education"
import Experiences from "./children/Experiences"
import SectionWrapper from "../SectionWrapper"
import TitleWithDescription from "../TitleWithDescription"
// mui
import Grid from "@mui/material/Unstable_Grid2/Grid2"

const Resume = ({ theme, resume, isLoading }) => {
    return (
        <SectionWrapper bgcolor='dark' sectionId='resume'>
          
            <BackgroundImage />
            
            <TitleWithDescription h3='Resume' description='' />

            {!isLoading && resume && (
                <Grid container justifyContent='center' spacing={10} sx={{ zIndex: 10 }}>
                    <Grid xs={12} md={6}>
                        <Education resume={resume} theme={theme} />
                        <Experiences resume={resume} theme={theme} />
                    </Grid>
                </Grid>
            )}
        </SectionWrapper>
    )
}

export default Resume