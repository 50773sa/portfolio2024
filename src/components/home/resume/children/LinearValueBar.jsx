// mui
import { styled } from '@mui/material/styles'
import LinearProgress from '@mui/material/LinearProgress'

const StyledLinearBar = styled(LinearProgress)(() => ({
    borderRadius: 5,
    '& .css-5xe99f-MuiLinearProgress-bar1': { 
        borderRadius: 5 
    },
}))

const LinearValueBar = ({ skill }) => {
    return (
        <StyledLinearBar 
            variant="determinate" 
            value={skill.rating} 
        />
    )
}

export default LinearValueBar