import { Link } from 'react-router-dom'
// mui
import { useTheme } from "@mui/material"
import Button from '@mui/material/Button'

const SecondaryButton = ({ path, onClick, buttonText, marginRight }) => {
    const theme = useTheme()
    const buttonColor = theme.palette.color.orange.light
    const buttonColorHover = theme.palette.color.orange.extraLight

    return (
        <Button 
            component={Link}
            to={path}
            onClick={onClick}
            variant='outlined' 
            sx={{ 
                width: {xs: '100%', sm: '9.5rem'},
                color: buttonColor, 
                fontWeight: 'bold',
                bgcolor: 'transparent',
                border: `2px solid ${buttonColor}`,
                mr: {xs: 0, sm: marginRight ? 2 : 0},
                mb: {xs: 2, sm: 0},
                '&:hover': { 
                    padding: 0.5,// prevent 'jumping'
                    color: buttonColorHover,
                    border: `3px solid ${buttonColorHover}`,
                },
            }}  
        >
            { buttonText }
        </Button>
    )
}

export default SecondaryButton