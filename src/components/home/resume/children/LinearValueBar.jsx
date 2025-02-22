// mui
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'

const LinearValueBar = ({ skill }) => {
    const theme = useTheme()

    const StyledLinearBar = styled(LinearProgress)(() => ({
        borderRadius: 5,
        color: theme.palette.color.lightGrey,
        backgroundColor: theme.palette.bgColor.light,
        '& .css-5xe99f-MuiLinearProgress-bar1': { 
            borderRadius: 5 
        },
    }))

    const CircleIndicator = styled('div')(({ theme }) => ({
        width: 15,
        height: 15,
        borderRadius: '50%',
        backgroundColor: theme.palette.color.white,
        border: `5px solid ${theme.palette.color.lightGrey}`,
        position: 'absolute',
        top: '50%',
        transform: 'translate(-50%, -50%)', // Center it vertically
    }))

    const calculatePosition = (rating) => {
        // Convert the rating value into a percentage of the bar's width
        return `${rating}%`
    }

    return (
        <Box sx={{ position: 'relative' }}>
            <StyledLinearBar 
                aria-label='value'
                variant="determinate" 
                color='inherit'
                value={skill.rating} 
            />
            {/* Circle at the specific value */}
            <CircleIndicator
                style={{
                    left: calculatePosition(skill.rating),
                }}
            />
        </Box>
    )
}

export default LinearValueBar