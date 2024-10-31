import { useState } from "react"
// components
import AllProjectsButton from "./AllProjectsButton"
import LoadingImgSkeletons from "./children/LoadingImgSkeletons"
import Project from "./Project"
import SectionWrapper from "../SectionWrapper"
import TitleWithDescription from "../TitleWithDescription"
// mui
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import ProjectModal from "./children/ProjectModal"

const Projects = ({ projects, isLoading }) => {
    const [open, setOpen] = useState(false)
    const [project,  setProject] = useState({})

    const onClickProject = (project) => {
        setOpen(true)
        setProject(project)
    }

    return (
        <SectionWrapper bgcolor='light' sectionId='#projects'>
            <TitleWithDescription 
                h2='Projects'
                paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae '
            />
            <Grid container spacing={4} justifyContent='center' mb={4}>

                {isLoading && (
                    <LoadingImgSkeletons />
                )}

                {projects.length !== 0 && projects.map((project, i) => {
                    project.images.sort((a, b) => a.order - b.order)

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
            </Grid>

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

            <AllProjectsButton path='/projects' buttonText='View All Projects' />
        </SectionWrapper>
    )
}

export default Projects