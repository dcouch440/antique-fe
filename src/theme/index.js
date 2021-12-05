import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#171717',
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
      main: '#171717f7',
      transparent: '#21252983',
      lessTransparent: '#000000cf',
    },
    lightGray: {
      main: '#dddedf',
      darker: '#636363',
    },
    lightSkyBlue: {
      main: '#83C9F4',
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
    textShadow: '1px 1px 2px black',
  },
  typography: {
    fontFamily: 'sans-serif',
    families: {
      cursive: 'Pacifico, cursive',
    },
    sizes: {
      xs: 8,
      sm: 12,
      reg: 14,
      lg: 18,
      xl: 24,
      xxl: 46,
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

export const globalSX = {
  transparentBlur: {
    backgroundColor: 'black.transparent',
    backdropFilter: 'blur(12px)',
  },
  scrollContainer: {
    overflowY: 'scroll',
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': {
      display: 'none' /* for Chrome, Safari, and Opera */,
    },
  },
};
