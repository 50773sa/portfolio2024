// components
import NavBar from './children/NavBar'
// mui
import { useTheme } from "@mui/material"

const Header = () => {
    const theme = useTheme()
    
    return (
        <NavBar theme={theme} />
    )
}

export default Header