// components
import H3 from "./H3"
// mui
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import Typography from "@mui/material/Typography"

const SoftSkills = ({ resume, theme }) => {

    return (
        <>
            <H3 title='Soft Skills' />

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
                            }}
                        >
                            <FiberManualRecordIcon sx={{ color: theme.palette.color.orange.medium, fontSize: '8px' }} />
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