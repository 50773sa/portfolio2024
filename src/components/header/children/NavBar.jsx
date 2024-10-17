import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
// components
import BurgerIcon from './navBarChildren/BurgerIcon'
// assets
import logo from '../../../assets/siteLogo.svg'
// mui
import Grid from '@mui/material/Unstable_Grid2/Grid2'

const links = [
    {title: 'Home', path: '/'},
    {title: 'Projects', path: '/projects'},
    {title: 'Resume', path: '/resume'},
    {title: 'Contact', path: '/contact'},
]

const NavBar = ({ theme }) => {
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
                height: 100, 
                px: {xs: 3, md: 10},
            }}
        >

            <Grid xs={10} sm={4} sx={{ display: 'flex', alignItems: 'center', height: '100%', py: 2.5}}>
                <Link to='/' style={{ height: '100%', width: 'auto' }}>
                    <img src={logo} alt='site logo' style={{ height: '100%', width: '100%' }}/>
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
                                color: isActive ? theme.palette.color.white : theme.palette.color.lightGrey 
                            }
                        }}
                    >
                        {link.title}
                    </NavLink>
                ))}
            </Grid>

            <Grid xs={2} sx={{ display: { xs: 'flex', sm: 'none', justifyContent: 'center' } }}>
                <BurgerIcon isOpen={isOpen} toggleDrawer={toggleDrawer} />
            </Grid>
            
            <Grid xs={3} sm={4} />

        </Grid>
    )
}

export default NavBar