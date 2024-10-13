// components
import NavBar from './children/NavBar'
import TopBar from './children/TopBar'
// mui
import { useTheme } from "@mui/material"

const Header = () => {
    const theme = useTheme()
    return (
        <>
            {/* <TopBar theme={theme} /> */}
            <NavBar theme={theme} />
        </>  
    )
}

export default Header