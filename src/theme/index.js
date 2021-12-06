import { createTheme } from '@mui/material/styles';

const themeBase = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#171717',
      lighter: '#1d1d1d',
      transparent: '#21252983',
      lessTransparent: '#000000cf',
    },
    antiqueWhite: {
      main: '#FAEBD7',
      transparent: '#FAEBD723',
      lessTransparent: '#FAEBD753',
    },
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
    },
  },
  spacing: 12,
});

export const theme = createTheme(themeBase, {
  components: {
    MuiInput: {
      styleOverrides: {
        root: {},
      },
    },
    MuiFab: {
      styleOverrides: {
        circle: {
          [themeBase.breakpoints.down('sm')]: {},
        },
      },
    },
  },
});

export const globalSX = {
  transparentBlur: {
    backgroundColor: 'secondary.transparent',
    backdropFilter: 'blur(12px)',
  },
  scrollContainer: {
    overflowY: 'scroll',
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': {
      display: 'none' /* for Chrome, Safari, and Opera */,
    },
  },
  fabDimension: {
    height: [36, 46, 64],
    width: [36, 46, 64],
  },
};
