import { useState } from 'react'
import Stepper from './Stepper'
// mui
import { useTheme } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import Typography from '@mui/material/Typography'

const ProjectModalContent = ({  project }) => {
    const theme = useTheme()
    const [imageIndex, setImageIndex] = useState(0)

    return (
        <Card key={project.name} id={project.id} sx={{ margin: 0, bgcolor: theme.palette.bgColor.light }} >
            <Grid container>
            
                <Grid xs={12} sm={6} position='relative'>
                    <CardMedia
                        key={project.images[imageIndex]?.url}
                        component="img"
                        image={project.images[imageIndex]?.url}
                        alt={`View Image ${imageIndex + 1}`}
                        sx={{ margin: 0, minHeight: {xs: '100%', md: '400px'} }}
                    /> 
                   
                    <Stepper
                        project={project}
                        imageIndex={imageIndex}
                        setImageIndex={setImageIndex}
                    />
                </Grid>

                <Grid xs={12} sm={6} p={2} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>

                    {/**
                     * Title and description
                     */}

                    <Grid xs={12}>
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'center'}}>
                            <Typography gutterBottom variant="h4" component="h2">
                                {project.name}
                            </Typography>
                            
                            {project.teamProject && (
                                <Typography variant='caption' fontStyle='italic' gutterBottom mt={-1.5} mb={2}>
                                    Team project during internship
                                </Typography>
                            )}
                    
                            <Typography variant='body2' component="p" sx={{ textAlign: 'center', overflowY: 'auto' }}>
                                {project.description.en}
                            </Typography>
                        </CardContent>
                    </Grid>
                    
                </Grid>
            </Grid>
        </Card>
    )
}

export default ProjectModalContent