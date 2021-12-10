import { createTheme } from '@mui/material/styles';

// until a better option is found, the custom namespace will need to be used.
declare module '@mui/material/styles' {
  interface Theme {
    custom: {
      palette: {
        secondary: {
          transparent: string;
        };
        antiqueWhite: {
          main: string;
          transparent: string;
          lessTransparent: string;
        };
      };
      typography: {
        families: {
          cursive: string;
        };
        sizes: {
          xs: number;
          sm: number;
          reg: number;
          lg: number;
        };
      };
    };
  }

  // allow configuration using `createTheme`
  interface ThemeOptions {
    custom: {
      palette: {
        secondary: {
          transparent: string;
        };
        antiqueWhite: {
          main: string;
          transparent: string;
          lessTransparent: string;
        };
      };
      typography: {
        families: {
          cursive: string;
        };
        sizes: {
          xs: number;
          sm: number;
          reg: number;
          lg: number;
        };
      };
    };
  }
}

const themeBase = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#171717',
      light: '#1d1d1d',
    },
  },
  typography: {
    fontFamily: 'sans-serif',
    button: {
      textTransform: 'none',
    },
  },
  spacing: 12,
  custom: {
    palette: {
      secondary: {
        transparent: '#21252983',
      },
      antiqueWhite: {
        main: '#FAEBD7',
        transparent: '#FAEBD723',
        lessTransparent: '#FAEBD753',
      },
    },
    typography: {
      sizes: {
        xs: 8,
        sm: 12,
        reg: 14,
        lg: 18,
      },
      families: {
        cursive: 'Pacifico, cursive',
      },
    },
  },
});

// for self theme use.
export const theme = createTheme(themeBase, {
  components: {
    MuiInput: {
      styleOverrides: {
        root: {},
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          [themeBase.breakpoints.down('sm')]: {},
        },
      },
    },
    MuiButton: {
      styleOverrides: {},
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
