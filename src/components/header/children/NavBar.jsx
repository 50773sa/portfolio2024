import { NavLink } from 'react-router-dom'
//mui
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2/Grid2'


const NavBar = () => {
    const links = [
        {title: 'Home', path: '/'},
        {title: 'Projects', path: '/projects'},
        {title: 'Resume', path: '/resume'},
        {title: 'Contact', path: '/contact'},
    ]

    return (
        <Grid container alignItems='center' justifyContent='center' height={50}>

            <Grid xs={12} sm={4}>
                Logo
            </Grid>

            <Grid xs={0} sm={4} sx={{ display: { xs: 'none', sm: 'flex', justifyContent: 'center' } }}>
                {links.map((link) => (
                    <NavLink 
                        key={link.title} 
                        to={link.path} 
                        style={({ isActive }) => {
                            return {
                                margin: '0 8px',
                                color: 'inherit',
                                textDecoration: isActive ? 'underline' : ''
                            }
                        }}
                    >
                        <Typography>
                            {link.title}
                        </Typography>
                    </NavLink>
                ))}
            </Grid>
            
            <Grid xs={3} sm={4} />

        </Grid>
    )
}

export default NavBar