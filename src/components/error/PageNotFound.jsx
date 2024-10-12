// components
import SecondaryButton from "../buttons/SecondaryButton"
import SectionWrapper from "../home/SectionWrapper"
// mui
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

const PageNotFound = ({ theme }) => {
    return (
        <SectionWrapper>
            <Typography   
                component='span'
                sx={{
                    fontSize: {xs: '10rem', sm: '20rem'},
                    fontWeight: 900,
                    textAlign: 'center',
                    color: theme.palette.bgColor.light,
                    position: 'fixed',
                    marginTop: {xs: '-50vh', sm: '-5vh'},
                }}
            >
                404
            </Typography>

            <Box 
                sx={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'absolute',
                    top: '40vh',
                    px: { xs: 3, sm: 10 },
                }}
            >
                <Typography 
                    component='h1' 
                    variant="h2"
                    sx={{
                        fontSize: {xs: '2.5rem', sm: '3.75rem'},
                        fontWeight: '700',
                        textAlign: 'center',
                    }}
                >
                    Page not found
                </Typography>

                <Typography 
                    component='p' 
                    variant="subtitle1"
                    textAlign='center'
                    marginBottom={8}
                >
                    The required page was not found.
                    <br />
                    The page may have been deleted or moved.
                </Typography>
                
                <SecondaryButton 
                    path={'/'}
                    buttonText='Back to Home'
                />
            </Box>
        </SectionWrapper>
    )
}

export default PageNotFound