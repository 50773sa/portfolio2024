// components
import Heading4 from "./Heading4"
// mui
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import Typography from "@mui/material/Typography"

const SoftSkills = ({ resume, theme }) => {
    return (
        <>
            <Heading4 title='Soft Skills' />

            <Grid container alignItems="center" mb={7}>
                <Grid xs={12} display="flex" alignItems="center" flexWrap='wrap'>
                    {resume.map((data) => data.softSkills.map((i) => 
                        <div
                            key={i.skill}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                whiteSpace: "nowrap",
                                paddingBottom: '8px',
                            }}
                        >
                            <FiberManualRecordIcon sx={{ color: theme.palette.color.orange.medium, fontSize: '12px' }} />
                            <Typography px={1}>
                                {i.skill}
                            </Typography>
                        </div>
                    ))}
                </Grid>
            </Grid>
        </>
    )    
}

export default SoftSkills