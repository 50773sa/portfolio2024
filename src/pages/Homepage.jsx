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
import TechStack from "../components/home/techStack/TechStack"
// mui
import { useTheme } from '@mui/material'

const Homepage = () => {
    const theme = useTheme()
    const [about, setAbout] = useState([])
    const [projects, setProjects] = useState([])
    const [technologies, setTechnologies] = useState([])
    // Get data
    const { getData } = useGetCollectionStore()
    const fetchAbout = () => getData('about')
    const fetchProjects = () => projects.length == 0 && getData('projects')
    const fetchTechnologies = () => getData('techStack')
    // Query data
    const { data: allAbout, isLoading, isError} = useQuery('about', fetchAbout)
    const { data: allProjects } = useQuery('projects', fetchProjects)
    const { data: allTechnologies } = useQuery('techStack', fetchTechnologies)

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
        return
    }, [projects, allProjects, technologies, allTechnologies, about])
            console.log('about[]', about.map((i => i.photo)))
    

    return (  
        <>
            {isError && <p>An error occoured</p>}

            <Hero theme={theme} about={about} />
            <AboutSection theme={theme}/>
            <TechStack theme={theme} techStack={technologies} isLoading={isLoading} />
            <Projects theme={theme} projects={projects} isLoading={isLoading} />
            <Contact theme={theme} />
            <Footer theme={theme}/>
        </>
    )
}

export default Homepage