// components
import AboutSection from "../components/home/about/AboutSection"
import Hero from "../components/home/hero/Hero"
import Projects from "../components/home/projects/Projects"
import TechStack from "../components/home/techStack/TechStack"

const Homepage = () => {
    return (  
        <>
            <Hero />
            <AboutSection />
            <TechStack />
            <Projects />
        </>
    )
}

export default Homepage