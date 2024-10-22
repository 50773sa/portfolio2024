// components
import HeroText from './children/HeroText'
import PrimaryButton from '../../../components/buttons/PrimaryButton'
import SecondaryButton from '../../../components/buttons/SecondaryButton'
import SocialMediaIcons from './children/SocialMediaIcons'
// mui
import Box from '@mui/material/Box'

const Hero = ({ theme, about }) => {
const photoUrl = about.map(a => a.photo)

    return (
        <Box sx={{ display: 'flex', position: 'relative' }}>
            <Box 
                sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'center',
                    height: '80dvh', 
                    width: 'auto',
                    px: {xs: 4, md: 20}, 
                    my: 10,
                    zIndex: 10,
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
                        cursor: 'default'
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
                        pt: 10 
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

            {/**
                Photo
             */}
            
            <Box 
                sx={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center', 
                    height: '100%',
                    width: 'auto',
                    right: 0,
                    pl: {xs: 4, md: 10}, 
                    position: 'absolute',
                    zIndex: 2,
                }}
            >
                <img src={photoUrl} height='100%' />
            </Box>

            {/**
                Social Media Icons
             */}
                
            <SocialMediaIcons theme={theme} />
        </Box>
    )
}

export default Hero