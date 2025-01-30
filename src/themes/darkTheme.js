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
            black: '#353434'
        },
        bgColor: {
            light: '#4f4f4f',
            dark: '#353434',
            extraDark: '#1b1b1b',
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
                    backgroundColor: '#A17A45',
                    borderRadius: '20px',
                },
            },
        }
    }, 
})