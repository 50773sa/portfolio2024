import { createTheme } from "@mui/material"
import { grey, orange } from "@mui/material/colors"

export const darkTheme = createTheme({
    palette: {
        color: {
            white: grey[100],
            lightGrey: grey[500],
            orange: {
                extraLight: orange[300], // on hover
                light: '#d68f24', // buttons
                medium: '#b2741a', 
                dark: '#A17A45', // only for decorative purposes (not suitable for text (accessibility issues))
            },
            blue: '#246BD6',
            black: '#353434'
        },
        bgColor: {
            extraLight: '#FFFCF9',
            light: '#5c5c5c',
            medium: '#444444',
            dark: '#353434',
            extraDark: '#2f2e2e',
            orange: '#b2741a',
        }
    },
    typography: {
        allVariants: {
            color: grey[200],
        },
        h1: {cursor: 'default'},
        h2: {cursor: 'default'},
        h3: {cursor: 'default'},
        h4: {cursor: 'default'},
        h5: {cursor: 'default'},
        h6: {cursor: 'default'},
        body1: {cursor: 'default'},
        body2: {cursor: 'default'},
        subtitle1: {cursor: 'default'},
        subtitle2: {cursor: 'default'},
    },
    components: {
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    color: grey[200],
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    backgroundColor: '#d68f24',
                    borderRadius: '20px',
                },
            },
        }
    }, 
})