import { useState } from 'react'
// mui
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import Stepper from './Stepper'

const ProjectModalContent = ({  project }) => {
    const [imageIndex, setImageIndex] = useState(0)

    return (
        <Card key={project.name} id={project.id} sx={{ margin: 0, height: {xs: 'default', md: '350px'} }}>
            <Grid container>
                <Grid xs={12} sm={6} position='relative'>
                    <CardMedia
                        key={project.images[imageIndex]?.url}
                        component="img"
                        image={project.images[imageIndex]?.url}
                        alt={`View Image ${imageIndex + 1}`}
                        sx={{ margin: 0, height: {xs: '100%', md: '350px'} }}
                    /> 
                   
                    <Stepper
                        project={project}
                        imageIndex={imageIndex}
                        setImageIndex={setImageIndex}
                    />
                </Grid>
            </Grid>
        </Card>
    )
}

export default ProjectModalContent