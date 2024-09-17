// components
import PrimaryButton from '../../buttons/PrimaryButton'
// mui
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import Skeleton from '@mui/material/Skeleton'
import Typography from '@mui/material/Typography'

const PlaceholderCard = ({ image }) => {

    const StyledCard = styled(Card)(() => ({
        // width: '300px',
        width: '100%',
        minWidth: '200px',
        minHeight: '200px',
        padding: 0,
        cursor: 'default',
        background: '#636363',
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
        <Grid container spacing={4} justifyContent='center' mb={4}>
            {[...Array(6)].map((i) => (
                <Grid xs={12} sm={6} md={4} key={i}>
                    <StyledCard key={i}>
                        <CardContent sx={{ p: 0, '&:last-child': { p: 0 } }}>
                            {!image
                                ?   <Skeleton variant="rectangle" width='100%' height='100%' />
                                :   <img src={image} alt='' width='100%' height='100%' />
                            }
                        </CardContent>
                        
                        <OverlayDiv>
                            <Typography component='h3' variant='subtitle1' sx={{ pb: 2 }}>
                                Name
                            </Typography>
                            <PrimaryButton path='' buttonText='View More' />
                        </OverlayDiv> 

                    </StyledCard>  
                </Grid>
            ))}
        </Grid> 
    )
}

export default PlaceholderCard