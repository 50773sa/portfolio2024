// components
import PageNotFound from "../components/error/PageNotFound"
// mui
import { useTheme } from "@mui/material"
import Container from "@mui/material/Container"

const NotFoundPage = () => {
    const theme = useTheme()
    return (
        <Container
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                position: 'relative',
            }}
        >
            <PageNotFound 
                theme={theme} 
            />
        </Container>

    )
}

export default NotFoundPage