// components
import PrimaryButton from '../../buttons/PrimaryButton'
// mui
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import Typography from '@mui/material/Typography'

const Project = ({ image, name, logo, project, onClickProject, theme }) => {

    const StyledCard = styled(Card)(() => ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
        aspectRatio: '4/4',
        cursor: 'pointer',
        borderRadius: '10px',
        background: theme.palette.bgColor.extraDark,
        '&:hover div': {
            display: 'flex',
        },
        position: 'relative',
    }))

    const OverlayDiv = styled('div')(() => ({
        display: 'none', 
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: '#00000099',
        position: 'absolute',
        inset: 0,
    }))

    return (
        <Grid xs={12} sm={6} md={4} sx={{ cursor: 'default' }}>
            <StyledCard>

                <Typography 
                    component='h3' 
                    variant='h6' 
                    sx={{ 
                        textAlign: 'center',
                        pb: 2, 
                        '&::before': { 
                            content: '""', 
                            backgroundImage: `url(${logo})`, 
                            display: 'inline-block', 
                            height: 34,
                            width: 34,
                            backgroundSize: 'contain',  
                            backgroundRepeat: 'no-repeat', 
                            textAlign: 'center', 
                            verticalAlign: 'middle',  
                            marginRight: '8px' 
                        } 
                    }}
                >
                    {name}
                </Typography>

                <CardContent 
                    sx={{
                        display: 'flex',
                        justifyContent: 'center', 
                        alignItems: 'center',
                        flexDirection: 'column',
                        width: '90%',
                        p: 0,
                        '&:last-child': { paddingBottom: 0 }, 
                    }}
                >
                    <img
                        className='dropShadow' 
                        src={image} 
                        alt={name}
                        style={{ 
                            height: '100%', 
                            width: '100%', 
                            objectFit: 'cover',
                        }} 
                    /> 
                </CardContent>
                
                <OverlayDiv>
                    <PrimaryButton 
                        path={`/projects/${project.id}`} 
                        onClick={onClickProject} 
                        buttonText='More Info' 
                    />
                </OverlayDiv> 

            </StyledCard>                  
        </Grid>
    )
}

export default Project