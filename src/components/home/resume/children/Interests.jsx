// components
import Heading4 from "./Heading4"
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
            <Heading4 title='Interests' />

            <Grid container xs={12} spacing={2} sx={{ mb: 7 }}>
                {resume
                    .map((data) => data.hobbies
                    .sort((a, b) => a.order - b.order)
                    .map((i) => (
                        <Grid
                            xs='auto'
                            key={i.title}
                            sx={{ display: "flex", alignItems: "start" }}
                        >
                            <div 
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                            >
                                <span style={bgCircle}>
                                    {i.title == "Crosswords" && <GridOnIcon />}
                                    {i.title == "Petting Animals" && <PetsIcon />}
                                    {i.title == "Interior Decor" && <ChairIcon />}
                                </span>

                                <Typography variant="caption" sx={{ whiteSpace: "nowrap", mt: 1 }}>
                                    {i.title}
                                </Typography>
                            </div>
                            
                        </Grid>
                    )))
                }
            </Grid>
        </>
    )    
}

export default Interests