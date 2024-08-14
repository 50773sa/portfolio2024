// mui
import Box from '@mui/material/Box'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const TopBar = ({ theme }) => {

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: theme.palette.color.orange.dark, px: 1, py: 0.5 }} >
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%', maxWidth: 1500 }}>
                <a 
                    aria-label='go to my linkedIn page' 
                    href='https://www.linkedin.com/in/sara-almqvist-93862774/' 
                    target='_blank' 
                    rel='noopener noreferrer'
                >
                    <LinkedInIcon sx={{ ml: 1 }} />
                </a>
                <a 
                    href='https://github.com/50773sa'
                    aria-label='go to my github page'
                    target='_blank' 
                    rel='noopener noreferrer'
                >
                    <GitHubIcon sx={{ ml: 1 }} />  
                </a>
            </Box>
        </Box>
    )
}

export default TopBar