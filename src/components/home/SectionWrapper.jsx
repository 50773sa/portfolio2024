// mui
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'

const SectionWrapper = ({ sectionId, children, bgcolor, borderY, isStylingRelative }) => {
    const theme = useTheme()
    
    return (
        <Box
            datasectionid={sectionId}
            id={sectionId}
            component='section' 
            tabIndex={-1}
            sx={{ 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 
                    bgcolor == 'light' && theme.palette.bgColor.light ||
                    bgcolor == 'medium' && theme.palette.bgColor.medium ||
                    bgcolor == 'dark' &&  theme.palette.bgColor.dark ||
                    bgcolor == 'extraDark' &&  theme.palette.bgColor.extraDark ||
                    bgcolor == 'orange' &&  theme.palette.bgColor.orange,
                py: 6, 
                px: { xs: 3, sm: 10 },
                borderTop: borderY && '3px solid' + `${theme.palette.color.orange.dark}`,
                borderBottom: borderY && '3px solid' + `${theme.palette.color.orange.dark}`,
                scrollMarginTop: 90,
                position: isStylingRelative !== undefined ? 'initial' : 'relative',
            }}
        >
            { children }
        </Box>
    )
}

export default SectionWrapper