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
    // Get data
    const { getData } = useGetCollectionStore()
    const fetchAbout = () => getData('about')
    const fetchProjects = () => getData('projects')
    const fetchTechnologies = () => getData('techStack')
    const fetchResume = () => getData('resume')
    // Query data
    const { data: about, isLoading: isLoadingAbout, isError} = useQuery('about', fetchAbout)
    const { data: projects, isLoading: isLoadingProjects } = useQuery('projects', fetchProjects)
    const { data: technologies, isLoading: isLoadingTechnologies } = useQuery('techStack', fetchTechnologies)
    const { data: resume, isLoading: isLoadingResume } = useQuery('resume', fetchResume)
    
    return (  
        <>
            {isError && <p>An error occoured</p>}

            <Hero theme={theme} />
            
            <div style={{ position: 'sticky', top: '80dvh', zIndex: 100 }}>
                {<AboutSection theme={theme} about={about} isLoading={isLoadingAbout} />}
                <TechStack theme={theme} techStack={technologies} isLoading={isLoadingTechnologies} />
                <Projects theme={theme} projects={projects} isLoading={isLoadingProjects} />
                <Resume theme={theme} resume={resume} isLoading={isLoadingResume} />
                <Contact theme={theme} about={about} isLoading={isLoadingAbout}/>
                <Footer theme={theme}/>
            </div>
        </>
    )
}

export default Homepage