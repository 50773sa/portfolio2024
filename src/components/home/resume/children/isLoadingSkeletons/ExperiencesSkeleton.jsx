// mui
import { styled } from "@mui/material"
import Box from "@mui/material/Box"
import Grid from '@mui/material/Grid'
import Skeleton from '@mui/material/Skeleton'

const ExperiencesSkeleton = () => {

    const StyledSkeleton = styled (Skeleton)(() => ({
            backgroundColor: 'grey'
    }))
    
    const styledResumeIcon = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    }

    return (
        <Grid container spacing={2} sx={{ justifyContent: 'center' }} size={12}>
            {/**
             *  Work-icon and divider
             */}
            <Grid sx={{ display: 'flex', flexWrap: 'nowrap' }} size='auto'>
                <Box
                    sx={{ 
                        display: 'flex',
                        flexDirection: "column", 
                        alignItems: "center",
                        height: '100%',
                        marginLeft: { xs: 0, sm: 4 },
                    }}
                >
                     
                    <div style={styledResumeIcon}>
                        <StyledSkeleton variant="circular" sx={{ height: 40, width: 40 }}/>
                    </div>

                    <StyledSkeleton sx={{ height: '100%' }}/>
                </Box>                        
            </Grid>
            <Grid
                size={{
                    xs: 8,
                    sm: 6,
                    md: 5
                }}>
                <StyledSkeleton variant="h5" sx={{ height: '16px', maxWidth: '30%',  mb: 0.5 }} />
                <StyledSkeleton variant="p"  sx={{ height: '14px', maxWidth: '40%', mb: 0.5 }} />
                <StyledSkeleton variant="p"  sx={{ height: '16px', maxWidth: '70%',  mb: '24px' }} />

                <StyledSkeleton variant="h5" sx={{ height: '16px', maxWidth: '20%',  mb: 0.5 }} />
                <StyledSkeleton variant="p" sx={{ height: '14px', maxWidth: '70%', mb: '24px' }} />
                
                <StyledSkeleton variant="h5" sx={{ height: '16px', maxWidth: '30%',  mb: 0.5 }} />
                <StyledSkeleton variant="p" sx={{ height: '60px', maxWidth: '70%', mb: '24px' }} />
            </Grid>
        </Grid>
    );
}

export default ExperiencesSkeleton