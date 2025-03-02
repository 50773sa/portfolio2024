// mui
import { useTheme } from '@mui/material'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'

const TitleWithDescription = ({ h2, h3, paragraph }) => {
    const theme = useTheme()
    return (
        <>
            {h2 && (
                <>
                    <Typography component='h2' variant='h4' sx={{ textAlign: 'start', width: '100%', mb: 2, cursor: 'default', zIndex: 10 }}>
                        { h2 }
                    </Typography>

                    <div style={{ display: 'flex' }}>
                        <Divider 
                            orientation='vertical'
                            aria-hidden="true" 
                            sx={{ 
                                bgcolor: theme.palette.color.orange.light,
                                height: {xs: '0.2rem', sm: '0.2rem'},
                                width: {xs: '4rem', sm: '4rem'},
                                mt: 1.5,
                                mr: 2
                            }}
                        />

                        <Typography component='p' variant='subtitle1' sx={{ textAlign: 'start', mb: 5, cursor: 'default' }}>
                            { paragraph }
                        </Typography>
                    </div>
                </>
            )}

            {h3 && (
                <>
                    <Typography component='h3' variant='h4' sx={{ textAlign: 'center', mb: 2, cursor: 'default', zIndex: 10 }}>
                        { h3 }
                    </Typography>

                    <Typography component='p' variant='subtitle1' sx={{ textAlign: 'center', mb: 5, cursor: 'default' }}>
                        { paragraph }
                    </Typography>
                </>
            )}
        </>
    )
}

export default TitleWithDescription