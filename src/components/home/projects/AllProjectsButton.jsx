// mui
import { useTheme } from "@mui/material"
import Button from '@mui/material/Button'
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded'
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded'


const AllProjectsButton = ({ buttonText, expanded, onClick }) => {
    const theme = useTheme()
    const buttonColor = theme.palette.color.orange.light
    const buttonColorHover = theme.palette.color.orange.extraLight

    return (
        <Button 
            onClick={onClick}
            variant='outlined' 
            sx={{ 
                width: {xs: '100%', sm: '9.5rem'},
                color: buttonColor, 
                bgcolor: 'transparent',
                border: `2px solid ${buttonColor}`,
                whiteSpace: 'pre', // no break whitespace
                '& svg': { color: buttonColor }, // icons
                '&:hover': { 
                    paddingY: 0.5, // prevent 'jumping'
                    color: buttonColorHover,
                    border: `3px solid ${buttonColorHover}`,
                    '& svg': {
                        color: buttonColorHover, 
                    },
                },
            }}  
        >
            { buttonText } 
            { !expanded 
                ? <ExpandMoreRoundedIcon  /> 
                : <ExpandLessRoundedIcon />
            }
        </Button>
    )
}

export default AllProjectsButton