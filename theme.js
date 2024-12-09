'use client'

import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7F01D8',
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    fontFamily: 'Montserrat',
    h1: {
      fontSize: '30px',
      fontWeight: 'bold'
    },
    h6: {
      fontSize: '1.125rem'
    }
  },
  breakpoints: {
    values: {
      lg: 1300
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          background: 'linear-gradient(90deg, rgba(69, 102, 234, 0.98) 0%, rgba(153, 17, 243, 0.98) 100%)'
        }
      }
    },
  }
});

export default theme