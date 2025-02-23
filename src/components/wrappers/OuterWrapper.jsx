// mui
import { useTheme } from '@mui/material'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'

const OuterWrapper = ({ children }) => {
    const theme = useTheme()
    return (
        <Container maxWidth='lg' disableGutters sx={{ height: '100vh' }}>
            <Paper square elevation={8} sx={{ bgcolor: theme.palette.bgColor.extraDark }}>
                { children }
            </Paper>
        </Container>
    )
}

export default OuterWrapper