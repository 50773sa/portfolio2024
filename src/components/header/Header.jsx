import Grid from '@mui/material/Unstable_Grid2'
import TopBar from './children/TopBar'
import NavBar from './children/NavBar'

const Header = () => {
    return (
        <Grid container flexDirection='column'>
            <TopBar />
            <NavBar />
        </Grid>  
    )
}

export default Header