import { createTheme } from "@mui/material"
import { grey, orange } from "@mui/material/colors"

export const darkTheme = createTheme({
    palette: {
        color: {
            white: grey[50],
            orange: {
                light: orange[400],
                dark: '#b2741a'
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