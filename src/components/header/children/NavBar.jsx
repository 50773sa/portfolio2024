import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
// components
import BurgerIcon from './navBarChildren/BurgerIcon'
import BurgerMenuDrawer from './BurgerMenuDrawer'
// assets
import logo from '../../../assets/siteLogo.svg'
// mui
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import Paper from '@mui/material/Paper'

const links = [
    {title: 'Home', path: '/', sectionId: ''},
    {title: 'About', path: '/about', sectionId: '#about'},
    {title: 'Projects', path: '/projects', sectionId: '#projects'},
    {title: 'Resume', path: '/resume', sectionId: '#resume'},
    {title: 'Contact', path: '/contact',  sectionId: '#contact'},
]

const NavBar = ({ theme }) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleScrollIntoViewNavLink = (sectionId) => {
        const element = document.getElementById(sectionId)

        if (element === null) {
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
        }

        if (element !== null) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const toggleDrawer = (e) => {
        if (e && e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift') ) {
            return
        }
        setIsOpen((prev) => !prev)  
    }

    return (
            <Paper
                elevation={0}
                square
                sx={{ 
                    height: 90, 
                    px: 0.5, // This is only used to remove shadow on the x-axis
                    mb: 4,
                    bgcolor: theme.palette.bgColor.dark,
                    position: 'sticky',
                    top: 0,
                    zIndex: 1000,
                }}
            >
            <Grid 
                container 
                sx={{ 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    px: {xs: 2.5, md: 9.5}, // 0.5px less because of the px of the parent above, and not allowed to use calc().
                    height: 'inherit', 
                    boxShadow: '0 3px 10px 0' + theme.palette.bgColor.dark,
                }}
            >
                <Grid xs={10} sm={4} sx={{ display: 'flex', alignItems: 'center', height: '100%', py: 2.5}}>
                    <Link to='/' style={{ height: '100%', width: 'auto' }}>
                        <img src={logo} alt='site logo' style={{ height: '100%', width: '100%' }}/>
                    </Link>
                </Grid>

                <Grid xs={0} sm={4} sx={{ display: { xs: 'none', sm: 'flex', justifyContent: 'start' } }}>
                    {links.map((link) => (
                        <NavLink 
                            key={link.title} 
                            to={link.path} 
                            onClick={() => handleScrollIntoViewNavLink(link.sectionId) }
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

                <Grid xs={2} sx={{ display: { xs: 'flex', sm: 'none', justifyContent: 'flex-end' } }}>
                    <BurgerIcon isOpen={isOpen} toggleDrawer={toggleDrawer} />
                    
                    <BurgerMenuDrawer
                        theme={theme}
                        isOpen={isOpen}
                        toggleDrawer={toggleDrawer}
                        links={links}
                        handleScrollIntoViewNavLink={handleScrollIntoViewNavLink}
                    />
                </Grid>

                <Grid xs={3} sm={4} />
           
            </Grid> 
        </Paper>
    )
}

export default NavBar