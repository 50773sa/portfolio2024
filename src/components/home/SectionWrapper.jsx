// mui
import Box from '@mui/material/Box'

const SectionWrapper = ({ children, bgcolor }) => {
    return (
        <Box
            component='section' 
            sx={{ 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: bgcolor == 'light' 
                    ? '#4f4f4f' 
                    : '#353434', 
                py: 6, 
                px: { xs: 3, sm: 10 } 
            }}
        >
            { children }
        </Box>
    )
}

export default SectionWrapper