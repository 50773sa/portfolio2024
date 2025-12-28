// components
import Heading4 from "./Heading4"
import LinearValueBar from "./LinearValueBar"
// mui
import Grid from '@mui/material/Grid'
import Typography from "@mui/material/Typography"

const Languages = ({ resume }) => {
    return (
        <>
            <Heading4 title='Languages' />
            <Grid container alignItems="center" mb={7} spacing={1}>
                {resume.map((data) =>
                    data.languages.map((skill) => {
                        return (
                            <>
                                <Grid size={6}>
                                    <Typography>
                                        {skill.title}
                                    </Typography>
                                </Grid>
                                <Grid size={6}>
                                    <LinearValueBar skill={skill} />
                                </Grid>
                            </>
                        );
                    })
                )}
            </Grid>
        </>
    );
}

export default Languages