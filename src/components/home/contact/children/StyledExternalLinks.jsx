// mui
import { useTheme } from "@mui/material"
import styled  from '@mui/material/styles/styled'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import EmailIcon from '@mui/icons-material/Email'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import Link from '@mui/material/Link'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const StyledExternalLinks = () => {
    const theme = useTheme()

    const styledGrid = {
        display: 'flex',
        justifyContent: 'center',
        bgcolor: theme.palette.bgColor.light, 
        borderRadius: '3px',
    }

    const StyledLink = styled(Link)(() => ({
        cursor: 'pointer',
        underline: 'none',
        color: theme.palette.color.white,
        '&:hover .hoverLink': { visibility: 'visible' },
    }))

    return (
        <>
            <Grid xs={12} sm={6} sx={styledGrid}>
                <StyledLink 
                    component='a'
                    target="_blank"
                    rel="noopener noreferrer"
                    underline='none'
                    aria-label="Visit Sara Almqvist's LinkedIn profile, opens in a new tab"
                    href='https://www.linkedin.com/in/sara-almqvist-93862774/'
                >
                    <LinkedInIcon sx={{ mr: 1, fontSize: '30px' }} />

                    LinkedIn
                
                    <KeyboardArrowRightIcon className="hoverLink" sx={{ visibility: 'hidden' }}/>
                </StyledLink>
            </Grid>

            <Grid xs={12} sm={6} sx={styledGrid}>
                <StyledLink 
                    component='a'
                    target="_blank"
                    rel="noopener noreferrer"
                    underline='none'
                    href='mailto: sara.lm.almqvist@gmail.com'
                >
                    <EmailIcon sx={{ mr: 1, fontSize: '33px' }} />

                    sara.lm.almqvist@gmail.com

                    <KeyboardArrowRightIcon className="hoverLink" sx={{ visibility: 'hidden' }}/>
                </StyledLink>
            </Grid>
        </>
    )
}

export default StyledExternalLinks