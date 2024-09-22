// components
import AboutSection from "../components/home/about/AboutSection"
import Contact from "../components/home/contact/Contact"
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
            <Contact />
        </>
    )
}

export default Homepage