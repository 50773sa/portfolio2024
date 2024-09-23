// mui
import { useTheme } from '@mui/material'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import Skeleton from '@mui/material/Skeleton'
import Typography from '@mui/material/Typography'


const StyledEmptyCard = ({ logo, name }) => {
    const theme = useTheme()

    const StyledCard = styled(Card)(() => ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '200px',
        cursor: 'default',
        borderRadius: '40px',
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
        <Grid container spacing={4} justifyContent='center'>
            {[...Array(11)].map((i) => (
                <Grid xs={6} sm={4} md={3} key={i}>
                    <StyledCard>
                        <StyledCardContent>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: -10, flexBasis: '80%' }}>
                                {!logo
                                    ?   <Skeleton variant="circular" width={100} height={100} />
                                    :   <img  src='#' alt='' width='100%' height='100%' />
                                }
                            </div>
                            <Typography 
                                sx={{ 
                                    display: 'flex', 
                                    justifyContent: 'center', 
                                    flexBasis: '20%', 
                                    color: theme.palette.color.black 
                                }}
                            >
                                {name}
                            </Typography>
                        </StyledCardContent>
                    </StyledCard>  
                </Grid>
            ))}
        </Grid> 
    )
}

export default StyledEmptyCard