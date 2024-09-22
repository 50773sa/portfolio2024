// components
import SectionWrapper from "../SectionWrapper"
import TitleWithDescription from "../TitleWithDescription"
// mui
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import StyledExternalLinks from "./children/StyledExternalLinks"

const Contact = () => {
    const styledGridContainer = { 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        width: '100%',
    }

    return (
        <SectionWrapper bgcolor='dark' borderY={true}>
            <TitleWithDescription 
                h2='Contact'
                paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae '
            />
            <Grid container sx={styledGridContainer} gap={4}>
                {/* LinkedIn & Email */}
                <StyledExternalLinks />
            </Grid>
        </SectionWrapper>
    )   
}

export default Contact