import { useState } from "react"
// components
import AllProjectsButton from "./AllProjectsButton"
import LoadingImgSkeletons from "./children/LoadingImgSkeletons"
import Project from "./Project"
import ProjectModal from "./ProjectModal"
import SectionWrapper from "../SectionWrapper"
import TitleWithDescription from "../TitleWithDescription"
// mui
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import Grid from "@mui/material/Unstable_Grid2/Grid2"


const Projects = ({ projects, isLoading }) => {
    const [open, setOpen] = useState(false)
    const [project,  setProject] = useState({})
    const [expanded, setExpanded] = useState(false)

    const onClickProject = (project) => {
        setOpen(true)
        setProject(project)
    }

    const handleExpandClick = () => {
        setExpanded(!expanded)
    }

    return (
        <SectionWrapper bgcolor='light' sectionId='projects'>
            
            <TitleWithDescription 
                h2='Projects'
                paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae '
            />

            <Accordion 
                expanded={expanded} 
                elevation={0}
                sx={{ bgcolor: 'transparent' }}
            >     
                <AccordionSummary
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Grid container spacing={4} justifyContent='center'>
                        {isLoading && <LoadingImgSkeletons />}
                        
                        {projects.length !== 0 && projects.map((project, i) => {
                            project.images.sort((a, b) => a.order - b.order)
                            
                            if (!expanded && i >= 3) {
                                return null// Only show the first 3 projects if not expanded
                            }

                            return ( 
                                <Project 
                                    key={i} 
                                    image={project.images[0].url} 
                                    name={project.name}
                                    project={project}
                                    onClickProject={() => onClickProject(project)}
                                />     
                            )
                        })}

                        <Grid xs={12} textAlign='center'>
                            <AllProjectsButton 
                                onClick={handleExpandClick} 
                                buttonText={!expanded ? 'View More' : 'View Less'}
                                expanded={expanded}
                            />
                        </Grid>

                    </Grid>
                </AccordionSummary>
            </Accordion>
        
            {/**
             *   Modal
             */}

            {open && (
                <ProjectModal 
                    open={open} 
                    setOpen={setOpen} 
                    project={project}
                />
            )}
      
        </SectionWrapper>
    )
}

export default Projects