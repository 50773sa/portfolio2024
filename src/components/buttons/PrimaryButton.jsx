import { Link } from 'react-router-dom'
// mui
import { useTheme } from "@mui/material"
import Button from '@mui/material/Button'

const PrimaryButton = ({ path, buttonText }) => {
    const theme = useTheme()
    const buttonBgColor = theme.palette.color.orange.light
    const buttonTextColor = theme.palette.bgColor.dark

    return (
        <Button 
            component={Link}
            to={path}
            variant='contained' 
            sx={{ 
                width: {xs: '100%', sm: '9.5rem'},
                color: buttonTextColor, 
                fontWeight: 'bold',
                bgcolor: buttonBgColor,
                '&:hover': { 
                    bgcolor: theme.palette.color.orange.extraLight,
                }
            }}  
        >
            { buttonText }
        </Button>
    )
}

export default PrimaryButton