import { Link } from 'react-router-dom'
// mui
import { useTheme } from "@mui/material"
import Button from '@mui/material/Button'

const AllProjectsButton = ({ path, buttonText }) => {
    const theme = useTheme()
    const buttonColor = theme.palette.color.orange.light
    const buttonColorHover = theme.palette.color.orange.extraLight

    return (
        <Button 
            component={Link}
            to={path}
            variant='outlined' 
            sx={{ 
                width: '12rem',
                color: buttonColor, 
                bgcolor: 'transparent',
                border: `2px solid ${buttonColor}`,
                '&:hover': { 
                    padding: 0.5, // prevent 'jumping'
                    color: buttonColorHover,
                    border: `3px solid ${buttonColorHover}`,
                },
            }}  
        >
            { buttonText }
        </Button>
    )
}

export default AllProjectsButton