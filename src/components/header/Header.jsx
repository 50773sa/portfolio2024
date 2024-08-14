// components
import TopBar from './children/TopBar'
import NavBar from './children/NavBar'
// mui
import { useTheme } from "@mui/material"
import Box from '@mui/material/Box'

const Header = () => {
    const theme = useTheme()
    return (
        <Box>
            <TopBar theme={theme} />
            <NavBar />
        </Box>  
    )
}

export default Header