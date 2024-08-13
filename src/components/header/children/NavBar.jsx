//mui
import Grid from '@mui/material/Unstable_Grid2/Grid2'

const NavBar = () => {
    const links = [
        {title: 'Home', path: '/'},
        {title: 'Projects', path: '/projects'},
        {title: 'Resume', path: '/resume'},
        {title: 'Contact', path: '/contact'},
    ]
    return (
        <Grid container>
            <Grid>
                Logo
            </Grid>
            <Grid>
                <ul>
                    {links.map((link) => (
                        <li key={link.title}>{link.title}</li>
                    ))}
                </ul>
            </Grid>
        </Grid>
        
    )
}

export default NavBar