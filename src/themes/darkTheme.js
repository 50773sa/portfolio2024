import { createTheme } from "@mui/material"
import { grey, orange } from "@mui/material/colors"

export const darkTheme = createTheme({
    palette: {
        color: {
            white: grey[100],
            lightGrey: grey[500],
            orange: {
                light: orange[400],
                medium: '#b2741a',
                dark: '#92703F'
            },
            black: '#353434'
        },
        bgColor: {
            light: '#4f4f4f',
            dark: '#353434',
            orange: '#b2741a',
        }
    },
    typography: {
        allVariants: {
            color: grey[200]
        },
        
    },
    components: {
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    color: grey[200],
                },
            },
        },
    }, 
})