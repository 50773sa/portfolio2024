// mui
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'

const OuterWrapper = ({ children }) => {
    return (
        <Container maxWidth='lg' disableGutters sx={{ height: '100vh' }}>
            <Paper square elevation={8} sx={{ height: '100%', bgcolor: '#353434' }}>
                { children }
            </Paper>
        </Container>
    )
}

export default OuterWrapper