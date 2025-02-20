// assets
import heroPhoto from '../../../assets/heroPhoto.png'
// components
import HeroText from './children/HeroText'
import PrimaryButton from '../../../components/buttons/PrimaryButton'
import SecondaryButton from '../../../components/buttons/SecondaryButton'
import SocialMediaIcons from './children/SocialMediaIcons'
// mui
import Box from '@mui/material/Box'

//! Explanation of the bug below.
/*  This div resolved a bug that prevented the URL from updating while scrolling.

    Issue: The sectionId "Home" wasn’t detected, causing the URL to stay on "about" when scrolling to the top.
    Cause of the Bug: The "Hero" element's "sticky" position.
    Solution: Add an empty div above the "Hero" element, without any position, to serve as a target that allows "Home" to register correctly. 
*/

const Hero = ({ theme }) => {

     const handleScrollIntoViewBtn = () => {
        const element = document.getElementById('projects')
        element.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            <div id='home' datasectionid='home' /> {/* //! DO NOT REMOVE. It solved a bug. See above. **/ }

            <Box  
                sx={{ 
                    position: 'sticky',
                    top: 0, 
                    height: '80dvh', 
                    maxHeight: '800px',
                    bgcolor: theme.palette.bgColor.dark, 
                }}
            >
                <Box sx={{ display: 'flex', flexDirection: {xs: 'column', sm: 'row'}, height: 'inherit', maxHeight: 'inherit' }}>
                    <Box 
                        sx={{ 
                            display: 'flex', 
                            flexDirection: 'column', 
                            justifyContent: 'center',
                            height: 'inherit', 
                            maxHeight: 'inherit',
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
                                onClick={handleScrollIntoViewBtn}
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
                            pl: {xs: 4, md: 10}, 
                            position: 'absolute',
                            right: 100,
                            bottom: 0,
                            zIndex: -20,
                        }}
                    >
                        <img src={heroPhoto} alt='Photo of Sara' height='100%' width='auto' />
                    </Box>

                    {/**
                        Social Media Icons
                    */}
                        
                    <SocialMediaIcons theme={theme} />
                </Box>
            </Box>
        </>
    )
}

export default Hero