import { useEffect } from 'react'
import { useNavigate } from 'react-router'

const useSectionObserver = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const sections = document.querySelectorAll('[datasectionid]')

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const sectionId = entry.target.getAttribute('datasectionid')

                    if (entry.isIntersecting) {

                        // Update the URL with the section ID
                        if (sectionId !== 'home') {
                            navigate(sectionId, { replace: true })
                        } 
                        if(sectionId === 'home') {
                            navigate('/', { replace: true })
                        }
                    } 
                })
            },
            { threshold: 0.2 } // Observe when section is in view
        )

        sections.forEach((section) => observer.observe(section))

        // Clean up observer on component unmount
        return () => observer.disconnect()

    }, [navigate])
    
    return null
}

export default useSectionObserver