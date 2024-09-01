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
                <SecondaryButton 
                    buttonText='Projects' 
                    path='/projects'
                    paddingRight
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