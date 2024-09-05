// mui
import Box from '@mui/material/Box'

const SectionWrapper = ({ children, bgcolor }) => {
    return (
        <Box
            component='section' 
            sx={{ 
                bgcolor: bgcolor == 'light' 
                    ? '#4f4f4f' 
                    : '#353434', 
                py: 6, 
                px: 10 
            }}
        >
            { children }
        </Box>
    )
}

export default SectionWrapper