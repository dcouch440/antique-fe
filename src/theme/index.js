import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#3A86FF',
    },
    secondary: {
      main: '#D63230',
    },
    white: {
      main: '#ffffff',
      darker: '#fff5f5',
    },
    black: {
      main: '#212529',
      transparent: '#21252990',
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
  },
  typography: {
    families: {
      cursive: 'Pacifico, cursive',
    },
    sizes: {
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
