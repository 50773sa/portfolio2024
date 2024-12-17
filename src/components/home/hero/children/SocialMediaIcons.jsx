// mui
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const SocialMediaIcons = ({ theme }) => {

    const StyledDivider = (
        <Divider 
            orientation='horizontal'
            aria-hidden="true" 
            sx={{ 
                bgcolor: theme.palette.color.orange.light,
                height: {xs: '0.2rem', sm: '4rem'},
                width: {xs: '4rem', sm: '0.2rem'},
            }}
        />
    )

    return (
        <Box 
            sx={{ 
                display: 'flex', 
                justifyContent: 'right',
                alignItems: 'end',
                flexDirection: 'column',
                width: {xs: '100%', sm: '50%'},
                pr: {xs: 4, md: 10}, 
                zIndex: 20,
                mb: 5,
            }}
        >
            <Box 
                sx={{ 
                    display: 'flex', 
                    flexDirection: {xs: 'row', sm: 'column'}, 
                    alignItems: 'center', 
                    justifyContent: 'flex-end',
                    height: '100%',
                }}
            >
                { StyledDivider }

                <a 
                    aria-label="Visit Sara Almqvist's LinkedIn profile, opens in a new tab"
                    href='https://www.linkedin.com/in/sara-almqvist-93862774/' 
                    target='_blank' 
                    rel='noopener noreferrer'
                >
                    <LinkedInIcon sx={{ m: 1, fontSize: '30px' }} />
                </a>
                <a 
                    href='https://github.com/07734sa'
                    aria-label="Visit Sara Almqvist's GitHub profile, opens in a new tab"
                    target='_blank' 
                    rel='noopener noreferrer'
                >
                    <GitHubIcon sx={{ fontSize: '27px' }} />   
                </a>
            </Box>
        </Box>
    )
}

export default SocialMediaIcons