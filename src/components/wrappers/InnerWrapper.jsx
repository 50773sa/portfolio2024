// mui
import Container from '@mui/material/Container'

const InnerWrapper = ({ children }) => {
    return (
        <Container sx={{ px: 2 }} disableGutters>
            { children }
        </Container>
    )
}

export default InnerWrapper