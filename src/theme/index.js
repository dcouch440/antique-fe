import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#C2C2C2',
    },
    secondary: {
      main: '#FF0000',
    },
    danger: {
      main: '#B86D6D',
    },
    white: {
      main: '#ffffff',
      darker: '#fff5f5',
      transparent: '#FFFFFF47',
    },
    black: {
      main: '#212529',
      transparent: '#21252983',
    },
    lightGray: {
      main: '#dddedf',
      darker: '#636363',
    },
    honeyYellow: {
      main: '#F6AE2D',
    },
    transparentWhite: {
      main: '#FFFFFF40',
    },
    backgroundColor: {
      main: '#ffffff',
    },
    antiqueWhite: {
      main: '#FAEBD7',
      transparent: '#FAEBD723',
      lessTransparent: '#FAEBD753',
    },
  },
  appStyles: {
    boxShadow:
      '0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)',
  },
  typography: {
    fontFamily: 'sans-serif',
    families: {
      cursive: 'Pacifico, cursive',
    },
    sizes: {
      reg: 14,
      xl: 46,
    },
  },
  components: {
    MuiInput: {
      styleOverrides: {
        root: {},
      },
    },
  },
  spacing: 12,
  radius: (radius) => radius * 12,
});
