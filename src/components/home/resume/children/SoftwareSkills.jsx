// components
import Heading4 from "./Heading4"
import LinearValueBar from "./LinearValueBar"
// mui
import Grid from '@mui/material/Grid'
import Typography from "@mui/material/Typography"

const SoftwareSkills = ({ resume }) => {
    return (
        <>
            <Heading4 title='Software Skills' />

            <Grid container alignItems="center" mb={7} spacing={1}>
                {resume.map((data) =>
                    <>
                        {data.softwareSkills.map((skill) => (
                            <>
                                <Grid xs={6}>
                                    <Typography>{skill.title}</Typography>
                                </Grid>
                                <Grid xs={6}>
                                    <LinearValueBar skill={skill} />
                                </Grid>
                            </>
                        ))}
                        <Grid sx={{ mt: 1 }}>
                            <Typography>{data.softwareSkillsOther}...</Typography>
                        </Grid>
                        
                    </>
                )}
            </Grid>
        </>
    )
}

export default SoftwareSkills