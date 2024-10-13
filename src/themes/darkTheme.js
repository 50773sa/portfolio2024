import { createTheme } from "@mui/material"
import { grey, orange } from "@mui/material/colors"

export const darkTheme = createTheme({
    palette: {
        color: {
            white: grey[100],
            lightGrey: grey[500],
            orange: {
                extraLight: orange[300],
                light: '#d68f24',
                medium: '#b2741a',
                dark: '#A17A45',

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