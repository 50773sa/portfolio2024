import { Link } from 'react-router-dom'
// mui
import { useTheme } from "@mui/material"
import Button from '@mui/material/Button'

const SecondaryButton = ({ path, buttonText, marginRight }) => {
    const theme = useTheme()
    const buttonColorLight = theme.palette.color.orange.light

    return (
        <Button 
            component={Link}
            to={path}
            variant='outlined' 
            sx={{ 
                width: {xs: '100%', sm: '8.5rem'},
                color: buttonColorLight, 
                bgcolor: 'transparent',
                border: `2px solid ${buttonColorLight}`,
                mr: {xs: 0, sm: marginRight ? 2 : 0},
                mb: {xs: 2, sm: 0},
                '&:hover': { 
                    padding: 0.5,// prevent 'jumping'
                    border: `3px solid ${buttonColorLight}`,
                }
            }}  
        >
            { buttonText }
        </Button>
    )
}

export default SecondaryButton