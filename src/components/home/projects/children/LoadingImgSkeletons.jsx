// mui
import Grid from '@mui/material/Grid'
import Skeleton from '@mui/material/Skeleton'

const LoadingImgSkeletons = () => {
    return (
        <Grid container spacing={4} justifyContent='center' mb={4} px={2} width='100%'>
            {Array(6 ).fill().map((_, i) => (
                <Grid
                    key={i}
                    size={{
                        xs: 12,
                        sm: 6,
                        md: 4
                    }}>
                    <Skeleton 
                        variant="rectangle" 
                        sx={{ 
                            width: '100%',
                            height: '100%',
                            aspectRatio: 4 / 4,
                        }}
                    />
                </Grid>
            ))}
        </Grid>
    );
}

export default LoadingImgSkeletons