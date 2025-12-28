// components
import Heading4 from "./Heading4"
// mui
import Grid from '@mui/material/Grid'
import Typography from "@mui/material/Typography"

const monthsEN = ["Jan", "Feb", "Mars", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]

const Education = ({ resume }) => {
    return (  
        <>
            <Heading4 title='Education' />

            <Grid container mb={3.7} spacing={2}>
                {resume.map((data) =>
                    data.educations.map((edu) => (
                        <Grid xs={12} key={edu.title}>
                            <Typography component='h4' sx={{ fontWeight: 600 }}>
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
                        </Grid>
                    ))
                )}  
            </Grid>
        </>
    )
}

export default Education