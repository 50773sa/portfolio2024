// mui
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'

const SectionWrapper = ({ sectionId, children, bgcolor, borderY }) => {
    const theme = useTheme()
    
    return (
        <Box
            datasectionid={sectionId}
            id={sectionId}
            component='section' 
            sx={{ 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 
                    bgcolor == 'light' && theme.palette.bgColor.light ||
                    bgcolor == 'dark' &&  theme.palette.bgColor.dark ||
                    bgcolor == 'orange' &&  theme.palette.bgColor.orange,
                py: 6, 
                px: { xs: 3, sm: 10 },
                borderTop: borderY && '3px solid' + `${theme.palette.color.orange.dark}`,
                borderBottom: borderY && '3px solid' + `${theme.palette.color.orange.dark}`,
                scrollMarginTop: 90,
            }}
        >
            { children }
        </Box>
    )
}

export default SectionWrapper