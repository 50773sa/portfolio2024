import { Link } from 'react-router-dom'
// mui
import { useTheme } from "@mui/material"
import Button from '@mui/material/Button'

const PrimaryButton = ({ path, buttonText }) => {
    const theme = useTheme()
    const textColor = theme.palette.color.white
    const buttonColorLight = theme.palette.color.orange.light
    const buttonColorDark = theme.palette.color.orange.dark

    return (
        <Button 
            component={Link}
            to={path}
            variant='contained' 
            sx={{ 
                width: '8rem',
                color: textColor, 
                bgcolor: buttonColorLight,
                '&:hover': { 
                    bgcolor: buttonColorDark,
                    fontWeight: 'bold',
                }
            }}  
        >
            { buttonText }
        </Button>
    )
}

export default PrimaryButton