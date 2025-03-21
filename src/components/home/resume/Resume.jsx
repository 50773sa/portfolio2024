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
            
            {!isLoading && resume && (
                <Grid container spacing={5} sx={{ zIndex: 10 }}>

                    <Grid xs={12} md={8}>
                        <TitleWithDescription h3='Experience' paragraph='' />
                        <Experiences resume={resume} theme={theme} />
                    </Grid>
                    
                </Grid>
            )}
        </SectionWrapper>
    )
}

export default Resume