// components
import ContactDetails from "./children/ContactDetails"
import SectionWrapper from "../SectionWrapper"
import TitleWithDescription from "../TitleWithDescription"
// mui
import Grid from '@mui/material/Grid'

const Contact = ({ about, isLoading }) => {
    const styledGridContainer = { 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        width: '100%',
    }

    return (
        <SectionWrapper bgcolor='medium' borderY={true} sectionId='contact'>
            {!isLoading && (
                <>
                    <TitleWithDescription 
                        h3='Contact'
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