import React, { useState } from 'react'
// components
import CardActionBtns from './CardActionBtns'
import Stepper from './Stepper'
// mui
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import Typography from '@mui/material/Typography'

const ProjectModalContent = ({  project }) => {
    const theme = useTheme()
    const [imageIndex, setImageIndex] = useState(0)

    return (
        <Card 
            key={project.name} 
            id={project.id} 
            sx={{ 
                display: 'flex', 
                flexDirection: {xs: 'column', md: 'row'},
                margin: 0, 
                bgcolor: theme.palette.bgColor.medium,
                overflow: {xs: 'scroll', md: ''},
            }} 
        >
            {/**
             *  Images
             */} 

            <Box 
                sx={{ 
                    display: 'flex',
                    justifyContent: 'center', 
                    alignItems: 'center',
                    width: {xs: '100%', md: '50%'}, 
                    aspectRatio: 4 / 3,
                    bgcolor: theme.palette.bgColor.extraDark,
                    position: 'relative', 
                }}
            >
                <CardMedia
                    key={project.images[imageIndex]?.url}
                    component="img"
                    image={project.images[imageIndex]?.url}
                    alt={`View Image ${imageIndex + 1}`}
                    sx={{ height: 'auto', width: '100%', p: 3}}
                /> 
                <Stepper
                    project={project}
                    imageIndex={imageIndex}
                    setImageIndex={setImageIndex}
                />
            </Box>

            {/**
             * Title and description
             */}

            <Box 
                sx={{ 
                    width: {xs: '100%', md: '50%'}, 
                    minheight: '200px',  
                    overflowY: {xs: 'unset', md: 'scroll'}, 
                }}
            >
                <CardContent
                    sx={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        p: 4, 
                        mt: 2,
                    }}
                >                           
                    <Typography gutterBottom variant="h4" component="h2" sx={{ textAlign: 'center' }}>
                        {project.name}
                    </Typography>
                    
                    {project.teamProject && (
                        <Typography variant='caption' fontStyle='italic' gutterBottom mt={-1.5} mb={2}>
                            Team project during internship
                        </Typography>
                    )}
            
                    <Typography variant='body1' component="p" sx={{ textAlign: 'center', mb: 6 }}>
                        {project.description.en}
                    </Typography>

                    {/**
                     * Technologies
                     */}

                    <Typography component='h3' variant='h6' sx={{ textAlign: 'center' }} gutterBottom>
                        Tech & Tools
                    </Typography>

                    <Typography variant='body1' sx={{ textAlign: 'center', mb: 6 }}> 
                        {project.technologies.map((tech, i) => {
                            return (
                                <React.Fragment key={i}>
                                    {tech.name}{i < project.technologies.length - 1 ? ', ' : ''}
                                </React.Fragment>
                            )
                        })}
                    </Typography>

                    {/**
                     * Action buttons
                     */}                     

                    <Grid xs={12}>
                        <CardActionBtns
                            project={project} 
                            isCodeAvailable={project.link !== ''}
                        />
                    </Grid>
                </CardContent>
            </Box>
        </Card>
    )
}

export default ProjectModalContent