// components
import H2 from "./H2"
// mui
import ChairIcon from "@mui/icons-material/Chair"
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import GridOnIcon from '@mui/icons-material/GridOn'
import PetsIcon from '@mui/icons-material/Pets'
import Typography from "@mui/material/Typography"

const Interests = ({ resume, theme }) => {
 
    const bgCircle = {
        display: 'flex',
        justifyContent: 'center',
        border: `1px solid ${theme.palette.color.white}`,
        borderRadius: '50%',
        width: '46px',
        height: '46px',
        padding: 10,
    }

    return (
        <>
            <H2 title='Interests' />

            <Grid container gap={2} spacing={2}>
                {resume.map((data) => data.hobbies.map((i) => (
                    <Grid
                        key={i.title}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <span style={bgCircle}>
                            {i.title == "Crosswords" && <GridOnIcon />}
                            {i.title == "Animals" && <PetsIcon />}
                            {i.title == "Home decor" && <ChairIcon />}
                        </span>

                        <Typography variant="caption" sx={{ whiteSpace: "nowrap" }}>
                            {i.title}
                        </Typography>
                    </Grid>
                )))}
            </Grid>
        </>
    )    
}

export default Interests