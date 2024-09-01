import { Link } from 'react-router-dom'
// mui
import { useTheme } from "@mui/material"
import Button from '@mui/material/Button'

const PrimaryButton = ({ path, buttonText }) => {
    const theme = useTheme()
    const buttonColorLight = theme.palette.color.orange.light

    return (
        <Button 
            component={Link}
            to={path}
            variant='contained' 
            sx={{ 
                width: {xs: '100%', sm: '8.5rem'},
                color: 'inherit', 
                bgcolor: buttonColorLight,
                '&:hover': { 
                    bgcolor: '#ffbc59',
                }
            }}  
        >
            { buttonText }
        </Button>
    )
}

export default PrimaryButton