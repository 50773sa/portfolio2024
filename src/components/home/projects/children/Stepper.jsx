// mui
import IconButton from '@mui/material/IconButton'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import MobileStepper from '@mui/material/MobileStepper'

    const Stepper = ({ project, imageIndex, setImageIndex, setIsNextLoaded }) => {
    const imgLength = project.images.length


    const handleNext = () => {
        setIsNextLoaded(false)

        // If you're on the last imgage - start over with index 0, otherwise show next image 
        const newIndex = imageIndex === imgLength -1 
            ? 0 
            : imageIndex + 1

        const nextImg = new Image()
        nextImg.src = project.images[newIndex].url

        nextImg.onload = () => {
            setImageIndex(newIndex)
            setIsNextLoaded(true)
        }
    }
  
    const handleBack = () => {
        setIsNextLoaded(false)

        // If you're on the first image - show the last image, otherwise show the previous image 
        const newIndex = imageIndex === 0 
            ? imgLength - 1 
            : imageIndex - 1

        const prevImg = new Image()
        prevImg.src = project.images[newIndex].url

        prevImg.onload = () => {
            setImageIndex(newIndex)
            setIsNextLoaded(true)
        }
    }
    
    return (
         <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0 }}>
            <MobileStepper
                variant="dots"
                steps={project.images.length}
                position="static"
                activeStep={imageIndex}
                sx={{ 
                    flexGrow: 1, 
                    bgcolor: 'inherit', 
                    '& .MuiMobileStepper-dots': {
                        position: 'absolute',
                        left: '45%' ,
                        bottom: '8px',
                    },
                    '& .MuiMobileStepper-dot': {
                        backgroundColor: '#ffffff6b'
                    },
                    '& .MuiMobileStepper-dotActive': {
                        backgroundColor: '#1976d2'
                    },
                }}
                nextButton={
                    <IconButton
                        aria-label='next'
                        size="small"
                        onClick={handleNext}
                        sx={{
                            backgroundColor: '#ffffff6b',
                            position: 'absolute',
                            right: '8px' ,
                            top: '44%',
                            '&:hover, &:focus': { backgroundColor: '#ffffffe8' },    
                        }}
                    >   
                        <KeyboardArrowRight sx={{ color: '#212121' }} />
                    </IconButton>
                }
                backButton={
                    <IconButton 
                        aria-label='previous'
                        size="small" 
                        onClick={handleBack}
                        sx={{
                            backgroundColor: '#ffffff6b',
                            position: 'absolute',
                            left: '8px' ,
                            top: '44%',
                            '&:hover, &:focus': { backgroundColor: '#ffffffe8' },
                        }}
                    >
                        <KeyboardArrowLeft sx={{ color: '#212121' }} />
                    </IconButton>
                }
            />
        </div>
    )
}

export default Stepper