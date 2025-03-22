// mui
import Box from "@mui/material/Box"
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
        boxShadow: '0px 0px 5px 1px' + theme.palette.color.orange.dark,
        position: 'relative',
    }

    const styledBadge = {
        display: { xs: 'none', sm: 'flex' },
        color: theme.palette.color.white,
        backgroundColor: theme.palette.bgColor.light,
        marginTop: 1,
        padding: '10px 30px 10px 10px',
        minWidth: '111px',
        maxWidth: '120px',
        height: 'max-content',
        letterSpacing: 0.5,
        fontWeight: 300,
        borderRadius: '2px',
        clipPath: 'polygon(0 0, 75% 0%, 100% 50%, 75% 100%, 0% 100%)',
    }
           
    return (
        <>
            {resume.map((data) => data.experiences
                .sort((a, b) => a.order - b.order)
                .map((exp, i) => {
                    const startMonth = months[exp.period.start.month - 1]
                    const endMonth =  months[exp.period.end.month - 1]

                    const startYear = exp.period.start.year
                    const endYear = exp.period.end.year

                    return (
                        <Grid container spacing={2} key={i} sx={{ justifyContent: 'center' }}>

                            <Grid
                                xs='auto'
                                sx={{ display: 'flex', flexWrap: 'nowrap' }}
                            >   
                                {/**
                                 *  Badge
                                 */}

                                <Box sx={styledBadge}>
                                    {exp.period.weeks + ' ' + 'weeks'}
                                </Box>

                                {/**
                                 *  Work-icon and divider
                                 */}

                                <Box
                                    sx={{ 
                                        display: 'flex',
                                        flexDirection: "column", 
                                        alignItems: "center",
                                        height: '100%',
                                        marginLeft: { xs: 0, sm: 4 },
                                    }}
                                >
                                    <div style={styledResumeIcon}>
                                        <WorkIcon />
                                    </div>

                                    <Divider 
                                        orientation="vertical" 
                                        aria-hidden="true" /* aria hidden='true' = screen readers will skip this part. is used when the component is only for styling purposes */
                                        variant="middle" 
                                        sx={{ height: '70%' }}
                                    /> 
                                </Box>                        
                            </Grid>

                            <Grid xs={8} sm={6}>

                                {/**
                                 *  Company
                                 */}

                                <Typography component='h5' sx={{ fontWeight: 600 }}>
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

                                <Typography component='h5' sx={{ fontWeight: 500 }}>
                                    Case
                                </Typography>

                                <Typography paragraph>
                                    {exp.description}
                                </Typography>

                                {/**
                                 *  Technologies & tools
                                 */}

                                <Typography component='h5' sx={{ fontWeight: 500 }}>
                                    Technologies & Tools
                                </Typography>

                                <Typography paragraph>
                                    {exp.technologies}
                                </Typography>
                            </Grid>
                        </Grid>
                    )
                })
            )}
        </>
   
    )
}

export default Experiences