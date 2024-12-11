// assets
import bgResume from '../../../../assets/bgResumeNew.png'

const BackgroundImage = () => {
    return (
        <div 
            style={{ 
                position: 'absolute', 
                inset: 0,
                width: '100%', 
                height: '100%', 
            }}
        >
            <img 
                src={bgResume} 
                alt="Decorative background image" 
                style={{ 
                    objectPosition: 'cover', 
                    objectFit: 'cover', 
                    width: '100%', 
                    height: '100%',
                }} 
            />
        </div>    
    )
}

export default BackgroundImage