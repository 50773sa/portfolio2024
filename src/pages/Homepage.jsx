import heroTitle from '../../src/assets/heroTitle.svg'
// components
import PrimaryButton from '../components/buttons/PrimaryButton'
// mui
import Box from '@mui/material/Box'

const Homepage = () => {

    return (  
        <Box 
            sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center',
                height: '100vh', 
                width: 'auto',
            }}
        >
            <Box 
                sx={{ 
                    display: 'flex', 
                    alightItems: 'center', 
                    width: {xs: '100%', sm: '75%', md: '50%'}, 
                    px: {xs: 4, md: 10}, 
                }}
            >
                <img 
                    src={heroTitle} 
                    alt='Page title: Sara Almqvist, Frontend Developer' 
                    width='100%'
                    height='100%'
                />
            </Box>

            <Box sx={{ px: {xs: 4, md: 10}, pt: 10 }}>
                <PrimaryButton  
                    buttonText='Contact Me' 
                    path='/contact'
                />
            </Box>

        </Box>
        
    )
}

export default Homepage