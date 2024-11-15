import { useState } from 'react'
// mui
import CardActions from '@mui/material/CardActions'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkIcon from '@mui/icons-material/Link'
import Typography from '@mui/material/Typography'

const CardActionBtns = ({ project, isCodeAvailable }) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <CardActions sx={{ display: 'flex', flexDirection: 'column' }}>

            {isCodeAvailable && (
                <Typography
                    component='a'
                    href={project.link} 
                    target='_blank' 
                    rel="noopener noreferrer"
                    sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        width: '100%', 
                        marginBottom: 1.5,
                        cursor: 'pointer'
                    }}
                    underline='none'
                    onMouseOver={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                > 
                    {!isHovered
                        ?   <GitHubIcon 
                                aria-label= 'Go to the GitHub repository'
                                sx={{ mr: 1, fontSize: '27px' }} 
                            /> 

                        :   <LinkIcon 
                                sx={{ 
                                    display: isHovered ? 'flex' : 'none', 
                                    rotate: '120deg', 
                                    fontSize: '27px',
                                    mr: 1,
                                }}
                            />
                    }
                        View the code
                </Typography>
            )}
        </CardActions>    
    )
}

export default CardActionBtns