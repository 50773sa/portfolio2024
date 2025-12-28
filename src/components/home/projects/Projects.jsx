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
import Grid from '@mui/material/Grid'


const Projects = ({ theme, projects, isLoading }) => {
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
        <SectionWrapper bgcolor='extraDark' sectionId='projects'>
            <TitleWithDescription 
                h3='Projects'
                paragraph="Here, you'll find a selection of work that showcases the skills and knowledge I've developed along the way."
            />
            <Accordion
                expanded={expanded} 
                elevation={0}
                sx={{ bgcolor: 'transparent', width: '100%' }}
            >     
                <AccordionSummary
                    aria-controls="panel2-content"
                    id="panel2-header"
                    tabIndex={-1}
                    sx={{ p: 0 }}
                    component='div'
                >
                    <Grid container spacing={4} justifyContent='center' sx={{ width: '100%' }}>
                        {isLoading && <LoadingImgSkeletons />}
                        
                        {!isLoading && projects
                            .sort((a, b) => a.order - b.order)
                            .map((project, i) => {
                                project.images.sort((a, b) => a.order - b.order)
                                
                                if (!expanded && i >= 6) {
                                    return null// Only show the first 6 projects if not expanded
                                }

                                return ( 
                                    <Project 
                                        key={i} 
                                        image={project.images[0].url} 
                                        name={project.name}
                                        logo={project.logo}
                                        project={project}
                                        onClickProject={() => onClickProject(project)}
                                        onPressEnter={((e) => e.key == 'Enter' && onClickProject(project) )} 
                                        theme={theme}
                                    />     
                                )
                        })}

                        <Grid textAlign='center' size={12}>
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
    );
}

export default Projects