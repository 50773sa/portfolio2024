// mui
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import Skeleton from '@mui/material/Skeleton'

const TechStackImgSkeleton = () => {
   const StyledCard = styled(Card)(() => ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        aspectRatio: '4/4',
        cursor: 'default',
        borderRadius: '20px',
        background: 'linear-gradient(180deg, #636363, #C9C9C9)',
        boxShadow: 'rgba(255, 255, 255, 0.24) 0px 3px 8px',
    }))

    const StyledCardContent = styled(CardContent)(() => ({
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between', 
        height: '100%',  
        '&:last-child': {
            paddingBottom: 2, 
        },
    }))

    return (
        <>
            {Array(11).fill().map((_, i) => (
                <Grid xs={6} sm={4} md={3} key={i}>
                    <StyledCard>
                        <StyledCardContent>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: -10, flexBasis: '80%' }}>
                                <Skeleton variant="circular" width='70%' height='80%' />
                            </div>
                        </StyledCardContent>
                    </StyledCard>
                </Grid>
            ))}
        </>
    )
}

export default TechStackImgSkeleton