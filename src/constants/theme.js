import { createTheme } from '@mui/material/styles';
import {primaryColor, secondaryColor, textColor} from './colors';

const theme = createTheme({
    palette: {
        primary: {
            main: primaryColor,
            contrastText: "#000000"
        },
        secondary: {
            main: secondaryColor,
            contrastText: "#000000"
        },
        text: {
            primary: textColor
        }
      }
    })
export default theme;    