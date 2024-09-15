import { Link } from 'react-router-dom'
// mui
import { useTheme } from "@mui/material"
import Button from '@mui/material/Button'

const AllProjectsButton = ({ path, buttonText }) => {
    const theme = useTheme()
    const buttonColorLight = theme.palette.color.orange.light

    return (
        <Button 
            component={Link}
            to={path}
            variant='outlined' 
            sx={{ 
                width: '12rem',
                color: buttonColorLight, 
                bgcolor: 'transparent',
                border: `1px solid ${buttonColorLight}`,
                '&:hover': { 
                    padding: 0.5,// prevent 'jumping'
                    border: `2px solid ${buttonColorLight}`,
                },
            }}  
        >
            { buttonText }
        </Button>
    )
}

export default AllProjectsButton