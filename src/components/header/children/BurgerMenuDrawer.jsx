import { NavLink } from 'react-router-dom'
// mui
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'

const BurgerMenuDrawer = ({ theme, isOpen, toggleDrawer, links, handleScrollIntoViewNavLink }) => {
    return (
        <SwipeableDrawer
            anchor='right'
            open= {isOpen}
            onClose={toggleDrawer}
            onOpen={toggleDrawer}
            PaperProps={{ sx: { mt: 10, height: 'max-content', position: 'unset' }}}
        >
            <Box
                sx={{ width: '100vw', height: '100%', bgcolor: theme.palette.bgColor.dark }}
                role="presentation"
                onClick={toggleDrawer}
                onKeyDown={toggleDrawer}
            >
                {/**
                 * links
                 */}
                 
                <List>
                    {links.map((link) => (
                        <NavLink 
                            tabIndex={-1}
                            key={link.title} 
                            to={link.path}                             
                        >
                            {({ isActive }) => (
                                <ListItem 
                                    disablePadding 
                                    sx={{ bgcolor: isActive ? theme.palette.color.orange.dark : 'inherit' }}
                                >
                                    <ListItemButton 
                                        sx={{ textAlign: 'center' }}                             
                                        onClick={() => handleScrollIntoViewNavLink(link.sectionId)}
                                    >
                                        <ListItemText primary={link.title} />
                                    </ListItemButton>
                                </ListItem>
                        )}
                        </NavLink>
                    ))}
                </List>
            </Box>          
        </SwipeableDrawer>       
    )
}

export default BurgerMenuDrawer