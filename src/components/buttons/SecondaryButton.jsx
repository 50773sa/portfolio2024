import { Link } from 'react-router-dom'
// mui
import { useTheme } from "@mui/material"
import Button from '@mui/material/Button'

const SecondaryButton = ({ path, buttonText, paddingRight }) => {
    const theme = useTheme()
    const buttonColorLight = theme.palette.color.orange.light

    return (
        <Button 
            component={Link}
            to={path}
            variant='outlined' 
            sx={{ 
                width: '8.5rem',
                color: buttonColorLight, 
                bgcolor: 'transparent',
                border: `1px solid ${buttonColorLight}`,
                mr: paddingRight ? 2 : 0,
                '&:hover': { 
                    padding: 0.5,// prevent 'jumping'
                    border: `2px solid ${buttonColorLight}`,
                }
            }}  
        >
            { buttonText }
        </Button>
    )
}

export default SecondaryButton