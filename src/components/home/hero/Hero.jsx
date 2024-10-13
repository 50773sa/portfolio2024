// components
import HeroText from './children/HeroText'
import PrimaryButton from '../../../components/buttons/PrimaryButton'
import SecondaryButton from '../../../components/buttons/SecondaryButton'
// mui
import Box from '@mui/material/Box'

const Hero = ({ theme }) => {
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
            {/**
                Text
             */}

            <Box 
                className='heroText'
                sx={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    alightItems: 'center', 
                    width: {xs: '100%', sm: '75%', md: '50%'}, 
                    px: {xs: 4, md: 20}, 
                }}

            >
                <HeroText theme={theme} />
            </Box>

            {/**
                Buttons 
            */}

            <Box 
                sx={{ 
                    display: 'flex', 
                    flexDirection: {xs: 'column', sm: 'row'}, 
                    px: {xs: 4, md: 20}, pt: 10 
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