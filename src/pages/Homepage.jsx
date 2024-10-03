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

const Homepage = () => {
    const [projects, setProjects] = useState([])
    const [technologies, setTechnologies] = useState([])
    const { getData } = useGetCollectionStore()
    const fetchProjects = () => projects.length == 0 && getData('projects')
    const fetchTechnologies = () => getData('techStack')
    const { data: allProjects, isLoading, isError } = useQuery('projects', fetchProjects)
    const { data: allTechnologies } = useQuery('techStack', fetchTechnologies)

    useEffect(() => {
        if(allProjects) {
            setProjects(allProjects)
        }
        if(allTechnologies) {
            setTechnologies(allTechnologies)
        }
        return
    }, [projects, allProjects, technologies, allTechnologies])
    

    return (  
        <>
            {isError && <p>An error occoured</p>}

            <Hero />
            <AboutSection />
            <TechStack techStack={technologies} isLoading={isLoading} />
            <Projects projects={projects} isLoading={isLoading} />
            <Contact />
            <Footer />
        </>
    )
}

export default Homepage