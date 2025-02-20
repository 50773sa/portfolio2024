// mui
import Typography from '@mui/material/Typography'

const HeroText = ({ theme }) => {
    return (
        <>
            <Typography 
                component='h1' 
                sx={{ display: 'flex', flexDirection: 'column', textTransform: 'uppercase' }}
            >
                <Typography 
                    component='span' 
                    variant='h3'
                    className='firstName'
                    sx={{ 
                        fontSize: { xs: '1.5rem', sm: '2.2rem', md: '2.5rem' }, 
                        mb: {xs: -2, sm: -3},
                    }}
                >
                    Sara 
                </Typography>
                <Typography 
                    component='span' 
                    className='lastName'
                    sx={{ 
                        fontSize: { xs: '3rem', sm: '4.5rem', md: '5rem' }, 
                        fontWeight: 800 
                    }}
                >
                    Almqvist
                </Typography> 
            </Typography>

            <Typography 
                component='p' 
                sx={{ 
                    fontSize: { xs: '1rem', sm: '1.1rem' }, 
                    mb: -2 ,
                }}
            >
                <Typography 
                    component='span' 
                    sx={{ 
                        color: theme.palette.color.orange.light,        
                    }}
                >
                    Front
                </Typography>
                 {' '} End Developer specializing in responsive web applications with JavaScript and ReactJS
            </Typography>
        </>
    )
}

export default HeroText