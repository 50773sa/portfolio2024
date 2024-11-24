import Typography from '@mui/material/Typography'

const H2 = ({ title }) => {
    return (
        <Typography 
            component='h2' 
            variant='h5'
            fontWeight={400}
            paddingBottom={2}
        >
            {title}
        </Typography>
    )
}

export default H2