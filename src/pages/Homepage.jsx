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
    const { getData } = useGetCollectionStore()
    const fetchProjects = () => projects.length == 0 && getData('projects')
    const { data: allProjects, isLoading, isError } = useQuery('projects', fetchProjects)

    useEffect(() => {
        if(allProjects) {
            setProjects(allProjects)
        }
    }, [projects, allProjects])

    return (  
        <>
            {isError && <p>An error occoured</p>}

            <Hero />
            <AboutSection />
            <TechStack />
            <Projects projects={projects} isLoading={isLoading} />
            <Contact />
            <Footer />
        </>
    )
}

export default Homepage