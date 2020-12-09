import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({


    typography: {
        fontFamily: [
            'Montserrat',
        ]
    },
    palette: {
        primary: {
            main: '#FF9E58',
        },
        secondary: {
            main: '#C1DEEB',
        },
        tertiary: {
            main: '#FFAC00',
        },
    },

    overrides: {
        MuiCssBaseline: {
            "@global": {
                body: {
                    backgroundImage: "url('https://designshack.net/wp-content/uploads/gradient-background.jpg')",
                },
            },
        },
        MuiButton: {
            label: {
                fontSize: 16,
            }
        }
    }
  });

export default theme