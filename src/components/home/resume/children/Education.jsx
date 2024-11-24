// components
import H2 from "./H2"
// mui
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import Typography from "@mui/material/Typography"

const monthsEN = ["Jan", "Feb", "Mars", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]

const Education = ({ resume }) => {
    return (
         <>
            <H2 title='Education' />

            <Grid container alignItems="center" mb={7} spacing={1}>
                {resume.map((data) =>
                    data.educations.map((edu) => {
                        return (
                            <Grid xs={12} key={edu.title}>
                                <Typography sx={{ fontWeight: 600 }}>
                                    {edu.title}
                                </Typography>

                                <Typography sx={{ fontSize: 14, fontStyle: "italic" }}>
                                    {edu.school}
                                </Typography>

                                <Typography mb={2} sx={{ fontSize: 14 }}>
                                    {edu.city + ' '}
                                    [
                                        {monthsEN[edu.period.startMonth - 1]} {edu.period.startYear}
                                        - 
                                        {monthsEN[edu.period.endMonth - 1]} {edu.period.endYear}
                                    ]
                                </Typography>

                                <Typography sx={{ fontWeight: 500 }}>
                                    Technologies
                                </Typography>

                                <Typography>{edu.technologies}...</Typography>
                            </Grid>
                        )
                    })
                )}  
            </Grid>      
        </>
    )
}

export default Education