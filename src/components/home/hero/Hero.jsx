import heroTitle from '../../../assets/heroTitle.svg'
// components
import PrimaryButton from '../../../components/buttons/PrimaryButton'
import SecondaryButton from '../../../components/buttons/SecondaryButton'
// mui
import Box from '@mui/material/Box'

const Hero = () => {
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
            {/* Page Title */}

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

            {/* Buttons */}

            <Box 
                sx={{ 
                    display: 'flex', 
                    flexDirection: {xs: 'column', sm: 'row'}, 
                    px: {xs: 4, md: 10}, pt: 10 
                }}
            >
                <SecondaryButton 
                    buttonText='Projects' 
                    path='/projects'
                    marginRight
                />

                <PrimaryButton  
                    buttonText='Contact Me' 
                    path='mailto:sara.lm.almqvis@gmail.com'
                />
            </Box>

        </Box>
    )
}

export default Hero