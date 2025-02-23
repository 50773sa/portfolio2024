import Typography from '@mui/material/Typography'

const H3 = ({ title }) => {
    return (
        <Typography 
            component='h3' 
            variant='h5'
            fontWeight={400}
            paddingBottom={2}
        >
            {title}
        </Typography>
    )
}

export default H3