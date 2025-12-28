// components
import Education from '../resume/children/Education'
import Interests from '../resume/children/Interests'
import Languages from '../resume/children/Languages'
import SectionWrapper from '../SectionWrapper'
import SoftSkills from '../resume/children/SoftSkills'
import TechStack from '../techStack/TechStack'
import TitleWithDescription from '../TitleWithDescription'
// mui
import Grid from '@mui/material/Grid'

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
                    sx={{ 
                        justifyContent: 'space-between',
                        width: '100%',
                        borderRadius: '10px',
                        pt: 5,
                        px: {xs: '6%', sm: '8%',},
                        mb: 7,
                        bgcolor: theme.palette.bgColor.dark,
                    }}
                    size={12} 
                >   
                    <Grid
                        size={{
                            xs: 12,
                            md: 5
                        }}>
                        <Languages resume={resume} theme={theme} />
                        <SoftSkills resume={resume} theme={theme} />
                    </Grid>

                    <Grid
                        size={{
                            xs: 12,
                            md: 6,
                            lg: 5
                        }}>
                        <Education resume={resume} theme={theme} />
                        <Interests resume={resume} theme={theme} />
                    </Grid>
                </Grid>
            )}
            <TechStack theme={theme} techStack={techStack} isLoading={isLoadingTechnologies} />
        </SectionWrapper>
    );
}

export default AboutSection