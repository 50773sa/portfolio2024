// mui
import Typography from '@mui/material/Typography'

const HeroText = ({ theme }) => {
    return (
        <>
            <Typography component='h1' sx={{ display: 'flex', flexDirection: 'column', textTransform: 'uppercase' }}>
                <Typography 
                    component='span' 
                    sx={{ 
                        fontSize: { xs: '1.5rem', sm: '2.5rem', md: '2.5rem' }, 
                        mb: {xs: -2, sm: -3} 
                    }}
                >
                    Sara 
                </Typography>
                <Typography 
                    component='span' 
                    sx={{ 
                        fontSize: { xs: '3rem', sm: '4.5rem', md: '5rem' }, 
                        fontWeight: 600 
                    }}
                >
                    Almqvist
                </Typography> 
            </Typography>

            <Typography 
                component='h2' 
                sx={{ 
                    fontSize: { xs: '0.8rem', sm: '1.2rem', md: '1.3rem' }, 
                    mb: -2 
                }}
            >
                <Typography 
                    component='span' 
                    variant='' 
                    sx={{ color: theme.palette.color.orange.light 
                    }}
                >
                    Front
                </Typography>
                 {' '} End Developer
            </Typography>

        </>
       
    )
}

export default HeroText