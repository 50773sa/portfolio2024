// components
import NavBar from './children/NavBar'
import TopBar from './children/TopBar'
// mui
import { useTheme } from "@mui/material"
import Box from '@mui/material/Box'

const Header = () => {
    const theme = useTheme()
    return (
        <Box>
            <TopBar theme={theme} />
            <NavBar theme={theme} />
        </Box>  
    )
}

export default Header