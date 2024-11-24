// components
import H2 from "./H2"
import LinearValueBar from "./LinearValueBar"
// mui
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import Typography from "@mui/material/Typography"

const Languages = ({ resume }) => {
    return (
        <>
            <H2 title='Languages' />

            <Grid container alignItems="center" mb={7} spacing={1}>
                {resume.map((data) =>
                    data.languages.map((skill) => {
                        return (
                            <>
                                <Grid xs={6}>
                                    <Typography>
                                        {skill.title}
                                    </Typography>
                                </Grid>
                                <Grid xs={6}>
                                    <LinearValueBar skill={skill} />
                                </Grid>
                            </>
                        )
                    })
                )}
            </Grid>
        </>
    )
}

export default Languages