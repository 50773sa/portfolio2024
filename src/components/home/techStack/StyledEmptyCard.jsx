// mui
import { useTheme } from '@mui/material'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'


const StyledEmptyCard = ({ image, name }) => {
    const theme = useTheme()

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
        <StyledCard>
            <StyledCardContent>
                <div 
                    style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        flexBasis: '70%' 
                    }}
                >
                    <img src={image} alt={`${name}`+ ' logo'} width='50%' height='auto' />
                </div>
                <Typography 
                    component='span'
                    variant='subtitle1'
                    sx={{ 
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexBasis: '30%',
                        textAlign: 'center',
                        fontWeight: 500,
                        lineHeight: '1.1em',
                        fontSize: {xs: '0.8em', sm: ''},
                        color: theme.palette.color.black 
                    }}
                >
                    {name}
                </Typography>
            </StyledCardContent>
        </StyledCard>  
    )
}

export default StyledEmptyCard