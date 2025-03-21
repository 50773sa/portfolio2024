import Typography from '@mui/material/Typography'

const Heading4 = ({ title }) => {
    return (
        <Typography 
            component='h4' 
            variant='h5'
            fontWeight={400}
            paddingBottom={2}
        >
            {title}
        </Typography>
    )
}

export default Heading4