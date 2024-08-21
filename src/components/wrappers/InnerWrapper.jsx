import Container from '@mui/material/Container'

const InnerWrapper = ({ children }) => {
    return (
        <Container maxWidth='lg'>
            { children }
        </Container>
    )
}

export default InnerWrapper