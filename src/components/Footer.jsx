// mui
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from "@mui/material/Typography"

const Footer = () => {
    const theme = useTheme()

    return (
        <Box
            component='footer' 
            sx={{ 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: theme.palette.bgColor.extraDark,
                py: 6, 
                px: { xs: 3, sm: 10 },
            }}
        >   
            <Typography 
                component='p' 
                variant='h5' 
                sx={{ 
                    color: theme.palette.color.orange.light, 
                    fontStyle: 'italic',
                    textAlign: 'center',
                    cursor: 'default',
                }}
            >
                
                { `"Thanks For Scrolling!" `}
            </Typography>
        </Box>
    )
}

export default Footer