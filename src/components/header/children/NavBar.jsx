import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
// components
import BurgerIcon from './navBarChildren/BurgerIcon'
// assets
import logo from '../../../assets/logo.svg'
// mui
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2/Grid2'

const links = [
    {title: 'Home', path: '/'},
    {title: 'Projects', path: '/projects'},
    {title: 'Resume', path: '/resume'},
    {title: 'Contact', path: '/contact'},
]

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleDrawer = (e) => {
        if (e && e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift') ) {
            return
        }
        setIsOpen((prev) => !prev)  
    }

    return (
        <Grid 
            container 
            sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                bgcolor: '#f9f5f5',
                height: 50, 
                px: 2
            }}
        >
            <Grid xs={2} sx={{ display: { xs: 'flex', sm: 'none', justifyContent: 'center' } }}>
                <BurgerIcon isOpen={isOpen} toggleDrawer={toggleDrawer} />
            </Grid>

            <Grid xs={10} sm={4} sx={{ display: 'flex', alignItems: 'center', height: '100%', p: 0.5}}>
                <Link to='/' style={{ height: '100%', width: 'auto'}}>
                    <img src={logo} alt='site logo' style={{ height: '100%', width: '100%'}}/>
                </Link>
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
                        <Typography sx={{ color: '#000000' }}>
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