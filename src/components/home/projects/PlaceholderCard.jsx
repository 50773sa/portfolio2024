// mui
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import Skeleton from '@mui/material/Skeleton'

const PlaceholderCard = ({ image }) => {

    const StyledCard = styled(Card)(() => ({
        height: '200px',
        width: '300px',
        cursor: 'default',
        background: '#636363',
        '&:hover div': {
            display: 'block',
        },
        position: 'relative',
    }))

    const OverlayDiv = styled('div')(() => ({
        display: 'none', 
        backgroundColor: '#00000090',
        inset: 0,
        position: 'absolute',
    }))

    return (
        <Grid container gap={4} justifyContent='center'>
            {[...Array(6)].map((i) => (
                <StyledCard key={i}>
                    <CardContent sx={{ '&:last-child': { padding: 0 } }}>
                        {!image
                            ?   <Skeleton variant="rectangle" width={300} height={200} />
                            :   <img src={image} alt='' width='100%' height='100%' />
                        }
                    </CardContent>
                    
                    <OverlayDiv>

                    </OverlayDiv> 

                </StyledCard>  
            ))}
        </Grid> 
    )
}

export default PlaceholderCard