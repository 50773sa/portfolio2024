// components
import H2 from "./H2"
// mui
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Typography from "@mui/material/Typography"

const monthsEN = ["Jan", "Feb", "Mars", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]

const Education = ({ resume }) => {
    return (
         <>
            <H2 title='Education' />

            <Grid container mb={7} spacing={1}>
                {resume.map((data) =>
                    data.educations.map((edu) => (
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

                            <List sx={{ display: 'flex', flexWrap: 'wrap', p: 0 }}>
                                {edu.technologies.map((technology, i) => (    
                                    <ListItem key={i} sx={{ width: 'max-content', p: 0, mr: 1  }}>
                                        <Typography> 
                                            {technology}
                                            {/* Comma is only displayed if the current index is not the last index */}
                                            {i < edu.technologies.length - 1 && ','}
                                            {/* '...' is only displayed if the current index is the last index */}
                                            {i == edu.technologies.length - 1 && '...'}
                                        </Typography>
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                    ))
                )}  
            </Grid>      
        </>
    )
}

export default Education