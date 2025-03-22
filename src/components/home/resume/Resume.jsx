// components
import BackgroundImage from "./children/BackgroundImage"
import Experiences from "./children/Experiences"
import SectionWrapper from "../SectionWrapper"
import TitleWithDescription from "../TitleWithDescription"
// mui
import Grid from "@mui/material/Unstable_Grid2/Grid2"

const Resume = ({ theme, resume, isLoading }) => {
    return (
        <SectionWrapper bgcolor='dark' sectionId='experience'>
          
            <BackgroundImage />
            
            <TitleWithDescription h3='Experience' paragraph='' />

            {!isLoading && resume && (
                <Grid container sx={{ justifyContent: 'center', zIndex: 10 }}>
                    <Grid xs={12}>
                        <Experiences resume={resume} theme={theme} />
                    </Grid>
                </Grid>
            )}
        </SectionWrapper>
    )
}

export default Resume