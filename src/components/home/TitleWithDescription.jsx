// mui
import Typography from '@mui/material/Typography'

const TitleWithDescription = ({ h2, paragraph }) => {
    return (
        <>
            <Typography component='h2' variant='h4' sx={{ textAlign: 'center', mb: 2 }}>
                { h2 }
            </Typography>

            <Typography component='p' variant='subtitle1' align='center'>
                { paragraph }
            </Typography>
        </>
    )
}

export default TitleWithDescription