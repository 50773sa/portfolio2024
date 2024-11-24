import { useEffect, useState } from 'react'
import { useQuery } from "react-query"
// stores
import useGetCollectionStore from '../store/useGetCollectionStore'
// components
import AboutSection from "../components/home/about/AboutSection"
import Contact from "../components/home/contact/Contact"
import Footer from "../components/Footer"
import Hero from "../components/home/hero/Hero"
import Projects from "../components/home/projects/Projects"
import Resume from '../components/home/resume/Resume'
import TechStack from "../components/home/techStack/TechStack"
// mui
import { useTheme } from '@mui/material'

const Homepage = () => {
    const theme = useTheme()
    const [about, setAbout] = useState([])
    const [projects, setProjects] = useState([])
    const [technologies, setTechnologies] = useState([])
    const [resume, setResume] = useState([])
    // Get data
    const { getData } = useGetCollectionStore()
    const fetchAbout = () => getData('about')
    const fetchProjects = () => projects.length == 0 && getData('projects')
    const fetchTechnologies = () => getData('techStack')
    const fetchResume = () => getData('resume')
    // Query data
    const { data: allAbout, isLoading, isError} = useQuery('about', fetchAbout)
    const { data: allProjects } = useQuery('projects', fetchProjects)
    const { data: allTechnologies } = useQuery('techStack', fetchTechnologies)
    const { data: allResumes } = useQuery('resume', fetchResume)

    useEffect(() => { 
        if(allAbout) {
            setAbout(allAbout)
        }
        if(allProjects) {
            setProjects(allProjects)
        }
        if(allTechnologies) {
            setTechnologies(allTechnologies)
        }
        if(allResumes) {
            setResume(allResumes)
        }
        return
    }, [projects, allProjects, technologies, allTechnologies, about, resume, allResumes])
    
    return (  
        <>
            {isError && <p>An error occoured</p>}

            <Hero theme={theme} about={about} />
            
            <div style={{ position: 'sticky', top: '80dvh', zIndex: 100 }}>
                <AboutSection theme={theme}/>
                <TechStack theme={theme} techStack={technologies} isLoading={isLoading} />
                <Projects theme={theme} projects={projects} isLoading={isLoading} />
                <Resume theme={theme} resume={resume} isLoading={isLoading} />
                <Contact theme={theme} />
                <Footer theme={theme}/>
            </div>
        </>
    )
}

export default Homepage