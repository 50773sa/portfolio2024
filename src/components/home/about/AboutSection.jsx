// components
import Interests from '../resume/children/Interests'
import Languages from '../resume/children/Languages'
import SectionWrapper from '../SectionWrapper'
import SoftSkills from '../resume/children/SoftSkills'
import TechStack from '../techStack/TechStack'
import TitleWithDescription from '../TitleWithDescription'
// mui
import Grid from "@mui/material/Unstable_Grid2/Grid2"

const AboutSection = ({ about, resume, isLoadingAbout, isLoadingResume, theme, techStack, isLoadingTechnologies }) => {
    return (
        <SectionWrapper bgcolor='extraDark' sectionId='about'>
            <TitleWithDescription
                h2='About'  
                paragraph={!isLoadingAbout && about[0].text.en}
            />
            {!isLoadingResume && (
                <Grid 
                    container 
                    xs={12} 
                    sx={{ 
                        justifyContent: 'space-between',
                        borderRadius: '10px',
                        pt: 5,
                        px: 10,
                        mb: 7,
                        bgcolor: theme.palette.bgColor.dark,
                    }} 
                >   
                    <Grid xs={12} md={7}>
                        <Languages resume={resume} theme={theme} />
                        <SoftSkills resume={resume} theme={theme} />
                    </Grid>
                    <Grid xs={12} md={3}>
                        <Interests resume={resume} theme={theme} />
                    </Grid>
                </Grid>
            )}

            <TechStack theme={theme} techStack={techStack} isLoading={isLoadingTechnologies} />

        </SectionWrapper>
    )
}

export default AboutSection