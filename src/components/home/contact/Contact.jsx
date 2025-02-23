// components
import ContactDetails from "./children/ContactDetails"
import SectionWrapper from "../SectionWrapper"
import TitleWithDescription from "../TitleWithDescription"
// mui
import Grid from '@mui/material/Unstable_Grid2/Grid2'

const Contact = ({ about, isLoading }) => {
    const styledGridContainer = { 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        width: '100%',
    }

    return (
        <SectionWrapper bgcolor='extraDark' borderY={true} sectionId='contact'>
            {!isLoading && (
                <>
                    <TitleWithDescription 
                        h2='Contact'
                        paragraph={about[0].contact.text}
                    />
                    <Grid container sx={styledGridContainer} gap={4}>
                        <ContactDetails contact={about[0].contact} />
                    </Grid>
                </>
            )}
        </SectionWrapper>
    )   
}

export default Contact