import IconButton from "@mui/material/IconButton"

const BurgerIcon = ({ isOpen, toggleDrawer }) => {

    return (
        <IconButton
            onClick={toggleDrawer}
            sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', pr: 2 }}
            aria-controls={ isOpen ? 'menu' : undefined }
            aria-haspopup="true"
            aria-expanded={ isOpen ? 'true' : undefined }
            aria-label="open menu"
            disableRipple
        >
            <div id="burgerIcon" className={ isOpen ? 'open' : '' }>
                <span className='isDarkMode' />
                <span className='isDarkMode' />
                <span className='isDarkMode' />
            </div>  
        </IconButton>
    )
}

export default BurgerIcon