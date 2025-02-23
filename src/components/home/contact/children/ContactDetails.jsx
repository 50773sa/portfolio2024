// mui
import { useTheme } from "@mui/material"
import styled  from '@mui/material/styles/styled'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import EmailIcon from '@mui/icons-material/Email'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import Link from '@mui/material/Link'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded'
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded'
import Typography from "@mui/material/Typography"


const ContactDetails = ({ contact }) => {
    const theme = useTheme()

    const StyledGrid = styled(Grid)(() => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.palette.bgColor.dark, 
        borderRadius: '3px',
        padding: '10px 0',
    }))

    const StyledLink = styled(Link)(() => ({
        cursor: 'pointer',
        underline: 'none',
        color: theme.palette.color.white,
        overflow: 'scroll',
        '&:hover .hoverLink': { visibility: 'visible' },
    }))

    const StyledDivider = styled(Divider)(() => ({
        width: '4rem',
        height: '0.2rem',
    }))

    return (
        <>
            {/**
                Mail
             */}

            <StyledGrid xs={12} sm={8} md={5}>
                <StyledLink 
                    component='a'
                    target="_blank"
                    rel="noopener noreferrer"
                    underline='none'
                    href={`mailto: ${contact.emal}`}
                >
                    <EmailIcon sx={{ mr: 1, fontSize: '30px' }} />

                    {contact.email}

                    <KeyboardArrowRightIcon className="hoverLink" sx={{ visibility: { sm: 'hidden' } }}/>
                </StyledLink>
            </StyledGrid>

            {/**
                Phone
            */}

            <StyledGrid xs={12} sm={8} md={5}>
                <LocalPhoneRoundedIcon sx={{ mr: 1, fontSize: '30px' }} />
                <Typography component='p' sx={{ cursor: 'default' }}>
                    +46{contact.phoneNumber}
                </Typography>
            </StyledGrid>

            {/**
                Location
             */}

            <StyledGrid xs={12} sm={8} md={5}>
                <LocationOnRoundedIcon sx={{ mr: 1, fontSize: '30px' }} />
                <Typography component='p' sx={{ cursor: 'default' }}>
                    Skåne, Sweden
                </Typography>
            </StyledGrid>

            {/**
                LinkedIn
             */}

            <Grid xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <StyledDivider />
                    <StyledLink 
                        component='a'
                        target="_blank"
                        rel="noopener noreferrer"
                        underline='none'
                        aria-label="Visit Sara Almqvist's LinkedIn profile, opens in a new tab"
                        href={contact.linkedIn}
                    >
                        <LinkedInIcon sx={{ fontSize: '30px', mx: 1 }} />
                    </StyledLink>
                <StyledDivider />

            </Grid>
        </>
    )
}

export default ContactDetails