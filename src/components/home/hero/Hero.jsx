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
        <Box sx={{ position: 'sticky', top: 0, height: '80dvh', bgcolor: theme.palette.bgColor.dark, }}>
            <Box sx={{ display: 'flex', flexDirection: {xs: 'column', sm: 'row'}, height: 'inherit'}}>
                <Box 
                    sx={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'center',
                        height: 'inherit', 
                        width: 'auto',
                        px: {xs: 4, md: 20}, 
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
                            pt: 10,
                            zIndex: 1000
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
                        height: '100%',
                        width: 'auto',
                        right: 0,
                        bottom: 0,
                        pl: {xs: 4, md: 10}, 
                        position: 'absolute',
                        zIndex: -20,
                    }}
                >
                    <img src={photoUrl} alt='Photo of Sara' height='100%' width='auto' />
                </Box>

                {/**
                    Social Media Icons
                */}
                    
                <SocialMediaIcons theme={theme} />
            </Box>
        </Box>
    )
}

export default Hero