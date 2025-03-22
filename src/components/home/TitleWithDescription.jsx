// mui
import { useTheme } from '@mui/material'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'

const TitleWithDescription = ({ h2, h3, paragraph }) => {
    const theme = useTheme()
    const styleMargin = paragraph.length !== 0 ? 2 : 7

    return (
        <>
            {h2 && (
                <>
                    <Typography 
                        component='h2' 
                        variant='h4' 
                        sx={{ 
                            textAlign: 'start', 
                            width: '100%',
                            mb: styleMargin, 
                            cursor: 'default', 
                            zIndex: 10 
                        }}
                    >
                        { h2 }
                    </Typography>
                    
                    {h2 == 'About' && (
                        <div style={{ display: 'flex' }}>
                            <Divider 
                                orientation='horizontal'
                                variant='fullWidth'
                                aria-hidden="true" 
                                sx={{
                                    display: { xs: 'none', md: 'inline-block' }, 
                                    bgcolor: theme.palette.color.orange.light,
                                    width: {  xs: '6%' },
                                    height: 3,
                                    mt: 1.3,
                                    mr: 2,
                                }}
                            />

                            <Typography 
                                component='p' 
                                variant='subtitle1' 
                                sx={{ textAlign: 'start', mb: 7, cursor: 'default' }}
                            >
                                { paragraph }
                            </Typography>
                        </div>
                    )}
                </>
            )}

            {h3 && (
                <>
                    <Typography component='h3' variant='h4' sx={{ textAlign: 'start', mb: 2, cursor: 'default', zIndex: 10 }}>
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