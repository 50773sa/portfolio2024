import { createTheme } from "@mui/material"
import { grey, orange } from "@mui/material/colors"

export const darkTheme = createTheme({
    palette: {
        color: {
            white: grey[50],
            orange: {
                light: orange[400],
                medium: '#b2741a',
                dark: '#92703F'
            },
            black: '#353434'
        },
    },
    typography: {
        allVariants: {
            color: grey[100]
        },
    },
    components: {
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    color: grey[100],
                },
            },
        },
    }, 
})