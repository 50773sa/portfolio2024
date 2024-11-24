// components
import H2 from "./H2"
// mui
import Divider from "@mui/material/Divider"
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import Typography from "@mui/material/Typography"
import WorkIcon from '@mui/icons-material/Work'

const months = ["Jan", "Feb", "Mars", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]

const Experiences = ({ theme, resume }) => {

const styledResumeIcon = {
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '50%',
    padding: 10,
    marginTop: 8,
    backgroundColor: theme.palette.bgColor.orange,
    boxShadow: '0px 0px 10px 2px' + theme.palette.color.orange.dark,
}
           
    return (
        <>
            <H2 title='Experiences' />
            
            <Grid container alignItems="center" spacing={1}>
                {resume.map((data) => data.experiences
                    .sort((a, b) => a.order - b.order)
                    .map((exp, i) => {
                        const startMonth = months[exp.period.start.month - 1]
                        const endMonth =  months[exp.period.end.month - 1]

                        const startYear = exp.period.start.year
                        const endYear = exp.period.end.year

                        return (
                            <Grid xs={12} key={i} display="flex">
                                <div 
                                    style={{
                                        display: "flex", 
                                        flexDirection: "column", 
                                        alignItems: "center", 
                                        marginRight: "16px", 
                                        marginBottom: '16px',
                                        paddingBottom: "50px",
                                    }}
                                >
                                    <div style={styledResumeIcon}>
                                        <WorkIcon />
                                    </div>
                                    <Divider orientation="vertical" variant="middle" aria-hidden="true" /> {/* aria hidden='true' = screen readers will skip this part. is used when the component is only for styling purposes */}
                                </div>

                                <div>
                                    {/**
                                     *  Company
                                     */}

                                    <Typography sx={{ fontWeight: 600 }}>
                                        {exp.company}
                                    </Typography>

                                    {/**
                                     *  Role
                                     */}

                                    <Typography sx={{ fontSize: 14, fontStyle: "italic" }}>
                                        {exp.title}
                                    </Typography>

                                    {/**
                                     *  City
                                     */}

                                    <Typography mb={2} sx={{ fontSize: 14 }}>
                                        {exp.city + " "}[{startMonth}
                                        {" " + startYear + " "}-{" " + endMonth + " " + endYear}]
                                    </Typography>

                                    {/**
                                     *  Case
                                     */}

                                    <Typography sx={{ fontWeight: 500 }}>
                                        Case
                                    </Typography>

                                    <Typography paragraph>
                                        {exp.description}
                                    </Typography>

                                    {/**
                                     *  Technologies
                                     */}

                                    <Typography sx={{ fontWeight: 500 }}>
                                        Technologies
                                    </Typography>

                                    <Typography paragraph>
                                        {exp.technologies}
                                    </Typography>
                                </div>
                            </Grid>
                        )
                    })
                )}
            </Grid>
        </>
    )
}

export default Experiences