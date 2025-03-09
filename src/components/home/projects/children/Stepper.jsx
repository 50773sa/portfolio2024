// mui
import IconButton from '@mui/material/IconButton'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import MobileStepper from '@mui/material/MobileStepper'

const Stepper = ({ project, imageIndex, setImageIndex }) => {
    const imgLength = project.images.length

    const handleNext = () => {
        setImageIndex((prevImageIndex) => (
            prevImageIndex === imgLength -1
                ?  0 
                : prevImageIndex +1
        ))
    }
  
    const handleBack = () => {
        setImageIndex((prevImageIndex) => (
            prevImageIndex === 0 
                ? imgLength -1
                : prevImageIndex -1
        ))
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