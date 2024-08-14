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
    }
})