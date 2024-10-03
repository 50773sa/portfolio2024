// mui
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import Skeleton from '@mui/material/Skeleton'

const LoadingImgSkeletons = () => {
    return (
        <Grid container spacing={4} justifyContent='center' mb={4} px={2}>
            {Array(6).fill().map((_, i) => (
                <Grid xs={12} sm={6} md={4} key={i}>
                    <Skeleton 
                        variant="rectangle" 
                        sx={{ 
                            minWidth: '200px', 
                            minHeight: '175px',
                        }}
                    />
                </Grid>
            ))}
        </Grid>
    )
}

export default LoadingImgSkeletons