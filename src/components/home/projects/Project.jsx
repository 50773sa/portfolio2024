// components
import PrimaryButton from '../../buttons/PrimaryButton'
// mui
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import Typography from '@mui/material/Typography'

const Project = ({ image, name, project, onClickProject }) => {

    const StyledCard = styled(Card)(() => ({
        aspectRatio: '4 / 3',
        padding: 0,
        cursor: 'default',
        borderRadius: '10px',
        background: theme.palette.bgColor.dark,
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
        inset: 0,
        position: 'absolute',
    }))

    return (
        <Grid xs={12} sm={6} md={4}>
            <StyledCard>
                <CardContent sx={{ p: 0, '&:last-child': { paddingBottom: 0 }, height: '100%' }}>   
                    <img    
                        src={image} 
                        alt={name}
                        style={{ 
                            height: '100%', 
                            width: '100%', 
                            objectFit: 'cover' 
                        }} 
                    /> 
                </CardContent>
                
                <OverlayDiv>
                    <Typography component='h3' variant='h6' sx={{ pb: 2 }}>
                        {name}
                    </Typography>
                    <PrimaryButton 
                        path={`/projects/${project.id}`} 
                        onClick={onClickProject} 
                        buttonText='View More' 
                    />
                </OverlayDiv> 

            </StyledCard>                  
        </Grid>
    )
}

export default Project