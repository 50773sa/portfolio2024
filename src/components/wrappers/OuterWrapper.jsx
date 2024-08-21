import Container from '@mui/material/Container'

const OuterWrapper = ({ children }) => {
    return (
        <Container maxWidth='xl' disableGutters>
            { children }
        </Container>
    )
}

export default OuterWrapper